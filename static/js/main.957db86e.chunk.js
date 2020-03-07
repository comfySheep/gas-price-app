(this["webpackJsonpgas-price-app"]=this["webpackJsonpgas-price-app"]||[]).push([[0],{37:function(t,e,a){t.exports=a(64)},64:function(t,e,a){"use strict";a.r(e);var n=a(0),r=a.n(n),i=a(11),o=a.n(i),c=a(33),s=a(66),u=a(6),l=Object(u.a)({basename:""}),d=function(t){return r.a.createElement(n.Fragment,null,t.children)},p=a(4),g=a(13),f=a(14),h=a(16),v=a(15),m=a(17),O=a(8),b="rfej9napna.json",_=a(19),S=a.n(_),j=function(t){return function(t){var e=t.method,a=void 0===e?"get":e,n=t.params,r=t.url,i=t.headers,o=void 0===i?{Accept:"*/*"}:i;switch(a.toLowerCase()){case"get":return S.a.get(r,{params:n,headers:o});default:return S()(t)}}(t).then((function(t){var e=t.data;return Promise.resolve(e)})).catch((function(t){var e=t.response.data;return Promise.reject(e)}))},y=b;var E="UPDATE_GAS_STATION_DETAIL",D="UPDATE_GAS_STATION_LIST",G="UPDATE_STATE",T=function(t){function e(){var t,a;Object(g.a)(this,e);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(h.a)(this,(t=Object(v.a)(e)).call.apply(t,[this].concat(r)))).componentDidMount=function(){navigator.geolocation.getCurrentPosition(a.handleGetGasStationList,(function(){}))},a.handleGetGasStationList=function(t){var e=a.props.getGasStationList,n=t&&t.coords||{latitude:32.9596,longitude:-117.1578},r=n.latitude,i=n.longitude;e({latitude:r.toFixed(3),longitude:i.toFixed(3),distance:1,fuelType:"reg",sortBy:"price"})},a}return Object(m.a)(e,t),Object(f.a)(e,[{key:"render",value:function(){return r.a.createElement("div",{id:"gas-station-list"},"Gas Station Detail")}}]),e}(n.Component),L={getGasStationList:function(t){return function(e){(function(t){var e=t.latitude,a=t.longitude,n=t.distance,r=t.fuelType,i=t.sortBy;return j({url:"/stations/radius/".concat(e,"/").concat(a,"/").concat(n,"/").concat(r,"/").concat(i,"/").concat(y),method:"get"})})(t).then((function(t){"object"!==typeof t&&(t=JSON.parse(t.substring(t.indexOf('{"status":{"error":'))));var a=t.stations;e({type:D,payload:{gasStationList:a}})})).catch((function(t){}))}}},A=Object(O.b)((function(t){var e=t.gasStationList;return Object(p.a)({},e)}),L)(T),P=function(t){function e(){var t,a;Object(g.a)(this,e);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(h.a)(this,(t=Object(v.a)(e)).call.apply(t,[this].concat(r)))).componentDidMount=function(){var t=a.props.match.params.stationId;t&&a.handleGetGasStationDetail(t)},a.handleGetGasStationDetail=function(t){(0,a.props.getGasStationDetail)({stationId:t})},a}return Object(m.a)(e,t),Object(f.a)(e,[{key:"render",value:function(){return r.a.createElement("div",{id:"gas-station-detail"},"Gas Station Detail")}}]),e}(n.Component),w={getGasStationDetail:function(t){return function(e){(function(t){var e=t.stationId;return j({url:"/stations/details/".concat(e,"/").concat(y),method:"get"})})(t).then((function(t){var a=t.details,n=t.previousPrices;e({type:E,payload:Object(p.a)({},a,{previousPrices:n})})})).catch((function(t){}))}}},I=Object(O.b)((function(t){var e=t.gasStationDetail;return Object(p.a)({},e)}),w)(P),x=function(t){var e=t.page,a=t.layout,n=Object(c.a)(t,["page","layout"]);return r.a.createElement(s.a,Object.assign({},n,{render:function(t){return r.a.createElement(a,null,r.a.createElement(e,t))}}))};var C=function(){return r.a.createElement(s.b,{history:l},r.a.createElement(s.c,null,r.a.createElement(x,{exact:!0,path:"/gas-price-app",layout:d,page:A}),r.a.createElement(x,{path:"/gas-price-app/station/:stationId",layout:d,page:I})))},N=a(7),k=a(36),U={gasStationDetail:{}},B=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:U,e=arguments.length>1?arguments[1]:void 0,a=e.type,n=e.payload;switch(a){case E:var r={address:n.address,city:n.city,region:n.region,country:n.country,lat:n.lat,lng:n.lng,station_name:n.station_name,zip:n.zip,reg_price:n.reg_price,reg_date:n.reg_date,mid_price:n.mid_price,mid_date:n.mid_date,pre_price:n.pre_price,pre_date:n.pre_date,diesel_price:n.diesel_price,diesel_date:n.diesel_date,previousPrices:n.previousPrices};return Object(p.a)({},t,{gasStationDetail:r});case G:return Object(p.a)({},t,{},n);default:return t}},F={gasStationList:[]},J=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:F,e=arguments.length>1?arguments[1]:void 0,a=e.type,n=e.payload;switch(a){case D:return Object(p.a)({},t,{gasStationList:n.gasStationList});case G:return Object(p.a)({},t,{},n);default:return t}},M=Object(N.c)({gasStationDetail:B,gasStationList:J}),z=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||N.d,X=Object(N.e)(M,z(Object(N.a)(k.a)));o.a.render(r.a.createElement(O.a,{store:X},r.a.createElement(C,null)),document.getElementById("root"))}},[[37,1,2]]]);
//# sourceMappingURL=main.957db86e.chunk.js.map