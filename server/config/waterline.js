/**
 * Created by duking on 2016/12/28.
 */
var Waterline = require('waterline');
var mysqlAdapter = require('sails-mysql');


// models
var User = require('../app/models/User');
var Post = require('../app/models/Post');

var orm = new Waterline();
var wlconfig = {
    adapters: {
        'default': mysqlAdapter,
        mysql: mysqlAdapter
    },
    connections: {
        'mysql': {
            adapter: 'mysql',
            host: 'localhost',
            user: 'root',
            password: '123456',
            chartset:'utf8',
            database:'db_blog'
        }
    }
};
orm.loadCollection(User);
orm.loadCollection(Post);

exports.orm = orm;
exports.config = wlconfig;
