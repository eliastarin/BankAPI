import{o as s,c as n,a as r,F as _,r as p,t as o,j as c,u as d,g as m,b as l,d as u,e as f}from"./index-DJzXngCq.js";import"./users_item-C_LfcF1q.js";import{_ as x}from"./users_table-C4Box7BH.js";import"./userService-CASxWzDT.js";const g={class:"container d-flex flex-nowrap m-0 p-0"},y={class:"container m-5 px-5 d-flex flex-wrap"},v=c('<div class="container d-flex" style="color:white;"><svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-arrow-left-right mx-2" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M1 11.5a.5.5 0 0 0 .5.5h11.793l-3.147 3.146a.5.5 0 0 0 .708.708l4-4a.5.5 0 0 0 0-.708l-4-4a.5.5 0 0 0-.708.708L13.293 11H1.5a.5.5 0 0 0-.5.5m14-7a.5.5 0 0 1-.5.5H2.707l3.147 3.146a.5.5 0 1 1-.708.708l-4-4a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 4H14.5a.5.5 0 0 1 .5.5"></path></svg><h1>Bank Transfer</h1></div><div class="container d-flex m-3"><h1 style="font-size:80px;">€</h1><input type="number" min="1" class="amount-btn" placeholder="Amount"></div>',2),b={class:"container my-3",style:{color:"white"}},w=r("h2",null,"Transfer from:",-1),I={class:"container d-flex"},S={class:"mx-3","aria-label":"Default select example",style:{width:"100%",height:"50px","font-size":"30px"}},N=c('<div class="container my-3" style="color:white;"><h2>Transfer to:</h2><div class="container d-flex"><input type="text" class="mx-3" id="fullnameInput" placeholder="Full Name" style="width:40%;font-size:25px;" required><input type="text" class="mx-3" id="ibanInput" placeholder="IBAN" style="width:40%;font-size:25px;" required><button class="transfer-btn" style="width:100px !important;height:50px !important;font-size:20px;">Verify</button></div></div><div class="container m-4 d-flex justify-content-center"><button class="transfer-btn"><h1>Transfer</h1></button></div>',2),T={name:"TransferPage",data(){return{loginStore:d(),accounts:[],id:Number}},props:{userId:Number},methods:{hasUsertype(e){return this.loginStore.hasUsertype(e)}},async mounted(){try{this.hasUsertype("CUSTOMER")?this.id=this.loginStore.userId:this.id=this.userId,console.log(this.id);const e=await m(this.id);this.accounts=e,console.log(e)}catch(e){console.log(e)}}},h=Object.assign(T,{setup(e){return(t,a)=>(s(),n("div",g,[r("div",y,[v,r("div",b,[w,r("div",I,[r("select",S,[(s(!0),n(_,null,p(t.accounts,i=>(s(),n("option",null,o(i.type)+": "+o(i.iban)+" [ €"+o(i.balance)+" ] ",1))),256))])])]),N])]))}}),$={name:"TransfersOverview",data(){return{}},props:{id:Number},mounted(){this.user=this.id}},U=Object.assign($,{setup(e){return(t,a)=>(s(),l(h,{userId:e.id},null,8,["userId"]))}}),k={class:"d-flex"},B={name:"AdminTransfersPage",data(){return{userId:0}},methods:{setUserId(e){this.userId=0,this.$nextTick(()=>{this.userId=e})}}},j=Object.assign(B,{setup(e){return(t,a)=>(s(),n("div",k,[u(x,{onSelectUser:t.setUserId},null,8,["onSelectUser"]),t.userId!==0?(s(),l(U,{key:0,id:t.userId},null,8,["id"])):f("",!0)]))}}),O={key:0},V={data(){return{loginStore:d()}}},D=Object.assign(V,{__name:"TransferView",setup(e){return(t,a)=>t.loginStore.hasUsertype("ADMIN")?(s(),n("div",O,[u(j)])):(s(),l(h,{key:1}))}});export{D as default};
