(this["webpackJsonpboby-car"]=this["webpackJsonpboby-car"]||[]).push([[0],[,,,,,,,,,,,,,,,,,function(e,a,t){e.exports=t.p+"static/media/fb.c3f83915.png"},function(e,a,t){e.exports=t.p+"static/media/background.7de3f599.jpg"},,function(e,a,t){e.exports=t(38)},,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){},,,,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){},,function(e,a,t){"use strict";t.r(a);var n,r=t(0),c=t.n(r),l=t(11),m=t.n(l),i=(t(25),t(5)),u=(t(26),t(27),t(6)),o=function(e){var a=e.setShow,t=e.sendNav,n=Object(u.c)((function(e){return e.cart})),r=0;return n.forEach((function(e){r+=e.count})),c.a.createElement("header",null,c.a.createElement("ul",{className:"item"},c.a.createElement("li",{onClick:function(){return a(t.showproduct)}},"Shop"),c.a.createElement("li",null,c.a.createElement("img",{className:"bobbyIcon",src:"img/bobbybuilder3.png",alt:"Bobby Builder"})),c.a.createElement("li",{onClick:function(){return a(t.showShoppingCart)}},c.a.createElement("img",{className:"shopIcon",src:"img/Shopping-Cart-icon.png",alt:"cart"}),c.a.createElement("span",null,"[",r,"]"))))},s=(t(34),t(17)),p=t.n(s),d=function(){return c.a.createElement("div",{className:"footer"},c.a.createElement("div",{className:"text"},c.a.createElement("p",null,"Address"),c.a.createElement("p",null,"Pontusgatan 1"),c.a.createElement("p",null,"G\xf6teborg 44812")),c.a.createElement("div",{className:"text"},c.a.createElement("p",null,"Kontakt"),c.a.createElement("p",null,"email: bobbybuilder@gmail.com"),c.a.createElement("p",null,"Telefon: 0708 12 34 56")),c.a.createElement("div",{className:"text"},c.a.createElement("p",null,"F\xf6lj oss p\xe5 sociala medier!"),c.a.createElement("img",{className:"socialmediaimg",src:p.a,alt:"uh"})))},E=(t(35),t(18)),b=t.n(E),f=t(1),v=t(2),g=t(8),h=t(7),N=Object(h.b)("add to cart"),y=Object(h.b)("remove from cart"),j=Object(h.b)("increase amount"),O=Object(h.b)("decreaseAmount"),k={addToCart:N,removeFromCart:y,increaseAmount:j,decreaseAmount:O},C=Object(h.c)([],(n={},Object(f.a)(n,N,(function(e,a){return e.find((function(e){return e.product.name===a.payload.name}))?e.map((function(e){return e.product.name===a.payload.name?Object(g.a)(Object(g.a)({},e),{},{count:e.count+1}):e})):[].concat(Object(v.a)(e),[{product:a.payload,count:1}])})),Object(f.a)(n,j,(function(e,a){return e.map((function(e){return e.product.name===a.payload?Object(g.a)(Object(g.a)({},e),{},{count:e.count+1}):e}))})),Object(f.a)(n,O,(function(e,a){return e.map((function(e){return e.product.name===a.payload?Object(g.a)(Object(g.a)({},e),{},{count:e.count-1}):e}))})),Object(f.a)(n,y,(function(e,a){return e.filter((function(e){return e.product.name!==a.payload}))})),n)),w=function(){var e=Object(u.b)(),a=Object(r.useState)(""),t=Object(i.a)(a,2),n=t[0],l=t[1],m=[{name:"Classic Racer",price:600,im:"img/bobby1.jpeg"},{name:"Delux ",price:400,im:"img/bobby2.jpg"},{name:"Ledljus",price:700,im:"img/bobby3.jpg"},{name:"Fulda classic",price:200,im:"img/bobby4.jpg"},{name:"Neo",price:800,im:"img/bobby5.jpg"},{name:"porse",price:600,im:"img/bobby6.jpg"},{name:"Bmw",price:400,im:"img/bobby7.jpg"},{name:"Mercdeze",price:700,im:"img/bobby8.jpg"}].map((function(a){var t=function(){return e(k.addToCart(a))};return 0!==n.length?a.name.toUpperCase().match(n.toUpperCase())||a.price.toString().match(n.toString())?c.a.createElement("div",{key:a.name},c.a.createElement("div",{className:"grid-item"},c.a.createElement("a",null," Model: ",a.name),c.a.createElement("p",null," Price: ",a.price," "),c.a.createElement("img",{src:a.im,alt:"bobby2"}),c.a.createElement("button",{className:"but",onClick:t},"Add to Shopping"))):null:c.a.createElement("div",{key:a.name},c.a.createElement("div",{className:"grid-item"},c.a.createElement("a",null," Model: ",a.name),c.a.createElement("p",null," Price: ",a.price," "),c.a.createElement("img",{src:a.im,alt:"bobby2"}),c.a.createElement("button",{className:"but",onClick:t},"Add to Shopping")))}));return c.a.createElement("div",{className:"wrapper"},c.a.createElement("div",{className:"bigPictureWrapper"},c.a.createElement("img",{className:"backgroundimg",src:b.a,alt:"background"}),c.a.createElement("div",{className:"bottom-right"},c.a.createElement("h1",null,"K\xf6p din bobby car online"),c.a.createElement("p",null,"Fri frakt p\xe5 allt"),c.a.createElement("p",null,"Livstid service"),c.a.createElement("p",null,"Snabbast och s\xe4krast"))),c.a.createElement("div",{className:"itemSearchContainer"},c.a.createElement("form",null,c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-25"},c.a.createElement("label",null)),c.a.createElement("div",{className:"col-75"},c.a.createElement("input",{className:"SearchProduct",type:"text",placeholder:"search...",value:n,onChange:function(e){return l(e.target.value)}})))),c.a.createElement("div",{className:"products"},m)))},S=(t(36),t(19)),x=function(){var e=Object(u.b)(),a=Object(u.c)((function(e){return e.cart})),t=Object(S.a)(),n=t.handleSubmit,r=t.register,l=t.errors,m=0;a.forEach((function(e){m+=e.product.price*e.count}));var i=a.map((function(e){return c.a.createElement("div",{key:e.product.name,className:"item-summary"},c.a.createElement("div",null,c.a.createElement("h4",null,e.product.name),c.a.createElement("p",null,"Antal: ",e.count)),c.a.createElement("div",null,c.a.createElement("p",null,e.product.price,"Kr"),c.a.createElement("p",null,e.count*e.product.price,"Kr")))})),o=a.map((function(a){return c.a.createElement("div",{key:a.product.name},c.a.createElement("div",{className:"cart product-container"},c.a.createElement("div",{className:"cart-header"},c.a.createElement("h4",{className:"cart-product-model"},a.product.name),c.a.createElement("button",{className:"delete-button",onClick:function(){return e(k.removeFromCart(a.product.name))}},"X")),c.a.createElement("div",{className:"product-info"},c.a.createElement("div",{className:"cart-price-count"},c.a.createElement("p",{className:"cart-product-price"},"Pris: ",a.product.price,"kr"),c.a.createElement("p",{className:"cart-product-count"},"Antal: ",a.count)),c.a.createElement("div",{className:"count-buttons"},c.a.createElement("button",{className:"count-button-up",onClick:function(){return e(k.increaseAmount(a.product.name))}},c.a.createElement("i",{className:"arrow up"})),c.a.createElement("button",{className:"count-button-down",onClick:function(){return e(k.decreaseAmount(a.product.name))},disabled:0===a.count},c.a.createElement("i",{className:"arrow down"})))),c.a.createElement("img",{className:"cart-img",src:a.product.im,alt:""})))}));return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"cart"},c.a.createElement("h1",null,"Kassa"),o,c.a.createElement("h2",null,"Summering"),i,c.a.createElement("p",{className:"sum"},"Totalt: ",m,"Kr"),c.a.createElement("form",{onSubmit:n((function(e){return console.log(e)})),className:"input-fields"},c.a.createElement("p",{className:"input-header"},"F\xf6rnamn"),c.a.createElement("div",null,c.a.createElement("input",{name:"firstname",type:"text",ref:r({required:!0,pattern:/^[A-Za-z]+$/i})}),l.firstname&&c.a.createElement("span",null,"This field is required")),c.a.createElement("p",{className:"input-header"},"Efternamn"),c.a.createElement("div",null,c.a.createElement("input",{name:"lastname",type:"text",ref:r({required:!0,pattern:/^[A-Za-z]+$/i})}),l.lastname&&c.a.createElement("span",null,"This field is required")),c.a.createElement("p",{className:"input-header"},"Adress"),c.a.createElement("div",null,c.a.createElement("input",{name:"adress",type:"text",ref:r({required:!0})}),l.adress&&c.a.createElement("span",null,"This field is required")),c.a.createElement("p",{className:"input-header"},"Postnummer"),c.a.createElement("div",null,c.a.createElement("input",{name:"post",type:"text",ref:r({required:!0,pattern:/^[0-9]{3}\s*[0-9]{2}^/})}),l.post&&c.a.createElement("span",null,"This field is required")),c.a.createElement("p",{className:"input-header"},"Email"),c.a.createElement("div",null,c.a.createElement("input",{type:"text",name:"email",ref:r({required:!0,pattern:{value:/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,message:"invalid email address"}})}),l.email&&l.email.message),c.a.createElement("p",{className:"input-header"},"Telefon"),c.a.createElement("div",null,c.a.createElement("input",{name:"phone",type:"text",ref:r({required:!0,pattern:/\+?[-0-9 ]*/})}),l.phone&&c.a.createElement("span",null,"This field is required")),c.a.createElement("div",null,c.a.createElement("div",{className:"input-card-info"},c.a.createElement("div",null,c.a.createElement("p",{className:"input-header"},"Kortnummer "),c.a.createElement("div",null,c.a.createElement("input",{name:"cardnumber",type:"text",ref:r({required:!0,pattern:/^[0-9]{4}\s?[0-9]{4}\s?[0-9]{4}\s?[0-9]{4}$/})}),l.cardnumber&&c.a.createElement("span",null,"This field is required"))),c.a.createElement("div",null,c.a.createElement("p",{className:"input-header cvc-header"},"Cvc "),c.a.createElement("div",null,c.a.createElement("input",{name:"cvc",className:"cvc",type:"text",ref:r({required:!0,pattern:/^[0-9]{3}$/})}),l.cvc&&c.a.createElement("span",null,"This field is required")))),c.a.createElement("button",{type:"submit",className:"cta-button",onClick:alert("Hello! I am an alert box!!")},"K\xf6p nu"))))))};var A=function(){var e=Object(r.useState)("product"),a=Object(i.a)(e,2),t=a[0],n=a[1],l=0;return l="product"===t?c.a.createElement(w,null):c.a.createElement(x,null),c.a.createElement("div",{className:"App"},c.a.createElement(o,{setShow:n,sendNav:{showproduct:"product",showShoppingCart:"Cart"}}),c.a.createElement("main",null,l),c.a.createElement(d,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var q=t(4),T=Object(q.c)({cart:C}),K=Object(h.a)({reducer:T});m.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(u.a,{store:K},c.a.createElement(A,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[20,1,2]]]);
//# sourceMappingURL=main.a64d23ae.chunk.js.map