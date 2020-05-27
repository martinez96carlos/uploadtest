const { Pool } = require('pg');

const pool = new Pool({
    host: 'ec2-34-230-149-169.compute-1.amazonaws.com',
    database: 'd4inrv75on17d5',
    user: 'pnrcdxkrcfhoei',
    password: 'ce9a52e6808319f3afe8990a98aed3ce6c24884263dfe5ab02f5b907fdbdcba7',
    port: '5432'
});



// var parse = require('pg-connection-string').parse;
// var config = parse('postgres://mgyywgfdwefwid:67debdcd23a1e1c2e9a6ef8d48f128bb9df44807e55b3b9b7179d6b5fbd36a9d@ec2-34-197-141-7.compute-1.amazonaws.com:5432');

// const pool = new Pool({
//     connectionString: config
// });

module.exports = pool;