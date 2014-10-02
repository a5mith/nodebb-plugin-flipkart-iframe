var
    user = require('../../src/user'),
    iframe = {},
    embed = '<iframe src="$1"></iframe> ';

user.isAdministrator(function(module) {
    "use strict";

    if(isAdmin) {
        iframe.parse = function(postContent, callback) {
            postContent = postContent.replace(/iframe=\w+/gm, embed);
            callback(null, postContent);
        };
    }
    if(!isAdmin) {
        return callback;
    }


    module.exports = iframe;
}(module));