[![npm version](https://badge.fury.io/js/redis-rejson.svg)](https://badge.fury.io/js/redis-rejson)

# ReJSON Module plugin for node_redis

This package allows [node_redis](https://github.com/NodeRedis/node_redis) (2.8+) to interface with the Redis module [ReJSON](http://rejson.io/).

To use this module, you will need Redis 4.0 or higher and the rejson module installed.

## Usage

```
const
  redis = require('redis'),
  rejson = require('redis-rejson');

rejson(redis); /* important - this must come BEFORE creating the client */

let client = redis.createClient({ password: 'yourredispassword' });

client.json_set('my-json', '.', '{"test":1234}', function (err) {
  if (err) { throw err; }
  console.log('Set JSON at key 'my-json'.');
  client.json_get('my-json', '.test', function (err, value) {
    if (err) { throw err; }
    console.log('value of test:', value); //outputs 1234
    client.quit();
  });
});

```

The ReJSON commands will be mapped to javascript-friendly names (`JSON.GET` becomes `client.json_get`).
