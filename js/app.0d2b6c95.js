(function(t){function e(e){for(var a,o,i=e[0],c=e[1],l=e[2],f=0,d=[];f<i.length;f++)o=i[f],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&d.push(r[o][0]),r[o]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);u&&u(e);while(d.length)d.shift()();return s.push.apply(s,l||[]),n()}function n(){for(var t,e=0;e<s.length;e++){for(var n=s[e],a=!0,i=1;i<n.length;i++){var c=n[i];0!==r[c]&&(a=!1)}a&&(s.splice(e--,1),t=o(o.s=n[0]))}return t}var a={},r={app:0},s=[];function o(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=t,o.c=a,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)o.d(n,a,function(e){return t[e]}.bind(null,a));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=e,i=i.slice();for(var l=0;l<i.length;l++)e(i[l]);var u=c;s.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";n("85ec")},"0de0":function(t){t.exports=JSON.parse('{"a":[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[],"name":"defaultAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"defaultInterval","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"stateMutability":"payable","type":"receive"},{"inputs":[{"internalType":"address","name":"newManager","type":"address"}],"name":"changeManager","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address[]","name":"tokenList","type":"address[]"}],"name":"retrieveToken","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"tokenContractAddress","type":"address"}],"name":"getClaimInterval","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"tokenContractAddress","type":"address"}],"name":"getClaimAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"intervalSeconds","type":"uint256"}],"name":"setDefaultIntervalSeconds","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"setDefaultAmount","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"tokenContractAddress","type":"address"},{"internalType":"uint256","name":"interval","type":"uint256"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"setClaimSetting","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"tokenContractAddress","type":"address"}],"name":"claimToken","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"claimCfx","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"tokenContractAddress","type":"address"}],"name":"claimTokenRegardingSenderBalance","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"claimCfxRegardingSenderBalance","outputs":[],"stateMutability":"nonpayable","type":"function"}]}')},1164:function(t,e,n){"use strict";n("7c2a")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("el-container",{staticStyle:{height:"100%"}},[n("el-header",{staticStyle:{background:"#409eff"}},[n("el-row",{staticClass:"full-height",attrs:{type:"flex",align:"middle",justify:"left"}},[n("el-col",{attrs:{span:6}},[n("label",{staticClass:"white-font bold-font"},[t._v(t._s(t.$t("message.title")))])]),n("el-col",{attrs:{offset:6,span:2}},[t.isDev?n("el-switch",{staticStyle:{display:"block"},attrs:{"active-color":"#13ce66","inactive-text":"开发模式"},on:{change:t.changeDev},model:{value:t.isDev,callback:function(e){t.isDev=e},expression:"isDev"}}):t._e()],1),n("el-col",{attrs:{offset:1,span:3}},[n("el-tag",[t._v(t._s(t.networkText))])],1),t.accountConnected?t._e():n("el-col",{attrs:{span:4}},[n("el-button",{staticClass:"full-width",attrs:{round:""},on:{click:t.authorize}},[t._v(t._s(t.$t("message.connect")))])],1),t.accountConnected?n("el-col",{attrs:{span:4}},[n("el-button",{staticClass:"full-width",attrs:{type:"success"},on:{click:t.showAccount}},[t._v(" "+t._s(t.simplifiedAccount)),n("i",{staticClass:"el-icon-check el-icon--right"})])],1):t._e(),n("el-col",{attrs:{span:2}},[n("el-dropdown",{staticClass:"full-width",on:{command:t.handleLangCommand}},[n("div",{staticClass:"el-dropdown-link full-width bold-font right-align",staticStyle:{color:"white"}},[t._v(" "+t._s(t.localeText)),n("i",{staticClass:"el-icon-arrow-down el-icon--right"})]),n("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[n("el-dropdown-item",{attrs:{command:"zh-CN"}},[t._v("中文")]),n("el-dropdown-item",{attrs:{command:"en"}},[t._v("en")])],1)],1)],1)],1)],1),n("el-dialog",{attrs:{visible:t.accountDialogVisible,title:t.$t("message.currentAccountAddress"),width:"45%","show-close":!1},on:{"update:visible":function(e){t.accountDialogVisible=e}}},[n("el-row",[n("span",[n("el-link",{attrs:{href:t.scanAccountUrl,type:"primary",target:"_blank"}},[t._v(t._s(t.account)+" "),n("i",{staticClass:"el-icon-top-right el-icon--right"})])],1)])],1),n("el-dialog",{attrs:{visible:t.installationDialogVisible,title:t.$t("message.error.installationError"),"close-on-click-modal":!1,width:"45%","show-close":!1},on:{"update:visible":function(e){t.installationDialogVisible=e}}},[n("el-row",[t._v(" "+t._s(t.$t("message.tooltip.faucet.portal.beg"))),n("el-link",{attrs:{href:"https://portal.confluxnetwork.org/",type:"primary",target:"_blank"}},[t._v("ConfluxPortal"),n("i",{staticClass:"el-icon-top-right el-icon--right"})]),t._v(t._s(t.$t("message.tooltip.faucet.portal.end"))+" ")],1)],1),n("el-dialog",{attrs:{visible:t.networkDialogVisible,title:t.$t("message.error.networkError"),"close-on-click-modal":!1,width:"45%","show-close":!1},on:{"update:visible":function(e){t.networkDialogVisible=e}}},[n("el-row",{staticClass:"no-break"},[t._v(" "+t._s(t.networkWarning)+" ")])],1),n("el-main",{staticClass:"main-background"},[n("faucet-panel")],1)],1)],1)},s=[],o=n("1da1"),i=(n("96cf"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("el-row",{attrs:{type:"flex",justify:"center"}},[n("el-col",{attrs:{span:20}},[n("el-card",{attrs:{shadow:"hover"}},[n("el-row",[n("el-col",{attrs:{span:7}},[t._v(t._s(t.$t("message.selectToken")))]),n("el-col",{attrs:{span:11}},[n("el-select",{staticClass:"full-width",attrs:{filterable:"",placeholder:t.$t("message.selectText"),size:"mini",disabled:!t.isFreeState},model:{value:t.selectedToken,callback:function(e){t.selectedToken=e},expression:"selectedToken"}},t._l(t.options,(function(t){return n("el-option",{key:t.value,attrs:{label:t.label,value:t.value,disabled:t.disabled}})})),1)],1),n("el-col",{attrs:{offset:1,span:3}},[n("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:t.claimWarning,placement:"bottom-start",disabled:!t.isButtonDisabled}},[n("div",[n("el-button",{attrs:{type:"primary",size:"mini",disabled:t.isButtonDisabled},on:{click:t.claim}},[t._v(" "+t._s(t.$t("message.claim"))+" ")])],1)])],1)],1),t.isDev?n("el-row",{attrs:{type:"flex"}},[n("el-col",{attrs:{span:7}},[t._v("代币余额")]),n("el-col",{attrs:{span:10}},[n("div",{staticClass:"full-width"},[t._v(" "+t._s(t.queryingBalance)+" ")])]),n("el-col",{attrs:{span:1}},[(t.isNativeToken?t.cfxBalance:t.tokenBalance)?n("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:t.isNativeToken?t.cfxBalance:t.tokenBalance,placement:"right"}},[n("div",{staticClass:"right-align bold-font"},[n("label",{staticClass:"main-background"},[t._v(" ... ")])])]):t._e()],1)],1):t._e(),t.isDev?n("el-divider"):t._e(),t.isDev?n("el-row",{attrs:{type:"flex"}},[n("el-col",{attrs:{span:7}},[t._v(" 代币池余额 "),n("el-tooltip",{attrs:{effect:"light",content:"代币池余额并非实时更新，用户操作后会进行更新"}},[n("i",{staticClass:"header-icon el-icon-info"})])],1),n("el-col",{attrs:{span:10}},[n("div",{staticClass:"full-width"},[t._v(" "+t._s(t.queryingFaucetBalance)+" ")])]),n("el-col",{attrs:{span:1}},[(t.isNativeToken?t.faucetCfxBalance:t.faucetTokenBalance)?n("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:t.isNativeToken?t.faucetCfxBalance:t.faucetTokenBalance,placement:"right"}},[n("div",{staticClass:"right-align bold-font"},[n("label",{staticClass:"main-background"},[t._v(" ... ")])])]):t._e()],1),n("el-col",{attrs:{offset:1,span:2}},[n("el-input",{attrs:{oninput:"value=value.replace(/[^\\d]/g,'')",size:"mini",placeholder:t.defaultDepositAmount},model:{value:t.depositAmount,callback:function(e){t.depositAmount=e},expression:"depositAmount"}})],1),t.isDev?n("el-col",{attrs:{span:1}},[n("el-button",{attrs:{type:"warning",size:"mini",disabled:!t.isFreeState},on:{click:t.deposit}},[t._v(" deposit ")])],1):t._e()],1):t._e()],1)],1)],1),!t.isFreeState||t.latestTransactionInfo.selectedToken?n("el-row",{attrs:{type:"flex",justify:"center"}},[n("el-col",{attrs:{span:20}},[n("current-transaction-panel",{attrs:{latestTransactionInfo:t.latestTransactionInfo,tagTheme:t.tagTheme,stateType:t.stateType,txState:t.txState},on:{"show-tx-state":t.showTxState}})],1)],1):t._e(),n("el-row",{attrs:{type:"flex",justify:"center"}},[n("el-col",{attrs:{span:20}},[n("info-panel",{attrs:{faucetAmount:t.faucetAmount,faucetInterval:t.faucetInterval,selectedToken:t.selectedToken?t.selectedToken:""}})],1)],1),n("el-dialog",{attrs:{visible:t.executedDialogVisible,title:t.$t("message.successClaim"),width:"45%","show-close":!1},on:{"update:visible":function(e){t.executedDialogVisible=e}}},[n("el-row",[n("span",[t._v(" "+t._s(t.$t("message.transactionHash"))+" "),n("el-tooltip",{attrs:{effect:"light",content:t.$t("message.tooltip.successClaim")}},[n("i",{staticClass:"header-icon el-icon-info"})]),t._v("： "),n("el-link",{attrs:{href:t.scanTransacationUrl,type:"primary",target:"_blank"}},[t._v(t._s(t.latestTransactionInfo.hash)+" "),n("i",{staticClass:"el-icon-top-right el-icon--right"})])],1)]),n("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[n("el-button",{attrs:{type:"primary"},on:{click:function(e){t.executedDialogVisible=!1}}},[t._v(t._s(t.$t("message.ok")))])],1)],1),n("el-dialog",{attrs:{visible:t.txStateDialogVisible,title:t.$t("message.currentTransactionStatus"),width:"45%","show-close":!1},on:{"update:visible":function(e){t.txStateDialogVisible=e}}},[n("el-row",{staticClass:"no-break"},[t._v(" "+t._s(t.stateMessage)+" ")])],1)],1)}),c=[],l=(n("159b"),n("b64b"),n("d3b7"),n("3ca3"),n("ddb0"),n("25f0"),n("0de0")),u="NET8888:TYPE.CONTRACT:ACDKDB5RYVBV7VKUU9JEWRAFJ2HAHF2YHJVX118BMA",f={8888:{abi:l["a"],address:u}},d=f,p=n("7289"),h=[{address:"cfx:aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa0sfbnjm2",label:"CFX",symbol:"CFX"}],m={};h.forEach((function(t){m[t.symbol]={abi:p["a"],address:t.address,label:t.label}}));var g=m,x=(n("dca8"),{NoTask:"NoTask",Pending:"Pending",Executed:"Executed",Confirmed:"Confirmed",Error:"Error",isFree:function(t){switch(t){case x.NoTask:case x.Confirmed:case x.Error:return!0;default:return!1}}});Object.freeze(x);var k=x,v={BalanceError:"balanceError",TransactionError:"transactionError"};Object.freeze(v);var y=v,b=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("el-card",[n("el-row",{attrs:{slot:"header"},slot:"header"},[n("el-col",{attrs:{span:12}},[n("span",[t._v(t._s(t.$t("message.latestOperationStatus")))])]),n("el-col",{attrs:{span:12}},[n("el-tag",{staticStyle:{cursor:"pointer"},attrs:{effect:t.tagTheme,type:t.stateType,size:"mini"},on:{click:function(e){return t.$emit("show-tx-state")}}},[t._v(t._s(t.txState))])],1)],1),n("el-collapse",[n("transaction-line",{attrs:{transactionInfo:t.latestTransactionInfo}})],1)],1)},T=[],w=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("el-collapse-item",[n("el-row",{staticClass:"full-width",attrs:{slot:"title",type:"flex"},slot:"title"},[n("el-col",{attrs:{span:4}},[n("div",[t._v(t._s(t.$t("message.token"))+": "+t._s(t.selectedToken))])]),n("el-col",{attrs:{span:6}},[n("div",[t._v(t._s(t.$t("message.operationType"))+": "),t.isClaim?t._e():n("span",[t._v("存入")]),t.isClaim?n("span",[t._v(t._s(t.$t("message.claim")))]):t._e()])]),n("el-col",{attrs:{span:8}},[n("div",[t._v(t._s(t.$t("message.tokenAmount"))+": "+t._s(t.amount))])]),n("el-col",{staticStyle:{"text-align":"right"},attrs:{span:12}},[n("div",[t._v(t._s(t.formattedDate)+" ")])])],1),n("el-row",[n("span",[t._v(t._s(t.$t("message.transactionHash"))+"："),n("el-link",{attrs:{href:t.scanTransacationUrl,type:"primary",target:"_blank"}},[t._v(t._s(t.hash)+" "),n("i",{staticClass:"el-icon-top-right el-icon--right"})])],1)]),n("el-row",[t._v(" "+t._s(t.$t("message.operator"))+": "),n("el-link",{attrs:{href:t.scanFromUrl,type:"primary",target:"_blank"}},[t._v(t._s(t.from)+" "),n("i",{staticClass:"el-icon-top-right el-icon--right"})])],1),t.isNativeToken?t._e():n("el-row",[t._v(" "+t._s(t.$t("message.tokenContractAddress"))+": "),n("el-link",{attrs:{href:t.scanContractUrl,type:"primary",target:"_blank"}},[t._v(t._s(t.tokenAddress)+" "),n("i",{staticClass:"el-icon-top-right el-icon--right"})])],1)],1)},C=[],_=(n("ac1f"),n("5319"),n("bf19"),n("a15b"),"https://testnet.confluxscan.io"),S="https://confluxscan.io",I="https://posrc.confluxscan.net",$={1:_,1029:S,8888:I};function B(t,e,n){return[$[parseInt(n)],e,t].join("/")}var A={name:"HistoryTransactionLine",props:["transactionInfo"],data:function(){return{}},computed:{hash:function(){return this.transactionInfo.hash},timestamp:function(){return this.transactionInfo.timestamp},selectedToken:function(){return this.transactionInfo.selectedToken},tokenAddress:function(){return this.transactionInfo.tokenAddress},chainId:function(){return this.transactionInfo.chainId},from:function(){return this.transactionInfo.from},isNativeToken:function(){return"CFX"===this.transactionInfo.selectedToken},isClaim:function(){return this.transactionInfo.isClaim},amount:function(){return this.transactionInfo.amount},formattedDate:function(){var t=(new Date).getTimezoneOffset();if(!this.timestamp)return"";var e=new Date(this.timestamp-60*t*1e3);return e.toJSON().substr(0,19).replace("T"," ")},scanTransacationUrl:function(){return B(this.hash,"transaction",this.chainId)},scanContractUrl:function(){return B(this.tokenAddress,"address",this.chainId)},scanFromUrl:function(){return B(this.from,"address",this.chainId)}}},D=A,E=n("2877"),F=Object(E["a"])(D,w,C,!1,null,"2c07de5b",null),O=F.exports,R={components:{TransactionLine:O},name:"CurrentTransactionPanel",props:["latestTransactionInfo","tagTheme","stateType","txState"]},P=R,j=Object(E["a"])(P,b,T,!1,null,"2935eb16",null),N=j.exports,M=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("el-card",[n("ul",[n("li",[t._v(" "+t._s(t.$t("message.tooltip.faucet.frequency.beg"))),n("el-tag",{attrs:{type:"warning",size:"mini"}},[t._v(t._s(t.faucetInterval)+"s")]),t._v(t._s(t.$t("message.tooltip.faucet.frequency.mid",{token:t.token}))),n("el-tag",{attrs:{type:"success",size:"mini"}},[t._v(t._s(t.faucetAmount))]),t._v(t._s(t.$t("message.tooltip.faucet.frequency.end",{token:t.token}))+" ")],1),n("li",[t._v(" "+t._s(t.$t("message.tooltip.faucet.portal.beg"))),n("el-link",{attrs:{href:"https://portal.confluxnetwork.org/",type:"primary",target:"_blank"}},[t._v("ConfluxPortal"),n("i",{staticClass:"el-icon-top-right el-icon--right"})]),t._v(t._s(t.$t("message.tooltip.faucet.portal.end"))+" ")],1)])])},V=[],J={name:"InfoPanel",props:["faucetAmount","faucetInterval","selectedToken"],computed:{token:function(){return this.selectedToken?this.selectedToken:"CFX"}}},z=J,W=(n("1164"),Object(E["a"])(z,M,V,!1,null,"60e64c0e",null)),q=W.exports,L={components:{InfoPanel:q,CurrentTransactionPanel:N},name:"FaucetPanel",data:function(){return{selectedToken:"",depositAmount:"",defaultDepositAmount:"10",contract:null,tokenBalance:null,faucetCfxBalance:null,faucetTokenBalance:null,faucetInterval:null,faucetAmount:null,txState:k.NoTask,latestTransactionInfo:{hash:null,selectedToken:null,tokenAddress:null,chainId:null,timestamp:null,from:null,isClaim:null,amount:null},errors:{transactionError:null,balanceError:null},tagTheme:"dark",executedDialogVisible:!1,txStateDialogVisible:!1}},computed:{scanTransacationUrl:function(){return this.latestTransactionInfo?B(this.latestTransactionInfo.hash,"transaction",this.chainId):""},account:function(){return this.$store.state.account},conflux:function(){return this.$store.state.conflux},confluxJS:function(){return this.$store.state.confluxJS},sdk:function(){return this.$store.state.sdk},cfxBalance:function(){return this.$store.state.cfxBalance},chainId:function(){var t;return null===(t=this.conflux)||void 0===t?void 0:t.chainId},isNativeToken:function(){return"CFX"===this.selectedToken},claimWarning:function(){return this.account?this.selectedToken?null:this.$t("message.warning.tokenWarning"):this.$t("message.warning.connectionWarning")},queryingBalance:function(){return this.isDev?this.isNativeToken?null===this.cfxBalance?this.$t("message.warning.connectionWarning"):this.sdk.Drip(this.cfxBalance).toCFX():this.account?this.selectedToken?this.tokenBalance?this.sdk.Drip(this.tokenBalance).toCFX():this.$t("message.onRequest"):this.$t("message.warning.tokenWarning"):this.$t("message.warning.connectionWarning"):null},queryingFaucetBalance:function(){return this.isDev?this.isNativeToken?null===this.faucetCfxBalance?this.$t("message.onRequest"):this.sdk.Drip(this.faucetCfxBalance).toCFX():this.selectedToken?this.faucetTokenBalance?this.sdk.Drip(this.faucetTokenBalance).toCFX():this.$t("message.onRequest"):this.$t("message.warning.tokenWarning"):null},stateType:function(){switch(this.txState){case k.Error:return"danger";case k.Confirmed:return"success";case k.Executed:case k.Pending:return"warning";default:return"info"}},stateMessage:function(){switch(this.txState){case k.Error:return k.Error+":"+this.errors["transactionError"].message;case k.Executed:return k.Executed+", Not Confirmed yet. TransactionHash: "+this.latestTransactionInfo.hash;default:return this.txState}},isFreeState:function(){return this.txState===k.Executed||k.isFree(this.txState)},hasTask:function(){return this.txState!==k.NoTask},accountConnected:function(){return null!==this.$store.state.account},options:function(){var t=[];return g?(Object.keys(g).forEach((function(e){t.push({value:e,label:g[e].label,disabled:!1})})),t):t},faucetContract:function(){return console.log("chainId",this.chainId),this.confluxJS&&this.sdk&&this.conflux?1!==parseInt(this.chainId)&&8888!==parseInt(this.chainId)?null:this.confluxJS.Contract(d[parseInt(this.chainId)]):null},isDev:function(){return this.$store.state.isDev},isButtonDisabled:function(){return!this.isFreeState||!Boolean(this.account)||!Boolean(this.selectedToken)}},watch:{account:function(t){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(!t){n.next=5;break}return n.next=3,e.updateTokenBalance();case 3:n.next=6;break;case 5:e.resetBalance();case 6:case"end":return n.stop()}}),n)})))()},faucetContract:function(t){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(!t){n.next=3;break}return n.next=3,Promise.all([e.updateFaucetCfxBalance(),e.updateFaucetInterval(),e.updateFaucetAmount()]);case 3:case"end":return n.stop()}}),n)})))()},selectedToken:function(t){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if("CFX"!==t){n.next=5;break}return e.contract={address:g[t].address},n.next=4,Promise.all([e.updateFaucetInterval(),e.updateFaucetAmount()]);case 4:return n.abrupt("return");case 5:return n.prev=5,e.contract=e.confluxJS.Contract(g[t]),n.next=9,Promise.all([e.updateFaucetInterval(),e.updateFaucetAmount(),e.updateTokenBalance(),e.updateFaucetTokenBalance()]);case 9:n.next=14;break;case 11:n.prev=11,n.t0=n["catch"](5),e.processError(n.t0);case 14:case"end":return n.stop()}}),n,null,[[5,11]])})))()}},methods:{notifyTxState:function(){this.txState===k.Executed&&this.latestTransactionInfo.isClaim?this.executedDialogVisible=!0:this.$notify({title:this.txState,type:this.stateType,offset:60,duration:6e3})},authorize:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$store.dispatch("authorize");case 3:return e.next=5,t.updateTokenBalance();case 5:e.next=10;break;case 7:e.prev=7,e.t0=e["catch"](0),t.processError(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))()},showTxState:function(){this.txStateDialogVisible=!0},updateTokenBalance:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(t.isDev){e.next=2;break}return e.abrupt("return");case 2:if(e.prev=2,t.account&&t.contract&&!t.isNativeToken){e.next=5;break}return e.abrupt("return");case 5:return e.next=7,t.contract.balanceOf(t.account);case 7:n=e.sent.toString(),t.tokenBalance=n,e.next=15;break;case 11:throw e.prev=11,e.t0=e["catch"](2),e.t0._type=y.BalanceError,e.t0;case 15:case"end":return e.stop()}}),e,null,[[2,11]])})))()},updateFaucetAmount:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.faucetAmount="...loading...",n=""==t.selectedToken?g["CFX"].address:t.contract.address,e.t0=t.sdk,e.next=5,t.faucetContract.getClaimAmount(n);case 5:e.t1=e.sent.toString(),t.faucetAmount=e.t0.Drip.call(e.t0,e.t1).toCFX();case 7:case"end":return e.stop()}}),e)})))()},updateFaucetInterval:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.faucetInterval="...loading...",n=""==t.selectedToken?g["CFX"].address:t.contract.address,e.next=4,t.faucetContract.getClaimInterval(n);case 4:t.faucetInterval=e.sent.toString();case 5:case"end":return e.stop()}}),e)})))()},updateFaucetCfxBalance:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(t.isDev){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,t.confluxJS.getBalance(t.faucetContract.address);case 4:t.faucetCfxBalance=e.sent.toString();case 5:case"end":return e.stop()}}),e)})))()},updateFaucetTokenBalance:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(t.isDev){e.next=2;break}return e.abrupt("return",null);case 2:if(e.prev=2,t.contract&&!t.isNativeToken){e.next=5;break}return e.abrupt("return");case 5:return e.next=7,t.contract.balanceOf(t.faucetContract.address);case 7:n=e.sent.toString(),t.faucetTokenBalance=n,e.next=15;break;case 11:throw e.prev=11,e.t0=e["catch"](2),e.t0._type=y.BalanceError,e.t0;case 15:case"end":return e.stop()}}),e,null,[[2,11]])})))()},fromCfxToDrip:function(t){return this.sdk.Drip.fromCFX(t)},claim:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){var n,a,r,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.resetLatestTransactionInfo(),t.txState=k.NoTask,t.errors[y.TransactionError]=null,e.prev=3,e.next=6,t.authorize();case 6:return e.t0=t.sdk,e.next=9,t.faucetContract.getClaimAmount(t.contract.address);case 9:return e.t1=e.sent.toString(),t.latestTransactionInfo.amount=e.t0.Drip.call(e.t0,e.t1).toCFX(),console.log("address",t.contract.address),a=t.faucetContract.claimToken(t.contract.address),e.next=15,a.estimateGasAndCollateral({from:t.account});case 15:return r=e.sent,n=a.sendTransaction({from:t.account,value:0,gasPrice:1,gas:r.gasLimit}),t.latestTransactionInfo.chainId=t.chainId,t.latestTransactionInfo.from=t.account,t.latestTransactionInfo.isClaim=!0,t.latestTransactionInfo.selectedToken=t.selectedToken,t.latestTransactionInfo.tokenAddress=t.contract.address,e.next=24,n;case 24:return t.txState=k.Pending,t.notifyTxState(),e.next=28,n.executed();case 28:return s=e.sent,t.latestTransactionInfo.hash=s.transactionHash,t.txState=k.Executed,t.latestTransactionInfo.timestamp=Date.now(),e.next=34,Promise.all([t.$store.dispatch("updateCfxBalance"),t.updateTokenBalance(),t.updateFaucetCfxBalance(),t.updateFaucetTokenBalance()]);case 34:return t.notifyTxState(),e.next=37,n.confirmed();case 37:s=e.sent,t.latestTransactionInfo.hash===s.transactionHash&&(t.txState=k.Confirmed,t.notifyTxState()),e.next=45;break;case 41:e.prev=41,e.t2=e["catch"](3),e.t2._type=y.TransactionError,t.processError(e.t2);case 45:case"end":return e.stop()}}),e,null,[[3,41]])})))()},deposit:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){var n,a,r,s,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.resetLatestTransactionInfo(),t.txState=k.NoTask,t.errors[y.TransactionError]=null,e.prev=3,e.next=6,t.authorize();case 6:if(n=t.depositAmount?t.depositAmount:t.defaultDepositAmount,t.isNativeToken){e.next=15;break}return r=t.contract.transfer(t.faucetContract.address,t.fromCfxToDrip(n)),e.next=11,r.estimateGasAndCollateral({from:t.account});case 11:s=e.sent,a=r.sendTransaction({from:t.account,value:0,gasPrice:1,gas:s.gasLimit}),e.next=16;break;case 15:a=t.confluxJS.sendTransaction({from:t.account,value:t.fromCfxToDrip(n),to:t.faucetContract.address,gasPrice:1,gas:31e3});case 16:return t.latestTransactionInfo.chainId=t.chainId,t.latestTransactionInfo.from=t.account,t.latestTransactionInfo.amount=n,t.latestTransactionInfo.isClaim=!1,t.latestTransactionInfo.selectedToken=t.selectedToken,t.latestTransactionInfo.tokenAddress=t.contract.address,e.next=24,a;case 24:return t.txState=k.Pending,t.notifyTxState(),e.next=28,a.executed();case 28:return o=e.sent,t.latestTransactionInfo.hash=o.transactionHash,t.txState=k.Executed,t.latestTransactionInfo.timestamp=Date.now(),e.next=34,Promise.all([t.$store.dispatch("updateCfxBalance"),t.updateTokenBalance(),t.updateFaucetCfxBalance(),t.updateFaucetTokenBalance()]);case 34:return t.notifyTxState(),e.next=37,a.confirmed();case 37:o=e.sent,t.txState=k.Confirmed,t.notifyTxState(),e.next=46;break;case 42:e.prev=42,e.t0=e["catch"](3),e.t0._type=y.TransactionError,t.processError(e.t0);case 46:case"end":return e.stop()}}),e,null,[[3,42]])})))()},processError:function(t){switch(console.log(t),console.log(t._type),t._type){case y.BalanceError:this.tokenBalance=null,this.$store.commit("resetCfxBalance"),this.errors[t._type]=t,this.$alert(t.message,this.$t("message.error.error"));break;case y.TransactionError:this.errors[t._type]=t,this.txState=k.Error,this.$alert(t.message,this.$t("message.error.transactionError"));break;default:}},resetBalance:function(){this.tokenBalance=null},resetLatestTransactionInfo:function(){this.latestTransactionInfo={hash:null,selectedToken:null,tokenAddress:null,chainId:null,timestamp:null,from:null,isClaim:null,amount:null}}}},X=L,H=Object(E["a"])(X,i,c,!1,null,"6b1ee77e",null),U=H.exports,K={components:{FaucetPanel:U},name:"App",data:function(){return{isDev:this.$store.state.isDev,accountDialogVisible:!1,installationDialogVisible:!1,networkDialogVisible:!1,networkWarning:""}},computed:{scanAccountUrl:function(){return B(this.account,"address",this.chainId)},account:function(){return this.$store.state.account},conflux:function(){return this.$store.state.conflux},confluxJS:function(){return this.$store.state.confluxJS},sdk:function(){return this.$store.state.sdk},cfxBalance:function(){return this.$store.state.cfxBalance},networkText:function(){var t,e;switch(null===(t=this.conflux)||void 0===t?void 0:t.chainId){case"0x405":return"Conflux Tethys";case"0x1":return"Conflux Testnet";case"0x22b8":return"Conflux PoS";case void 0:return"Portal Not Detected"}return"networkId: "+(null===(e=this.conflux)||void 0===e?void 0:e.chainId)},chainId:function(){var t;return null===(t=this.conflux)||void 0===t?void 0:t.chainId},simplifiedAccount:function(){return this.$store.getters.simplifiedAccount},accountConnected:function(){return null!==this.$store.state.account},localeText:function(){switch(this.$i18n.locale){case"zh-CN":return"中文";default:return this.$i18n.locale}}},mounted:function(){this.$nextTick((function(){"undefined"!==typeof window.conflux?this.$store.dispatch("init",{conflux:window.conflux,confluxJS:window.confluxJS,sdk:window.ConfluxJSSDK}):this.installationDialogVisible=!0,localStorage.locale&&(this.$i18n.locale=localStorage.locale)}))},watch:{chainId:function(t){if(void 0===t||"0x1"===t||"0x22b8"===t)return this.networkWarning="",void(this.networkDialogVisible=!1);this.networkDialogVisible=!0,this.networkWarning="0x405"===t?this.$t("message.warning.changeNetworkWarning"):this.$t("message.warning.networkLoadingWarning")}},methods:{handleLangCommand:function(t){this.$i18n.locale=t,localStorage.locale=t},authorize:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$store.dispatch("authorize");case 3:e.next=8;break;case 5:e.prev=5,e.t0=e["catch"](0),t.processError(e.t0);case 8:case"end":return e.stop()}}),e,null,[[0,5]])})))()},processError:function(t){this.$alert(t.message,this.$t("message.error.error"))},changeDev:function(){this.$store.commit("changeDev")},showAccount:function(){this.accountDialogVisible=!0}}},G=K,Y=(n("034f"),Object(E["a"])(G,r,s,!1,null,null,null)),Q=Y.exports,Z=n("5c96"),tt=n.n(Z),et=n("2f62");a["default"].use(et["a"]);var nt=new et["a"].Store({state:{conflux:null,account:null,cfxBalance:null,confluxJS:null,isDev:!1},getters:{simplifiedAccount:function(t){if(!t.account)return null;var e=t.account.substr(0,6),n=t.account.substr(t.account.length-4);return e+"..."+n}},mutations:{init:function(t,e){var n=e.conflux,a=e.confluxJS,r=e.sdk;t.conflux=n,t.confluxJS=a,t.sdk=r,t.conflux.on("accountsChanged",(function(t){if(console.log("accounts changed"),console.log(t),0===t.length)nt.commit("resetAccount"),nt.commit("resetCfxBalance");else{var e=t[0];nt.commit("setAccount",{account:e}),nt.dispatch("updateCfxBalance")}}))},setAccount:function(t,e){t.account=e.account},resetAccount:function(t){t.account=null},setCfxBalance:function(t,e){t.cfxBalance=e.cfxBalance},resetCfxBalance:function(t){t.cfxBalance=null},changeDev:function(t){t.isDev^=1}},actions:{authorize:function(t){return Object(o["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.state.conflux.enable();case 2:return n=e.sent,t.commit("setAccount",{account:n[0]}),e.next=6,t.dispatch("updateCfxBalance");case 6:case"end":return e.stop()}}),e)})))()},updateCfxBalance:function(t){return Object(o["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(t.state.isDev){e.next=2;break}return e.abrupt("return",null);case 2:return e.next=4,t.state.confluxJS.getBalance(t.state.account);case 4:n=e.sent.toString(),t.commit("setCfxBalance",{cfxBalance:n});case 6:case"end":return e.stop()}}),e)})))()},init:function(t,e){return Object(o["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:t.commit("init",e);case 1:case"end":return n.stop()}}),n)})))()}}}),at=nt,rt=n("a925");a["default"].use(rt["a"]);var st={en:{message:{title:"Conflux Testnet Faucet",selectToken:"Select Token",selectText:"Click or type to select token",claim:"CLAIM",successClaim:"Successfully claimed the token!",connect:"Connect",onRequest:"Requesting...",currentAccountAddress:"Current Account Address",toConfluxScan:"Go to ConfluxScan",latestOperationStatus:"Latest Operation Status",ok:"OK",token:"Token",operationType:"Operation",tokenAmount:"Amount",transactionHash:"Transaction Hash",operator:"Operator",tokenContractAddress:"Token Address",currentTransactionStatus:"Current Transaction Status",error:{networkError:"Network Error",error:"ERROR",transactionError:"Transaction Error",installationError:"ConfluxPortal Not Detected"},warning:{connectionWarning:"Please connect to your wallet",tokenWarning:"Please select token",changeNetworkWarning:"Please change network to Conflux Testnet in Conflux Poral, and then manually refresh page",networkLoadingWarning:"Network status is on loading or unofficial network is in use，please check it in ConfluxPortal"},tooltip:{networkTooltip:"Change network in ConfluxPortal",faucet:{frequency:{beg:"Conflux Testnet Faucet is available every ",mid:" for {token}. Faucet drips ",end:" {token} for each claim"},portal:{beg:"Chrome extension ",end:" is required for Conflux Testnet Faucet"}},successClaim:"Transaction is executed, but not confirmed."}}},"zh-CN":{message:{title:"Conflux 测试网水龙头",selectToken:"代币选择",selectText:"下拉选择或键入搜索",claim:"领取",successClaim:"领取成功！",connect:"连接钱包",onRequest:"请求中...",currentAccountAddress:"当前账户地址",toConfluxScan:"在 ConfluxScan 上查看",latestOperationStatus:"最新操作状态",ok:"确认",token:"代币",operationType:"操作类型",tokenAmount:"代币数",transactionHash:"交易哈希",operator:"操作者",tokenContractAddress:"代币合约地址",currentTransactionStatus:"当前交易状态",error:{networkError:"网络错误",error:"错误",transactionError:"交易执行错误",installationError:"未检测到 ConfluxPortal"},warning:{connectionWarning:"请连接钱包",tokenWarning:"请选择Token",changeNetworkWarning:"请在 ConfluxPortal 中切换至测试网, 并手动刷新页面",networkLoadingWarning:"当前网络情况仍在加载中或使用了非官方的测试网络，请在 ConfluxPortal 中确认当前网络情况"},tooltip:{networkTooltip:"在 ConfluxPortal 中切换网络",faucet:{frequency:{beg:"Conflux测试网水龙头每 ",mid:" 可以领取一次{token}。每次可领取 ",end:" {token}"},portal:{beg:"使用Conflux测试网水龙头需要安装浏览器插件",end:""}},successClaim:"交易已执行，但尚未确认"}}}},ot=new rt["a"]({locale:"zh-CN",fallbackLocale:"zh-CN",messages:st}),it=ot;n("0fae");a["default"].config.productionTip=!1,a["default"].use(tt.a),new a["default"]({render:function(t){return t(Q)},store:at,i18n:it}).$mount("#app")},7289:function(t){t.exports=JSON.parse('{"a":[{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"}]}')},"7c2a":function(t,e,n){},"85ec":function(t,e,n){}});
//# sourceMappingURL=app.0d2b6c95.js.map