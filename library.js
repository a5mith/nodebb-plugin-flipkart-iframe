(function(module) {
    "use strict";

    var flipkart = {},
        embed = '<iframe class="flipkart" src="http://www.flipkart.com/affiliate/displayWidget?affrid=$1" frameborder=0></iframe>';


    flipkart.parse = function(postContent, callback) {
        postContent = postContent.replace(/<a href="(?:https?:\/\/)?(?:www\.)flipkart\.com\/affiliate\/displayWidget\?(?:[^"]*&)?affrid=([\w\-_]+).+<\/a>/ig, embed);
        callback(null, postContent);
    };

    module.exports = flipkart;
}(module));