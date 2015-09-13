var buttons = require('sdk/ui/button/action');
var panels = require("sdk/panel");
var self = require("sdk/self");
var tabs = require("sdk/tabs");

var newsfeed = panels.Panel({
  width: 450,
  height: 500,
  contentURL: self.data.url("popup.html"),
  contentScriptFile: [self.data.url("jquery.js"),self.data.url("moment.js"),self.data.url("popup.js")]
});


var button = buttons.ActionButton({
  id: "GitHubLatest",
  label: "Helps you find Up & Coming Projects on Github.",
  icon: {
    "16": "./img/icon56.png",
    "32": "./img/icon56.png"
  },
  onClick: popup 
})


function popup(){
  newsfeed.show({ position: button });
 };

exports.main = function (options, callbacks) {
    if(options.loadReason === 'install' || options.loadReason === 'upgrade') {
      tabs.open("options.html");
    }
};

newsfeed.port.on("linkClicked", function (text) {
  tabs.open(text);
});
