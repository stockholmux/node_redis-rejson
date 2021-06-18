[![Actions Status](https://github.com/stockholmux/node_redis-rejson/workflows/CI/badge.svg)](https://github.com/stockholmux/node_redis-rejson/actions)
[![npm version](https://badge.fury.io/js/redis-rejson.svg)](https://badge.fury.io/js/redis-rejson)

# RedisJSON Module plugin for node_redis

This package allows [node_redis](https://github.com/NodeRedis/node_redis) (2.8+) to interface with the Redis module [RedisJSON](http://rejson.io/).

To use this module, you will need Redis 4.0 or higher and the rejson module installed.

## Usage

```js
const
  redis = require('redis'),
  rejson = require('redis-rejson');

rejson(redis); /* important - this must come BEFORE creating the client */

let client = redis.createClient();
let my_json_key = 'my_json';
client.json_set(my_json_key, '.', '{"test":1234}', function (err) {
  if (err) { throw err; }
  console.log('Set JSON at key ' + my_json_key + '.');
  client.json_get(my_json_key, '.test', function (err, value) {
    if (err) { throw err; }
    console.log('value of test:', value); //outputs 1234
    client.quit();
  });
});


```

The RedisJSON commands will be mapped to javascript-friendly names (`JSON.GET` becomes `client.json_get`).
