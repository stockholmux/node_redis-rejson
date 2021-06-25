const Redis = require('redis');
const test = require('ava');
const { addReJSONModule } = require('../dist');

addReJSONModule(Redis);

// Create client
test.before(t => {
  t.context.c = Redis.createClient();
});

// Close connection to client
test.after(t => {
  t.context.c.quit();
});

// Set key
test.cb('set key', t => {
  t.context.c.json_set('my_key', '.', JSON.stringify({ value: 1000 }), (error, reply) => {
    t.is(error, null);
    t.is(reply, 'OK');
    t.end();
  });
});

// Get whole object
test.cb('get whole object', t => {
  t.context.c.json_get('my_key', (error, reply) => {
    t.is(error, null);
    t.is(reply, '{"value":1000}');
    t.end();
  });
});

// Get whole object + provide path
test.cb('get whole object + provide path', t => {
  t.context.c.json_get('my_key', '.value', (error, reply) => {
    t.is(error, null);
    t.is(reply, '1000');
    t.end();
  });
});

// Check the field's type
test.cb('check the field\'s type', t => {
  t.context.c.json_type('my_key', '.', (error, reply) => {
    t.is(error, null);
    t.is(reply, 'object');
    t.end();
  });
});

// Check json keys
test.cb('check json keys', t => {
  t.context.c.json_objkeys('my_key', '.', (error, reply) => {
    t.is(error, null);
    t.deepEqual(reply, ['value']);
    t.end();
  });
});

// Delete object
test.cb('delete object', t => {
  t.context.c.json_del('my_key', '.', (error, reply) => {
    t.is(error, null);
    t.is(reply, 1);
    t.end();
  });
});

// Check strappend
test.cb('check strappend', t => {
  t.context.c.json_set('my_string_key', '.', JSON.stringify({ string: 'Hello' }));
  t.context.c.json_strappend('my_string_key', '.string', JSON.stringify(' world!'), (error, reply) => {
    t.is(error, null);
    t.is(reply, 12);
  });
  t.context.c.json_get('my_string_key', '.', (error, reply) => {
    t.is(error, null);
    t.is(reply, '{"string":"Hello world!"}');
  });
  t.context.c.json_del('my_string_key', '.', (error, reply) => {
    t.is(error, null);
    t.is(reply, 1);
    t.end();
  });
});

// Check numincrby
test.cb('check numincrby', t => {
  t.context.c.json_set('my_key', '.', JSON.stringify({ value: 1 }));
  t.context.c.json_numincrby('my_key', '.value', 10, (error, reply) => {
    t.is(error, null);
    t.is(reply, '11');
    t.end();
  });
});

// Check nummultby
test.cb('check nummultby', t => {
  t.context.c.json_set('my_key', '.', JSON.stringify({ value: 1 }));
  t.context.c.json_nummultby('my_key', '.value', 10, (error, reply) => {
    t.is(error, null);
    t.is(reply, '10');
    t.end();
  });
});

// Check mget
test.cb('check mget', t => {
  t.context.c.json_mget('my_key', 'invalid_key', 'yet_another_invalid_key', '.', (error, reply) => {
    t.is(error, null);
    t.deepEqual(reply, ['{"value":10}', null, null]);
    t.end();
  });
});

// Check arrtrim
test.cb('check arrtrim', t => {
  t.context.c.json_set('my_key', '.', JSON.stringify({ value: [0, 1, 2, 3, 4, 5] }));
  t.context.c.json_arrtrim('my_key', '.value', 100, 200, (error, reply) => {
    t.is(error, null);
    t.is(reply, 0);
    t.end();
  });
});

// Check arrpop
test.cb('check arrpop', t => {
  t.context.c.json_set('my_key', '.', JSON.stringify({ value: [0, 1, 2, 3, 'FORTH_POSITION', 5] }));
  t.context.c.json_arrpop('my_key', '.value', 4, (error, reply) => {
    t.is(error, null);
    t.is(reply, '"FORTH_POSITION"');
    t.end();
  });
});

// Check arrinsert
test.cb('check arrinsert', t => {
  t.context.c.json_set('my_key', '.', JSON.stringify({ value: [0, 1, 2, 3, 'FORTH_POSITION', 5] }));
  t.context.c.json_arrinsert('my_key', '.value', 6, JSON.stringify(6), (error, reply) => {
    t.is(error, null);
    t.is(reply, 7);
    t.end();
  });
});

// Check arrindex
test.cb('check arrindex', t => {
  t.context.c.json_set('my_key', '.', JSON.stringify({ value: [0, 1, 2, 3, 'FORTH_POSITION', 5] }));
  t.context.c.json_arrindex('my_key', '.value', 2, (error, reply) => {
    t.is(error, null);
    t.is(reply, 2);
    t.end();
  });
});

// Check arrappend
test.cb('check arrappend', t => {
  t.context.c.json_set('my_key', '.', JSON.stringify({ value: [0, 1, 2, 3, 'FORTH_POSITION', 5] }));
  t.context.c.json_arrappend('my_key', '.value', 6, (error, reply) => {
    t.is(error, null);
    t.is(reply, 7);
    t.end();
  });
});