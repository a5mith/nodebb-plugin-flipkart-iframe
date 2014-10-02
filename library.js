var
    user = require('../../src/user'),
    iframe = {},
    embed = '<iframe src="$1"></iframe> ';

user.isAdministrator(function(module) {
    "use strict";

    if(user.isAdministrator) {
        iframe.parse = function(postContent, callback) {
            postContent = postContent.replace(/iframe=\w+/gm, embed);
            callback(null, postContent);
        };
    }
    if(!user.isAdministrator) {
        return callback;
    }


    module.exports = iframe;
}(module));