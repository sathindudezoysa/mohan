(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{Ahbh:function(t,e,i){"use strict";i.d(e,"a",function(){return n}),i.d(e,"b",function(){return a});var s=i("8Y7J"),n=(i("fyIi"),i("SVse"),i("s7LF"),s.Bb({encapsulation:2,styles:[],data:{}}));function a(t){return s.fc(0,[s.Rb(null,0)],null,null)}},CDfq:function(t,e,i){"use strict";i.d(e,"a",function(){return o});var s=i("eQbi"),n=i("au19"),a=i("8Y7J"),r=i("iInd");let o=(()=>{class t{constructor(t){this.router=t,this.page=1,this.ministryblock=s,this.ministrydetails=s,this.ministrycategory=n,this.categories=n,this.items=s,this.category=n,this.filteredItems=[]=[...this.items],this.pageUrl=window.location.href,this.activeItem=0}getCategories(t){return n.filter(e=>t.includes(e.id))}getMinistry(t){this.ministrydetails=s.filter(e=>e.id==t)}filterItemsByCategory(t,e){this.filteredItems=this.items.filter(e=>e.category.includes(parseInt(t.id))),this.activeItem=e}reset(t){this.filteredItems=[...this.items],this.activeItem=t}setCategory(t){this.ministrycategory=t}getCategory(){return this.ministrycategory}getPostsByCategory(t){return this.ministryblock=s.filter(e=>e.category.includes(parseInt(t)))}setPosts(){var t=null!=this.getCategory()?this.getPostsByCategory(this.getCategory()):"";(""!=t||null!=t||null!=t)&&t.length>0&&(this.ministryblock=t)}ngAfterContentInit(){this.setCategory(this.router.snapshot.params.catId),this.setPosts(),this.getMinistry(this.router.snapshot.params.id)}socialShare(t){return[{title:"facebook",iconClass:"fab fa-facebook-f",iconStyle:"fb",link:"https://www.facebook.com/sharer/sharer.php?u="+encodeURIComponent(this.pageUrl)},{title:"twitter",iconClass:"fab fa-twitter",iconStyle:"tw",link:"http://twitter.com/intent/tweet?text="+encodeURIComponent(t)+"&"+encodeURIComponent(this.pageUrl)},{title:"linkedin",iconClass:"fab fa-linkedin-in",iconStyle:"ln",link:"https://www.linkedin.com/shareArticle?mini=true&url="+encodeURIComponent(this.pageUrl)+"&title="+encodeURIComponent(t)},{title:"pinterest",iconClass:"fab fa-pinterest-p",iconStyle:"gg",link:"http://pinterest.com/pin/create/button/?url="+encodeURIComponent(this.pageUrl)}]}openSocialPopup(t){window.open(t.link,"MsgWindow","width=600,height=600")}}return t.\u0275prov=a.gc({factory:function(){return new t(a.hc(r.a))},token:t,providedIn:"root"}),t})()},au19:function(t){t.exports=JSON.parse('[{"id":1,"title":"Welfare & Development Programs"},{"id":2,"title":"Child\u2019s right to childhood"},{"id":3,"title":"Promoting women entrepreneurs"},{"id":4,"title":"Humanitarian response to emergencies"}]')},eQbi:function(t){t.exports=JSON.parse('[{"id":1,"image":"assets/img/ministries/13.jpg","title":"Help us to Provide Food to the Hungry","shorttext":"Help us to Provide Food to the Hungry, We all wish we could do more to support underprivileged serious patients facing challenges and their caregivers, beyond our prayers. Sometimes, the family members of serious patients do not have time to look after themselves, not even have the time to have food, which is the basic necessity as they are always around taking care of their close ones.","postdate":"29 Januray 2022","category":[1,4],"htmltext":"eetetrte","gallery":["assets/img/ministries/details/4.jpg","assets/img/ministries/details/5.jpg","assets/img/ministries/details/6.jpg"]},{"id":2,"image":"assets/img/ministries/14.jpg","title":"Donate Educational Kit for Children","shorttext":"How does it feel not having a roof over the head? It is hard for us to even imagine, but think about those for whom living on the streets is a reality. We know their life is stressful and full of challenges. We cannot solve the problem of homelessness overnight but we can definitely support early education for the homeless children in our society. Education is a continuous and life changing process and we at Mohan Lanka Foundation feel that no children should be deprived of their right to education. We need your support in providing Educational Kit for Children in need.","postdate":"29 December 2022","category":[2,3],"htmltext":"","gallery":["assets/img/ministries/details/4.jpg","assets/img/ministries/details/5.jpg","assets/img/ministries/details/6.jpg"]},{"id":3,"image":"assets/img/ministries/15.jpg","title":"Emergency Response and Disaster Relief","shorttext":"Our team along with volunteers and doctors are always first to respond to natural or manmade disasters, with principal response efforts focused on food, shelter, water, health and sanitation. We reached out to far off villages during 2013 Uttarakhand floods with emergency relief.","postdate":"29 December 2022","category":[3,2],"htmltext":"","gallery":["assets/img/ministries/details/4.jpg","assets/img/ministries/details/5.jpg","assets/img/ministries/details/6.jpg"]},{"id":4,"image":"assets/img/ministries/16.jpg","title":"COVID-19 Response","shorttext":"We continues to play a central role in combating the pandemic \u2013 with the largest emergency response in our history,  Our achievements to date include: Clean water supplies for 10,000 people. Hygiene kits with crucial supplies like soap, hand sanitizer, masks and sanitary napkins, for 100,000 people. Nutritious food for 5000 people who face the threat of malnutrition due to lockdowns or loss of income. Cash or vouchers enabling 10,000 people to choose what they need most and support local businesses.","postdate":"29 December 2022","category":[4,1],"htmltext":"","gallery":["assets/img/ministries/details/4.jpg","assets/img/ministries/details/5.jpg","assets/img/ministries/details/6.jpg"]},{"id":5,"image":"assets/img/ministries/17.jpg","title":"Mohan Lanka Foundation is working to support more effective and motivated health workers","shorttext":"Mohan Lanka Foundation goes beyond providing health services and works to address the barriers that prevent the most vulnerable people from accessing quality, equitable health care.","postdate":"29 December 2022","category":[1,4],"htmltext":"","gallery":["assets/img/ministries/details/4.jpg","assets/img/ministries/details/5.jpg","assets/img/ministries/details/6.jpg"]},{"id":6,"image":"assets/img/ministries/12.jpg","title":"Donate to provide Hope, Dignity and Economic Opportunity","shorttext":"Help Mohan Lanka fight poverty and respond to desperate need by making a tax-deductible gift today. With your support we can: Help poor families send their children to school.Fight hunger and poverty in countries in crisis. Help people learn skills to start and sustain their own businesses.Deliver emergency aid when disaster strikes.Help women build a better life for themselves, their families and their communities.","postdate":"29 December 2022","category":[2,3],"htmltext":"","gallery":["assets/img/ministries/details/4.jpg","assets/img/ministries/details/5.jpg","assets/img/ministries/details/6.jpg"]},{"id":7,"image":"assets/img/ministries/7.jpg","title":" Child Focused Community Development","shorttext":"Promote and facilitate the protection, safety and rights of children and ensure that children continue their education. To empower women economically, socially and politically with Self-Help Groups as agents of change within the home and community.","postdate":"29 December 2022","category":[3,2],"htmltext":" ","gallery":["assets/img/ministries/details/4.jpg","assets/img/ministries/details/5.jpg","assets/img/ministries/details/6.jpg"]},{"id":8,"image":"assets/img/ministries/8.jpg","title":"Upgrade the lifestyle of the underprivileged families","shorttext":"This program was launched to upgrade the lifestyle of the underprivileged families in order to overcome the hardships in life. We believe that if they are provided with initial capital and the knowledge by training to do certain types of livelihood activates would help them to lead a good life with the facilities provided by us to start a self-employment business. Our belief is to improve their life style which create a peaceful environment at home for those children to carry out their studies as well as the parents to have a less weight on their hardship to bring up their children.","postdate":"29 December 2022","category":[4,1],"htmltext":"","gallery":["assets/img/ministries/details/4.jpg","assets/img/ministries/details/5.jpg","assets/img/ministries/details/6.jpg"]},{"id":9,"image":"assets/img/ministries/9.jpg","title":"Individual Child Sponsorship","shorttext":"Our Sponsorship program is for under-privileged children who are living in above areas with low income status of families, mostly orphaned and/or abandoned children. Overall, the program focuses on the children\u2019s educational development. Our main aim is to support the underprivileged children to stand on their own feet in the society.","postdate":"29 December 2022","category":[1,4],"htmltext":"","gallery":["assets/img/ministries/details/4.jpg","assets/img/ministries/details/5.jpg","assets/img/ministries/details/6.jpg"]}]')},fyIi:function(t,e,i){"use strict";i.d(e,"a",function(){return a}),i.d(e,"b",function(){return o}),i.d(e,"c",function(){return r});var s=i("SVse"),n=i("8Y7J");class a{constructor(t,e,i){this.el=t,this.zone=e,this.platformId=i,this.afterChange=new n.q,this.beforeChange=new n.q,this.breakpoint=new n.q,this.destroy=new n.q,this.init=new n.q,this.currentIndex=0,this.slides=[],this.initialized=!1,this._removedSlides=[],this._addedSlides=[]}ngOnDestroy(){this.unslick()}ngAfterViewInit(){this.ngAfterViewChecked()}ngAfterViewChecked(){if(!Object(s.B)(this.platformId)&&(this._addedSlides.length>0||this._removedSlides.length>0)){const t=this.slides.length-this._removedSlides.length+this._addedSlides.length;this.initialized?0===t?this.unslick():(this._addedSlides.forEach(t=>{this.slides.push(t),this.zone.runOutsideAngular(()=>{this.$instance.slick("slickAdd",t.el.nativeElement)})}),this._addedSlides=[],this._removedSlides.forEach(t=>{const e=this.slides.indexOf(t);this.slides=this.slides.filter(e=>e!==t),this.zone.runOutsideAngular(()=>{this.$instance.slick("slickRemove",e)})}),this._removedSlides=[]):t>0&&this.initSlick()}}initSlick(){this.slides=this._addedSlides,this._addedSlides=[],this._removedSlides=[],this.zone.runOutsideAngular(()=>{this.$instance=jQuery(this.el.nativeElement),this.$instance.on("init",(t,e)=>{this.zone.run(()=>{this.init.emit({event:t,slick:e})})}),this.$instance.slick(this.config),this.zone.run(()=>{var t;this.initialized=!0,this.currentIndex=(null===(t=this.config)||void 0===t?void 0:t.initialSlide)||0}),this.$instance.on("afterChange",(t,e,i)=>{this.zone.run(()=>{this.afterChange.emit({event:t,slick:e,currentSlide:i,first:0===i,last:e.$slides.length===i+e.options.slidesToScroll}),this.currentIndex=i})}),this.$instance.on("beforeChange",(t,e,i,s)=>{this.zone.run(()=>{this.beforeChange.emit({event:t,slick:e,currentSlide:i,nextSlide:s}),this.currentIndex=s})}),this.$instance.on("breakpoint",(t,e,i)=>{this.zone.run(()=>{this.breakpoint.emit({event:t,slick:e,breakpoint:i})})}),this.$instance.on("destroy",(t,e)=>{this.zone.run(()=>{this.destroy.emit({event:t,slick:e}),this.initialized=!1})})})}addSlide(t){this._addedSlides.push(t)}removeSlide(t){this._removedSlides.push(t)}slickGoTo(t){this.zone.runOutsideAngular(()=>{this.$instance.slick("slickGoTo",t)})}slickNext(){this.zone.runOutsideAngular(()=>{this.$instance.slick("slickNext")})}slickPrev(){this.zone.runOutsideAngular(()=>{this.$instance.slick("slickPrev")})}slickPause(){this.zone.runOutsideAngular(()=>{this.$instance.slick("slickPause")})}slickPlay(){this.zone.runOutsideAngular(()=>{this.$instance.slick("slickPlay")})}unslick(){this.$instance&&(this.zone.runOutsideAngular(()=>{this.$instance.slick("unslick")}),this.$instance=void 0),this.initialized=!1}ngOnChanges(t){if(this.initialized){const e=t.config;if(e.previousValue!==e.currentValue&&void 0!==e.currentValue){const t=e.currentValue.refresh,i=Object.assign({},e.currentValue);delete i.refresh,this.zone.runOutsideAngular(()=>{this.$instance.slick("slickSetOption",i,t)})}}}}class r{constructor(t,e,i){this.el=t,this.platformId=e,this.carousel=i}ngOnInit(){Object(s.A)(this.platformId)&&this.carousel.addSlide(this)}ngOnDestroy(){Object(s.A)(this.platformId)&&this.carousel.removeSlide(this)}}class o{}},miJQ:function(t,e,i){"use strict";i.d(e,"a",function(){return o}),i.d(e,"b",function(){return l});var s=i("8Y7J"),n=function(){return(n=Object.assign||function(t){for(var e,i=1,s=arguments.length;i<s;i++)for(var n in e=arguments[i])Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t}).apply(this,arguments)},a=function(){function t(t,e,i){var s=this;this.target=t,this.endVal=e,this.options=i,this.version="2.0.8",this.defaults={startVal:0,decimalPlaces:0,duration:2,useEasing:!0,useGrouping:!0,smartEasingThreshold:999,smartEasingAmount:333,separator:",",decimal:".",prefix:"",suffix:""},this.finalEndVal=null,this.useEasing=!0,this.countDown=!1,this.error="",this.startVal=0,this.paused=!0,this.count=function(t){s.startTime||(s.startTime=t);var e=t-s.startTime;s.remaining=s.duration-e,s.frameVal=s.useEasing?s.countDown?s.startVal-s.easingFn(e,0,s.startVal-s.endVal,s.duration):s.easingFn(e,s.startVal,s.endVal-s.startVal,s.duration):s.countDown?s.startVal-e/s.duration*(s.startVal-s.endVal):s.startVal+e/s.duration*(s.endVal-s.startVal),s.frameVal=s.countDown?s.frameVal<s.endVal?s.endVal:s.frameVal:s.frameVal>s.endVal?s.endVal:s.frameVal,s.frameVal=Number(s.frameVal.toFixed(s.options.decimalPlaces)),s.printValue(s.frameVal),e<s.duration?s.rAF=requestAnimationFrame(s.count):null!==s.finalEndVal?s.update(s.finalEndVal):s.callback&&s.callback()},this.formatNumber=function(t){var e,i,n,a,r=t<0?"-":"";e=Math.abs(t).toFixed(s.options.decimalPlaces);var o=(e+="").split(".");if(i=o[0],n=o.length>1?s.options.decimal+o[1]:"",s.options.useGrouping){a="";for(var l=0,h=i.length;l<h;++l)0!==l&&l%3==0&&(a=s.options.separator+a),a=i[h-l-1]+a;i=a}return s.options.numerals&&s.options.numerals.length&&(i=i.replace(/[0-9]/g,function(t){return s.options.numerals[+t]}),n=n.replace(/[0-9]/g,function(t){return s.options.numerals[+t]})),r+s.options.prefix+i+n+s.options.suffix},this.easeOutExpo=function(t,e,i,s){return i*(1-Math.pow(2,-10*t/s))*1024/1023+e},this.options=n(n({},this.defaults),i),this.formattingFn=this.options.formattingFn?this.options.formattingFn:this.formatNumber,this.easingFn=this.options.easingFn?this.options.easingFn:this.easeOutExpo,this.startVal=this.validateValue(this.options.startVal),this.frameVal=this.startVal,this.endVal=this.validateValue(e),this.options.decimalPlaces=Math.max(this.options.decimalPlaces),this.resetDuration(),this.options.separator=String(this.options.separator),this.useEasing=this.options.useEasing,""===this.options.separator&&(this.options.useGrouping=!1),this.el="string"==typeof t?document.getElementById(t):t,this.el?this.printValue(this.startVal):this.error="[CountUp] target is null or undefined"}return t.prototype.determineDirectionAndSmartEasing=function(){var t=this.finalEndVal?this.finalEndVal:this.endVal;this.countDown=this.startVal>t,Math.abs(t-this.startVal)>this.options.smartEasingThreshold?(this.finalEndVal=t,this.endVal=t+(this.countDown?1:-1)*this.options.smartEasingAmount,this.duration=this.duration/2):(this.endVal=t,this.finalEndVal=null),this.useEasing=!this.finalEndVal&&this.options.useEasing},t.prototype.start=function(t){this.error||(this.callback=t,this.duration>0?(this.determineDirectionAndSmartEasing(),this.paused=!1,this.rAF=requestAnimationFrame(this.count)):this.printValue(this.endVal))},t.prototype.pauseResume=function(){this.paused?(this.startTime=null,this.duration=this.remaining,this.startVal=this.frameVal,this.determineDirectionAndSmartEasing(),this.rAF=requestAnimationFrame(this.count)):cancelAnimationFrame(this.rAF),this.paused=!this.paused},t.prototype.reset=function(){cancelAnimationFrame(this.rAF),this.paused=!0,this.resetDuration(),this.startVal=this.validateValue(this.options.startVal),this.frameVal=this.startVal,this.printValue(this.startVal)},t.prototype.update=function(t){cancelAnimationFrame(this.rAF),this.startTime=null,this.endVal=this.validateValue(t),this.endVal!==this.frameVal&&(this.startVal=this.frameVal,this.finalEndVal||this.resetDuration(),this.finalEndVal=null,this.determineDirectionAndSmartEasing(),this.rAF=requestAnimationFrame(this.count))},t.prototype.printValue=function(t){var e=this.formattingFn(t);"INPUT"===this.el.tagName?this.el.value=e:"text"===this.el.tagName||"tspan"===this.el.tagName?this.el.textContent=e:this.el.innerHTML=e},t.prototype.ensureNumber=function(t){return"number"==typeof t&&!isNaN(t)},t.prototype.validateValue=function(t){var e=Number(t);return this.ensureNumber(e)?e:(this.error="[CountUp] invalid start or end value: "+t,null)},t.prototype.resetDuration=function(){this.startTime=null,this.duration=1e3*Number(this.options.duration),this.remaining=this.duration},t}(),r=i("SVse");let o=class{constructor(t,e,i){this.el=t,this.zone=e,this.platformId=i,this.options={},this.reanimateOnClick=!0,this.complete=new s.q}onClick(){this.reanimateOnClick&&this.animate()}ngOnChanges(t){Object(r.A)(this.platformId)&&t.endVal&&void 0!==t.endVal.currentValue&&(void 0!==this.previousEndVal&&(this.options=Object.assign({},this.options,{startVal:this.previousEndVal})),this.countUp=new a(this.el.nativeElement,this.endVal,this.options),this.animate(),this.previousEndVal=this.endVal)}animate(){this.zone.runOutsideAngular(()=>{this.countUp.reset(),this.countUp.start(()=>{this.zone.run(()=>{this.complete.emit()})})})}},l=class{}}}]);