require("dotenv").config();
const Docker = require("dockerode");
const docker = new Docker();
const redis = require("redis");
const redisClient = redis.createClient({ host: "redis" });

docker.getEvents({}, (err, data) => {
  if (data) {
    data.on("data", data => {
      const { id, status, from, Type, Action, time, timeNano, Actor } = JSON.parse(
        data.toString("utf8")
      );
      redisClient.hmset(id, [
        "status",
        status,
        "from",
        from,
        "Type",
        Type,
        "time",
        time,
        "timeNano",
        timeNano,
        "Actor",
        JSON.stringify(Actor)
      ]);
    });
  }
});