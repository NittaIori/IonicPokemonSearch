"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[582],{582:(k,g,n)=>{n.r(g),n.d(g,{Tab3PageModule:()=>y});var o=n(5548),r=n(6814),h=n(95),T=n(3554),c=n(5785),u=n(9164),m=n(3981),t=n(6689),f=n(7324);function Z(e,s){if(1&e&&(t.TgZ(0,"div")(1,"label"),t._uU(2),t.qZA(),t._UZ(3,"ion-range",6),t.qZA()),2&e){const a=s.$implicit;t.xp6(2),t.AsE("",a.stat.name," : ",a.base_stat,""),t.xp6(1),t.s9C("value",a.base_stat/180*100),t.Q6J("disabled",!0)}}function b(e,s){if(1&e&&(t.TgZ(0,"ion-card")(1,"ion-card-header")(2,"ion-card-title"),t._uU(3),t.qZA(),t.TgZ(4,"ion-card-subtitle"),t._uU(5),t.qZA()(),t.TgZ(6,"ion-card-content"),t._UZ(7,"img",4),t.TgZ(8,"p"),t._uU(9),t._UZ(10,"br"),t._uU(11),t._UZ(12,"br"),t.qZA(),t.TgZ(13,"h1"),t._uU(14,"\u30b9\u30c6\u30fc\u30bf\u30b9"),t.qZA(),t.YNc(15,Z,4,4,"div",5),t.qZA()()),2&e){const a=t.oxw();t.xp6(3),t.Oqu(a.pokemon_name[a.pokemon.name]),t.xp6(2),t.hij(" ",a.createTypeHtml(a.pokemon.types)," "),t.xp6(2),t.s9C("src",a.pokemon.sprites.front_default,t.LSH),t.xp6(2),t.hij(" \u9ad8\u3055: ",a.pokemon.height/10,"cm"),t.xp6(2),t.hij(" \u91cd\u3055: ",a.pokemon.weight/10,"kg"),t.xp6(4),t.Q6J("ngForOf",a.pokemon.stats)}}const v=[{path:"",component:(()=>{class e{constructor(a,i,x){this.api=a,this.aplistorage=i,this.activatedRoute=x,this.pokemon_name=m.Hi,this.activatedRoute.params.subscribe(A=>{this.api.get(m.jk.api_base+"pokemon/"+A.name).then(l=>{this.pokemon=l.data,this.aplistorage.get(u.K.key.history).then(p=>{const d=p||[];d.push(this.pokemon),this.aplistorage.set(u.K.key.history,d)}).catch(p=>{console.error(p)})}).catch(l=>{console.error(l)})})}createTypeHtml(a){return a.map(i=>i.type.name).join(" : ")}}return e.\u0275fac=function(a){return new(a||e)(t.Y36(f.g),t.Y36(u.K),t.Y36(c.gz))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-tab3"]],decls:7,vars:3,consts:[[3,"translucent"],["slot","start"],[3,"fullscreen"],[4,"ngIf"],[3,"src"],[4,"ngFor","ngForOf"],[3,"disabled","value"]],template:function(a,i){1&a&&(t.TgZ(0,"ion-header",0)(1,"ion-toolbar"),t._UZ(2,"ion-back-button",1),t.TgZ(3,"ion-title"),t._uU(4," Detail "),t.qZA()()(),t.TgZ(5,"ion-content",2),t.YNc(6,b,16,6,"ion-card",3),t.qZA()),2&a&&(t.Q6J("translucent",!0),t.xp6(5),t.Q6J("fullscreen",!0),t.xp6(1),t.Q6J("ngIf",i.pokemon))},dependencies:[o.oU,o.PM,o.FN,o.Zi,o.tO,o.Dq,o.W2,o.Gu,o.I_,o.wd,o.sr,o.QI,o.cs,r.sg,r.O5]}),e})()}];let P=(()=>{class e{}return e.\u0275fac=function(a){return new(a||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[c.Bz.forChild(v),c.Bz]}),e})(),y=(()=>{class e{}return e.\u0275fac=function(a){return new(a||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[o.Pc,r.ez,h.u5,T.e,P]}),e})()}}]);