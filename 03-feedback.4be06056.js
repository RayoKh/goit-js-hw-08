var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n="Expected a function",o=0/0,r=/^\s+|\s+$/g,i=/^[-+]0x[0-9a-f]+$/i,a=/^0b[01]+$/i,u=/^0o[0-7]+$/i,f=parseInt,l="object"==typeof e&&e&&e.Object===Object&&e,c="object"==typeof self&&self&&self.Object===Object&&self,s=l||c||Function("return this")(),m=Object.prototype.toString,d=Math.max,v=Math.min,g=function(){return s.Date.now()};function p(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function y(e){if("number"==typeof e)return e;if("symbol"==typeof(t=e)||t&&"object"==typeof t&&"[object Symbol]"==m.call(t))return o;if(p(e)){var t,n="function"==typeof e.valueOf?e.valueOf():e;e=p(n)?n+"":n}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(r,"");var l=a.test(e);return l||u.test(e)?f(e.slice(2),l?2:8):i.test(e)?o:+e}t=function(e,t,o){var r=!0,i=!0;if("function"!=typeof e)throw TypeError(n);return p(o)&&(r="leading"in o?!!o.leading:r,i="trailing"in o?!!o.trailing:i),function(e,t,o){var r,i,a,u,f,l,c=0,s=!1,m=!1,b=!0;if("function"!=typeof e)throw TypeError(n);function S(t){var n=r,o=i;return r=i=void 0,c=t,u=e.apply(o,n)}function j(e){var n=e-l,o=e-c;return void 0===l||n>=t||n<0||m&&o>=a}function T(){var e,n,o,r=g();if(j(r))return h(r);f=setTimeout(T,(e=r-l,n=r-c,o=t-e,m?v(o,a-n):o))}function h(e){return(f=void 0,b&&r)?S(e):(r=i=void 0,u)}function O(){var e,n=g(),o=j(n);if(r=arguments,i=this,l=n,o){if(void 0===f)return c=e=l,f=setTimeout(T,t),s?S(e):u;if(m)return f=setTimeout(T,t),S(l)}return void 0===f&&(f=setTimeout(T,t)),u}return t=y(t)||0,p(o)&&(s=!!o.leading,a=(m="maxWait"in o)?d(y(o.maxWait)||0,t):a,b="trailing"in o?!!o.trailing:b),O.cancel=function(){void 0!==f&&clearTimeout(f),c=0,r=l=i=f=void 0},O.flush=function(){return void 0===f?u:h(g())},O}(e,t,{leading:r,maxWait:t,trailing:i})};const b={form:document.querySelector("form"),email:document.querySelector("input"),message:document.querySelector("textarea"),submit:document.querySelector("button")},S=document.querySelector("input"),j=document.querySelector("textarea");(function(){let e=localStorage.getItem("feedback-form-state");if(e){let t=JSON.parse(e);b.email.value=t.email,b.message.value=t.message}})(),b.form.addEventListener("input",(function(e){return e&&e.__esModule?e.default:e})(t)(function(e){let t={email:S.value,message:j.value};localStorage.setItem("feedback-form-state",JSON.stringify(t))}),500),b.form.addEventListener("submit",e=>{e.preventDefault();let t={email:S.value,message:j.value};console.log(t),e.currentTarget.reset(),localStorage.removeItem("feedback-form-state")});
//# sourceMappingURL=03-feedback.4be06056.js.map