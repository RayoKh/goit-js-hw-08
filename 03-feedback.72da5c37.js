var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n="Expected a function",i=0/0,o=/^\s+|\s+$/g,r=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,a=/^0o[0-7]+$/i,f=parseInt,l="object"==typeof e&&e&&e.Object===Object&&e,c="object"==typeof self&&self&&self.Object===Object&&self,s=l||c||Function("return this")(),d=Object.prototype.toString,m=Math.max,g=Math.min,p=function(){return s.Date.now()};function v(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function y(e){if("number"==typeof e)return e;if("symbol"==typeof(t=e)||t&&"object"==typeof t&&"[object Symbol]"==d.call(t))return i;if(v(e)){var t,n="function"==typeof e.valueOf?e.valueOf():e;e=v(n)?n+"":n}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(o,"");var l=u.test(e);return l||a.test(e)?f(e.slice(2),l?2:8):r.test(e)?i:+e}t=function(e,t,i){var o=!0,r=!0;if("function"!=typeof e)throw TypeError(n);return v(i)&&(o="leading"in i?!!i.leading:o,r="trailing"in i?!!i.trailing:r),function(e,t,i){var o,r,u,a,f,l,c=0,s=!1,d=!1,b=!0;if("function"!=typeof e)throw TypeError(n);function j(t){var n=o,i=r;return o=r=void 0,c=t,a=e.apply(i,n)}function S(e){var n=e-l,i=e-c;return void 0===l||n>=t||n<0||d&&i>=u}function T(){var e,n,i,o=p();if(S(o))return h(o);f=setTimeout(T,(e=o-l,n=o-c,i=t-e,d?g(i,u-n):i))}function h(e){return(f=void 0,b&&o)?j(e):(o=r=void 0,a)}function O(){var e,n=p(),i=S(n);if(o=arguments,r=this,l=n,i){if(void 0===f)return c=e=l,f=setTimeout(T,t),s?j(e):a;if(d)return f=setTimeout(T,t),j(l)}return void 0===f&&(f=setTimeout(T,t)),a}return t=y(t)||0,v(i)&&(s=!!i.leading,u=(d="maxWait"in i)?m(y(i.maxWait)||0,t):u,b="trailing"in i?!!i.trailing:b),O.cancel=function(){void 0!==f&&clearTimeout(f),c=0,o=l=r=f=void 0},O.flush=function(){return void 0===f?a:h(p())},O}(e,t,{leading:o,maxWait:t,trailing:r})};const b={form:document.querySelector("form"),email:document.querySelector("input"),message:document.querySelector("textarea"),submit:document.querySelector("button")},j={};b.form.addEventListener("input",(function(e){return e&&e.__esModule?e.default:e})(t)(function(e){j[e.target.name]=e.target.value,localStorage.setItem("feedback-form-state",JSON.stringify(j))}),500),b.form.addEventListener("submit",e=>{e.preventDefault(),console.log(j),e.currentTarget.reset()}),function(){let e=localStorage.getItem("feedback-form-state");if(e){let t=JSON.parse(e);b.email.value=t.email,b.message.value=t.message}}();
//# sourceMappingURL=03-feedback.72da5c37.js.map
