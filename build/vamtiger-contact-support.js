var index=function(t){"use strict";const r=Object.assign||function(t){for(var r,o=1;o<arguments.length;o++)for(var e in r=arguments[o])Object.prototype.hasOwnProperty.call(r,e)&&(t[e]=r[e]);return t};var o,e,n,s,i,a,p,u,c,d,l,m,g,f,v,w,h;!function(t){t.nothing="",t.build="build",t.vamtiger="vamtiger",t.slash="/",t.jsExtension=".js",t.bashAnd="&&",t.arn="arn",t.sns="sns",t.aws="aws",t.colon=":",t.hyphen="-",t["vamtiger-contact"]="vamtiger-contact",t["5e5164d3"]="5e5164d3",t.cc71="cc71",t["4e5b"]="4e5b",t["9c34"]="9c34",t["042fe735f31c"]="042fe735f31c"}(o||(o={})),function(t){t.usWest2="us-west-2"}(e||(e={})),function(t){t.meta="meta",t.script="script"}(n||(n={})),function(t){t.vamtigerBrowserSupport="vamtiger-browser-support"}(s||(s={})),function(t){t.id="id"}(i||(i={})),function(t){t.baseUrl="baseUrl",t.name="name",t.url="url",t.primary="primary",t.loaded="loaded",t.supported="supported",t.unsupported="unsupported",t.error="error",t.polyfill="polyfill",t.loadCritical="loadCritical",t.load="load",t.wait="wait"}(a||(a={})),function(t){t.botSupport="data-bot-support",t.es2015Support="data-es2015-support",t.elementQuerySupport="data-element-query-support",t.webComponentSupport="data-web-component-support",t.fetchSupport="data-fetch-support",t.awsSupport="data-aws-support",t.contactSupport="data-contact-support"}(p||(p={})),function(t){t.vamtigerBrowserSupportScript='script[src*="vamtiger-browser-support"]',t.vamtigerBrowserMethodJsonJs='[src$="vamtiger-browser-method.js.json.js"]',t.vamtigerBrowserMethodJson='[data-name$="vamtiger-browser-method.js.json"]'}(u||(u={})),function(t){t.vamtigerBrowserMethod="https://vamtiger-project.github.io/vamtiger-browser-method/build/vamtiger-browser-method.js",t.vamtigerBrowserMethodJsonJs="https://vamtiger-project.github.io/vamtiger-browser-method/build/vamtiger-browser-method.js.json.js",t.tsLib="https://cdn.jsdelivr.net/npm/tslib@latest"}(c||(c={})),function(t){t.notBrowser="This is not a web browser",t.noFormForSelector="No Form for Selector",t.noFieldInFormForSelector="No Field in Form for Selector",t.objectAssignNotSupported="Object.assign is not supported",t.arrayFromNotSupported="Array.from is not supported",t.destructringAssignmentNotSupported="Destructuring Assignment is not supported",t.arrowFunctionsNotSupported="Arrow functions are not supported"}(d||(d={})),function(t){t.bundleSource="bundle-source"}(l||(l={})),function(t){t.primary="primary",t.secondary="secondary"}(m||(m={})),function(t){t.loadCritical="loadCritical",t.load="load"}(g||(g={})),function(t){t.innerHTML="innerHTML"}(f||(f={})),function(t){t.touchSupport="vamtigerTouchSupport",t.bot="vamtigerBot",t.legacy="vamtigerLegacy",t.textMode="vamtigerTextMode"}(v||(v={})),function(t){t.elementQuery="vamtiger-element-query-support"}(w||(w={})),function(t){t.elementQuery="https://cdn.jsdelivr.net/npm/eqcss@latest/EQCSS.min.js"}(h||(h={}));r({},o,{365080655670:365080655670}),c.vamtigerBrowserMethod;var b,S=o.slash;o.nothing;var y,j,F,B,C,M,A,N,q,J=window.VamtigerContact,L=window.VamtigerBrowserSupport,T=b=b||(y=document.head,j=document.body,F=u.vamtigerBrowserSupportScript,B=y.querySelector(F)||j.querySelector(F),C=new URL(B.src),M=C.pathname,A=C.origin,N=M.split(S).filter(function(t){return t.trim()}).filter(function(t,r,o){return r<o.length-1}),q=[A].concat(N).join(S),b=q,q),x=[["https://cdn.jsdelivr.net/npm/aws-sdk@latest/dist/aws-sdk.min.js",T+"/vamtiger-contact-polyfill-support.js"],[T+"/vamtiger-contact-polyfill.js"]],O={supportFile:"vamtiger-contact-support",supported:!!J,chain:!0};return O.supported||(O.polyfillChain=x),L(O),t.supportFile="vamtiger-contact-support",t.polyfillChain=x,t}({});
//# sourceMappingURL=vamtiger-contact-support.js.map
