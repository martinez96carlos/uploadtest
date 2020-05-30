const { Pool } = require('pg');

const pool = new Pool({
    host: 'ec2-34-195-169-25.compute-1.amazonaws.com',
    database: 'd5jlqojdg7lrhm',
    user: 'fdevkbaiodubzx',
    password: 'a03def1fcadb6bcb7cb110b34b0e2e1d89c9e3912872df164b2302bd6d4c974a',
    port: '5432'
});



// var parse = require('pg-connection-string').parse;
// var config = parse('postgres://mgyywgfdwefwid:67debdcd23a1e1c2e9a6ef8d48f128bb9df44807e55b3b9b7179d6b5fbd36a9d@ec2-34-197-141-7.compute-1.amazonaws.com:5432');

// const pool = new Pool({
//     connectionString: config
// });

module.exports = pool;