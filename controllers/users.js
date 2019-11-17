'use strict';

module.exports = function(_) {
    return {
        SetRouting: function(router) {
            router.get('/')
        },

        indexPage: function(res, req) {
            return res.render('index', {
                test: 'this is a test'
            });
        }
    }
};