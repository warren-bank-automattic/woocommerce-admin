(window.__wcAdmin_webpackJsonp=window.__wcAdmin_webpackJsonp||[]).push([[19],{706:function(e,t,r){"use strict";r.r(t);var o=r(5),a=r.n(o),c=r(14),n=r.n(c),i=r(13),s=r.n(i),l=r(16),u=r.n(l),m=r(17),d=r.n(m),p=r(6),b=r.n(p),_=r(0),f=r(3),y=r(270),v=r(1),O=r.n(v),g=r(41),h=r(24),j=r(746),w=r(723),S=r(759),k=r(722),q=r(719),R=r(724),C=r(10),P=r.n(C),E=r(2),F=r(68),V=r(32),x=r(274),L=r(33),T=r(728),D=r(761),I=r(718);function M(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,o=b()(e);if(t){var a=b()(this).constructor;r=Reflect.construct(o,arguments,a)}else r=o.apply(this,arguments);return d()(this,r)}}var N=Object(L.g)("manageStock","no"),A=Object(L.g)("stockStatuses",{}),B=function(e){return Object(E.get)(e,["extended_info","name"],"")+" - "+Object(E.get)(e,["extended_info","attributes"],[]).map((function(e){return e.option})).join(", ")},H=function(e){u()(r,e);var t=M(r);function r(){var e;return n()(this,r),(e=t.call(this)).getHeadersContent=e.getHeadersContent.bind(P()(e)),e.getRowsContent=e.getRowsContent.bind(P()(e)),e.getSummary=e.getSummary.bind(P()(e)),e}return s()(r,[{key:"getHeadersContent",value:function(){return[{label:Object(f.__)("Product / Variation Title","woocommerce-admin"),key:"name",required:!0,isLeftAligned:!0},{label:Object(f.__)("SKU","woocommerce-admin"),key:"sku",hiddenByDefault:!0,isSortable:!0},{label:Object(f.__)("Items Sold","woocommerce-admin"),key:"items_sold",required:!0,defaultSort:!0,isSortable:!0,isNumeric:!0},{label:Object(f.__)("Net Sales","woocommerce-admin"),screenReaderLabel:Object(f.__)("Net Sales","woocommerce-admin"),key:"net_revenue",required:!0,isSortable:!0,isNumeric:!0},{label:Object(f.__)("Orders","woocommerce-admin"),key:"orders_count",isSortable:!0,isNumeric:!0},"yes"===N?{label:Object(f.__)("Status","woocommerce-admin"),key:"stock_status"}:null,"yes"===N?{label:Object(f.__)("Stock","woocommerce-admin"),key:"stock",isNumeric:!0}:null].filter(Boolean)}},{key:"getRowsContent",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=this.props.query,r=Object(V.getPersistedQuery)(t),o=this.context,a=o.formatAmount,c=o.formatDecimal,n=o.getCurrencyConfig;return Object(E.map)(e,(function(e){var o=e.items_sold,i=e.net_revenue,s=e.orders_count,l=e.product_id,u=e.extended_info||{},m=u.stock_status,d=u.stock_quantity,p=u.low_stock_amount,b=u.sku,y=B(e),v=Object(V.getNewPath)(r,"/analytics/orders",{filter:"advanced",product_includes:t.products}),O=Object(L.f)("post.php?post=".concat(l,"&action=edit"));return[{display:Object(_.createElement)(F.Link,{href:O,type:"wp-admin"},y),value:y},{display:b,value:b},{display:Object(x.formatValue)(n(),"number",o),value:o},{display:a(i),value:c(i)},{display:Object(_.createElement)(F.Link,{href:v,type:"wc-admin"},s),value:s},"yes"===N?{display:Object(D.a)(m,d,p)?Object(_.createElement)(F.Link,{href:O,type:"wp-admin"},Object(f._x)("Low","Indication of a low quantity","woocommerce-admin")):A[m],value:A[m]}:null,"yes"===N?{display:d,value:d}:null].filter(Boolean)}))}},{key:"getSummary",value:function(e){var t=e.variations_count,r=void 0===t?0:t,o=e.items_sold,a=void 0===o?0:o,c=e.net_revenue,n=void 0===c?0:c,i=e.orders_count,s=void 0===i?0:i,l=this.context,u=l.formatAmount,m=(0,l.getCurrencyConfig)();return[{label:Object(f._n)("variation sold","variations sold",r,"woocommerce-admin"),value:Object(x.formatValue)(m,"number",r)},{label:Object(f._n)("item sold","items sold",a,"woocommerce-admin"),value:Object(x.formatValue)(m,"number",a)},{label:Object(f.__)("net sales","woocommerce-admin"),value:u(n)},{label:Object(f._n)("orders","orders",s,"woocommerce-admin"),value:Object(x.formatValue)(m,"number",s)}]}},{key:"render",value:function(){var e=this.props,t=e.advancedFilters,r=e.baseSearchQuery,o=e.filters,a=e.isRequesting,c=e.query,n={helpText:Object(f.__)("Check at least two variations below to compare","woocommerce-admin"),placeholder:Object(f.__)("Search by variation name or SKU","woocommerce-admin")};return Object(_.createElement)(T.a,{baseSearchQuery:r,compareBy:"variations",compareParam:"filter-variations",endpoint:"variations",getHeadersContent:this.getHeadersContent,getRowsContent:this.getRowsContent,isRequesting:a,itemIdField:"variation_id",labels:n,query:c,getSummary:this.getSummary,summaryFields:["variations_count","items_sold","net_revenue","orders_count"],searchBy:"variations",tableQuery:{orderby:c.orderby||"items_sold",order:c.order||"desc",extended_info:!0,products:c.products,variations:c.variations},title:Object(f.__)("Variations","woocommerce-admin"),columnPrefsKey:"variations_report_columns",filters:o,advancedFilters:t})}}]),r}(_.Component);H.contextType=I.a;var Q=H,K=r(725);function J(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function U(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?J(Object(r),!0).forEach((function(t){a()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):J(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function z(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,o=b()(e);if(t){var a=b()(this).constructor;r=Reflect.construct(o,arguments,a)}else r=o.apply(this,arguments);return d()(this,r)}}var G=function(e){u()(r,e);var t=z(r);function r(){return n()(this,r),t.apply(this,arguments)}return s()(r,[{key:"getChartMeta",value:function(){var e=this.props,t=e.query,r=e.isSingleProductView,o=e.isSingleProductVariable,a="compare-products"===t.filter&&t.products&&t.products.split(",").length>1||r&&o?"item-comparison":"time-comparison";return{compareObject:r&&o?"variations":"products",itemsLabel:r&&o?Object(f.__)("%d variations","woocommerce-admin"):Object(f.__)("%d products","woocommerce-admin"),mode:a}}},{key:"render",value:function(){var e=this.getChartMeta(),t=e.compareObject,r=e.itemsLabel,o=e.mode,a=this.props,c=a.path,n=a.query,i=a.isError,s=a.isRequesting,l=a.isSingleProductVariable;if(i)return Object(_.createElement)(q.a,{isError:!0});var u=U({},n);return"item-comparison"===o&&(u.segmentby="products"===t?"product":"variation"),Object(_.createElement)(_.Fragment,null,Object(_.createElement)(K.a,{query:n,path:c,filters:j.c,advancedFilters:j.a,report:"products"}),Object(_.createElement)(R.a,{mode:o,charts:j.b,endpoint:"products",isRequesting:s,query:u,selectedChart:Object(w.a)(n.chart,j.b),filters:j.c,advancedFilters:j.a}),Object(_.createElement)(k.a,{charts:j.b,mode:o,filters:j.c,advancedFilters:j.a,endpoint:"products",isRequesting:s,itemsLabel:r,path:c,query:u,selectedChart:Object(w.a)(u.chart,j.b)}),l?Object(_.createElement)(Q,{baseSearchQuery:{filter:"single_product"},isRequesting:s,query:n,filters:j.c,advancedFilters:j.a}):Object(_.createElement)(S.a,{isRequesting:s,query:n,filters:j.c,advancedFilters:j.a}))}}]),r}(_.Component);G.propTypes={path:O.a.string.isRequired,query:O.a.object.isRequired};t.default=Object(y.a)(Object(h.withSelect)((function(e,t){var r=t.query,o=t.isRequesting,a=!r.search&&r.products&&1===r.products.split(",").length;if(o)return{query:U({},r),isSingleProductView:a,isRequesting:o};var c=e(g.ITEMS_STORE_NAME),n=c.getItems,i=c.isResolving,s=c.getItemsError;if(a){var l=parseInt(r.products,10),u={include:l},m=n("products",u),d=m&&m.get(l)&&"variable"===m.get(l).type,p=i("getItems",["products",u]),b=Boolean(s("products",u));return{query:U(U({},r),{},{"is-variable":d}),isSingleProductView:a,isSingleProductVariable:d,isRequesting:p,isError:b}}return{query:r,isSingleProductView:a}})))(G)},746:function(e,t,r){"use strict";r.d(t,"b",(function(){return n})),r.d(t,"c",(function(){return l})),r.d(t,"a",(function(){return u}));var o=r(3),a=r(49),c=r(720),n=Object(a.applyFilters)("woocommerce_admin_products_report_charts",[{key:"items_sold",label:Object(o.__)("Items Sold","woocommerce-admin"),order:"desc",orderby:"items_sold",type:"number"},{key:"net_revenue",label:Object(o.__)("Net Sales","woocommerce-admin"),order:"desc",orderby:"net_revenue",type:"currency"},{key:"orders_count",label:Object(o.__)("Orders","woocommerce-admin"),order:"desc",orderby:"orders_count",type:"number"}]),i={label:Object(o.__)("Show","woocommerce-admin"),staticParams:["chartType","paged","per_page"],param:"filter",showFilters:function(){return!0},filters:[{label:Object(o.__)("All Products","woocommerce-admin"),value:"all"},{label:Object(o.__)("Single Product","woocommerce-admin"),value:"select_product",chartMode:"item-comparison",subFilters:[{component:"Search",value:"single_product",chartMode:"item-comparison",path:["select_product"],settings:{type:"products",param:"products",getLabels:c.d,labels:{placeholder:Object(o.__)("Type to search for a product","woocommerce-admin"),button:Object(o.__)("Single Product","woocommerce-admin")}}}]},{label:Object(o.__)("Comparison","woocommerce-admin"),value:"compare-products",chartMode:"item-comparison",settings:{type:"products",param:"products",getLabels:c.d,labels:{helpText:Object(o.__)("Check at least two products below to compare","woocommerce-admin"),placeholder:Object(o.__)("Search for products to compare","woocommerce-admin"),title:Object(o.__)("Compare Products","woocommerce-admin"),update:Object(o.__)("Compare","woocommerce-admin")}}}]},s={showFilters:function(e){return"single_product"===e.filter&&!!e.products&&e["is-variable"]},staticParams:["filter","products","chartType","paged","per_page"],param:"filter-variations",filters:[{label:Object(o.__)("All Variations","woocommerce-admin"),chartMode:"item-comparison",value:"all"},{label:Object(o.__)("Single Variation","woocommerce-admin"),value:"select_variation",subFilters:[{component:"Search",value:"single_variation",path:["select_variation"],settings:{type:"variations",param:"variations",getLabels:c.g,labels:{placeholder:Object(o.__)("Type to search for a variation","woocommerce-admin"),button:Object(o.__)("Single Variation","woocommerce-admin")}}}]},{label:Object(o.__)("Comparison","woocommerce-admin"),chartMode:"item-comparison",value:"compare-variations",settings:{type:"variations",param:"variations",getLabels:c.g,labels:{helpText:Object(o.__)("Check at least two variations below to compare","woocommerce-admin"),placeholder:Object(o.__)("Search for variations to compare","woocommerce-admin"),title:Object(o.__)("Compare Variations","woocommerce-admin"),update:Object(o.__)("Compare","woocommerce-admin")}}}]},l=Object(a.applyFilters)("woocommerce_admin_products_report_filters",[i,s]),u=Object(a.applyFilters)("woocommerce_admin_products_report_advanced_filters",{})}}]);