(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{"1M8p":function(e,t,a){"use strict";a.d(t,"a",(function(){return E})),a.d(t,"b",(function(){return b})),a.d(t,"c",(function(){return p})),a.d(t,"d",(function(){return g})),a.d(t,"e",(function(){return f})),a.d(t,"f",(function(){return O})),a.d(t,"g",(function(){return A})),a.d(t,"h",(function(){return L})),a.d(t,"i",(function(){return _}));var n=a("fodl"),r=a("EDwu"),i=a("TB4b"),o=a("ejdb"),l=a("SYRp"),u=a("NHSa"),c=a("dYVZ"),d=function(e,t,a,n){return new(a||(a=Promise))((function(r,i){function o(e){try{u(n.next(e))}catch(t){i(t)}}function l(e){try{u(n.throw(e))}catch(t){i(t)}}function u(e){var t;e.done?r(e.value):(t=e.value,t instanceof a?t:new a((function(e){e(t)}))).then(o,l)}u((n=n.apply(e,t||[])).next())}))},s=function(e,t){var a,n,r,i,o={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return i={next:l(0),throw:l(1),return:l(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function l(i){return function(l){return function(i){if(a)throw new TypeError("Generator is already executing.");for(;o;)try{if(a=1,n&&(r=2&i[0]?n.return:i[0]?n.throw||((r=n.return)&&r.call(n),0):n.next)&&!(r=r.call(n,i[1])).done)return r;switch(n=0,r&&(i=[2&i[0],r.value]),i[0]){case 0:case 1:r=i;break;case 4:return o.label++,{value:i[1],done:!1};case 5:o.label++,n=i[1],i=[0];continue;case 7:i=o.ops.pop(),o.trys.pop();continue;default:if(!(r=o.trys,(r=r.length>0&&r[r.length-1])||6!==i[0]&&2!==i[0])){o=0;continue}if(3===i[0]&&(!r||i[1]>r[0]&&i[1]<r[3])){o.label=i[1];break}if(6===i[0]&&o.label<r[1]){o.label=r[1],r=i;break}if(r&&o.label<r[2]){o.label=r[2],o.ops.push(i);break}r[2]&&o.ops.pop(),o.trys.pop();continue}i=t.call(e,o)}catch(l){i=[6,l],n=0}finally{a=r=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,l])}}},h=new n.a("helpers"),f=function(e){return!!e.shadowRoot&&!!e.attachShadow},E=function(e){r.a.dispatch(c.i,{event:c.h,message:i.a.get(e.message)})},g=function(e,t){r.a.dispatch(c.i,{event:c.j,message:e,data:t})},b=function(e){if(!e.phoneNumberValue)throw new Error(c.e);var t=e.phoneNumberValue.replace(/[-()\s]/g,"");return""+e.countryDialCodeValue+t},p=function(e){if(!(e in o.d))throw new Error("Invalid username Alias - "+e+". Instead use "+Object.values(o.d))},L=function(e){var t=function(t){return d(void 0,void 0,void 0,(function(){var a,n;return s(this,(function(r){switch(r.label){case 0:switch(a=t.payload,a.event){case c.j:return[3,1]}return[3,8];case 1:if(!a.message)return[3,7];if(a.message!==o.a.SignedIn)return[3,6];r.label=2;case 2:return r.trys.push([2,4,,5]),[4,l.a.currentAuthenticatedUser()];case 3:return n=r.sent(),e(a.message,n),[3,5];case 4:return r.sent(),h.error("User is not authenticated"),[3,5];case 5:return[3,7];case 6:e(a.message,a.data),r.label=7;case 7:return[3,8];case 8:return[2]}}))}))};return r.a.listen(c.i,t),function(){return r.a.remove(c.i,t)}},A=function(e){return!(null===e.hint||"string"==typeof e.hint)},_={address:{label:i.a.get(u.a.ADDRESS_LABEL),placeholder:i.a.get(u.a.ADDRESS_PLACEHOLDER)},nickname:{label:i.a.get(u.a.NICKNAME_LABEL),placeholder:i.a.get(u.a.NICKNAME_PLACEHOLDER)},birthdate:{label:i.a.get(u.a.BIRTHDATE_LABEL),placeholder:i.a.get(u.a.BIRTHDATE_PLACEHOLDER)},phone_number:{label:i.a.get(u.a.PHONE_LABEL),placeholder:i.a.get(u.a.PHONE_PLACEHOLDER)},email:{lable:i.a.get(u.a.EMAIL_LABEL),placeholder:i.a.get(u.a.EMAIL_PLACEHOLDER)},picture:{label:i.a.get(u.a.PICTURE_LABEL),placeholder:i.a.get(u.a.PICTURE_PLACEHOLDER)},family_name:{label:i.a.get(u.a.FAMILY_NAME_LABEL),placeholder:i.a.get(u.a.FAMILY_NAME_PLACEHOLDER)},preferred_username:{label:i.a.get(u.a.PREFERRED_USERNAME_LABEL),placeholder:i.a.get(u.a.PREFERRED_USERNAME_PLACEHOLDER)},gender:{label:i.a.get(u.a.GENDER_LABEL),placeholder:i.a.get(u.a.GENDER_PLACEHOLDER)},profile:{label:i.a.get(u.a.PROFILE_LABEL),placeholder:i.a.get(u.a.PROFILE_PLACEHOLDER)},given_name:{label:i.a.get(u.a.GIVEN_NAME_LABEL),placeholder:i.a.get(u.a.GIVEN_NAME_LABEL)},zoneinfo:{label:i.a.get(u.a.ZONEINFO_LABEL),placeholder:i.a.get(u.a.ZONEINFO_PLACEHOLDER)},locale:{label:i.a.get(u.a.LOCALE_LABEL),placeholder:i.a.get(u.a.LOCALE_PLACEHOLDER)},updated_at:{label:i.a.get(u.a.UPDATED_AT_LABEL),placeholder:i.a.get(u.a.UPDATED_AT_PLACEHOLDER)},middle_name:{label:i.a.get(u.a.MIDDLE_NAME_LABEL),placeholder:i.a.get(u.a.MIDDLE_NAME_PLACEHOLDER)},website:{label:i.a.get(u.a.WEBSITE_LABEL),placeholder:i.a.get(u.a.WEBSITE_PLACEHOLDER)},name:{label:i.a.get(u.a.NAME_LABEL),placeholder:i.a.get(u.a.NAME_PLACEHOLDER)}};function O(e,t){var a=e.target.name,n=e.target.value;a===c.b&&(t.countryDialCodeValue=n),a===c.k&&(t.phoneNumberValue=n)}},SYRp:function(e,t,a){"use strict";var n=a("3bF3");a("iQB3");t.a=n.a},ZEzI:function(e,t,a){"use strict";a.r(t),a.d(t,"amplify_federated_buttons",(function(){return c})),a.d(t,"amplify_strike",(function(){return d}));var n=a("Cx7U"),r=a("Vlo2"),i=a("ejdb"),o=a("3bF3"),l=(a("NHSa"),a("dYVZ")),u=a("1M8p"),c=function(){function e(e){Object(n.k)(this,e),this.authState=i.a.SignIn,this.federated={},this.handleAuthStateChange=u.d}return e.prototype.componentWillLoad=function(){if(!o.a||"function"!=typeof o.a.configure)throw new Error(l.d);var e=o.a.configure().oauth,t=void 0===e?{}:e;t.domain?this.federated.oauthConfig=Object.assign(Object.assign({},this.federated.oauthConfig),t):t.awsCognito&&(this.federated.oauthConfig=Object.assign(Object.assign({},this.federated.oauthConfig),t.awsCognito)),t.auth0&&(this.federated.auth0Config=Object.assign(Object.assign({},this.federated.auth0Config),t.auth0))},e.prototype.render=function(){if(!Object.values(i.a).includes(this.authState))return null;if(Object(r.d)(this.federated))return null;var e=this.federated,t=e.amazonClientId,a=e.auth0Config,o=e.facebookAppId,l=e.googleClientId,u=e.oauthConfig;return Object(n.i)("div",null,l&&Object(n.i)("div",null,Object(n.i)("amplify-google-button",{clientId:l,handleAuthStateChange:this.handleAuthStateChange})),o&&Object(n.i)("div",null,Object(n.i)("amplify-facebook-button",{appId:o,handleAuthStateChange:this.handleAuthStateChange})),t&&Object(n.i)("div",null,Object(n.i)("amplify-amazon-button",{clientId:t,handleAuthStateChange:this.handleAuthStateChange})),u&&Object(n.i)("div",null,Object(n.i)("amplify-oauth-button",{config:u})),a&&Object(n.i)("div",null,Object(n.i)("amplify-auth0-button",{config:a,handleAuthStateChange:this.handleAuthStateChange})))},e}(),d=function(){function e(e){Object(n.k)(this,e)}return e.prototype.render=function(){return Object(n.i)("span",{class:"strike-content"},Object(n.i)("slot",null))},e}();d.style=".sc-amplify-strike-h{--color:var(--amplify-grey);--border-color:var(--amplify-light-grey);--content-background:var(--amplify-white);display:block;width:100%;text-align:center;border-bottom:1px solid var(--border-color);line-height:0.1em;margin:32px 0;color:var(--color)}.strike-content.sc-amplify-strike{background:var(--content-background);padding:0 25px;font-size:var(--amplify-text-sm);font-weight:500}"}}]);
//# sourceMappingURL=40-a24f4ce95ca153afcf08.js.map