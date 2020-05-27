const { Pool } = require('pg');

const pool = new Pool({
    host: 'ec2-52-207-25-133.compute-1.amazonaws.com',
    database: 'dcmn6a9ph4kq9h',
    user: 'chqtbzvcvocoqe',
    password: '950604f96a4fac360093c3722007ba6c4425079e6280d18b3fd16b1bb89d37c7',
    port: '5432'
});



// var parse = require('pg-connection-string').parse;
// var config = parse('postgres://mgyywgfdwefwid:67debdcd23a1e1c2e9a6ef8d48f128bb9df44807e55b3b9b7179d6b5fbd36a9d@ec2-34-197-141-7.compute-1.amazonaws.com:5432');

// const pool = new Pool({
//     connectionString: config
// });

module.exports = pool;