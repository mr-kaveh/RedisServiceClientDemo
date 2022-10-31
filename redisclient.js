const redis = require("redis");
// Creates a new Redis client
// In the workflow we are going ot set If REDIS_HOST and REDIS_
PORT
const redisClient = redis.createClient({
host: process.env.REDIS_HOST,
port: process.env.REDIS_PORT
});