!function(a,b,c){"undefined"!=typeof module&&module.exports?module.exports=c:"function"==typeof define&&define.amd?define(c):"function"==typeof YUI?YUI.add(a,c):b[a]=c()}("Hilo",this,function(){"use strict";function Test(a,b){this.con=a,b&&(this.neg=!0)}function ajaxRequest(a,b,c,d){d="object"==typeof d?d:void 0,"string"==typeof b&&"function"==typeof c?hiloAjax(extend({method:a,url:b,success:c},d)):hiloAjax(extend({method:a},b))}function Dom(a,b){var c,d;for(c=0,d=a.length;d>c;c+=1)this[c]=a[c];this.length=a.length,this.sel=b}function unhyph(a){return a.toLowerCase().replace(/-(.)/g,function(a,b){return b.toUpperCase()})}function unitize(a,b){var c={width:!0,maxWidth:!0,minWidth:!0,height:!0,maxHeight:!0,minHeight:!0,borderWidth:!0,borderTopWidth:!0,borderLeftWidth:!0,borderBottomWidth:!0,borderRightWidth:!0,borderRadius:!0,outlineWidth:!0,outlineOffset:!0,strokeWidth:!0,fontSize:!0,lineHeight:!0,letterSpacing:!0,textIndent:!0,textUnderlineWidth:!0,margin:!0,marginTop:!0,marginLeft:!0,marginBottom:!0,marginRight:!0,padding:!0,paddingTop:!0,paddingLeft:!0,paddingBottom:!0,paddingRight:!0,top:!0,left:!0,bottom:!0,right:!0};return"string"==typeof a?a:c[b]===!0?a+"px":a}function NumberObject(a){this.num=a}var hilo,start,elapsed,win=window,doc=document,detected,key,callbacks=[],select,feature,hiloAjax,own=function(a,b){return a.hasOwnProperty(b)},_i;start=(new Date).getTime(),feature=function(){var a=function(a){return doc.createElement(a)},b=a("input"),c=a("div"),d=a("canvas"),e=a("iframe"),f=function(a,b,c){return!!a.setAttribute(b,c)},g=a("audio"),h=a("span"),i=a("video"),j=new XMLHttpRequest;return{addEventListener:function(){return"function"==typeof win.addEventListener}(),applicationCache:function(){return!!win.applicationCache}(),audio:function(){return!!g.canPlayType}(),audioPreload:function(){return"preload"in g}(),audioType:{mp3:function(){return!(!g.canPlayType||!g.canPlayType("audio/mpeg;").replace(/no/,""))}(),vorbis:function(){return!(!g.canPlayType||!g.canPlayType("audio/ogg; codecs='vorbis'").replace(/no/,""))}(),wav:function(){return!(!g.canPlayType||!g.canPlayType("audio/wav; codecs='1'").replace(/no/,""))}(),aac:function(){return!(!g.canPlayType||!g.canPlayType("audio/mp4; codecs='mp4a.40.2'").replace(/no/,""))}()},canvas:function(){return!!d.getContext}(),canvasText:function(){return!!d.getContext&&"function"==typeof d.getContext("2d").fillText}(),classList:function(){return"classList"in h}(),command:function(){return"type"in a("command")}(),consval:function(){return"noValidate"in a("form")}(),contentEditable:function(){return"isContentEditable"in h}(),datalist:function(){return"options"in a("datalist")}(),details:function(){return"open"in a("details")}(),dragdrop:function(){return"draggable"in h}(),es6:function(){return"function"==typeof String.prototype.contains}(),fileapi:function(){return"undefined"!=typeof FileReader}(),gen5:function(){return 5===parseInt(win.navigator.appVersion,10)}(),geolocation:function(){return"geolocation"in win.navigator}(),getSelection:function(){return"function"==typeof win.getSelection}(),history:function(){return!(!win.history||!history.pushState)}(),iframe:{sandbox:function(){return"sandbox"in e}(),srdoc:function(){return"srcdoc"in e}()},indexeddb:function(){return!!(win.indexedDB&&win.IDBKeyRange&&win.IDBTransaction)}(),input:{autofocus:function(){return"autofocus"in b}(),placeholder:function(){return"placeholder"in b}(),type:{color:function(){return f(b,"type","color"),"text"!==b.type}(),date:function(){return f(b,"type","date"),"text"!==b.type}(),datetime:function(){return f(b,"type","datetime"),"text"!==b.type}(),datetimeLocal:function(){return f(b,"type","datetime-local"),"text"!==b.type}(),email:function(){return f(b,"type","email"),"text"!==b.type}(),month:function(){return f(b,"type","month"),"text"!==b.type}(),number:function(){return f(b,"type","number"),"text"!==b.type}(),range:function(){return f(b,"type","range"),"text"!==b.type}(),search:function(){return f(b,"type","search"),"text"!==b.type}(),tel:function(){return f(b,"type","tel"),"text"!==b.type}(),time:function(){return f(b,"type","time"),"text"!==b.type}(),week:function(){return f(b,"type","week"),"text"!==b.type}()}},localStorage:function(){try{return"localStorage"in win&&null!==win.localStorage&&!!win.localStorage.setItem}catch(a){return!1}}(),meter:function(){return"value"in a("meter")}(),microdata:function(){return"getItems"in doc}(),offline:function(){return!!win.applicationCache}(),output:function(){return"value"in a("output")}(),progress:function(){return"value"in a("progress")}(),qsa:function(){return"querySelector"in doc&&"querySelectorAll"in doc}(),qsa3:function(){try{return doc.querySelectorAll(":root").length>0}catch(a){return!1}}(),requestAnimationFrame:function(){return"function"==typeof requestAnimationFrame?!0:"function"==typeof msRequestAnimationFrame?"ms":"function"==typeof webkitRequestAnimationFrame?"webkit":"function"==typeof mozRequestAnimationFrame?"moz":!1}(),serverEvt:function(){return"undefined"!=typeof EventSource}(),sessionStorage:function(){try{return"sessionStorage"in win&&null!==win.sessionStorage}catch(a){return!1}}(),showModalDialog:function(){return"function"==typeof win.showModalDialog}(),svg:function(){return!(!doc.createElementNS||!doc.createElementNS("http://www.w3.org/2000/svg","svg").createSVGRect)}(),svginhtml:function(){return c.innerHTML="<svg></svg>",!!(win.SVGSVGElement&&c.firstChild instanceof win.SVGSVGElement)}(),template:function(){return"content"in a("template")}(),time:function(){return"datetime"in a("time")}(),undo:function(){return"undefined"!=typeof UndoManager}(),video:function(){try{return!!i.canPlayType}catch(a){return!1}}(),videoCaptions:function(){return"src"in a("track")}(),videoFormats:{h264:function(){try{return i.canPlayType("video/mp4; codecs='avc1.42E01E, mp4a.40.2'")}catch(a){return!1}}(),webm:function(){try{return i.canPlayType("video/webm; codecs='vp8, vorbis'")}catch(a){return!1}}(),ogg:function(){try{return i.canPlayType("video/ogg; codecs='theora, vorbis'")}catch(a){return!1}}()},videoPoster:function(){return"poster"in a("video")}(),webAudio:function(){return win.AudioContext?!0:win.webkitAudioContext?"webkit":!1}(),webSockets:function(){return!!win.webSocket}(),websql:function(){return!!win.openDatabase}(),webWorkers:function(){return!!win.Worker}(),widgets:function(){return"undefined"!=typeof widget}(),xdocmsg:function(){return!!win.postMessage}(),xhr:{xdr:function(){return"withCredentials"in j}(),formdata:function(){return!!win.FormData}(),upe:function(){return"upload"in j}()}}}(),detected=function(){var a,b,c,d,e,f=win.navigator.userAgent;if(b={ie:0,firefox:0,safari:0,konq:0,opera:0,chrome:0,ver:null},c={win:!1,mac:!1,x11:!1,iphone:!1,ipod:!1,ipad:!1,ios:!1,android:!1,nokiaN:!1,winMobile:!1,wii:!1,ps:!1},a={ie:0,gecko:0,webkit:0,khtml:0,opera:0,ver:null},window.opera?(a.ver=b.ver=window.opera.version(),a.opera=b.opera=parseFloat(a.ver)):/AppleWebKit\/(\S+)/.test(f)?(a.ver=RegExp.$1,a.webkit=parseFloat(a.ver),/Chrome\/(\S+)/.test(f)?(b.ver=RegExp.$1,b.chrome=parseFloat(b.ver)):/Version\/(\S+)/.test(f)?(b.ver=RegExp.$1,b.safari=parseFloat(b.ver)):(d=1,d=a.webkit<100?1:a.webkit<312?1.2:a.webkit<412?1.3:2,b.safari=b.ver=d)):/KHTML\/(\S+)/.test(f)||/Konqueror\/([^;]+)/.test(f)?(a.ver=b.ver=RegExp.$1,a.khtml=b.konq=parseFloat(a.ver)):/rv:([^\)]+)\) Gecko\/\d{8}/.test(f)?(a.ver=RegExp.$1,a.gecko=parseFloat(a.ver),/Firefox\/(\S+)/.test(f)&&(b.ver=RegExp.$1,b.firefox=parseFloat(b.ver))):/MSIE ([^;]+)/.test(f)&&(a.ver=b.ver=RegExp.$1,a.ie=b.ie=parseFloat(a.ver)),b.ie=a.ie,b.opera=a.opera,e=navigator.platform,c.win=0===e.indexOf("Win"),c.mac=0===e.indexOf("Mac"),c.x11="X11"===e||0===e.indexOf("Linux"),c.win&&/Win(?:dows )?([^do]{2})\s?(\d+\.\d+)?/.test(f))if("NT"===RegExp.$1)switch(RegExp.$2){case"5.0":c.win="2000";break;case"5.1":c.win="XP";break;case"6.0":c.win="Vista";break;case"6.1":c.win="7";break;default:c.win="NT"}else c.win="9x"===RegExp.$1?"ME":RegExp.$1;return c.iphone=f.indexOf("iPhone")>-1,c.ipod=f.indexOf("iPod")>-1,c.ipad=f.indexOf("iPad")>-1,c.nokiaN=f.indexOf("NokiaN")>-1,"CE"===c.win?c.winMobile=c.win:"Ph"===c.win&&/Windows Phone OS(\d+.\d+)/.test(f)&&(c.win="Phone",c.winMobile=parseFloat(RegExp.$1)),c.mac&&f.indexOf("Mobile")>-1&&(c.ios=/CPU (?:iPhone )?OS (\d+_\d+)/.test(f)?parseFloat(RegExp.$1.replace("_",".")):2),/Android (\d+\.\d+)/.test(f)&&(c.android=parseFloat(RegExp.$1)),c.wii=f.indexOf("Wii")>-1,c.ps=/playstation/i.test(f),c.win?(c.name="Windows",c.version=c.win):c.name=c.mac?"Mac":c.x11?"Linux":"Some other",b.ie?(b.name="IE",b.version=b.ie):b.chrome?(b.name="Chrome",b.version=b.chrome):b.safari?(b.name="Safari",b.version=b.safari):b.konq?(b.name="Konqueror",b.version=b.konq):b.opera?(b.name="Opera",b.version=b.opera):b.firefox&&(b.name="Firefox",b.version=b.firefox),{engine:a,browser:b,system:c}}();var json={};!function(){function f(a){return 10>a?"0"+a:a}function quote(a){return escapable.lastIndex=0,escapable.test(a)?'"'+a.replace(escapable,function(a){var b=meta[a];return"string"==typeof b?b:"\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4)})+'"':'"'+a+'"'}function str(a,b){var c,d,e,f,g,h=gap,i=b[a];switch(i&&"object"==typeof i&&"function"==typeof i.tojson&&(i=i.tojson(a)),"function"==typeof rep&&(i=rep.call(b,a,i)),typeof i){case"string":return quote(i);case"number":return isFinite(i)?String(i):"null";case"boolean":case"null":return String(i);case"object":if(!i)return"null";if(gap+=indent,g=[],"[object Array]"===Object.prototype.toString.apply(i)){for(f=i.length,c=0;f>c;c+=1)g[c]=str(c,i)||"null";return e=0===g.length?"[]":gap?"[\n"+gap+g.join(",\n"+gap)+"\n"+h+"]":"["+g.join(",")+"]",gap=h,e}if(rep&&"object"==typeof rep)for(f=rep.length,c=0;f>c;c+=1)"string"==typeof rep[c]&&(d=rep[c],e=str(d,i),e&&g.push(quote(d)+(gap?": ":":")+e));else for(d in i)Object.prototype.hasOwnProperty.call(i,d)&&(e=str(d,i),e&&g.push(quote(d)+(gap?": ":":")+e));return e=0===g.length?"{}":gap?"{\n"+gap+g.join(",\n"+gap)+"\n"+h+"}":"{"+g.join(",")+"}",gap=h,e}}if("object"==typeof window.JSON&&"function"==typeof window.JSON.parse)return json=window.JSON,void 0;"function"!=typeof Date.prototype.tojson&&(Date.prototype.tojson=function(){return isFinite(this.valueOf())?this.getUTCFullYear()+"-"+f(this.getUTCMonth()+1)+"-"+f(this.getUTCDate())+"T"+f(this.getUTCHours())+":"+f(this.getUTCMinutes())+":"+f(this.getUTCSeconds())+"Z":null},String.prototype.tojson=Number.prototype.tojson=Boolean.prototype.tojson=function(){return this.valueOf()});var cx=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,escapable=/[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,gap,indent,meta={"\b":"\\b","	":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"},rep;"function"!=typeof json.stringify&&(json.stringify=function(a,b,c){var d;if(gap="",indent="","number"==typeof c)for(d=0;c>d;d+=1)indent+=" ";else"string"==typeof c&&(indent=c);if(rep=b,b&&"function"!=typeof b&&("object"!=typeof b||"number"!=typeof b.length))throw new Error("json.stringify");return str("",{"":a})}),"function"!=typeof json.parse&&(json.parse=function(text,reviver){function walk(a,b){var c,d,e=a[b];if(e&&"object"==typeof e)for(c in e)Object.prototype.hasOwnProperty.call(e,c)&&(d=walk(e,c),void 0!==d?e[c]=d:delete e[c]);return reviver.call(a,b,e)}var j;if(text=String(text),cx.lastIndex=0,cx.test(text)&&(text=text.replace(cx,function(a){return"\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4)})),/^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,"@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,"]").replace(/(?:^|:|,)(?:\s*\[)+/g,"")))return j=eval("("+text+")"),"function"==typeof reviver?walk({"":j},""):j;throw new SyntaxError("json.parse")})}();var boxedString=Object("a"),splitString="a"!==boxedString[0]||!(0 in boxedString),toObject=function(a){if("undefined"==typeof a)throw new TypeError("can't convert "+a+" to object");return Object(a)},toInteger=function(a){var b=+a;return Number.isNaN(b)?0:0!==b&&isFinite(b)?sign(b)*Math.floor(Math.abs(b)):b},isPrimitive=function(a){var b=typeof a;return null===a||"undefined"===b||"boolean"===b||"number"===b||"string"===b},toPrimitive=function(a){var b,c,d;if(isPrimitive(a))return a;if(c=a.valueOf,"function"==typeof c&&(b=c.call(a),isPrimitive(b)))return b;if(d=a.toString,"function"==typeof d&&(b=d.call(a),isPrimitive(b)))return b;throw new TypeError},sign=function(a){var b=+a;return 0===b?b:Number.isNaN(b)?b:0>b?-1:1},each=function(a,b,c){var d,e;if(Array.prototype.forEach)return Array.prototype.forEach.call(a,b);if(!a||!b)throw new Error("Not enough arguments provided for each()");for(c=c||a,d=0,e=a.length;e>d;d+=1)b.call(c,a[d])},forIn=function(a,b,c){var d;if(!a||!b)throw new Error("Not enough arguments provided for forIn()");c=c||a;for(d in a)own(a,d)&&b.call(c,d)},extend=function(a,b){var c;if(!a||!b)throw new Error("Not enough arguments provided for extend()");for(c in b)own(b,c)&&(a[c]=b[c]);return a},every=function(a,b){var c,d,e,f;if(null===a)throw new TypeError;if(c=Object(a),d=c.length>>>0,"function"!=typeof b)throw new TypeError;for(e=arguments[1],f=0;d>f;f++)if(f in c&&!b.call(e,c[f],f,c))return!1;return!0},trim=function(a){var b="	\n\f\r   ᠎             　\u2028\u2029﻿";b="["+b+"]";var c=new RegExp("^"+b+b+"*"),d=new RegExp(b+b+"*$");if(void 0===a||null===a)throw new TypeError("can't convert "+a+" to object");return String(a).replace(c,"").replace(d,"")},contains=function(a,b){var c=arguments[1];return-1!==a.indexOf(b,c)},indexOf=function(a,b){var c=splitString&&"[object String]"===a.toString()?this.split(""):toObject(this),d=c.length>>>0;if(!d)return-1;var e=0;for(arguments.length>1&&(e=toInteger(arguments[1])),e=e>=0?e:Math.max(0,d+e);d>e;e++)if(e in c&&c[e]===b)return e;return-1};return select=select||function(a,b){return b=b||doc,b.querySelectorAll(a)},hilo=function(a,b,c){return"undefined"==typeof a?win.Hilo:"number"==typeof a?new NumberObject(a):"string"==typeof a?""===trim(a)?new Dom({length:0}):new Dom(select(a,b,c),a):"function"==typeof a?("complete"===document.readyState?a():callbacks.push(a),win.Hilo):a.length?new Dom(a):(a=[a],new Dom(a))},hilo.temp={},hilo.version="0.1.0-pre-dev-beta-9",hilo.feature=feature,hilo.browser=detected.browser,hilo.engine=detected.engine,hilo.platform=detected.system,extend(hilo,{each:each,extend:extend,every:every,trim:trim,contains:contains,indexOf:indexOf,isPrimitive:isPrimitive,toObject:toObject,toInteger:toInteger,toPrimitive:toPrimitive}),hilo.json={parse:json.parse,stringify:json.stringify},hilo.legacy="function"==typeof sizzle,extend(hilo,{test:function(a){return new Test(a)}}),extend(Test.prototype,{ifEquals:function(a){var b=this.con===a;return this.neg?!b:b},ifContains:function(a){var b=1===this.con.split(a).length?!1:!0;if("string"==typeof a&&"object"==typeof this.con&&this.con.length);else if("string"==typeof a&&"string"==typeof this.con)return this.neg?!b:b},not:function(){return new Test(this,!0)}}),hiloAjax=function(a){var b;if(win.XMLHttpRequest?b=new win.XMLHttpRequest:win.ActiveXObject&&(b=new win.ActiveXObject("Microsoft.XMLHTTP")),!a.url)throw new TypeError("url parameter not provided to hilo.ajax");a.async=a.async||!0,a.username=a.username||null,a.password=a.password||null,a.contentType=a.contentType||"application/x-www-form-urlencoded; charset=UTF-8",b.onreadystatechange=function(){if(a.callback&&a.callback(b),4===b.readyState)switch(a.complete.call(this,b),b.status){case 200:a.success.call(this,b),a.error.call(this,b);break;case 404:a.notfound.call(this,b),a.error.call(this,b);break;case 403:a.forbidden.call(this,b),a.error.call(this,b);break;default:a.error.call(this,b)}else 3===b.readyState&&a.sent.call(this,b)},b.timeout=a.timeout,"string"==typeof a.method?"POST"===a.method.trim().toUpperCase()?(b.open("POST",a.url,a.async,a.username,a.password),b.send(a.data)):"GET"===a.method.trim().toUpperCase()&&(b.open("GET",a.url+(a.data?"+"+a.data:""),a.async,a.username,a.password),b.send("string"==typeof a.data?a.data:null)):(b.open(a.method.trim().toUpperCase(),a.url+(a.data?"+"+a.data:""),a.async,a.username,a.password),b.send("string"==typeof a.data?a.data:null))},hilo.ajax=hiloAjax,hilo.get=function(a,b,c){ajaxRequest("GET",a,b,c)},hilo.post=function(a,b,c){ajaxRequest("POST",a,b,c)},Dom.prototype=Array.prototype,extend(Dom.prototype,{constructor:Dom}),hilo.create=function(a,b){var c,d=new Dom([document.createElement(a)]);if(b){b.className&&(d.addClass(b.className),delete b.className),b.text&&(d.html(b.text),delete b.text);for(c in b)b.hasOwnProperty(c)&&d.attr(c,b.key)}return d},extend(Dom.prototype,{each:function(a){return this.map(a),this},map:function(a){var b,c,d=[];for(b=0,c=this.length;c>b;b+=1)d.push(a.call(this,this[b],b));return d},one:function(a){var b=this.map(a);return b.length>1?b:b[0]},first:function(a){return a(this[0])},filter:function(a){var b,c,d=this.length>>>0,e=Object(this),f=[];for(b=0;d>b;b++)b in e&&(c=e[b],a.call(this,c,b,e)&&f.push(c));return new Dom(f)},get:function(){var a=[];return this.each(function(b){a.push(b)}),a},firstEl:function(){return new Dom([this[0]])},lastEl:function(){return new Dom([this[this.length-1]])},el:function(a){return new Dom([this[a-1]])},children:function(a){var b,c,d=[];return this.each(function(e){var f=select(a?a:"*",e);for(b=0,c=f.length;c>b;b+=1)d=d.concat(f[b])}),d},parents:function(){var a=[];return this.each(function(b){a=a.concat(b.parentElement)}),new Dom(a)},parent:function(){return this.first(function(a){return new Dom([a.parentElement])})},rel:function(a){var b=[];return this.each(function(c){b.push(c[a])}),b},next:function(){return this.rel("nextElementSibling")},prev:function(){return this.rel("previousElementSibling")},html:function(a){return"undefined"!=typeof a?this.each(function(b){b.innerHTML=a}):this.first(function(a){return a.innerHTML})},empty:function(){return this.html("")},append:function(a){return this.each(function(b){b.innerHTML+=a})},prepend:function(a){return this.each(function(b){b.innerHTML=a+b.innerHTML})},value:function(a){return a?this.each(function(b){b.value=a}):(this.first(function(a){return a.value}),void 0)},id:function(a){return a?this.first(function(b){b.id=a}):this.first(function(a){return a.id})},"class":feature.classList===!0?function(a,b){return this.each(function(c){var d,e,f,g=[];if("string"==typeof b)if(e=b.split(" "),1===e.length)switch(f=c.classList.contains(b),a){case"add":f||c.classList.add(b);break;case"remove":f&&c.classList.remove(b);break;case"has":g=!0;break;case"toggle":for(d=0;d<e.length;d+=1)f?c.classList.remove(e[d]):c.classList.add(e[d])}else switch(f=function(a){return c.classList.contains(a)},a){case"add":for(d=0;d<e.length;d+=1)f(e[d])||c.classList.add(e[d]);break;case"remove":for(d=0;d<e.length;d+=1)f(e[d])&&c.classList.remove(e[d]);break;case"has":for(d=0;d<e.length;d+=1)g.push(f(e[d]));break;case"toggle":for(d=0;d<e.length;d+=1)f(e[d])?c.classList.remove(e[d]):c.classList.add(e[d])}else if(b.length)switch(e=b,f=function(a){return c.classList.contains(a)},a){case"add":for(d=0;d<e.length;d+=1)f(e[d])||c.classList.add(e[d]);break;case"remove":for(d=0;d<e.length;d+=1)f(e[d])&&c.classList.remove(e[d]);break;case"has":for(d=0;d<e.length;d+=1)g.push(f(e[d]));break;case"toggle":for(d=0;d<e.length;d+=1)f(e[d])?c.classList.remove(e[d]):c.classList.add(e[d])}return"boolean"==typeof g?g:g.every(function(a){return a===!0})})}:function(a,b){return this.each(function(c){var d,e,f,g=[];if("string"==typeof b)if(e=b.split(" "),1===e.length)switch(f=c.className.split(b).length>1,a){case"add":f||(c.className+=" "+b);break;case"remove":f&&c.className.replace(b,"");break;case"has":g=f;break;case"toggle":for(d=0;d<e.length;d+=1)f?c.className.replace(b,""):c.className+=" "+b}else switch(f=function(a){return c.className.split(a).length>1},a){case"add":for(d=0;d<e.length;d+=1)f(e[d])||(c.className+=" "+e[d]);break;case"remove":for(d=0;d<e.length;d+=1)f(e[d])&&c.className.replace(e[d],"");break;case"has":for(d=0;d<e.length;d+=1)g.push(f(e[d]));break;case"toggle":for(d=0;d<e.length;d+=1)f(e[d])?c.className.replace(e[d],""):c.className+=" "+e[d]}else if(b.length)switch(e=b,f=function(a){return c.className.split(a).length>1},a){case"add":for(d=0;d<e.length;d+=1)f(e[d])||(c.className+=" "+e[d]);break;case"remove":for(d=0;d<e.length;d+=1)f(e[d])&&c.className.replace(e[d],"");break;case"has":for(d=0;d<e.length;d+=1)g.push(f(e[d]));break;case"toggle":for(d=0;d<e.length;d+=1)f(e[d])?c.className.replace(e[d],""):c.className+=" "+e[d]}return"boolean"==typeof g?g:g.every(function(a){return a===!0})})},addClass:function(a){return this["class"]("add",a)},removeClass:function(a){return this["class"]("remove",a)},hasClass:function(a){return this["class"]("has",a)},toggleClass:function(a){return this["class"]("toggle",a)},attr:function(a,b){return b?this.each(function(c){c.setAttribute(a,b)}):this.first(function(b){return b.getAttribute(a)})},css:function(a,b){var c;return"string"==typeof a?(c=unhyph(a),b?this.each(function(a){a.style[c]=unitize(b,c)}):this.first(function(a){return a.style[c]})):("object"==typeof a&&forIn(a,function(b){c=unhyph(b),this.each(function(d){d.style[c]=unitize(a[b],c)})},this),void 0)},computed:function(a){return this.first(function(b){return win.getComputedStyle(b)[a]})},outerWidth:function(){return parseFloat(this.computed("width"))+parseFloat(this.computed("paddingLeft"))+parseFloat(this.computed("paddingRight"))+parseFloat(this.computed("borderLeft"))+parseFloat(this.computed("borderRight"))+"px"},innerWidth:function(){return parseFloat(this.computed("width"))+parseFloat(this.computed("paddingLeft"))+parseFloat(this.computed("paddingRight"))+"px"},outerHeight:function(){return parseFloat(this.computed("height"))+parseFloat(this.computed("paddingTop"))+parseFloat(this.computed("paddingBottom"))+parseFloat(this.computed("borderTop"))+parseFloat(this.computed("borderBottom"))+"px"},innerHeight:function(){return parseFloat(this.computed("height"))+parseFloat(this.computed("paddingTop"))+parseFloat(this.computed("paddingBottom"))+"px"}}),extend(Dom.prototype,{on:function(){return document.addEventListener?function(a,b){return this.each(function(c){c.addEventListener(a,b,!1)})}:document.attachEvent?function(a,b){return this.each(function(c){c.attachEvent("on"+a,b)})}:function(a,b){return this.each(function(c){c["on"+a]=b})}}(),off:function(){return document.removeEventListener?function(a,b){return this.each(function(c){c.removeEventListener(a,b,!1)})}:document.detachEvent?function(a,b){return this.each(function(c){c.detachEvent("on"+a,b)})}:function(a){return this.each(function(b){b["on"+a]=null})}}(),fire:function(){return document.dispatchEvent?function(a){var b;try{b=document.createEvent("Events")}catch(c){b=document.createEvent("UIEvents")}return b.initUIEvent(a,!0,!0,window,1),this.each(function(a){a.dispatchEvent(b)})}:document.fireEvent?function(a){var b=document.createEventObject();return b.button=1,this.each(function(c){c.fireEvent("on"+a,b)})}:function(a){return this.each(function(b){b["on"+a].call()})}}()}),extend(Dom.prototype,{ready:function(a){this.each(function(b){b.onreadystatechange=function(){(b.readyState="complete")&&a()}})}}),function(){var a,b={};for(a=["blur","click","change","dblclick","drag","dragstart","dragend","dragenter","dragleave","dragover","drop","error","focus","keyup","keydown","keypress","load","mousedown","mouseleave","mouseenter","mouseover","mousemove","mouseout","submit"],_i=0;_i<a.length;_i+=1)b[a[_i]]=function(b){return"function"==typeof b?this.on(a[_i],b):this.fire(a[_i])};extend(Dom.prototype,b)}(),key={0:48,1:49,2:50,3:51,4:52,5:53,6:54,7:55,8:56,9:57,A:65,B:66,C:67,D:68,E:69,F:70,G:71,H:72,I:73,J:74,K:75,L:76,M:77,N:78,O:79,P:80,Q:81,R:82,S:83,T:84,U:85,V:86,W:87,X:88,Y:89,Z:90,a:97,b:98,c:99,d:100,e:101,f:102,g:103,h:104,i:105,j:106,k:107,l:108,m:109,n:110,o:111,p:112,q:113,r:114,s:115,t:116,u:117,v:118,w:119,x:120,y:121,z:122,alt:18,caps:20,ctrl:17,cmd:17,enter:13,esc:27,del:46,end:35,back:8,left:37,up:38,right:39,down:40,f1:112,f2:113,f3:114,f4:115,f5:116,f6:117,f7:118,f8:119,f9:120,f10:121,f11:122,f12:123,home:36,insert:45,numlock:144,"`":222,"-":189,",":188,".":190,"/":191,";":186,"[":219,"\\":220,"]":221,"=":187},hilo.keys=key,extend(Dom.prototype,{show:function(a){return a=a||"",this.each(function(b){b.style.display=a,b.setAttribute("aria-hidden",!1)})},hide:function(){return this.each(function(a){a.style.display="none",a.setAttribute("aria-hidden",!0)})},toggle:function(a){return this.each(function(b){"none"===b.style.display?(b.style.display=a?a:"",b.setAttribute("aria-hidden",!1)):(b.style.display="none",b.setAttribute("aria-hidden",!0))})},appear:function(){return this.each(function(a){a.style.visibility="visible",a.setAttribute("aria-hidden",!1)})},disappear:function(){return this.each(function(a){a.style.visibility="hidden",a.setAttribute("aria-hidden",!0)})},toggleVisibility:function(){return this.each(function(a){"0"===a.style.opacity?(a.style.visibility="visible",a.setAttribute("aria-hidden",!0)):(a.style.visibility="hidden",a.setAttribute("aria-hidden",!0))})},fade:function(a,b){return"in"===a&&this.show(),this.each(function(c){function d(){var b=.3,d=1;parseFloat(c.style.opacity)===("in"===a?1:0)?clearInterval(win.Hilo.temp.anim):("out"===a&&(b=-b,d=0),c.style.opacity=parseFloat(c.style.opacity||d)+b)}var e;switch(b){case"slow":e=200;break;case"normal":e=120;break;case"fast":e=80;break;default:e=e||120}win.Hilo.temp.anim=setInterval(d,b)})},fadeIn:function(a){this.fade("in",a)},fadeOut:function(a){this.fade("out",a)}}),hilo.classify=function(){function a(){return String(hilo.browser.version).replace(".","-")}var b,c=win.Hilo("body"),d=["js"];c.removeClass("no-js"),hilo.browser.chrome?d.push("chrome"):hilo.browser.firefox?d.push("firefox"):hilo.browser.safari?d.push("safari"):hilo.browser.ie?(hilo.browser.ie<=6&&(d.push("lte-ie6"),hilo.browser.ie<6&&d.push("lt-ie6")),hilo.browser.ie<=7&&(d.push("lte-ie7"),hilo.browser.ie<7&&d.push("lt-ie7")),hilo.browser.ie<=8&&(d.push("lte-ie8"),hilo.browser.ie<8&&d.push("lt-ie8")),hilo.browser.ie<=9&&(d.push("lte-ie9"),hilo.browser.ie<9&&d.push("lt-ie9")),hilo.browser.ie<=10&&(d.push("lte-ie10"),hilo.browser.ie<10&&d.push("lt-ie10")),hilo.browser.ie>=6&&(d.push("gte-ie6"),hilo.browser.version>6&&d.push("gt-ie6")),hilo.browser.ie>=7&&(d.push("gte-ie7"),hilo.browser.version>7&&d.push("gt-ie7")),hilo.browser.ie>=8&&(d.push("gte-ie8"),hilo.browser.version>8&&d.push("gt-ie8")),hilo.browser.ie>=9&&(d.push("gte-ie9"),hilo.browser.version>9&&d.push("gt-ie9")),hilo.browser.ie>=10&&(d.push("gte-ie10"),hilo.browser.version>10&&d.push("gt-ie10")),6===hilo.browser.ie?d.push("ie6"):7===hilo.browser.ie?d.push("ie7"):8===hilo.browser.ie?d.push("ie8"):9===hilo.browser.ie?d.push("ie9"):10===hilo.browser.ie&&d.push("ie10"),d.push("ie")):hilo.browser.opera?d.push("opera"):hilo.browser.konq&&d.push("konqueror"),hilo.platform.win?d.push("windows"):hilo.platform.mac?d.push("mac"):hilo.platform.x11&&d.push("linux"),hilo.engine.webkit?d.push("webkit"):hilo.engine.ie?d.push("trident"):hilo.engine.opera?d.push("presto"):hilo.engine.gecko&&d.push("gecko"),d.push(hilo.browser.name.toLowerCase()+parseInt(hilo.browser.version,10)),a()!==parseInt(hilo.browser.version,10)&&d.push(hilo.browser.name.toLowerCase()+a());for(b in hilo.feature)hilo.feature.hasOwnProperty(b)&&(hilo.feature[b]===!0?d.push(b.toLowerCase()):hilo.feature[b]===!1&&d.push("no-"+b.toLowerCase()));return c.addClass(d),d},extend(NumberObject.prototype,{MAX_INTEGER:9007199254740991,EPSILON:2.220446049250313e-16,parseInt:function(){parseInt.call(this,this.num)},parseFloat:function(){parseFloat.call(this,this.num)},isFinite:function(){return"number"==typeof this.num&&isFinite(this.num)},isInteger:function(){return"number"==typeof this.num&&!isNaN(this.num)&&isFinite(this.num)&&parseInt(this.num,10)===this.num},isNaN:function(){return this.num!==this.num},toInteger:function(){var a=+this.num;return isNaN(a)?0:0!==a&&isFinite(a)?sign.call(this,a)*Math.floor(Math.abs(a)):a},sign:function(a){sign.call(this,this.num,a)},times:function(a,b){for(var c=0;c<this.num;)a.apply(this,b),c+=1}}),extend(hilo,{Dom:Dom.prototype,Test:Test.prototype}),doc.onreadystatechange=function(){if("complete"===doc.readyState)for(_i=0;_i<callbacks.length;_i+=1)callbacks[_i]()},win.$=hilo,elapsed=(new Date).getTime()-start,hilo.perf=elapsed,hilo});