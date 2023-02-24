/* eslint-disable */
//prettier-ignore
module.exports = {
name: "@yarnpkg/plugin-dotenv-mono",
factory: function (require) {
"use strict";var plugin=(()=>{var ne=Object.create;var j=Object.defineProperty;var se=Object.getOwnPropertyDescriptor;var ie=Object.getOwnPropertyNames;var re=Object.getPrototypeOf,oe=Object.prototype.hasOwnProperty;var $=(t=>typeof require<"u"?require:typeof Proxy<"u"?new Proxy(t,{get:(e,n)=>(typeof require<"u"?require:e)[n]}):t)(function(t){if(typeof require<"u")return require.apply(this,arguments);throw new Error('Dynamic require of "'+t+'" is not supported')});var D=(t,e)=>()=>(e||t((e={exports:{}}).exports,e),e.exports),ae=(t,e)=>{for(var n in e)j(t,n,{get:e[n],enumerable:!0})},B=(t,e,n,s)=>{if(e&&typeof e=="object"||typeof e=="function")for(let r of ie(e))!oe.call(t,r)&&r!==n&&j(t,r,{get:()=>e[r],enumerable:!(s=se(e,r))||s.enumerable});return t};var ce=(t,e,n)=>(n=t!=null?ne(re(t)):{},B(e||!t||!t.__esModule?j(n,"default",{value:t,enumerable:!0}):n,t)),de=t=>B(j({},"__esModule",{value:!0}),t);var N=D((Se,le)=>{le.exports={name:"dotenv",version:"16.0.3",description:"Loads environment variables from .env file",main:"lib/main.js",types:"lib/main.d.ts",exports:{".":{require:"./lib/main.js",types:"./lib/main.d.ts",default:"./lib/main.js"},"./config":"./config.js","./config.js":"./config.js","./lib/env-options":"./lib/env-options.js","./lib/env-options.js":"./lib/env-options.js","./lib/cli-options":"./lib/cli-options.js","./lib/cli-options.js":"./lib/cli-options.js","./package.json":"./package.json"},scripts:{"dts-check":"tsc --project tests/types/tsconfig.json",lint:"standard","lint-readme":"standard-markdown",pretest:"npm run lint && npm run dts-check",test:"tap tests/*.js --100 -Rspec",prerelease:"npm test",release:"standard-version"},repository:{type:"git",url:"git://github.com/motdotla/dotenv.git"},keywords:["dotenv","env",".env","environment","variables","config","settings"],readmeFilename:"README.md",license:"BSD-2-Clause",devDependencies:{"@types/node":"^17.0.9",decache:"^4.6.1",dtslint:"^3.7.0",sinon:"^12.0.1",standard:"^16.0.4","standard-markdown":"^7.1.0","standard-version":"^9.3.2",tap:"^15.1.6",tar:"^6.1.11",typescript:"^4.5.4"},engines:{node:">=12"}}});var I=D((ke,E)=>{var fe=$("fs"),H=$("path"),ue=$("os"),he=N(),pe=he.version,ve=/(?:^|^)\s*(?:export\s+)?([\w.-]+)(?:\s*=\s*?|:\s+?)(\s*'(?:\\'|[^'])*'|\s*"(?:\\"|[^"])*"|\s*`(?:\\`|[^`])*`|[^#\r\n]+)?\s*(?:#.*)?(?:$|$)/mg;function ge(t){let e={},n=t.toString();n=n.replace(/\r\n?/mg,`
`);let s;for(;(s=ve.exec(n))!=null;){let r=s[1],i=s[2]||"";i=i.trim();let o=i[0];i=i.replace(/^(['"`])([\s\S]*)\1$/mg,"$2"),o==='"'&&(i=i.replace(/\\n/g,`
`),i=i.replace(/\\r/g,"\r")),e[r]=i}return e}function T(t){console.log(`[dotenv@${pe}][DEBUG] ${t}`)}function _e(t){return t[0]==="~"?H.join(ue.homedir(),t.slice(1)):t}function $e(t){let e=H.resolve(process.cwd(),".env"),n="utf8",s=Boolean(t&&t.debug),r=Boolean(t&&t.override);t&&(t.path!=null&&(e=_e(t.path)),t.encoding!=null&&(n=t.encoding));try{let i=x.parse(fe.readFileSync(e,{encoding:n}));return Object.keys(i).forEach(function(o){Object.prototype.hasOwnProperty.call(process.env,o)?(r===!0&&(process.env[o]=i[o]),s&&T(r===!0?`"${o}" is already defined in \`process.env\` and WAS overwritten`:`"${o}" is already defined in \`process.env\` and was NOT overwritten`)):process.env[o]=i[o]}),{parsed:i}}catch(i){return s&&T(`Failed to load ${e} ${i.message}`),{error:i}}}var x={config:$e,parse:ge};E.exports.config=x.config;E.exports.parse=x.parse;E.exports=x});var J=D((Oe,U)=>{"use strict";function me(t,e){let n=Array.from(t.matchAll(e));return n.length>0?n.slice(-1)[0].index:-1}function K(t,e,n){let s=me(t,/(?!(?<=\\))\$/g);if(s===-1)return t;let r=t.slice(s),i=/((?!(?<=\\))\${?([\w]+)(?::-([^}\\]*))?}?)/,o=r.match(i);if(o!=null){let[,v,u,h]=o;return K(t.replace(v,e[u]||h||n.parsed[u]||""),e,n)}return t}function we(t){return t.replace(/\\\$/g,"$")}function be(t){let e=t.ignoreProcessEnv?{}:process.env;for(let n in t.parsed){let s=Object.prototype.hasOwnProperty.call(e,n)?e[n]:t.parsed[n];t.parsed[n]=we(K(s,e,t))}for(let n in t.parsed)e[n]=t.parsed[n];return t}U.exports.expand=be});var Y=D(a=>{"use strict";var d=a&&a.__classPrivateFieldGet||function(t,e,n,s){if(n==="a"&&!s)throw new TypeError("Private accessor was defined without a getter");if(typeof e=="function"?t!==e||!s:!e.has(t))throw new TypeError("Cannot read private member from an object whose class did not declare it");return n==="m"?s:n==="a"?s.call(t):s?s.value:e.get(t)},l=a&&a.__classPrivateFieldSet||function(t,e,n,s,r){if(s==="m")throw new TypeError("Private method is not writable");if(s==="a"&&!r)throw new TypeError("Private accessor was defined without a setter");if(typeof e=="function"?t!==e||!r:!e.has(t))throw new TypeError("Cannot write private member to an object whose class did not declare it");return s==="a"?r.call(t,n):r?r.value=n:e.set(t,n),n},y=a&&a.__importDefault||function(t){return t&&t.__esModule?t:{default:t}},b,M,S,k,O,P,W,q,F,L;Object.defineProperty(a,"__esModule",{value:!0});a.config=a.dotenvConfig=a.load=a.dotenvLoad=a.Dotenv=void 0;var p=y($("fs")),ye=y($("os")),f=y($("path")),Q=y(I()),je=y(J()),m=class{constructor({cwd:e,debug:n,defaults:s,depth:r,encoding:i,expand:o,extension:v,override:u,path:h,priorities:C}={}){this.config={},this.env={},this.plain="",b.set(this,""),M.set(this,!1),S.set(this,".env.defaults"),k.set(this,4),O.set(this,"utf8"),P.set(this,!0),W.set(this,""),q.set(this,!1),F.set(this,""),L.set(this,{}),this.cwd=e,this.debug=n,this.defaults=s,this.depth=r,this.encoding=i,this.expand=o,this.extension=v,this.override=u,this.path=h,this.priorities=C,this.dotenvDefaultsMatcher=this.dotenvDefaultsMatcher.bind(this),this.dotenvMatcher=this.dotenvMatcher.bind(this)}get debug(){return d(this,M,"f")}set debug(e){e!=null&&l(this,M,e,"f")}get defaults(){return d(this,S,"f")}set defaults(e){e!=null&&l(this,S,e,"f")}get encoding(){return d(this,O,"f")}set encoding(e){e!=null&&l(this,O,e,"f")}get expand(){return d(this,P,"f")}set expand(e){e!=null&&l(this,P,e,"f")}get extension(){return d(this,W,"f")}set extension(e){e!=null&&l(this,W,e.replace(/^\.+/,"").replace(/\.+$/,""),"f")}get cwd(){var e;return d(this,b,"f")?d(this,b,"f"):(e=process.cwd())!==null&&e!==void 0?e:""}set cwd(e){l(this,b,e!=null?e:"","f")}get depth(){return d(this,k,"f")}set depth(e){e!=null&&l(this,k,e,"f")}get override(){return d(this,q,"f")}set override(e){e!=null&&l(this,q,e,"f")}get path(){return d(this,F,"f")}set path(e){e!=null&&l(this,F,e,"f")}get priorities(){var e;let n=(e=process.env.NODE_ENV)!==null&&e!==void 0?e:"development",s=this.extension?`.${this.extension}`:"";return Object.assign({[`.env${s}.${n}.local`]:75,[`.env${s}.local`]:50,[`.env${s}.${n}`]:25,[`.env${s}`]:1},d(this,L,"f"))}set priorities(e){e!=null&&l(this,L,e,"f")}parse(e){return Q.default.parse(e)}load(e=!0){this.env={},this.config={};let n=this.path||this.find();this.loadDotenv(n,e);let s=this.find(this.dotenvDefaultsMatcher);return this.loadDotenv(s,e,!0),this}loadDotenv(e,n,s=!1){if(!e||!p.default.existsSync(e))return;let r=p.default.readFileSync(e,{encoding:this.encoding,flag:"r"}),i=n?Q.default.config({path:e,debug:this.debug,encoding:this.encoding,override:!s&&this.override}):{parsed:this.parse(r),ignoreProcessEnv:!0};this.expand&&je.default.expand(i),this.mergeDotenvConfig(i),s||(this.plain=r)}mergeDotenvConfig(e){var n,s,r,i,o;this.config={parsed:Object.assign(Object.assign({},(n=this.config.parsed)!==null&&n!==void 0?n:{}),(s=e.parsed)!==null&&s!==void 0?s:{}),error:(i=(r=this.config.error)!==null&&r!==void 0?r:e.error)!==null&&i!==void 0?i:void 0},this.env=Object.assign(Object.assign({},this.env),(o=this.config.parsed)!==null&&o!==void 0?o:{})}loadFile(){return this.load(!1),this}find(e){e||(e=this.dotenvMatcher);let n=null,s=f.default.resolve(this.cwd),{root:r}=f.default.parse(s),i=0,o=!1;for(;i<this.depth;){i++;let{foundPath:v,foundDotenv:u}=e(n,s);if(n=u,o||(v&&(o=!0),s===r))break;s=f.default.dirname(s)}return n}dotenvMatcher(e,n){Object.keys(this.priorities).forEach(i=>{this.priorities[i]>-1&&p.default.existsSync(f.default.join(n,i))&&(e=f.default.join(n,i))});let r=e!=null?n:null;if(typeof r=="string")try{if(p.default.statSync(f.default.resolve(n,r)).isDirectory())return{foundPath:r,foundDotenv:e}}catch{}return{foundPath:r,foundDotenv:e}}dotenvDefaultsMatcher(e,n){p.default.existsSync(f.default.join(n,this.defaults))&&(e=f.default.join(n,this.defaults));let s=e!=null?n:null;if(typeof s=="string")try{if(p.default.statSync(f.default.resolve(n,s)).isDirectory())return{foundPath:s,foundDotenv:e}}catch{}return{foundPath:s,foundDotenv:e}}save(e){let n=this.path||this.find();if(!n||!p.default.existsSync(n))return this;let s=ye.default.EOL,r=/\n/g,i="\\n",o="gm",v=/\$/g,u="$$$",h="[^\\S\\r\\n]",C=/\r/g,V="\\r",R=c=>c.endsWith(`
`)||c.endsWith(`\r
`),w=!1,A=Object.keys(e).reduce((c,g)=>{let _=e[g].replace(r,i).replace(C,V).trim(),ee=this.escapeRegExp(g),G=new RegExp(`^(${h}*${ee}${h}*=${h}*).*?(${h}*)$`,o);if(G.test(c)){let te=_.replace(v,u);return c.replace(G,`$1${te}$2`)}else return c===""?(w=!0,`${g}=${_}${s}`):!R(c)&&!w?(w=!0,`${c}${s}${s}${g}=${_}`):R(c)?R(c)&&!w?(w=!0,`${c}${s}${g}=${_}${s}`):`${c}${g}=${_}${s}`:`${c}${s}${g}=${_}`},this.plain);return p.default.writeFileSync(n,A,{encoding:this.encoding}),this.plain=A,this}escapeRegExp(e){return e.replace(/[|\\{}()[\]^$+*?.]/g,"\\$&").replace(/-/g,"\\x2d")}};a.Dotenv=m;b=new WeakMap,M=new WeakMap,S=new WeakMap,k=new WeakMap,O=new WeakMap,P=new WeakMap,W=new WeakMap,q=new WeakMap,F=new WeakMap,L=new WeakMap;function z(t){return new m(t).load()}a.dotenvLoad=z;a.load=z;function X(t){return new m(t).load().config}a.dotenvConfig=X;a.config=X;a.default=m});var Ee={};ae(Ee,{hooks:()=>xe});var Z=ce(Y()),De=new Z.default().load(),xe={async setupScriptEnvironment(t,e){Object.entries(De).forEach(([n,s])=>{e[n]||(e[n]=s)})}};return de(Ee);})();
return plugin;
}
};
