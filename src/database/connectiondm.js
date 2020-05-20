const { Pool } = require('pg');

const pooldm = new Pool({
    host: 'ec2-34-230-149-169.compute-1.amazonaws.com',
    database: 'dbr2995tn6qgk8',
    user: 'gxrxjqzohcruqw',
    password: 'ddd4e4d6560e7004ec8013e0cd6ff9e63a53d6d28c186ad9195f3dc594a59a53',
    port: '5432'
});

module.exports = pooldm;
