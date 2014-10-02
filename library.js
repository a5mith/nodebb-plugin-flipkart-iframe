(function(module) {
    "use strict";

    var iframe = {},
        embed = '<iframe src="$1"></iframe> ';


    user.isAdministrator(function(err, isAdmin) {
        if(isAdmin) {
            iframe.parse = function(postContent, callback) {
                postContent = postContent.replace(/iframe=\w+/gm, embed);
                callback(null, postContent);
            };
        }
        if(!isAdmin) {
            return callback;
        }

    });


    module.exports = iframe;
}(module));