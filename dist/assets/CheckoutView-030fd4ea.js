import{_ as h,g as v,C as y,r as l,o as c,c as p,d as a,h as r,t as b,w as _,T as x,F as g,a as k,e as C,p as w,f as N,i as m}from"./index-5eed3120.js";const S={data(){return{modalIsOpen:!1,fname:"",lname:"",adr:"",city:"",postal:"",phone:"",cardnumer:"",cardname:"",expDate:"",securityNr:"",showErrorMessage:!1}},methods:{openLmodal(){this.modalIsOpen=!0},closeModal(){this.modalIsOpen=!1},checkFields(){const t=document.querySelectorAll(".form-input");for(let e=0;e<t.length;e++){const d=t[e];d.value===""?(d.classList.add("invalid"),this.showErrorMessage=!0):(d.classList.remove("invalid"),this.$router.push({name:"confirmation"}),this.showErrorMessage=!1,window.scrollTo(0,0))}}},computed:{items(){return this.$store.getters.cartItems},cartTotal(){return this.$store.getters.cartTotal}},components:{EmptyModal:v,CartComponent:y}},s=t=>(w("data-v-84da059f"),t=t(),N(),t),I=s(()=>a("div",{class:"bar-top"},[a("span",{id:"bar-title"},"Checkout")],-1)),E={class:"checkout-background"},L=s(()=>a("div",{id:"your-cart"},"1.Your cart",-1)),M={class:"your-cart-container"},P={class:"your-cart-items"},D=s(()=>a("div",{id:"delivery-method"},"2. Delivery method",-1)),F={class:"delivery-login-container"},T=s(()=>a("span",{id:"account"},"Already have an account?",-1)),V=s(()=>a("span",{id:"account-text"},"Sign in for a faster checkout experience.",-1)),A=k('<div class="delivery-options" data-v-84da059f><div class="radio-wrapper" data-v-84da059f><label for="radioA" class="radio" data-v-84da059f><input type="radio" name="radio" value="Free" data-v-84da059f> Free<span class="radio-text" data-v-84da059f>1 - 3 days delivery to your closest pick-up point</span></label><br data-v-84da059f><label for="radioB" class="radio" data-v-84da059f><input type="radio" name="radio" value="49" data-v-84da059f> 49 sek <span class="radio-text" data-v-84da059f>Next day home delivery</span></label><br data-v-84da059f></div></div><div id="shipping-address" data-v-84da059f>3. Shipping address</div><div class="shipping-container" data-v-84da059f><form class="shipping-form" data-v-84da059f><div class="col-50" data-v-84da059f><label for="fname" data-v-84da059f> First name</label><input type="text" id="fname" name="firstname" placeholder="John" class="form-input" data-v-84da059f><label for="lname" data-v-84da059f> Last name</label><input type="text" id="lname" name="lastname" placeholder="Doe" class="form-input" data-v-84da059f><label for="adr" data-v-84da059f> Address</label><input type="text" id="adr" name="address" placeholder="542 W. 15th Street" class="form-input" data-v-84da059f><label for="city" data-v-84da059f>City</label><input type="text" id="city" name="city" placeholder="New York" class="form-input" data-v-84da059f><label for="postal" data-v-84da059f>Postal code</label><input type="number" id="postal" name="postal" placeholder="12345" class="form-input" data-v-84da059f><label for="phone" data-v-84da059f>Phone number</label><input type="number" id="phone" name="phone" placeholder="070 123 45 67" class="form-input" data-v-84da059f><label for="checkbox" class="save-checkbox" data-v-84da059f><input type="checkbox" name="checkbox" data-v-84da059f> Save this information for next time</label></div></form></div><div id="payment-method" data-v-84da059f>4. Payment method</div>',4),B=s(()=>a("div",{class:"payment-container"},[a("div",{class:"radio2-wrapper"},[a("div",{class:"radio1-wrapper"},[a("label",{for:"radio2",id:"paycredit",class:"radio2"},[a("input",{type:"radio",name:"radio2",value:"1"}),m(" Pay with Credit card "),a("i",{class:"bi bi-credit-card"})]),a("form",{class:"creditcard-form"},[a("div",{class:"col-501"},[a("label",{for:"cardnumber"}," Card number"),a("input",{type:"number",id:"cardnumber",name:"cardnumber",placeholder:"123 456 789 123",class:"form-input"}),a("label",{for:"cardname"}," Name on card"),a("input",{type:"text",id:"cardname",name:"cardnme",placeholder:"John Doe",class:"form-input"}),a("label",{for:"expDate"}," Expiration date"),a("input",{type:"text",id:"expDate",name:"expDate",placeholder:"01/24",class:"form-input"}),a("label",{for:"securityNr"},"Security number"),a("input",{type:"number",oninput:"javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);",maxlength:"3",id:"securityNr",name:"securityNr",placeholder:"000",class:"form-input"})])])]),a("br"),a("label",{for:"radio2",class:"radio2"},[a("input",{type:"radio",name:"radio2",value:"2"}),m(" PayPal "),a("i",{id:"paypalIcon",class:"bi bi-paypal"}),a("span",{class:"radio-text"},"You will be directed to the PayPal website after submitting your order")]),a("br")])],-1)),O={class:"total-container"},Y={id:"totalcost"},J={key:0,style:{color:"red"}};function j(t,e,d,q,n,o){const u=l("CartComponent"),f=l("EmptyModal");return c(),p(g,null,[I,a("div",E,[L,a("div",M,[a("div",P,[r(u)])]),D,a("div",F,[T,V,a("input",{type:"button",class:"signin-button",value:"Sign in",onClick:e[0]||(e[0]=(...i)=>o.openLmodal&&o.openLmodal(...i))}),r(f,{title:"Log In","is-open":n.modalIsOpen,onClose:o.closeModal},null,8,["is-open","onClose"])]),A,B,a("div",O,[a("p",Y,"Total: "+b(o.cartTotal),1),a("input",{onClick:e[1]||(e[1]=(...i)=>o.checkFields&&o.checkFields(...i)),type:"button",class:"continue-button",value:"Continue to payment"}),r(x,null,{default:_(()=>[n.showErrorMessage?(c(),p("p",J," Please fill in all fields before continuing ")):C("",!0)]),_:1})])])],64)}const z=h(S,[["render",j],["__scopeId","data-v-84da059f"]]);export{z as default};