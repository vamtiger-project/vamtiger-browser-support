!function(t,r){"use strict";var e,o,n,s,i,a,u,c,p,d,l,m,f,h,w,v,b;!function(t){t.nothing="",t.build="build",t.vamtiger="vamtiger",t.slash="/",t.jsExtension=".js",t.bashAnd="&&",t.arn="arn",t.sns="sns",t.aws="aws",t.colon=":",t.hyphen="-",t["vamtiger-contact"]="vamtiger-contact",t["5e5164d3"]="5e5164d3",t.cc71="cc71",t["4e5b"]="4e5b",t["9c34"]="9c34",t["042fe735f31c"]="042fe735f31c"}(e||(e={})),function(t){t.usWest2="us-west-2"}(o||(o={})),function(t){t.meta="meta",t.script="script"}(n||(n={})),function(t){t.vamtigerBrowserSupport="vamtiger-browser-support"}(s||(s={})),function(t){t.id="id"}(i||(i={})),function(t){t.baseUrl="baseUrl",t.name="name",t.url="url",t.primary="primary",t.loaded="loaded",t.supported="supported",t.unsupported="unsupported",t.error="error",t.polyfill="polyfill",t.loadCritical="loadCritical",t.load="load",t.wait="wait"}(a||(a={})),function(t){t.botSupport="data-bot-support",t.es2015Support="data-es2015-support",t.elementQuerySupport="data-element-query-support",t.webComponentSupport="data-web-component-support",t.fetchSupport="data-fetch-support",t.awsSupport="data-aws-support",t.contactSupport="data-contact-support"}(u||(u={})),function(t){t.vamtigerBrowserSupportScript='script[src*="vamtiger-browser-support"]',t.vamtigerBrowserMethodJsonJs='[src$="vamtiger-browser-method.js.json.js"]',t.vamtigerBrowserMethodJson='[data-name$="vamtiger-browser-method.js.json"]'}(c||(c={})),function(t){t.vamtigerBrowserMethod="https://cdn.jsdelivr.net/npm/vamtiger-browser-method@latest/build/vamtiger-browser-method.js",t.vamtigerBrowserMethodJsonJs="https://cdn.jsdelivr.net/npm/vamtiger-browser-method@latest/build/vamtiger-browser-method.js.json.js"}(p||(p={})),function(t){t.notBrowser="This is not a web browser",t.noFormForSelector="No Form for Selector",t.noFieldInFormForSelector="No Field in Form for Selector"}(d||(d={})),function(t){t.bundleSource="bundle-source"}(l||(l={})),function(t){t.primary="primary",t.secondary="secondary"}(m||(m={})),function(t){t.loadCritical="loadCritical",t.load="load"}(f||(f={})),function(t){t.innerHTML="innerHTML"}(h||(h={})),function(t){t.touchSupport="vamtigerTouchSupport"}(w||(w={})),function(t){t.elementQuery="vamtiger-element-query-support"}(v||(v={})),function(t){t.elementQuery="https://cdn.jsdelivr.net/npm/eqcss@latest/EQCSS.min.js"}(b||(b={}));Object.assign(e,{365080655670:365080655670}),p.vamtigerBrowserMethod;var g=s.vamtigerBrowserSupport,S=e.slash,y=s.vamtigerBrowserSupport,j=window[y],B=Array.from(j.children).sort(),F={supported:[],unsupported:[]},M=Object.keys(F).sort(),E=[function(){return describe("Meta Element",function(){it("Added to document head",function(){return r=this,e=void 0,n=function(){var r;return __generator(this,function(e){return r=document.head.querySelector("[id="+g+"]"),t.expect(r).to.be.ok,[2]})},new((o=void 0)||(o=Promise))(function(t,s){function i(t){try{u(n.next(t))}catch(t){s(t)}}function a(t){try{u(n.throw(t))}catch(t){s(t)}}function u(r){r.done?t(r.value):new o(function(t){t(r.value)}).then(i,a)}u((n=n.apply(r,e)).next())});var r,e,o,n})})},function(){return describe("Browser Support Scripts",function(){B.forEach(function(t){var r=t.dataset.url.split(S),e=r[r.length-1],o=t.dataset.hasOwnProperty("supported")?"supported":"unsupported";F[o].push(e)}),M.forEach(function(r){return describe(r,function(){F[r].forEach(function(r){return it(r,function(){t.expect(r).to.be.ok})})})})})}];r.setup("bdd"),E.forEach(function(t){return t()}),r.run()}(chai,mocha);
//# sourceMappingURL=browser.js.map
