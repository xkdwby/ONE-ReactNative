__d(function(n,r,f,e){"use strict";var i=r(69),a=function(n,r,f,e,a,l){var b=r[f];if(void 0!==b&&null!==b){if("number"!=typeof b)return null===i(b)?new Error("Invalid "+a+" `"+(l||f)+"` supplied to `"+e+"`: "+b+"\nValid color formats are\n  - '#f0f' (#rgb)\n  - '#f0fc' (#rgba)\n  - '#ff00ff' (#rrggbb)\n  - '#ff00ff00' (#rrggbbaa)\n  - 'rgb(255, 255, 255)'\n  - 'rgba(255, 255, 255, 1.0)'\n  - 'hsl(360, 100%, 100%)'\n  - 'hsla(360, 100%, 100%, 1.0)'\n  - 'transparent'\n  - 'red'\n  - 0xff00ff00 (0xrrggbbaa)\n"):void 0}else if(n)return new Error("Required "+a+" `"+(l||f)+"` was not specified in `"+e+"`.")},l=a.bind(null,!1);l.isRequired=a.bind(null,!0),f.exports=l},68);