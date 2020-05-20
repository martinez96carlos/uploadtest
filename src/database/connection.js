const { Pool } = require('pg');

const pool = new Pool({
    host: 'ec2-34-230-149-169.compute-1.amazonaws.com',
    database: 'decvpbnu7ei866',
    user: 'dkhtmgizrgtyfd',
    password: '90e2ea02b58b0b81863faa5f69cdb258c054e3575d7b4e6d23b4c758efaefddb',
    port: '5432'
});



// var parse = require('pg-connection-string').parse;
// var config = parse('postgres://mgyywgfdwefwid:67debdcd23a1e1c2e9a6ef8d48f128bb9df44807e55b3b9b7179d6b5fbd36a9d@ec2-34-197-141-7.compute-1.amazonaws.com:5432');

// const pool = new Pool({
//     connectionString: config
// });

module.exports = pool;