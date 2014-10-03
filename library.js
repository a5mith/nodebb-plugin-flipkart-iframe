(function(module) {
    "use strict";

    var flipkart = {},
        embed = '<iframe src="http://www.flipkart.com/affiliate/displayWidget?affrid=$1"></iframe>';


    flipkart.parse = function(postContent, callback) {
        postContent = postContent.replace(/<a href="(?:http?:\/\/)?(?:www\.)flipkart\.com\/affiliate\/displayWidget\?affrid\=([\w\-_]+)">.+<\/a>/g, embed);
        callback(null, postContent);
    };

    module.exports = flipkart;
}(module));