(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["geographies"],{"0fd9":function(e,t,a){"use strict";a("99af"),a("4160"),a("caad"),a("13d5"),a("4ec9"),a("b64b"),a("d3b7"),a("ac1f"),a("2532"),a("3ca3"),a("5319"),a("159b"),a("ddb0");var n=a("ade3"),i=a("5530"),r=(a("4b85"),a("2b0e")),c=a("d9f7"),o=a("80d2"),s=["sm","md","lg","xl"],l=["start","end","center"];function d(e,t){return s.reduce((function(a,n){return a[e+Object(o["D"])(n)]=t(),a}),{})}var u=function(e){return[].concat(l,["baseline","stretch"]).includes(e)},f=d("align",(function(){return{type:String,default:null,validator:u}})),p=function(e){return[].concat(l,["space-between","space-around"]).includes(e)},v=d("justify",(function(){return{type:String,default:null,validator:p}})),g=function(e){return[].concat(l,["space-between","space-around","stretch"]).includes(e)},m=d("alignContent",(function(){return{type:String,default:null,validator:g}})),b={align:Object.keys(f),justify:Object.keys(v),alignContent:Object.keys(m)},h={align:"align",justify:"justify",alignContent:"align-content"};function x(e,t,a){var n=h[e];if(null!=a){if(t){var i=t.replace(e,"");n+="-".concat(i)}return n+="-".concat(a),n.toLowerCase()}}var y=new Map;t["a"]=r["a"].extend({name:"v-row",functional:!0,props:Object(i["a"])(Object(i["a"])(Object(i["a"])({tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:u}},f),{},{justify:{type:String,default:null,validator:p}},v),{},{alignContent:{type:String,default:null,validator:g}},m),render:function(e,t){var a=t.props,i=t.data,r=t.children,o="";for(var s in a)o+=String(a[s]);var l=y.get(o);return l||function(){var e,t;for(t in l=[],b)b[t].forEach((function(e){var n=a[e],i=x(t,e,n);i&&l.push(i)}));l.push((e={"no-gutters":a.noGutters,"row--dense":a.dense},Object(n["a"])(e,"align-".concat(a.align),a.align),Object(n["a"])(e,"justify-".concat(a.justify),a.justify),Object(n["a"])(e,"align-content-".concat(a.alignContent),a.alignContent),e)),y.set(o,l)}(),e(a.tag,Object(c["a"])(i,{staticClass:"row",class:l}),r)}})},"4b85":function(e,t,a){},"50bf":function(e,t,a){},"5e9c":function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-app",{staticClass:"bx--content"},[a("v-card",{staticClass:"maincard"},[a("v-card-title",[e._v(" All Geographies "),a("v-spacer"),a("v-text-field",{attrs:{"append-icon":"mdi-magnify",label:"Search","single-line":"","hide-details":""},model:{value:e.search,callback:function(t){e.search=t},expression:"search"}})],1),a("v-data-table",{staticClass:"elevation-4",attrs:{"fixed-header":"",height:"60vh",headers:e.headers,items:this.items,"item-key":"id","sort-by":["name"],"sort-desc":[!1],search:e.search,dense:""},scopedSlots:e._u([{key:"top",fn:function(){return[a("v-spacer"),a("v-dialog",{attrs:{"max-width":"500px"},model:{value:e.dialogEdit,callback:function(t){e.dialogEdit=t},expression:"dialogEdit"}},[a("v-card",[a("v-card-title",[a("span",{staticClass:"headline"},[e._v("Edit Item")])]),a("v-card-text",[a("v-container",[a("v-row",[a("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[a("v-text-field",{attrs:{label:"Name"},model:{value:e.editedItem.name,callback:function(t){e.$set(e.editedItem,"name",t)},expression:"editedItem.name"}})],1),a("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[a("v-text-field",{attrs:{label:"Description"},model:{value:e.editedItem.description,callback:function(t){e.$set(e.editedItem,"description",t)},expression:"editedItem.description"}})],1)],1),a("v-row",[a("v-col",{attrs:{cols:"12",sm:"6",md:"4"}}),a("v-col",{attrs:{cols:"12",sm:"6",md:"4"}})],1)],1)],1),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:e.cancel}},[e._v(" Cancel ")]),a("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:e.save}},[e._v(" Save ")])],1)],1)],1),a("v-dialog",{model:{value:e.dialogDelete,callback:function(t){e.dialogDelete=t},expression:"dialogDelete"}},[a("v-card",[a("v-card-title",{staticClass:"headline"},[e._v(" Are you sure you want to delete this item? ")]),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:e.closeDelete}},[e._v("Cancel")]),a("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:e.deleteItemConfirm}},[e._v("OK")]),a("v-spacer")],1)],1)],1)]},proxy:!0},{key:"item.created",fn:function(t){var a=t.item;return[e._v(" "+e._s(new Date(a.created).toLocaleDateString())+" ")]}},{key:"item.updated",fn:function(t){var a=t.item;return[e._v(" "+e._s(new Date(a.updated).toLocaleDateString())+" ")]}},{key:"item.actions",fn:function(t){var n=t.item;return[a("v-icon",{attrs:{small:""},on:{click:function(t){return e.editItem(n)}}},[e._v(" mdi-pencil-outline ")]),a("v-icon",{attrs:{small:""},on:{click:function(t){return e.deleteDialog(n)}}},[e._v(" mdi-trash-can-outline ")])]}}])})],1)],1)},i=[],r=(a("c975"),a("a434"),a("d3b7"),a("2ca0"),a("5530")),c=(a("96cf"),a("1da1")),o={name:"geographies",data:function(){return{items:[],dialogEdit:!1,dialogDelete:!1,editedIndex:-1,editedItem:{},cachedItem:{},search:"",headers:[{text:"ID",value:"id",filterable:!0,groupable:!1},{text:"Name",value:"name",filterable:!0,groupable:!1},{text:"Short Name (UI)",value:"short_name_ui",filterable:!0,groupable:!1},{text:"Description",value:"description",filterable:!0,groupable:!1},{text:"Date Created",value:"created",filterable:!1,groupable:!1},{text:"Date Updated",value:"updated",filterable:!1,groupable:!1},{text:"Actions",value:"actions",filterable:!1,groupable:!1}]}},mounted:function(){this.getItems()},methods:{isUrl:function(e){return!!e&&e.length>7&&e.startsWith("http")},getItems:function(){var e=this;return Object(c["a"])(regeneratorRuntime.mark((function t(){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("/api/v1/geospatialDefinitions");case 3:return a=t.sent,t.next=6,a.json();case 6:e.items=t.sent,t.next=12;break;case 9:t.prev=9,t.t0=t["catch"](0),console.error(t.t0);case 12:case"end":return t.stop()}}),t,null,[[0,9]])})))()},editMode:function(e){this.cachedItem=Object(r["a"])({},e)},cancelEdit:function(e){Object.assign(e,this.cachedItem),this.items.splice(this.editedIndex,1,this.cachedItem),this.dialogEdit=!1},editItem:function(e){this.editMode(e),this.editedIndex=this.items.indexOf(e),this.editedItem=e,this.dialogEdit=!0},deleteItem:function(e){return Object(c["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,console.log("deleteItem..."),t.next=4,fetch("/api/v1/geospatialDefinitions/".concat(e),{method:"DELETE"});case 4:t.next=9;break;case 6:t.prev=6,t.t0=t["catch"](0),console.error(t.t0);case 9:case"end":return t.stop()}}),t,null,[[0,6]])})))()},deleteDialog:function(e){this.editedIndex=this.items.indexOf(e),this.dialogDelete=!0},deleteItemConfirm:function(){var e=this.items[this.editedIndex];this.deleteItem(e.id),this.items.splice(this.editedIndex,1),this.closeDelete()},closeDelete:function(){var e=this;this.dialogDelete=!1,this.$nextTick((function(){e.editedIndex=-1}))},save:function(){this.updateItem(this.items[this.editedIndex]),this.dialogEdit=!1},cancel:function(e){this.cancelEdit(e)},open:function(){console.log("open()")},close:function(){console.log("Dialog closed"),this.dialogEdit=!1,console.log("close()")},updateItem:function(e){var t=this;return Object(c["a"])(regeneratorRuntime.mark((function a(){return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,fetch("/api/v1/geospatialDefinitions/".concat(e.id),{method:"PUT",body:JSON.stringify(e),headers:{"Content-type":"application/json; charset=UTF-8"}});case 3:t.items.splice(t.editedIndex,1,e),a.next=9;break;case 6:a.prev=6,a.t0=a["catch"](0),console.error(a.t0);case 9:case"end":return a.stop()}}),a,null,[[0,6]])})))()}}},s=o,l=(a("b545"),a("2877")),d=a("6544"),u=a.n(d),f=a("7496"),p=a("8336"),v=a("b0af"),g=a("99d9"),m=a("62ad"),b=a("a523"),h=a("8fea"),x=a("169a"),y=a("132d"),j=a("0fd9"),O=a("2fa4"),k=a("8654"),I=Object(l["a"])(s,n,i,!1,null,"2a65814a",null);t["default"]=I.exports;u()(I,{VApp:f["a"],VBtn:p["a"],VCard:v["a"],VCardActions:g["a"],VCardText:g["c"],VCardTitle:g["d"],VCol:m["a"],VContainer:b["a"],VDataTable:h["a"],VDialog:x["a"],VIcon:y["a"],VRow:j["a"],VSpacer:O["a"],VTextField:k["a"]})},"62ad":function(e,t,a){"use strict";a("4160"),a("caad"),a("13d5"),a("45fc"),a("4ec9"),a("a9e3"),a("b64b"),a("d3b7"),a("ac1f"),a("3ca3"),a("5319"),a("2ca0"),a("159b"),a("ddb0");var n=a("ade3"),i=a("5530"),r=(a("4b85"),a("2b0e")),c=a("d9f7"),o=a("80d2"),s=["sm","md","lg","xl"],l=function(){return s.reduce((function(e,t){return e[t]={type:[Boolean,String,Number],default:!1},e}),{})}(),d=function(){return s.reduce((function(e,t){return e["offset"+Object(o["D"])(t)]={type:[String,Number],default:null},e}),{})}(),u=function(){return s.reduce((function(e,t){return e["order"+Object(o["D"])(t)]={type:[String,Number],default:null},e}),{})}(),f={col:Object.keys(l),offset:Object.keys(d),order:Object.keys(u)};function p(e,t,a){var n=e;if(null!=a&&!1!==a){if(t){var i=t.replace(e,"");n+="-".concat(i)}return"col"!==e||""!==a&&!0!==a?(n+="-".concat(a),n.toLowerCase()):n.toLowerCase()}}var v=new Map;t["a"]=r["a"].extend({name:"v-col",functional:!0,props:Object(i["a"])(Object(i["a"])(Object(i["a"])(Object(i["a"])({cols:{type:[Boolean,String,Number],default:!1}},l),{},{offset:{type:[String,Number],default:null}},d),{},{order:{type:[String,Number],default:null}},u),{},{alignSelf:{type:String,default:null,validator:function(e){return["auto","start","end","center","baseline","stretch"].includes(e)}},tag:{type:String,default:"div"}}),render:function(e,t){var a=t.props,i=t.data,r=t.children,o=(t.parent,"");for(var s in a)o+=String(a[s]);var l=v.get(o);return l||function(){var e,t;for(t in l=[],f)f[t].forEach((function(e){var n=a[e],i=p(t,e,n);i&&l.push(i)}));var i=l.some((function(e){return e.startsWith("col-")}));l.push((e={col:!i||!a.cols},Object(n["a"])(e,"col-".concat(a.cols),a.cols),Object(n["a"])(e,"offset-".concat(a.offset),a.offset),Object(n["a"])(e,"order-".concat(a.order),a.order),Object(n["a"])(e,"align-self-".concat(a.alignSelf),a.alignSelf),e)),v.set(o,l)}(),e(a.tag,Object(c["a"])(i,{class:l}),r)}})},a523:function(e,t,a){"use strict";a("99af"),a("4de4"),a("b64b"),a("2ca0"),a("20f6"),a("4b85"),a("a15b"),a("498a");var n=a("2b0e");function i(e){return n["a"].extend({name:"v-".concat(e),functional:!0,props:{id:String,tag:{type:String,default:"div"}},render:function(t,a){var n=a.props,i=a.data,r=a.children;i.staticClass="".concat(e," ").concat(i.staticClass||"").trim();var c=i.attrs;if(c){i.attrs={};var o=Object.keys(c).filter((function(e){if("slot"===e)return!1;var t=c[e];return e.startsWith("data-")?(i.attrs[e]=t,!1):t||"string"===typeof t}));o.length&&(i.staticClass+=" ".concat(o.join(" ")))}return n.id&&(i.domProps=i.domProps||{},i.domProps.id=n.id),t(n.tag,i,r)}})}var r=a("d9f7");t["a"]=i("container").extend({name:"v-container",functional:!0,props:{id:String,tag:{type:String,default:"div"},fluid:{type:Boolean,default:!1}},render:function(e,t){var a,n=t.props,i=t.data,c=t.children,o=i.attrs;return o&&(i.attrs={},a=Object.keys(o).filter((function(e){if("slot"===e)return!1;var t=o[e];return e.startsWith("data-")?(i.attrs[e]=t,!1):t||"string"===typeof t}))),n.id&&(i.domProps=i.domProps||{},i.domProps.id=n.id),e(n.tag,Object(r["a"])(i,{staticClass:"container",class:Array({"container--fluid":n.fluid}).concat(a||[])}),c)}})},b545:function(e,t,a){"use strict";var n=a("50bf"),i=a.n(n);i.a}}]);
//# sourceMappingURL=geographies.2a38169f.js.map