const config = require("../config");
const AWS = require("aws-sdk");
const fs = require("fs");
const get = require("lodash").get;

class FileService {
    toBase64(path) {
        return new Promise((resolve, reject) => {
            fs.readFile(path, (err, data) => {
                if (err) {
                    console.log(err);
                    return resolve("");
                } else {
                    let file_content = data.toString("base64");
                    return resolve(file_content);
                }
            });
        });
    }
}

module.exports = FileService;
