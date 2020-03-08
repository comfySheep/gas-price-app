(this["webpackJsonpgas-price-app"]=this["webpackJsonpgas-price-app"]||[]).push([[0],{38:function(t,e,a){t.exports=a(66)},64:function(t,e,a){},66:function(t,e,a){"use strict";a.r(e);var n=a(0),i=a.n(n),c=a(17),r=a.n(c),o=a(7),s=a(34),l=a(68),d=a(6),p=Object(d.a)({basename:""}),u=a(2),m=a(10),g=a(11),h=a(13),v=a(12),f=a(9),y=a(14),b="rfej9napna.json",S="//logo.clearbit.com",E=[{key:"distance",name:"Distance"},{key:"price",name:"Price"}],O=["1","3","5","10","50","100000"],_=a(35),j=a.n(_),N=function(t){return function(t){var e=t.method,a=void 0===e?"get":e,n=t.params,i=t.url,c=t.headers;switch(a.toLowerCase()){case"get":return j.a.get(i,{params:n,headers:c});default:return Promise.reject({response:{data:{Status:{message:"This API method is not available"}}}})}}(t).then((function(t){var e=t.data;return Promise.resolve(e)})).catch((function(t){var e=t.response.data;return Promise.reject(e)}))},D=function(t){p.push("/gas-price-app/station/".concat(t))},w=b;var k="UPDATE_GAS_STATION_DETAIL",L="UPDATE_GAS_STATION_LIST",T="UPDATE_LOADING",B=function(t){var e=t.loading;return i.a.createElement("div",{id:"loading",className:"".concat(e?"":"hidden")})},G=S,I=function(t){var e=t.gasStation,a=t.selectable,n=t.handleSelectStation,c=e.id,r=e.station,o=e.address,s=e.zip,l=e.reg_price,d=e.reg_date,p=e.mid_price,u=e.mid_date,m=e.pre_price,g=e.pre_date,h=e.diesel_price,v=e.diesel_date,f=e.distance,y=[{name:"Regular",price:l,date:d},{name:"Midgrade",price:p,date:u},{name:"Premium",price:m,date:g},{name:"Diesel",price:h,date:v}];return i.a.createElement("div",{className:a?"station-card ".concat(a):"station-card",onClick:n?function(){return n(c)}:null},i.a.createElement("div",{className:"station-image"},i.a.createElement("img",{src:"".concat(G,"/").concat(r,".com"),onError:function(t){return t.target.style.display="none"},alt:"logo-".concat(r)})),i.a.createElement("div",{className:"station-info"},i.a.createElement("div",{className:"station-title"},i.a.createElement("h2",{className:a?"station-address":"station-address full-width"},r?"".concat(r," - "):null,o,", ",s),f?i.a.createElement("div",{className:"station-distance bold"},f):null),y.map((function(t,e){var a=t.name,n=t.price,c=t.date;return i.a.createElement("div",{key:"station-price-container-".concat(e),className:"station-price-container"},i.a.createElement("div",{className:"station-price"},a),i.a.createElement("div",{className:"station-price bold"},isNaN(n)?n:"$".concat(n)),i.a.createElement("div",{className:"station-price"},c))}))))},A=E,M=O,U=function(){p.push("/gas-price-app")},C=function(t){function e(){var t;return Object(m.a)(this,e),(t=Object(h.a)(this,Object(v.a)(e).call(this))).UNSAFE_componentWillMount=function(){var e=t.props.location;(e?e.pathname:"").includes("station")||t.handleSearchStations()},t.handleUpdateSortBy=function(e){var a=e.target.value;t.setState({sortBy:a}),t.handleSearchStations()},t.handleUpdateSearchDistance=function(e){var a=e.target.value;t.setState({searchDistance:a}),t.handleSearchStations()},t.handleSearchStations=function(){navigator.geolocation.getCurrentPosition(t.handleGetGasStationList,(function(t){var e=t.code,a=t.message;alert("ERROR ".concat(e,": ").concat(a))}))},t.handleGetGasStationList=function(e){var a=t.props.getGasStationList,n=t.state,i=n.sortBy,c=n.searchDistance,r=e&&e.coords||{latitude:32.9596,longitude:-117.1578},o=r.latitude,s=r.longitude;a({latitude:o.toFixed(3),longitude:s.toFixed(3),distance:c,fuelType:"reg",sortBy:i}).then((function(){U()}))},t.state={sortBy:"distance",searchDistance:"1"},t.handleUpdateSortBy=t.handleUpdateSortBy.bind(Object(f.a)(t)),t.handleUpdateSearchDistance=t.handleUpdateSearchDistance.bind(Object(f.a)(t)),t}return Object(y.a)(e,t),Object(g.a)(e,[{key:"render",value:function(){var t=this,e=this.props.loading,a=this.state,c=a.sortBy,r=a.searchDistance;return i.a.createElement(n.Fragment,null,i.a.createElement("div",{id:"search-layout"},i.a.createElement("div",{id:"sort-buttons-container"},i.a.createElement("span",null,"Sort By: "),A.map((function(e){var a=e.key,n=e.name;return i.a.createElement("button",{className:"".concat(c===a?"btn active":"btn"),key:"search-sort-option-".concat(a),value:a,onClick:t.handleUpdateSortBy},n)}))),i.a.createElement("div",{id:"distance-buttons-container"},i.a.createElement("span",null,"Within: "),M.map((function(e){return i.a.createElement("button",{className:"".concat(r===e?"btn active":"btn"),key:"search-distance-option-".concat(e),value:e,onClick:t.handleUpdateSearchDistance},e," ","1"===e?"mile":"miles")})))),i.a.createElement(B,{loading:e}),i.a.createElement("div",{id:"search-content-container",className:"".concat(e?"hidden search-content-container":"search-content-container")},this.props.children))}}]),e}(n.Component),P={getGasStationList:function(t){return function(e){return e({type:T,payload:{loading:!0}}),function(t){var e=t.latitude,a=t.longitude,n=t.distance,i=t.fuelType,c=t.sortBy;return N({url:"/stations/radius/".concat(e,"/").concat(a,"/").concat(n,"/").concat(i,"/").concat(c,"/").concat(w),method:"get"})}(t).then((function(a){"object"!==typeof a&&(a=JSON.parse(a.substring(a.indexOf('{"status":{"error":'))));var n=t.sortBy,i=a.stations;if("price"===n){var c=0;for(var r in i){var o=i[r];if(!isNaN(Number(o.reg_price))){c=r;break}}i=i.slice(c)}e({type:L,payload:{gasStationList:i}}),e({type:T,payload:{loading:!1}})})).catch((function(t){var a=(t&&t.Status||{}).message;alert(a),e({type:T,payload:{loading:!1}})}))}}},x=Object(o.b)((function(t){var e=t.app;return Object(u.a)({},e)}),P)(C),z=D,F=function(t){function e(){return Object(m.a)(this,e),Object(h.a)(this,Object(v.a)(e).apply(this,arguments))}return Object(y.a)(e,t),Object(g.a)(e,[{key:"render",value:function(){var t=this.props.gasStationList;return 0===t.length?"There are no gas station near you...":i.a.createElement("div",{className:"gas-station-list"},t.map((function(t){return i.a.createElement(I,Object.assign({key:t.id},{gasStation:t,handleSelectStation:z,selectable:"selectable"}))})))}}]),e}(n.Component),R=Object(o.b)((function(t){var e=t.gasStationList;return Object(u.a)({},e)}),{})(F),W=function(t){function e(){var t,a;Object(m.a)(this,e);for(var n=arguments.length,i=new Array(n),c=0;c<n;c++)i[c]=arguments[c];return(a=Object(h.a)(this,(t=Object(v.a)(e)).call.apply(t,[this].concat(i)))).componentDidMount=function(){var t=a.props.match.params.stationId;t&&a.handleGetGasStationDetail(t)},a.handleGetGasStationDetail=function(t){(0,a.props.getGasStationDetail)({stationId:t})},a.renderLocationToMap=function(t){a.loadScript("https://maps.googleapis.com/maps/api/js?key=".concat("AIzaSyCQMfTi3tCDb9SvQewB2v0OWgVyWzkFn9k","&callback=initMap")),window.initMap=a.initMap.bind(Object(f.a)(a),t)},a.loadScript=function(t){var e=document.getElementsByTagName("script")[0],a=document.createElement("script");a.src=t,a.async=!0,a.defer=!0,e.parentNode.appendChild(a)},a.initMap=function(t){var e=t.lat,a=t.lng,n=new window.google.maps.Map(document.getElementById("map")),i=new window.google.maps.Marker({position:new window.google.maps.LatLng(e,a),map:n});n.setZoom(12),n.panTo(i.position)},a}return Object(y.a)(e,t),Object(g.a)(e,[{key:"render",value:function(){var t=this.props.gasStationDetail,e=t.lat,a=t.lng;if(e&&a){var n={lat:e,lng:a};this.renderLocationToMap(n)}return i.a.createElement("div",{id:"gas-station-detail"},i.a.createElement("div",{id:"map"}),i.a.createElement(I,{gasStation:Object(u.a)({},t,{station:t.station_name})}))}}]),e}(n.Component),J={getGasStationDetail:function(t){return function(e){e({type:T,payload:{loading:!0}}),function(t){var e=t.stationId;return N({url:"/stations/details/".concat(e,"/").concat(w),method:"get"})}(t).then((function(t){var a=t.details;e({type:k,payload:Object(u.a)({},a)}),e({type:T,payload:{loading:!1}})})).catch((function(t){var a=(t&&t.Status||{}).message;alert(a),e({type:T,payload:{loading:!1}})}))}}},Q=Object(o.b)((function(t){var e=t.gasStationDetail;return Object(u.a)({},e)}),J)(W),V=(a(64),function(t){var e=t.page,a=t.layout,n=Object(s.a)(t,["page","layout"]);return i.a.createElement(l.a,Object.assign({},n,{render:function(t){return i.a.createElement(a,t,i.a.createElement(e,t))}}))});var X=function(){return i.a.createElement(l.b,{history:p},i.a.createElement(l.c,null,i.a.createElement(V,{exact:!0,path:"/gas-price-app",layout:x,page:R}),i.a.createElement(V,{path:"/gas-price-app/station/:stationId",layout:x,page:Q})))},Z=a(8),$=a(37),q={loading:!1},H=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:q,e=arguments.length>1?arguments[1]:void 0,a=e.type,n=e.payload;switch(a){case T:var i=n.loading;return Object(u.a)({},t,{loading:i});default:return t}},K={gasStationDetail:{}},Y=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:K,e=arguments.length>1?arguments[1]:void 0,a=e.type,n=e.payload;switch(a){case k:var i={address:n.address||"",city:n.city||"",region:n.region||"",country:n.country||"",lat:n.lat||"",lng:n.lng||"",station_name:n.station_name||"",zip:n.zip||"",reg_price:n.reg_price||"",reg_date:n.reg_date||"",mid_price:n.mid_price||"",mid_date:n.mid_date||"",pre_price:n.pre_price||"",pre_date:n.pre_date||"",diesel_price:n.diesel_price||"",diesel_date:n.diesel_date||""};return Object(u.a)({},t,{gasStationDetail:i});default:return t}},tt={gasStationList:[]},et=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:tt,e=arguments.length>1?arguments[1]:void 0,a=e.type,n=e.payload;switch(a){case L:return Object(u.a)({},t,{gasStationList:n.gasStationList});default:return t}},at=Object(Z.c)({app:H,gasStationDetail:Y,gasStationList:et}),nt=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||Z.d,it=Object(Z.e)(at,nt(Object(Z.a)($.a)));r.a.render(i.a.createElement(o.a,{store:it},i.a.createElement(X,null)),document.getElementById("root"))}},[[38,1,2]]]);
//# sourceMappingURL=main.b1333f42.chunk.js.map