__d(function(e,n,s,i){"use strict";var t=n(238),l=n(55),a=(n(50),n(54)),c=n(22),r=new l,o=!1,d={},h=function(){function e(){babelHelpers.classCallCheck(this,e)}return babelHelpers.createClass(e,null,[{key:"set",value:function(e){if(e&&e.windowPhysicalPixels){e=JSON.parse(JSON.stringify(e));var n=e.windowPhysicalPixels;e.window={width:n.width/n.scale,height:n.height/n.scale,scale:n.scale,fontScale:n.fontScale};var s=e.screenPhysicalPixels;e.screen={width:s.width/s.scale,height:s.height/s.scale,scale:s.scale,fontScale:s.fontScale},delete e.screenPhysicalPixels,delete e.windowPhysicalPixels}babelHelpers.extends(d,e),o?r.emit("change",{window:d.window,screen:d.screen}):o=!0}},{key:"get",value:function(e){return c(d[e],"No dimension set for key "+e),d[e]}},{key:"addEventListener",value:function(e,n){c("change"===e,'Trying to subscribe to unknown event: "%s"',e),r.addListener(e,n)}},{key:"removeEventListener",value:function(e,n){c("change"===e,'Trying to remove listener for unknown event: "%s"',e),r.removeListener(e,n)}}]),e}();h.set(t.Dimensions),a.addListener("didUpdateDimensions",function(e){h.set(e)}),s.exports=h},237);