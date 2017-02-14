var Waterline = require('waterline');
module.exports = Waterline.Collection.extend({

    identity: 'post',
    connection: 'mysql',

    attributes: {
        ID: {
            type: 'integer',
            primaryKey:true,
        },

        title: {
            type: 'string'
        },

        author: {
            type: 'string'
        },

        url: {
            type: 'string'
        },

        content: {
            type: 'string'
        },
    }
});