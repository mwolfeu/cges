import{I as S,Z as N,r as k,a4 as Q,j as F,h as w,ac as X,a9 as L,C,a3 as f,G as M,b as l,x as Z,W as E,X as ee,aX as D,ab as y,aY as te,A as ae,M as O,N as ie,F as ne,ag as oe}from"./entry.c8de3f6a.js";const j=S({class:[String,Array],style:{type:[String,Array,Object],default:null}},"component");function we(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;for(;e;){if(t?re(e):H(e))return e;e=e.parentElement}return document.scrollingElement}function Ce(e,t){const i=[];if(t&&e&&!t.contains(e))return i;for(;e&&(H(e)&&i.push(e),e!==t);)e=e.parentElement;return i}function H(e){if(!e||e.nodeType!==Node.ELEMENT_NODE)return!1;const t=window.getComputedStyle(e);return t.overflowY==="scroll"||t.overflowY==="auto"&&e.scrollHeight>e.clientHeight}function re(e){if(!e||e.nodeType!==Node.ELEMENT_NODE)return!1;const t=window.getComputedStyle(e);return["scroll","auto"].includes(t.overflowY)}function q(e){const t=N("useRender");t.render=e}function Se(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"content";const i=k(),a=k();if(Q){const s=new ResizeObserver(r=>{e==null||e(r,s),r.length&&(t==="content"?a.value=r[0].contentRect:a.value=r[0].target.getBoundingClientRect())});F(()=>{s.disconnect()}),w(i,(r,n)=>{n&&(s.unobserve(L(n)),a.value=void 0),r&&s.observe(L(r))},{flush:"post"})}return{resizeRef:i,contentRect:X(a)}}const se=[{"Organization:":`The carousel is a link to specific cards and/or full-page resources                                
Some pages will have their own list of categories represented in a menu bar    (see sheets w category header)                             `},{"Organization:":"All the Content sheets will contain card info"},{"Organization:":"All Narrative sheets will contain long form narrative info"},{"Organization:":"Every card type and associated color will be in the types sheet"},{"Organization:":"Cards on the website will be ordered by their row in the respective Content sheet"}],le=[{picture:"p1.jpg",title:"Merri Utami",file:"Utami_090623.pdf"},{picture:"p2.jpg",title:"Fati",file:"Fati_070623.pdf"},{picture:"p3.jpg",title:"Kanizan Bibi",file:"Bibi_090623.pdf"},{picture:"p4.jpg",title:"Cameroon: Targeting Girls",file:"Cameroon_090623.pdf"},{picture:"p5.jpg",title:"Lisa Montgomery",file:"Montgomery_090623.pdf"}],ce=[{Section:"Landing Image Example",Type:"bg-image",Background:"backgrounds/003.jpg",Notes:"Content contained in landing image example sheet "},{Type:"space",Foreground:"white",Background:"white"},{Section:"Landing Parallax Example",Type:"bg-parallax",Background:"landingplx.jpg",Notes:"Content contained in landing parallax example sheet "},{Type:"space",Foreground:"white",Background:"white"},{Type:"space",Foreground:"white",Background:"#D8A499"},{Section:'"+700%"',Type:"title",Foreground:"white",Background:"#D8A499"},{Section:"In reality, women have suffered the most in the era of mass incarceration, with female incarceration increasing by 700% since 1980, more than double the rate of male incarceration for the same period.",Type:"normal",Background:"#D8A499"},{Section:"1/39 compared to 1/59",Type:"title",Foreground:"white",Background:"#D8A499"},{Section:"For women of color, the punitive nature of our criminal legal system has been disproportionately harsh. Nationally, one of every 39 imprisoned Black women is serving LWOP (life without parole) compared with one out of every 59 imprisoned white women.",Type:"normal",Background:"#D8A499"},{Section:"Complicating the urgency of these needs is the reality that very few studies have focused on these populations, creating a dearth of knowledge surrounding their needs.",Type:"normal",Background:"#D8A499"},{Section:"The result is a prison system filled with the most vulnerable members of society, whose identities sit at the intersection of multiple forms of marginalization. Most have been victims long before they entered the system as perpetrators, yet were denied assistance and intervention when they needed it most. We believe in uplifting these individuals, because we understand that their lived experiences have the power to shed light on the cruelties and injustices of the criminal legal system. Their stories hold the key to transforming the system by moving it away from retribution and punishment and toward rehabilitation and healing.",Type:"normal",Background:"#D8A499"},{Type:"space",Background:"#D8A499"},{Type:"space",Foreground:"white",Background:"white"}],ue=[{Type:"space",Background:"#C6CDF7"},{Section:"About",Type:"title",Foreground:"white",Background:"#C6CDF7"},{Section:"The Center on Gender and Extreme Sentencing was founded in response to the exclusion of women, particularly women of color, from conversations surrounding mass incarceration in the United States. For too long, women, trans folks, and gender minorities have been left behind by researchers, advocates, and impact litigation efforts. This exclusion exists for multiple reasons, including the sense that because there are comparatively fewer women behind bars, that efforts would be better spent studying, advocating for, and litigating on behalf of incarcerated men. However, women’s incarceration rates are growing faster than those of men. As of 2023, the population of incarcerated women in the United States was six times higher than in 1980 (The Sentencing Project, 2023). ",Type:"normal",Background:"#C6CDF7"},{Section:"Women are also left out of discussions around the criminal legal system because of societal gender bias and institutionalized misogyny. We see this reflected in the stories of our clients, many of whom were ignored and disregarded when they were victims of crimes, then villainized and criminalized when they became perpetrators. The normalization of gender-based violence and misogyny means that many women’s experiences of gender-based oppression and violence are marginalized and minimized before the juries that condemned them to extreme punishments. ",Type:"normal",Background:"#C6CDF7"},{Section:"We know from years of experience defending women and gender minorities accused of serious crimes that their lives, experiences, and paths to incarceration are fundamentally different from those of men. So too are their experiences within prison systems designed to house men. Our goal at CGES is to uplift these stories, while bolstering them with rigorous research and advocacy that challenges how women have been treated by the criminal legal system. We seek to leverage systemic change within the criminal legal system by advocating for and beside the most marginalized members of our community who are incarcerated.",Type:"normal",Background:"#C6CDF7"},{Section:"Our work addresses intersectional discrimination from a variety of angles. We shed light on hidden forms of discrimination and disrupt widespread misconceptions about its prevalence. We engage in advocacy campaigning to inform the public and mobilize new allies for change. We produce materials of practical relevance for lawyers, policy-makers, and most importantly, incarcerated people.",Type:"normal",Background:"#C6CDF7"},{Type:"space",Background:"#C6CDF7"},{Type:"space",Background:"white"},{Section:"Our Team:",Type:"title",Background:"white"},{Type:"space",Background:"#C6CDF7"},{Section:"We are a multidisciplinary group of lawyers, human rights defenders, scholars, experts, and researchers dedicated to exposing the intersectional bias faced by women, trans people, and gender minorities facing extreme sentencing. We engage in advocacy and research, and share practical resources with advocates and people who have directly experienced incarceration, with the goal of effecting systemic change within the criminal legal system. By focusing on the most vulnerable members of the incarcerated population, we believe our approach will gain victories that will be felt throughout the prison industrial complex, to the benefit of all people subjected to the harms of mass incarceration.",Type:"normal",Background:"#C6CDF7"},{Type:"space",Background:"#C6CDF7"},{Type:"space",Background:"white"},{Section:"Kwaneta Harris",Type:"title",Background:"white"},{Type:"space",Background:"#C6CDF7"},{Section:"Kwaneta Harris is a former nurse, business owner and expat, now incarcerated journalist and a Haymarket Writing Freedom Fellow. She brings experiences from each profession to illuminate how the experience of being incarcerated in the largest state prison in Texas is vastly different for women in ways that directly map onto a culture rooted in misogyny. Her powerful and shocking stories expose how the intersection of gender, race and place contribute to state-sanctioned, gender-based violence. As an advisory board member of CGES, Kwaneta’s input is an invaluable asset towards ensuring our programming is responsive to the needs of incarcerated women. You can read Kwaneta’s writing <a href='https://www.kwanetaharris.com/' target='_blank' rel='noopener' > here </a>.",Type:"normal",Background:"#C6CDF7"},{Section:"harris.jpg",Type:"picture",Background:"#C6CDF7"},{Type:"space",Background:"#C6CDF7"},{Type:"space",Background:"white"},{Section:"Bahar Mirhosseni",Type:"title",Background:"white"},{Type:"space",Background:"#C6CDF7"},{Section:"Bahar Mirhosseni is a human rights advocate, a criminal defense lawyer, and the Director of Legal Advocacy at the Cornell Center on the Death Penalty Worldwide. She also co-teaches the Pretrial Justice Clinic at UCLA School of Law. She has collaborated with a range of human rights organizations including the Georgia Capital Defender Office, the Southern Africa Litigation Centre, and Addameer Prisoner Support and Human Rights Association. She serves on both the Racial Justice Committee and the Education Committee of the National Association for Public Defense. She has spent over sixteen years in indigent defense, as a public defender in New York and California, and in partnership with public defenders overseas, on access to justice, human rights, and high quality lawyering.",Type:"normal",Background:"#C6CDF7"},{Section:"bahar.jpg",Type:"picture",Background:"#C6CDF7"},{Type:"space",Background:"#C6CDF7"},{Type:"space",Background:"white"},{Section:"Chelsea Halstead",Type:"title",Background:"white"},{Type:"space",Background:"#C6CDF7"},{Section:"Chelsea Halstead is the Director of the Cornell Center on the Death Penalty Worldwide, where she oversees the center’s operations, communications, strategy, advocacy, and fundraising efforts. Prior to her appointment at CCDPW, Chelsea co-founded the Colibrí Center for Human Rights in Tucson, Arizona. Colibrí combines forensic science with human rights advocacy to identify the remains of people who have died in their attempt to cross the U.S.-Mexico border while calling attention to failed immigration policy. Chelsea helped design the organization’s innovative DNA program, which has facilitated the identification of over 200 previously unidentified human remains. Her work has been recognized in USA Today, The Guardian, The New York Times, The Washington Post, Al Jazeera, and other media. Chelsea holds a B.A. in Geography from the University of Arizona and an M.P.A. from Cornell University.",Type:"normal",Background:"#C6CDF7"},{Section:"halstead.jpg",Type:"picture",Background:"#C6CDF7"},{Type:"space",Background:"#C6CDF7"},{Type:"space",Background:"white"},{Section:"Sandra Babcock",Type:"title",Background:"white"},{Type:"space",Background:"#C6CDF7"},{Section:"Sandra Babcock is a Clinical Professor at Cornell Law School, where she is the Faculty Director and founder of the Cornell Center on the Death Penalty Worldwide (CCDPW). Over the last thirty years she has helped defend hundreds of men and women facing execution around the world. She began her career as a staff attorney at the Texas Resource Center, where she defended persons facing execution in post-conviction proceedings for four years. Following a five-year stint as a public defender in Minneapolis, she served for six years as the founding director of the Mexican Capital Legal Assistance Program, a project funded by the Government of Mexico to defend Mexican nationals facing the death penalty in the U.S. In that capacity she provided litigation support to attorneys around the country, defended Mexican nationals facing execution, and represented Mexico before the International Court of Justice in Avena and Other Mexican Nationals. In 2006, she became a Clinical Professor at Northwestern Law School, where she spearheaded a ten-year project in Malawi that ultimately resulted in the release of over 250 prisoners, 150 of whom were formerly sentenced to death. She moved to Cornell Law in 2014, where she founded the Cornell Center on the Death Penalty Worldwide. In 2018, together with her colleagues at CDPW, she launched the Alice Project, a global movement to end extreme sentencing of women and gender non-conforming individuals. Her clinic currently represents women facing the death penalty in the United States, Malawi, and Tanzania. She has authored numerous articles, book chapters and reports on the application of the death penalty under international law. She teaches classes in international human rights, gender rights, and the death penalty. In September 2021, she received the American Bar Association’s John Paul Stevens Guiding Hand of Counsel Award, given to one capital defender every two years whose work has improved the legal representation of persons facing the death penalty and contributed to systemic reform.",Type:"normal",Background:"#C6CDF7"},{Section:"babcock.jpg",Type:"picture",Background:"#C6CDF7"},{Type:"space",Background:"#C6CDF7"},{Type:"space",Background:"white"}],Te={FAQ:se,"Card Types":[{type:"Brief",color:"#F9D6A5ff",name:"Sunset"},{type:"Petition",color:"#2B3E48ff",name:"Charcoal"},{type:"Narrative",color:"#D4AD8Cff",name:"Tan"},{type:"Litigation",color:"#C09D70ff",name:"Lion"},{type:"Factsheet",color:"#E4A263ff",name:"Fawn"},{type:"Website",color:"#A4663Aff",name:"Raw Umber"},{type:"Org_list",color:"#818E81ff",name:"Battleship Grey"},{type:"Report",color:"#B5BEC1ff",name:"Silver"},{type:"Event",color:"#BF6A3Fff",name:"Brown Sugar"},{type:"News",color:"#3F4C50ff",name:"Outer Space"},{type:"Fellow",color:"#24292Fff",name:"Gunmetal"},{type:"Case",color:"#7B605Bff",name:"Wenge"}],"Main Categories":[{category:"About",link:"/about"},{category:"Projects",link:"projects"},{category:"News & Events",link:"/events-news"}],"Projects Categories":[{category:"Fellows",link:"/fellows"},{category:"Toolkit",link:"/toolkit"},{category:"Resource Hub",link:"/resourcehub"},{category:"Women on Death Row",link:"/wodr"}],Carousel:le,Landing:ce,"Landing Image Example":[{Type:"space",Background:"transparent"},{Section:"Center on Gender and Extreme Sentencing",Type:"title",Background:"#E6A0C4"},{Section:"Our vision and purpose is to strive to create a world where extreme sentencing is replaced with justice practices centered on restoration and healing instead of retribution and punishment.",Type:"normal",Background:"white"},{Type:"space",Background:"transparent"}],"Landing Parallax Example":[{Type:"space",Background:"transparent"},{Section:"The Problem",Type:"title",Foreground:"white",Background:"transparent"},{Section:"The issue of gender discrimination in sentencing is deeply urgent and profoundly misunderstood.",Type:"title",Background:"white"},{Section:"Although women are the fastest growing population of incarcerated people, perceptions that they receive preferential treatment from the criminal legal system abound.",Type:"normal",Background:"white"},{Type:"space",Background:"transparent"}],"Women on Death Row Categories":[{category:"Conditions of Detention"},{category:"Transwomen"},{category:"Intersectional Bias"},{category:"Gender-Based Violence"},{category:"Mental Health"},{category:"Discrimination in the Legal System"}],About:ue,"Fellows List":[{Type:"space",Background:"#C6CDF7"},{Section:"Fellows:",Type:"title",Foreground:"white",Background:"#C6CDF7"},{Section:"In recognition of the expertise that formerly incarcerated people have gained through their lived experience, we have created the Future Freedoms Fellowship. This program provides a part time stipend and a small pool of career development funding to professionals who are interested in social justice advocacy and criminal legal system reform. Our goal is to provide returning community members with financial support, professional development opportunities, speaking engagements, advocacy training, and other tools to assist them with rebuilding careers after incarceration. Our fellows bring expertise to guide us in ensuring our organizational programming reflects the needs and desires of people who are still incarcerated. ",Type:"normal",Background:"#C6CDF7"},{Type:"space",Background:"#C6CDF7"},{Type:"space",Background:"white"}],"Fellows Cards":[{title:"Fellows Item",subtitle:"mysubtitle",abstract_image:"test.png",abstract:"Occaecat eu ea id deserunt commodo ullamco quis anim exercitation ipsum dolore dolore. Incididunt ipsum laboris pariatur eu qui voluptate non ea Lorem eu.",body:"resource copy",attachments:"PDFs",type:"Fellow"}],"Toolkit List":[{Type:"space",Background:"#C6CDF7"},{Section:"Toolkit:",Type:"title",Foreground:"white",Background:"#C6CDF7"},{Section:"Here you will find sample legal briefs, clemency petitions, resources on narrative construction, litigation manuals, and factsheets relating to the defense of women and gender minorities on the following key issues: gender-based violence, sex trafficking, coercive control, trauma, mental health, intersectional discrimination, prison conditions, and working with the media. The materials in our toolkit are free and easily accessible, with the vision that equipping diverse defense communities with these resources will advance advocacy on behalf of criminalized women, transgender people, and gender minorities.",Type:"normal",Background:"#C6CDF7"},{Type:"space",Background:"#C6CDF7"},{Type:"space",Background:"white"}],"Toolkit Cards":[{title:"Brief Item",subtitle:"mysubtitle",abstract_image:"test.png",abstract:"Occaecat eu ea id deserunt commodo ullamco quis anim exercitation ipsum dolore dolore. Incididunt ipsum laboris pariatur eu qui voluptate non ea Lorem eu.",body:"resource copy",attachments:"PDFs",type:"Brief"},{title:"Petition Item",subtitle:"mysubtitle",abstract_image:"test.png",abstract:"Occaecat eu ea id deserunt commodo ullamco quis anim exercitation ipsum dolore dolore. Incididunt ipsum laboris pariatur eu qui voluptate non ea Lorem eu.",body:"resource copy",attachments:"PDFs",type:"Petition"},{title:"Narrative Item",subtitle:"mysubtitle",abstract_image:"test.png",abstract:"Occaecat eu ea id deserunt commodo ullamco quis anim exercitation ipsum dolore dolore. Incididunt ipsum laboris pariatur eu qui voluptate non ea Lorem eu.",body:"resource copy",attachments:"PDFs",type:"Narrative"},{title:"Litigation Item",subtitle:"mysubtitle",abstract_image:"test.png",abstract:"Occaecat eu ea id deserunt commodo ullamco quis anim exercitation ipsum dolore dolore. Incididunt ipsum laboris pariatur eu qui voluptate non ea Lorem eu.",body:"resource copy",attachments:"PDFs",type:"Litigation"},{title:"Fact Sheet Item",subtitle:"mysubtitle",abstract_image:"test.png",abstract:"Occaecat eu ea id deserunt commodo ullamco quis anim exercitation ipsum dolore dolore. Incididunt ipsum laboris pariatur eu qui voluptate non ea Lorem eu.",body:"resource copy",attachments:"PDFs",type:"Factsheet"}],"News & Events List":[],"News & Events Cards":[{title:"News Item",subtitle:"mysubtitle",abstract_image:"test.png",abstract:"Occaecat eu ea id deserunt commodo ullamco quis anim exercitation ipsum dolore dolore. Incididunt ipsum laboris pariatur eu qui voluptate non ea Lorem eu.",body:"resource copy",attachments:"PDFs",type:"News"},{title:"Event Item",subtitle:"mysubtitle",abstract_image:"test.png",abstract:"Occaecat eu ea id deserunt commodo ullamco quis anim exercitation ipsum dolore dolore. Incididunt ipsum laboris pariatur eu qui voluptate non ea Lorem eu.",body:"resource copy",attachments:"PDFs",type:"Event"}],"Resource Hub List":[{Type:"space",Background:"#C6CDF7"},{Section:"Resource Hub:",Type:"title",Foreground:"white",Background:"#C6CDF7"},{Section:"Our resource hub is designed for legal teams, advocates, and scholars interested in women facing extreme punishment. It includes information on (1) women’s pathways to incarceration, with particular focus on violence against women; (2) conditions of detention; (3) harmful gender stereotypes; and (4) intersectional discrimination. Additionally, we have compiled a library of resources on a variety of topics relating to the defense of women and gender minorities, which we can make available to advocates who sign up at the portal below. ",Type:"normal",Background:"#C6CDF7"},{Section:"MAILSIGNUPHERE",Type:"title",Background:"#C6CDF7"},{Type:"space",Background:"#C6CDF7"},{Type:"space",Background:"white"}],"Resource Hub Cards":[{title:"Website Item",subtitle:"mysubtitle",abstract_image:"test.png",abstract:"Occaecat eu ea id deserunt commodo ullamco quis anim exercitation ipsum dolore dolore. Incididunt ipsum laboris pariatur eu qui voluptate non ea Lorem eu.",body:"resource copy",attachments:"PDFs",type:"Website"},{title:"Organization Item",subtitle:"mysubtitle",abstract_image:"test.png",abstract:"Occaecat eu ea id deserunt commodo ullamco quis anim exercitation ipsum dolore dolore. Incididunt ipsum laboris pariatur eu qui voluptate non ea Lorem eu.",body:"resource copy",attachments:"PDFs",type:"Organization"},{title:"Report Item",subtitle:"mysubtitle",abstract_image:"test.png",abstract:"Occaecat eu ea id deserunt commodo ullamco quis anim exercitation ipsum dolore dolore. Incididunt ipsum laboris pariatur eu qui voluptate non ea Lorem eu.",body:"resource copy",attachments:"PDFs",type:"Report"}],"Women on Death Row List":[{Type:"space",Background:"#C6CDF7"},{Section:"Women on Death Row: ",Type:"title",Foreground:"white",Background:"#C6CDF7"},{Section:"Currently, there is a dearth of publicly accessible, reliable information on women sentenced to death around the world. We are committed to publishing data and research that increases knowledge about incarcerated women and their experiences. At the same time, we recognize that many incarcerated women do not wish to be publicly identified, and we believe in giving them control over how their stories are shared. For this reason, we do not share the names of people on death row or any information about their cases unless they or their legal representatives have given us express permission to do so. Where we receive that permission, we will share information on advocacy campaigns for women at risk of execution. We will also share anonymized data and studies that can assist in broadening awareness about the intersection of gender and the death penalty. ",Type:"normal",Background:"#C6CDF7"},{Type:"space",Background:"#C6CDF7"},{Type:"space",Background:"white"}],"Women on Death Row Cards":[{title:"Case Item",subtitle:"mysubtitle",abstract_image:"test.png",abstract:"Occaecat eu ea id deserunt commodo ullamco quis anim exercitation ipsum dolore dolore. Incididunt ipsum laboris pariatur eu qui voluptate non ea Lorem eu.",body:"resource copy",attachments:"PDFs",type:"Case"},{title:"Christie Michelle Scott",subtitle:" Alabama",type:"Case"},{title:"Patricia Blackmon",subtitle:" Alabama",type:"Case"},{title:"Tierra Capri Gobble",subtitle:" Alabama",type:"Case"},{title:"Heather Keaton",subtitle:" Alabama",type:"Case"},{title:"Lisa Graham",subtitle:" Alabama",type:"Case"},{title:"Wendi Andriano",subtitle:" Arizona",type:"Case"},{title:"Shawna Forde",subtitle:" Arizona",type:"Case"},{title:"Sammantha Allen",subtitle:" Arizona",type:"Case"},{title:"Michelle Michaud",subtitle:" California",type:"Case"},{title:"Valerie Martin",subtitle:" California",type:"Case"},{title:"Maureen McDermott",subtitle:" California",type:"Case"},{title:"Sandi Nieves",subtitle:" California",type:"Case"},{title:"Angelina Rodriguez",subtitle:" California",type:"Case"},{title:"Mary Samuels",subtitle:" California",type:"Case"},{title:"Manling Williams",subtitle:" California",type:"Case"},{title:"Cherie Rhoades",subtitle:" California",type:"Case"},{title:"Maria Alfaro",subtitle:" California",type:"Case"},{title:"Tanya Nelson",subtitle:" California",type:"Case"},{title:"Jessica Marie* Hann",subtitle:" California",type:"Case"},{title:"Belinda Magana",subtitle:" California",type:"Case"},{title:"Brooke Rottiers",subtitle:" California",type:"Case"},{title:"Cathy Sarinana",subtitle:" California",type:"Case"},{title:"Janeen Snyder",subtitle:" California",type:"Case"},{title:"Cynthia Coffman",subtitle:" California",type:"Case"},{title:"Kerry Dalton",subtitle:" California",type:"Case"},{title:"Susan Eubanks",subtitle:" California",type:"Case"},{title:"Veronica Gonzales",subtitle:" California",type:"Case"},{title:"Celeste Carrington",subtitle:" California",type:"Case"},{title:"Socorro Caro",subtitle:" California",type:"Case"},{title:"Lorraine Alison Hunter",subtitle:" California",type:"Case"},{title:"Margaret Allen",subtitle:" Florida",type:"Case"},{title:"Tiffany Cole",subtitle:" Florida",type:"Case"},{title:"Tina Brown",subtitle:" Florida",type:"Case"},{title:"Tiffany Moss",subtitle:" Georgia",type:"Case"},{title:"Robin Row",subtitle:" Idaho",type:"Case"},{title:"Virginia Caudill",subtitle:" Kentucky",type:"Case"},{title:"Antoinette Frank",subtitle:" Louisiana",type:"Case"},{title:"Lisa Chamberlin",subtitle:" Mississippi",type:"Case"},{title:"Blanche T. Moore",subtitle:" North Carolina",type:"Case"},{title:"Carlette Parker",subtitle:" North Carolina",type:"Case"},{title:"Donna Roberts",subtitle:" Ohio",type:"Case"},{title:"Brenda Andrew",subtitle:" Oklahoma",type:"Case"},{title:"Michelle Sue Tharp",subtitle:" Pennsylvania",type:"Case"},{title:"Christa Pike",subtitle:" Tennessee",type:"Case"},{title:"Melissa Lucio",subtitle:" Texas",type:"Case"},{title:"Darlie Routier",subtitle:" Texas",type:"Case"},{title:"Linda Carty",subtitle:" Texas",type:"Case"},{title:"Erica Sheppard",subtitle:" Texas",type:"Case"},{title:"Brittany Holberg",subtitle:" Texas",type:"Case"},{title:"Kimberly Cargill",subtitle:" Texas",type:"Case"}]};const de=S({height:[Number,String],maxHeight:[Number,String],maxWidth:[Number,String],minHeight:[Number,String],minWidth:[Number,String],width:[Number,String]},"dimension");function me(e){return{dimensionStyles:C(()=>({height:f(e.height),maxHeight:f(e.maxHeight),maxWidth:f(e.maxWidth),minHeight:f(e.minHeight),minWidth:f(e.minWidth),width:f(e.width)}))}}function he(e){return{aspectStyles:C(()=>{const t=Number(e.aspectRatio);return t?{paddingBottom:String(1/t*100)+"%"}:void 0})}}const U=S({aspectRatio:[String,Number],contentClass:String,inline:Boolean,...j(),...de()},"VResponsive"),W=M()({name:"VResponsive",props:U(),setup(e,t){let{slots:i}=t;const{aspectStyles:a}=he(e),{dimensionStyles:s}=me(e);return q(()=>{var r;return l("div",{class:["v-responsive",{"v-responsive--inline":e.inline},e.class],style:[s.value,e.style]},[l("div",{class:"v-responsive__sizer",style:a.value},null),(r=i.additional)==null?void 0:r.call(i),i.default&&l("div",{class:["v-responsive__content",e.contentClass]},[i.default()])])}),{}}}),ge=S({transition:{type:[Boolean,String,Object],default:"fade-transition",validator:e=>e!==!0}},"transition"),T=(e,t)=>{let{slots:i}=t;const{transition:a,disabled:s,...r}=e,{component:n=ee,...c}=typeof a=="object"?a:{};return Z(n,E(typeof a=="string"?{name:s?"":a}:c,r,{disabled:s}),i)};function pe(e,t){if(!D)return;const i=t.modifiers||{},a=t.value,{handler:s,options:r}=typeof a=="object"?a:{handler:a,options:{}},n=new IntersectionObserver(function(){var h;let c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],p=arguments.length>1?arguments[1]:void 0;const m=(h=e._observe)==null?void 0:h[t.instance.$.uid];if(!m)return;const u=c.some(b=>b.isIntersecting);s&&(!i.quiet||m.init)&&(!i.once||u||m.init)&&s(u,c,p),u&&i.once?G(e,t):m.init=!0},r);e._observe=Object(e._observe),e._observe[t.instance.$.uid]={init:!1,observer:n},n.observe(e)}function G(e,t){var a;const i=(a=e._observe)==null?void 0:a[t.instance.$.uid];i&&(i.observer.unobserve(e),delete e._observe[t.instance.$.uid])}const fe={mounted:pe,unmounted:G},ye=fe,be=S({alt:String,cover:Boolean,draggable:{type:[Boolean,String],default:void 0},eager:Boolean,gradient:String,lazySrc:String,options:{type:Object,default:()=>({root:void 0,rootMargin:void 0,threshold:void 0})},sizes:String,src:{type:[String,Object],default:""},crossorigin:String,referrerpolicy:String,srcset:String,position:String,...U(),...j(),...ge()},"VImg"),ke=M()({name:"VImg",directives:{intersect:ye},props:be(),emits:{loadstart:e=>!0,load:e=>!0,error:e=>!0},setup(e,t){let{emit:i,slots:a}=t;const s=N("VImg"),r=y(""),n=k(),c=y(e.eager?"loading":"idle"),p=y(),m=y(),u=C(()=>e.src&&typeof e.src=="object"?{src:e.src.src,srcset:e.srcset||e.src.srcset,lazySrc:e.lazySrc||e.src.lazySrc,aspect:Number(e.aspectRatio||e.src.aspect||0)}:{src:e.src,srcset:e.srcset,lazySrc:e.lazySrc,aspect:Number(e.aspectRatio||0)}),h=C(()=>u.value.aspect||p.value/m.value||0);w(()=>e.src,()=>{b(c.value!=="idle")}),w(h,(o,d)=>{!o&&d&&n.value&&v(n.value)}),te(()=>b());function b(o){if(!(e.eager&&o)&&!(D&&!o&&!e.eager)){if(c.value="loading",u.value.lazySrc){const d=new Image;d.src=u.value.lazySrc,v(d,null)}u.value.src&&ae(()=>{var d;i("loadstart",((d=n.value)==null?void 0:d.currentSrc)||u.value.src),setTimeout(()=>{var g;if(!s.isUnmounted)if((g=n.value)!=null&&g.complete){if(n.value.naturalWidth||A(),c.value==="error")return;h.value||v(n.value,null),c.value==="loading"&&x()}else h.value||v(n.value),_()})})}}function x(){var o;s.isUnmounted||(_(),v(n.value),c.value="loaded",i("load",((o=n.value)==null?void 0:o.currentSrc)||u.value.src))}function A(){var o;s.isUnmounted||(c.value="error",i("error",((o=n.value)==null?void 0:o.currentSrc)||u.value.src))}function _(){const o=n.value;o&&(r.value=o.currentSrc||o.src)}let B=-1;F(()=>{clearTimeout(B)});function v(o){let d=arguments.length>1&&arguments[1]!==void 0?arguments[1]:100;const g=()=>{if(clearTimeout(B),s.isUnmounted)return;const{naturalHeight:z,naturalWidth:R}=o;z||R?(p.value=R,m.value=z):!o.complete&&c.value==="loading"&&d!=null?B=window.setTimeout(g,d):(o.currentSrc.endsWith(".svg")||o.currentSrc.startsWith("data:image/svg+xml"))&&(p.value=1,m.value=1)};g()}const P=C(()=>({"v-img__img--cover":e.cover,"v-img__img--contain":!e.cover})),V=()=>{var g;if(!u.value.src||c.value==="idle")return null;const o=l("img",{class:["v-img__img",P.value],style:{objectPosition:e.position},src:u.value.src,srcset:u.value.srcset,alt:e.alt,crossorigin:e.crossorigin,referrerpolicy:e.referrerpolicy,draggable:e.draggable,sizes:e.sizes,ref:n,onLoad:x,onError:A},null),d=(g=a.sources)==null?void 0:g.call(a);return l(T,{transition:e.transition,appear:!0},{default:()=>[O(d?l("picture",{class:"v-img__picture"},[d,o]):o,[[oe,c.value==="loaded"]])]})},K=()=>l(T,{transition:e.transition},{default:()=>[u.value.lazySrc&&c.value!=="loaded"&&l("img",{class:["v-img__img","v-img__img--preload",P.value],style:{objectPosition:e.position},src:u.value.lazySrc,alt:e.alt,crossorigin:e.crossorigin,referrerpolicy:e.referrerpolicy,draggable:e.draggable},null)]}),J=()=>a.placeholder?l(T,{transition:e.transition,appear:!0},{default:()=>[(c.value==="loading"||c.value==="error"&&!a.error)&&l("div",{class:"v-img__placeholder"},[a.placeholder()])]}):null,Y=()=>a.error?l(T,{transition:e.transition,appear:!0},{default:()=>[c.value==="error"&&l("div",{class:"v-img__error"},[a.error()])]}):null,$=()=>e.gradient?l("div",{class:"v-img__gradient",style:{backgroundImage:`linear-gradient(${e.gradient})`}},null):null,I=y(!1);{const o=w(h,d=>{d&&(requestAnimationFrame(()=>{requestAnimationFrame(()=>{I.value=!0})}),o())})}return q(()=>{const o=W.filterProps(e);return O(l(W,E({class:["v-img",{"v-img--booting":!I.value},e.class],style:[{width:f(e.width==="auto"?p.value:e.width)},e.style]},o,{aspectRatio:h.value,"aria-label":e.alt,role:e.alt?"img":void 0}),{additional:()=>l(ne,null,[l(V,null,null),l(K,null,null),l($,null,null),l(J,null,null),l(Y,null,null)]),default:a.default}),[[ie("intersect"),{handler:b,options:e.options},null,{once:!0}]])}),{currentSrc:r,image:n,state:c,naturalWidth:p,naturalHeight:m}}});function Be(e,t){const i=k(),a=y(!1);if(D){const s=new IntersectionObserver(r=>{e==null||e(r,s),a.value=!!r.find(n=>n.isIntersecting)},t);F(()=>{s.disconnect()}),w(i,(r,n)=>{n&&(s.unobserve(n),a.value=!1),r&&s.observe(r)},{flush:"post"})}return{intersectionRef:i,isIntersecting:a}}export{T as M,ke as V,de as a,me as b,Be as c,Se as d,Ce as e,ge as f,we as g,H as h,j as m,Te as s,q as u};