/*! 
 * Hilo - 0.1.0-pre-dev-beta-7 - 2013-07-26
 * http://erikroyall.github.com/hilo/
 * Copyright (c) 2013 Erik Royall and Hilo contributors
 * Licensed under MIT (see LICENSE-MIT) 
 */
(function(b,a,e){var c=c||false,d=d||false;
if(typeof c!=="undefined"&&c.exports){c.exports=e;}else{if(typeof d==="function"&&d.amd){d(e);}else{a[b]=e();}}}("Hilo",this,function(){var b,e=window,h=document,f=[],g,l,j,i,a,c,d,k;
g=function(m,p,r){var o,s=m,n;function q(v,u){var x,t;t=u||h;function w(B,y){var z;function A(E){function D(F,G){return F.split(G).length===1;}return(D(E," ")&&D(E,">")&&D(E,":")&&D(E,"[")&&D(E,"]")&&D(E,"=")&&D(E,"~")&&D(E,"?"));
}if(A(B)){x=B.slice(0,1);switch(x){case"#":z=[y.getElementById(B.substr(1,B.length))];break;case".":z=y.getElementsByClassName(B);break;case"*":z=y.getElementsByTagName("*");
break;case"&":z=h.documentElement;break;default:z=y.getElementsByTagName(B);break;}}else{try{z=y.querySelectorAll(B);}catch(C){z=e.Hilo.select(B,y);}}return z;
}return w(v,t);}if(p===true){n=e.Hilo.temp;if(n[s]){return n[s];}else{if(typeof r==="object"){n[s]=q(s,r);}else{n[s]=q(s);}return n[s];}}else{if(typeof p==="string"){o=g(p,h)[0];
}else{o=h;}}return q(s,o);};b=function(n,m,o){if(!n){return e.Hilo;}if(typeof n==="string"){return new d(g(n,m,o),n);}else{if(typeof n==="function"){if(document.readyState==="complete"){n();
}else{f.push(n);}}else{if(n.length){return new d(n);}else{n=[n];return new d(n);}}}};b.temp={};b.version="0.1.0-pre-dev-beta-7";l=(function(){var r=function(s){return h.createElement(s);
},n=r("input"),q=r("div"),t=r("canvas"),p=r("iframe"),o=function(s,v){return n.setAttribute(s,v);},u=r("audio"),x=r("span"),w=r("video"),m=new XMLHttpRequest();
return{addEventListener:(function(){return typeof e.addEventListener==="function";}()),applicationCache:(function(){return !!e.applicationCache;}()),audio:(function(){return !!u.canPlayType;
}()),audioPreload:(function(){return"preload" in u;}()),audioTypes:{mp3:(function(){return !!(u.canPlayType&&u.canPlayType("audio/mpeg;").replace(/no/,""));
}()),vorbis:(function(){return !!(u.canPlayType&&u.canPlayType('audio/ogg; codecs="vorbis"').replace(/no/,""));}()),wav:(function(){return !!(u.canPlayType&&u.canPlayType('audio/wav; codecs="1"').replace(/no/,""));
}()),aac:(function(){return !!(u.canPlayType&&u.canPlayType('audio/mp4; codecs="mp4a.40.2"').replace(/no/,""));}())},canvas:(function(){return !!t.getContext;
}()),canvasText:(function(){return !!t.getContext&&typeof t.getContext("2d").fillText==="function";}()),classList:(function(){return"classList" in x;}()),command:(function(){return"type" in r("command");
}()),consval:(function(){return"noValidate" in r("form");}()),contentEditable:(function(){return"isContentEditable" in x;}()),datalist:(function(){return"options" in r("datalist");
}()),details:(function(){return"open" in r("details");}()),dragdrop:(function(){return"draggable" in x;}()),es6:(function(){return typeof String.prototype.contains==="function";
}()),fileapi:(function(){return typeof FileReader!=="undefined";}()),gen5:(function(){return parseInt(e.navigator.appVersion,10)===5;}()),geolocation:(function(){return"geolocation" in e.navigator;
}()),getSelection:(function(){return typeof e.getSelection==="function";}()),history:(function(){return !!(e.history&&history.pushState);}()),iframe:{sandbox:(function(){return"sandbox" in p;
}()),srdoc:(function(){return"srcdoc" in p;}())},indexeddb:(function(){return !!(e.indexedDB&&e.IDBKeyRange&&e.IDBTransaction);}()),input:{autofocus:(function(){return"autofocus" in n;
}()),placeholder:(function(){return"placeholder" in n;}()),type:{color:(function(){o("type","color");return n.type!=="text";}()),date:(function(){o("type","date");
return n.type!=="text";}()),datetime:(function(){o("type","datetime");return n.type!=="text";}()),datetimeLocal:(function(){o("type","datetime-local");
return n.type!=="text";}()),email:(function(){o("type","email");return n.type!=="text";}()),month:(function(){o("type","month");return n.type!=="text";
}()),number:(function(){o("type","number");return n.type!=="text";}()),range:(function(){o("type","range");return n.type!=="text";}()),search:(function(){o("type","search");
return n.type!=="text";}()),tel:(function(){o("type","tel");return n.type!=="text";}()),time:(function(){o("type","time");return n.type!=="text";}()),week:(function(){o("type","week");
return n.type!=="text";}())}},localStorage:(function(){try{return"localStorage" in e&&e.localStorage!==null&&!!e.localStorage.setItem;}catch(s){return false;
}}()),meter:(function(){return"value" in r("meter");}()),microdata:(function(){return"getItems" in h;}()),offline:(function(){return !!e.applicationCache;
}()),output:(function(){return"value" in r("output");}()),progress:(function(){return"value" in r("progress");}()),qsa:(function(){return"querySelector" in e&&"querySelectorAll" in e;
}()),requestAnimationFrame:(function(){if(typeof requestAnimationFrame==="function"){return true;}else{if(typeof msRequestAnimationFrame==="function"){return"ms";
}else{if(typeof webkitRequestAnimationFrame==="function"){return"webkit";}else{if(typeof mozRequestAnimationFrame==="function"){return"moz";}else{return false;
}}}}}()),serverEvt:(function(){return typeof EventSource!=="undefined";}()),sessionStorage:(function(){try{return"sessionStorage" in e&&e.sessionStorage!==null;
}catch(s){return false;}}()),showModalDialog:(function(){return typeof e.showModalDialog==="function";}()),svg:(function(){return !!(h.createElementNS&&h.createElementNS("http://www.w3.org/2000/svg","svg").createSVGRect);
}()),svginhtml:(function(){q.innerHTML="<svg></svg>";return !!(e.SVGSVGElement&&q.firstChild instanceof e.SVGSVGElement);}()),template:(function(){return"content" in r("template");
}()),time:(function(){return"datetime" in r("time");}()),undo:(function(){return typeof UndoManager!=="undefined";}()),video:(function(){try{return !!w.canPlayType;
}catch(s){return false;}}()),videoCaptions:(function(){return"src" in r("track");}()),videoFormats:{h264:(function(){try{return w.canPlayType('video/mp4; codecs="avc1.42E01E, mp4a.40.2"');
}catch(s){return false;}}()),webm:(function(){try{return w.canPlayType('video/webm; codecs="vp8, vorbis"');}catch(s){return false;}}()),ogg:(function(){try{return w.canPlayType('video/ogg; codecs="theora, vorbis"');
}catch(s){return false;}}())},videoPoster:(function(){return"poster" in r("video");}()),webAudio:(function(){return !!(e.webkitAudioContext||e.AudioContext);
}()),webSockets:(function(){return !!e.webSocket;}()),websql:(function(){return !!e.openDatabase;}()),webWorkers:(function(){return !!e.Worker;}()),widgets:(function(){return typeof widget!=="undefined";
}()),xdocmsg:(function(){return !!e.postMessage;}()),xhr:{xdr:(function(){return"withCredentials" in m;}()),formdata:(function(){return !!e.FormData;}()),upe:(function(){return"upload" in m;
}())}};}());b.feature=l;b.test=function(m){return new k(m);};k=function(m,n){this.con=m;if(n){this.neg=true;}};k.prototype.ifEquals=function(m){var n=this.con===m;
return this.neg?!n:n;};k.prototype.ifContains=function(m){var n=this.con.split(m).length===1?false:true;if(typeof m==="string"&&typeof this.con==="object"&&this.con.length){}else{if(typeof m==="string"&&typeof this.con==="string"){return this.neg?!n:n;
}}};k.prototype.ifIs=function(m){var n=this.con===m;return this.neg?!n:n;};(function(){var n="\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u180E\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF";
if(!String.prototype.trim){String.prototype.trim=function m(){n="["+n+"]";var o=new RegExp("^"+n+n+"*"),p=new RegExp(n+n+"*$");if(this===void 0||this===null){throw new TypeError("can't convert "+this+" to object");
}return String(this).replace(o,"").replace(p,"");};}}());j=function(m){var n;if(e.XMLHttpRequest){n=new e.XMLHttpRequest();}else{if(e.ActiveXObject){n=new e.ActiveXObject("Microsoft.XMLHTTP");
}}if(!m.url){throw new TypeError("url parameter not provided to hilo.ajax");}m.async=m.async?m.async:true;m.username=m.username?m.username:null;m.password=m.password?m.password:null;
if(!m.contentType){m.contentType="application/x-www-form-urlencoded; charset=UTF-8";}n.onreadystatechange=function(){if(m.callback){m.callback(n);}if(n.readyState===4){switch(n.status){case 200:if(m.success){m.success();
}break;}}};if(m.method.trim().toUpperCase()==="POST"){n.open("POST",m.url,m.async,m.username,m.password);n.send(m.data);}else{if(m.method.trim().toUpperCase()==="GET"){n.open("GET",m.url+(m.data?"+"+m.data:""),m.async,m.username,m.password);
n.send();}else{n.open(m.method.trim().toUpperCase(),m.url+(m.data?"+"+m.data:""),(m.async?m.async:true),(m.username?m.username:null),(m.password?m.password:null));
n.send();}}};b.ajax=j;d=function(n,p){var o,m;for(o=0,m=n.length;o<m;o+=1){this[o]=n[o];}this.length=n.length;this.sel=p;};d.prototype=Array.prototype;
b.create=function(o,m){var p=new d([document.createElement(o)]),n;if(m){if(m.className){p.addClass(m.className);delete m.className;}if(m.text){p.text(m.text);
delete m.text;}for(n in m){if(m.hasOwnProperty(n)){p.attr(n,m.key);}}}return p;};d.prototype.each=function(m){this.map(m);return this;};d.prototype.map=function(o){var n=[],p,m;
for(p=0,m=this.length;p<m;p+=1){n.push(o.call(this,this[p],p));}return n;};d.prototype.one=function(o){var n=this.map(o);return n.length>1?n:n[0];};d.prototype.first=function(m){return(this.map(m))[0];
};d.prototype.next=function(){return this.rel("nextElementSibling");};d.prototype.filter=function(n){var m=this.length>>>0,q,p=Object(this),o=[],r;for(q=0;
q<m;q++){if(q in p){r=p[q];if(n.call(this,r,q,p)){o.push(r);}}}return new d(o);};d.prototype.first=function(){return new d([this[0]]);};d.prototype.last=function(){return new d([this[this.length-1]]);
};d.prototype.el=function(m){return new d([this[m-1]]);};d.prototype.children=function(p){var n=[],o,m;this.each(function(q){var r=g(p?p:"*",q);for(o=0,m=r.length;
o<m;o+=1){n=n.concat(r[o]);}});return n;};d.prototype.parent=function(){return this.first(function(m){return new d([m.parentElement]);});};d.prototype.parents=function(){var m=[];
this.each(function(n){m=m.concat(n.parentElement);});return new d(m);};d.prototype.rel=function(n){var m=[];this.each(function(o){m.push(o[n]);});return m;
};d.prototype.next=function(){return this.rel("nextElementSibling");};d.prototype.prev=function(){return this.rel("previousElementSibling");};d.prototype.html=function(m){if(m){return this.each(function(n){n.innerHTML=m;
});}else{return this.first(function(n){return n.innerHTML;});}};d.prototype.text=function(m){if(m){return this.each(function(n){n.innerText=m;});}else{return this.first(function(n){return n.innerText;
});}};d.prototype.append=function(m){return this.each(function(n){n.innerHTML+=m;});};d.prototype.appendText=function(m){return this.each(function(n){n.innerText+=m;
});};d.prototype.prepend=function(m){return this.each(function(n){n.innerHTML=m+n.innerHTML;});};d.prototype.value=function(m){if(m){return this.each(function(n){n.value=m;
});}else{this.first(function(n){return n.value;});}};d.prototype.id=function(m){if(m){return this.first(function(n){n.id=m;});}else{return this.first(function(n){return n.id;
});}};d.prototype["class"]=l.classList===true?function(n,m){return this.each(function(q){var r,s,p,o=[];if(typeof m==="string"){s=m.split(" ");if(s.length===1){p=q.classList.contains(m);
switch(n){case"add":if(!p){q.classList.add(m);}break;case"remove":if(p){q.classList.remove(m);}break;case"has":o=true;break;case"toggle":for(r=0;r<s.length;
r+=1){if(p){q.classList.remove(s[r]);}else{q.classList.add(s[r]);}}break;default:throw new TypeError("Unknown value provided as first parameter to .class()");
}}else{p=function(t){return q.classList.contains(t);};switch(n){case"add":for(r=0;r<s.length;r+=1){if(!p(s[r])){q.classList.add(s[r]);}}break;case"remove":for(r=0;
r<s.length;r+=1){if(p(s[r])){q.classList.remove(s[r]);}}break;case"has":for(r=0;r<s.length;r+=1){o.push(p(s[r]));}break;case"toggle":for(r=0;r<s.length;
r+=1){if(p(s[r])){q.classList.remove(s[r]);}else{q.classList.add(s[r]);}}break;default:throw new TypeError("Unknown value provided as first parameter to .class()");
}}}else{if(m.length){s=m;p=function(t){return q.classList.contains(t);};switch(n){case"add":for(r=0;r<s.length;r+=1){if(!p(s[r])){q.classList.add(s[r]);
}}break;case"remove":for(r=0;r<s.length;r+=1){if(p(s[r])){q.classList.remove(s[r]);}}break;case"has":for(r=0;r<s.length;r+=1){o.push(p(s[r]));}break;case"toggle":for(r=0;
r<s.length;r+=1){if(p(s[r])){q.classList.remove(s[r]);}else{q.classList.add(s[r]);}}break;default:throw new TypeError("Unknown value provided as first parameter to .class()");
}}else{throw new TypeError("Please provide the right parameter (string or array) for .class()");}}return typeof o==="boolean"?o:o.every(function(t){return t===true;
});});}:function(n,m){return this.each(function(q){var r,s,p,o=[];if(typeof m==="string"){s=m.split(" ");if(s.length===1){p=q.className.split(m).length>1;
switch(n){case"add":if(!p){q.className+=(m);}break;case"remove":if(p){q.className.replace(m,"");}break;case"has":o=p;break;case"toggle":for(r=0;r<s.length;
r+=1){if(p){q.className.replace(m,"");}else{q.className+=m;}}break;default:throw new TypeError("Unknown value provided as first parameter to .class()");
}}else{p=function(t){return q.className.split(t).length>1;};switch(n){case"add":for(r=0;r<s.length;r+=1){if(!p(s[r])){q.className+=s[r];}}break;case"remove":for(r=0;
r<s.length;r+=1){if(p(s[r])){q.className.replace(s[r],"");}}break;case"has":for(r=0;r<s.length;r+=1){o.push(p(s[r]));}break;case"toggle":for(r=0;r<s.length;
r+=1){if(p(s[r])){q.className.replace(s[r],"");}else{q.className+=s[r];}}break;default:throw new TypeError("Unknown value provided as first parameter to .class()");
}}}else{if(m.length){p=function(t){return q.className.split(t).length>1;};switch(n){case"add":for(r=0;r<s.length;r+=1){if(!p(s[r])){q.className+=s[r];}}break;
case"remove":for(r=0;r<s.length;r+=1){if(p(s[r])){q.className.replace(s[r],"");}}break;case"has":for(r=0;r<s.length;r+=1){o.push(p(s[r]));}break;case"toggle":for(r=0;
r<s.length;r+=1){if(p(s[r])){q.className.replace(s[r],"");}else{q.className+=s[r];}}break;default:throw new TypeError("Unknown value provided as first parameter to .class()");
}}else{throw new TypeError("Please provide the right parameter (string or array) for .class()");}}return typeof o==="boolean"?o:o.every(function(t){return t===true;
});});};d.prototype.addClass=function(m){return this["class"]("add",m);};d.prototype.removeClass=function(m){return this["class"]("remove",m);};d.prototype.hasClass=function(m){return this["class"]("has",m);
};d.prototype.toggleClass=function(m){return this["class"]("toggle",m);};d.prototype.attr=function(m,n){if(n){return this.each(function(o){o.setAttribute(m,n);
});}else{return this.first(function(o){return o[m];});}};d.prototype.css=function(n,m){if(m){return this.each(function(o){o.style[n]=m;});}else{return this.first(function(o){return o.style[n];
});}};a=["width","height","fontFamily","fontWeight","fontDecoration","textAlign","textTransform","color","backgroundColor","background","margin","padding","top","left","bottom","right"];
for(c;c<a;c+=1){d.prototype[a[c]]=function(m){this.css(a[c],m);};}d.prototype.computed=function(m){return this.one(function(n){return e.getComputedStyle(n)[m];
});};d.prototype.outerWidth=function(){return parseFloat(this.computed("width"))+parseFloat(this.computed("paddingLeft"))+parseFloat(this.computed("paddingRight"))+parseFloat(this.computed("borderLeft"))+parseFloat(this.computed("borderRight"))+"px";
};d.prototype.innerWidth=function(){return parseFloat(this.computed("width"))+parseFloat(this.computed("paddingLeft"))+parseFloat(this.computed("paddingRight"))+"px";
};d.prototype.outerHeight=function(){return parseFloat(this.computed("height"))+parseFloat(this.computed("paddingTop"))+parseFloat(this.computed("paddingBottom"))+parseFloat(this.computed("borderTop"))+parseFloat(this.computed("borderBottom"))+"px";
};d.prototype.innerHeight=function(){return parseFloat(this.computed("height"))+parseFloat(this.computed("paddingTop"))+parseFloat(this.computed("paddingBottom"))+"px";
};d.prototype.get=function(){var m=[];this.each(function(n){m.push(n);});return m;};d.prototype.on=(function(){if(document.addEventListener){return function(m,n){return this.each(function(o){o.addEventListener(m,n,false);
});};}else{if(document.attachEvent){return function(m,n){return this.each(function(o){o.attachEvent("on"+m,n);});};}else{return function(m,n){return this.each(function(o){o["on"+m]=n;
});};}}}());d.prototype.off=(function(){if(document.removeEventListener){return function(m,n){return this.each(function(o){o.removeEventListener(m,n,false);
});};}else{if(document.detachEvent){return function(m,n){return this.each(function(o){o.detachEvent("on"+m,n);});};}else{return function(m){return this.each(function(n){n["on"+m]=null;
});};}}}());d.prototype.ready=function(m){this.each(function(n){n.onreadystatechange=function(){if(n.readyState="complete"){m();}};});};i=["blur","click","change","dblclick","drag","dragstart","dragend","dragenter","dragleave","dragover","drop","error","focus","keyup","keydown","keypress","load","mousedown","mouseleave","mouseenter","mouseover","mousemove","mouseout","ready","submit"];
for(c=0;c<i.length;c+=1){d.prototype[i[c]]=function(m){this.on(i[c],m);};}d.prototype.show=function(m){m=m||"";return this.each(function(n){n.style.display=m;
});};d.prototype.hide=function(){return this.each(function(m){m.style.display="none";});};d.prototype.toggle=function(m){return this.each(function(n){if(n.style.display==="none"){n.style.display=m?m:"";
}else{n.style.display="none";}});};d.prototype.appear=function(){return this.each(function(m){m.style.opacity="1";});};d.prototype.disappear=function(){return this.each(function(m){m.style.opacity="0";
m.style.cusor="default";});};d.prototype.toggleVisibility=function(){return this.each(function(m){if(m.style.opacity==="0"){m.style.opacity="1";}else{m.style.opacity="0";
m.style.cusor="default";}});};b.Dom=d.prototype;b.Test=k.prototype;b.qwery=g.pseudos;h.onreadystatechange=function(){if(h.readyState==="complete"){for(c=0;
c<f.length;c+=1){f[c]();}}};b.select=e.Sizzle||e.qwery||e.Quicksand||undefined;e.$=b;return b;}));