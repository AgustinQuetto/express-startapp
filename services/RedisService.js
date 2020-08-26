const config = require("../config");
const redis = require("redis");

class RedisService {
    constructor() {
        console.log("REDIS CONFIG: ", config.redis);
        this.client = redis.createClient(config.redis.port, config.redis.url);
    }

    async get(key) {
        return new Promise((resolve, reject) => {
            this.client.get(key, (err, data) => {
                if (err) return reject(err);
                return resolve(data);
            });
        });
    }

    async set(
        key,
        value,
        timeUnit = "EX",
        valueTime = parseInt(+new Date() / 1000) + 86400
    ) {
        return await this.client.set(key, value, timeUnit, valueTime);
    }

    cleanKeys() {
        this.client.keys("*", (err, keys) => {
            keys.forEach(key => {
                this.client.ttl(key, (err, data) => {
                    if (data <= -1) {
                        this.client.del(key);
                    }
                });
            });
        });
    }
}

module.exports = RedisService;
