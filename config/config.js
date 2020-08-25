require('dotenv').config();

module.exports = {
    development: {
        username: "root",
        password: process.env.DBPASSWORD, /// process.env.password
        database: "Employee_management",
        host: "127.0.0.1",
        dialect: "mysql"
    },
    production: {
		use_env_variable: 'JAWSDB_URL',
		dialect: 'mysql',
	},
};

// sedding
