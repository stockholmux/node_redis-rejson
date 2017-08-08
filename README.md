# ReJSON Module plugin for node_redis

This package allows [node_redis](https://github.com/NodeRedis/node_redis) (2.8+) to interface with the Redis module [ReJSON](http://rejson.io/).

To use this module, you will need Redis 4.0 or higher and the rejson module installed.

## Usage

```
var
   redis       = require('redis'),
   rejson      = require('redis-rejson');

rejson(redis);
```

The ReJSON commands will be mapped to javascript-friendly names (`JSON.GET` becomes `client.json_get`).