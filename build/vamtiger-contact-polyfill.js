!function(){"use strict";var t,r,o,e,n,a,i,c,s,u,p,l,d;!function(t){t.nothing="",t.vamtiger="vamtiger",t.slash="/",t.jsExtension=".js",t.bashAnd="&&",t.arn="arn",t.sns="sns",t.aws="aws",t.colon=":",t.hyphen="-",t["vamtiger-contact"]="vamtiger-contact",t["5e5164d3"]="5e5164d3",t.cc71="cc71",t["4e5b"]="4e5b",t["9c34"]="9c34",t["042fe735f31c"]="042fe735f31c"}(t||(t={})),function(t){t.usWest2="us-west-2"}(r||(r={})),function(t){t.meta="meta",t.script="script"}(o||(o={})),function(t){t.vamtigerBrowserSupport="vamtiger-browser-support"}(e||(e={})),function(t){t.id="id"}(n||(n={})),function(t){t.baseUrl="baseUrl",t.name="name",t.url="url",t.primary="primary",t.loaded="loaded",t.supported="supported",t.unsupported="unsupported",t.error="error",t.polyfill="polyfill",t.loadCritical="loadCritical",t.load="load",t.wait="wait"}(a||(a={})),function(t){t.es2015Support="data-es2015-support",t.elementQuerySupport="data-element-query-support",t.webComponentSupport="data-web-component-support",t.fetchSupport="data-fetch-support",t.awsSupport="data-aws-support",t.contactSupport="data-contact-support"}(i||(i={})),function(t){t.vamtigerBrowserSupportScript='script[src*="vamtiger-browser-support"]'}(c||(c={})),function(t){t.notBrowser="This is not a web browser",t.noFormForSelector="No Form for Selector",t.noFieldInFormForSelector="No Field in Form for Selector"}(s||(s={})),function(t){t.bundleSource="bundle-source"}(u||(u={})),function(t){t.primary="primary",t.secondary="secondary"}(p||(p={})),function(t){t.loadCritical="loadCritical",t.load="load"}(l||(l={})),function(t){t.innerHTML="innerHTML"}(d||(d={}));var f=Object.assign(t,{365080655670:365080655670}),m=t.vamtiger,w=t.jsExtension,g=/^data/,y=Object.keys(i),b=Object.assign({},i),S=(new Set([p.primary,p.secondary]),new Set([]),Array.from(new Set([a.supported,a.unsupported])),function(){var t=f.arn,o=f.aws,e=f.sns,n=f[365080655670],a=f["vamtiger-contact"],i=f.colon,c=f["5e5164d3"],s=f.cc71,u=f["4e5b"],p=f["9c34"],l=f["042fe735f31c"],d=f.hyphen,m=r.usWest2,w=[t,o,e,m,n,a].join(i),g=[m,[c,s,u,p,l].join(d)].join(i);return{z:Array.from(w),x:Array.from(g),y:Array.from(m)}}());y.forEach(function(t){return b[t]=b[t].replace(g,m)+w});var v=window.AWS,h=window._VamtigerContact_,j=window.VamtigerContact,C=v.config,F=v.SNS,A=v.CognitoIdentityCredentials,O=(location.origin,location.href),x=JSON.stringify,I=h(S),N=I.x,T=I.y,V=I.z,B="Vamtiger contact: "+O,E=T,M=new A({IdentityPoolId:N}),W=new F;Object.assign(C,{region:E,credentials:M}),console.log({region:E,credentials:M}),console.log(C),j||(window.VamtigerContact=function(t){return new Promise(function(r,o){return function(t,r,o){var e=t.subject,n=t.template,a={Message:x({subject:e,template:n,origin:O}),Subject:B,TopicArn:V};W.publish(a,function(t,e){return t?o(t):r(e)})}(t,r,o)})})}();
//# sourceMappingURL=vamtiger-contact-polyfill.js.map
