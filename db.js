const Pool = require('pg').Pool;
const config = require('config');


const pool = new Pool(config.get('postgres'));

module.exports = pool;