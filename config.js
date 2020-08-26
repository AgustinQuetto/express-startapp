const env = process.env;
const self = {};

self.version = "1.0";

self.port = getConfig(env.PORT, 3000);

self.mongodb = {
    ip: getConfig(env.MONGODB_IP, `localhost`),
    port: getConfig(env.MONGODB_PORT, `27017`),
    user: getConfig(env.MONGODB_USER, ``),
    password: getConfig(env.MONGODB_PASSWORD, ``),
    database: getConfig(env.MONGODB_DATABASE, `example`),
};

self.endpoints = {};

self.redis = {
    url: getConfig(env.REDISURL, "redis", "127.0.0.1"),
    port: getConfig(env.REDISPORT, 6379),
};

self.s3 = {
    credentials: {
        accessKeyId: getConfig(env.S3ACCESSKEYID, ""),
        secretAccessKey: getConfig(env.S3SECRETACCESSKEY, ""),
    },
};

self.loggly = {
    subdomain: getConfig(env.LOGGLYSUBDOMAIN, ""),
    token: getConfig(env.LOGGLYTOKEN, ""),
};

self.mongodbConnectionString = `mongodb://${self.mongodb.user}${
    self.mongodb.password ? ":" + self.mongodb.password : ""
}${self.mongodb.user || self.mongodb.password ? "@" : ""}${self.mongodb.ip}:${
    self.mongodb.port
}/${self.mongodb.database}`;

function getConfig(processValue, productionValue, developValue, localValue) {
    if (processValue) return processValue;
    const value =
        process.env.NODE_ENV === `production`
            ? productionValue
            : process.env.NODE_ENV === `develop`
            ? developValue || productionValue
            : localValue || developValue || productionValue;
    if (typeof value === `undefined`) {
        console.log(`config value undefined`);
    }
    return value;
}

module.exports = self;
