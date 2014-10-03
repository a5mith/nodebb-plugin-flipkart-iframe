(function(module) {
    "use strict";

    var flipkart = {},
        embed = '<iframe class="flipkart" src="http://www.flipkart.com/affiliate/displayWidget?affrid=$1" frameborder=0></iframe>';


    flipkart.parse = function(postContent, callback) {
        postContent = postContent.replace(/<a href="(?:http?:\/\/)?(?:www\.)flipkart\.com\/affiliate\/displayWidget\?affrid\=([\w\-_]+)">.+<\/a>/g, embed);
        callback(null, postContent);
    };

    module.exports = flipkart;
}(module));