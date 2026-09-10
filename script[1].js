const $=s=>document.querySelector(s),$$=s=>document.querySelectorAll(s);
const typed=$("#typed"),words=["Data Analyst","AI/ML Enthusiast","Python Developer","Data Science Learner"];let wi=0,ci=0,del=false;
function type(){const w=words[wi];typed.textContent=w.slice(0,ci);if(!del&&ci<w.length){ci++;setTimeout(type,80)}else if(!del){del=true;setTimeout(type,1100)}else if(ci>0){ci--;setTimeout(type,40)}else{del=false;wi=(wi+1)%words.length;setTimeout(type,250)}}type();
$("#menu").onclick=()=>$("#nav").classList.toggle("open");$$("nav a").forEach(a=>a.onclick=()=>$("#nav").classList.remove("open"));
$("#theme").onclick=()=>document.body.classList.toggle("light");
const obs=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add("visible");obs.unobserve(e.target)}}),{threshold:.12});$$(".reveal").forEach(x=>obs.observe(x));
function ui(){const m=document.documentElement.scrollHeight-innerHeight;$("#progress").style.width=(m?scrollY/m*100:0)+"%";$("#top").classList.toggle("show",scrollY>600)}addEventListener("scroll",ui,{passive:true});ui();
$("#top").onclick=()=>scrollTo({top:0,behavior:"smooth"});$("#year").textContent=new Date().getFullYear();
const glow=$(".cursor-glow");addEventListener("pointermove",e=>{glow.style.left=e.clientX+"px";glow.style.top=e.clientY+"px"},{passive:true});
