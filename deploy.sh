#! /bin/bash
echo "Desactivo CI"
unset CI

echo "Comprimo y subo al server"
zip -r /tmp/example.zip . -x node_modules\*
scp -r /tmp/example.zip ubuntu@$DEPLOY_HOST:/home/ubuntu/Projects/example.zip

ssh ubuntu@$DEPLOY_HOST 'cd /home/ubuntu/Projects; sudo rm -rf example; unzip -o example.zip -d example;'

echo "Stash, pull and build"
ssh ubuntu@$DEPLOY_HOST 'cd /home/ubuntu/Projects/example; sudo docker-compose -f docker-compose.yml up -d --build;'

#echo "Remove zip and folder"
ssh ubuntu@$DEPLOY_HOST 'cd /home/ubuntu/Projects; rm -rf example.zip; rm -rf example;'

echo "Removing orphan images"
ssh ubuntu@$DEPLOY_HOST 'sudo docker rmi -f $(sudo docker images -a -q --filter "dangling=true")'
ssh ubuntu@$DEPLOY_HOST 'sudo docker rm $(sudo docker ps -a -q --filter status=exited)'

echo "Success!"

exit 0