(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}})();const Au={click:"click_002.mp3",select:"select_002.mp3",ok:"confirmation_001.mp3",shoot:"laserSmall_000.mp3",cast:"forceField_000.mp3",slash:"knifeSlice.mp3",slam:"impactPunch_heavy_000.mp3",boom:"explosionCrunch_000.mp3",hurt:"impactSoft_heavy_000.mp3",gem:"handleCoins2.mp3",level:"jingles_STEEL01.mp3",die:"lowFrequency_explosion_000.mp3",clear:"jingles_STEEL02.mp3",banner:"impactBell_heavy_000.mp3",shrine:"confirmation_001.mp3",pickup:"drop_002.mp3"},Ru={click:.22,select:.2,ok:.26,shoot:.16,cast:.18,slash:.22,slam:.26,boom:.24,hurt:.28,gem:.12,level:.11,die:.3,clear:.32,banner:.2,shrine:.22,pickup:.2},Al="avalon-survival-volume";class Cu{unlocked=!1;last=new Map;voices=new Map;base="./";master=.55;constructor(){try{const e=localStorage.getItem(Al);e!=null&&(this.master=Math.max(0,Math.min(1,Number(e))))}catch{}}unlock(){this.unlocked=!0}setMaster(e){this.master=Math.max(0,Math.min(1,e));try{localStorage.setItem(Al,String(this.master))}catch{}}play(e,t){if(!this.unlocked||this.master<=.001)return;const n=performance.now(),i=this.last.get(e)??0,s=e==="shoot"||e==="gem"||e==="hurt"?80:50;if(n-i<s)return;this.last.set(e,n);let a=this.voices.get(e);a||(a=[],this.voices.set(e,a));let o=a.find(c=>c.paused||c.ended);o||(o=a.length<3?new Audio(`${this.base}audio/sfx/${Au[e]}`):a[0],a.includes(o)||a.push(o)),o.volume=Math.max(0,Math.min(1,(t??Ru[e])*this.master));try{o.currentTime=0}catch{}o.play().catch(()=>{})}}const zi=["silva","luna","sera","rose","seoyun"],Rl=600,Ho=300,Lu=120,Pu=16,Iu=7.2,Du=4.6,As={silva:{id:"silva",name:"실바",role:"궁수",model:"archer_meshy",weapon:"바람 화살",blurb:"가장 가까운 적에게 화살을 꽂는다. 성장하면 화살이 갈라지고 관통한다.",weaponUp:"화살 수, 관통, 피해가 함께 오른다.",color:"#e4c56a"},luna:{id:"luna",name:"루나",role:"마법사",model:"mage_meshy",weapon:"별똥 마법",blurb:"무작위 적의 발밑에 마력 탄을 떨어뜨린다. 범위가 점점 넓어진다.",weaponUp:"탄 수, 폭발 범위, 피해가 커진다.",color:"#8eb7ff"},sera:{id:"sera",name:"세라",role:"전사",model:"warrior_meshy",weapon:"회전 참격",blurb:"몸 주변을 베는 짧은 참격. 세 번째 베기는 크게 회전한다.",weaponUp:"베기 범위와 피해가 커지고, 회전 베기가 더 자주 나온다.",color:"#e07a6a"},rose:{id:"rose",name:"로즈",role:"총사",model:"rose_rifle_meshy",weapon:"장미 소총",blurb:"바라보는 방향으로 빠르게 쏜다. 맞은 적은 뒤로 밀린다.",weaponUp:"연사, 탄 수, 밀쳐내기가 강해진다.",color:"#f0a0b4"},seoyun:{id:"seoyun",name:"서윤",role:"격투가",model:"seoyun_meshy",weapon:"지진권",blurb:"땅을 내리쳐 충격파로 주변을 밀친다.",weaponUp:"충격파가 넓어지고, 더 세게, 더 멀리 민다.",color:"#f2c9a0"}},Cl=[{id:"vital",name:"단련",text:"최대 체력 +12%"},{id:"haste",name:"경공",text:"이동 속도 +7%. 전정기와 합쳐지면 진화한다"},{id:"leech",name:"흡혈",text:"처치할 때마다 체력을 회복한다. 독무와 합쳐지면 진화한다"},{id:"thorns",name:"가시갑",text:"맞으면 주변 적에게 피해를 준다"},{id:"scholar",name:"학구",text:"경험치 +10%"},{id:"crit",name:"급소",text:"치명타 확률 +5%"},{id:"regen",name:"재생",text:"초당 체력이 조금씩 오른다"},{id:"guard",name:"철벽",text:"받는 피해 -5%"}],zc=[{id:"hunter-knife",name:"사냥꾼의 단검",slot:"weapon",rarity:"common",blurb:"공격 +8%",mod:{atk:.08},source:"elite"},{id:"iron-edge",name:"무딘 강철검",slot:"weapon",rarity:"common",blurb:"공격 +10%",mod:{atk:.1},source:"elite"},{id:"black-blade",name:"흑철 대검",slot:"weapon",rarity:"rare",blurb:"공격 +16%",mod:{atk:.16},source:"elite"},{id:"lich-scepter",name:"리치의 홀",slot:"weapon",rarity:"epic",blurb:"공격 +22%, 공격 속도 +8%",mod:{atk:.22,rate:.08},source:"boss"},{id:"leather",name:"가죽 흉갑",slot:"armor",rarity:"common",blurb:"체력 +10%",mod:{hp:.1},source:"elite"},{id:"knight-plate",name:"기사 흉갑",slot:"armor",rarity:"rare",blurb:"체력 +18%, 피해 감소 +4%",mod:{hp:.18,dr:.04},source:"elite"},{id:"bone-mail",name:"뼈갑옷",slot:"armor",rarity:"rare",blurb:"체력 +14%, 가시",mod:{hp:.14,thorns:.25},source:"elite"},{id:"lich-robe",name:"군주의 수의",slot:"armor",rarity:"epic",blurb:"체력 +24%, 재생",mod:{hp:.24,regen:.7},source:"boss"},{id:"magnet-charm",name:"자석 펜던트",slot:"accessory",rarity:"common",blurb:"획득 범위 +20%",mod:{pickup:.2},source:"elite"},{id:"wind-charm",name:"바람 부적",slot:"accessory",rarity:"common",blurb:"이동 속도 +8%",mod:{spd:.08},source:"elite"},{id:"scholar-lens",name:"학자의 렌즈",slot:"accessory",rarity:"rare",blurb:"경험치 +15%",mod:{xp:.15},source:"elite"},{id:"lich-crown",name:"리치의 왕관",slot:"accessory",rarity:"epic",blurb:"공격 +10%, 체력 +10%, 치명타 +6%",mod:{atk:.1,hp:.1,crit:.06},source:"boss"}],Bi=Object.fromEntries(zc.map(r=>[r.id,r])),Nu={weapon:"고유 무기",survival:"생존",utility:"유틸"};function Le(r,e,t,n,i,s){return{id:`${r}-${e}-${t}`,hero:r,branch:e,index:t,name:n,text:i,mod:s}}const Bc=[Le("silva","weapon",0,"송곳화살","관통 +1",{pierce:1}),Le("silva","weapon",1,"갈래 사격","화살 +1",{arrows:1}),Le("silva","weapon",2,"팽팽한 시위","공격 속도 +12%",{rate:.12}),Le("silva","weapon",3,"급소 조준","치명타 +8%",{crit:.08}),Le("silva","survival",0,"가죽 갑옷","체력 +10%",{hp:.1}),Le("silva","survival",1,"들숨","재생 +0.45",{regen:.45}),Le("silva","survival",2,"철벽","피해 감소 +6%",{dr:.06}),Le("silva","survival",3,"여분의 심장","체력 +12%",{hp:.12}),Le("silva","utility",0,"가벼운 발","이동 속도 +8%",{spd:.08}),Le("silva","utility",1,"추적자의 눈","경험치 +10%",{xp:.1}),Le("silva","utility",2,"넓은 손","획득 범위 +18%",{pickup:.18}),Le("silva","utility",3,"전리품 본능","공격 +6%",{atk:.06}),Le("luna","weapon",0,"이중 시전","마력 탄 +1",{bolts:1}),Le("luna","weapon",1,"넓은 폭뢰","범위 +14%",{radius:.14}),Le("luna","weapon",2,"빠른 주문","공격 속도 +12%",{rate:.12}),Le("luna","weapon",3,"과충전","공격 +10%",{atk:.1}),Le("luna","survival",0,"마력 보호막","체력 +10%",{hp:.1}),Le("luna","survival",1,"순환","재생 +0.5",{regen:.5}),Le("luna","survival",2,"결계","피해 감소 +6%",{dr:.06}),Le("luna","survival",3,"생명의 고리","체력 +10%, 흡혈",{hp:.1,lifesteal:.5}),Le("luna","utility",0,"부유","이동 속도 +7%",{spd:.07}),Le("luna","utility",1,"연구","경험치 +12%",{xp:.12}),Le("luna","utility",2,"인력","획득 범위 +20%",{pickup:.2}),Le("luna","utility",3,"집중","치명타 +6%",{crit:.06}),Le("sera","weapon",0,"넓은 검격","범위 +12%",{radius:.12}),Le("sera","weapon",1,"무거운 칼날","공격 +10%",{atk:.1}),Le("sera","weapon",2,"연속 베기","공격 속도 +10%",{rate:.1}),Le("sera","weapon",3,"흡혈검","처치 회복이 늘어난다",{lifesteal:.9}),Le("sera","survival",0,"사슬 갑옷","체력 +12%",{hp:.12}),Le("sera","survival",1,"가시 어깨","가시 피해",{thorns:.3}),Le("sera","survival",2,"방패 태세","피해 감소 +8%",{dr:.08}),Le("sera","survival",3,"불굴","체력 +10%",{hp:.1}),Le("sera","utility",0,"돌진","이동 속도 +8%",{spd:.08}),Le("sera","utility",1,"전장의 기억","경험치 +10%",{xp:.1}),Le("sera","utility",2,"시선","획득 범위 +15%",{pickup:.15}),Le("sera","utility",3,"분노","공격 +6%",{atk:.06}),Le("rose","weapon",0,"빠른 손가락","공격 속도 +14%",{rate:.14}),Le("rose","weapon",1,"강한 반동","밀쳐내기 +18%",{knock:.18}),Le("rose","weapon",2,"이중 총열","탄 +1",{pellets:1}),Le("rose","weapon",3,"정밀 사격","치명타 +8%",{crit:.08}),Le("rose","survival",0,"방탄 조끼","체력 +10%",{hp:.1}),Le("rose","survival",1,"응급 처치","재생 +0.4",{regen:.4}),Le("rose","survival",2,"철판","피해 감소 +5%",{dr:.05}),Le("rose","survival",3,"근성","체력 +10%",{hp:.1}),Le("rose","utility",0,"탄약 가방","공격 +8%",{atk:.08}),Le("rose","utility",1,"전술 이동","이동 속도 +9%",{spd:.09}),Le("rose","utility",2,"수집가","경험치 +10%, 획득 범위",{xp:.1,pickup:.1}),Le("rose","utility",3,"눈썰미","치명타 +5%",{crit:.05}),Le("seoyun","weapon",0,"넓은 파동","범위 +14%",{radius:.14}),Le("seoyun","weapon",1,"밀어내기","밀쳐내기 +20%",{knock:.2}),Le("seoyun","weapon",2,"연타","공격 속도 +12%",{rate:.12}),Le("seoyun","weapon",3,"파괴권","공격 +10%",{atk:.1}),Le("seoyun","survival",0,"단련된 몸","체력 +12%",{hp:.12}),Le("seoyun","survival",1,"호흡","재생 +0.5",{regen:.5}),Le("seoyun","survival",2,"가드","피해 감소 +7%",{dr:.07}),Le("seoyun","survival",3,"역공","가시 피해",{thorns:.35}),Le("seoyun","utility",0,"보법","이동 속도 +10%",{spd:.1}),Le("seoyun","utility",1,"수련","경험치 +10%",{xp:.1}),Le("seoyun","utility",2,"감각","획득 범위 +16%",{pickup:.16}),Le("seoyun","utility",3,"기세","공격 +6%",{atk:.06})],ku=Object.fromEntries(Bc.map(r=>[r.id,r]));function Fu(){return{hp:0,atk:0,spd:0,pickup:0,xp:0,crit:0,regen:0,thorns:0,dr:0,lifesteal:0,arrows:0,pierce:0,bolts:0,radius:0,rate:0,knock:0,pellets:0}}function Ll(r,e){for(const t of Object.keys(e))r[t]+=e[t]??0}function Pl(r){return 50+r*40}function Fs(r){let e=1,t=Math.max(0,r),n=0;for(;n++<80;){const i=Pl(e);if(t<i)return{level:e,into:t,next:i};t-=i,e+=1}return{level:e,into:t,next:Pl(e)}}function md(r,e){const t=Fs(r.heroes[e].xp).level,n=Object.keys(r.heroes[e].skills).length;return Math.max(0,t-1-n)}function gd(r,e){const t=Fu(),n=Fs(r.heroes[e].xp).level;t.hp+=.04*(n-1),t.atk+=.03*(n-1);const i=r.heroes[e].equip;for(const a of Object.values(i)){if(!a)continue;const o=r.items.find(l=>l.uid===a),c=o&&Bi[o.defId];c&&Ll(t,c.mod)}const s=r.heroes[e].skills;for(const a of Bc)a.hero===e&&s[a.id]&&Ll(t,a.mod);return t.dr=Math.min(.45,t.dr),t.crit=Math.min(.6,t.crit),t}function Uu(r,e,t){return Math.floor(Math.max(0,r)*1.15+e*2+(t?280:0))}function Gc(r){const e=Math.max(0,Math.floor(r)),t=Math.floor(e/60),n=e%60;return`${t}:${n.toString().padStart(2,"0")}`}function Ou(r){return r==="epic"?"서사":r==="rare"?"희귀":"흔함"}function zu(r){return r==="weapon"?"무기":r==="armor"?"갑옷":"장신구"}const Vo=[{id:"tesla",name:"전정기",blurb:"몸 주위를 도는 번개가 가까운 적을 친다",icon:"⚡",color:"#9ad7ff",evolveWith:"haste",evolveName:"뇌운 궤도",evolveText:"구슬이 늘고, 맞은 적 옆까지 튄다"},{id:"pyre",name:"화륜",blurb:"발 밑에 불고리가 주기적으로 터진다",icon:"☀",color:"#ff7a3a",evolveWith:"thorns",evolveName:"재앙의 고리",evolveText:"고리가 넓어지고 더 세게 민다"},{id:"frost",name:"서리 파편",blurb:"전방으로 얼음 파편을 뿌린다",icon:"❄",color:"#d7f4ff",evolveWith:"guard",evolveName:"영구동토",evolveText:"파편이 적을 관통한다"},{id:"cross",name:"성십자",blurb:"나갔다가 되돌아오는 십자가",icon:"✚",color:"#ffe7a0",evolveWith:"crit",evolveName:"심판의 십자",evolveText:"더 자주, 더 멀리 왕복한다"},{id:"miasma",name:"독무",blurb:"주변에 독안개를 깔아 적을 깎는다",icon:"☠",color:"#8dff9a",evolveWith:"leech",evolveName:"역병의 숨",evolveText:"안개가 퍼질 때마다 조금 회복한다"},{id:"arc",name:"연쇄 번개",blurb:"가까운 적에서 적으로 번개가 튄다",icon:"✺",color:"#d7b0ff",evolveWith:"scholar",evolveName:"천둥 사슬",evolveText:"도약이 두 번 더 이어진다"}],ls=Object.fromEntries(Vo.map(r=>[r.id,r])),Wa=3;function Bu(r){let e=r>>>0;return function(){e|=0,e=e+1831565813|0;let n=Math.imul(e^e>>>15,1|e);return n=n+Math.imul(n^n>>>7,61|n)^n,((n^n>>>14)>>>0)/4294967296}}const bd=[[{x:-70,z:-8},{x:-30,z:6},{x:-4,z:1},{x:24,z:-10},{x:58,z:4},{x:86,z:-2}],[{x:-4,z:78},{x:2,z:34},{x:6,z:4},{x:12,z:-28},{x:2,z:-72}]];function Gu(r,e){let t=1/0;for(const n of bd)for(let i=0;i<n.length-1;i++){const s=n[i],a=n[i+1],o=a.x-s.x,c=a.z-s.z,l=o*o+c*c||1;let h=((r-s.x)*o+(e-s.z)*c)/l;h=Math.min(1,Math.max(0,h));const d=Math.hypot(r-(s.x+o*h),e-(s.z+c*h));d<t&&(t=d)}return t}function hr(r,e){const i=Gu(r,e);if(i>=4.8)return 0;if(i<=2.4)return 1;const s=(i-2.4)/(4.8-2.4);return 1-s*s*(3-2*s)}function Il(r,e,t){const n=Math.imul(r|0,374761393)^Math.imul(e|0,668265263)^Math.imul(t|0,1274126177);return(n^n>>>13)>>>0}const Dl=new Map;function Hc(r){const e=Dl.get(r);if(e)return e;const t=[],n=16;for(let i=-88;i<=88;i+=n)for(let s=-88;s<=88;s+=n){const a=Il(s,i,r),o=(a%7-3)*.7,c=((a>>>4)%7-3)*.7,l=s+o,h=i+c,d=Math.hypot(l,h)<8,u=hr(l,h)>.4;if(!d&&!u&&a%5===0)for(let f=0;f<6;f++){const g=f/6*Math.PI*2+a%5*.1;t.push({x:l+Math.cos(g)*2.5,z:h+Math.sin(g)*2.5,kind:"ruin"})}else if(!d&&!u){const f=3+a%5;for(let p=0;p<f;p++){const m=a%11*.2+p/f*Math.PI*2,b=1.1+p%3*.95,w=l+Math.cos(m)*b,x=h+Math.sin(m)*b;hr(w,x)>.45||Math.hypot(w,x)<7.5||t.push({x:w,z:x,kind:"tree"})}const g=l+3.4,_=h-1.2;hr(g,_)<.35&&Math.hypot(g,_)>8&&(t.push({x:g,z:_,kind:"rock"}),a%2===0&&t.push({x:g+1.15,z:_+.7,kind:"rock"}))}if(!u&&Math.hypot(l,h)>6)for(let f=0;f<4;f++){const g=f*1.7+a%5;t.push({x:l+Math.cos(g)*(.6+f*.28),z:h+2.2+Math.sin(g)*.7,kind:"flower"})}}for(let i=-92;i<=92;i+=5)for(let s=-92;s<=92;s+=5){if(hr(s,i)>.5)continue;const a=Il(s+3,i-2,r);if(a%3===0)continue;const o=a%5-2,c=(a>>>3)%5-2;t.push({x:s+o*.35,z:i+c*.35,kind:"tuft"})}return Dl.set(r,t),t}const Nl=new Map;function Hu(r){const e=Nl.get(r);if(e)return e;const t=[];for(const n of Hc(r))n.kind==="tree"?t.push({x:n.x,z:n.z,r:.62,kind:"tree"}):n.kind==="rock"?t.push({x:n.x,z:n.z,r:.85,kind:"rock"}):n.kind==="ruin"&&t.push({x:n.x,z:n.z,r:.38,kind:"ruin"});return Nl.set(r,t),t}const Vu=34;function qa(r,e,t,n=2){const i=(n+1)*Vu;return Hu(t).filter(s=>Math.abs(s.x-r)<i&&Math.abs(s.z-e)<i)}function dr(r,e,t,n){for(let i=0;i<2;i++)for(const s of n){const a=r-s.x,o=e-s.z,c=t+s.r,l=a*a+o*o;if(l>=c*c)continue;if(l<1e-8){r+=c;continue}const h=Math.sqrt(l),d=c-h;r+=a/h*d,e+=o/h*d}return{x:r,z:e}}function Xa(r,e,t,n,i,s){const a=Math.hypot(t,n);if(a<1e-5)return dr(r,e,i,s);const o=dr(r+t,e+n,i,s),c=Math.hypot(o.x-r,o.z-e);if(c>=a*.65)return o;const l=dr(r+t,e,i,s),h=dr(r,e+n,i,s),d=Math.hypot(l.x-r,l.z-e),u=Math.hypot(h.x-r,h.z-e);return d>=u&&d>=c?l:u>=c?h:o}const Wu=new Set(["#","T","R","C","W","G","D","B"]);function Vc(r,e,t){return Array.from({length:e},()=>Array.from({length:r},()=>t))}function Wc(r,e,t,n,i,s="."){for(let a=e;a<=t;a++)for(let o=n;o<=i;o++)r[a][o]=s}function Wo(r,e,t,n){r[e][t]="G",r[e-1][t]="G",r[e][t+n]=".",r[e-1][t+n]=".",r[e+1][t+n]=".",r[e][t+n*2]="S"}const ns=Vc(15,64,"T");Wc(ns,1,62,3,11);Wc(ns,1,1,3,11,"E");ns[62][7]="@";for(const r of[12,28,44,56])Wo(ns,r,2,-1),Wo(ns,r,12,1);for(const r of[50,34,16])for(let e=3;e<=11;e++)ns[r][e]="B";const $n=Vc(15,66,"#");for(let r=1;r<=64;r++){for(let e=0;e<=2;e++)$n[r][e]="W";for(let e=3;e<=9;e++)$n[r][e]="."}Wc($n,1,1,4,9,"E");$n[64][6]="@";for(const r of[14,32,50])Wo($n,r,10,1),$n[r][3]="G",$n[r][2]=".",$n[r][1]="S";for(const r of[54,36,18])for(let e=4;e<=9;e++)$n[r][e]="B";const es=Vc(11,36,"#");function qc(r,e){for(let t=r;t<=e;t++)for(let n=1;n<=9;n++)es[t][n]="."}qc(25,33);qc(13,21);qc(1,9);for(const r of[24,12])for(let e=4;e<=6;e++)es[r][e]="D",es[r+1][e]=".",es[r-1][e]=".",es[r-2][e]=".";es[32][5]="@";const xd={id:"field",name:"열린 벌판",difficulty:"easy",blurb:"숲 사이 흙길을 끝까지 달려 성소를 깨운다.",tile:4,rows:ns.map(r=>r.join(""))},qu={id:"ford",name:"여울 협곡",difficulty:"normal",blurb:"강과 절벽 사이 길을 끝까지 가고, 옆골목의 성소를 연다.",tile:4,rows:$n.map(r=>r.join(""))},Xu={id:"boss",name:"리치의 전당",difficulty:"hard",blurb:"세 개의 방. 처치, 생존, 그리고 리치와의 결투.",tile:4,rows:es.map(r=>r.join(""))},qo=[xd,qu,Xu];function Xo(r){return qo.find(e=>e.id===r)??xd}function Ps(r){return Ku(Xo(r))}const xa=12;function Ku(r){if(!r.rows.length)return null;const e=r.rows[0].length;if(r.rows.some(x=>x.length!==e))throw new Error(`ragged map ${r.id}`);const t=r.rows.length,n=new Uint8Array(e*t),i=new Uint8Array(e*t),s=[],a=[];let o={x:0,z:0},c=!1;for(let x=0;x<t;x++)for(let y=0;y<e;y++){const T=r.rows[x][y],C=x*e+y;i[C]=T.charCodeAt(0);const v=Wu.has(T);n[C]=v?0:1;const R=_a(r.tile,e,t,y,x);if(T==="@"&&(o=R,c=!0),T==="S"&&a.push(R),!v)continue;const D=T==="W"?"water":T==="T"?"tree":T==="C"?"ruin":"rock";s.push({x:R.x,z:R.z,r:r.tile*.56,kind:D})}if(!c)throw new Error(`map ${r.id} has no start`);const l=new Map;for(const x of s){const y=_d(x.x,x.z),T=l.get(y);T?T.push(x):l.set(y,[x])}const h=ju(r.tile,e,t,o.x,o.z).r;let d=e,u=0;for(let x=0;x<e;x++){const y=r.rows[h][x];(y==="."||y==="@"||y==="E")&&(d=Math.min(d,x),u=Math.max(u,x))}u<d&&(d=0,u=e-1);let f=0,g=0,_=0;const p=[],m=[];for(let x=0;x<t;x++)for(let y=0;y<e;y++){const T=r.rows[x][y];if(T==="E"){const C=_a(r.tile,e,t,y,x);f+=C.x,g+=C.z,_+=1}T==="D"&&!p.includes(x)&&p.push(x),T==="B"&&!m.includes(x)&&m.push(x)}_?(f/=_,g/=_):(f=o.x,g=o.z),p.sort((x,y)=>y-x),m.sort((x,y)=>y-x);const b=[];let w=-1;for(let x=0;x<t;x++){let y=0;for(let T=0;T<e;T++)n[x*e+T]&&(y+=1);y>=4&&w<0&&(w=x),y<4&&w>=0&&(b.push({r0:w,r1:x-1}),w=-1)}return w>=0&&b.push({r0:w,r1:t-1}),b.sort((x,y)=>y.r0-x.r0),{def:r,cols:e,rows:t,tile:r.tile,walk:n,kind:i,blocks:s,bins:l,start:o,shrines:a,roadL:d,roadR:u,goal:{x:f,z:g},doorRows:p,barRows:m,rooms:b}}function ju(r,e,t,n,i){return{c:Math.floor((n+e*r/2)/r),r:Math.floor((i+t*r/2)/r)}}function Ka(r,e,t){const n=e.charCodeAt(0);for(let i=0;i<r.rows;i++)if(!(t!==void 0&&i!==t))for(let s=0;s<r.cols;s++){const a=i*r.cols+s;r.kind[a]===n&&(r.walk[a]=1)}r.blocks=r.blocks.filter(i=>{const{c:s,r:a}=Ln(r,i.x,i.z);return!is(r,s,a)||r.kind[a*r.cols+s]!==n||t!==void 0&&a!==t}),r.bins.clear();for(const i of r.blocks){const s=_d(i.x,i.z),a=r.bins.get(s);a?a.push(i):r.bins.set(s,[i])}}function _a(r,e,t,n,i){return{x:(n+.5)*r-e*r/2,z:(i+.5)*r-t*r/2}}function _d(r,e){const t=Math.floor(r/xa),n=Math.floor(e/xa);return(t+512)*4096+(n+512)}function Ln(r,e,t){const n=Math.floor((e+r.cols*r.tile/2)/r.tile),i=Math.floor((t+r.rows*r.tile/2)/r.tile);return{c:n,r:i}}function is(r,e,t){return e>=0&&t>=0&&e<r.cols&&t<r.rows}function ur(r,e,t){const{c:n,r:i}=Ln(r,e,t);return is(r,n,i)?r.walk[i*r.cols+n]===1:!1}function ai(r,e,t){if(ur(r,e,t))return{x:e,z:t};const{c:n,r:i}=Ln(r,e,t);let s=1/0,a=e,o=t;for(let c=-4;c<=4;c++)for(let l=-4;l<=4;l++){const h=n+l,d=i+c;if(!is(r,h,d)||r.walk[d*r.cols+h]!==1)continue;const u=_a(r.tile,r.cols,r.rows,h,d),f=(u.x-e)*(u.x-e)+(u.z-t)*(u.z-t);f<s&&(s=f,a=u.x,o=u.z)}return{x:a,z:o}}function kl(r,e,t){const n=[],i=Math.floor(e/xa),s=Math.floor(t/xa);for(let a=-1;a<=1;a++)for(let o=-1;o<=1;o++){const c=r.bins.get((i+o+512)*4096+(s+a+512));c&&n.push(...c)}return n}const vd=[[1,0],[-1,0],[0,1],[0,-1]];function hs(r,e,t){const{cols:n,rows:i,walk:s}=r,a=new Int16Array(n*i);a.fill(-1);const{c:o,r:c}=Ln(r,e,t);if(!is(r,o,c)||s[c*n+o]!==1)return a;const l=[c*n+o];a[c*n+o]=0;for(let h=0;h<l.length;h++){const d=l[h],u=Math.floor(d/n),f=d-u*n,g=a[d];for(const[_,p]of vd){const m=f+_,b=u+p;if(!is(r,m,b))continue;const w=b*n+m;s[w]!==1||a[w]!==-1||(a[w]=g+1,l.push(w))}}return a}function Yu(r,e,t,n,i,s){const{c:a,r:o}=Ln(r,t,n);if(!is(r,a,o))return{x:0,z:0};const c=e[o*r.cols+a]??-1;if(c<0)return{x:0,z:0};if(c===0){const p=i-t,m=s-n,b=Math.hypot(p,m)||1;return{x:p/b,z:m/b}}let l=c,h=a,d=o;for(const[p,m]of vd){const b=a+p,w=o+m;if(!is(r,b,w))continue;const x=e[w*r.cols+b]??-1;x>=0&&x<l&&(l=x,h=b,d=w)}const u=_a(r.tile,r.cols,r.rows,h,d),f=u.x-t,g=u.z-n,_=Math.hypot(f,g)||1;return{x:f/_,z:g/_}}const Xc={slime:{hp:16,speed:2.2,dmg:6,r:.55,xp:2,hover:0},wolf:{hp:28,speed:3.45,dmg:8,r:.62,xp:3,hover:0},goblin:{hp:44,speed:3.05,dmg:9,r:.52,xp:4,hover:0},goblin_archer:{hp:36,speed:2.45,dmg:7,r:.5,xp:5,hover:0},knight:{hp:70,speed:2.2,dmg:14,r:.68,xp:6,hover:0},skel_minion:{hp:54,speed:2.7,dmg:13,r:.5,xp:5,hover:0},skel_rogue:{hp:46,speed:3.35,dmg:12,r:.48,xp:5,hover:0},skel_warrior:{hp:78,speed:2.4,dmg:15,r:.58,xp:6,hover:0},skel_mage:{hp:42,speed:2.4,dmg:11,r:.5,xp:5,hover:0},wraith:{hp:70,speed:2.9,dmg:15,r:.58,xp:7,hover:.45},wisp:{hp:36,speed:3.6,dmg:11,r:.42,xp:5,hover:.7},golem:{hp:160,speed:1.55,dmg:16,r:.9,xp:11,hover:0},drake:{hp:100,speed:3.1,dmg:13,r:.74,xp:9,hover:0},elite:{hp:2400,speed:2.55,dmg:26,r:.95,xp:50,hover:0},lich:{hp:6800,speed:2.15,dmg:32,r:1.2,xp:120,hover:0}};function Ir(r,e,t){return r+(e-r)*Math.max(0,Math.min(1,t))}function Ju(r){return r>=Rl?{phase:"리치의 밤",hint:"리치 군주를 쓰러뜨리면 밤이 끝난다",kinds:["wisp","wraith","skel_mage"],every:.85,batch:2,boss:!0}:r>=360?{phase:"심연의 안개",hint:`리치까지 ${Math.ceil(Rl-r)}초`,kinds:["wolf","wisp","wraith","golem","drake"],every:Ir(.52,.36,(r-360)/240),batch:2,boss:!1}:r>=180?{phase:"무너진 성채",hint:r<300?`정예까지 ${Math.ceil(300-r)}초`:"심연이 가까워진다",kinds:r<300?["wolf","wolf","goblin","goblin","goblin_archer","skel_minion","skel_mage"]:["goblin","goblin_archer","knight","skel_minion","skel_mage","skel_warrior"],every:Ir(.4,.28,(r-180)/180),batch:3,boss:!1}:{phase:"숲의 가장자리",hint:`성채까지 ${Math.ceil(180-r)}초`,kinds:["slime","slime","wolf","wolf"],every:r<90?Ir(1.05,.48,r/90):Ir(.34,.2,Math.min(1,(r-90)/90)),batch:r<70?2:3,boss:!1}}function $u(r,e){const t=Xc[r].hp;return r==="lich"||r==="elite"?t:t*(1+Math.max(0,e)/200)}function Zu(r,e){const t=Xc[r].dmg;return r==="lich"||r==="elite"?t:t*(1+Math.max(0,e)/700)}const Ko={goblin_archer:{range:14,cd:2.35,speed:6.1,windup:.55,style:"arrow",hold:6.4},skel_mage:{range:13.5,cd:2.55,speed:5.6,windup:.62,style:"bolt",hold:7},wraith:{range:12.5,cd:2.2,speed:5.4,windup:.5,style:"bolt",hold:5.6},drake:{range:15,cd:2.75,speed:6.4,windup:.7,style:"fire",hold:6.4}},oi=4,Qu=Ho,ef=140,tf=200,nf=28,ci=.62,va={heal:"#7dffb0",might:"#ffb15a",haste:"#8fd0ff",xp:"#d7b0ff"};function Dr(r,e,t,n,i){const s=Xc[r],a=Math.round($u(r,t));return{alive:!0,id:e,kind:r,x:n,z:i,hp:a,maxHp:a,r:s.r,speed:s.speed*(1+t/900),dmg:Zu(r,t),touch:0,kbx:0,kbz:0,phase:Math.random()*6,flash:0,xp:s.xp,hover:s.hover,cast:r==="elite"?1.2:r==="lich"?1.8:Ko[r]?.9:99,pose:r==="lich"?"Scream":"Idle",poseT:r==="lich"?1.25:0,poseLock:r==="lich"?"Scream":"",windup:0,aimX:n,aimZ:i}}function ja(r){return r<=4?16+r*5:Math.round(24+r*12)}function sf(r){const e=Bu(r.seed||1),t=r.mods,n={};for(const S of Cl)n[S.id]=0;const i={x:0,z:0,hp:0,maxHp:0,facing:Math.PI,moving:!1,iframes:1.6,level:1,xp:0,xpNeed:ja(1),weaponLevel:1,attack:null,attackT:0,shotSeq:0,swing:0},s={t:0,status:"play",hero:r.hero,player:i,enemies:[],elite:null,boss:null,shots:[],gems:[],zones:[],offer:null,kills:0,alive:0,loot:[],passives:n,banner:"밤이 시작된다",bannerT:2.4,seed:r.seed||1,shrines:[],pickups:[],atkBuffT:0,magnetBuffT:0,freezeT:0,guardT:0,hasteT:0,rageT:0,luckT:0,enemyShots:0,skills:[],gold:0,rerolls:1,bossPhase:1,mapId:Xo(r.mapId??"field").id,stage:Xo(r.mapId??"field").id==="boss"?"boss":"lane",progress:0,gatesOpen:!1,portalOpen:!1,doorsOpen:0,doorLift:[0,0],shrineTotal:0,shrineDone:0,bossRoom:1,roomKills:0,roomNeed:36,roomLeft:45,roomDur:45,stageNote:"",laneBars:0,laneMark:0,laneSince:0},a=[!1,!1];let o=Ps(s.mapId);if(o){i.x=o.start.x,i.z=o.start.z;const S=["heal","might","haste","xp"];o.shrines.forEach((I,A)=>{s.shrines.push({alive:!0,x:I.x,z:I.z,channel:0,used:!1,blessing:S[A%S.length]})}),s.shrineTotal=s.shrines.length,s.stageNote=s.stage==="boss"?`처치 0/${s.roomNeed}`:"도로 0%"}let c=o?hs(o,i.x,i.z):null;const l=[];let h=1,d=!1,u=0,f=20,g=14;const _=new Map,p=[],m=[];function b(S){l.length>48&&l.shift(),l.push(S)}function w(){const S=n;return{maxHp:Math.round(Lu*(1+t.hp)*(1+.12*S.vital)+8*(i.level-1)),atk:Pu*(1+t.atk)*(1+.12*(i.weaponLevel-1))*(1+.035*(i.level-1))*(s.atkBuffT>0?1.4:1),spd:Iu*(1+t.spd)*(1+.07*S.haste)*(s.hasteT>0?1.28:1),pickup:Du*(1+t.pickup)+(s.magnetBuffT>0?9:0),xpMul:(1+t.xp)*(1+.1*S.scholar)*(s.luckT>0?1.5:1),crit:Math.min(.65,t.crit+.05*S.crit),regen:5+t.regen+.4*S.regen,thorns:t.thorns+.35*S.thorns,dr:Math.min(.5,t.dr+.05*S.guard),leech:t.lifesteal+1.4*S.leech}}function x(S){if(i.maxHp===0){i.maxHp=S.maxHp,i.hp=S.maxHp;return}S.maxHp>i.maxHp&&(i.hp+=S.maxHp-i.maxHp),i.maxHp=S.maxHp,i.hp=Math.min(i.hp,i.maxHp),i.xpNeed=ja(i.level)}function y(S){for(const I of s.enemies)I.alive&&S(I);s.elite?.alive&&S(s.elite),s.boss?.alive&&S(s.boss)}function T(){let S=0;return y(()=>{S+=1}),s.alive=S,S}function C(S,I){const A=Math.floor(S/oi)|0,N=Math.floor(I/oi)|0;return A*73856093^N*19349663}function v(){for(const S of _.values())p.push(S);_.clear(),y(S=>{const I=C(S.x,S.z);let A=_.get(I);A||(A=p.pop()??[],A.length=0,_.set(I,A)),A.push(S)})}function R(S,I,A){m.length=0;const N=Math.ceil(A/oi),k=Math.floor(S/oi),j=Math.floor(I/oi);for(let ee=-N;ee<=N;ee++)for(let P=-N;P<=N;P++){const ne=_.get(C((k+P)*oi,(j+ee)*oi));if(ne)for(const q of ne)m.push(q)}return m}function D(S){const I={e:null};let A=S*S;return y(N=>{const k=N.x-i.x,j=N.z-i.z,ee=k*k+j*j;ee<A&&(A=ee,I.e=N)}),I.e}function U(S,I){if(!S.alive)return;S.alive=!1,S.pose="Death",S.poseT=1.4,s.kills+=1,s.stage==="boss"&&s.bossRoom===1&&S.kind!=="lich"&&(s.roomKills+=1),S.kind==="lich"&&s.stage==="boss"&&(s.status="clear",s.banner="리치를 쓰러뜨렸다",s.bannerT=3),s.gold+=S.kind==="lich"?80:S.kind==="elite"?36:1,I.leech>0&&(i.hp=Math.min(i.maxHp,i.hp+I.leech));const A=o?ai(o,S.x,S.z):{x:S.x,z:S.z};if(s.gems.length<tf)s.gems.push({alive:!0,x:A.x,z:A.z,v:S.xp});else{const N=s.gems.find(k=>!k.alive);N&&(N.alive=!0,N.x=A.x,N.z=A.z,N.v=S.xp)}if(b({kind:"gem",x:A.x,z:A.z}),S.kind==="elite"&&(s.pickups.push({alive:!0,kind:"chest",x:A.x,z:A.z}),s.banner="정예가 상자를 떨어뜨렸다",s.bannerT=2),S.kind==="elite"||S.kind==="lich"){const N=zc.filter(j=>j.source===(S.kind==="lich"?"boss":"elite")),k=N[Math.floor(e()*N.length)];k&&s.loot.push(k.id),b({kind:"boom",x:S.x,z:S.z,r:S.r+1.4,text:k?.name})}S.kind==="lich"&&(s.status="clear",s.banner="리치 군주가 쓰러졌다",s.bannerT=3,b({kind:"clear",x:S.x,z:S.z,text:"밤이 걷힌다"}))}function H(S,I,A,N,k){if(!S.alive||I<=0||s.status!=="play")return;let j=I,ee=!1;e()<k.crit&&(j*=2,ee=!0),S.hp-=j,S.flash=.1,S.kbx+=A,S.kbz+=N,(ee||S.kind==="elite"||S.kind==="lich")&&b({kind:"hit",x:S.x,z:S.z+S.hover,text:String(Math.round(j)),color:ee?"#f0d78c":"#fff6ea"}),S.hp<=0&&U(S,k)}function B(S,I,A,N){if(i.iframes>0||s.status!=="play")return;const k=S*(1-I.dr);if(i.hp-=k,i.iframes=.9,b({kind:"hurt",x:i.x,z:i.z,text:String(Math.max(1,Math.round(k)))}),I.thorns>0)for(const j of R(i.x,i.z,2.2)){const ee=j.x-i.x,P=j.z-i.z;ee*ee+P*P>2.2*2.2||H(j,I.thorns*I.atk,ee*.4,P*.4,I)}}function F(S){i.xp+=S}function V(){if(s.status!=="play")return;const S=ja(i.level);i.xp<S||(i.xp-=S,i.level+=1,i.hp=Math.min(i.maxHp,i.hp+i.maxHp*.28),s.rerolls=1,s.offer=J(),s.status="level",b({kind:"level",x:i.x,z:i.z,text:`Lv.${i.level}`}))}function te(){for(const k of s.skills){const j=ls[k.id];if(k.level>=5&&!k.evolved&&n[j.evolveWith]>0)return{id:`evo-${k.id}`,kind:"skill",skill:k.id,evolve:!0,title:j.evolveName,text:j.evolveText,pips:5,pipMax:5}}const S=Vo.filter(k=>!s.skills.some(j=>j.id===k.id));if(s.skills.length<Wa&&S.length&&(s.skills.length===0||e()<.62)){const k=S[Math.floor(e()*S.length)];return{id:`new-${k.id}`,kind:"skill",skill:k.id,title:k.name,text:k.blurb,pips:0,pipMax:5}}const I=s.skills.filter(k=>k.level<5);if(!I.length)return null;const A=I[Math.floor(e()*I.length)],N=ls[A.id];return{id:`up-${A.id}`,kind:"skill",skill:A.id,title:`${N.name}  Lv.${A.level+1}`,text:N.blurb,pips:A.level,pipMax:5}}function J(){const S=[];if(i.weaponLevel<8){const k=As[r.hero];S.push({id:"weapon",kind:"weapon",title:`${k.weapon}  Lv.${i.weaponLevel+1}`,text:k.weaponUp,pips:i.weaponLevel,pipMax:8})}const I=te();I&&S.push(I);const A=[];for(const k of Cl){const j=n[k.id];j>=5||A.push({id:k.id,kind:"passive",passive:k.id,title:k.name,text:k.text,pips:j,pipMax:5})}for(let k=A.length-1;k>0;k--){const j=Math.floor(e()*(k+1)),ee=A[k];A[k]=A[j],A[j]=ee}for(const k of A){if(S.length>=3)break;S.push(k)}let N=0;for(;S.length<3;)N+=1,S.push({id:`heal-${N}`,kind:"heal",title:"숨 고르기",text:"최대 체력의 35%를 회복한다"});for(let k=S.length-1;k>0;k--){const j=Math.floor(e()*(k+1)),ee=S[k];S[k]=S[j],S[j]=ee}return S.slice(0,3)}function ue(S,I){if(!o||!c)return null;const A=[];for(let N=0;N<o.rows;N++)for(let k=0;k<o.cols;k++){const j=c[N*o.cols+k]??-1;if(j<S||j>I)continue;const ee=(k+.5)*o.tile-o.cols*o.tile/2,P=(N+.5)*o.tile-o.rows*o.tile/2;A.push({x:ee,z:P})}return A.length?A[Math.floor(e()*A.length)]:null}function Y(){const S=o;if(!S)return null;const I=(S.roadL+S.roadR+1)*S.tile/2-S.cols*S.tile/2,A=e()<.5?-1:1,N=I+A*(8.2+e()*2.8),k=i.z+(e()-.5)*10;return ur(S,N,k)?{x:N,z:k}:ai(S,N,k)}function ce(S,I,A){if(T()>=Ho||s.stage==="boss"&&s.bossRoom>=3)return;const k=Y()??ue(4,9),j=k?k.x:i.x+Math.sin(A)*I,ee=k?k.z:i.z+Math.cos(A)*I,P=k||Xa(j,ee,0,0,.6,qa(j,ee,s.seed,1)),ne=Dr(S,h++,s.t,P.x,P.z),q=s.enemies.find(oe=>!oe.alive);q?Object.assign(q,ne):s.enemies.length<Qu&&s.enemies.push(ne)}function he(S,I,A){for(let N=0;N<S;N++){const k=I[Math.floor(e()*I.length)];ce(k,A,e()*Math.PI*2)}}he(10,["slime","wolf"],6);let Me=.35;function Ae(S){const I=i.weaponLevel,A=1+t.rate+(s.rageT>0?.4:0),N=r.hero,k=D(20);if(!i.moving&&N!=="rose"&&k&&(i.facing=Math.atan2(k.x-i.x,k.z-i.z)),N==="silva"){const q=Math.max(.24,(.58-(I-1)*.028)/A);if(Me>0||!k)return;Me=q;const oe=1+t.arrows+Math.floor((I-1)/2),fe=t.pierce+Math.floor((I-1)/3),Z=S.atk*1.05,xe=Math.atan2(k.x-i.x,k.z-i.z);for(let pe=0;pe<oe;pe++){const De=oe===1?0:(pe-(oe-1)/2)*.14,Ne=xe+De;Je(i.x,i.z,Math.sin(Ne)*22,Math.cos(Ne)*22,Z,.28,1.15,fe,.4,!0,"arrow")}i.attack="Shoot",i.attackT=.32,i.shotSeq+=1,b({kind:"shoot",x:i.x,z:i.z});return}if(N==="luna"){const q=Math.max(.48,(1.22-(I-1)*.05)/A);if(Me>0)return;const oe=[];if(y(pe=>{const De=pe.x-i.x,Ne=pe.z-i.z;De*De+Ne*Ne<400&&oe.push(pe)}),!oe.length)return;Me=q;const fe=1+t.bolts+Math.floor((I-1)/2),Z=(2.15+(I-1)*.18)*(1+t.radius),xe=S.atk*1.2;for(let pe=0;pe<fe;pe++){const De=oe[Math.floor(e()*oe.length)];Be("meteor",De.x,De.z,.36,.28,Z,xe,1.2)}i.attack="Cast",i.attackT=.48,i.shotSeq+=1,b({kind:"cast",x:i.x,z:i.z});return}if(N==="sera"){const q=Math.max(.36,(.74-(I-1)*.025)/A);if(Me>0)return;const oe=(2.7+(I-1)*.18)*(1+t.radius);if(!D(oe+.4))return;Me=q,i.swing+=1;const fe=i.swing%3===0,Z=fe?oe*1.32:oe,xe=S.atk*(fe?1.55:1.2);Be("slash",i.x,i.z,0,.22,Z,xe,fe?2.4:1.3),i.attack=fe?"Spin":"Slash",i.attackT=fe?.55:.38,i.shotSeq+=1,b({kind:"slash",x:i.x,z:i.z,r:Z});return}if(N==="rose"){const q=Math.max(.07,(.16-(I-1)*.007)/A),oe=D(15);if(Me>0||!oe)return;i.moving||(i.facing=Math.atan2(oe.x-i.x,oe.z-i.z)),Me=q;const fe=1+t.pellets+Math.floor((I-1)/3),Z=S.atk*.34,xe=(3.1+(I-1)*.22)*(1+t.knock),pe=i.facing;for(let De=0;De<fe;De++){const Ne=fe===1?0:(De-(fe-1)/2)*.08,xt=pe+Ne;Je(i.x,i.z,Math.sin(xt)*28,Math.cos(xt)*28,Z,.22,.7,0,xe,!0,"bullet")}i.attack=i.moving?"AimRun":"AimR",i.attackT=.16,i.shotSeq+=1,b({kind:"shoot",x:i.x,z:i.z});return}const j=Math.max(.55,(1.35-(I-1)*.055)/A);if(Me>0)return;const ee=(3.3+(I-1)*.24)*(1+t.radius);if(!D(ee+.8))return;Me=j;const P=S.atk*1.5,ne=(6.2+(I-1)*.4)*(1+t.knock);Be("slam",i.x,i.z,0,.32,ee,P,ne),i.attack="GroundSlam",i.attackT=.62,i.shotSeq+=1,b({kind:"slam",x:i.x,z:i.z,r:ee})}function Je(S,I,A,N,k,j,ee,P,ne,q,oe){const fe={alive:!0,x:S,z:I,vx:A,vz:N,dmg:k,r:j,life:ee,pierce:P,knock:ne,friendly:q,style:oe,hits:[]},Z=s.shots.find(xe=>!xe.alive);Z?Object.assign(Z,fe):s.shots.length<ef&&s.shots.push(fe)}function je(S){const I=Ko[S.kind];if(!I||!S.alive)return;const A=S.aimX-S.x,N=S.aimZ-S.z,k=Math.hypot(A,N)||1,j=I.style==="fire"?.55:I.style==="arrow"?.28:.36;Je(S.x,S.z,A/k*I.speed,N/k*I.speed,S.dmg*.85,j,2.4,0,.6,!1,I.style),s.enemyShots+=1,b({kind:"shoot",x:S.x,z:S.z,text:I.style})}function Be(S,I,A,N,k,j,ee,P,ne=!1){const q={alive:!0,kind:S,x:I,z:A,t:0,delay:N,dur:k,r:j,dmg:ee,knock:P,applied:!1,hits:[],hostile:ne},oe=s.zones.find(fe=>!fe.alive);oe?Object.assign(oe,q):s.zones.length<nf&&s.zones.push(q)}function se(S,I){if(o){const A=o.shrines.find(N=>!s.shrines.some(k=>{const j=k.x-N.x,ee=k.z-N.z;return j*j+ee*ee<1}));return A||ue(3,8)}for(let A=0;A<8;A++){const N=e()*Math.PI*2,k=S+e()*(I-S),j=i.x+Math.sin(N)*k,ee=i.z+Math.cos(N)*k;if(!qa(j,ee,s.seed,1).some(ne=>{const q=ne.x-j,oe=ne.z-ee;return q*q+oe*oe<(ne.r+1.6)*(ne.r+1.6)}))return{x:j,z:ee}}return null}function de(){const S=se(14,22);if(!S)return;const I=e(),A=I<.28?"heal":I<.52?"might":I<.74?"haste":"xp";s.shrines.push({alive:!0,x:S.x,z:S.z,channel:0,used:!1,blessing:A}),s.shrines.length>6&&(s.shrines=s.shrines.filter(N=>N.alive&&!N.used).slice(-4)),s.banner="성소가 빛난다",s.bannerT=2,b({kind:"shrine",x:S.x,z:S.z,text:"성소"})}function Te(){const S=se(11,18);if(!S)return;const I=["potion","chicken","magnet","vacuum","freeze","guard","boots","rage","clover","bomb","holy","chest","potion"],A=I[Math.floor(e()*I.length)];s.pickups.push({alive:!0,kind:A,x:S.x,z:S.z}),b({kind:"pickup",x:S.x,z:S.z,text:A})}function ze(S){S==="heal"?(i.hp=Math.min(i.maxHp,i.hp+i.maxHp*.45),s.banner="성소 — 치유"):S==="might"?(s.atkBuffT=12,s.banner="성소 — 파괴"):S==="haste"?(s.hasteT=Math.max(s.hasteT,8),s.banner="성소 — 신속"):(F(36),s.banner="성소 — 지혜"),s.bannerT=2.2,b({kind:"shrine",x:i.x,z:i.z,text:s.banner,color:va[S]})}function ye(S){for(const I of s.shrines){if(!I.alive||I.used)continue;const A=i.x-I.x,N=i.z-I.z,k=A*A+N*N<2.2*2.2;I.channel=k?Math.min(1.2,I.channel+S):Math.max(0,I.channel-S*1.6),I.channel>=1.15&&(I.used=!0,I.alive=!1,ze(I.blessing))}}function qe(S){for(const I of s.gems){if(!I.alive)continue;const A=i.x-I.x,N=i.z-I.z,k=Math.hypot(A,N)||1,j=o?ai(o,i.x-A/k*S,i.z-N/k*S):{x:i.x-A/k*S,z:i.z-N/k*S};I.x=j.x,I.z=j.z}}function Lt(){const S=Vo.filter(k=>!s.skills.some(j=>j.id===k.id));if(s.skills.length<Wa&&S.length){const k=S[Math.floor(e()*S.length)];s.skills.push({id:k.id,level:1,evolved:!1,t:.15}),s.banner=`상자 — ${k.name}`;return}const I=s.skills.filter(k=>k.level<5||!k.evolved&&n[ls[k.id].evolveWith]>0),A=(I.length?I:s.skills)[Math.floor(e()*Math.max(1,(I.length?I:s.skills).length))];if(!A){s.gold+=40,s.banner="상자 — 금화";return}const N=ls[A.id];A.level>=5&&!A.evolved&&n[N.evolveWith]>0?(A.evolved=!0,s.banner=`상자 — ${N.evolveName}`):A.level<5?(A.level+=1,s.banner=`상자 — ${N.name} ${A.level}`):(s.gold+=40,s.banner="상자 — 금화")}function Ye(S,I){if(S==="bomb"||S==="holy"){const A=S==="holy"?.22:.38;y(N=>{const k=N.kind==="lich"||N.kind==="elite"?N.maxHp*A:N.maxHp+20;H(N,k,0,0,I)}),b({kind:"boom",x:i.x,z:i.z,r:S==="holy"?14:16,text:S==="holy"?"성수":"폭탄",color:S==="holy"?"#fff6c2":"#ffb15a"}),s.banner=S==="holy"?"성수":"폭탄"}else if(S==="magnet"||S==="vacuum"){if(qe(S==="vacuum"?.7:.9),S==="vacuum")for(const A of s.pickups){if(!A.alive||A.kind==="vacuum")continue;const N=i.x-A.x,k=i.z-A.z,j=Math.hypot(N,k)||1,ee=o?ai(o,i.x-N/j*2.4,i.z-k/j*2.4):{x:i.x-N/j*2.4,z:i.z-k/j*2.4};A.x=ee.x,A.z=ee.z}s.magnetBuffT=Math.max(s.magnetBuffT,S==="vacuum"?8:6),s.banner=S==="vacuum"?"진공 보석":"자석",b({kind:"pickup",x:i.x,z:i.z,text:s.banner,color:S==="vacuum"?"#b388ff":"#7ec8ff"})}else if(S==="freeze")s.freezeT=4.2,s.banner="시간 정지",b({kind:"aim",x:i.x,z:i.z,r:12,text:"정지"});else if(S==="potion"||S==="chicken"){const A=S==="chicken"?.4:.5;i.hp=Math.min(i.maxHp,i.hp+i.maxHp*A),s.banner=S==="chicken"?"구운 닭":"치유 물약",b({kind:"pickup",x:i.x,z:i.z,text:s.banner,color:S==="chicken"?"#ff8a5a":"#8dff9a"})}else S==="rage"?(s.rageT=Math.max(s.rageT,8),s.banner="광폭",b({kind:"pickup",x:i.x,z:i.z,text:"광폭",color:"#ff5a4a"})):S==="boots"?(s.hasteT=Math.max(s.hasteT,8),s.banner="신속의 부츠",b({kind:"pickup",x:i.x,z:i.z,text:"신속",color:"#c8f5a0"})):S==="clover"?(s.luckT=Math.max(s.luckT,12),s.gold+=20,s.banner="네잎 클로버",b({kind:"pickup",x:i.x,z:i.z,text:"행운",color:"#3dce6a"})):S==="chest"?(s.gold+=30,Lt(),b({kind:"boom",x:i.x,z:i.z,r:2.4,text:"상자",color:"#ffd56a"})):(i.iframes=Math.max(i.iframes,5.5),s.guardT=5.5,s.banner="무적",b({kind:"pickup",x:i.x,z:i.z,text:"무적"}));s.bannerT=1.8}function it(S){for(const I of s.pickups){if(!I.alive)continue;const A=i.x-I.x,N=i.z-I.z;A*A+N*N<1.35*1.35&&(I.alive=!1,Ye(I.kind,S))}s.pickups.length>12&&(s.pickups=s.pickups.filter(I=>I.alive))}function dt(S,I,A){if(!(S>0)||s.status!=="play")return;S=Math.min(S,.08);const N=w();x(N),s.t+=S,s.bannerT=Math.max(0,s.bannerT-S),s.atkBuffT=Math.max(0,s.atkBuffT-S),s.magnetBuffT=Math.max(0,s.magnetBuffT-S),s.freezeT=Math.max(0,s.freezeT-S),s.guardT=Math.max(0,s.guardT-S),s.hasteT=Math.max(0,s.hasteT-S),s.rageT=Math.max(0,s.rageT-S),s.luckT=Math.max(0,s.luckT-S),i.iframes=Math.max(0,i.iframes-S),i.attackT=Math.max(0,i.attackT-S),i.attackT<=0&&(i.attack=null),i.hp=Math.min(i.maxHp,i.hp+N.regen*S);let k=I,j=A;const ee=Math.hypot(k,j);ee>1&&(k/=ee,j/=ee),o&&(c=hs(o,i.x,i.z));const P=o?kl(o,i.x,i.z):qa(i.x,i.z,s.seed,2);if(i.moving=ee>.18,i.moving){const re=Xa(i.x,i.z,k*N.spd*S,j*N.spd*S,ci,P);if(i.x=re.x,i.z=re.z,o&&!ur(o,i.x,i.z)){const st=ai(o,i.x,i.z);i.x=st.x,i.z=st.z}i.facing=Math.atan2(k,j)}if(Me=Math.max(0,Me-S),v(),Ae(N),s.status!=="play")return;const ne=s.freezeT>0,q=o?(o.roadL+o.roadR+1)*o.tile/2-o.cols*o.tile/2:0;y(re=>{const st=i.x-re.x,zt=i.z-re.z,At=Math.hypot(st,zt)||1,Bt=Ko[re.kind],qi=ci+re.r*.85,Ys=re.kind==="lich"||re.kind==="elite"?qi+.6:Bt?Bt.hold:qi;let _n=ne?0:re.speed;s.stage==="lane"&&Math.abs(re.x-q)>3.6&&(_n*=.38);let vn=st/At,Si=zt/At;if(o&&c){const un=Yu(o,c,re.x,re.z,i.x,i.z);(un.x||un.z)&&(vn=un.x,Si=un.z)}let Xi=re.kbx,Ki=re.kbz;!ne&&re.windup>0?(re.windup-=S,re.windup<=0&&je(re)):!ne&&Bt?(re.cast-=S,At>Bt.range?(Xi+=vn*_n,Ki+=Si*_n):At<Bt.hold&&(Xi-=vn*_n*.65,Ki-=Si*_n*.65),re.cast<=0&&At<Bt.range&&At>3.2&&(re.cast=Bt.cd,re.windup=Bt.windup,re.aimX=i.x,re.aimZ=i.z,re.poseLock="Cast",re.poseT=Bt.windup,Be("aim",re.aimX,re.aimZ,0,Bt.windup,.85,0,0),b({kind:"aim",x:re.x,z:re.z,text:re.kind}))):At>Ys&&(Xi+=vn*_n,Ki+=Si*_n);const as=o?kl(o,re.x,re.z):P,Js=Xa(re.x,re.z,Xi*S,Ki*S,re.r*.85,as);if(re.x=Js.x,re.z=Js.z,o&&!ur(o,re.x,re.z)){const un=ai(o,re.x,re.z);re.x=un.x,re.z=un.z}if(re.kbx*=Math.exp(-3.2*S),re.kbz*=Math.exp(-3.2*S),re.phase+=S*(2.2+_n),re.flash=Math.max(0,re.flash-S),re.touch=Math.max(0,re.touch-S),re.poseT>0)re.poseT-=S,re.pose=re.poseLock||re.pose;else{const un=_n*S>.001&&At>Ys+.2;re.pose=un?re.kind==="lich"?"Walk":"Run":"Idle"}}),v(),W(),v(),W(),y(re=>{const st=dr(re.x,re.z,re.r*.85,P);re.x=st.x,re.z=st.z}),$();const oe=o;if(oe&&y(re=>{if(ur(oe,re.x,re.z))return;const st=ai(oe,re.x,re.z);re.x=st.x,re.z=st.z}),v(),M(S,N),s.elite?.alive&&ie(s.elite,S),s.boss?.alive&&me(s.boss,S),s.status!=="play")return;ge(S,N),ae(S,N),v(),y(re=>{const st=re.x-i.x,zt=re.z-i.z;st*st+zt*zt<=(re.r+ci)*(re.r+ci)&&re.touch<=0&&(re.touch=.7,B(re.dmg,N,re.x,re.z))});for(const re of s.shots){if(!re.alive||re.friendly)continue;const st=re.x-i.x,zt=re.z-i.z;st*st+zt*zt<=(re.r+ci)*(re.r+ci)&&(re.alive=!1,B(re.dmg,N,re.x,re.z))}ye(S),it(N);const fe=N.pickup;for(const re of s.gems){if(!re.alive)continue;const st=i.x-re.x,zt=i.z-re.z,At=Math.hypot(st,zt);if(At<fe){const Bt=6+(fe-At)*5;if(At>.01){const qi=o?ai(o,re.x+st/At*Bt*S,re.z+zt/At*Bt*S):{x:re.x+st/At*Bt*S,z:re.z+zt/At*Bt*S};re.x=qi.x,re.z=qi.z}At<.55&&(re.alive=!1,F(re.v*N.xpMul),b({kind:"gem",x:i.x,z:i.z}))}}if(s.status!=="play")return;if(i.hp<=0){i.hp=0,s.status="dead",s.banner="쓰러졌다",s.bannerT=2,b({kind:"die",x:i.x,z:i.z});return}s.shrineTotal===0&&s.t>=f&&(f+=42,s.shrines.filter(re=>re.alive&&!re.used).length<2&&de()),s.t>=g&&(g+=24,s.pickups.filter(re=>re.alive).length<3&&Te()),u+=S;const Z=Ju(s.stage==="boss"&&s.bossRoom===2?Math.max(s.t,200):s.t),xe=s.stage==="farm"&&T()>26||s.stage==="boss"&&s.bossRoom===2&&T()>36,pe=!(s.stage==="boss"&&s.bossRoom>=3)&&!xe;let De=0;const Ne=s.stage==="lane"&&o!==null&&s.laneBars<o.barRows.length&&s.kills-s.laneMark>=([45,75,110][s.laneBars]??110),xt=s.stage==="lane"?Ne?1.5:s.t<20?.45:.4:s.stage==="farm"?Z.every*2.1:s.stage==="boss"&&s.bossRoom===1?.42:Z.every;for(;pe&&u>=xt&&De<12;){u-=xt,De+=1;const re=s.stage==="lane"?2:Z.batch;for(let st=0;st<re;st++){const zt=s.stage==="lane"&&s.t>25&&e()<.22?"goblin_archer":Z.kinds[Math.floor(e()*Z.kinds.length)];ce(zt,10.5+e()*4,e()*Math.PI*2)}}$e(S),L();for(let re=s.enemies.length-1;re>=0;re--){const st=s.enemies[re];if(!st.alive)continue;const zt=st.x-i.x,At=st.z-i.z;zt*zt+At*At>1296&&(st.alive=!1)}T(),V()}function $e(S){if(!o||s.status!=="play")return;const I=Ln(o,i.x,i.z);if(s.stage==="lane"){const A=Ln(o,o.start.x,o.start.z).r,N=Ln(o,o.goal.x,o.goal.z).r,k=A-N||1;s.progress=Math.max(0,Math.min(1,(A-I.r)/k));const j=[45,75,110],ee=o.barRows[s.laneBars],P=s.kills-s.laneMark,ne=j[s.laneBars]??110,q=s.t-s.laneSince;if(s.stageNote=ee===void 0?`도로 ${Math.round(s.progress*100)}%`:`도로 ${Math.round(s.progress*100)}% · 관문 ${Math.min(P,ne)}/${ne}`,ee!==void 0&&P>=ne&&q>=62){const fe=(ee+.5)*o.tile-o.rows*o.tile/2;(Math.abs(i.z-fe)<14||i.z<fe)&&(Ka(o,"B",ee),s.laneBars+=1,s.laneMark=s.kills,s.laneSince=s.t,s.banner="관문이 올라간다",s.bannerT=1.6,c=hs(o,i.x,i.z))}(bt(I.c,I.r)==="E"||s.progress>=.98)&&s.laneBars>=o.barRows.length&&Zt()}else if(s.stage==="farm"){if(s.shrineDone=s.shrines.filter(A=>A.used).length,s.stageNote=`성소 ${s.shrineDone}/${s.shrineTotal}`,s.progress=s.shrineTotal?s.shrineDone/s.shrineTotal:1,!s.portalOpen&&s.shrineDone>=s.shrineTotal&&s.shrineTotal>0&&(s.portalOpen=!0,s.banner="포탈이 열렸다",s.bannerT=2.4),s.portalOpen){const A=i.x-o.goal.x,N=i.z-o.goal.z;A*A+N*N<2.4*2.4&&Kt()}}else{Mt(S);const A=kt(I.r);A>s.bossRoom&&G(A),s.bossRoom===1?(s.stageNote=`처치 ${s.roomKills}/${s.roomNeed}`,s.progress=Math.min(1,s.roomKills/s.roomNeed),s.roomKills>=s.roomNeed&&s.doorsOpen<1&&wt(0)):s.bossRoom===2?(s.roomLeft=Math.max(0,s.roomLeft-S),s.stageNote=`생존 ${Math.ceil(s.roomLeft)}초`,s.progress=1-s.roomLeft/s.roomDur,s.roomLeft<=0&&s.doorsOpen<2&&wt(1)):(s.stageNote="리치 결투",s.progress=s.boss?1-s.boss.hp/s.boss.maxHp:1)}}function bt(S,I){return!o||S<0||I<0||S>=o.cols||I>=o.rows?"":String.fromCharCode(o.kind[I*o.cols+S])}function kt(S){if(!o)return 1;const I=o.rooms.findIndex(A=>S>=A.r0&&S<=A.r1);return I<0?s.bossRoom:I+1}function Zt(){if(!(!o||s.stage!=="lane")){s.stage="farm",s.gatesOpen=!0,Ka(o,"G"),c=hs(o,i.x,i.z),s.banner="길이 끝 — 성소를 깨워라",s.bannerT=2.6;for(const S of s.shrines){if(!S.alive||S.used)continue;const I=Dr(s.enemies.filter(N=>N.alive).length===0?"elite":"wolf",h++,s.t,S.x+(S.x>0?-2.6:2.6),S.z),A=s.enemies.find(N=>!N.alive);A?Object.assign(A,I):s.enemies.push(I)}}}function Mt(S){if(o){for(let I=0;I<s.doorsOpen;I++)if(s.doorLift[I]=Math.min(1,(s.doorLift[I]??0)+S*.42),!a[I]&&s.doorLift[I]>=.92){const A=o.doorRows[I];A!==void 0&&Ka(o,"D",A),a[I]=!0,c=hs(o,i.x,i.z)}}}function wt(S){!o||s.doorsOpen>S||(s.doorsOpen=S+1,s.banner="문이 올라간다",s.bannerT=.45)}function G(S){s.bossRoom=S,S===2&&(s.roomLeft=s.roomDur,s.banner="두 번째 방 — 버텨라",s.bannerT=2.2),S===3&&at()}function Kt(){if(s.mapId="boss",o=Ps("boss"),!!o){i.x=o.start.x,i.z=o.start.z,i.iframes=1.2;for(const S of s.enemies)S.alive=!1;s.boss=null,s.elite=null,s.shots.forEach(S=>{S.alive=!1}),s.stage="boss",s.bossRoom=1,s.roomKills=0,s.roomNeed=36,s.roomLeft=45,s.roomDur=45,s.doorsOpen=0,s.doorLift=[0,0],a[0]=!1,a[1]=!1,s.gatesOpen=!1,s.portalOpen=!1,s.progress=0,d=!1,s.banner="첫 번째 방 — 적을 쓰러뜨려라",s.bannerT=2.4,c=hs(o,i.x,i.z)}}function at(){if(!o||d)return;d=!0;const S=o.rooms[2]??o.rooms[o.rooms.length-1],I=S?Math.floor((S.r0+S.r1)/2):4,N={x:(Math.floor((o.roadL+o.roadR)/2)+.5)*o.tile-o.cols*o.tile/2,z:(I+.5)*o.tile-o.rows*o.tile/2};s.boss=Dr("lich",h++,s.t,N.x,N.z),s.boss.maxHp=48e3,s.boss.hp=48e3,s.boss.cast=1.1;for(const k of s.enemies)k.alive&&(k.alive=!1);Be("slash",N.x,N.z,.9,.35,4.2,s.boss.dmg*.8,2,!0),s.banner="리치 군주",s.bannerT=2.4,b({kind:"banner",x:N.x,z:N.z,text:"리치 군주"})}function L(){for(;T()>Ho;){let S=null,I=-1;for(const A of s.enemies){if(!A.alive)continue;const N=A.x-i.x,k=A.z-i.z,j=N*N+k*k;j>I&&(I=j,S=A)}if(!S)break;S.alive=!1}}function M(S,I){for(const A of s.skills){if(A.t-=S*(s.rageT>0?1.35:1),A.t>0)continue;const N=A.level,k=A.evolved,j=ls[A.id];if(A.id==="tesla"){A.t=k?.28:.4;const ee=Math.min(5,2+Math.floor((N-1)/2)+(k?1:0)),P=2.15+N*.16;for(let ne=0;ne<ee;ne++){const q=s.t*(2.1+N*.12)+ne/ee*Math.PI*2,oe=i.x+Math.sin(q)*P,fe=i.z+Math.cos(q)*P;let Z=null,xe=2.05*2.05;for(const pe of R(oe,fe,2.1)){if(!pe.alive)continue;const De=pe.x-oe,Ne=pe.z-fe,xt=De*De+Ne*Ne;xt<xe&&(xe=xt,Z=pe)}if(Z){if(H(Z,I.atk*(.42+N*.08),0,0,I),k){let pe=null,De=3.2*3.2;for(const Ne of R(Z.x,Z.z,3.2)){if(!Ne.alive||Ne.id===Z.id)continue;const xt=Ne.x-Z.x,re=Ne.z-Z.z,st=xt*xt+re*re;st<De&&(De=st,pe=Ne)}pe&&H(pe,I.atk*.35,0,0,I)}ne===0&&b({kind:"skill",x:Z.x,z:Z.z,text:"tesla",color:j.color})}}}else if(A.id==="pyre"){A.t=k?.62:.82;const ee=(2.1+N*.32)*(k?1.28:1);Be("slash",i.x,i.z,0,.26,ee,I.atk*(.5+N*.08),k?2.4:1.1),b({kind:"skill",x:i.x,z:i.z,r:ee,text:"pyre",color:j.color})}else if(A.id==="frost"){A.t=Math.max(.32,.72-N*.05);const ee=2+Math.floor(N/2)+(k?1:0);for(let P=0;P<ee;P++){const ne=i.facing+(P-(ee-1)/2)*.35;Je(i.x,i.z,Math.sin(ne)*16,Math.cos(ne)*16,I.atk*(.38+N*.06),.26,.85,k?2:0,.4,!0,"ice")}b({kind:"skill",x:i.x,z:i.z,text:"frost",color:j.color})}else if(A.id==="cross"){A.t=Math.max(.62,(k?.85:1.15)-N*.05);const ee=i.facing,P=k?15:12;Je(i.x,i.z,Math.sin(ee)*P,Math.cos(ee)*P,I.atk*(.7+N*.1),.42,k?1.55:1.3,1+N,1.4,!0,"cross"),b({kind:"skill",x:i.x,z:i.z,text:"cross",color:j.color})}else if(A.id==="miasma"){A.t=1.05;const ee=2.4+N*.28+(k?.6:0);Be("slash",i.x,i.z,0,.4,ee,I.atk*(.32+N*.06),.2),k&&(i.hp=Math.min(i.maxHp,i.hp+2+N)),b({kind:"skill",x:i.x,z:i.z,r:ee,text:"miasma",color:j.color})}else{A.t=k?.78:1.05;const ee=2+Math.floor(N/2)+(k?2:0);let P=i.x,ne=i.z;const q=new Set;for(let oe=0;oe<ee;oe++){const fe=oe===0?8.5:4.2;let Z=null,xe=fe*fe;for(const pe of R(P,ne,fe)){if(!pe.alive||q.has(pe.id))continue;const De=pe.x-P,Ne=pe.z-ne,xt=De*De+Ne*Ne;xt<xe&&(xe=xt,Z=pe)}if(!Z)break;q.add(Z.id),H(Z,I.atk*(.48+N*.07),0,0,I),b({kind:"skill",x:Z.x,z:Z.z,text:"arc",color:j.color}),P=Z.x,ne=Z.z}}}}function W(){const S=[];y(I=>S.push(I));for(const I of S){const A=Math.floor(I.x/oi),N=Math.floor(I.z/oi);for(let k=-1;k<=1;k++)for(let j=-1;j<=1;j++){const ee=_.get((A+j)*73856093^(N+k)*19349663);if(ee)for(const P of ee){if(P.id<=I.id)continue;let ne=I.x-P.x,q=I.z-P.z,oe=ne*ne+q*q;const fe=(I.r+P.r)*.8;if(oe>=fe*fe)continue;let Z=Math.sqrt(oe),xe,pe;if(Z<.001){const Ne=I.id*2.399963+P.id*.7;xe=Math.cos(Ne),pe=Math.sin(Ne),Z=0}else xe=ne/Z,pe=q/Z;const De=(fe-Z)*.72;I.x+=xe*De,I.z+=pe*De,P.x-=xe*De,P.z-=pe*De}}}}function $(){y(S=>{const I=S.x-i.x,A=S.z-i.z,N=ci+S.r*.8,k=I*I+A*A;if(k>=N*N)return;const j=Math.sqrt(k),ee=S.id*2.399963,P=j<.001?Math.cos(ee):I/j,ne=j<.001?Math.sin(ee):A/j;S.x=i.x+P*N,S.z=i.z+ne*N})}function ie(S,I){S.cast-=I,!(S.cast>0)&&(S.cast=2.5,S.poseLock="Slash",S.poseT=.45,Be("slash",S.x,S.z,.12,.25,3.1,S.dmg*1.4,2.2,!0))}function me(S,I){const A=S.hp/S.maxHp<=.5;if(A&&s.bossPhase<2){s.bossPhase=2,s.banner="리치 — 순간이동",s.bannerT=1.8;const k=e()*Math.PI*2,j=i.x+Math.sin(k)*6.5,ee=i.z+Math.cos(k)*6.5,P=o?ai(o,j,ee):{x:j,z:ee};S.x=P.x,S.z=P.z;for(let ne=0;ne<4;ne++){const q=ne/4*Math.PI*2,oe=Dr("skel_minion",h++,s.t,S.x+Math.sin(q)*2.2,S.z+Math.cos(q)*2.2),fe=s.enemies.find(Z=>!Z.alive);fe?Object.assign(fe,oe):s.enemies.push(oe)}b({kind:"boom",x:S.x,z:S.z,r:3,text:"소환"})}if(S.cast-=I,S.cast>0||S.poseT>.2)return;const N=Math.floor(s.t/2.6)%2===0;if(S.cast=A?2.2:2.6,S.poseT=.75,N)S.poseLock="CastLance",Be("slash",i.x,i.z,1.15,.35,3.4,S.dmg*.55,1.2,!0);else{S.poseLock="Scream";const k=Math.atan2(i.x-S.x,i.z-S.z);for(const j of[-.6,-.3,0,.3,.6]){const ee=k+j;Je(S.x,S.z,Math.sin(ee)*6.2,Math.cos(ee)*6.2,S.dmg*.45,.42,3.4,0,0,!1,"bolt")}}b({kind:"cast",x:S.x,z:S.z})}function ge(S,I){for(const A of s.shots){if(!A.alive)continue;if(A.style==="cross"&&A.life<.68){const ee=i.x-A.x,P=i.z-A.z,ne=Math.hypot(ee,P)||1,q=Math.hypot(A.vx,A.vz)||12;A.vx=ee/ne*q,A.vz=P/ne*q,ne<.7&&(A.alive=!1)}const N=Math.max(1,Math.ceil(Math.hypot(A.vx,A.vz)*S/.45)),k=A.x,j=A.z;for(let ee=1;ee<=N&&A.alive;ee++)if(A.x=k+A.vx*S*(ee/N),A.z=j+A.vz*S*(ee/N),!!A.friendly)for(const P of R(A.x,A.z,2.2)){if(!P.alive||A.hits.includes(P.id))continue;const ne=P.x-A.x,q=P.z-A.z;if(ne*ne+q*q>(P.r+A.r)*(P.r+A.r))continue;A.hits.push(P.id);const oe=Math.hypot(A.vx,A.vz)||1;if(H(P,A.dmg,A.vx/oe*A.knock,A.vz/oe*A.knock,I),A.hits.length>A.pierce){A.alive=!1;break}}A.life-=S,A.life<=0&&(A.alive=!1)}}function ae(S,I){for(const A of s.zones){if(!A.alive)continue;if(A.t+=S,A.kind==="aim"){A.t>=A.dur&&(A.alive=!1);continue}if(A.kind==="meteor"){if(!A.applied&&A.t>=A.delay){A.applied=!0;for(const k of R(A.x,A.z,A.r)){const j=k.x-A.x,ee=k.z-A.z;j*j+ee*ee<=A.r*A.r&&H(k,A.dmg,j*.15,ee*.15,I)}b({kind:"boom",x:A.x,z:A.z,r:A.r})}A.t>A.delay+.32&&(A.alive=!1);continue}if(A.hostile){if(!A.applied&&A.t>=A.delay){const k=i.x-A.x,j=i.z-A.z;k*k+j*j<=(A.r+ci)*(A.r+ci)&&(A.applied=!0,B(A.dmg,I,A.x,A.z))}A.t>=A.delay+.22&&(A.alive=!1);continue}const N=A.r*Math.min(1,A.dur<=0?1:A.t/A.dur);for(const k of R(A.x,A.z,N+.2)){if(!k.alive||A.hits.includes(k.id))continue;const j=k.x-A.x,ee=k.z-A.z,P=Math.hypot(j,ee);if(P>N+k.r*.2)continue;A.hits.push(k.id);const ne=P<.001?1:P;H(k,A.dmg,j/ne*A.knock,ee/ne*A.knock,I)}A.kind==="slash"&&!A.applied&&(A.applied=!0),A.t>=A.dur+(A.kind==="slash"?.05:0)&&(A.alive=!1)}}function le(S){if(s.status!=="level"||!s.offer)return;const I=s.offer[S]??s.offer[0];if(!I)return;if(I.kind==="weapon")i.weaponLevel=Math.min(8,i.weaponLevel+1);else if(I.kind==="passive"&&I.passive)n[I.passive]=Math.min(5,(n[I.passive]??0)+1);else if(I.kind==="skill"&&I.skill){const N=I.skill;let k=s.skills.find(ee=>ee.id===N);const j=ls[N];k?I.evolve?k.evolved=!0:k.level=Math.min(5,k.level+1):s.skills.length<Wa&&s.skills.push({id:N,level:1,evolved:!1,t:.2}),s.banner=j.evolveName&&I.evolve?j.evolveName:j.name,s.bannerT=1.4}else i.hp=Math.min(i.maxHp,i.hp+i.maxHp*.35);const A=w();x(A),s.offer=null,s.status="play",V()}return{state:s,step:dt,choose:le,reroll(){s.status!=="level"||s.rerolls<=0||(s.rerolls-=1,s.offer=J())},skip(){s.status==="level"&&(i.hp=Math.min(i.maxHp,i.hp+i.maxHp*.12),s.offer=null,s.status="play",s.banner="건너뜀",s.bannerT=1.2)},pause(){s.status==="play"&&(s.status="pause")},resume(){s.status==="pause"&&(s.status="play")},giveUp(){s.status==="dead"||s.status==="clear"||(i.hp=0,s.status="dead",s.offer=null,b({kind:"die",x:i.x,z:i.z}))},drainFx(){const S=l.slice();return l.length=0,S}}}function Nr(r,e){const t=Math.sin(r*127.1+e*311.7)*43758.5453;return t-Math.floor(t)}function Jn(r,e){const t=Math.floor(r),n=Math.floor(e),i=r-t,s=e-n,a=i*i*(3-2*i),o=s*s*(3-2*s),c=Nr(t,n),l=Nr(t+1,n),h=Nr(t,n+1),d=Nr(t+1,n+1);return c+(l-c)*a+(h-c)*o+(c-l-h+d)*a*o}function Kc(r){const e=Math.min(1,Math.max(0,r));return{x:-58+e*116,z:Math.sin(e*Math.PI*1.55)*18+Math.sin(e*Math.PI*3.4+.4)*4}}const jo=[];for(let r=0;r<=64;r++){const e=r/64,t=Kc(e);jo.push({x:t.x,z:t.z,t:e})}function rf(r,e){let t=1/0,n=jo[0];for(const c of jo){const l=(c.x-r)*(c.x-r)+(c.z-e)*(c.z-e);l<t&&(t=l,n=c)}const i=Kc(Math.min(1,n.t+.012));let s=i.x-n.x,a=i.z-n.z;const o=Math.hypot(s,a)||1;return s/=o,a/=o,{dist:Math.sqrt(t),t:n.t,x:n.x,z:n.z,tx:s,tz:a}}const Ot=Kc(.43),af=[{x:Ot.x+30,z:Ot.z+14,rx:14,rz:10},{x:Ot.x-22,z:Ot.z+22,rx:11,rz:8},{x:Ot.x+2,z:Ot.z-46,rx:10,rz:5},{x:Ot.x+18,z:Ot.z-34,rx:8,rz:5.5},{x:Ot.x-8,z:Ot.z+30,rx:7,rz:5}],of=[{ax:Ot.x-18,az:Ot.z-22,bx:Ot.x+28,bz:Ot.z-16,r:9},{ax:Ot.x-34,az:Ot.z-4,bx:Ot.x-18,bz:Ot.z+10,r:8}];function cf(r,e,t){const n=(r-t.x)/t.rx,i=(e-t.z)/t.rz;return(1-Math.sqrt(n*n+i*i))*Math.min(t.rx,t.rz)}function lf(r,e,t){const n=t.bx-t.ax,i=t.bz-t.az,s=n*n+i*i||1;let a=((r-t.ax)*n+(e-t.az)*i)/s;a=Math.min(1,Math.max(0,a));const o=Math.hypot(r-(t.ax+n*a),e-(t.az+i*a));return t.r-o}function hf(r,e){const t=Math.atan2(e,r),n=Math.cos(t),i=Math.sin(t),s=60,a=44,o=s*a/Math.max(.001,Math.sqrt(a*a*n*n+s*s*i*i)),c=(Jn(n*2.2+2,i*2.2)-.5)*2.4;return Math.hypot(r,e)-(o+c)}function df(r,e){let t=-99;for(const n of af)t=Math.max(t,cf(r,e,n));for(const n of of)t=Math.max(t,lf(r,e,n)+(Jn(r*.08,e*.08)-.5)*1.6);return t}const uf=[[{x:-16,z:33},{x:-14,z:30},{x:-8,z:25},{x:-6,z:20},{x:-6.4,z:15.8}],[{x:-2,z:23},{x:4,z:23},{x:9,z:23}],[{x:-20,z:10},{x:-16,z:7.4},{x:-10.5,z:8.2}],[{x:6,z:-32},{x:16,z:-31},{x:26,z:-26},{x:33,z:-20},{x:31,z:-15},{x:29.5,z:-11.6}]];function ff(r){const e=[r[0],...r,r[r.length-1]],t=[];for(let n=1;n<e.length-2;n++){const i=e[n-1],s=e[n],a=e[n+1],o=e[n+2],c=12;for(let l=0;l<c;l++){const h=l/c,d=h*h,u=d*h;t.push({x:.5*(2*s.x+(-i.x+a.x)*h+(2*i.x-5*s.x+4*a.x-o.x)*d+(-i.x+3*s.x-3*a.x+o.x)*u),z:.5*(2*s.z+(-i.z+a.z)*h+(2*i.z-5*s.z+4*a.z-o.z)*d+(-i.z+3*s.z-3*a.z+o.z)*u)})}}return t.push(r[r.length-1]),t}function pf(r){return rf(r.x,r.z).dist>3.95&&df(r.x,r.z)<.55&&hf(r.x,r.z)<-.5}const mf=[];for(const r of uf){const e=ff(r);let t=null;for(const n of e){if(!pf(n)){t=null;continue}t&&Math.hypot(n.x-t.x,n.z-t.z)<5&&mf.push({ax:t.x,az:t.z,bx:n.x,bz:n.z}),t=n}}const Fl={corridor:{x:26,z:-10},choke:{x:-10,z:-30},cliff:{x:Ot.x+6,z:Ot.z-36}},Ul="avalon-survival-v1";function ha(){const r={};for(const e of zi)r[e]={xp:0,skills:{},equip:{weapon:null,armor:null,accessory:null}};return{version:1,heroes:r,items:[],clears:0,bestSeconds:0,totalKills:0,gold:0}}function Ol(r){const e=ha();if(!r||r.version!==1)return e;for(const t of zi){const n=r.heroes?.[t];e.heroes[t]={xp:Math.max(0,Number(n?.xp)||0),skills:{...n?.skills??{}},equip:{weapon:n?.equip?.weapon??null,armor:n?.equip?.armor??null,accessory:n?.equip?.accessory??null}}}return e.items=Array.isArray(r.items)?r.items.filter(t=>t&&typeof t.uid=="string"&&Bi[t.defId]).map(t=>({uid:t.uid,defId:t.defId})):[],e.clears=Math.max(0,Number(r.clears)||0),e.bestSeconds=Math.max(0,Number(r.bestSeconds)||0),e.totalKills=Math.max(0,Number(r.totalKills)||0),e.gold=Math.max(0,Number(r.gold)||0),e}function gf(r=typeof localStorage>"u"?null:localStorage){return{load(){if(!r)return ha();try{const e=r.getItem(Ul);return e?Ol(JSON.parse(e)):ha()}catch{return ha()}},write(e){r&&r.setItem(Ul,JSON.stringify(Ol(e)))}}}function bf(r,e){for(const t of zi){const n=r.heroes[t].equip;for(const i of Object.keys(n))if(n[i]===e)return{hero:t,slot:i}}return null}function xf(r,e,t,n){const i=r.heroes[e].equip;if(n===null)return i[t]=null,!0;const s=r.items.find(c=>c.uid===n),a=s&&Bi[s.defId];if(!a||a.slot!==t)return!1;const o=bf(r,n);return o&&(r.heroes[o.hero].equip[o.slot]=null),i[t]=n,!0}function _f(r,e,t){const n=ku[t];if(!n||n.hero!==e)return!1;const i=r.heroes[e].skills;if(i[t])return!1;if(n.index>0){const s=`${e}-${n.branch}-${n.index-1}`;if(!i[s])return!1}return md(r,e)<=0?!1:(i[t]=1,!0)}let zl=1;function Md(){return zl+=1,`i${Date.now().toString(36)}${zl.toString(36)}`}function vf(r,e){const t=r.heroes[e.hero],n=Uu(e.seconds,e.kills,e.cleared),i=Fs(t.xp).level;t.xp+=n;const s=Fs(t.xp).level;r.totalKills+=e.kills,r.bestSeconds=Math.max(r.bestSeconds,e.seconds),e.cleared&&(r.clears+=1),r.gold=Math.max(0,(r.gold||0)+Math.max(0,e.gold||0));const a=[];for(const o of e.loot){if(!Bi[o])continue;const c={uid:Md(),defId:o};r.items.push(c),a.push(c)}return{gained:n,before:i,after:s,minted:a}}function Mf(r){if((r.gold||0)<60)return null;const e=zc.filter(i=>i.rarity!=="epic"),t=e[Math.floor(Math.random()*e.length)];if(!t)return null;r.gold-=60;const n={uid:Md(),defId:t.id};return r.items.push(n),n}function Sf(r,e){return(r.gold||0)<40?!1:(r.gold-=40,r.heroes[e].xp+=80,!0)}/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const jc="186",yf=0,Bl=1,Ef=2,br=1,Tf=2,fr=3,Gi=0,fn=1,rn=2,xi=0,Is=1,ei=2,Gl=3,Hl=4,wf=5,ws=100,Af=101,Rf=102,Cf=103,Lf=104,Pf=200,If=201,Df=202,Nf=203,Sd=204,yd=205,kf=206,Ff=207,Uf=208,Of=209,zf=210,Bf=211,Gf=212,Hf=213,Vf=214,Yo=0,Jo=1,$o=2,Sr=3,Zo=4,Qo=5,Ma=6,ec=7,Ed=0,Wf=1,qf=2,ti=0,Td=1,wd=2,Ad=3,Yc=4,Rd=5,Cd=6,Ld=7,Vl="attached",Xf="detached",Pd=300,ss=301,Us=302,Ya=303,Ja=304,Ua=306,Os=1e3,Zn=1001,Sa=1002,Dt=1003,Id=1004,pr=1005,Vt=1006,da=1007,gi=1008,gn=1009,Dd=1010,Nd=1011,yr=1012,Jc=1013,ni=1014,Rn=1015,ii=1016,$c=1017,Zc=1018,Er=1020,kd=35902,Fd=35899,Ud=1021,Od=1022,Cn=1023,Mi=1026,ts=1027,Qc=1028,el=1029,rs=1030,tl=1031,nl=1033,ua=33776,fa=33777,pa=33778,ma=33779,tc=35840,nc=35841,ic=35842,sc=35843,rc=36196,ac=37492,oc=37496,cc=37488,lc=37489,ya=37490,hc=37491,dc=37808,uc=37809,fc=37810,pc=37811,mc=37812,gc=37813,bc=37814,xc=37815,_c=37816,vc=37817,Mc=37818,Sc=37819,yc=37820,Ec=37821,Tc=36492,wc=36494,Ac=36495,Rc=36283,Cc=36284,Ea=36285,Lc=36286,zd=2200,Bd=2201,Kf=2202,Tr=2300,wr=2301,$a=2302,Wl=2303,Rs=2400,Cs=2401,Ta=2402,il=2500,jf=2501,Yf=0,Gd=1,Pc=2,Jf=3200,wa=0,$f=1,Ui="",Yt="srgb",xn="srgb-linear",Aa="linear",lt="srgb",Za=7680,Zf=519,Qf=512,ep=513,tp=514,sl=515,np=516,ip=517,rl=518,sp=519,Hd=35044,ql="300 es",Qn=2e3,Ar=2001;function rp(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function ap(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}function Rr(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function op(){const r=Rr("canvas");return r.style.display="block",r}const Xl={};function Ra(...r){const e="THREE."+r.shift();console.log(e,...r)}function Vd(r){const e=r[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=r[1];t&&t.isStackTrace?r[0]+=" "+t.getLocation():r[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return r}function Ie(...r){r=Vd(r);const e="THREE."+r.shift();{const t=r[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...r)}}function Oe(...r){r=Vd(r);const e="THREE."+r.shift();{const t=r[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...r)}}function Ds(...r){const e=r.join(" ");e in Xl||(Xl[e]=!0,Ie(...r))}function cp(r,e,t){return new Promise(function(n,i){function s(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:i();break;case r.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}const lp={[Yo]:Jo,[$o]:Ma,[Zo]:ec,[Sr]:Qo,[Jo]:Yo,[Ma]:$o,[ec]:Zo,[Qo]:Sr};class Wi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const i=n[e];if(i!==void 0){const s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let s=0,a=i.length;s<a;s++)i[s].call(this,e);e.target=null}}}const en=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Kl=1234567;const xr=Math.PI/180,zs=180/Math.PI;function On(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(en[r&255]+en[r>>8&255]+en[r>>16&255]+en[r>>24&255]+"-"+en[e&255]+en[e>>8&255]+"-"+en[e>>16&15|64]+en[e>>24&255]+"-"+en[t&63|128]+en[t>>8&255]+"-"+en[t>>16&255]+en[t>>24&255]+en[n&255]+en[n>>8&255]+en[n>>16&255]+en[n>>24&255]).toLowerCase()}function tt(r,e,t){return Math.max(e,Math.min(t,r))}function al(r,e){return(r%e+e)%e}function hp(r,e,t,n,i){return n+(r-e)*(i-n)/(t-e)}function dp(r,e,t){return r!==e?(t-r)/(e-r):0}function _r(r,e,t){return(1-t)*r+t*e}function up(r,e,t,n){return _r(r,e,1-Math.exp(-t*n))}function fp(r,e=1){return e-Math.abs(al(r,e*2)-e)}function pp(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*(3-2*r))}function mp(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*r*(r*(r*6-15)+10))}function gp(r,e){return r+Math.floor(Math.random()*(e-r+1))}function bp(r,e){return r+Math.random()*(e-r)}function xp(r){return r*(.5-Math.random())}function _p(r){r!==void 0&&(Kl=r);let e=Kl+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function vp(r){return r*xr}function Mp(r){return r*zs}function Sp(r){return r>0&&Number.isInteger(r)&&2**Math.round(Math.log2(r))===r}function yp(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function Ep(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function Tp(r,e,t,n,i){const s=Math.cos,a=Math.sin,o=s(t/2),c=a(t/2),l=s((e+n)/2),h=a((e+n)/2),d=s((e-n)/2),u=a((e-n)/2),f=s((n-e)/2),g=a((n-e)/2);switch(i){case"XYX":r.set(o*h,c*d,c*u,o*l);break;case"YZY":r.set(c*u,o*h,c*d,o*l);break;case"ZXZ":r.set(c*d,c*u,o*h,o*l);break;case"XZX":r.set(o*h,c*g,c*f,o*l);break;case"YXY":r.set(c*f,o*h,c*g,o*l);break;case"ZYZ":r.set(c*g,c*f,o*h,o*l);break;default:Ie("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Fn(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:case Uint8ClampedArray:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function ht(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const wp={DEG2RAD:xr,RAD2DEG:zs,generateUUID:On,clamp:tt,euclideanModulo:al,mapLinear:hp,inverseLerp:dp,lerp:_r,damp:up,pingpong:fp,smoothstep:pp,smootherstep:mp,randInt:gp,randFloat:bp,randFloatSpread:xp,seededRandom:_p,degToRad:vp,radToDeg:Mp,isPowerOfTwo:Sp,ceilPowerOfTwo:yp,floorPowerOfTwo:Ep,setQuaternionFromProperEuler:Tp,normalize:ht,denormalize:Fn};class He{static{He.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=tt(this.x,e.x,t.x),this.y=tt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=tt(this.x,e,t),this.y=tt(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(tt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(tt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*n-a*i+e.x,this.y=s*i+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Pn{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,a,o){let c=n[i+0],l=n[i+1],h=n[i+2],d=n[i+3],u=s[a+0],f=s[a+1],g=s[a+2],_=s[a+3];if(d!==_||c!==u||l!==f||h!==g){let p=c*u+l*f+h*g+d*_;p<0&&(u=-u,f=-f,g=-g,_=-_,p=-p);let m=1-o;if(p<.9995){const b=Math.acos(p),w=Math.sin(b);m=Math.sin(m*b)/w,o=Math.sin(o*b)/w,c=c*m+u*o,l=l*m+f*o,h=h*m+g*o,d=d*m+_*o}else{c=c*m+u*o,l=l*m+f*o,h=h*m+g*o,d=d*m+_*o;const b=1/Math.sqrt(c*c+l*l+h*h+d*d);c*=b,l*=b,h*=b,d*=b}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,i,s,a){const o=n[i],c=n[i+1],l=n[i+2],h=n[i+3],d=s[a],u=s[a+1],f=s[a+2],g=s[a+3];return e[t]=o*g+h*d+c*f-l*u,e[t+1]=c*g+h*u+l*d-o*f,e[t+2]=l*g+h*f+o*u-c*d,e[t+3]=h*g-o*d-c*u-l*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,s=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(n/2),h=o(i/2),d=o(s/2),u=c(n/2),f=c(i/2),g=c(s/2);switch(a){case"XYZ":this._x=u*h*d+l*f*g,this._y=l*f*d-u*h*g,this._z=l*h*g+u*f*d,this._w=l*h*d-u*f*g;break;case"YXZ":this._x=u*h*d+l*f*g,this._y=l*f*d-u*h*g,this._z=l*h*g-u*f*d,this._w=l*h*d+u*f*g;break;case"ZXY":this._x=u*h*d-l*f*g,this._y=l*f*d+u*h*g,this._z=l*h*g+u*f*d,this._w=l*h*d-u*f*g;break;case"ZYX":this._x=u*h*d-l*f*g,this._y=l*f*d+u*h*g,this._z=l*h*g-u*f*d,this._w=l*h*d+u*f*g;break;case"YZX":this._x=u*h*d+l*f*g,this._y=l*f*d+u*h*g,this._z=l*h*g-u*f*d,this._w=l*h*d-u*f*g;break;case"XZY":this._x=u*h*d-l*f*g,this._y=l*f*d-u*h*g,this._z=l*h*g+u*f*d,this._w=l*h*d+u*f*g;break;default:Ie("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],s=t[8],a=t[1],o=t[5],c=t[9],l=t[2],h=t[6],d=t[10],u=n+o+d;if(u>0){const f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(h-c)*f,this._y=(s-l)*f,this._z=(a-i)*f}else if(n>o&&n>d){const f=2*Math.sqrt(1+n-o-d);this._w=(h-c)/f,this._x=.25*f,this._y=(i+a)/f,this._z=(s+l)/f}else if(o>d){const f=2*Math.sqrt(1+o-n-d);this._w=(s-l)/f,this._x=(i+a)/f,this._y=.25*f,this._z=(c+h)/f}else{const f=2*Math.sqrt(1+d-n-o);this._w=(a-i)/f,this._x=(s+l)/f,this._y=(c+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(tt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,s=e._z,a=e._w,o=t._x,c=t._y,l=t._z,h=t._w;return this._x=n*h+a*o+i*l-s*c,this._y=i*h+a*c+s*o-n*l,this._z=s*h+a*l+n*c-i*o,this._w=a*h-n*o-i*c-s*l,this._onChangeCallback(),this}slerp(e,t){let n=e._x,i=e._y,s=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,i=-i,s=-s,a=-a,o=-o);let c=1-t;if(o<.9995){const l=Math.acos(o),h=Math.sin(l);c=Math.sin(c*l)/h,t=Math.sin(t*l)/h,this._x=this._x*c+n*t,this._y=this._y*c+i*t,this._z=this._z*c+s*t,this._w=this._w*c+a*t,this._onChangeCallback()}else this._x=this._x*c+n*t,this._y=this._y*c+i*t,this._z=this._z*c+s*t,this._w=this._w*c+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class z{static{z.prototype.isVector3=!0}constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(jl.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(jl.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=e.elements,a=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*a,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*a,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,s=e.x,a=e.y,o=e.z,c=e.w,l=2*(a*i-o*n),h=2*(o*t-s*i),d=2*(s*n-a*t);return this.x=t+c*l+a*d-o*h,this.y=n+c*h+o*l-s*d,this.z=i+c*d+s*h-a*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=tt(this.x,e.x,t.x),this.y=tt(this.y,e.y,t.y),this.z=tt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=tt(this.x,e,t),this.y=tt(this.y,e,t),this.z=tt(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(tt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,s=e.z,a=t.x,o=t.y,c=t.z;return this.x=i*c-s*o,this.y=s*a-n*c,this.z=n*o-i*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Qa.copy(this).projectOnVector(e),this.sub(Qa)}reflect(e){return this.sub(Qa.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(tt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Qa=new z,jl=new Pn;class Ge{static{Ge.prototype.isMatrix3=!0}constructor(e,t,n,i,s,a,o,c,l){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,a,o,c,l)}set(e,t,n,i,s,a,o,c,l){const h=this.elements;return h[0]=e,h[1]=i,h[2]=o,h[3]=t,h[4]=s,h[5]=c,h[6]=n,h[7]=a,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],h=n[4],d=n[7],u=n[2],f=n[5],g=n[8],_=i[0],p=i[3],m=i[6],b=i[1],w=i[4],x=i[7],y=i[2],T=i[5],C=i[8];return s[0]=a*_+o*b+c*y,s[3]=a*p+o*w+c*T,s[6]=a*m+o*x+c*C,s[1]=l*_+h*b+d*y,s[4]=l*p+h*w+d*T,s[7]=l*m+h*x+d*C,s[2]=u*_+f*b+g*y,s[5]=u*p+f*w+g*T,s[8]=u*m+f*x+g*C,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8];return t*a*h-t*o*l-n*s*h+n*o*c+i*s*l-i*a*c}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8],d=h*a-o*l,u=o*c-h*s,f=l*s-a*c,g=t*d+n*u+i*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=d*_,e[1]=(i*l-h*n)*_,e[2]=(o*n-i*a)*_,e[3]=u*_,e[4]=(h*t-i*c)*_,e[5]=(i*s-o*t)*_,e[6]=f*_,e[7]=(n*c-l*t)*_,e[8]=(a*t-n*s)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,a,o){const c=Math.cos(s),l=Math.sin(s);return this.set(n*c,n*l,-n*(c*a+l*o)+a+e,-i*l,i*c,-i*(-l*a+c*o)+o+t,0,0,1),this}scale(e,t){return Ds("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(eo.makeScale(e,t)),this}rotate(e){return Ds("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(eo.makeRotation(-e)),this}translate(e,t){return Ds("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(eo.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const eo=new Ge,Yl=new Ge().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Jl=new Ge().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Ap(){const r={enabled:!0,workingColorSpace:xn,spaces:{},convert:function(i,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===lt&&(i.r=_i(i.r),i.g=_i(i.g),i.b=_i(i.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(i.applyMatrix3(this.spaces[s].toXYZ),i.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===lt&&(i.r=Ns(i.r),i.g=Ns(i.g),i.b=Ns(i.b))),i},workingToColorSpace:function(i,s){return this.convert(i,this.workingColorSpace,s)},colorSpaceToWorking:function(i,s){return this.convert(i,s,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Ui?Aa:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,s=this.workingColorSpace){return i.fromArray(this.spaces[s].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,s,a){return i.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,s){return Ds("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(i,s)},toWorkingColorSpace:function(i,s){return Ds("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(i,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return r.define({[xn]:{primaries:e,whitePoint:n,transfer:Aa,toXYZ:Yl,fromXYZ:Jl,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Yt},outputColorSpaceConfig:{drawingBufferColorSpace:Yt}},[Yt]:{primaries:e,whitePoint:n,transfer:lt,toXYZ:Yl,fromXYZ:Jl,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Yt}}}),r}const et=Ap();function _i(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Ns(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let ds;class Rp{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{ds===void 0&&(ds=Rr("canvas")),ds.width=e.width,ds.height=e.height;const i=ds.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=ds}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Rr("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let a=0;a<s.length;a++)s[a]=_i(s[a]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(_i(t[n]/255)*255):t[n]=_i(t[n]);return{data:t,width:e.width,height:e.height}}else return Ie("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Cp=0;class ol{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Cp++}),this.uuid=On(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?s.push(to(i[a].image)):s.push(to(i[a]))}else s=to(i);n.url=s}return t||(e.images[this.uuid]=n),n}}function to(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?Rp.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(Ie("Texture: Unable to serialize Texture."),{})}let Lp=0;const no=new z;class Wt extends Wi{constructor(e=Wt.DEFAULT_IMAGE,t=Wt.DEFAULT_MAPPING,n=Zn,i=Zn,s=Vt,a=gi,o=Cn,c=gn,l=Wt.DEFAULT_ANISOTROPY,h=Ui){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Lp++}),this.uuid=On(),this.name="",this.source=new ol(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new He(0,0),this.repeat=new He(1,1),this.center=new He(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ge,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(no).x}get height(){return this.source.getSize(no).y}get depth(){return this.source.getSize(no).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){Ie(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){Ie(`Texture.setValues(): property '${t}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Pd)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Os:e.x=e.x-Math.floor(e.x);break;case Zn:e.x=e.x<0?0:1;break;case Sa:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Os:e.y=e.y-Math.floor(e.y);break;case Zn:e.y=e.y<0?0:1;break;case Sa:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Wt.DEFAULT_IMAGE=null;Wt.DEFAULT_MAPPING=Pd;Wt.DEFAULT_ANISOTROPY=1;class ft{static{ft.prototype.isVector4=!0}constructor(e=0,t=0,n=0,i=1){this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i+a[12]*s,this.y=a[1]*t+a[5]*n+a[9]*i+a[13]*s,this.z=a[2]*t+a[6]*n+a[10]*i+a[14]*s,this.w=a[3]*t+a[7]*n+a[11]*i+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s;const c=e.elements,l=c[0],h=c[4],d=c[8],u=c[1],f=c[5],g=c[9],_=c[2],p=c[6],m=c[10];if(Math.abs(h-u)<.01&&Math.abs(d-_)<.01&&Math.abs(g-p)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+_)<.1&&Math.abs(g+p)<.1&&Math.abs(l+f+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const w=(l+1)/2,x=(f+1)/2,y=(m+1)/2,T=(h+u)/4,C=(d+_)/4,v=(g+p)/4;return w>x&&w>y?w<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(w),i=T/n,s=C/n):x>y?x<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(x),n=T/i,s=v/i):y<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(y),n=C/s,i=v/s),this.set(n,i,s,t),this}let b=Math.sqrt((p-g)*(p-g)+(d-_)*(d-_)+(u-h)*(u-h));return Math.abs(b)<.001&&(b=1),this.x=(p-g)/b,this.y=(d-_)/b,this.z=(u-h)/b,this.w=Math.acos((l+f+m-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=tt(this.x,e.x,t.x),this.y=tt(this.y,e.y,t.y),this.z=tt(this.z,e.z,t.z),this.w=tt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=tt(this.x,e,t),this.y=tt(this.y,e,t),this.z=tt(this.z,e,t),this.w=tt(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(tt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Pp extends Wi{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Vt,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new ft(0,0,e,t),this.scissorTest=!1,this.viewport=new ft(0,0,e,t),this.textures=[];const i={width:e,height:t,depth:n.depth},s=new Wt(i),a=n.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){const t={minFilter:Vt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n,this.textures[i].isData3DTexture!==!0&&(this.textures[i].isArrayTexture=this.textures[i].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const i=Object.assign({},e.textures[t].image);this.textures[t].source=new ol(i)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){const t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class zn extends Pp{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Wd extends Wt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Dt,this.minFilter=Dt,this.wrapR=Zn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Ip extends Wt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Dt,this.minFilter=Dt,this.wrapR=Zn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}}class Ve{static{Ve.prototype.isMatrix4=!0}constructor(e,t,n,i,s,a,o,c,l,h,d,u,f,g,_,p){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,a,o,c,l,h,d,u,f,g,_,p)}set(e,t,n,i,s,a,o,c,l,h,d,u,f,g,_,p){const m=this.elements;return m[0]=e,m[4]=t,m[8]=n,m[12]=i,m[1]=s,m[5]=a,m[9]=o,m[13]=c,m[2]=l,m[6]=h,m[10]=d,m[14]=u,m[3]=f,m[7]=g,m[11]=_,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ve().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const t=this.elements,n=e.elements,i=1/us.setFromMatrixColumn(e,0).length(),s=1/us.setFromMatrixColumn(e,1).length(),a=1/us.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,s=e.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(i),l=Math.sin(i),h=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){const u=a*h,f=a*d,g=o*h,_=o*d;t[0]=c*h,t[4]=-c*d,t[8]=l,t[1]=f+g*l,t[5]=u-_*l,t[9]=-o*c,t[2]=_-u*l,t[6]=g+f*l,t[10]=a*c}else if(e.order==="YXZ"){const u=c*h,f=c*d,g=l*h,_=l*d;t[0]=u+_*o,t[4]=g*o-f,t[8]=a*l,t[1]=a*d,t[5]=a*h,t[9]=-o,t[2]=f*o-g,t[6]=_+u*o,t[10]=a*c}else if(e.order==="ZXY"){const u=c*h,f=c*d,g=l*h,_=l*d;t[0]=u-_*o,t[4]=-a*d,t[8]=g+f*o,t[1]=f+g*o,t[5]=a*h,t[9]=_-u*o,t[2]=-a*l,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){const u=a*h,f=a*d,g=o*h,_=o*d;t[0]=c*h,t[4]=g*l-f,t[8]=u*l+_,t[1]=c*d,t[5]=_*l+u,t[9]=f*l-g,t[2]=-l,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){const u=a*c,f=a*l,g=o*c,_=o*l;t[0]=c*h,t[4]=_-u*d,t[8]=g*d+f,t[1]=d,t[5]=a*h,t[9]=-o*h,t[2]=-l*h,t[6]=f*d+g,t[10]=u-_*d}else if(e.order==="XZY"){const u=a*c,f=a*l,g=o*c,_=o*l;t[0]=c*h,t[4]=-d,t[8]=l*h,t[1]=u*d+_,t[5]=a*h,t[9]=f*d-g,t[2]=g*d-f,t[6]=o*h,t[10]=_*d+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Dp,e,Np)}lookAt(e,t,n){const i=this.elements;return pn.subVectors(e,t),pn.lengthSq()===0&&(pn.z=1),pn.normalize(),wi.crossVectors(n,pn),wi.lengthSq()===0&&(Math.abs(n.z)===1?pn.x+=1e-4:pn.z+=1e-4,pn.normalize(),wi.crossVectors(n,pn)),wi.normalize(),kr.crossVectors(pn,wi),i[0]=wi.x,i[4]=kr.x,i[8]=pn.x,i[1]=wi.y,i[5]=kr.y,i[9]=pn.y,i[2]=wi.z,i[6]=kr.z,i[10]=pn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],h=n[1],d=n[5],u=n[9],f=n[13],g=n[2],_=n[6],p=n[10],m=n[14],b=n[3],w=n[7],x=n[11],y=n[15],T=i[0],C=i[4],v=i[8],R=i[12],D=i[1],U=i[5],H=i[9],B=i[13],F=i[2],V=i[6],te=i[10],J=i[14],ue=i[3],Y=i[7],ce=i[11],he=i[15];return s[0]=a*T+o*D+c*F+l*ue,s[4]=a*C+o*U+c*V+l*Y,s[8]=a*v+o*H+c*te+l*ce,s[12]=a*R+o*B+c*J+l*he,s[1]=h*T+d*D+u*F+f*ue,s[5]=h*C+d*U+u*V+f*Y,s[9]=h*v+d*H+u*te+f*ce,s[13]=h*R+d*B+u*J+f*he,s[2]=g*T+_*D+p*F+m*ue,s[6]=g*C+_*U+p*V+m*Y,s[10]=g*v+_*H+p*te+m*ce,s[14]=g*R+_*B+p*J+m*he,s[3]=b*T+w*D+x*F+y*ue,s[7]=b*C+w*U+x*V+y*Y,s[11]=b*v+w*H+x*te+y*ce,s[15]=b*R+w*B+x*J+y*he,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],a=e[1],o=e[5],c=e[9],l=e[13],h=e[2],d=e[6],u=e[10],f=e[14],g=e[3],_=e[7],p=e[11],m=e[15],b=c*f-l*u,w=o*f-l*d,x=o*u-c*d,y=a*f-l*h,T=a*u-c*h,C=a*d-o*h;return t*(_*b-p*w+m*x)-n*(g*b-p*y+m*T)+i*(g*w-_*y+m*C)-s*(g*x-_*T+p*C)}determinantAffine(){const e=this.elements,t=e[0],n=e[4],i=e[8],s=e[1],a=e[5],o=e[9],c=e[2],l=e[6],h=e[10];return t*(a*h-o*l)-n*(s*h-o*c)+i*(s*l-a*c)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8],d=e[9],u=e[10],f=e[11],g=e[12],_=e[13],p=e[14],m=e[15],b=t*o-n*a,w=t*c-i*a,x=t*l-s*a,y=n*c-i*o,T=n*l-s*o,C=i*l-s*c,v=h*_-d*g,R=h*p-u*g,D=h*m-f*g,U=d*p-u*_,H=d*m-f*_,B=u*m-f*p,F=b*B-w*H+x*U+y*D-T*R+C*v;if(F===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const V=1/F;return e[0]=(o*B-c*H+l*U)*V,e[1]=(i*H-n*B-s*U)*V,e[2]=(_*C-p*T+m*y)*V,e[3]=(u*T-d*C-f*y)*V,e[4]=(c*D-a*B-l*R)*V,e[5]=(t*B-i*D+s*R)*V,e[6]=(p*x-g*C-m*w)*V,e[7]=(h*C-u*x+f*w)*V,e[8]=(a*H-o*D+l*v)*V,e[9]=(n*D-t*H-s*v)*V,e[10]=(g*T-_*x+m*b)*V,e[11]=(d*x-h*T-f*b)*V,e[12]=(o*R-a*U-c*v)*V,e[13]=(t*U-n*R+i*v)*V,e[14]=(_*w-g*y-p*b)*V,e[15]=(h*y-d*w+u*b)*V,this}scale(e){const t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),s=1-n,a=e.x,o=e.y,c=e.z,l=s*a,h=s*o;return this.set(l*a+n,l*o-i*c,l*c+i*o,0,l*o+i*c,h*o+n,h*c-i*a,0,l*c-i*o,h*c+i*a,s*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,a){return this.set(1,n,s,0,e,1,a,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,s=t._x,a=t._y,o=t._z,c=t._w,l=s+s,h=a+a,d=o+o,u=s*l,f=s*h,g=s*d,_=a*h,p=a*d,m=o*d,b=c*l,w=c*h,x=c*d,y=n.x,T=n.y,C=n.z;return i[0]=(1-(_+m))*y,i[1]=(f+x)*y,i[2]=(g-w)*y,i[3]=0,i[4]=(f-x)*T,i[5]=(1-(u+m))*T,i[6]=(p+b)*T,i[7]=0,i[8]=(g+w)*C,i[9]=(p-b)*C,i[10]=(1-(u+_))*C,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;e.x=i[12],e.y=i[13],e.z=i[14];const s=this.determinantAffine();if(s===0)return n.set(1,1,1),t.identity(),this;let a=us.set(i[0],i[1],i[2]).length();const o=us.set(i[4],i[5],i[6]).length(),c=us.set(i[8],i[9],i[10]).length();s<0&&(a=-a),Dn.copy(this);const l=1/a,h=1/o,d=1/c;return Dn.elements[0]*=l,Dn.elements[1]*=l,Dn.elements[2]*=l,Dn.elements[4]*=h,Dn.elements[5]*=h,Dn.elements[6]*=h,Dn.elements[8]*=d,Dn.elements[9]*=d,Dn.elements[10]*=d,t.setFromRotationMatrix(Dn),n.x=a,n.y=o,n.z=c,this}makePerspective(e,t,n,i,s,a,o=Qn,c=!1){const l=this.elements,h=2*s/(t-e),d=2*s/(n-i),u=(t+e)/(t-e),f=(n+i)/(n-i);let g,_;if(c)g=s/(a-s),_=a*s/(a-s);else if(o===Qn)g=-(a+s)/(a-s),_=-2*a*s/(a-s);else if(o===Ar)g=-a/(a-s),_=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=d,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,i,s,a,o=Qn,c=!1){const l=this.elements,h=2/(t-e),d=2/(n-i),u=-(t+e)/(t-e),f=-(n+i)/(n-i);let g,_;if(c)g=1/(a-s),_=a/(a-s);else if(o===Qn)g=-2/(a-s),_=-(a+s)/(a-s);else if(o===Ar)g=-1/(a-s),_=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=0,l[12]=u,l[1]=0,l[5]=d,l[9]=0,l[13]=f,l[2]=0,l[6]=0,l[10]=g,l[14]=_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const us=new z,Dn=new Ve,Dp=new z(0,0,0),Np=new z(1,1,1),wi=new z,kr=new z,pn=new z,$l=new Ve,Zl=new Pn;class Hi{constructor(e=0,t=0,n=0,i=Hi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,s=i[0],a=i[4],o=i[8],c=i[1],l=i[5],h=i[9],d=i[2],u=i[6],f=i[10];switch(t){case"XYZ":this._y=Math.asin(tt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(u,l),this._z=0);break;case"YXZ":this._x=Math.asin(-tt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(tt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-tt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(tt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-tt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,l),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-h,f),this._y=0);break;default:Ie("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return $l.makeRotationFromQuaternion(e),this.setFromRotationMatrix($l,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Zl.setFromEuler(this),this.setFromQuaternion(Zl,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Hi.DEFAULT_ORDER="XYZ";class qd{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let kp=0;const Ql=new z,fs=new Pn,li=new Ve,Fr=new z,$s=new z,Fp=new z,Up=new Pn,eh=new z(1,0,0),th=new z(0,1,0),nh=new z(0,0,1),ih={type:"added"},Op={type:"removed"},ps={type:"childadded",child:null},io={type:"childremoved",child:null};class pt extends Wi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:kp++}),this.uuid=On(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=pt.DEFAULT_UP.clone();const e=new z,t=new Hi,n=new Pn,i=new z(1,1,1);function s(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Ve},normalMatrix:{value:new Ge}}),this.matrix=new Ve,this.matrixWorld=new Ve,this.matrixAutoUpdate=pt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=pt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new qd,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return fs.setFromAxisAngle(e,t),this.quaternion.multiply(fs),this}rotateOnWorldAxis(e,t){return fs.setFromAxisAngle(e,t),this.quaternion.premultiply(fs),this}rotateX(e){return this.rotateOnAxis(eh,e)}rotateY(e){return this.rotateOnAxis(th,e)}rotateZ(e){return this.rotateOnAxis(nh,e)}translateOnAxis(e,t){return Ql.copy(e).applyQuaternion(this.quaternion),this.position.add(Ql.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(eh,e)}translateY(e){return this.translateOnAxis(th,e)}translateZ(e){return this.translateOnAxis(nh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(li.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Fr.copy(e):Fr.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),$s.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?li.lookAt($s,Fr,this.up):li.lookAt(Fr,$s,this.up),this.quaternion.setFromRotationMatrix(li),i&&(li.extractRotation(i.matrixWorld),fs.setFromRotationMatrix(li),this.quaternion.premultiply(fs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Oe("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(ih),ps.child=e,this.dispatchEvent(ps),ps.child=null):Oe("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Op),io.child=e,this.dispatchEvent(io),io.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),li.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),li.multiply(e.parent.matrixWorld)),e.applyMatrix4(li),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(ih),ps.child=e,this.dispatchEvent(ps),ps.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let s=0,a=i.length;s<a;s++)i[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose($s,e,Fp),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose($s,Up,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,n=e.y,i=e.z,s=this.matrix.elements;s[12]+=t-s[0]*t-s[4]*n-s[8]*i,s[13]+=n-s[1]*t-s[5]*n-s[9]*i,s[14]+=i-s[2]*t-s[6]*n-s[10]*i}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){const s=this.children;for(let a=0,o=s.length;a<o;a++)s[a].updateWorldMatrix(!1,!0,n)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,i.name=this.name,i.castShadow=this.castShadow,i.receiveShadow=this.receiveShadow,i.visible=this.visible,i.frustumCulled=this.frustumCulled,i.renderOrder=this.renderOrder,i.static=this.static,i.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.pivot!==null&&(i.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(i.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(i.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(o=>({...o})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(e),i.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function s(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const d=c[l];s(e.shapes,d)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(s(e.materials,this.material[c]));i.material=o}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];i.animations.push(s(e.animations,c))}}if(t){const o=a(e.geometries),c=a(e.materials),l=a(e.textures),h=a(e.images),d=a(e.shapes),u=a(e.skeletons),f=a(e.animations),g=a(e.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),u.length>0&&(n.skeletons=u),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=i,n;function a(o){const c=[];for(const l in o){const h=o[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}pt.DEFAULT_UP=new z(0,1,0);pt.DEFAULT_MATRIX_AUTO_UPDATE=!0;pt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class an extends pt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const zp={type:"move"};class so{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new an,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new an,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new an,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new z,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,a=null;const o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(const _ of e.hand.values()){const p=t.getJointPose(_,n),m=this._getHandJoint(l,_);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}const h=l.joints["index-finger-tip"],d=l.joints["thumb-tip"],u=h.position.distanceTo(d.position),f=.02,g=.005;l.inputState.pinching&&u>f+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&u<=f-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(zp)))}return o!==null&&(o.visible=i!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new an;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const Xd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ai={h:0,s:0,l:0},Ur={h:0,s:0,l:0};function ro(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}class be{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Yt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,et.colorSpaceToWorking(this,t),this}setRGB(e,t,n,i=et.workingColorSpace){return this.r=e,this.g=t,this.b=n,et.colorSpaceToWorking(this,i),this}setHSL(e,t,n,i=et.workingColorSpace){if(e=al(e,1),t=tt(t,0,1),n=tt(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,a=2*n-s;this.r=ro(a,s,e+1/3),this.g=ro(a,s,e),this.b=ro(a,s,e-1/3)}return et.colorSpaceToWorking(this,i),this}setStyle(e,t=Yt){function n(s){s!==void 0&&parseFloat(s)<1&&Ie("Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:Ie("Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=i[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);Ie("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Yt){const n=Xd[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Ie("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=_i(e.r),this.g=_i(e.g),this.b=_i(e.b),this}copyLinearToSRGB(e){return this.r=Ns(e.r),this.g=Ns(e.g),this.b=Ns(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Yt){return et.workingToColorSpace(tn.copy(this),e),Math.round(tt(tn.r*255,0,255))*65536+Math.round(tt(tn.g*255,0,255))*256+Math.round(tt(tn.b*255,0,255))}getHexString(e=Yt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=et.workingColorSpace){et.workingToColorSpace(tn.copy(this),t);const n=tn.r,i=tn.g,s=tn.b,a=Math.max(n,i,s),o=Math.min(n,i,s);let c,l;const h=(o+a)/2;if(o===a)c=0,l=0;else{const d=a-o;switch(l=h<=.5?d/(a+o):d/(2-a-o),a){case n:c=(i-s)/d+(i<s?6:0);break;case i:c=(s-n)/d+2;break;case s:c=(n-i)/d+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=et.workingColorSpace){return et.workingToColorSpace(tn.copy(this),t),e.r=tn.r,e.g=tn.g,e.b=tn.b,e}getStyle(e=Yt){et.workingToColorSpace(tn.copy(this),e);const t=tn.r,n=tn.g,i=tn.b;return e!==Yt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(Ai),this.setHSL(Ai.h+e,Ai.s+t,Ai.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Ai),e.getHSL(Ur);const n=_r(Ai.h,Ur.h,t),i=_r(Ai.s,Ur.s,t),s=_r(Ai.l,Ur.l,t);return this.setHSL(n,i,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*i,this.g=s[1]*t+s[4]*n+s[7]*i,this.b=s[2]*t+s[5]*n+s[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const tn=new be;be.NAMES=Xd;class cl{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new be(e),this.near=t,this.far=n}clone(){return new cl(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Bp extends pt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Hi,this.environmentIntensity=1,this.environmentRotation=new Hi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}}const Nn=new z,hi=new z,ao=new z,di=new z,ms=new z,gs=new z,sh=new z,oo=new z,co=new z,lo=new z,ho=new ft,uo=new ft,fo=new ft;class Un{constructor(e=new z,t=new z,n=new z){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),Nn.subVectors(e,t),i.cross(Nn);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){Nn.subVectors(i,t),hi.subVectors(n,t),ao.subVectors(e,t);const a=Nn.dot(Nn),o=Nn.dot(hi),c=Nn.dot(ao),l=hi.dot(hi),h=hi.dot(ao),d=a*l-o*o;if(d===0)return s.set(0,0,0),null;const u=1/d,f=(l*c-o*h)*u,g=(a*h-o*c)*u;return s.set(1-f-g,g,f)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,di)===null?!1:di.x>=0&&di.y>=0&&di.x+di.y<=1}static getInterpolation(e,t,n,i,s,a,o,c){return this.getBarycoord(e,t,n,i,di)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,di.x),c.addScaledVector(a,di.y),c.addScaledVector(o,di.z),c)}static getInterpolatedAttribute(e,t,n,i,s,a){return ho.setScalar(0),uo.setScalar(0),fo.setScalar(0),ho.fromBufferAttribute(e,t),uo.fromBufferAttribute(e,n),fo.fromBufferAttribute(e,i),a.setScalar(0),a.addScaledVector(ho,s.x),a.addScaledVector(uo,s.y),a.addScaledVector(fo,s.z),a}static isFrontFacing(e,t,n,i){return Nn.subVectors(n,t),hi.subVectors(e,t),Nn.cross(hi).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Nn.subVectors(this.c,this.b),hi.subVectors(this.a,this.b),Nn.cross(hi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Un.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Un.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,s){return Un.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return Un.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Un.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,s=this.c;let a,o;ms.subVectors(i,n),gs.subVectors(s,n),oo.subVectors(e,n);const c=ms.dot(oo),l=gs.dot(oo);if(c<=0&&l<=0)return t.copy(n);co.subVectors(e,i);const h=ms.dot(co),d=gs.dot(co);if(h>=0&&d<=h)return t.copy(i);const u=c*d-h*l;if(u<=0&&c>=0&&h<=0)return a=c/(c-h),t.copy(n).addScaledVector(ms,a);lo.subVectors(e,s);const f=ms.dot(lo),g=gs.dot(lo);if(g>=0&&f<=g)return t.copy(s);const _=f*l-c*g;if(_<=0&&l>=0&&g<=0)return o=l/(l-g),t.copy(n).addScaledVector(gs,o);const p=h*g-f*d;if(p<=0&&d-h>=0&&f-g>=0)return sh.subVectors(s,i),o=(d-h)/(d-h+(f-g)),t.copy(i).addScaledVector(sh,o);const m=1/(p+_+u);return a=_*m,o=u*m,t.copy(n).addScaledVector(ms,a).addScaledVector(gs,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class In{constructor(e=new z(1/0,1/0,1/0),t=new z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(kn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(kn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=kn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,kn):kn.fromBufferAttribute(s,a),kn.applyMatrix4(e.matrixWorld),this.expandByPoint(kn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Or.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Or.copy(n.boundingBox)),Or.applyMatrix4(e.matrixWorld),this.union(Or)}const i=e.children;for(let s=0,a=i.length;s<a;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,kn),kn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Zs),zr.subVectors(this.max,Zs),bs.subVectors(e.a,Zs),xs.subVectors(e.b,Zs),_s.subVectors(e.c,Zs),Ri.subVectors(xs,bs),Ci.subVectors(_s,xs),ji.subVectors(bs,_s);let t=[0,-Ri.z,Ri.y,0,-Ci.z,Ci.y,0,-ji.z,ji.y,Ri.z,0,-Ri.x,Ci.z,0,-Ci.x,ji.z,0,-ji.x,-Ri.y,Ri.x,0,-Ci.y,Ci.x,0,-ji.y,ji.x,0];return!po(t,bs,xs,_s,zr)||(t=[1,0,0,0,1,0,0,0,1],!po(t,bs,xs,_s,zr))?!1:(Br.crossVectors(Ri,Ci),t=[Br.x,Br.y,Br.z],po(t,bs,xs,_s,zr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,kn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(kn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ui[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ui[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ui[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ui[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ui[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ui[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ui[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ui[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ui),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const ui=[new z,new z,new z,new z,new z,new z,new z,new z],kn=new z,Or=new In,bs=new z,xs=new z,_s=new z,Ri=new z,Ci=new z,ji=new z,Zs=new z,zr=new z,Br=new z,Yi=new z;function po(r,e,t,n,i){for(let s=0,a=r.length-3;s<=a;s+=3){Yi.fromArray(r,s);const o=i.x*Math.abs(Yi.x)+i.y*Math.abs(Yi.y)+i.z*Math.abs(Yi.z),c=e.dot(Yi),l=t.dot(Yi),h=n.dot(Yi);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>o)return!1}return!0}const Ut=new z,Gr=new He;let Gp=0;class Rt extends Wi{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Gp++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Hd,this.updateRanges=[],this.gpuType=Rn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Gr.fromBufferAttribute(this,t),Gr.applyMatrix3(e),this.setXY(t,Gr.x,Gr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Ut.fromBufferAttribute(this,t),Ut.applyMatrix3(e),this.setXYZ(t,Ut.x,Ut.y,Ut.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Ut.fromBufferAttribute(this,t),Ut.applyMatrix4(e),this.setXYZ(t,Ut.x,Ut.y,Ut.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Ut.fromBufferAttribute(this,t),Ut.applyNormalMatrix(e),this.setXYZ(t,Ut.x,Ut.y,Ut.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Ut.fromBufferAttribute(this,t),Ut.transformDirection(e),this.setXYZ(t,Ut.x,Ut.y,Ut.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Fn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=ht(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Fn(t,this.array)),t}setX(e,t){return this.normalized&&(t=ht(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Fn(t,this.array)),t}setY(e,t){return this.normalized&&(t=ht(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Fn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=ht(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Fn(t,this.array)),t}setW(e,t){return this.normalized&&(t=ht(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=ht(t,this.array),n=ht(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=ht(t,this.array),n=ht(n,this.array),i=ht(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=ht(t,this.array),n=ht(n,this.array),i=ht(i,this.array),s=ht(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}}class Kd extends Rt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class jd extends Rt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class mt extends Rt{constructor(e,t,n){super(new Float32Array(e),t,n)}}const Hp=new In,Qs=new z,mo=new z;class si{constructor(e=new z,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Hp.setFromPoints(e).getCenter(n);let i=0;for(let s=0,a=e.length;s<a;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Qs.subVectors(e,this.center);const t=Qs.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(Qs,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(mo.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Qs.copy(e.center).add(mo)),this.expandByPoint(Qs.copy(e.center).sub(mo))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let Vp=0;const Sn=new Ve,go=new pt,vs=new z,mn=new In,er=new In,jt=new z;class Ct extends Wi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Vp++}),this.uuid=On(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(rp(e)?jd:Kd)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Ge().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Sn.makeRotationFromQuaternion(e),this.applyMatrix4(Sn),this}rotateX(e){return Sn.makeRotationX(e),this.applyMatrix4(Sn),this}rotateY(e){return Sn.makeRotationY(e),this.applyMatrix4(Sn),this}rotateZ(e){return Sn.makeRotationZ(e),this.applyMatrix4(Sn),this}translate(e,t,n){return Sn.makeTranslation(e,t,n),this.applyMatrix4(Sn),this}scale(e,t,n){return Sn.makeScale(e,t,n),this.applyMatrix4(Sn),this}lookAt(e){return go.lookAt(e),go.updateMatrix(),this.applyMatrix4(go.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(vs).negate(),this.translate(vs.x,vs.y,vs.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let i=0,s=e.length;i<s;i++){const a=e[i];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new mt(n,3))}else{const n=Math.min(e.length,t.count);for(let i=0;i<n;i++){const s=e[i];t.setXYZ(i,s.x,s.y,s.z||0)}e.length>t.count&&Ie("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new In);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Oe("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new z(-1/0,-1/0,-1/0),new z(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const s=t[n];mn.setFromBufferAttribute(s),this.morphTargetsRelative?(jt.addVectors(this.boundingBox.min,mn.min),this.boundingBox.expandByPoint(jt),jt.addVectors(this.boundingBox.max,mn.max),this.boundingBox.expandByPoint(jt)):(this.boundingBox.expandByPoint(mn.min),this.boundingBox.expandByPoint(mn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Oe('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new si);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Oe("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new z,1/0);return}if(e){const n=this.boundingSphere.center;if(mn.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];er.setFromBufferAttribute(o),this.morphTargetsRelative?(jt.addVectors(mn.min,er.min),mn.expandByPoint(jt),jt.addVectors(mn.max,er.max),mn.expandByPoint(jt)):(mn.expandByPoint(er.min),mn.expandByPoint(er.max))}mn.getCenter(n);let i=0;for(let s=0,a=e.count;s<a;s++)jt.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(jt));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],c=this.morphTargetsRelative;for(let l=0,h=o.count;l<h;l++)jt.fromBufferAttribute(o,l),c&&(vs.fromBufferAttribute(e,l),jt.add(vs)),i=Math.max(i,n.distanceToSquared(jt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&Oe('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Oe("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,i=t.normal,s=t.uv;let a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new Rt(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));const o=[],c=[];for(let v=0;v<n.count;v++)o[v]=new z,c[v]=new z;const l=new z,h=new z,d=new z,u=new He,f=new He,g=new He,_=new z,p=new z;function m(v,R,D){l.fromBufferAttribute(n,v),h.fromBufferAttribute(n,R),d.fromBufferAttribute(n,D),u.fromBufferAttribute(s,v),f.fromBufferAttribute(s,R),g.fromBufferAttribute(s,D),h.sub(l),d.sub(l),f.sub(u),g.sub(u);const U=1/(f.x*g.y-g.x*f.y);isFinite(U)&&(_.copy(h).multiplyScalar(g.y).addScaledVector(d,-f.y).multiplyScalar(U),p.copy(d).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(U),o[v].add(_),o[R].add(_),o[D].add(_),c[v].add(p),c[R].add(p),c[D].add(p))}let b=this.groups;b.length===0&&(b=[{start:0,count:e.count}]);for(let v=0,R=b.length;v<R;++v){const D=b[v],U=D.start,H=D.count;for(let B=U,F=U+H;B<F;B+=3)m(e.getX(B+0),e.getX(B+1),e.getX(B+2))}const w=new z,x=new z,y=new z,T=new z;function C(v){y.fromBufferAttribute(i,v),T.copy(y);const R=o[v];w.copy(R),w.sub(y.multiplyScalar(y.dot(R))).normalize(),x.crossVectors(T,R);const U=x.dot(c[v])<0?-1:1;a.setXYZW(v,w.x,w.y,w.z,U)}for(let v=0,R=b.length;v<R;++v){const D=b[v],U=D.start,H=D.count;for(let B=U,F=U+H;B<F;B+=3)C(e.getX(B+0)),C(e.getX(B+1)),C(e.getX(B+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new Rt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let u=0,f=n.count;u<f;u++)n.setXYZ(u,0,0,0);const i=new z,s=new z,a=new z,o=new z,c=new z,l=new z,h=new z,d=new z;if(e)for(let u=0,f=e.count;u<f;u+=3){const g=e.getX(u+0),_=e.getX(u+1),p=e.getX(u+2);i.fromBufferAttribute(t,g),s.fromBufferAttribute(t,_),a.fromBufferAttribute(t,p),h.subVectors(a,s),d.subVectors(i,s),h.cross(d),o.fromBufferAttribute(n,g),c.fromBufferAttribute(n,_),l.fromBufferAttribute(n,p),o.add(h),c.add(h),l.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(_,c.x,c.y,c.z),n.setXYZ(p,l.x,l.y,l.z)}else for(let u=0,f=t.count;u<f;u+=3)i.fromBufferAttribute(t,u+0),s.fromBufferAttribute(t,u+1),a.fromBufferAttribute(t,u+2),h.subVectors(a,s),d.subVectors(i,s),h.cross(d),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)jt.fromBufferAttribute(e,t),jt.normalize(),e.setXYZ(t,jt.x,jt.y,jt.z)}toNonIndexed(){function e(o,c){const l=o.array,h=o.itemSize,d=o.normalized,u=new l.constructor(c.length*h);let f=0,g=0;for(let _=0,p=c.length;_<p;_++){o.isInterleavedBufferAttribute?f=c[_]*o.data.stride+o.offset:f=c[_]*h;for(let m=0;m<h;m++)u[g++]=l[f++]}return new Rt(u,h,d)}if(this.index===null)return Ie("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Ct,n=this.index.array,i=this.attributes;for(const o in i){const c=i[o],l=e(c,n);t.setAttribute(o,l)}const s=this.morphAttributes;for(const o in s){const c=[],l=s[o];for(let h=0,d=l.length;h<d;h++){const u=l[h],f=e(u,n);c.push(f)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const l=n[c];e.data.attributes[c]=l.toJSON(e.data)}const i={};let s=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let d=0,u=l.length;d<u;d++){const f=l[d];h.push(f.toJSON(e.data))}h.length>0&&(i[c]=h,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const i=e.attributes;for(const l in i){const h=i[l];this.setAttribute(l,h.clone(t))}const s=e.morphAttributes;for(const l in s){const h=[],d=s[l];for(let u=0,f=d.length;u<f;u++)h.push(d[u].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let l=0,h=a.length;l<h;l++){const d=a[l];this.addGroup(d.start,d.count,d.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Wp{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Hd,this.updateRanges=[],this.version=0,this.uuid=On()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,s=this.stride;i<s;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=On()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=On()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));const t={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return t.usage=this.usage,t}}const cn=new z;class ll{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)cn.fromBufferAttribute(this,t),cn.applyMatrix4(e),this.setXYZ(t,cn.x,cn.y,cn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)cn.fromBufferAttribute(this,t),cn.applyNormalMatrix(e),this.setXYZ(t,cn.x,cn.y,cn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)cn.fromBufferAttribute(this,t),cn.transformDirection(e),this.setXYZ(t,cn.x,cn.y,cn.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Fn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=ht(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=ht(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=ht(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=ht(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=ht(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Fn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Fn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Fn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Fn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=ht(t,this.array),n=ht(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=ht(t,this.array),n=ht(n,this.array),i=ht(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=ht(t,this.array),n=ht(n,this.array),i=ht(i,this.array),s=ht(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=s,this}clone(e){if(e===void 0){Ra("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return new Rt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new ll(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){Ra("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const bo=new z,qp=new z,Xp=new Ge;class Ni{constructor(e=new z(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=bo.subVectors(n,t).cross(qp.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){const i=e.delta(bo),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/s;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(i,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Xp.getNormalMatrix(e),i=this.coplanarPoint(bo).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}}let Kp=0;class Bn extends Wi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Kp++}),this.uuid=On(),this.name="",this.type="Material",this.blending=Is,this.side=Gi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Sd,this.blendDst=yd,this.blendEquation=ws,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new be(0,0,0),this.blendAlpha=0,this.depthFunc=Sr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Zf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Za,this.stencilZFail=Za,this.stencilZPass=Za,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){Ie(`Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){Ie(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector2&&n&&n.isVector2||i&&i.isEuler&&n&&n.isEuler||i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(s=>s.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const a=[];for(const o in s){const c=s[o];delete c.metadata,a.push(c)}return a}if(t){const s=i(e.textures),a=i(e.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new be().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new Ni().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new He().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new He().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const fi=new z,xo=new z,Hr=new z,Vr=new z;class Oa{constructor(e=new z,t=new z(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,fi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=fi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(fi.copy(this.origin).addScaledVector(this.direction,t),fi.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){xo.copy(e).add(t).multiplyScalar(.5),Hr.copy(t).sub(e).normalize(),Vr.copy(this.origin).sub(xo);const s=e.distanceTo(t)*.5,a=-this.direction.dot(Hr),o=Vr.dot(this.direction),c=-Vr.dot(Hr),l=Vr.lengthSq(),h=Math.abs(1-a*a);let d,u,f,g;if(h>0)if(d=a*c-o,u=a*o-c,g=s*h,d>=0)if(u>=-g)if(u<=g){const _=1/h;d*=_,u*=_,f=d*(d+a*u+2*o)+u*(a*d+u+2*c)+l}else u=s,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*c)+l;else u=-s,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*c)+l;else u<=-g?(d=Math.max(0,-(-a*s+o)),u=d>0?-s:Math.min(Math.max(-s,-c),s),f=-d*d+u*(u+2*c)+l):u<=g?(d=0,u=Math.min(Math.max(-s,-c),s),f=u*(u+2*c)+l):(d=Math.max(0,-(a*s+o)),u=d>0?s:Math.min(Math.max(-s,-c),s),f=-d*d+u*(u+2*c)+l);else u=a>0?-s:s,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,d),i&&i.copy(xo).addScaledVector(Hr,u),f}intersectSphere(e,t){if(e.radius<0)return null;fi.subVectors(e.center,this.origin);const n=fi.dot(this.direction),i=fi.dot(fi)-n*n,s=e.radius*e.radius;if(i>s)return null;const a=Math.sqrt(s-i),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,a,o,c;const l=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return l>=0?(n=(e.min.x-u.x)*l,i=(e.max.x-u.x)*l):(n=(e.max.x-u.x)*l,i=(e.min.x-u.x)*l),h>=0?(s=(e.min.y-u.y)*h,a=(e.max.y-u.y)*h):(s=(e.max.y-u.y)*h,a=(e.min.y-u.y)*h),n>a||s>i||((s>n||isNaN(n))&&(n=s),(a<i||isNaN(i))&&(i=a),d>=0?(o=(e.min.z-u.z)*d,c=(e.max.z-u.z)*d):(o=(e.max.z-u.z)*d,c=(e.min.z-u.z)*d),n>c||o>i)||((o>n||n!==n)&&(n=o),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,fi)!==null}intersectTriangle(e,t,n,i,s){const a=this.origin,o=this.direction,c=o.x,l=o.y,h=o.z,d=e.x-a.x,u=e.y-a.y,f=e.z-a.z,g=t.x-a.x,_=t.y-a.y,p=t.z-a.z,m=n.x-a.x,b=n.y-a.y,w=n.z-a.z,x=Math.abs(c),y=Math.abs(l),T=Math.abs(h);let C,v,R,D,U,H,B,F,V,te,J,ue;if(x>=y&&x>=T?(R=c,H=d,V=g,ue=m,c>=0?(C=l,v=h,D=u,U=f,B=_,F=p,te=b,J=w):(C=h,v=l,D=f,U=u,B=p,F=_,te=w,J=b)):y>=T?(R=l,H=u,V=_,ue=b,l>=0?(C=h,v=c,D=f,U=d,B=p,F=g,te=w,J=m):(C=c,v=h,D=d,U=f,B=g,F=p,te=m,J=w)):(R=h,H=f,V=p,ue=w,h>=0?(C=c,v=l,D=d,U=u,B=g,F=_,te=m,J=b):(C=l,v=c,D=u,U=d,B=_,F=g,te=b,J=m)),R===0)return null;const Y=C/R,ce=v/R,he=1/R,Me=D-Y*H,Ae=U-ce*H,Je=B-Y*V,je=F-ce*V,Be=te-Y*ue,se=J-ce*ue,de=Be*je-se*Je,Te=Me*se-Ae*Be,ze=Je*Ae-je*Me;if(i){if(de<0||Te<0||ze<0)return null}else if((de<0||Te<0||ze<0)&&(de>0||Te>0||ze>0))return null;const ye=de+Te+ze;if(ye===0)return null;const qe=he*(de*H+Te*V+ze*ue);return(ye>0?qe<0:qe>0)?null:this.at(qe/ye,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Tt extends Bn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new be(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Hi,this.combine=Ed,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const rh=new Ve,Ji=new Oa,Wr=new si,ah=new z,qr=new z,Xr=new z,Kr=new z,_o=new z,jr=new z,oh=new z,Yr=new z;class We extends pt{constructor(e=new Ct,t=new Tt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const o=this.morphTargetInfluences;if(s&&o){jr.set(0,0,0);for(let c=0,l=s.length;c<l;c++){const h=o[c],d=s[c];h!==0&&(_o.fromBufferAttribute(d,e),a?jr.addScaledVector(_o,h):jr.addScaledVector(_o.sub(t),h))}t.add(jr)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Wr.copy(n.boundingSphere),Wr.applyMatrix4(s),Ji.copy(e.ray).recast(e.near),!(Wr.containsPoint(Ji.origin)===!1&&(Ji.intersectSphere(Wr,ah)===null||Ji.origin.distanceToSquared(ah)>(e.far-e.near)**2))&&(rh.copy(s).invert(),Ji.copy(e.ray).applyMatrix4(rh),!(n.boundingBox!==null&&Ji.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Ji)))}_computeIntersections(e,t,n){let i;const s=this.geometry,a=this.material,o=s.index,c=s.attributes.position,l=s.attributes.uv,h=s.attributes.uv1,d=s.attributes.normal,u=s.groups,f=s.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,_=u.length;g<_;g++){const p=u[g],m=a[p.materialIndex],b=Math.max(p.start,f.start),w=Math.min(o.count,Math.min(p.start+p.count,f.start+f.count));for(let x=b,y=w;x<y;x+=3){const T=o.getX(x),C=o.getX(x+1),v=o.getX(x+2);i=Jr(this,m,e,n,l,h,d,T,C,v),i&&(i.faceIndex=Math.floor(x/3),i.face.materialIndex=p.materialIndex,t.push(i))}}else{const g=Math.max(0,f.start),_=Math.min(o.count,f.start+f.count);for(let p=g,m=_;p<m;p+=3){const b=o.getX(p),w=o.getX(p+1),x=o.getX(p+2);i=Jr(this,a,e,n,l,h,d,b,w,x),i&&(i.faceIndex=Math.floor(p/3),t.push(i))}}else if(c!==void 0)if(Array.isArray(a))for(let g=0,_=u.length;g<_;g++){const p=u[g],m=a[p.materialIndex],b=Math.max(p.start,f.start),w=Math.min(c.count,Math.min(p.start+p.count,f.start+f.count));for(let x=b,y=w;x<y;x+=3){const T=x,C=x+1,v=x+2;i=Jr(this,m,e,n,l,h,d,T,C,v),i&&(i.faceIndex=Math.floor(x/3),i.face.materialIndex=p.materialIndex,t.push(i))}}else{const g=Math.max(0,f.start),_=Math.min(c.count,f.start+f.count);for(let p=g,m=_;p<m;p+=3){const b=p,w=p+1,x=p+2;i=Jr(this,a,e,n,l,h,d,b,w,x),i&&(i.faceIndex=Math.floor(p/3),t.push(i))}}}}function jp(r,e,t,n,i,s,a,o){let c;if(e.side===fn?c=n.intersectTriangle(a,s,i,!0,o):c=n.intersectTriangle(i,s,a,e.side===Gi,o),c===null)return null;Yr.copy(o),Yr.applyMatrix4(r.matrixWorld);const l=t.ray.origin.distanceTo(Yr);return l<t.near||l>t.far?null:{distance:l,point:Yr.clone(),object:r}}function Jr(r,e,t,n,i,s,a,o,c,l){r.getVertexPosition(o,qr),r.getVertexPosition(c,Xr),r.getVertexPosition(l,Kr);const h=jp(r,e,t,n,qr,Xr,Kr,oh);if(h){const d=new z;Un.getBarycoord(oh,qr,Xr,Kr,d),i&&(h.uv=Un.getInterpolatedAttribute(i,o,c,l,d,new He)),s&&(h.uv1=Un.getInterpolatedAttribute(s,o,c,l,d,new He)),a&&(h.normal=Un.getInterpolatedAttribute(a,o,c,l,d,new z),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const u={a:o,b:c,c:l,normal:new z,materialIndex:0};Un.getNormal(qr,Xr,Kr,u.normal),h.face=u,h.barycoord=d}return h}const tr=new ft,ch=new ft,lh=new ft,Yp=new ft,hh=new Ve,$r=new z,vo=new si,dh=new Ve,Mo=new Oa;class Jp extends We{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Vl,this.bindMatrix=new Ve,this.bindMatrixInverse=new Ve,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new In),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,$r),this.boundingBox.expandByPoint($r)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new si),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,$r),this.boundingSphere.expandByPoint($r)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),vo.copy(this.boundingSphere),vo.applyMatrix4(i),e.ray.intersectsSphere(vo)!==!1&&(dh.copy(i).invert(),Mo.copy(e.ray).applyMatrix4(dh),!(this.boundingBox!==null&&Mo.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Mo)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new ft,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);const s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Vl?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Xf?this.bindMatrixInverse.copy(this.bindMatrix).invert():Ie("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,i=this.geometry;ch.fromBufferAttribute(i.attributes.skinIndex,e),lh.fromBufferAttribute(i.attributes.skinWeight,e),t.isVector4?(tr.copy(t),t.set(0,0,0,0)):(tr.set(...t,1),t.set(0,0,0)),tr.applyMatrix4(this.bindMatrix);for(let s=0;s<4;s++){const a=lh.getComponent(s);if(a!==0){const o=ch.getComponent(s);hh.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(Yp.copy(tr).applyMatrix4(hh),a)}}return t.isVector4&&(t.w=tr.w),t.applyMatrix4(this.bindMatrixInverse)}}class Yd extends pt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class za extends Wt{constructor(e=null,t=1,n=1,i,s,a,o,c,l=Dt,h=Dt,d,u){super(null,a,o,c,l,h,i,s,d,u),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const uh=new Ve,$p=new Ve;class hl{constructor(e=[],t=[]){this.uuid=On(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){Ie("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new Ve)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new Ve;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let s=0,a=e.length;s<a;s++){const o=e[s]?e[s].matrixWorld:$p;uh.multiplyMatrices(o,t[s]),uh.toArray(n,s*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new hl(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new za(t,e,e,Cn,Rn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const s=e.bones[n];let a=t[s];a===void 0&&(Ie("Skeleton: No bone found with UUID:",s),a=new Yd),this.bones.push(a),this.boneInverses.push(new Ve().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,s=t.length;i<s;i++){const a=t[i];e.bones.push(a.uuid);const o=n[i];e.boneInverses.push(o.toArray())}return e}}class Ca extends Rt{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Ms=new Ve,fh=new Ve,Zr=[],ph=new In,Zp=new Ve,nr=new We,ir=new si;class Ht extends We{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Ca(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,Zp)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new In),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ms),ph.copy(e.boundingBox).applyMatrix4(Ms),this.boundingBox.union(ph)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new si),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ms),ir.copy(e.boundingSphere).applyMatrix4(Ms),this.boundingSphere.union(ir)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,s=n.length+1,a=e*s+1;for(let o=0;o<n.length;o++)n[o]=i[a+o]}raycast(e,t){const n=this.matrixWorld,i=this.count;if(nr.geometry=this.geometry,nr.material=this.material,nr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ir.copy(this.boundingSphere),ir.applyMatrix4(n),e.ray.intersectsSphere(ir)!==!1))for(let s=0;s<i;s++){this.getMatrixAt(s,Ms),fh.multiplyMatrices(n,Ms),nr.matrixWorld=fh,nr.raycast(e,Zr);for(let a=0,o=Zr.length;a<o;a++){const c=Zr[a];c.instanceId=s,c.object=this,t.push(c)}Zr.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new Ca(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){const n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new za(new Float32Array(i*this.count),i,this.count,Qc,Rn));const s=this.morphTexture.source.data.data;let a=0;for(let l=0;l<n.length;l++)a+=n[l];const o=this.geometry.morphTargetsRelative?1:1-a,c=i*e;return s[c]=o,s.set(n,c+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const $i=new si,Qp=new He(.5,.5),Qr=new z;class dl{constructor(e=new Ni,t=new Ni,n=new Ni,i=new Ni,s=new Ni,a=new Ni){this.planes=[e,t,n,i,s,a]}set(e,t,n,i,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Qn,n=!1){const i=this.planes,s=e.elements,a=s[0],o=s[1],c=s[2],l=s[3],h=s[4],d=s[5],u=s[6],f=s[7],g=s[8],_=s[9],p=s[10],m=s[11],b=s[12],w=s[13],x=s[14],y=s[15];if(i[0].setComponents(l-a,f-h,m-g,y-b).normalize(),i[1].setComponents(l+a,f+h,m+g,y+b).normalize(),i[2].setComponents(l+o,f+d,m+_,y+w).normalize(),i[3].setComponents(l-o,f-d,m-_,y-w).normalize(),n)i[4].setComponents(c,u,p,x).normalize(),i[5].setComponents(l-c,f-u,m-p,y-x).normalize();else if(i[4].setComponents(l-c,f-u,m-p,y-x).normalize(),t===Qn)i[5].setComponents(l+c,f+u,m+p,y+x).normalize();else if(t===Ar)i[5].setComponents(c,u,p,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),$i.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),$i.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere($i)}intersectsSprite(e){$i.center.set(0,0,0);const t=Qp.distanceTo(e.center);return $i.radius=.7071067811865476+t,$i.applyMatrix4(e.matrixWorld),this.intersectsSphere($i)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(Qr.x=i.normal.x>0?e.max.x:e.min.x,Qr.y=i.normal.y>0?e.max.y:e.min.y,Qr.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Qr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Jd extends Bn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new be(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const La=new z,Pa=new z,mh=new Ve,sr=new Oa,ea=new si,So=new z,gh=new z;class ul extends pt{constructor(e=new Ct,t=new Jd){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,s=t.count;i<s;i++)La.fromBufferAttribute(t,i-1),Pa.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=La.distanceTo(Pa);e.setAttribute("lineDistance",new mt(n,1))}else Ie("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ea.copy(n.boundingSphere),ea.applyMatrix4(i),ea.radius+=s,e.ray.intersectsSphere(ea)===!1)return;mh.copy(i).invert(),sr.copy(e.ray).applyMatrix4(mh);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=this.isLineSegments?2:1,h=n.index,u=n.attributes.position;if(h!==null){const f=Math.max(0,a.start),g=Math.min(h.count,a.start+a.count);for(let _=f,p=g-1;_<p;_+=l){const m=h.getX(_),b=h.getX(_+1),w=ta(this,e,sr,c,m,b,_);w&&t.push(w)}if(this.isLineLoop){const _=h.getX(g-1),p=h.getX(f),m=ta(this,e,sr,c,_,p,g-1);m&&t.push(m)}}else{const f=Math.max(0,a.start),g=Math.min(u.count,a.start+a.count);for(let _=f,p=g-1;_<p;_+=l){const m=ta(this,e,sr,c,_,_+1,_);m&&t.push(m)}if(this.isLineLoop){const _=ta(this,e,sr,c,g-1,f,g-1);_&&t.push(_)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function ta(r,e,t,n,i,s,a){const o=r.geometry.attributes.position;if(La.fromBufferAttribute(o,i),Pa.fromBufferAttribute(o,s),t.distanceSqToSegment(La,Pa,So,gh)>n)return;So.applyMatrix4(r.matrixWorld);const l=e.ray.origin.distanceTo(So);if(!(l<e.near||l>e.far))return{distance:l,point:gh.clone().applyMatrix4(r.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:r}}const bh=new z,xh=new z;class em extends ul{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,s=t.count;i<s;i+=2)bh.fromBufferAttribute(t,i),xh.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+bh.distanceTo(xh);e.setAttribute("lineDistance",new mt(n,1))}else Ie("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class tm extends ul{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class fl extends Bn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new be(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const _h=new Ve,Ic=new Oa,na=new si,ia=new z;class $d extends pt{constructor(e=new Ct,t=new fl){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),na.copy(n.boundingSphere),na.applyMatrix4(i),na.radius+=s,e.ray.intersectsSphere(na)===!1)return;_h.copy(i).invert(),Ic.copy(e.ray).applyMatrix4(_h);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=n.index,d=n.attributes.position;if(l!==null){const u=Math.max(0,a.start),f=Math.min(l.count,a.start+a.count);for(let g=u,_=f;g<_;g++){const p=l.getX(g);ia.fromBufferAttribute(d,p),vh(ia,p,c,i,e,t,this)}}else{const u=Math.max(0,a.start),f=Math.min(d.count,a.start+a.count);for(let g=u,_=f;g<_;g++)ia.fromBufferAttribute(d,g),vh(ia,g,c,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function vh(r,e,t,n,i,s,a){const o=Ic.distanceSqToPoint(r);if(o<t){const c=new z;Ic.closestPointToPoint(r,c),c.applyMatrix4(n);const l=i.ray.origin.distanceTo(c);if(l<i.near||l>i.far)return;s.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class Zd extends Wt{constructor(e=[],t=ss,n,i,s,a,o,c,l,h){super(e,t,n,i,s,a,o,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class nm extends Wt{constructor(e,t,n,i,s,a,o,c,l){super(e,t,n,i,s,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Cr extends Wt{constructor(e,t,n=ni,i,s,a,o=Dt,c=Dt,l,h=Mi,d=1){if(h!==Mi&&h!==ts)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const u={width:e,height:t,depth:d};super(u,i,s,a,o,c,h,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new ol(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}}class im extends Cr{constructor(e,t=ni,n=ss,i,s,a=Dt,o=Dt,c,l=Mi){const h={width:e,height:e,depth:1},d=[h,h,h,h,h,h];super(e,e,t,n,i,s,a,o,c,l),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Qd extends Wt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Jt extends Ct{constructor(e=1,t=1,n=1,i=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:a};const o=this;i=Math.floor(i),s=Math.floor(s),a=Math.floor(a);const c=[],l=[],h=[],d=[];let u=0,f=0;g("z","y","x",-1,-1,n,t,e,a,s,0),g("z","y","x",1,-1,n,t,-e,a,s,1),g("x","z","y",1,1,e,n,t,i,a,2),g("x","z","y",1,-1,e,n,-t,i,a,3),g("x","y","z",1,-1,e,t,n,i,s,4),g("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(c),this.setAttribute("position",new mt(l,3)),this.setAttribute("normal",new mt(h,3)),this.setAttribute("uv",new mt(d,2));function g(_,p,m,b,w,x,y,T,C,v,R){const D=x/C,U=y/v,H=x/2,B=y/2,F=T/2,V=C+1,te=v+1;let J=0,ue=0;const Y=new z;for(let ce=0;ce<te;ce++){const he=ce*U-B;for(let Me=0;Me<V;Me++){const Ae=Me*D-H;Y[_]=Ae*b,Y[p]=he*w,Y[m]=F,l.push(Y.x,Y.y,Y.z),Y[_]=0,Y[p]=0,Y[m]=T>0?1:-1,h.push(Y.x,Y.y,Y.z),d.push(Me/C),d.push(1-ce/v),J+=1}}for(let ce=0;ce<v;ce++)for(let he=0;he<C;he++){const Me=u+he+V*ce,Ae=u+he+V*(ce+1),Je=u+(he+1)+V*(ce+1),je=u+(he+1)+V*ce;c.push(Me,Ae,je),c.push(Ae,Je,je),ue+=6}o.addGroup(f,ue,R),f+=ue,u+=J}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Jt(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class $t extends Ct{constructor(e=1,t=1,n=1,i=32,s=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:c};const l=this;i=Math.floor(i),s=Math.floor(s);const h=[],d=[],u=[],f=[];let g=0;const _=[],p=n/2;let m=0;b(),a===!1&&(e>0&&w(!0),t>0&&w(!1)),this.setIndex(h),this.setAttribute("position",new mt(d,3)),this.setAttribute("normal",new mt(u,3)),this.setAttribute("uv",new mt(f,2));function b(){const x=new z,y=new z;let T=0;const C=(t-e)/n;for(let v=0;v<=s;v++){const R=[],D=v/s,U=D*(t-e)+e;for(let H=0;H<=i;H++){const B=H/i,F=B*c+o,V=Math.sin(F),te=Math.cos(F);y.x=U*V,y.y=-D*n+p,y.z=U*te,d.push(y.x,y.y,y.z),x.set(V,C,te).normalize(),u.push(x.x,x.y,x.z),f.push(B,1-D),R.push(g++)}_.push(R)}for(let v=0;v<i;v++)for(let R=0;R<s;R++){const D=_[R][v],U=_[R+1][v],H=_[R+1][v+1],B=_[R][v+1];(e>0||R!==0)&&(h.push(D,U,B),T+=3),(t>0||R!==s-1)&&(h.push(U,H,B),T+=3)}l.addGroup(m,T,0),m+=T}function w(x){const y=g,T=new He,C=new z;let v=0;const R=x===!0?e:t,D=x===!0?1:-1;for(let H=1;H<=i;H++)d.push(0,p*D,0),u.push(0,D,0),f.push(.5,.5),g++;const U=g;for(let H=0;H<=i;H++){const F=H/i*c+o,V=Math.cos(F),te=Math.sin(F);C.x=R*te,C.y=p*D,C.z=R*V,d.push(C.x,C.y,C.z),u.push(0,D,0),T.x=V*.5+.5,T.y=te*.5*D+.5,f.push(T.x,T.y),g++}for(let H=0;H<i;H++){const B=y+H,F=U+H;x===!0?h.push(F,F+1,B):h.push(F+1,F,B),v+=3}l.addGroup(m,v,x===!0?1:2),m+=v}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new $t(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class An extends $t{constructor(e=1,t=1,n=32,i=1,s=!1,a=0,o=Math.PI*2){super(0,e,t,n,i,s,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:i,openEnded:s,thetaStart:a,thetaLength:o}}static fromJSON(e){return new An(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class pl extends Ct{constructor(e=[],t=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:i};const s=[],a=[];o(i),l(n),h(),this.setAttribute("position",new mt(s,3)),this.setAttribute("normal",new mt(s.slice(),3)),this.setAttribute("uv",new mt(a,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function o(b){const w=new z,x=new z,y=new z;for(let T=0;T<t.length;T+=3)f(t[T+0],w),f(t[T+1],x),f(t[T+2],y),c(w,x,y,b)}function c(b,w,x,y){const T=y+1,C=[];for(let v=0;v<=T;v++){C[v]=[];const R=b.clone().lerp(x,v/T),D=w.clone().lerp(x,v/T),U=T-v;for(let H=0;H<=U;H++)H===0&&v===T?C[v][H]=R:C[v][H]=R.clone().lerp(D,H/U)}for(let v=0;v<T;v++)for(let R=0;R<2*(T-v)-1;R++){const D=Math.floor(R/2);R%2===0?(u(C[v][D+1]),u(C[v+1][D]),u(C[v][D])):(u(C[v][D+1]),u(C[v+1][D+1]),u(C[v+1][D]))}}function l(b){const w=new z;for(let x=0;x<s.length;x+=3)w.x=s[x+0],w.y=s[x+1],w.z=s[x+2],w.normalize().multiplyScalar(b),s[x+0]=w.x,s[x+1]=w.y,s[x+2]=w.z}function h(){const b=new z;for(let w=0;w<s.length;w+=3){b.x=s[w+0],b.y=s[w+1],b.z=s[w+2];const x=p(b)/2/Math.PI+.5,y=m(b)/Math.PI+.5;a.push(x,1-y)}g(),d()}function d(){for(let b=0;b<a.length;b+=6){const w=a[b+0],x=a[b+2],y=a[b+4],T=Math.max(w,x,y),C=Math.min(w,x,y);T>.9&&C<.1&&(w<.2&&(a[b+0]+=1),x<.2&&(a[b+2]+=1),y<.2&&(a[b+4]+=1))}}function u(b){s.push(b.x,b.y,b.z)}function f(b,w){const x=b*3;w.x=e[x+0],w.y=e[x+1],w.z=e[x+2]}function g(){const b=new z,w=new z,x=new z,y=new z,T=new He,C=new He,v=new He;for(let R=0,D=0;R<s.length;R+=9,D+=6){b.set(s[R+0],s[R+1],s[R+2]),w.set(s[R+3],s[R+4],s[R+5]),x.set(s[R+6],s[R+7],s[R+8]),T.set(a[D+0],a[D+1]),C.set(a[D+2],a[D+3]),v.set(a[D+4],a[D+5]),y.copy(b).add(w).add(x).divideScalar(3);const U=p(y);_(T,D+0,b,U),_(C,D+2,w,U),_(v,D+4,x,U)}}function _(b,w,x,y){y<0&&b.x===1&&(a[w]=b.x-1),x.x===0&&x.z===0&&(a[w]=y/2/Math.PI+.5)}function p(b){return Math.atan2(b.z,-b.x)}function m(b){return Math.atan2(-b.y,Math.sqrt(b.x*b.x+b.z*b.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new pl(e.vertices,e.indices,e.radius,e.detail)}}class Bs extends pl{constructor(e=1,t=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],i=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,i,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Bs(e.radius,e.detail)}}class Vi extends Ct{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const s=e/2,a=t/2,o=Math.floor(n),c=Math.floor(i),l=o+1,h=c+1,d=e/o,u=t/c,f=[],g=[],_=[],p=[];for(let m=0;m<h;m++){const b=m*u-a;for(let w=0;w<l;w++){const x=w*d-s;g.push(x,-b,0),_.push(0,0,1),p.push(w/o),p.push(1-m/c)}}for(let m=0;m<c;m++)for(let b=0;b<o;b++){const w=b+l*m,x=b+l*(m+1),y=b+1+l*(m+1),T=b+1+l*m;f.push(w,x,T),f.push(x,y,T)}this.setIndex(f),this.setAttribute("position",new mt(g,3)),this.setAttribute("normal",new mt(_,3)),this.setAttribute("uv",new mt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Vi(e.width,e.height,e.widthSegments,e.heightSegments)}}class Lr extends Ct{constructor(e=.5,t=1,n=32,i=1,s=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:i,thetaStart:s,thetaLength:a},n=Math.max(3,n),i=Math.max(1,i);const o=[],c=[],l=[],h=[];let d=e;const u=(t-e)/i,f=new z,g=new He;for(let _=0;_<=i;_++){for(let p=0;p<=n;p++){const m=s+p/n*a;f.x=d*Math.cos(m),f.y=d*Math.sin(m),c.push(f.x,f.y,f.z),l.push(0,0,1),g.x=(f.x/t+1)/2,g.y=(f.y/t+1)/2,h.push(g.x,g.y)}d+=u}for(let _=0;_<i;_++){const p=_*(n+1);for(let m=0;m<n;m++){const b=m+p,w=b,x=b+n+1,y=b+n+2,T=b+1;o.push(w,x,T),o.push(x,y,T)}}this.setIndex(o),this.setAttribute("position",new mt(c,3)),this.setAttribute("normal",new mt(l,3)),this.setAttribute("uv",new mt(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Lr(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class nn extends Ct{constructor(e=1,t=32,n=16,i=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:s,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const c=Math.min(a+o,Math.PI);let l=0;const h=[],d=new z,u=new z,f=[],g=[],_=[],p=[];for(let m=0;m<=n;m++){const b=[],w=m/n,x=a+w*o,y=e*Math.cos(x),T=Math.sqrt(e*e-y*y);let C=0;m===0&&a===0?C=.5/t:m===n&&c===Math.PI&&(C=-.5/t);for(let v=0;v<=t;v++){const R=v/t,D=i+R*s;d.x=-T*Math.cos(D),d.y=y,d.z=T*Math.sin(D),g.push(d.x,d.y,d.z),u.copy(d).normalize(),_.push(u.x,u.y,u.z),p.push(R+C,1-w),b.push(l++)}h.push(b)}for(let m=0;m<n;m++)for(let b=0;b<t;b++){const w=h[m][b+1],x=h[m][b],y=h[m+1][b],T=h[m+1][b+1];(m!==0||a>0)&&f.push(w,x,T),(m!==n-1||c<Math.PI)&&f.push(x,y,T)}this.setIndex(f),this.setAttribute("position",new mt(g,3)),this.setAttribute("normal",new mt(_,3)),this.setAttribute("uv",new mt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new nn(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Gs extends Ct{constructor(e=1,t=.4,n=12,i=48,s=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:i,arc:s,thetaStart:a,thetaLength:o},n=Math.floor(n),i=Math.floor(i);const c=[],l=[],h=[],d=[],u=new z,f=new z,g=new z;for(let _=0;_<=n;_++){const p=a+_/n*o;for(let m=0;m<=i;m++){const b=m/i*s;f.x=(e+t*Math.cos(p))*Math.cos(b),f.y=(e+t*Math.cos(p))*Math.sin(b),f.z=t*Math.sin(p),l.push(f.x,f.y,f.z),u.x=e*Math.cos(b),u.y=e*Math.sin(b),g.subVectors(f,u).normalize(),h.push(g.x,g.y,g.z),d.push(m/i),d.push(_/n)}}for(let _=1;_<=n;_++)for(let p=1;p<=i;p++){const m=(i+1)*_+p-1,b=(i+1)*(_-1)+p-1,w=(i+1)*(_-1)+p,x=(i+1)*_+p;c.push(m,b,x),c.push(b,w,x)}this.setIndex(c),this.setAttribute("position",new mt(l,3)),this.setAttribute("normal",new mt(h,3)),this.setAttribute("uv",new mt(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Gs(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}}function Hs(r){const e={};for(const t in r){e[t]={};for(const n in r[t]){const i=r[t][n];if(Mh(i))i.isRenderTargetTexture?(Ie("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone();else if(Array.isArray(i))if(Mh(i[0])){const s=[];for(let a=0,o=i.length;a<o;a++)s[a]=i[a].clone();e[t][n]=s}else e[t][n]=i.slice();else e[t][n]=i}}return e}function ln(r){const e={};for(let t=0;t<r.length;t++){const n=Hs(r[t]);for(const i in n)e[i]=n[i]}return e}function Mh(r){return r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)}function sm(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function eu(r){const e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:et.workingColorSpace}const rm={clone:Hs,merge:ln};var am=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,om=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Gn extends Bn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=am,this.fragmentShader=om,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Hs(e.uniforms),this.uniformsGroups=sm(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?t.uniforms[i]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[i]={type:"m4",value:a.toArray()}:t.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(const n in e.uniforms){const i=e.uniforms[n];switch(this.uniforms[n]={},i.type){case"t":this.uniforms[n].value=t[i.value]||null;break;case"c":this.uniforms[n].value=new be().setHex(i.value);break;case"v2":this.uniforms[n].value=new He().fromArray(i.value);break;case"v3":this.uniforms[n].value=new z().fromArray(i.value);break;case"v4":this.uniforms[n].value=new ft().fromArray(i.value);break;case"m3":this.uniforms[n].value=new Ge().fromArray(i.value);break;case"m4":this.uniforms[n].value=new Ve().fromArray(i.value);break;default:this.uniforms[n].value=i.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class cm extends Gn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class ml extends Bn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new be(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new be(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=wa,this.normalScale=new He(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Hi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class ri extends ml{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new He(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return tt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new be(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new be(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new be(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class Et extends Bn{constructor(e){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new be(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new be(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=wa,this.normalScale=new He(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.gradientMap=e.gradientMap,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}class lm extends Bn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Jf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class hm extends Bn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}function ki(r,e){return!r||r.constructor===e?r:typeof e.BYTES_PER_ELEMENT=="number"?new e(r):Array.prototype.slice.call(r)}function ga(r){return r!==void 0&&r.inTangents!==void 0&&r.outTangents!==void 0}function dm(r){function e(i,s){return r[i]-r[s]}const t=r.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function Sh(r,e,t){const n=r.length,i=new r.constructor(n);for(let s=0,a=0;a!==n;++s){const o=t[s]*e;for(let c=0;c!==e;++c)i[a++]=r[o+c]}return i}function um(r,e,t,n){let i=1,s=r[0];for(;s!==void 0&&s[n]===void 0;)s=r[i++];if(s===void 0)return;let a=s[n];if(a!==void 0)if(Array.isArray(a))do a=s[n],a!==void 0&&(e.push(s.time),t.push(...a)),s=r[i++];while(s!==void 0);else if(a.toArray!==void 0)do a=s[n],a!==void 0&&(e.push(s.time),a.toArray(t,t.length)),s=r[i++];while(s!==void 0);else do a=s[n],a!==void 0&&(e.push(s.time),t.push(a)),s=r[i++];while(s!==void 0)}class Ws{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],s=t[n-1];e:{t:{let a;n:{i:if(!(e<i)){for(let o=n+2;;){if(i===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(s=i,i=t[++n],e<i)break t}a=t.length;break n}if(!(e>=s)){const o=t[1];e<o&&(n=2,s=o);for(let c=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(i=s,s=t[--n-1],e>=s)break t}a=n,n=0;break n}break e}for(;n<a;){const o=n+a>>>1;e<t[o]?a=o:n=o+1}if(i=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i;for(let a=0;a!==i;++a)t[a]=n[s+a];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}}class fm extends Ws{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Rs,endingEnd:Rs}}intervalChanged_(e,t,n){const i=this.parameterPositions;let s=e-2,a=e+1,o=i[s],c=i[a];if(o===void 0)switch(this.getSettings_().endingStart){case Cs:s=e,o=2*t-n;break;case Ta:s=i.length-2,o=t+i[s]-i[s+1];break;default:s=e,o=n}if(c===void 0)switch(this.getSettings_().endingEnd){case Cs:a=e,c=2*n-t;break;case Ta:a=1,c=n+i[1]-i[0];break;default:a=e-1,c=t}const l=(n-t)*.5,h=this.valueSize;this._weightPrev=l/(t-o),this._weightNext=l/(c-n),this._offsetPrev=s*h,this._offsetNext=a*h}interpolate_(e,t,n,i){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=this._offsetPrev,d=this._offsetNext,u=this._weightPrev,f=this._weightNext,g=(n-t)/(i-t),_=g*g,p=_*g,m=-u*p+2*u*_-u*g,b=(1+u)*p+(-1.5-2*u)*_+(-.5+u)*g+1,w=(-1-f)*p+(1.5+f)*_+.5*g,x=f*p-f*_;for(let y=0;y!==o;++y)s[y]=m*a[h+y]+b*a[l+y]+w*a[c+y]+x*a[d+y];return s}}class tu extends Ws{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=(n-t)/(i-t),d=1-h;for(let u=0;u!==o;++u)s[u]=a[l+u]*d+a[c+u]*h;return s}}class pm extends Ws{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class mm extends Ws{interpolate_(e,t,n,i){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=this.inTangents,d=this.outTangents;if(!h||!d){const g=(n-t)/(i-t),_=1-g;for(let p=0;p!==o;++p)s[p]=a[l+p]*_+a[c+p]*g;return s}const u=o*2,f=e-1;for(let g=0;g!==o;++g){const _=a[l+g],p=a[c+g],m=f*u+g*2,b=d[m],w=d[m+1],x=e*u+g*2,y=h[x],T=h[x+1],C=bm(n,t,b,y,i);s[g]=nu(C,_,w,T,p)}return s}}function nu(r,e,t,n,i){const s=1-r;return s*s*s*e+3*s*s*r*t+3*s*r*r*n+r*r*r*i}function gm(r,e,t,n,i){const s=1-r;return 3*s*s*(t-e)+6*s*r*(n-t)+3*r*r*(i-n)}function bm(r,e,t,n,i){let s=(r-e)/(i-e);for(let a=0;a<8;a++){const o=nu(s,e,t,n,i)-r;if(Math.abs(o)<1e-10)break;const c=gm(s,e,t,n,i);if(Math.abs(c)<1e-10)break;s=Math.max(0,Math.min(1,s-o/c))}return s}class Vn{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=ki(t,this.TimeBufferType),this.values=ki(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:ki(e.times,Array),values:ki(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i),ga(e.settings)&&(n.settings={inTangents:ki(e.settings.inTangents,Array),outTangents:ki(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new pm(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new tu(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new fm(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){const t=new mm(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case Tr:t=this.InterpolantFactoryMethodDiscrete;break;case wr:t=this.InterpolantFactoryMethodLinear;break;case $a:t=this.InterpolantFactoryMethodSmooth;break;case Wl:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Ie("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Tr;case this.InterpolantFactoryMethodLinear:return wr;case this.InterpolantFactoryMethodSmooth:return $a;case this.InterpolantFactoryMethodBezier:return Wl}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e;ga(this.settings)&&(yh(this.settings.inTangents,e),yh(this.settings.outTangents,e))}return this}trim(e,t){const n=this.times,i=n.length;let s=0,a=i-1;for(;s!==i&&n[s]<e;)++s;for(;a!==-1&&n[a]>t;)--a;if(++a,s!==0||a!==i){s>=a&&(a=Math.max(a,1),s=a-1);const o=this.getValueSize();this.times=n.slice(s,a),this.values=this.values.slice(s*o,a*o)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(Oe("KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,s=n.length;s===0&&(Oe("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==s;o++){const c=n[o];if(typeof c=="number"&&isNaN(c)){Oe("KeyframeTrack: Time is not a valid number.",this,o,c),e=!1;break}if(a!==null&&a>c){Oe("KeyframeTrack: Out of order keys.",this,o,c,a),e=!1;break}a=c}if(i!==void 0&&ap(i))for(let o=0,c=i.length;o!==c;++o){const l=i[o];if(isNaN(l)){Oe("KeyframeTrack: Value is not a valid number.",this,o,l),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===$a,s=e.length-1;let a=1;for(let o=1;o<s;++o){let c=!1;const l=e[o],h=e[o+1];if(l!==h&&(o!==1||l!==e[0]))if(i)c=!0;else{const d=o*n,u=d-n,f=d+n;for(let g=0;g!==n;++g){const _=t[d+g];if(_!==t[u+g]||_!==t[f+g]){c=!0;break}}}if(c){if(o!==a){e[a]=e[o];const d=o*n,u=a*n;for(let f=0;f!==n;++f)t[u+f]=t[d+f]}++a}}if(s>0){e[a]=e[s];for(let o=s*n,c=a*n,l=0;l!==n;++l)t[c+l]=t[o+l];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,ga(this.settings)&&(i.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),i}}function yh(r,e){for(let t=0,n=r.length;t!==n;t+=2)r[t]*=e}Vn.prototype.ValueTypeName="";Vn.prototype.TimeBufferType=Float32Array;Vn.prototype.ValueBufferType=Float32Array;Vn.prototype.DefaultInterpolation=wr;class qs extends Vn{constructor(e,t,n){super(e,t,n)}}qs.prototype.ValueTypeName="bool";qs.prototype.ValueBufferType=Array;qs.prototype.DefaultInterpolation=Tr;qs.prototype.InterpolantFactoryMethodLinear=void 0;qs.prototype.InterpolantFactoryMethodSmooth=void 0;class iu extends Vn{constructor(e,t,n,i){super(e,t,n,i)}}iu.prototype.ValueTypeName="color";class Pr extends Vn{constructor(e,t,n,i){super(e,t,n,i)}}Pr.prototype.ValueTypeName="number";class xm extends Ws{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(n-t)/(i-t);let l=e*o;for(let h=l+o;l!==h;l+=4)Pn.slerpFlat(s,0,a,l-o,a,l,c);return s}}class Vs extends Vn{constructor(e,t,n,i){super(e,t,n,i)}InterpolantFactoryMethodLinear(e){return new xm(this.times,this.values,this.getValueSize(),e)}}Vs.prototype.ValueTypeName="quaternion";Vs.prototype.InterpolantFactoryMethodSmooth=void 0;class Xs extends Vn{constructor(e,t,n){super(e,t,n)}}Xs.prototype.ValueTypeName="string";Xs.prototype.ValueBufferType=Array;Xs.prototype.DefaultInterpolation=Tr;Xs.prototype.InterpolantFactoryMethodLinear=void 0;Xs.prototype.InterpolantFactoryMethodSmooth=void 0;class Ia extends Vn{constructor(e,t,n,i){super(e,t,n,i)}}Ia.prototype.ValueTypeName="vector";class Da{constructor(e="",t=-1,n=[],i=il){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=On(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let a=0,o=n.length;a!==o;++a)t.push(vm(n[a]).scale(i));const s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s.userData=JSON.parse(e.userData||"{}"),s}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let s=0,a=n.length;s!==a;++s)t.push(Vn.toJSON(n[s]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const s=t.length,a=[];for(let o=0;o<s;o++){let c=[],l=[];c.push((o+s-1)%s,o,(o+1)%s),l.push(0,1,0);const h=dm(c);c=Sh(c,1,h),l=Sh(l,1,h),!i&&c[0]===0&&(c.push(s),l.push(l[0])),a.push(new Pr(".morphTargetInfluences["+t[o].name+"]",c,l).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},s=/^([\w-]*?)([\d]+)$/;for(let o=0,c=e.length;o<c;o++){const l=e[o],h=l.name.match(s);if(h&&h.length>1){const d=h[1];let u=i[d];u||(i[d]=u=[]),u.push(l)}}const a=[];for(const o in i)a.push(this.CreateFromMorphTargetSequence(o,i[o],t,n));return a}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const s=this.tracks[n];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let n=0;n<this.tracks.length;n++)e.push(this.tracks[n].clone());const t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}}function _m(r){switch(r.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Pr;case"vector":case"vector2":case"vector3":case"vector4":return Ia;case"color":return iu;case"quaternion":return Vs;case"bool":case"boolean":return qs;case"string":return Xs}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+r)}function vm(r){if(r.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=_m(r.type);if(r.times===void 0){const n=[],i=[];um(r.keys,n,i,"value"),r.times=n,r.values=i}let t;return e.parse!==void 0?t=e.parse(r):t=new e(r.name,r.times,r.values,r.interpolation),ga(r.settings)&&(t.settings={inTangents:ki(r.settings.inTangents,Float32Array),outTangents:ki(r.settings.outTangents,Float32Array)}),t}const bi={enabled:!1,files:{},add:function(r,e){this.enabled!==!1&&(Eh(r)||(this.files[r]=e))},get:function(r){if(this.enabled!==!1&&!Eh(r))return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};function Eh(r){try{const e=r.slice(r.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}class Mm{constructor(e,t,n){const i=this;let s=!1,a=0,o=0,c;const l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(h){o++,s===!1&&i.onStart!==void 0&&i.onStart(h,a,o),s=!0},this.itemEnd=function(h){a++,i.onProgress!==void 0&&i.onProgress(h,a,o),a===o&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,d){return l.push(h,d),this},this.removeHandler=function(h){const d=l.indexOf(h);return d!==-1&&l.splice(d,2),this},this.getHandler=function(h){for(let d=0,u=l.length;d<u;d+=2){const f=l[d],g=l[d+1];if(f.global&&(f.lastIndex=0),f.test(h))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const Sm=new Mm;class Ks{constructor(e){this.manager=e!==void 0?e:Sm,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,s){n.load(e,i,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}Ks.DEFAULT_MATERIAL_NAME="__DEFAULT";const pi={};class ym extends Error{constructor(e,t){super(e),this.response=t}}class su extends Ks{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=bi.get(`file:${e}`);if(s!==void 0){this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0);return}if(pi[e]!==void 0){pi[e].push({onLoad:t,onProgress:n,onError:i});return}pi[e]=[],pi[e].push({onLoad:t,onProgress:n,onError:i});const a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),o=this.mimeType,c=this.responseType;fetch(a).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&Ie("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;const h=pi[e],d=l.body.getReader(),u=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),f=u?parseInt(u):0,g=f!==0;let _=0;const p=new ReadableStream({start(m){b();function b(){d.read().then(({done:w,value:x})=>{if(w)m.close();else{_+=x.byteLength;const y=new ProgressEvent("progress",{lengthComputable:g,loaded:_,total:f});for(let T=0,C=h.length;T<C;T++){const v=h[T];v.onProgress&&v.onProgress(y)}m.enqueue(x),b()}},w=>{m.error(w)})}}});return new Response(p)}else throw new ym(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(h=>new DOMParser().parseFromString(h,o));case"json":return l.json();default:if(o==="")return l.text();{const d=/charset="?([^;"\s]*)"?/i.exec(o),u=d&&d[1]?d[1].toLowerCase():void 0,f=new TextDecoder(u);return l.arrayBuffer().then(g=>f.decode(g))}}}).then(l=>{bi.add(`file:${e}`,l);const h=pi[e];delete pi[e];for(let d=0,u=h.length;d<u;d++){const f=h[d];f.onLoad&&f.onLoad(l)}}).catch(l=>{const h=pi[e];if(h===void 0)throw this.manager.itemError(e),l;delete pi[e];for(let d=0,u=h.length;d<u;d++){const f=h[d];f.onError&&f.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const Ss=new WeakMap;class Em extends Ks{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,a=bi.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)s.manager.itemStart(e),setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0);else{let d=Ss.get(a);d===void 0&&(d=[],Ss.set(a,d)),d.push({onLoad:t,onError:i})}return a}const o=Rr("img");function c(){h(),t&&t(this);const d=Ss.get(this)||[];for(let u=0;u<d.length;u++){const f=d[u];f.onLoad&&f.onLoad(this)}Ss.delete(this),s.manager.itemEnd(e)}function l(d){h(),i&&i(d),bi.remove(`image:${e}`);const u=Ss.get(this)||[];for(let f=0;f<u.length;f++){const g=u[f];g.onError&&g.onError(d)}Ss.delete(this),s.manager.itemError(e),s.manager.itemEnd(e)}function h(){o.removeEventListener("load",c,!1),o.removeEventListener("error",l,!1)}return o.addEventListener("load",c,!1),o.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),bi.add(`image:${e}`,o),s.manager.itemStart(e),o.src=e,o}}class Tm extends Ks{constructor(e){super(e)}load(e,t,n,i){const s=new Wt,a=new Em(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){s.image=o,s.needsUpdate=!0,t!==void 0&&t(s)},n,i),s}}class Ba extends pt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new be(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}class wm extends Ba{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(pt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new be(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){const t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}}const yo=new Ve,Th=new z,wh=new z;class gl{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new He(512,512),this.mapType=gn,this.map=null,this.mapPass=null,this.matrix=new Ve,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new dl,this._frameExtents=new He(1,1),this._viewportCount=1,this._viewports=[new ft(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera;Th.setFromMatrixPosition(e.matrixWorld),t.position.copy(Th),wh.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(wh),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,i){yo.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(yo,e.coordinateSystem,e.reversedDepth);const s=this._frameExtents,a=i?i.z/s.x:1,o=i?i.w/s.y:1,c=i?i.x/s.x:0,l=i?i.y/s.y:0;e.coordinateSystem===Ar||e.reversedDepth?t.set(.5*a,0,0,.5*a+c,0,.5*o,0,.5*o+l,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+c,0,.5*o,0,.5*o+l,0,0,.5,.5,0,0,0,1),t.multiply(yo)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const sa=new z,ra=new Pn,qn=new z;class ru extends pt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ve,this.projectionMatrix=new Ve,this.projectionMatrixInverse=new Ve,this.coordinateSystem=Qn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(sa,ra,qn),qn.x===1&&qn.y===1&&qn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(sa,ra,qn.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(sa,ra,qn),qn.x===1&&qn.y===1&&qn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(sa,ra,qn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Li=new z,Ah=new He,Rh=new He;class dn extends ru{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=zs*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(xr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return zs*2*Math.atan(Math.tan(xr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Li.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Li.x,Li.y).multiplyScalar(-e/Li.z),Li.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Li.x,Li.y).multiplyScalar(-e/Li.z)}getViewSize(e,t){return this.getViewBounds(e,Ah,Rh),t.subVectors(Rh,Ah)}setViewOffset(e,t,n,i,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(xr*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,l=a.fullHeight;s+=a.offsetX*i/c,t-=a.offsetY*n/l,i*=a.width/c,n*=a.height/l}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class Am extends gl{constructor(){super(new dn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){const t=this.camera,n=zs*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height*this.aspect,s=e.distance||t.far;(n!==t.fov||i!==t.aspect||s!==t.far)&&(t.fov=n,t.aspect=i,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this.aspect=e.aspect,this}toJSON(){const e=super.toJSON();return e.focus=this.focus,e.aspect=this.aspect,e}}class Rm extends Ba{constructor(e,t,n=0,i=Math.PI/3,s=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(pt.DEFAULT_UP),this.updateMatrix(),this.target=new pt,this.distance=n,this.angle=i,this.penumbra=s,this.decay=a,this.map=null,this.shadow=new Am}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}}class Cm extends gl{constructor(){super(new dn(90,1,.5,500)),this.isPointLightShadow=!0}}class Na extends Ba{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Cm}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}}class Ga extends ru{constructor(e=-1,t=1,n=1,i=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-e,a=n+e,o=i+t,c=i-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,a=s+l*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Lm extends gl{constructor(){super(new Ga(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Dc extends Ba{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(pt.DEFAULT_UP),this.updateMatrix(),this.target=new pt,this.shadow=new Lm}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}class vr{static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}const Eo=new WeakMap;class Pm extends Ks{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&Ie("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&Ie("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,a=bi.get(`image-bitmap:${e}`);if(a!==void 0){if(s.manager.itemStart(e),a.then){a.then(l=>{Eo.has(a)===!0?(i&&i(Eo.get(a)),s.manager.itemError(e),s.manager.itemEnd(e)):(t&&t(l),s.manager.itemEnd(e))});return}setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0);return}const o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader,o.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;const c=fetch(e,o).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign({},s.options,{colorSpaceConversion:"none"}))}).then(function(l){return bi.add(`image-bitmap:${e}`,l),t&&t(l),s.manager.itemEnd(e),l}).catch(function(l){i&&i(l),Eo.set(c,l),bi.remove(`image-bitmap:${e}`),s.manager.itemError(e),s.manager.itemEnd(e)});bi.add(`image-bitmap:${e}`,c),s.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const ys=-90,Es=1;class Im extends pt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new dn(ys,Es,e,t);i.layers=this.layers,this.add(i);const s=new dn(ys,Es,e,t);s.layers=this.layers,this.add(s);const a=new dn(ys,Es,e,t);a.layers=this.layers,this.add(a);const o=new dn(ys,Es,e,t);o.layers=this.layers,this.add(o);const c=new dn(ys,Es,e,t);c.layers=this.layers,this.add(c);const l=new dn(ys,Es,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,s,a,o,c]=t;for(const l of t)this.remove(l);if(e===Qn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Ar)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,c,l,h]=this.children,d=e.getRenderTarget(),u=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let p=!1;e.isWebGLRenderer===!0?p=e.state.buffers.depth.getReversed():p=e.reversedDepthBuffer,e.setRenderTarget(n,0,i),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(n,1,i),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,i),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,i),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(n,4,i),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,i),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(d,u,f),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Dm extends dn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class Nm{constructor(e,t,n){this.binding=e,this.valueSize=n;let i,s,a;switch(t){case"quaternion":i=this._slerp,s=this._slerpAdditive,a=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":i=this._select,s=this._select,a=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:i=this._lerp,s=this._lerpAdditive,a=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=i,this._mixBufferRegionAdditive=s,this._setIdentity=a,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){const n=this.buffer,i=this.valueSize,s=e*i+i;let a=this.cumulativeWeight;if(a===0){for(let o=0;o!==i;++o)n[s+o]=n[o];a=t}else{a+=t;const o=t/a;this._mixBufferRegion(n,s,0,o,i)}this.cumulativeWeight=a}accumulateAdditive(e){const t=this.buffer,n=this.valueSize,i=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,i,0,e,n),this.cumulativeWeightAdditive+=e}apply(e){const t=this.valueSize,n=this.buffer,i=e*t+t,s=this.cumulativeWeight,a=this.cumulativeWeightAdditive,o=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,s<1){const c=t*this._origIndex;this._mixBufferRegion(n,i,c,1-s,t)}a>0&&this._mixBufferRegionAdditive(n,i,this._addIndex*t,1,t);for(let c=t,l=t+t;c!==l;++c)if(n[c]!==n[c+t]){o.setValue(n,i);break}}saveOriginalState(){const e=this.binding,t=this.buffer,n=this.valueSize,i=n*this._origIndex;e.getValue(t,i);for(let s=n,a=i;s!==a;++s)t[s]=t[i+s%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){const e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){const e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let n=e;n<t;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){const e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[t+n]=this.buffer[e+n]}_select(e,t,n,i,s){if(i>=.5)for(let a=0;a!==s;++a)e[t+a]=e[n+a]}_slerp(e,t,n,i){Pn.slerpFlat(e,t,e,t,e,n,i)}_slerpAdditive(e,t,n,i,s){const a=this._workIndex*s;Pn.multiplyQuaternionsFlat(e,a,e,t,e,n),Pn.slerpFlat(e,t,e,t,e,a,i)}_lerp(e,t,n,i,s){const a=1-i;for(let o=0;o!==s;++o){const c=t+o;e[c]=e[c]*a+e[n+o]*i}}_lerpAdditive(e,t,n,i,s){for(let a=0;a!==s;++a){const o=t+a;e[o]=e[o]+e[n+a]*i}}}const bl="\\[\\]\\.:\\/",km=new RegExp("["+bl+"]","g"),xl="[^"+bl+"]",Fm="[^"+bl.replace("\\.","")+"]",Um=/((?:WC+[\/:])*)/.source.replace("WC",xl),Om=/(WCOD+)?/.source.replace("WCOD",Fm),zm=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",xl),Bm=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",xl),Gm=new RegExp("^"+Um+Om+zm+Bm+"$"),Hm=["material","materials","bones","map"];class Vm{constructor(e,t,n){const i=n||ct.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,s=n.length;i!==s;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class ct{constructor(e,t,n){this.path=t,this.parsedPath=n||ct.parseTrackName(t),this.node=ct.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new ct.Composite(e,t,n):new ct(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(km,"")}static parseTrackName(e){const t=Gm.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const s=n.nodeName.substring(i+1);Hm.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(s){for(let a=0;a<s.length;a++){const o=s[a];if(o.name===t||o.uuid===t)return o;const c=n(o.children);if(c)return c}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let s=t.propertyIndex;if(e||(e=ct.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Ie("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){Oe("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){Oe("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){Oe("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===l){l=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){Oe("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){Oe("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){Oe("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){Oe("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}const a=e[i];if(a===void 0){const l=t.nodeName;Oe("PropertyBinding: Trying to update property for track: "+l+"."+i+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){Oe("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){Oe("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=s}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}ct.Composite=Vm;ct.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ct.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ct.prototype.GetterByBindingType=[ct.prototype._getValue_direct,ct.prototype._getValue_array,ct.prototype._getValue_arrayElement,ct.prototype._getValue_toArray];ct.prototype.SetterByBindingTypeAndVersioning=[[ct.prototype._setValue_direct,ct.prototype._setValue_direct_setNeedsUpdate,ct.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ct.prototype._setValue_array,ct.prototype._setValue_array_setNeedsUpdate,ct.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ct.prototype._setValue_arrayElement,ct.prototype._setValue_arrayElement_setNeedsUpdate,ct.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ct.prototype._setValue_fromArray,ct.prototype._setValue_fromArray_setNeedsUpdate,ct.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class Wm{constructor(e,t,n=null,i=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=n,this.blendMode=i;const s=t.tracks,a=s.length,o=new Array(a),c={endingStart:Rs,endingEnd:Rs};for(let l=0;l!==a;++l){const h=s[l].createInterpolant(null);o[l]=h,h.settings=c}this._interpolantSettings=c,this._interpolants=o,this._propertyBindings=new Array(a),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._restoreTimeScale=null,this._weightInterpolant=null,this.loop=Bd,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,n=!1){if(e.fadeOut(t),this.fadeIn(t),n===!0){const i=this._clip.duration,s=e._clip.duration,a=s/i,o=i/s;e._restoreTimeScale=e.timeScale,this._restoreTimeScale=this.timeScale,e.warp(1,a,t),this.warp(o,1,t)}return this}crossFadeTo(e,t,n=!1){return e.crossFadeFrom(this,t,n)}stopFading(){const e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,n){const i=this._mixer,s=i.time,a=this.timeScale;let o=this._timeScaleInterpolant;o===null&&(o=i._lendControlInterpolant(),this._timeScaleInterpolant=o);const c=o.parameterPositions,l=o.sampleValues;return c[0]=s,c[1]=s+n,l[0]=e/a,l[1]=t/a,this}stopWarping(){const e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this._restoreTimeScale=null,this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,n,i){if(!this.enabled){this._updateWeight(e);return}const s=this._startTime;if(s!==null){const c=(e-s)*n;c<0||n===0?t=0:(this._startTime=null,t=n*c)}t*=this._updateTimeScale(e);const a=this._updateTime(t),o=this._updateWeight(e);if(o>0){const c=this._interpolants,l=this._propertyBindings;switch(this.blendMode){case jf:for(let h=0,d=c.length;h!==d;++h)c[h].evaluate(a),l[h].accumulateAdditive(o);break;case il:default:for(let h=0,d=c.length;h!==d;++h)c[h].evaluate(a),l[h].accumulate(i,o)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;const n=this._weightInterpolant;if(n!==null){const i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopFading(),i===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;const n=this._timeScaleInterpolant;if(n!==null){const i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(t===0?this.paused=!0:(this._restoreTimeScale!==null&&(t=this._restoreTimeScale),this.timeScale=t),this.stopWarping())}}return this._effectiveTimeScale=t,t}_updateTime(e){const t=this._clip.duration,n=this.loop;let i=this.time+e,s=this._loopCount;const a=n===Kf;if(e===0)return s===-1?i:a&&(s&1)===1?t-i:i;if(n===zd){s===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(i>=t)i=t;else if(i<0)i=0;else{this.time=i;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(s===-1&&(e>=0?(s=0,this._setEndings(!0,this.repetitions===0,a)):this._setEndings(this.repetitions===0,!0,a)),i>=t||i<0){const o=Math.floor(i/t);i-=t*o,s+=Math.abs(o);const c=this.repetitions-s;if(c<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,i=e>0?t:0,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(c===1){const l=e<0;this._setEndings(l,!l,a)}else this._setEndings(!1,!1,a);this._loopCount=s,this.time=i,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:o})}}else this._loopCount=s,this.time=i;if(a&&(s&1)===1)return t-i}return i}_setEndings(e,t,n){const i=this._interpolantSettings;n?(i.endingStart=Cs,i.endingEnd=Cs):(e?i.endingStart=this.zeroSlopeAtStart?Cs:Rs:i.endingStart=Ta,t?i.endingEnd=this.zeroSlopeAtEnd?Cs:Rs:i.endingEnd=Ta)}_scheduleFading(e,t,n){const i=this._mixer,s=i.time;let a=this._weightInterpolant;a===null&&(a=i._lendControlInterpolant(),this._weightInterpolant=a);const o=a.parameterPositions,c=a.sampleValues;return o[0]=s,c[0]=t,o[1]=s+e,c[1]=n,this}}const qm=new Float32Array(1);class au extends Wi{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}_bindAction(e,t){const n=e._localRoot||this._root,i=e._clip.tracks,s=i.length,a=e._propertyBindings,o=e._interpolants,c=n.uuid,l=this._bindingsByRootAndName;let h=l[c];h===void 0&&(h={},l[c]=h);for(let d=0;d!==s;++d){const u=i[d],f=u.name;let g=h[f];if(g!==void 0)++g.referenceCount,a[d]=g;else{if(g=a[d],g!==void 0){g._cacheIndex===null&&(++g.referenceCount,this._addInactiveBinding(g,c,f));continue}const _=t&&t._propertyBindings[d].binding.parsedPath;g=new Nm(ct.create(n,f,_),u.ValueTypeName,u.getValueSize()),++g.referenceCount,this._addInactiveBinding(g,c,f),a[d]=g}o[d].resultBuffer=g.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){const n=(e._localRoot||this._root).uuid,i=e._clip.uuid,s=this._actionsByClip[i];this._bindAction(e,s&&s.knownActions[0]),this._addInactiveAction(e,i,n)}const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const s=t[n];s.useCount++===0&&(this._lendBinding(s),s.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const s=t[n];--s.useCount===0&&(s.restoreOriginalState(),this._takeBackBinding(s))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;const e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){const t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,n){const i=this._actions,s=this._actionsByClip;let a=s[t];if(a===void 0)a={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,s[t]=a;else{const o=a.knownActions;e._byClipCacheIndex=o.length,o.push(e)}e._cacheIndex=i.length,i.push(e),a.actionByRoot[n]=e}_removeInactiveAction(e){const t=this._actions,n=t[t.length-1],i=e._cacheIndex;n._cacheIndex=i,t[i]=n,t.pop(),e._cacheIndex=null;const s=e._clip.uuid,a=this._actionsByClip,o=a[s],c=o.knownActions,l=c[c.length-1],h=e._byClipCacheIndex;l._byClipCacheIndex=h,c[h]=l,c.pop(),e._byClipCacheIndex=null;const d=o.actionByRoot,u=(e._localRoot||this._root).uuid;delete d[u],c.length===0&&delete a[s],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const s=t[n];--s.referenceCount===0&&this._removeInactiveBinding(s)}}_lendAction(e){const t=this._actions,n=e._cacheIndex,i=this._nActiveActions++,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_takeBackAction(e){const t=this._actions,n=e._cacheIndex,i=--this._nActiveActions,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_addInactiveBinding(e,t,n){const i=this._bindingsByRootAndName,s=this._bindings;let a=i[t];a===void 0&&(a={},i[t]=a),a[n]=e,e._cacheIndex=s.length,s.push(e)}_removeInactiveBinding(e){const t=this._bindings,n=e.binding,i=n.rootNode.uuid,s=n.path,a=this._bindingsByRootAndName,o=a[i],c=t[t.length-1],l=e._cacheIndex;c._cacheIndex=l,t[l]=c,t.pop(),delete o[s],Object.keys(o).length===0&&delete a[i]}_lendBinding(e){const t=this._bindings,n=e._cacheIndex,i=this._nActiveBindings++,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_takeBackBinding(e){const t=this._bindings,n=e._cacheIndex,i=--this._nActiveBindings,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_lendControlInterpolant(){const e=this._controlInterpolants,t=this._nActiveControlInterpolants++;let n=e[t];return n===void 0&&(n=new tu(new Float32Array(2),new Float32Array(2),1,qm),n.__cacheIndex=t,e[t]=n),n}_takeBackControlInterpolant(e){const t=this._controlInterpolants,n=e.__cacheIndex,i=--this._nActiveControlInterpolants,s=t[i];e.__cacheIndex=i,t[i]=e,s.__cacheIndex=n,t[n]=s}clipAction(e,t,n){const i=t||this._root,s=i.uuid;let a=typeof e=="string"?Da.findByName(i,e):e;const o=a!==null?a.uuid:e,c=this._actionsByClip[o];let l=null;if(n===void 0&&(a!==null?n=a.blendMode:n=il),c!==void 0){const d=c.actionByRoot[s];if(d!==void 0&&d.blendMode===n)return d;l=c.knownActions[0],a===null&&(a=l._clip)}if(a===null)return null;const h=new Wm(this,a,t,n);return this._bindAction(h,l),this._addInactiveAction(h,o,s),h}existingAction(e,t){const n=t||this._root,i=n.uuid,s=typeof e=="string"?Da.findByName(n,e):e,a=s?s.uuid:e,o=this._actionsByClip[a];return o!==void 0&&o.actionByRoot[i]||null}stopAllAction(){const e=this._actions,t=this._nActiveActions;for(let n=t-1;n>=0;--n)e[n].stop();return this}update(e){e*=this.timeScale;const t=this._actions,n=this._nActiveActions,i=this.time+=e,s=Math.sign(e),a=this._accuIndex^=1;for(let l=0;l!==n;++l)t[l]._update(i,e,s,a);const o=this._bindings,c=this._nActiveBindings;for(let l=0;l!==c;++l)o[l].apply(a);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){const t=this._actions,n=e.uuid,i=this._actionsByClip,s=i[n];if(s!==void 0){const a=s.knownActions;for(let o=0,c=a.length;o!==c;++o){const l=a[o];this._deactivateAction(l);const h=l._cacheIndex,d=t[t.length-1];l._cacheIndex=null,l._byClipCacheIndex=null,d._cacheIndex=h,t[h]=d,t.pop(),this._removeInactiveBindingsForAction(l)}delete i[n]}}uncacheRoot(e){const t=e.uuid,n=this._actionsByClip;for(const a in n){const o=n[a].actionByRoot,c=o[t];c!==void 0&&(this._deactivateAction(c),this._removeInactiveAction(c))}const i=this._bindingsByRootAndName,s=i[t];if(s!==void 0)for(const a in s){const o=s[a];o.restoreOriginalState(),this._removeInactiveBinding(o)}}uncacheAction(e,t){const n=this.existingAction(e,t);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}}class ou{static{ou.prototype.isMatrix2=!0}constructor(e,t,n,i){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,i)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,i){const s=this.elements;return s[0]=e,s[2]=t,s[1]=n,s[3]=i,this}}function Ch(r,e,t,n){const i=Xm(n);switch(t){case Ud:return r*e;case Qc:return r*e/i.components*i.byteLength;case el:return r*e/i.components*i.byteLength;case rs:return r*e*2/i.components*i.byteLength;case tl:return r*e*2/i.components*i.byteLength;case Od:return r*e*3/i.components*i.byteLength;case Cn:return r*e*4/i.components*i.byteLength;case nl:return r*e*4/i.components*i.byteLength;case ua:case fa:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case pa:case ma:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case nc:case sc:return Math.max(r,16)*Math.max(e,8)/4;case tc:case ic:return Math.max(r,8)*Math.max(e,8)/2;case rc:case ac:case cc:case lc:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case oc:case ya:case hc:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case dc:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case uc:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case fc:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case pc:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case mc:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case gc:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case bc:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case xc:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case _c:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case vc:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case Mc:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case Sc:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case yc:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case Ec:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case Tc:case wc:case Ac:return Math.ceil(r/4)*Math.ceil(e/4)*16;case Rc:case Cc:return Math.ceil(r/4)*Math.ceil(e/4)*8;case Ea:case Lc:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Xm(r){switch(r){case gn:case Dd:return{byteLength:1,components:1};case yr:case Nd:case ii:return{byteLength:2,components:1};case $c:case Zc:return{byteLength:2,components:4};case ni:case Jc:case Rn:return{byteLength:4,components:1};case kd:case Fd:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:jc}}));typeof window<"u"&&(window.__THREE__?Ie("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=jc);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function cu(){let r=null,e=!1,t=null,n=null;function i(s,a){n=r.requestAnimationFrame(i),t(s,a)}return{start:function(){e!==!0&&t!==null&&r!==null&&(n=r.requestAnimationFrame(i),e=!0)},stop:function(){r!==null&&r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function Km(r){const e=new WeakMap;function t(o,c){const l=o.array,h=o.usage,d=l.byteLength,u=r.createBuffer();r.bindBuffer(c,u),r.bufferData(c,l,h),o.onUploadCallback();let f;if(l instanceof Float32Array)f=r.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)f=r.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?f=r.HALF_FLOAT:f=r.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=r.SHORT;else if(l instanceof Uint32Array)f=r.UNSIGNED_INT;else if(l instanceof Int32Array)f=r.INT;else if(l instanceof Int8Array)f=r.BYTE;else if(l instanceof Uint8Array)f=r.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:u,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:d}}function n(o,c,l){const h=c.array,d=c.updateRanges;if(r.bindBuffer(l,o),d.length===0)r.bufferSubData(l,0,h);else{d.sort((f,g)=>f.start-g.start);let u=0;for(let f=1;f<d.length;f++){const g=d[u],_=d[f];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++u,d[u]=_)}d.length=u+1;for(let f=0,g=d.length;f<g;f++){const _=d[f];r.bufferSubData(l,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}c.clearUpdateRanges()}c.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=e.get(o);c&&(r.deleteBuffer(c.buffer),e.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const l=e.get(o);if(l===void 0)e.set(o,t(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:i,remove:s,update:a}}var jm=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Ym=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Jm=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,$m=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Zm=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Qm=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,eg=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,tg=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,ng=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,ig=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,sg=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,rg=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ag=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,og=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,cg=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,lg=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,hg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,dg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,ug=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,fg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,pg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,mg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,gg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,bg=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,xg=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,_g=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,vg=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Mg=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Sg=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,yg=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Eg="gl_FragColor = linearToOutputTexel( gl_FragColor );",Tg=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,wg=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,Ag=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Rg=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Cg=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Lg=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Pg=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Ig=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Dg=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Ng=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,kg=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Fg=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Ug=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Og=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,zg=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,Bg=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,Gg=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Hg=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Vg=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Wg=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,qg=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Xg=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Kg=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,jg=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Yg=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Jg=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,$g=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Zg=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Qg=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,e0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,t0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,n0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,i0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,s0=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,r0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,a0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,o0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,c0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,l0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,h0=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,d0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,u0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,f0=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,p0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,m0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,g0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,b0=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,x0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,_0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,v0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,M0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,S0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,y0=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,E0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,T0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,w0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,A0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,R0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,C0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,L0=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,P0=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,I0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,D0=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,N0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,k0=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,F0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,U0=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,O0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,z0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,B0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,G0=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,H0=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,V0=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,W0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,q0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,X0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,K0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const j0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Y0=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,J0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,$0=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Z0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Q0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,eb=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,tb=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,nb=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,ib=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,sb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,rb=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ab=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,ob=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,cb=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,lb=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,hb=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,db=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ub=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,fb=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,pb=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,mb=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,gb=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,bb=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,xb=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,_b=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,vb=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Mb=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Sb=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,yb=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Eb=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Tb=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,wb=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Ab=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ke={alphahash_fragment:jm,alphahash_pars_fragment:Ym,alphamap_fragment:Jm,alphamap_pars_fragment:$m,alphatest_fragment:Zm,alphatest_pars_fragment:Qm,aomap_fragment:eg,aomap_pars_fragment:tg,batching_pars_vertex:ng,batching_vertex:ig,begin_vertex:sg,beginnormal_vertex:rg,bsdfs:ag,iridescence_fragment:og,bumpmap_pars_fragment:cg,clipping_planes_fragment:lg,clipping_planes_pars_fragment:hg,clipping_planes_pars_vertex:dg,clipping_planes_vertex:ug,color_fragment:fg,color_pars_fragment:pg,color_pars_vertex:mg,color_vertex:gg,common:bg,cube_uv_reflection_fragment:xg,defaultnormal_vertex:_g,displacementmap_pars_vertex:vg,displacementmap_vertex:Mg,emissivemap_fragment:Sg,emissivemap_pars_fragment:yg,colorspace_fragment:Eg,colorspace_pars_fragment:Tg,envmap_fragment:wg,envmap_common_pars_fragment:Ag,envmap_pars_fragment:Rg,envmap_pars_vertex:Cg,envmap_physical_pars_fragment:Bg,envmap_vertex:Lg,fog_vertex:Pg,fog_pars_vertex:Ig,fog_fragment:Dg,fog_pars_fragment:Ng,gradientmap_pars_fragment:kg,lightmap_pars_fragment:Fg,lights_lambert_fragment:Ug,lights_lambert_pars_fragment:Og,lights_pars_begin:zg,lights_toon_fragment:Gg,lights_toon_pars_fragment:Hg,lights_phong_fragment:Vg,lights_phong_pars_fragment:Wg,lights_physical_fragment:qg,lights_physical_pars_fragment:Xg,lights_fragment_begin:Kg,lights_fragment_maps:jg,lights_fragment_end:Yg,lightprobes_pars_fragment:Jg,logdepthbuf_fragment:$g,logdepthbuf_pars_fragment:Zg,logdepthbuf_pars_vertex:Qg,logdepthbuf_vertex:e0,map_fragment:t0,map_pars_fragment:n0,map_particle_fragment:i0,map_particle_pars_fragment:s0,metalnessmap_fragment:r0,metalnessmap_pars_fragment:a0,morphinstance_vertex:o0,morphcolor_vertex:c0,morphnormal_vertex:l0,morphtarget_pars_vertex:h0,morphtarget_vertex:d0,normal_fragment_begin:u0,normal_fragment_maps:f0,normal_pars_fragment:p0,normal_pars_vertex:m0,normal_vertex:g0,normalmap_pars_fragment:b0,clearcoat_normal_fragment_begin:x0,clearcoat_normal_fragment_maps:_0,clearcoat_pars_fragment:v0,iridescence_pars_fragment:M0,opaque_fragment:S0,packing:y0,premultiplied_alpha_fragment:E0,project_vertex:T0,dithering_fragment:w0,dithering_pars_fragment:A0,roughnessmap_fragment:R0,roughnessmap_pars_fragment:C0,shadowmap_pars_fragment:L0,shadowmap_pars_vertex:P0,shadowmap_vertex:I0,shadowmask_pars_fragment:D0,skinbase_vertex:N0,skinning_pars_vertex:k0,skinning_vertex:F0,skinnormal_vertex:U0,specularmap_fragment:O0,specularmap_pars_fragment:z0,tonemapping_fragment:B0,tonemapping_pars_fragment:G0,transmission_fragment:H0,transmission_pars_fragment:V0,uv_pars_fragment:W0,uv_pars_vertex:q0,uv_vertex:X0,worldpos_vertex:K0,background_vert:j0,background_frag:Y0,backgroundCube_vert:J0,backgroundCube_frag:$0,cube_vert:Z0,cube_frag:Q0,depth_vert:eb,depth_frag:tb,distance_vert:nb,distance_frag:ib,equirect_vert:sb,equirect_frag:rb,linedashed_vert:ab,linedashed_frag:ob,meshbasic_vert:cb,meshbasic_frag:lb,meshlambert_vert:hb,meshlambert_frag:db,meshmatcap_vert:ub,meshmatcap_frag:fb,meshnormal_vert:pb,meshnormal_frag:mb,meshphong_vert:gb,meshphong_frag:bb,meshphysical_vert:xb,meshphysical_frag:_b,meshtoon_vert:vb,meshtoon_frag:Mb,points_vert:Sb,points_frag:yb,shadow_vert:Eb,shadow_frag:Tb,sprite_vert:wb,sprite_frag:Ab},_e={common:{diffuse:{value:new be(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ge},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ge}},envmap:{envMap:{value:null},envMapRotation:{value:new Ge},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ge}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ge}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ge},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ge},normalScale:{value:new He(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ge},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ge}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ge}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ge}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new be(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new z},probesMax:{value:new z},probesResolution:{value:new z}},points:{diffuse:{value:new be(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0},uvTransform:{value:new Ge}},sprite:{diffuse:{value:new be(16777215)},opacity:{value:1},center:{value:new He(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ge},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0}}},Yn={basic:{uniforms:ln([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.fog]),vertexShader:Ke.meshbasic_vert,fragmentShader:Ke.meshbasic_frag},lambert:{uniforms:ln([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,_e.lights,{emissive:{value:new be(0)},envMapIntensity:{value:1}}]),vertexShader:Ke.meshlambert_vert,fragmentShader:Ke.meshlambert_frag},phong:{uniforms:ln([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,_e.lights,{emissive:{value:new be(0)},specular:{value:new be(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Ke.meshphong_vert,fragmentShader:Ke.meshphong_frag},standard:{uniforms:ln([_e.common,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.roughnessmap,_e.metalnessmap,_e.fog,_e.lights,{emissive:{value:new be(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ke.meshphysical_vert,fragmentShader:Ke.meshphysical_frag},toon:{uniforms:ln([_e.common,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.gradientmap,_e.fog,_e.lights,{emissive:{value:new be(0)}}]),vertexShader:Ke.meshtoon_vert,fragmentShader:Ke.meshtoon_frag},matcap:{uniforms:ln([_e.common,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,{matcap:{value:null}}]),vertexShader:Ke.meshmatcap_vert,fragmentShader:Ke.meshmatcap_frag},points:{uniforms:ln([_e.points,_e.fog]),vertexShader:Ke.points_vert,fragmentShader:Ke.points_frag},dashed:{uniforms:ln([_e.common,_e.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ke.linedashed_vert,fragmentShader:Ke.linedashed_frag},depth:{uniforms:ln([_e.common,_e.displacementmap]),vertexShader:Ke.depth_vert,fragmentShader:Ke.depth_frag},normal:{uniforms:ln([_e.common,_e.bumpmap,_e.normalmap,_e.displacementmap,{opacity:{value:1}}]),vertexShader:Ke.meshnormal_vert,fragmentShader:Ke.meshnormal_frag},sprite:{uniforms:ln([_e.sprite,_e.fog]),vertexShader:Ke.sprite_vert,fragmentShader:Ke.sprite_frag},background:{uniforms:{uvTransform:{value:new Ge},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ke.background_vert,fragmentShader:Ke.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ge}},vertexShader:Ke.backgroundCube_vert,fragmentShader:Ke.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ke.cube_vert,fragmentShader:Ke.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ke.equirect_vert,fragmentShader:Ke.equirect_frag},distance:{uniforms:ln([_e.common,_e.displacementmap,{referencePosition:{value:new z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ke.distance_vert,fragmentShader:Ke.distance_frag},shadow:{uniforms:ln([_e.lights,_e.fog,{color:{value:new be(0)},opacity:{value:1}}]),vertexShader:Ke.shadow_vert,fragmentShader:Ke.shadow_frag}};Yn.physical={uniforms:ln([Yn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ge},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ge},clearcoatNormalScale:{value:new He(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ge},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ge},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ge},sheen:{value:0},sheenColor:{value:new be(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ge},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ge},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ge},transmissionSamplerSize:{value:new He},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ge},attenuationDistance:{value:0},attenuationColor:{value:new be(0)},specularColor:{value:new be(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ge},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ge},anisotropyVector:{value:new He},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ge}}]),vertexShader:Ke.meshphysical_vert,fragmentShader:Ke.meshphysical_frag};const aa={r:0,b:0,g:0},Rb=new Ve,lu=new Ge;lu.set(-1,0,0,0,1,0,0,0,1);function Cb(r,e,t,n,i,s){const a=new be(0);let o=i===!0?0:1,c,l,h=null,d=0,u=null;function f(b){let w=b.isScene===!0?b.background:null;if(w&&w.isTexture){const x=b.backgroundBlurriness>0;w=e.get(w,x)}return w}function g(b){let w=!1;const x=f(b);x===null?p(a,o):x&&x.isColor&&(p(x,1),w=!0);const y=r.xr.getEnvironmentBlendMode();y==="additive"?t.buffers.color.setClear(0,0,0,1,s):y==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,s),(r.autoClear||w)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function _(b,w){const x=f(w);x&&(x.isCubeTexture||x.mapping===Ua)?(l===void 0&&(l=new We(new Jt(1,1,1),new Gn({name:"BackgroundCubeMaterial",uniforms:Hs(Yn.backgroundCube.uniforms),vertexShader:Yn.backgroundCube.vertexShader,fragmentShader:Yn.backgroundCube.fragmentShader,side:fn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(y,T,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(l)),l.material.uniforms.envMap.value=x,l.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(Rb.makeRotationFromEuler(w.backgroundRotation)).transpose(),x.isCubeTexture&&x.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(lu),l.material.toneMapped=et.getTransfer(x.colorSpace)!==lt,(h!==x||d!==x.version||u!==r.toneMapping)&&(l.material.needsUpdate=!0,h=x,d=x.version,u=r.toneMapping),l.layers.enableAll(),b.unshift(l,l.geometry,l.material,0,0,null)):x&&x.isTexture&&(c===void 0&&(c=new We(new Vi(2,2),new Gn({name:"BackgroundMaterial",uniforms:Hs(Yn.background.uniforms),vertexShader:Yn.background.vertexShader,fragmentShader:Yn.background.fragmentShader,side:Gi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=x,c.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,c.material.toneMapped=et.getTransfer(x.colorSpace)!==lt,x.matrixAutoUpdate===!0&&x.updateMatrix(),c.material.uniforms.uvTransform.value.copy(x.matrix),(h!==x||d!==x.version||u!==r.toneMapping)&&(c.material.needsUpdate=!0,h=x,d=x.version,u=r.toneMapping),c.layers.enableAll(),b.unshift(c,c.geometry,c.material,0,0,null))}function p(b,w){b.getRGB(aa,eu(r)),t.buffers.color.setClear(aa.r,aa.g,aa.b,w,s)}function m(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(b,w=1){a.set(b),o=w,p(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(b){o=b,p(a,o)},render:g,addToRenderList:_,dispose:m}}function Lb(r,e){const t=r.getParameter(r.MAX_VERTEX_ATTRIBS),n={},i=u(null);let s=i,a=!1;function o(U,H,B,F,V){let te=!1;const J=d(U,F,B,H);s!==J&&(s=J,l(s.object)),te=f(U,F,B,V),te&&g(U,F,B,V),V!==null&&e.update(V,r.ELEMENT_ARRAY_BUFFER),(te||a)&&(a=!1,x(U,H,B,F),V!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(V).buffer))}function c(){return r.createVertexArray()}function l(U){return r.bindVertexArray(U)}function h(U){return r.deleteVertexArray(U)}function d(U,H,B,F){const V=F.wireframe===!0;let te=n[H.id];te===void 0&&(te={},n[H.id]=te);const J=U.isInstancedMesh===!0?U.id:0;let ue=te[J];ue===void 0&&(ue={},te[J]=ue);let Y=ue[B.id];Y===void 0&&(Y={},ue[B.id]=Y);let ce=Y[V];return ce===void 0&&(ce=u(c()),Y[V]=ce),ce}function u(U){const H=[],B=[],F=[];for(let V=0;V<t;V++)H[V]=0,B[V]=0,F[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:H,enabledAttributes:B,attributeDivisors:F,object:U,attributes:{},index:null}}function f(U,H,B,F){const V=s.attributes,te=H.attributes;let J=0;const ue=B.getAttributes();for(const Y in ue)if(ue[Y].location>=0){const he=V[Y];let Me=te[Y];if(Me===void 0&&(Y==="instanceMatrix"&&U.instanceMatrix&&(Me=U.instanceMatrix),Y==="instanceColor"&&U.instanceColor&&(Me=U.instanceColor)),he===void 0||he.attribute!==Me||Me&&he.data!==Me.data)return!0;J++}return s.attributesNum!==J||s.index!==F}function g(U,H,B,F){const V={},te=H.attributes;let J=0;const ue=B.getAttributes();for(const Y in ue)if(ue[Y].location>=0){let he=te[Y];he===void 0&&(Y==="instanceMatrix"&&U.instanceMatrix&&(he=U.instanceMatrix),Y==="instanceColor"&&U.instanceColor&&(he=U.instanceColor));const Me={};Me.attribute=he,he&&he.data&&(Me.data=he.data),V[Y]=Me,J++}s.attributes=V,s.attributesNum=J,s.index=F}function _(){const U=s.newAttributes;for(let H=0,B=U.length;H<B;H++)U[H]=0}function p(U){m(U,0)}function m(U,H){const B=s.newAttributes,F=s.enabledAttributes,V=s.attributeDivisors;B[U]=1,F[U]===0&&(r.enableVertexAttribArray(U),F[U]=1),V[U]!==H&&(r.vertexAttribDivisor(U,H),V[U]=H)}function b(){const U=s.newAttributes,H=s.enabledAttributes;for(let B=0,F=H.length;B<F;B++)H[B]!==U[B]&&(r.disableVertexAttribArray(B),H[B]=0)}function w(U,H,B,F,V,te,J){J===!0?r.vertexAttribIPointer(U,H,B,V,te):r.vertexAttribPointer(U,H,B,F,V,te)}function x(U,H,B,F){_();const V=F.attributes,te=B.getAttributes(),J=H.defaultAttributeValues;for(const ue in te){const Y=te[ue];if(Y.location>=0){let ce=V[ue];if(ce===void 0&&(ue==="instanceMatrix"&&U.instanceMatrix&&(ce=U.instanceMatrix),ue==="instanceColor"&&U.instanceColor&&(ce=U.instanceColor)),ce!==void 0){const he=ce.normalized,Me=ce.itemSize,Ae=e.get(ce);if(Ae===void 0)continue;const Je=Ae.buffer,je=Ae.type,Be=Ae.bytesPerElement,se=je===r.INT||je===r.UNSIGNED_INT||ce.gpuType===Jc;if(ce.isInterleavedBufferAttribute){const de=ce.data,Te=de.stride,ze=ce.offset;if(de.isInstancedInterleavedBuffer){for(let ye=0;ye<Y.locationSize;ye++)m(Y.location+ye,de.meshPerAttribute);U.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=de.meshPerAttribute*de.count)}else for(let ye=0;ye<Y.locationSize;ye++)p(Y.location+ye);r.bindBuffer(r.ARRAY_BUFFER,Je);for(let ye=0;ye<Y.locationSize;ye++)w(Y.location+ye,Me/Y.locationSize,je,he,Te*Be,(ze+Me/Y.locationSize*ye)*Be,se)}else{if(ce.isInstancedBufferAttribute){for(let de=0;de<Y.locationSize;de++)m(Y.location+de,ce.meshPerAttribute);U.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=ce.meshPerAttribute*ce.count)}else for(let de=0;de<Y.locationSize;de++)p(Y.location+de);r.bindBuffer(r.ARRAY_BUFFER,Je);for(let de=0;de<Y.locationSize;de++)w(Y.location+de,Me/Y.locationSize,je,he,Me*Be,Me/Y.locationSize*de*Be,se)}}else if(J!==void 0){const he=J[ue];if(he!==void 0)switch(he.length){case 2:r.vertexAttrib2fv(Y.location,he);break;case 3:r.vertexAttrib3fv(Y.location,he);break;case 4:r.vertexAttrib4fv(Y.location,he);break;default:r.vertexAttrib1fv(Y.location,he)}}}}b()}function y(){R();for(const U in n){const H=n[U];for(const B in H){const F=H[B];for(const V in F){const te=F[V];for(const J in te)h(te[J].object),delete te[J];delete F[V]}}delete n[U]}}function T(U){if(n[U.id]===void 0)return;const H=n[U.id];for(const B in H){const F=H[B];for(const V in F){const te=F[V];for(const J in te)h(te[J].object),delete te[J];delete F[V]}}delete n[U.id]}function C(U){for(const H in n){const B=n[H];for(const F in B){const V=B[F];if(V[U.id]===void 0)continue;const te=V[U.id];for(const J in te)h(te[J].object),delete te[J];delete V[U.id]}}}function v(U){for(const H in n){const B=n[H],F=U.isInstancedMesh===!0?U.id:0,V=B[F];if(V!==void 0){for(const te in V){const J=V[te];for(const ue in J)h(J[ue].object),delete J[ue];delete V[te]}delete B[F],Object.keys(B).length===0&&delete n[H]}}}function R(){D(),a=!0,s!==i&&(s=i,l(s.object))}function D(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:R,resetDefaultState:D,dispose:y,releaseStatesOfGeometry:T,releaseStatesOfObject:v,releaseStatesOfProgram:C,initAttributes:_,enableAttribute:p,disableUnusedAttributes:b}}function Pb(r,e,t){let n;function i(c){n=c}function s(c,l){r.drawArrays(n,c,l),t.update(l,n,1)}function a(c,l,h){h!==0&&(r.drawArraysInstanced(n,c,l,h),t.update(l,n,h))}function o(c,l,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,l,0,h);let u=0;for(let f=0;f<h;f++)u+=l[f];t.update(u,n,1)}this.setMode=i,this.render=s,this.renderInstances=a,this.renderMultiDraw=o}function Ib(r,e,t,n){let i;function s(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const C=e.get("EXT_texture_filter_anisotropic");i=r.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(C){return!(C!==Cn&&n.convert(C)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(C){const v=C===ii&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(C!==gn&&C!==Rn&&!v&&n.convert(C)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE))}function c(C){if(C==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const h=c(l);h!==l&&(Ie("WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);const d=t.logarithmicDepthBuffer===!0,u=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&u===!1&&Ie("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const f=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),g=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=r.getParameter(r.MAX_TEXTURE_SIZE),p=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),m=r.getParameter(r.MAX_VERTEX_ATTRIBS),b=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),w=r.getParameter(r.MAX_VARYING_VECTORS),x=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),y=r.getParameter(r.MAX_SAMPLES),T=r.getParameter(r.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:d,reversedDepthBuffer:u,maxTextures:f,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:p,maxAttributes:m,maxVertexUniforms:b,maxVaryings:w,maxFragmentUniforms:x,maxSamples:y,samples:T}}function Db(r){const e=this;let t=null,n=0,i=!1,s=!1;const a=new Ni,o=new Ge,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){const f=d.length!==0||u||n!==0||i;return i=u,n=d.length,f},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,u){t=h(d,u,0)},this.setState=function(d,u,f){const g=d.clippingPlanes,_=d.clipIntersection,p=d.clipShadows,m=r.get(d);if(!i||g===null||g.length===0||s&&!p)s?h(null):l();else{const b=s?0:n,w=b*4;let x=m.clippingState||null;c.value=x,x=h(g,u,w,f);for(let y=0;y!==w;++y)x[y]=t[y];m.clippingState=x,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=b}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(d,u,f,g){const _=d!==null?d.length:0;let p=null;if(_!==0){if(p=c.value,g!==!0||p===null){const m=f+_*4,b=u.matrixWorldInverse;o.getNormalMatrix(b),(p===null||p.length<m)&&(p=new Float32Array(m));for(let w=0,x=f;w!==_;++w,x+=4)a.copy(d[w]).applyMatrix4(b,o),a.normal.toArray(p,x),p[x+3]=a.constant}c.value=p,c.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,p}}const Ls=4,Nb=6,kb=20,Fb=256,rr=new Ga,Lh=new be;let To=null,wo=0,Ao=0,Ro=!1;const Ub=new z,Zi=new z;class Ph{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,i=100,s={}){const{size:a=256,position:o=Ub}=s;To=this._renderer.getRenderTarget(),wo=this._renderer.getActiveCubeFace(),Ao=this._renderer.getActiveMipmapLevel(),Ro=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,n,i,c,o),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Nh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Dh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(To,wo,Ao),this._renderer.xr.enabled=Ro,e.scissorTest=!1,Ts(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ss||e.mapping===Us?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),To=this._renderer.getRenderTarget(),wo=this._renderer.getActiveCubeFace(),Ao=this._renderer.getActiveMipmapLevel(),Ro=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Vt,minFilter:Vt,generateMipmaps:!1,type:ii,format:Cn,colorSpace:xn,depthBuffer:!1},i=Ih(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ih(e,t,n);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=Ob(s)),this._blurMaterial=Bb(s,e,t),this._ggxMaterial=zb(s,e,t)}return i}_compileMaterial(e){const t=new We(new Ct,e);this._renderer.compile(t,rr)}_sceneToCubeUV(e,t,n,i,s){const c=new dn(90,1,t,n),l=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],d=this._renderer,u=d.autoClear,f=d.toneMapping;d.getClearColor(Lh),d.toneMapping=ti,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(i),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new We(new Jt,new Tt({name:"PMREM.Background",side:fn,depthWrite:!1,depthTest:!1})));const _=this._backgroundBox,p=_.material;let m=!1;const b=e.background;b?b.isColor&&(p.color.copy(b),e.background=null,m=!0):(p.color.copy(Lh),m=!0);for(let w=0;w<6;w++){const x=w%3;x===0?(c.up.set(0,l[w],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x+h[w],s.y,s.z)):x===1?(c.up.set(0,0,l[w]),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y+h[w],s.z)):(c.up.set(0,l[w],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y,s.z+h[w]));const y=this._cubeSize;Ts(i,x*y,w>2?y:0,y,y),d.setRenderTarget(i),m&&d.render(_,c),d.render(e,c)}d.toneMapping=f,d.autoClear=u,e.background=b}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===ss||e.mapping===Us;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Nh()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Dh());const s=i?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=s;const o=s.uniforms;o.envMap.value=e;const c=this._cubeSize;Ts(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(a,rr)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const i=this._lodMeshes.length;for(let s=1;s<i;s++)this._applyGGXFilter(e,s-1,s);t.autoClear=n}_applyGGXFilter(e,t,n){const i=this._renderer,s=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;const c=a.uniforms,l=n/(this._lodMeshes.length-1),h=t/(this._lodMeshes.length-1),d=Math.sqrt(l*l-h*h),u=l*1.25,f=d*u,{_lodMax:g}=this,_=this._sizeLods[n],p=3*_*(n>g-Ls?n-g+Ls:0),m=4*(this._cubeSize-_);c.envMap.value=e.texture,c.roughness.value=f,c.mipInt.value=g-t,Ts(s,p,m,3*_,2*_),i.setRenderTarget(s),i.render(o,rr),c.envMap.value=s.texture,c.roughness.value=0,c.mipInt.value=g-n,Ts(e,p,m,3*_,2*_),i.setRenderTarget(e),i.render(o,rr)}_blur(e,t,n,i){const s=this._pingPongRenderTarget,a=Math.min(i,Math.PI)/Math.SQRT2;this._blurPass(e,s,t,n,a),this._blurPass(s,e,n,n,a)}_blurPass(e,t,n,i,s){const a=this._renderer,o=this._blurMaterial,c=this._lodMeshes[i];c.material=o;const l=o.uniforms;l.envMap.value=e.texture,l.sigma.value=s,l.mipInt.value=this._lodMax-n;const h=this._sizeLods[i],d=3*h*(i>this._lodMax-Ls?i-this._lodMax+Ls:0),u=4*(this._cubeSize-h);Ts(t,d,u,3*h,2*h),a.setRenderTarget(t),a.render(c,rr)}}function Ob(r){const e=[],t=[];let n=r;const i=r-Ls+1+Nb;for(let s=0;s<i;s++){const a=Math.pow(2,n);e.push(a);const o=1/(a-2),c=-o,l=1+o,h=[c,c,l,c,l,l,c,c,l,l,c,l],d=6,u=6,f=3,g=new Float32Array(f*u*d),_=new Float32Array(f*u*d);for(let m=0;m<d;m++){const b=m%3*2/3-1,w=m>2?0:-1,x=[b,w,0,b+2/3,w,0,b+2/3,w+1,0,b,w,0,b+2/3,w+1,0,b,w+1,0];g.set(x,f*u*m);for(let y=0;y<u;y++){const T=h[y*2]*2-1,C=h[y*2+1]*2-1;m===0?Zi.set(1,C,T):m===1?Zi.set(-T,1,-C):m===2?Zi.set(-T,C,1):m===3?Zi.set(-1,C,-T):m===4?Zi.set(-T,-1,C):Zi.set(T,C,-1),Zi.toArray(_,(m*u+y)*f)}}const p=new Ct;p.setAttribute("position",new Rt(g,f)),p.setAttribute("outputDirection",new Rt(_,f)),t.push(new We(p,null)),n>Ls&&n--}return{lodMeshes:t,sizeLods:e}}function Ih(r,e,t){const n=new zn(r,e,t);return n.texture.mapping=Ua,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ts(r,e,t,n,i){r.viewport.set(e,t,n,i),r.scissor.set(e,t,n,i)}function zb(r,e,t){return new Gn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Fb,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Ha(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:xi,depthTest:!1,depthWrite:!1})}function Bb(r,e,t){return new Gn({name:"SphericalGaussianBlur",defines:{SAMPLES:kb,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Ha(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:xi,depthTest:!1,depthWrite:!1})}function Dh(){return new Gn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ha(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:xi,depthTest:!1,depthWrite:!1})}function Nh(){return new Gn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ha(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:xi,depthTest:!1,depthWrite:!1})}function Ha(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}class hu extends zn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new Zd(i),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new Jt(5,5,5),s=new Gn({name:"CubemapFromEquirect",uniforms:Hs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:fn,blending:xi});s.uniforms.tEquirect.value=t;const a=new We(i,s),o=t.minFilter;return t.minFilter===gi&&(t.minFilter=Vt),new Im(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,i=!0){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,i);e.setRenderTarget(s)}}function Gb(r){let e=new WeakMap,t=new WeakMap,n=null;function i(u,f=!1){return u==null?null:f?a(u):s(u)}function s(u){if(u&&u.isTexture){const f=u.mapping;if(f===Ya||f===Ja)if(e.has(u)){const g=e.get(u).texture;return o(g,u.mapping)}else{const g=u.image;if(g&&g.height>0){const _=new hu(g.height);return _.fromEquirectangularTexture(r,u),e.set(u,_),u.addEventListener("dispose",l),o(_.texture,u.mapping)}else return null}}return u}function a(u){if(u&&u.isTexture){const f=u.mapping,g=f===Ya||f===Ja,_=f===ss||f===Us;if(g||_){let p=t.get(u);const m=p!==void 0?p.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==m)return n===null&&(n=new Ph(r)),p=g?n.fromEquirectangular(u,p):n.fromCubemap(u,p),p.texture.pmremVersion=u.pmremVersion,t.set(u,p),p.texture;if(p!==void 0)return p.texture;{const b=u.image;return g&&b&&b.height>0||_&&b&&c(b)?(n===null&&(n=new Ph(r)),p=g?n.fromEquirectangular(u):n.fromCubemap(u),p.texture.pmremVersion=u.pmremVersion,t.set(u,p),u.addEventListener("dispose",h),p.texture):null}}}return u}function o(u,f){return f===Ya?u.mapping=ss:f===Ja&&(u.mapping=Us),u}function c(u){let f=0;const g=6;for(let _=0;_<g;_++)u[_]!==void 0&&f++;return f===g}function l(u){const f=u.target;f.removeEventListener("dispose",l);const g=e.get(f);g!==void 0&&(e.delete(f),g.dispose())}function h(u){const f=u.target;f.removeEventListener("dispose",h);const g=t.get(f);g!==void 0&&(t.delete(f),g.dispose())}function d(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:d}}function Hb(r){const e={};function t(n){if(e[n]!==void 0)return e[n];const i=r.getExtension(n);return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const i=t(n);return i===null&&Ds("WebGLRenderer: "+n+" extension not supported."),i}}}function Vb(r,e,t,n){const i={},s=new WeakMap;function a(d){const u=d.target;u.index!==null&&e.remove(u.index);for(const g in u.attributes)e.remove(u.attributes[g]);u.removeEventListener("dispose",a),delete i[u.id];const f=s.get(u);f&&(e.remove(f),s.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,t.memory.geometries--}function o(d,u){return i[u.id]===!0||(u.addEventListener("dispose",a),i[u.id]=!0,t.memory.geometries++),u}function c(d){const u=d.attributes;for(const f in u)e.update(u[f],r.ARRAY_BUFFER)}function l(d){const u=[],f=d.index,g=d.attributes.position;let _=0;if(g===void 0)return;if(f!==null){const b=f.array;_=f.version;for(let w=0,x=b.length;w<x;w+=3){const y=b[w+0],T=b[w+1],C=b[w+2];u.push(y,T,T,C,C,y)}}else{const b=g.array;_=g.version;for(let w=0,x=b.length/3-1;w<x;w+=3){const y=w+0,T=w+1,C=w+2;u.push(y,T,T,C,C,y)}}const p=new(g.count>=65535?jd:Kd)(u,1);p.version=_;const m=s.get(d);m&&e.remove(m),s.set(d,p)}function h(d){const u=s.get(d);if(u){const f=d.index;f!==null&&u.version<f.version&&l(d)}else l(d);return s.get(d)}return{get:o,update:c,getWireframeAttribute:h}}function Wb(r,e,t){let n;function i(d){n=d}let s,a;function o(d){s=d.type,a=d.bytesPerElement}function c(d,u){r.drawElements(n,u,s,d*a),t.update(u,n,1)}function l(d,u,f){f!==0&&(r.drawElementsInstanced(n,u,s,d*a,f),t.update(u,n,f))}function h(d,u,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,u,0,s,d,0,f);let _=0;for(let p=0;p<f;p++)_+=u[p];t.update(_,n,1)}this.setMode=i,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=h}function qb(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(t.calls++,a){case r.TRIANGLES:t.triangles+=o*(s/3);break;case r.LINES:t.lines+=o*(s/2);break;case r.LINE_STRIP:t.lines+=o*(s-1);break;case r.LINE_LOOP:t.lines+=o*s;break;case r.POINTS:t.points+=o*s;break;default:Oe("WebGLInfo: Unknown draw mode:",a);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function Xb(r,e,t){const n=new WeakMap,i=new ft;function s(a,o,c){const l=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=h!==void 0?h.length:0;let u=n.get(o);if(u===void 0||u.count!==d){let D=function(){v.dispose(),n.delete(o),o.removeEventListener("dispose",D)};var f=D;u!==void 0&&u.texture.dispose();const g=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,p=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],b=o.morphAttributes.normal||[],w=o.morphAttributes.color||[];let x=0;g===!0&&(x=1),_===!0&&(x=2),p===!0&&(x=3);let y=o.attributes.position.count*x,T=1;y>e.maxTextureSize&&(T=Math.ceil(y/e.maxTextureSize),y=e.maxTextureSize);const C=new Float32Array(y*T*4*d),v=new Wd(C,y,T,d);v.type=Rn,v.needsUpdate=!0;const R=x*4;for(let U=0;U<d;U++){const H=m[U],B=b[U],F=w[U],V=y*T*4*U;for(let te=0;te<H.count;te++){const J=te*R;g===!0&&(i.fromBufferAttribute(H,te),C[V+J+0]=i.x,C[V+J+1]=i.y,C[V+J+2]=i.z,C[V+J+3]=0),_===!0&&(i.fromBufferAttribute(B,te),C[V+J+4]=i.x,C[V+J+5]=i.y,C[V+J+6]=i.z,C[V+J+7]=0),p===!0&&(i.fromBufferAttribute(F,te),C[V+J+8]=i.x,C[V+J+9]=i.y,C[V+J+10]=i.z,C[V+J+11]=F.itemSize===4?i.w:1)}}u={count:d,texture:v,size:new He(y,T)},n.set(o,u),o.addEventListener("dispose",D)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(r,"morphTexture",a.morphTexture,t);else{let g=0;for(let p=0;p<l.length;p++)g+=l[p];const _=o.morphTargetsRelative?1:1-g;c.getUniforms().setValue(r,"morphTargetBaseInfluence",_),c.getUniforms().setValue(r,"morphTargetInfluences",l)}c.getUniforms().setValue(r,"morphTargetsTexture",u.texture,t),c.getUniforms().setValue(r,"morphTargetsTextureSize",u.size)}return{update:s}}function Kb(r,e,t,n,i){let s=new WeakMap;function a(l){const h=i.render.frame,d=l.geometry,u=e.get(l,d);if(s.get(u)!==h&&(e.update(u),s.set(u,h)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),s.get(l)!==h&&(t.update(l.instanceMatrix,r.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,r.ARRAY_BUFFER),s.set(l,h))),l.isSkinnedMesh){const f=l.skeleton;s.get(f)!==h&&(f.update(),s.set(f,h))}return u}function o(){s=new WeakMap}function c(l){const h=l.target;h.removeEventListener("dispose",c),n.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:a,dispose:o}}const jb={[Td]:"LINEAR_TONE_MAPPING",[wd]:"REINHARD_TONE_MAPPING",[Ad]:"CINEON_TONE_MAPPING",[Yc]:"ACES_FILMIC_TONE_MAPPING",[Cd]:"AGX_TONE_MAPPING",[Ld]:"NEUTRAL_TONE_MAPPING",[Rd]:"CUSTOM_TONE_MAPPING"};function Yb(r,e,t,n,i,s){const a=new zn(e,t,{type:r,depthBuffer:i,stencilBuffer:s,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let o=null,c=null;const l=new Ct;l.setAttribute("position",new mt([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute("uv",new mt([0,2,0,0,2,0],2));const h=new cm({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),d=new We(l,h),u=new Ga(-1,1,1,-1,0,1);let f=null,g=null,_=!1,p,m=null,b=[],w=!1;this.setSize=function(x,y){a.setSize(x,y),o!==null&&o.setSize(x,y),c!==null&&c.setSize(x,y);for(let T=0;T<b.length;T++){const C=b[T];C.setSize&&C.setSize(x,y)}},this.setEffects=function(x){b=x,w=b.length>0&&b[0].isRenderPass===!0;const y=a.width,T=a.height;b.length>0&&o===null&&(o=new zn(y,T,{type:ii,depthBuffer:!1,stencilBuffer:!1}),c=new zn(y,T,{type:ii,depthBuffer:!1,stencilBuffer:!1}));for(let C=0;C<b.length;C++){const v=b[C];v.setSize&&v.setSize(y,T)}},this.begin=function(x,y){if(_||x.toneMapping===ti&&b.length===0)return!1;if(m=y,y!==null){const T=y.width,C=y.height;(a.width!==T||a.height!==C)&&this.setSize(T,C)}return w===!1&&x.setRenderTarget(a),p=x.toneMapping,x.toneMapping=ti,!0},this.hasRenderPass=function(){return w},this.end=function(x,y){x.toneMapping=p,_=!0;let T=a,C=o;for(let v=0;v<b.length;v++){const R=b[v];R.enabled!==!1&&(R.render(x,C,T,y),R.needsSwap!==!1&&(T=C,C=C===o?c:o))}if(f!==x.outputColorSpace||g!==x.toneMapping){f=x.outputColorSpace,g=x.toneMapping,h.defines={},et.getTransfer(f)===lt&&(h.defines.SRGB_TRANSFER="");const v=jb[g];v&&(h.defines[v]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=T.texture,x.setRenderTarget(m),x.render(d,u),m=null,_=!1},this.isCompositing=function(){return _},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),c!==null&&c.dispose(),l.dispose(),h.dispose()}}const du=new Wt,Nc=new Cr(1,1),uu=new Wd,fu=new Ip,pu=new Zd,kh=[],Fh=[],Uh=new Float32Array(16),Oh=new Float32Array(9),zh=new Float32Array(4);function js(r,e,t){const n=r[0];if(n<=0||n>0)return r;const i=e*t;let s=kh[i];if(s===void 0&&(s=new Float32Array(i),kh[i]=s),e!==0){n.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,r[a].toArray(s,o)}return s}function qt(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function Xt(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function Va(r,e){let t=Fh[e];t===void 0&&(t=new Int32Array(e),Fh[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function Jb(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function $b(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(qt(t,e))return;r.uniform2fv(this.addr,e),Xt(t,e)}}function Zb(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(qt(t,e))return;r.uniform3fv(this.addr,e),Xt(t,e)}}function Qb(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(qt(t,e))return;r.uniform4fv(this.addr,e),Xt(t,e)}}function ex(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(qt(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),Xt(t,e)}else{if(qt(t,n))return;zh.set(n),r.uniformMatrix2fv(this.addr,!1,zh),Xt(t,n)}}function tx(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(qt(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),Xt(t,e)}else{if(qt(t,n))return;Oh.set(n),r.uniformMatrix3fv(this.addr,!1,Oh),Xt(t,n)}}function nx(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(qt(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),Xt(t,e)}else{if(qt(t,n))return;Uh.set(n),r.uniformMatrix4fv(this.addr,!1,Uh),Xt(t,n)}}function ix(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function sx(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(qt(t,e))return;r.uniform2iv(this.addr,e),Xt(t,e)}}function rx(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(qt(t,e))return;r.uniform3iv(this.addr,e),Xt(t,e)}}function ax(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(qt(t,e))return;r.uniform4iv(this.addr,e),Xt(t,e)}}function ox(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function cx(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(qt(t,e))return;r.uniform2uiv(this.addr,e),Xt(t,e)}}function lx(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(qt(t,e))return;r.uniform3uiv(this.addr,e),Xt(t,e)}}function hx(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(qt(t,e))return;r.uniform4uiv(this.addr,e),Xt(t,e)}}function dx(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);let s;this.type===r.SAMPLER_2D_SHADOW?(Nc.compareFunction=t.isReversedDepthBuffer()?rl:sl,s=Nc):s=du,t.setTexture2D(e||s,i)}function ux(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||fu,i)}function fx(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||pu,i)}function px(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||uu,i)}function mx(r){switch(r){case 5126:return Jb;case 35664:return $b;case 35665:return Zb;case 35666:return Qb;case 35674:return ex;case 35675:return tx;case 35676:return nx;case 5124:case 35670:return ix;case 35667:case 35671:return sx;case 35668:case 35672:return rx;case 35669:case 35673:return ax;case 5125:return ox;case 36294:return cx;case 36295:return lx;case 36296:return hx;case 35678:case 36198:case 36298:case 36306:case 35682:return dx;case 35679:case 36299:case 36307:return ux;case 35680:case 36300:case 36308:case 36293:return fx;case 36289:case 36303:case 36311:case 36292:return px}}function gx(r,e){r.uniform1fv(this.addr,e)}function bx(r,e){const t=js(e,this.size,2);r.uniform2fv(this.addr,t)}function xx(r,e){const t=js(e,this.size,3);r.uniform3fv(this.addr,t)}function _x(r,e){const t=js(e,this.size,4);r.uniform4fv(this.addr,t)}function vx(r,e){const t=js(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function Mx(r,e){const t=js(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function Sx(r,e){const t=js(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function yx(r,e){r.uniform1iv(this.addr,e)}function Ex(r,e){r.uniform2iv(this.addr,e)}function Tx(r,e){r.uniform3iv(this.addr,e)}function wx(r,e){r.uniform4iv(this.addr,e)}function Ax(r,e){r.uniform1uiv(this.addr,e)}function Rx(r,e){r.uniform2uiv(this.addr,e)}function Cx(r,e){r.uniform3uiv(this.addr,e)}function Lx(r,e){r.uniform4uiv(this.addr,e)}function Px(r,e,t){const n=this.cache,i=e.length,s=Va(t,i);qt(n,s)||(r.uniform1iv(this.addr,s),Xt(n,s));let a;this.type===r.SAMPLER_2D_SHADOW?a=Nc:a=du;for(let o=0;o!==i;++o)t.setTexture2D(e[o]||a,s[o])}function Ix(r,e,t){const n=this.cache,i=e.length,s=Va(t,i);qt(n,s)||(r.uniform1iv(this.addr,s),Xt(n,s));for(let a=0;a!==i;++a)t.setTexture3D(e[a]||fu,s[a])}function Dx(r,e,t){const n=this.cache,i=e.length,s=Va(t,i);qt(n,s)||(r.uniform1iv(this.addr,s),Xt(n,s));for(let a=0;a!==i;++a)t.setTextureCube(e[a]||pu,s[a])}function Nx(r,e,t){const n=this.cache,i=e.length,s=Va(t,i);qt(n,s)||(r.uniform1iv(this.addr,s),Xt(n,s));for(let a=0;a!==i;++a)t.setTexture2DArray(e[a]||uu,s[a])}function kx(r){switch(r){case 5126:return gx;case 35664:return bx;case 35665:return xx;case 35666:return _x;case 35674:return vx;case 35675:return Mx;case 35676:return Sx;case 5124:case 35670:return yx;case 35667:case 35671:return Ex;case 35668:case 35672:return Tx;case 35669:case 35673:return wx;case 5125:return Ax;case 36294:return Rx;case 36295:return Cx;case 36296:return Lx;case 35678:case 36198:case 36298:case 36306:case 35682:return Px;case 35679:case 36299:case 36307:return Ix;case 35680:case 36300:case 36308:case 36293:return Dx;case 36289:case 36303:case 36311:case 36292:return Nx}}class Fx{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=mx(t.type)}}class Ux{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=kx(t.type)}}class Ox{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let s=0,a=i.length;s!==a;++s){const o=i[s];o.setValue(e,t[o.id],n)}}}const Co=/(\w+)(\])?(\[|\.)?/g;function Bh(r,e){r.seq.push(e),r.map[e.id]=e}function zx(r,e,t){const n=r.name,i=n.length;for(Co.lastIndex=0;;){const s=Co.exec(n),a=Co.lastIndex;let o=s[1];const c=s[2]==="]",l=s[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===i){Bh(t,l===void 0?new Fx(o,r,e):new Ux(o,r,e));break}else{let d=t.map[o];d===void 0&&(d=new Ox(o),Bh(t,d)),t=d}}}class ba{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){const o=e.getActiveUniform(t,a),c=e.getUniformLocation(t,o.name);zx(o,c,this)}const i=[],s=[];for(const a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?i.push(a):s.push(a);i.length>0&&(this.seq=i.concat(s))}setValue(e,t,n,i){const s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,a=t.length;s!==a;++s){const o=t[s],c=n[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,s=e.length;i!==s;++i){const a=e[i];a.id in t&&n.push(a)}return n}}function Gh(r,e,t){const n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}const Bx=37297;let Gx=0;function Hx(r,e){const t=r.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=i;a<s;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}const Hh=new Ge;function Vx(r){et._getMatrix(Hh,et.workingColorSpace,r);const e=`mat3( ${Hh.elements.map(t=>t.toFixed(4))} )`;switch(et.getTransfer(r)){case Aa:return[e,"LinearTransferOETF"];case lt:return[e,"sRGBTransferOETF"];default:return Ie("WebGLProgram: Unsupported color space: ",r),[e,"LinearTransferOETF"]}}function Vh(r,e,t){const n=r.getShaderParameter(e,r.COMPILE_STATUS),s=(r.getShaderInfoLog(e)||"").trim();if(n&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+s+`

`+Hx(r.getShaderSource(e),o)}else return s}function Wx(r,e){const t=Vx(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const qx={[Td]:"Linear",[wd]:"Reinhard",[Ad]:"Cineon",[Yc]:"ACESFilmic",[Cd]:"AgX",[Ld]:"Neutral",[Rd]:"Custom"};function Xx(r,e){const t=qx[e];return t===void 0?(Ie("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+r+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const oa=new z;function Kx(){et.getLuminanceCoefficients(oa);const r=oa.x.toFixed(4),e=oa.y.toFixed(4),t=oa.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function jx(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(mr).join(`
`)}function Yx(r){const e=[];for(const t in r){const n=r[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Jx(r,e){const t={},n=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const s=r.getActiveAttrib(e,i),a=s.name;let o=1;s.type===r.FLOAT_MAT2&&(o=2),s.type===r.FLOAT_MAT3&&(o=3),s.type===r.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:r.getAttribLocation(e,a),locationSize:o}}return t}function mr(r){return r!==""}function Wh(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function qh(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const $x=/^[ \t]*#include +<([\w\d./]+)>/gm;function kc(r){return r.replace($x,Qx)}const Zx=new Map;function Qx(r,e){let t=Ke[e];if(t===void 0){const n=Zx.get(e);if(n!==void 0)t=Ke[n],Ie('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return kc(t)}const e_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Xh(r){return r.replace(e_,t_)}function t_(r,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function Kh(r){let e=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const n_={[br]:"SHADOWMAP_TYPE_PCF",[fr]:"SHADOWMAP_TYPE_VSM"};function i_(r){return n_[r.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const s_={[ss]:"ENVMAP_TYPE_CUBE",[Us]:"ENVMAP_TYPE_CUBE",[Ua]:"ENVMAP_TYPE_CUBE_UV"};function r_(r){return r.envMap===!1?"ENVMAP_TYPE_CUBE":s_[r.envMapMode]||"ENVMAP_TYPE_CUBE"}const a_={[Us]:"ENVMAP_MODE_REFRACTION"};function o_(r){return r.envMap===!1?"ENVMAP_MODE_REFLECTION":a_[r.envMapMode]||"ENVMAP_MODE_REFLECTION"}const c_={[Ed]:"ENVMAP_BLENDING_MULTIPLY",[Wf]:"ENVMAP_BLENDING_MIX",[qf]:"ENVMAP_BLENDING_ADD"};function l_(r){return r.envMap===!1?"ENVMAP_BLENDING_NONE":c_[r.combine]||"ENVMAP_BLENDING_NONE"}function h_(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function d_(r,e,t,n){const i=r.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const c=i_(t),l=r_(t),h=o_(t),d=l_(t),u=h_(t),f=jx(t),g=Yx(s),_=i.createProgram();let p,m,b=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(mr).join(`
`),p.length>0&&(p+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(mr).join(`
`),m.length>0&&(m+=`
`)):(p=[Kh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(mr).join(`
`),m=[Kh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ti?"#define TONE_MAPPING":"",t.toneMapping!==ti?Ke.tonemapping_pars_fragment:"",t.toneMapping!==ti?Xx("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ke.colorspace_pars_fragment,Wx("linearToOutputTexel",t.outputColorSpace),Kx(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(mr).join(`
`)),a=kc(a),a=Wh(a,t),a=qh(a,t),o=kc(o),o=Wh(o,t),o=qh(o,t),a=Xh(a),o=Xh(o),t.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,p=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,m=["#define varying in",t.glslVersion===ql?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===ql?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const w=b+p+a,x=b+m+o,y=Gh(i,i.VERTEX_SHADER,w),T=Gh(i,i.FRAGMENT_SHADER,x);i.attachShader(_,y),i.attachShader(_,T),t.index0AttributeName!==void 0?i.bindAttribLocation(_,0,t.index0AttributeName):t.hasPositionAttribute===!0&&i.bindAttribLocation(_,0,"position"),i.linkProgram(_);function C(U){if(r.debug.checkShaderErrors){const H=i.getProgramInfoLog(_)||"",B=i.getShaderInfoLog(y)||"",F=i.getShaderInfoLog(T)||"",V=H.trim(),te=B.trim(),J=F.trim();let ue=!0,Y=!0;if(i.getProgramParameter(_,i.LINK_STATUS)===!1)if(ue=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,_,y,T);else{const ce=Vh(i,y,"vertex"),he=Vh(i,T,"fragment");Oe("WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(_,i.VALIDATE_STATUS)+`

Material Name: `+U.name+`
Material Type: `+U.type+`

Program Info Log: `+V+`
`+ce+`
`+he)}else V!==""?Ie("WebGLProgram: Program Info Log:",V):(te===""||J==="")&&(Y=!1);Y&&(U.diagnostics={runnable:ue,programLog:V,vertexShader:{log:te,prefix:p},fragmentShader:{log:J,prefix:m}})}i.deleteShader(y),i.deleteShader(T),v=new ba(i,_),R=Jx(i,_)}let v;this.getUniforms=function(){return v===void 0&&C(this),v};let R;this.getAttributes=function(){return R===void 0&&C(this),R};let D=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return D===!1&&(D=i.getProgramParameter(_,Bx)),D},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Gx++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=y,this.fragmentShader=T,this}let u_=0;class f_{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){const i=this._getShaderCacheForMaterial(e);return i.has(t)===!1&&(i.add(t),t.usedTimes++),i.has(n)===!1&&(i.add(n),n.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new p_(e),t.set(e,n)),n}}class p_{constructor(e){this.id=u_++,this.code=e,this.usedTimes=0}}function m_(r){return r===rs||r===ya||r===Ea}function g_(r,e,t,n,i,s){const a=new qd,o=new f_,c=new Set,l=[],h=new Map,d=n.logarithmicDepthBuffer;let u=n.precision;const f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(v){return c.add(v),v===0?"uv":`uv${v}`}function _(v,R,D,U,H,B){const F=U.fog,V=H.geometry,te=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?U.environment:null,J=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap,ue=e.get(v.envMap||te,J),Y=ue&&ue.mapping===Ua?ue.image.height:null,ce=f[v.type];v.precision!==null&&(u=n.getMaxPrecision(v.precision),u!==v.precision&&Ie("WebGLProgram.getParameters:",v.precision,"not supported, using",u,"instead."));const he=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,Me=he!==void 0?he.length:0;let Ae=0;V.morphAttributes.position!==void 0&&(Ae=1),V.morphAttributes.normal!==void 0&&(Ae=2),V.morphAttributes.color!==void 0&&(Ae=3);let Je,je,Be,se;if(ce){const De=Yn[ce];Je=De.vertexShader,je=De.fragmentShader}else{Je=v.vertexShader,je=v.fragmentShader;const De=o.getVertexShaderStage(v),Ne=o.getFragmentShaderStage(v);o.update(v,De,Ne),Be=De.id,se=Ne.id}const de=r.getRenderTarget(),Te=r.state.buffers.depth.getReversed(),ze=H.isInstancedMesh===!0,ye=H.isBatchedMesh===!0,qe=!!v.map,Lt=!!v.matcap,Ye=!!ue,it=!!v.aoMap,dt=!!v.lightMap,$e=!!v.bumpMap&&v.wireframe===!1,bt=!!v.normalMap,kt=!!v.displacementMap,Zt=!!v.emissiveMap,Mt=!!v.metalnessMap,wt=!!v.roughnessMap,G=v.anisotropy>0,Kt=v.clearcoat>0,at=v.dispersion>0,L=v.retroreflectivity>0,M=v.iridescence>0,W=v.sheen>0,$=v.transmission>0,ie=G&&!!v.anisotropyMap,me=Kt&&!!v.clearcoatMap,ge=Kt&&!!v.clearcoatNormalMap,ae=Kt&&!!v.clearcoatRoughnessMap,le=M&&!!v.iridescenceMap,S=M&&!!v.iridescenceThicknessMap,I=W&&!!v.sheenColorMap,A=W&&!!v.sheenRoughnessMap,N=!!v.specularMap,k=!!v.specularColorMap,j=!!v.specularIntensityMap,ee=$&&!!v.transmissionMap,P=$&&!!v.thicknessMap,ne=!!v.gradientMap,q=!!v.alphaMap,oe=v.alphaTest>0,fe=!!v.alphaHash,Z=!!v.extensions;let xe=ti;v.toneMapped&&(de===null||de.isXRRenderTarget===!0)&&(xe=r.toneMapping);const pe={shaderID:ce,shaderType:v.type,shaderName:v.name,vertexShader:Je,fragmentShader:je,defines:v.defines,customVertexShaderID:Be,customFragmentShaderID:se,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:u,batching:ye,batchingColor:ye&&H._colorsTexture!==null,instancing:ze,instancingColor:ze&&H.instanceColor!==null,instancingMorph:ze&&H.morphTexture!==null,outputColorSpace:de===null?r.outputColorSpace:de.isXRRenderTarget===!0?de.texture.colorSpace:et.workingColorSpace,alphaToCoverage:!!v.alphaToCoverage,map:qe,matcap:Lt,envMap:Ye,envMapMode:Ye&&ue.mapping,envMapCubeUVHeight:Y,aoMap:it,lightMap:dt,bumpMap:$e,normalMap:bt,displacementMap:kt,emissiveMap:Zt,normalMapObjectSpace:bt&&v.normalMapType===$f,normalMapTangentSpace:bt&&v.normalMapType===wa,packedNormalMap:bt&&v.normalMapType===wa&&m_(v.normalMap.format),metalnessMap:Mt,roughnessMap:wt,anisotropy:G,anisotropyMap:ie,clearcoat:Kt,clearcoatMap:me,clearcoatNormalMap:ge,clearcoatRoughnessMap:ae,dispersion:at,retroreflection:L,iridescence:M,iridescenceMap:le,iridescenceThicknessMap:S,sheen:W,sheenColorMap:I,sheenRoughnessMap:A,specularMap:N,specularColorMap:k,specularIntensityMap:j,transmission:$,transmissionMap:ee,thicknessMap:P,gradientMap:ne,opaque:v.transparent===!1&&v.blending===Is&&v.alphaToCoverage===!1,alphaMap:q,alphaTest:oe,alphaHash:fe,combine:v.combine,mapUv:qe&&g(v.map.channel),aoMapUv:it&&g(v.aoMap.channel),lightMapUv:dt&&g(v.lightMap.channel),bumpMapUv:$e&&g(v.bumpMap.channel),normalMapUv:bt&&g(v.normalMap.channel),displacementMapUv:kt&&g(v.displacementMap.channel),emissiveMapUv:Zt&&g(v.emissiveMap.channel),metalnessMapUv:Mt&&g(v.metalnessMap.channel),roughnessMapUv:wt&&g(v.roughnessMap.channel),anisotropyMapUv:ie&&g(v.anisotropyMap.channel),clearcoatMapUv:me&&g(v.clearcoatMap.channel),clearcoatNormalMapUv:ge&&g(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ae&&g(v.clearcoatRoughnessMap.channel),iridescenceMapUv:le&&g(v.iridescenceMap.channel),iridescenceThicknessMapUv:S&&g(v.iridescenceThicknessMap.channel),sheenColorMapUv:I&&g(v.sheenColorMap.channel),sheenRoughnessMapUv:A&&g(v.sheenRoughnessMap.channel),specularMapUv:N&&g(v.specularMap.channel),specularColorMapUv:k&&g(v.specularColorMap.channel),specularIntensityMapUv:j&&g(v.specularIntensityMap.channel),transmissionMapUv:ee&&g(v.transmissionMap.channel),thicknessMapUv:P&&g(v.thicknessMap.channel),alphaMapUv:q&&g(v.alphaMap.channel),vertexTangents:!!V.attributes.tangent&&(bt||G),vertexNormals:!!V.attributes.normal,vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,pointsUvs:H.isPoints===!0&&!!V.attributes.uv&&(qe||q),fog:!!F,useFog:v.fog===!0,fogExp2:!!F&&F.isFogExp2,flatShading:v.wireframe===!1&&(v.flatShading===!0||V.attributes.normal===void 0&&bt===!1&&(v.isMeshLambertMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isMeshPhysicalMaterial)),sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:Te,skinning:H.isSkinnedMesh===!0,hasPositionAttribute:V.attributes.position!==void 0,morphTargets:V.morphAttributes.position!==void 0,morphNormals:V.morphAttributes.normal!==void 0,morphColors:V.morphAttributes.color!==void 0,morphTargetsCount:Me,morphTextureStride:Ae,numSunLights:R.sun.length,numDirLights:R.directional.length,numPointLights:R.point.length,numSpotLights:R.spot.length,numSpotLightMaps:R.spotLightMap.length,numRectAreaLights:R.rectArea.length,numHemiLights:R.hemi.length,numSunLightShadows:R.sunShadowMap.length,numDirLightShadows:R.directionalShadowMap.length,numPointLightShadows:R.pointShadowMap.length,numSpotLightShadows:R.spotShadowMap.length,numSpotLightShadowsWithMaps:R.numSpotLightShadowsWithMaps,numLightProbes:R.numLightProbes,numLightProbeGrids:B.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:v.dithering,shadowMapEnabled:r.shadowMap.enabled&&D.length>0,shadowMapType:r.shadowMap.type,toneMapping:xe,decodeVideoTexture:qe&&v.map.isVideoTexture===!0&&et.getTransfer(v.map.colorSpace)===lt,decodeVideoTextureEmissive:Zt&&v.emissiveMap.isVideoTexture===!0&&et.getTransfer(v.emissiveMap.colorSpace)===lt,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===rn,flipSided:v.side===fn,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:Z&&v.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Z&&v.extensions.multiDraw===!0||ye)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return pe.vertexUv1s=c.has(1),pe.vertexUv2s=c.has(2),pe.vertexUv3s=c.has(3),c.clear(),pe}function p(v){const R=[];if(v.shaderID?R.push(v.shaderID):(R.push(v.customVertexShaderID),R.push(v.customFragmentShaderID)),v.defines!==void 0)for(const D in v.defines)R.push(D),R.push(v.defines[D]);return v.isRawShaderMaterial===!1&&(m(R,v),b(R,v),R.push(r.outputColorSpace)),R.push(v.customProgramCacheKey),R.join()}function m(v,R){v.push(R.precision),v.push(R.outputColorSpace),v.push(R.envMapMode),v.push(R.envMapCubeUVHeight),v.push(R.mapUv),v.push(R.alphaMapUv),v.push(R.lightMapUv),v.push(R.aoMapUv),v.push(R.bumpMapUv),v.push(R.normalMapUv),v.push(R.displacementMapUv),v.push(R.emissiveMapUv),v.push(R.metalnessMapUv),v.push(R.roughnessMapUv),v.push(R.anisotropyMapUv),v.push(R.clearcoatMapUv),v.push(R.clearcoatNormalMapUv),v.push(R.clearcoatRoughnessMapUv),v.push(R.iridescenceMapUv),v.push(R.iridescenceThicknessMapUv),v.push(R.sheenColorMapUv),v.push(R.sheenRoughnessMapUv),v.push(R.specularMapUv),v.push(R.specularColorMapUv),v.push(R.specularIntensityMapUv),v.push(R.transmissionMapUv),v.push(R.thicknessMapUv),v.push(R.combine),v.push(R.fogExp2),v.push(R.sizeAttenuation),v.push(R.morphTargetsCount),v.push(R.morphAttributeCount),v.push(R.numSunLights),v.push(R.numDirLights),v.push(R.numPointLights),v.push(R.numSpotLights),v.push(R.numSpotLightMaps),v.push(R.numHemiLights),v.push(R.numRectAreaLights),v.push(R.numSunLightShadows),v.push(R.numDirLightShadows),v.push(R.numPointLightShadows),v.push(R.numSpotLightShadows),v.push(R.numSpotLightShadowsWithMaps),v.push(R.numLightProbes),v.push(R.shadowMapType),v.push(R.toneMapping),v.push(R.numClippingPlanes),v.push(R.numClipIntersection),v.push(R.depthPacking)}function b(v,R){a.disableAll(),R.instancing&&a.enable(0),R.instancingColor&&a.enable(1),R.instancingMorph&&a.enable(2),R.matcap&&a.enable(3),R.envMap&&a.enable(4),R.normalMapObjectSpace&&a.enable(5),R.normalMapTangentSpace&&a.enable(6),R.clearcoat&&a.enable(7),R.iridescence&&a.enable(8),R.alphaTest&&a.enable(9),R.vertexColors&&a.enable(10),R.vertexAlphas&&a.enable(11),R.vertexUv1s&&a.enable(12),R.vertexUv2s&&a.enable(13),R.vertexUv3s&&a.enable(14),R.vertexTangents&&a.enable(15),R.anisotropy&&a.enable(16),R.alphaHash&&a.enable(17),R.batching&&a.enable(18),R.dispersion&&a.enable(19),R.retroreflection&&a.enable(24),R.batchingColor&&a.enable(20),R.gradientMap&&a.enable(21),R.packedNormalMap&&a.enable(22),R.vertexNormals&&a.enable(23),v.push(a.mask),a.disableAll(),R.fog&&a.enable(0),R.useFog&&a.enable(1),R.flatShading&&a.enable(2),R.logarithmicDepthBuffer&&a.enable(3),R.reversedDepthBuffer&&a.enable(4),R.skinning&&a.enable(5),R.morphTargets&&a.enable(6),R.morphNormals&&a.enable(7),R.morphColors&&a.enable(8),R.premultipliedAlpha&&a.enable(9),R.shadowMapEnabled&&a.enable(10),R.doubleSided&&a.enable(11),R.flipSided&&a.enable(12),R.useDepthPacking&&a.enable(13),R.dithering&&a.enable(14),R.transmission&&a.enable(15),R.sheen&&a.enable(16),R.opaque&&a.enable(17),R.pointsUvs&&a.enable(18),R.decodeVideoTexture&&a.enable(19),R.decodeVideoTextureEmissive&&a.enable(20),R.alphaToCoverage&&a.enable(21),R.numLightProbeGrids>0&&a.enable(22),R.hasPositionAttribute&&a.enable(23),v.push(a.mask)}function w(v){const R=f[v.type];let D;if(R){const U=Yn[R];D=rm.clone(U.uniforms)}else D=v.uniforms;return D}function x(v,R){let D=h.get(R);return D!==void 0?++D.usedTimes:(D=new d_(r,R,v,i),l.push(D),h.set(R,D)),D}function y(v){if(--v.usedTimes===0){const R=l.indexOf(v);l[R]=l[l.length-1],l.pop(),h.delete(v.cacheKey),v.destroy()}}function T(v){o.remove(v)}function C(){o.dispose()}return{getParameters:_,getProgramCacheKey:p,getUniforms:w,acquireProgram:x,releaseProgram:y,releaseShaderCache:T,programs:l,dispose:C}}function b_(){let r=new WeakMap;function e(a){return r.has(a)}function t(a){let o=r.get(a);return o===void 0&&(o={},r.set(a,o)),o}function n(a){r.delete(a)}function i(a,o,c){r.get(a)[o]=c}function s(){r=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:s}}function x_(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.materialVariant!==e.materialVariant?r.materialVariant-e.materialVariant:r.z!==e.z?r.z-e.z:r.id-e.id}function jh(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function Yh(){const r=[];let e=0;const t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}function a(u){let f=0;return u.isInstancedMesh&&(f+=2),u.isSkinnedMesh&&(f+=1),f}function o(u,f,g,_,p,m){let b=r[e];return b===void 0?(b={id:u.id,object:u,geometry:f,material:g,materialVariant:a(u),groupOrder:_,renderOrder:u.renderOrder,z:p,group:m},r[e]=b):(b.id=u.id,b.object=u,b.geometry=f,b.material=g,b.materialVariant=a(u),b.groupOrder=_,b.renderOrder=u.renderOrder,b.z=p,b.group=m),e++,b}function c(u,f,g,_,p,m,b){b.reversedDepth===!0&&(p=-p);const w=o(u,f,g,_,p,m);g.transmission>0?n.push(w):g.transparent===!0?i.push(w):t.push(w)}function l(u,f,g,_,p,m){const b=o(u,f,g,_,p,m);g.transmission>0?n.unshift(b):g.transparent===!0?i.unshift(b):t.unshift(b)}function h(u,f){t.length>1&&t.sort(u||x_),n.length>1&&n.sort(f||jh),i.length>1&&i.sort(f||jh)}function d(){for(let u=e,f=r.length;u<f;u++){const g=r[u];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:t,transmissive:n,transparent:i,init:s,push:c,unshift:l,finish:d,sort:h}}function __(){let r=new WeakMap;function e(n,i){const s=r.get(n);let a;return s===void 0?(a=new Yh,r.set(n,[a])):i>=s.length?(a=new Yh,s.push(a)):a=s[i],a}function t(){r=new WeakMap}return{get:e,dispose:t}}function v_(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new z,color:new be};break;case"SpotLight":t={position:new z,direction:new z,color:new be,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new z,color:new be,distance:0,decay:0};break;case"HemisphereLight":t={direction:new z,skyColor:new be,groundColor:new be};break;case"RectAreaLight":t={color:new be,position:new z,halfWidth:new z,halfHeight:new z};break}return r[e.id]=t,t}}}function M_(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new He};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new He};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new He,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let S_=0;function y_(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function E_(r){const e=new v_,t=M_(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new z);const i=new z,s=new Ve,a=new Ve;function o(l){let h=0,d=0,u=0;for(let H=0;H<9;H++)n.probe[H].set(0,0,0);let f=0,g=0,_=0,p=0,m=0,b=0,w=0,x=0,y=0,T=0,C=0,v=0,R=0,D=0;l.sort(y_);for(let H=0,B=l.length;H<B;H++){const F=l[H],V=F.color,te=F.intensity,J=F.distance;let ue=null;if(F.shadow&&F.shadow.map&&(F.shadow.map.texture.format===rs?ue=F.shadow.map.texture:ue=F.shadow.map.depthTexture||F.shadow.map.texture),F.isAmbientLight)h+=V.r*te,d+=V.g*te,u+=V.b*te;else if(F.isLightProbe){for(let Y=0;Y<9;Y++)n.probe[Y].addScaledVector(F.sh.coefficients[Y],te);D++}else if(F.isSunLight){const Y=e.get(F);if(Y.color.copy(F.color).multiplyScalar(F.intensity),F.castShadow){const ce=F.shadow,he=t.get(F);he.shadowIntensity=ce.intensity,he.shadowBias=ce.bias,he.shadowNormalBias=ce.normalBias,he.shadowRadius=ce.radius,he.shadowMapSize.copy(ce.mapSize).multiply(ce.getFrameExtents()),n.sunShadow[g]=he,n.sunShadowMap[g]=ue;const Me=ce.getViewportCount();for(let Ae=0;Ae<Me;Ae++)n.sunShadowMatrix[_+Ae]=ce.getMatrix(Ae),n.sunShadowCascade[_+Ae]=ce._cascadeData[Ae];_+=Me,g++}n.sun[f]=Y,f++}else if(F.isDirectionalLight){const Y=e.get(F);if(Y.color.copy(F.color).multiplyScalar(F.intensity),F.castShadow){const ce=F.shadow,he=t.get(F);he.shadowIntensity=ce.intensity,he.shadowBias=ce.bias,he.shadowNormalBias=ce.normalBias,he.shadowRadius=ce.radius,he.shadowMapSize=ce.mapSize,n.directionalShadow[p]=he,n.directionalShadowMap[p]=ue,n.directionalShadowMatrix[p]=F.shadow.matrix,y++}n.directional[p]=Y,p++}else if(F.isSpotLight){const Y=e.get(F);Y.position.setFromMatrixPosition(F.matrixWorld),Y.color.copy(V).multiplyScalar(te),Y.distance=J,Y.coneCos=Math.cos(F.angle),Y.penumbraCos=Math.cos(F.angle*(1-F.penumbra)),Y.decay=F.decay,n.spot[b]=Y;const ce=F.shadow;if(F.map&&(n.spotLightMap[v]=F.map,v++,ce.updateMatrices(F),F.castShadow&&R++),n.spotLightMatrix[b]=ce.matrix,F.castShadow){const he=t.get(F);he.shadowIntensity=ce.intensity,he.shadowBias=ce.bias,he.shadowNormalBias=ce.normalBias,he.shadowRadius=ce.radius,he.shadowMapSize=ce.mapSize,n.spotShadow[b]=he,n.spotShadowMap[b]=ue,C++}b++}else if(F.isRectAreaLight){const Y=e.get(F);Y.color.copy(V).multiplyScalar(te),Y.halfWidth.set(F.width*.5,0,0),Y.halfHeight.set(0,F.height*.5,0),n.rectArea[w]=Y,w++}else if(F.isPointLight){const Y=e.get(F);if(Y.color.copy(F.color).multiplyScalar(F.intensity),Y.distance=F.distance,Y.decay=F.decay,F.castShadow){const ce=F.shadow,he=t.get(F);he.shadowIntensity=ce.intensity,he.shadowBias=ce.bias,he.shadowNormalBias=ce.normalBias,he.shadowRadius=ce.radius,he.shadowMapSize=ce.mapSize,he.shadowCameraNear=ce.camera.near,he.shadowCameraFar=ce.camera.far,n.pointShadow[m]=he,n.pointShadowMap[m]=ue,n.pointShadowMatrix[m]=F.shadow.matrix,T++}n.point[m]=Y,m++}else if(F.isHemisphereLight){const Y=e.get(F);Y.skyColor.copy(F.color).multiplyScalar(te),Y.groundColor.copy(F.groundColor).multiplyScalar(te),n.hemi[x]=Y,x++}}w>0&&(r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=_e.LTC_FLOAT_1,n.rectAreaLTC2=_e.LTC_FLOAT_2):(n.rectAreaLTC1=_e.LTC_HALF_1,n.rectAreaLTC2=_e.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=u;const U=n.hash;(U.sunLength!==f||U.directionalLength!==p||U.pointLength!==m||U.spotLength!==b||U.rectAreaLength!==w||U.hemiLength!==x||U.numSunShadows!==g||U.numDirectionalShadows!==y||U.numPointShadows!==T||U.numSpotShadows!==C||U.numSpotMaps!==v||U.numLightProbes!==D)&&(n.sun.length=f,n.directional.length=p,n.spot.length=b,n.rectArea.length=w,n.point.length=m,n.hemi.length=x,n.sunShadow.length=g,n.sunShadowMap.length=g,n.sunShadowMatrix.length=_,n.sunShadowCascade.length=_,n.directionalShadow.length=y,n.directionalShadowMap.length=y,n.directionalShadowMatrix.length=y,n.pointShadow.length=T,n.pointShadowMap.length=T,n.pointShadowMatrix.length=T,n.spotShadow.length=C,n.spotShadowMap.length=C,n.spotLightMatrix.length=C+v-R,n.spotLightMap.length=v,n.numSpotLightShadowsWithMaps=R,n.numLightProbes=D,U.sunLength=f,U.directionalLength=p,U.pointLength=m,U.spotLength=b,U.rectAreaLength=w,U.hemiLength=x,U.numSunShadows=g,U.numDirectionalShadows=y,U.numPointShadows=T,U.numSpotShadows=C,U.numSpotMaps=v,U.numLightProbes=D,n.version=S_++)}function c(l,h){let d=0,u=0,f=0,g=0,_=0,p=0;const m=h.matrixWorldInverse;for(let b=0,w=l.length;b<w;b++){const x=l[b];if(x.isSunLight){const y=n.sun[d];y.direction.setFromMatrixPosition(x.matrixWorld),y.direction.transformDirection(m),d++}else if(x.isDirectionalLight){const y=n.directional[u];y.direction.setFromMatrixPosition(x.matrixWorld),i.setFromMatrixPosition(x.target.matrixWorld),y.direction.sub(i),y.direction.transformDirection(m),u++}else if(x.isSpotLight){const y=n.spot[g];y.position.setFromMatrixPosition(x.matrixWorld),y.position.applyMatrix4(m),y.direction.setFromMatrixPosition(x.matrixWorld),i.setFromMatrixPosition(x.target.matrixWorld),y.direction.sub(i),y.direction.transformDirection(m),g++}else if(x.isRectAreaLight){const y=n.rectArea[_];y.position.setFromMatrixPosition(x.matrixWorld),y.position.applyMatrix4(m),a.identity(),s.copy(x.matrixWorld),s.premultiply(m),a.extractRotation(s),y.halfWidth.set(x.width*.5,0,0),y.halfHeight.set(0,x.height*.5,0),y.halfWidth.applyMatrix4(a),y.halfHeight.applyMatrix4(a),_++}else if(x.isPointLight){const y=n.point[f];y.position.setFromMatrixPosition(x.matrixWorld),y.position.applyMatrix4(m),f++}else if(x.isHemisphereLight){const y=n.hemi[p];y.direction.setFromMatrixPosition(x.matrixWorld),y.direction.transformDirection(m),p++}}}return{setup:o,setupView:c,state:n}}function Jh(r){const e=new E_(r),t=[],n=[],i=[];function s(u){d.camera=u,t.length=0,n.length=0,i.length=0}function a(u){t.push(u)}function o(u){n.push(u)}function c(u){i.push(u)}function l(){e.setup(t)}function h(u){e.setupView(t,u)}const d={lightsArray:t,shadowsArray:n,lightProbeGridArray:i,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:d,setupLights:l,setupLightsView:h,pushLight:a,pushShadow:o,pushLightProbeGrid:c}}function T_(r){let e=new WeakMap;function t(i,s=0){const a=e.get(i);let o;return a===void 0?(o=new Jh(r),e.set(i,[o])):s>=a.length?(o=new Jh(r),a.push(o)):o=a[s],o}function n(){e=new WeakMap}return{get:t,dispose:n}}const w_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,A_=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,R_=[new z(1,0,0),new z(-1,0,0),new z(0,1,0),new z(0,-1,0),new z(0,0,1),new z(0,0,-1)],C_=[new z(0,-1,0),new z(0,-1,0),new z(0,0,1),new z(0,0,-1),new z(0,-1,0),new z(0,-1,0)],$h=new Ve,ar=new z,Lo=new z;function L_(r,e,t){let n=new dl;const i=new He,s=new He,a=new ft,o=new lm,c=new hm,l={},h=t.maxTextureSize,d={[Gi]:fn,[fn]:Gi,[rn]:rn},u=new Gn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new He},radius:{value:4}},vertexShader:w_,fragmentShader:A_}),f=u.clone();f.defines.HORIZONTAL_PASS=1;const g=new Ct;g.setAttribute("position",new Rt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new We(g,u),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=br;let m=this.type;this.render=function(T,C,v){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||T.length===0)return;this.type===Tf&&(Ie("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=br);const R=r.getRenderTarget(),D=r.getActiveCubeFace(),U=r.getActiveMipmapLevel(),H=r.state;H.setBlending(xi),H.buffers.depth.getReversed()===!0?H.buffers.color.setClear(0,0,0,0):H.buffers.color.setClear(1,1,1,1),H.buffers.depth.setTest(!0),H.setScissorTest(!1);const B=m!==this.type;B&&C.traverse(function(F){F.material&&(Array.isArray(F.material)?F.material.forEach(V=>V.needsUpdate=!0):F.material.needsUpdate=!0)});for(let F=0,V=T.length;F<V;F++){const te=T[F],J=te.shadow;if(J===void 0){Ie("WebGLShadowMap:",te,"has no shadow.");continue}if(J.autoUpdate===!1&&J.needsUpdate===!1)continue;i.copy(J.mapSize);const ue=J.getFrameExtents();i.multiply(ue),s.copy(J.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(s.x=Math.floor(h/ue.x),i.x=s.x*ue.x,J.mapSize.x=s.x),i.y>h&&(s.y=Math.floor(h/ue.y),i.y=s.y*ue.y,J.mapSize.y=s.y));const Y=r.state.buffers.depth.getReversed();if(J.camera._reversedDepth=Y,J.map===null||B===!0){if(J.map!==null&&(J.map.depthTexture!==null&&(J.map.depthTexture.dispose(),J.map.depthTexture=null),J.map.dispose()),this.type===fr){if(te.isPointLight){Ie("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}J.map=new zn(i.x,i.y,{format:rs,type:ii,minFilter:Vt,magFilter:Vt,generateMipmaps:!1}),J.map.texture.name=te.name+".shadowMap",J.map.depthTexture=new Cr(i.x,i.y,Rn),J.map.depthTexture.name=te.name+".shadowMapDepth",J.map.depthTexture.format=Mi,J.map.depthTexture.compareFunction=null,J.map.depthTexture.minFilter=Dt,J.map.depthTexture.magFilter=Dt}else te.isPointLight?(J.map=new hu(i.x),J.map.depthTexture=new im(i.x,ni)):(J.map=new zn(i.x,i.y),J.map.depthTexture=new Cr(i.x,i.y,ni)),J.map.depthTexture.name=te.name+".shadowMap",J.map.depthTexture.format=Mi,this.type===br?(J.map.depthTexture.compareFunction=Y?rl:sl,J.map.depthTexture.minFilter=Vt,J.map.depthTexture.magFilter=Vt):(J.map.depthTexture.compareFunction=null,J.map.depthTexture.minFilter=Dt,J.map.depthTexture.magFilter=Dt);J.camera.updateProjectionMatrix()}J.map.isWebGLCubeRenderTarget!==!0&&(J.map.width!==i.x||J.map.height!==i.y)&&J.map.setSize(i.x,i.y);const ce=J.map.isWebGLCubeRenderTarget?6:J.getViewportCount();te.isPointLight!==!0&&J.updateMatrices(te,v);for(let he=0;he<ce;he++){const Me=J.getCamera(he);if(te.isPointLight){const Ae=J.camera,Je=J.matrix,je=te.distance||Ae.far;je!==Ae.far&&(Ae.far=je,Ae.updateProjectionMatrix()),ar.setFromMatrixPosition(te.matrixWorld),Ae.position.copy(ar),Lo.copy(Ae.position),Lo.add(R_[he]),Ae.up.copy(C_[he]),Ae.lookAt(Lo),Ae.updateMatrixWorld(),Je.makeTranslation(-ar.x,-ar.y,-ar.z),$h.multiplyMatrices(Ae.projectionMatrix,Ae.matrixWorldInverse),J._frustum.setFromProjectionMatrix($h,Ae.coordinateSystem,Ae.reversedDepth)}if(J.map.isWebGLCubeRenderTarget)r.setRenderTarget(J.map,he),r.clear();else{he===0&&(r.setRenderTarget(J.map),r.clear());const Ae=J.getViewport(he);a.set(s.x*Ae.x,s.y*Ae.y,s.x*Ae.z,s.y*Ae.w),H.viewport(a)}n=J.getFrustum(he),x(C,v,Me,te,this.type)}J.isPointLightShadow!==!0&&this.type===fr&&b(J,v),J.needsUpdate=!1}m=this.type,p.needsUpdate=!1,r.setRenderTarget(R,D,U)};function b(T,C){const v=e.update(_);u.defines.VSM_SAMPLES!==T.blurSamples&&(u.defines.VSM_SAMPLES=T.blurSamples,f.defines.VSM_SAMPLES=T.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),T.mapPass===null?T.mapPass=new zn(i.x,i.y,{format:rs,type:ii}):(T.mapPass.width!==T.map.width||T.mapPass.height!==T.map.height)&&T.mapPass.setSize(T.map.width,T.map.height),u.uniforms.shadow_pass.value=T.map.depthTexture,u.uniforms.resolution.value.set(T.map.width,T.map.height),u.uniforms.radius.value=T.radius,r.setRenderTarget(T.mapPass),r.clear(),r.renderBufferDirect(C,null,v,u,_,null),f.uniforms.shadow_pass.value=T.mapPass.texture,f.uniforms.resolution.value.set(T.map.width,T.map.height),f.uniforms.radius.value=T.radius,r.setRenderTarget(T.map),r.clear(),r.renderBufferDirect(C,null,v,f,_,null)}function w(T,C,v,R){let D=null;const U=v.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(U!==void 0)D=U;else if(D=v.isPointLight===!0?c:o,r.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0||C.alphaToCoverage===!0){const H=D.uuid,B=C.uuid;let F=l[H];F===void 0&&(F={},l[H]=F);let V=F[B];V===void 0&&(V=D.clone(),F[B]=V,C.addEventListener("dispose",y)),D=V}if(D.visible=C.visible,D.wireframe=C.wireframe,R===fr?D.side=C.shadowSide!==null?C.shadowSide:C.side:D.side=C.shadowSide!==null?C.shadowSide:d[C.side],D.alphaMap=C.alphaMap,D.alphaTest=C.alphaToCoverage===!0?.5:C.alphaTest,D.map=C.map,D.clipShadows=C.clipShadows,D.clippingPlanes=C.clippingPlanes,D.clipIntersection=C.clipIntersection,D.displacementMap=C.displacementMap,D.displacementScale=C.displacementScale,D.displacementBias=C.displacementBias,D.wireframeLinewidth=C.wireframeLinewidth,D.linewidth=C.linewidth,v.isPointLight===!0&&D.isMeshDistanceMaterial===!0){const H=r.properties.get(D);H.light=v}return D}function x(T,C,v,R,D){if(T.visible===!1)return;if(T.layers.test(C.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&D===fr)&&(!T.frustumCulled||T.intersectsFrustum(n))){T.modelViewMatrix.multiplyMatrices(v.matrixWorldInverse,T.matrixWorld);const B=e.update(T),F=T.material;if(Array.isArray(F)){const V=B.groups;for(let te=0,J=V.length;te<J;te++){const ue=V[te],Y=F[ue.materialIndex];if(Y&&Y.visible){const ce=w(T,Y,R,D);T.onBeforeShadow(r,T,C,v,B,ce,ue),r.renderBufferDirect(v,null,B,ce,T,ue),T.onAfterShadow(r,T,C,v,B,ce,ue)}}}else if(F.visible){const V=w(T,F,R,D);T.onBeforeShadow(r,T,C,v,B,V,null),r.renderBufferDirect(v,null,B,V,T,null),T.onAfterShadow(r,T,C,v,B,V,null)}}const H=T.children;for(let B=0,F=H.length;B<F;B++)x(H[B],C,v,R,D)}function y(T){T.target.removeEventListener("dispose",y);for(const v in l){const R=l[v],D=T.target.uuid;D in R&&(R[D].dispose(),delete R[D])}}}function P_(r,e){function t(){let P=!1;const ne=new ft;let q=null;const oe=new ft(0,0,0,0);return{setMask:function(fe){q!==fe&&!P&&(r.colorMask(fe,fe,fe,fe),q=fe)},setLocked:function(fe){P=fe},setClear:function(fe,Z,xe,pe,De){De===!0&&(fe*=pe,Z*=pe,xe*=pe),ne.set(fe,Z,xe,pe),oe.equals(ne)===!1&&(r.clearColor(fe,Z,xe,pe),oe.copy(ne))},reset:function(){P=!1,q=null,oe.set(-1,0,0,0)}}}function n(){let P=!1,ne=!1,q=null,oe=null,fe=null;return{setReversed:function(Z){if(ne!==Z){const xe=e.get("EXT_clip_control");Z?xe.clipControlEXT(xe.LOWER_LEFT_EXT,xe.ZERO_TO_ONE_EXT):xe.clipControlEXT(xe.LOWER_LEFT_EXT,xe.NEGATIVE_ONE_TO_ONE_EXT),ne=Z;const pe=fe;fe=null,this.setClear(pe)}},getReversed:function(){return ne},setTest:function(Z){Z?de(r.DEPTH_TEST):Te(r.DEPTH_TEST)},setMask:function(Z){q!==Z&&!P&&(r.depthMask(Z),q=Z)},setFunc:function(Z){if(ne&&(Z=lp[Z]),oe!==Z){switch(Z){case Yo:r.depthFunc(r.NEVER);break;case Jo:r.depthFunc(r.ALWAYS);break;case $o:r.depthFunc(r.LESS);break;case Sr:r.depthFunc(r.LEQUAL);break;case Zo:r.depthFunc(r.EQUAL);break;case Qo:r.depthFunc(r.GEQUAL);break;case Ma:r.depthFunc(r.GREATER);break;case ec:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}oe=Z}},setLocked:function(Z){P=Z},setClear:function(Z){fe!==Z&&(fe=Z,ne&&(Z=1-Z),r.clearDepth(Z))},reset:function(){P=!1,q=null,oe=null,fe=null,ne=!1}}}function i(){let P=!1,ne=null,q=null,oe=null,fe=null,Z=null,xe=null,pe=null,De=null;return{setTest:function(Ne){P||(Ne?de(r.STENCIL_TEST):Te(r.STENCIL_TEST))},setMask:function(Ne){ne!==Ne&&!P&&(r.stencilMask(Ne),ne=Ne)},setFunc:function(Ne,xt,re){(q!==Ne||oe!==xt||fe!==re)&&(r.stencilFunc(Ne,xt,re),q=Ne,oe=xt,fe=re)},setOp:function(Ne,xt,re){(Z!==Ne||xe!==xt||pe!==re)&&(r.stencilOp(Ne,xt,re),Z=Ne,xe=xt,pe=re)},setLocked:function(Ne){P=Ne},setClear:function(Ne){De!==Ne&&(r.clearStencil(Ne),De=Ne)},reset:function(){P=!1,ne=null,q=null,oe=null,fe=null,Z=null,xe=null,pe=null,De=null}}}const s=new t,a=new n,o=new i,c=new WeakMap,l=new WeakMap;let h={},d={},u={},f=new WeakMap,g=[],_=null,p=!1,m=null,b=null,w=null,x=null,y=null,T=null,C=null,v=new be(0,0,0),R=0,D=!1,U=null,H=null,B=null,F=null,V=null;const te=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let J=!1,ue=0;const Y=r.getParameter(r.VERSION);Y.indexOf("WebGL")!==-1?(ue=parseFloat(/^WebGL (\d)/.exec(Y)[1]),J=ue>=1):Y.indexOf("OpenGL ES")!==-1&&(ue=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),J=ue>=2);let ce=null,he={};const Me=r.getParameter(r.SCISSOR_BOX),Ae=r.getParameter(r.VIEWPORT),Je=new ft().fromArray(Me),je=new ft().fromArray(Ae);function Be(P,ne,q,oe){const fe=new Uint8Array(4),Z=r.createTexture();r.bindTexture(P,Z),r.texParameteri(P,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(P,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let xe=0;xe<q;xe++)P===r.TEXTURE_3D||P===r.TEXTURE_2D_ARRAY?r.texImage3D(ne,0,r.RGBA,1,1,oe,0,r.RGBA,r.UNSIGNED_BYTE,fe):r.texImage2D(ne+xe,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,fe);return Z}const se={};se[r.TEXTURE_2D]=Be(r.TEXTURE_2D,r.TEXTURE_2D,1),se[r.TEXTURE_CUBE_MAP]=Be(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),se[r.TEXTURE_2D_ARRAY]=Be(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),se[r.TEXTURE_3D]=Be(r.TEXTURE_3D,r.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),de(r.DEPTH_TEST),a.setFunc(Sr),$e(!1),bt(Bl),de(r.CULL_FACE),it(xi);function de(P){h[P]!==!0&&(r.enable(P),h[P]=!0)}function Te(P){h[P]!==!1&&(r.disable(P),h[P]=!1)}function ze(P,ne){return u[P]!==ne?(r.bindFramebuffer(P,ne),u[P]=ne,P===r.DRAW_FRAMEBUFFER&&(u[r.FRAMEBUFFER]=ne),P===r.FRAMEBUFFER&&(u[r.DRAW_FRAMEBUFFER]=ne),!0):!1}function ye(P,ne){let q=g,oe=!1;if(P){q=f.get(ne),q===void 0&&(q=[],f.set(ne,q));const fe=P.textures;if(q.length!==fe.length||q[0]!==r.COLOR_ATTACHMENT0){for(let Z=0,xe=fe.length;Z<xe;Z++)q[Z]=r.COLOR_ATTACHMENT0+Z;q.length=fe.length,oe=!0}}else q[0]!==r.BACK&&(q[0]=r.BACK,oe=!0);oe&&r.drawBuffers(q)}function qe(P){return _!==P?(r.useProgram(P),_=P,!0):!1}const Lt={[ws]:r.FUNC_ADD,[Af]:r.FUNC_SUBTRACT,[Rf]:r.FUNC_REVERSE_SUBTRACT};Lt[Cf]=r.MIN,Lt[Lf]=r.MAX;const Ye={[Pf]:r.ZERO,[If]:r.ONE,[Df]:r.SRC_COLOR,[Sd]:r.SRC_ALPHA,[zf]:r.SRC_ALPHA_SATURATE,[Uf]:r.DST_COLOR,[kf]:r.DST_ALPHA,[Nf]:r.ONE_MINUS_SRC_COLOR,[yd]:r.ONE_MINUS_SRC_ALPHA,[Of]:r.ONE_MINUS_DST_COLOR,[Ff]:r.ONE_MINUS_DST_ALPHA,[Bf]:r.CONSTANT_COLOR,[Gf]:r.ONE_MINUS_CONSTANT_COLOR,[Hf]:r.CONSTANT_ALPHA,[Vf]:r.ONE_MINUS_CONSTANT_ALPHA};function it(P,ne,q,oe,fe,Z,xe,pe,De,Ne){if(P===xi){p===!0&&(Te(r.BLEND),p=!1);return}if(p===!1&&(de(r.BLEND),p=!0),P!==wf){if(P!==m||Ne!==D){if((b!==ws||y!==ws)&&(r.blendEquation(r.FUNC_ADD),b=ws,y=ws),Ne)switch(P){case Is:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case ei:r.blendFunc(r.ONE,r.ONE);break;case Gl:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Hl:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:Oe("WebGLState: Invalid blending: ",P);break}else switch(P){case Is:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case ei:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case Gl:Oe("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Hl:Oe("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Oe("WebGLState: Invalid blending: ",P);break}w=null,x=null,T=null,C=null,v.set(0,0,0),R=0,m=P,D=Ne}return}fe=fe||ne,Z=Z||q,xe=xe||oe,(ne!==b||fe!==y)&&(r.blendEquationSeparate(Lt[ne],Lt[fe]),b=ne,y=fe),(q!==w||oe!==x||Z!==T||xe!==C)&&(r.blendFuncSeparate(Ye[q],Ye[oe],Ye[Z],Ye[xe]),w=q,x=oe,T=Z,C=xe),(pe.equals(v)===!1||De!==R)&&(r.blendColor(pe.r,pe.g,pe.b,De),v.copy(pe),R=De),m=P,D=!1}function dt(P,ne){P.side===rn?Te(r.CULL_FACE):de(r.CULL_FACE);let q=P.side===fn;ne&&(q=!q),$e(q),P.blending===Is&&P.transparent===!1?it(xi):it(P.blending,P.blendEquation,P.blendSrc,P.blendDst,P.blendEquationAlpha,P.blendSrcAlpha,P.blendDstAlpha,P.blendColor,P.blendAlpha,P.premultipliedAlpha),a.setFunc(P.depthFunc),a.setTest(P.depthTest),a.setMask(P.depthWrite),s.setMask(P.colorWrite);const oe=P.stencilWrite;o.setTest(oe),oe&&(o.setMask(P.stencilWriteMask),o.setFunc(P.stencilFunc,P.stencilRef,P.stencilFuncMask),o.setOp(P.stencilFail,P.stencilZFail,P.stencilZPass)),Zt(P.polygonOffset,P.polygonOffsetFactor,P.polygonOffsetUnits),P.alphaToCoverage===!0?de(r.SAMPLE_ALPHA_TO_COVERAGE):Te(r.SAMPLE_ALPHA_TO_COVERAGE)}function $e(P){U!==P&&(P?r.frontFace(r.CW):r.frontFace(r.CCW),U=P)}function bt(P){P!==yf?(de(r.CULL_FACE),P!==H&&(P===Bl?r.cullFace(r.BACK):P===Ef?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Te(r.CULL_FACE),H=P}function kt(P){P!==B&&(J&&r.lineWidth(P),B=P)}function Zt(P,ne,q){P?(de(r.POLYGON_OFFSET_FILL),(F!==ne||V!==q)&&(F=ne,V=q,a.getReversed()&&(ne=-ne),r.polygonOffset(ne,q))):Te(r.POLYGON_OFFSET_FILL)}function Mt(P){P?de(r.SCISSOR_TEST):Te(r.SCISSOR_TEST)}function wt(P){P===void 0&&(P=r.TEXTURE0+te-1),ce!==P&&(r.activeTexture(P),ce=P)}function G(P,ne,q){q===void 0&&(ce===null?q=r.TEXTURE0+te-1:q=ce);let oe=he[q];oe===void 0&&(oe={type:void 0,texture:void 0},he[q]=oe),(oe.type!==P||oe.texture!==ne)&&(ce!==q&&(r.activeTexture(q),ce=q),r.bindTexture(P,ne||se[P]),oe.type=P,oe.texture=ne)}function Kt(){const P=he[ce];P!==void 0&&P.type!==void 0&&(r.bindTexture(P.type,null),P.type=void 0,P.texture=void 0)}function at(){try{r.compressedTexImage2D(...arguments)}catch(P){Oe("WebGLState:",P)}}function L(){try{r.compressedTexImage3D(...arguments)}catch(P){Oe("WebGLState:",P)}}function M(){try{r.texSubImage2D(...arguments)}catch(P){Oe("WebGLState:",P)}}function W(){try{r.texSubImage3D(...arguments)}catch(P){Oe("WebGLState:",P)}}function $(){try{r.compressedTexSubImage2D(...arguments)}catch(P){Oe("WebGLState:",P)}}function ie(){try{r.compressedTexSubImage3D(...arguments)}catch(P){Oe("WebGLState:",P)}}function me(){try{r.texStorage2D(...arguments)}catch(P){Oe("WebGLState:",P)}}function ge(){try{r.texStorage3D(...arguments)}catch(P){Oe("WebGLState:",P)}}function ae(){try{r.texImage2D(...arguments)}catch(P){Oe("WebGLState:",P)}}function le(){try{r.texImage3D(...arguments)}catch(P){Oe("WebGLState:",P)}}function S(P){return d[P]!==void 0?d[P]:r.getParameter(P)}function I(P,ne){d[P]!==ne&&(r.pixelStorei(P,ne),d[P]=ne)}function A(P){Je.equals(P)===!1&&(r.scissor(P.x,P.y,P.z,P.w),Je.copy(P))}function N(P){je.equals(P)===!1&&(r.viewport(P.x,P.y,P.z,P.w),je.copy(P))}function k(P,ne){let q=l.get(ne);q===void 0&&(q=new WeakMap,l.set(ne,q));let oe=q.get(P);oe===void 0&&(oe=r.getUniformBlockIndex(ne,P.name),q.set(P,oe))}function j(P,ne){const oe=l.get(ne).get(P);c.get(ne)!==oe&&(r.uniformBlockBinding(ne,oe,P.__bindingPointIndex),c.set(ne,oe))}function ee(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),a.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),r.pixelStorei(r.PACK_ALIGNMENT,4),r.pixelStorei(r.UNPACK_ALIGNMENT,4),r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,!1),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,r.BROWSER_DEFAULT_WEBGL),r.pixelStorei(r.PACK_ROW_LENGTH,0),r.pixelStorei(r.PACK_SKIP_PIXELS,0),r.pixelStorei(r.PACK_SKIP_ROWS,0),r.pixelStorei(r.UNPACK_ROW_LENGTH,0),r.pixelStorei(r.UNPACK_IMAGE_HEIGHT,0),r.pixelStorei(r.UNPACK_SKIP_PIXELS,0),r.pixelStorei(r.UNPACK_SKIP_ROWS,0),r.pixelStorei(r.UNPACK_SKIP_IMAGES,0),h={},d={},ce=null,he={},u={},f=new WeakMap,g=[],_=null,p=!1,m=null,b=null,w=null,x=null,y=null,T=null,C=null,v=new be(0,0,0),R=0,D=!1,U=null,H=null,B=null,F=null,V=null,Je.set(0,0,r.canvas.width,r.canvas.height),je.set(0,0,r.canvas.width,r.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:de,disable:Te,bindFramebuffer:ze,drawBuffers:ye,useProgram:qe,setBlending:it,setMaterial:dt,setFlipSided:$e,setCullFace:bt,setLineWidth:kt,setPolygonOffset:Zt,setScissorTest:Mt,activeTexture:wt,bindTexture:G,unbindTexture:Kt,compressedTexImage2D:at,compressedTexImage3D:L,texImage2D:ae,texImage3D:le,pixelStorei:I,getParameter:S,updateUBOMapping:k,uniformBlockBinding:j,texStorage2D:me,texStorage3D:ge,texSubImage2D:M,texSubImage3D:W,compressedTexSubImage2D:$,compressedTexSubImage3D:ie,scissor:A,viewport:N,reset:ee}}function I_(r,e,t,n,i,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new He,h=new WeakMap,d=new Set;let u;const f=new WeakMap;let g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(L,M){return g?new OffscreenCanvas(L,M):Rr("canvas")}function p(L,M,W){let $=1;const ie=at(L);if((ie.width>W||ie.height>W)&&($=W/Math.max(ie.width,ie.height)),$<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){const me=Math.floor($*ie.width),ge=Math.floor($*ie.height);u===void 0&&(u=_(me,ge));const ae=M?_(me,ge):u;return ae.width=me,ae.height=ge,ae.getContext("2d").drawImage(L,0,0,me,ge),Ie("WebGLRenderer: Texture has been resized from ("+ie.width+"x"+ie.height+") to ("+me+"x"+ge+")."),ae}else return"data"in L&&Ie("WebGLRenderer: Image in DataTexture is too big ("+ie.width+"x"+ie.height+")."),L;return L}function m(L){return L.generateMipmaps}function b(L){r.generateMipmap(L)}function w(L){return L.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:L.isWebGL3DRenderTarget?r.TEXTURE_3D:L.isWebGLArrayRenderTarget||L.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function x(L,M,W,$,ie,me=!1){if(L!==null){if(r[L]!==void 0)return r[L];Ie("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let ge;$&&(ge=e.get("EXT_texture_norm16"),ge||Ie("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let ae=M;if(M===r.RED&&(W===r.FLOAT&&(ae=r.R32F),W===r.HALF_FLOAT&&(ae=r.R16F),W===r.UNSIGNED_BYTE&&(ae=r.R8),W===r.UNSIGNED_SHORT&&ge&&(ae=ge.R16_EXT),W===r.SHORT&&ge&&(ae=ge.R16_SNORM_EXT)),M===r.RED_INTEGER&&(W===r.UNSIGNED_BYTE&&(ae=r.R8UI),W===r.UNSIGNED_SHORT&&(ae=r.R16UI),W===r.UNSIGNED_INT&&(ae=r.R32UI),W===r.BYTE&&(ae=r.R8I),W===r.SHORT&&(ae=r.R16I),W===r.INT&&(ae=r.R32I)),M===r.RG&&(W===r.FLOAT&&(ae=r.RG32F),W===r.HALF_FLOAT&&(ae=r.RG16F),W===r.UNSIGNED_BYTE&&(ae=r.RG8),W===r.UNSIGNED_SHORT&&ge&&(ae=ge.RG16_EXT),W===r.SHORT&&ge&&(ae=ge.RG16_SNORM_EXT)),M===r.RG_INTEGER&&(W===r.UNSIGNED_BYTE&&(ae=r.RG8UI),W===r.UNSIGNED_SHORT&&(ae=r.RG16UI),W===r.UNSIGNED_INT&&(ae=r.RG32UI),W===r.BYTE&&(ae=r.RG8I),W===r.SHORT&&(ae=r.RG16I),W===r.INT&&(ae=r.RG32I)),M===r.RGB_INTEGER&&(W===r.UNSIGNED_BYTE&&(ae=r.RGB8UI),W===r.UNSIGNED_SHORT&&(ae=r.RGB16UI),W===r.UNSIGNED_INT&&(ae=r.RGB32UI),W===r.BYTE&&(ae=r.RGB8I),W===r.SHORT&&(ae=r.RGB16I),W===r.INT&&(ae=r.RGB32I)),M===r.RGBA_INTEGER&&(W===r.UNSIGNED_BYTE&&(ae=r.RGBA8UI),W===r.UNSIGNED_SHORT&&(ae=r.RGBA16UI),W===r.UNSIGNED_INT&&(ae=r.RGBA32UI),W===r.BYTE&&(ae=r.RGBA8I),W===r.SHORT&&(ae=r.RGBA16I),W===r.INT&&(ae=r.RGBA32I)),M===r.RGB&&(W===r.UNSIGNED_SHORT&&ge&&(ae=ge.RGB16_EXT),W===r.SHORT&&ge&&(ae=ge.RGB16_SNORM_EXT),W===r.UNSIGNED_INT_5_9_9_9_REV&&(ae=r.RGB9_E5),W===r.UNSIGNED_INT_10F_11F_11F_REV&&(ae=r.R11F_G11F_B10F)),M===r.RGBA){const le=me?Aa:et.getTransfer(ie);W===r.FLOAT&&(ae=r.RGBA32F),W===r.HALF_FLOAT&&(ae=r.RGBA16F),W===r.UNSIGNED_BYTE&&(ae=le===lt?r.SRGB8_ALPHA8:r.RGBA8),W===r.UNSIGNED_SHORT&&ge&&(ae=ge.RGBA16_EXT),W===r.SHORT&&ge&&(ae=ge.RGBA16_SNORM_EXT),W===r.UNSIGNED_SHORT_4_4_4_4&&(ae=r.RGBA4),W===r.UNSIGNED_SHORT_5_5_5_1&&(ae=r.RGB5_A1)}return(ae===r.R16F||ae===r.R32F||ae===r.RG16F||ae===r.RG32F||ae===r.RGBA16F||ae===r.RGBA32F)&&e.get("EXT_color_buffer_float"),ae}function y(L,M){let W;return L?M===null||M===ni||M===Er?W=r.DEPTH24_STENCIL8:M===Rn?W=r.DEPTH32F_STENCIL8:M===yr&&(W=r.DEPTH24_STENCIL8,Ie("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===ni||M===Er?W=r.DEPTH_COMPONENT24:M===Rn?W=r.DEPTH_COMPONENT32F:M===yr&&(W=r.DEPTH_COMPONENT16),W}function T(L,M){return m(L)===!0||L.isFramebufferTexture&&L.minFilter!==Dt&&L.minFilter!==Vt?Math.log2(Math.max(M.width,M.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?M.mipmaps.length:1}function C(L){const M=L.target;M.removeEventListener("dispose",C),R(M),M.isVideoTexture&&h.delete(M),M.isHTMLTexture&&d.delete(M)}function v(L){const M=L.target;M.removeEventListener("dispose",v),U(M)}function R(L){const M=n.get(L);if(M.__webglInit===void 0)return;const W=L.source,$=f.get(W);if($){const ie=$[M.__cacheKey];ie.usedTimes--,ie.usedTimes===0&&D(L),Object.keys($).length===0&&f.delete(W)}n.remove(L)}function D(L){const M=n.get(L);r.deleteTexture(M.__webglTexture);const W=L.source,$=f.get(W);delete $[M.__cacheKey],a.memory.textures--}function U(L){const M=n.get(L);if(L.depthTexture&&(L.depthTexture.dispose(),n.remove(L.depthTexture)),L.isWebGLCubeRenderTarget)for(let $=0;$<6;$++){if(Array.isArray(M.__webglFramebuffer[$]))for(let ie=0;ie<M.__webglFramebuffer[$].length;ie++)r.deleteFramebuffer(M.__webglFramebuffer[$][ie]);else r.deleteFramebuffer(M.__webglFramebuffer[$]);M.__webglDepthbuffer&&r.deleteRenderbuffer(M.__webglDepthbuffer[$])}else{if(Array.isArray(M.__webglFramebuffer))for(let $=0;$<M.__webglFramebuffer.length;$++)r.deleteFramebuffer(M.__webglFramebuffer[$]);else r.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&r.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&r.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let $=0;$<M.__webglColorRenderbuffer.length;$++)M.__webglColorRenderbuffer[$]&&r.deleteRenderbuffer(M.__webglColorRenderbuffer[$]);M.__webglDepthRenderbuffer&&r.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const W=L.textures;for(let $=0,ie=W.length;$<ie;$++){const me=n.get(W[$]);me.__webglTexture&&(r.deleteTexture(me.__webglTexture),a.memory.textures--),n.remove(W[$])}n.remove(L)}let H=0;function B(){H=0}function F(){return H}function V(L){H=L}function te(){const L=H;return L>=i.maxTextures&&Ie("WebGLTextures: Trying to use "+(L+1)+" texture units while this GPU supports only "+i.maxTextures),H+=1,L}function J(L){const M=[];return M.push(L.wrapS),M.push(L.wrapT),M.push(L.wrapR||0),M.push(L.magFilter),M.push(L.minFilter),M.push(L.anisotropy),M.push(L.internalFormat),M.push(L.format),M.push(L.type),M.push(L.generateMipmaps),M.push(L.premultiplyAlpha),M.push(L.flipY),M.push(L.unpackAlignment),M.push(L.colorSpace),M.join()}function ue(L,M){const W=n.get(L);if(L.isVideoTexture&&G(L),L.isRenderTargetTexture===!1&&L.isExternalTexture!==!0&&L.version>0&&W.__version!==L.version){const $=L.image;if($===null)Ie("WebGLRenderer: Texture marked for update but no image data found.");else if($.complete===!1)Ie("WebGLRenderer: Texture marked for update but image is incomplete");else{Te(W,L,M);return}}else L.isExternalTexture&&(W.__webglTexture=L.sourceTexture?L.sourceTexture:null);t.bindTexture(r.TEXTURE_2D,W.__webglTexture,r.TEXTURE0+M)}function Y(L,M){const W=n.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&W.__version!==L.version){Te(W,L,M);return}else L.isExternalTexture&&(W.__webglTexture=L.sourceTexture?L.sourceTexture:null);t.bindTexture(r.TEXTURE_2D_ARRAY,W.__webglTexture,r.TEXTURE0+M)}function ce(L,M){const W=n.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&W.__version!==L.version){Te(W,L,M);return}t.bindTexture(r.TEXTURE_3D,W.__webglTexture,r.TEXTURE0+M)}function he(L,M){const W=n.get(L);if(L.isCubeDepthTexture!==!0&&L.version>0&&W.__version!==L.version){ze(W,L,M);return}t.bindTexture(r.TEXTURE_CUBE_MAP,W.__webglTexture,r.TEXTURE0+M)}const Me={[Os]:r.REPEAT,[Zn]:r.CLAMP_TO_EDGE,[Sa]:r.MIRRORED_REPEAT},Ae={[Dt]:r.NEAREST,[Id]:r.NEAREST_MIPMAP_NEAREST,[pr]:r.NEAREST_MIPMAP_LINEAR,[Vt]:r.LINEAR,[da]:r.LINEAR_MIPMAP_NEAREST,[gi]:r.LINEAR_MIPMAP_LINEAR},Je={[Qf]:r.NEVER,[sp]:r.ALWAYS,[ep]:r.LESS,[sl]:r.LEQUAL,[tp]:r.EQUAL,[rl]:r.GEQUAL,[np]:r.GREATER,[ip]:r.NOTEQUAL};function je(L,M){if(M.type===Rn&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===Vt||M.magFilter===da||M.magFilter===pr||M.magFilter===gi||M.minFilter===Vt||M.minFilter===da||M.minFilter===pr||M.minFilter===gi)&&Ie("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(L,r.TEXTURE_WRAP_S,Me[M.wrapS]),r.texParameteri(L,r.TEXTURE_WRAP_T,Me[M.wrapT]),(L===r.TEXTURE_3D||L===r.TEXTURE_2D_ARRAY)&&r.texParameteri(L,r.TEXTURE_WRAP_R,Me[M.wrapR]),r.texParameteri(L,r.TEXTURE_MAG_FILTER,Ae[M.magFilter]),r.texParameteri(L,r.TEXTURE_MIN_FILTER,Ae[M.minFilter]),M.compareFunction&&(r.texParameteri(L,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(L,r.TEXTURE_COMPARE_FUNC,Je[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===Dt||M.minFilter!==pr&&M.minFilter!==gi||M.type===Rn&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||n.get(M).__currentAnisotropy){const W=e.get("EXT_texture_filter_anisotropic");r.texParameterf(L,W.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,i.getMaxAnisotropy())),n.get(M).__currentAnisotropy=M.anisotropy}}}function Be(L,M){let W=!1;L.__webglInit===void 0&&(L.__webglInit=!0,M.addEventListener("dispose",C));const $=M.source;let ie=f.get($);ie===void 0&&(ie={},f.set($,ie));const me=J(M);if(me!==L.__cacheKey){ie[me]===void 0&&(ie[me]={texture:r.createTexture(),usedTimes:0},a.memory.textures++,W=!0),ie[me].usedTimes++;const ge=ie[L.__cacheKey];ge!==void 0&&(ie[L.__cacheKey].usedTimes--,ge.usedTimes===0&&D(M)),L.__cacheKey=me,L.__webglTexture=ie[me].texture}return W}function se(L,M,W){return Math.floor(Math.floor(L/W)/M)}function de(L,M,W,$){const me=L.updateRanges;if(me.length===0)t.texSubImage2D(r.TEXTURE_2D,0,0,0,M.width,M.height,W,$,M.data);else{me.sort((I,A)=>I.start-A.start);let ge=0;for(let I=1;I<me.length;I++){const A=me[ge],N=me[I],k=A.start+A.count,j=se(N.start,M.width,4),ee=se(A.start,M.width,4);N.start<=k+1&&j===ee&&se(N.start+N.count-1,M.width,4)===j?A.count=Math.max(A.count,N.start+N.count-A.start):(++ge,me[ge]=N)}me.length=ge+1;const ae=t.getParameter(r.UNPACK_ROW_LENGTH),le=t.getParameter(r.UNPACK_SKIP_PIXELS),S=t.getParameter(r.UNPACK_SKIP_ROWS);t.pixelStorei(r.UNPACK_ROW_LENGTH,M.width);for(let I=0,A=me.length;I<A;I++){const N=me[I],k=Math.floor(N.start/4),j=Math.ceil(N.count/4),ee=k%M.width,P=Math.floor(k/M.width),ne=j,q=1;t.pixelStorei(r.UNPACK_SKIP_PIXELS,ee),t.pixelStorei(r.UNPACK_SKIP_ROWS,P),t.texSubImage2D(r.TEXTURE_2D,0,ee,P,ne,q,W,$,M.data)}L.clearUpdateRanges(),t.pixelStorei(r.UNPACK_ROW_LENGTH,ae),t.pixelStorei(r.UNPACK_SKIP_PIXELS,le),t.pixelStorei(r.UNPACK_SKIP_ROWS,S)}}function Te(L,M,W){let $=r.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&($=r.TEXTURE_2D_ARRAY),M.isData3DTexture&&($=r.TEXTURE_3D);const ie=Be(L,M),me=M.source;t.bindTexture($,L.__webglTexture,r.TEXTURE0+W);const ge=n.get(me);if(me.version!==ge.__version||ie===!0){if(t.activeTexture(r.TEXTURE0+W),(typeof ImageBitmap<"u"&&M.image instanceof ImageBitmap)===!1){const q=et.getPrimaries(et.workingColorSpace),oe=M.colorSpace===Ui?null:et.getPrimaries(M.colorSpace),fe=M.colorSpace===Ui||q===oe?r.NONE:r.BROWSER_DEFAULT_WEBGL;t.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,fe)}t.pixelStorei(r.UNPACK_ALIGNMENT,M.unpackAlignment);let le=p(M.image,!1,i.maxTextureSize);le=Kt(M,le);const S=s.convert(M.format,M.colorSpace),I=s.convert(M.type);let A=x(M.internalFormat,S,I,M.normalized,M.colorSpace,M.isVideoTexture);je($,M);let N;const k=M.mipmaps,j=M.isVideoTexture!==!0,ee=ge.__version===void 0||ie===!0,P=me.dataReady,ne=T(M,le);if(M.isDepthTexture)A=y(M.format===ts,M.type),ee&&(j?t.texStorage2D(r.TEXTURE_2D,1,A,le.width,le.height):t.texImage2D(r.TEXTURE_2D,0,A,le.width,le.height,0,S,I,null));else if(M.isDataTexture)if(k.length>0){j&&ee&&t.texStorage2D(r.TEXTURE_2D,ne,A,k[0].width,k[0].height);for(let q=0,oe=k.length;q<oe;q++)N=k[q],j?P&&t.texSubImage2D(r.TEXTURE_2D,q,0,0,N.width,N.height,S,I,N.data):t.texImage2D(r.TEXTURE_2D,q,A,N.width,N.height,0,S,I,N.data);M.generateMipmaps=!1}else j?(ee&&t.texStorage2D(r.TEXTURE_2D,ne,A,le.width,le.height),P&&de(M,le,S,I)):t.texImage2D(r.TEXTURE_2D,0,A,le.width,le.height,0,S,I,le.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){j&&ee&&t.texStorage3D(r.TEXTURE_2D_ARRAY,ne,A,k[0].width,k[0].height,le.depth);for(let q=0,oe=k.length;q<oe;q++)if(N=k[q],M.format!==Cn)if(S!==null)if(j){if(P)if(M.layerUpdates.size>0){const fe=Ch(N.width,N.height,M.format,M.type);for(const Z of M.layerUpdates){const xe=N.data.subarray(Z*fe/N.data.BYTES_PER_ELEMENT,(Z+1)*fe/N.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,q,0,0,Z,N.width,N.height,1,S,xe)}}else t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,q,0,0,0,N.width,N.height,le.depth,S,N.data)}else t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,q,A,N.width,N.height,le.depth,0,N.data,0,0);else Ie("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else j?P&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,q,0,0,0,N.width,N.height,le.depth,S,I,N.data):t.texImage3D(r.TEXTURE_2D_ARRAY,q,A,N.width,N.height,le.depth,0,S,I,N.data);M.layerUpdates.size>0&&M.clearLayerUpdates()}else{j&&ee&&t.texStorage2D(r.TEXTURE_2D,ne,A,k[0].width,k[0].height);for(let q=0,oe=k.length;q<oe;q++)N=k[q],M.format!==Cn?S!==null?j?P&&t.compressedTexSubImage2D(r.TEXTURE_2D,q,0,0,N.width,N.height,S,N.data):t.compressedTexImage2D(r.TEXTURE_2D,q,A,N.width,N.height,0,N.data):Ie("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):j?P&&t.texSubImage2D(r.TEXTURE_2D,q,0,0,N.width,N.height,S,I,N.data):t.texImage2D(r.TEXTURE_2D,q,A,N.width,N.height,0,S,I,N.data)}else if(M.isDataArrayTexture)if(j){if(ee&&t.texStorage3D(r.TEXTURE_2D_ARRAY,ne,A,le.width,le.height,le.depth),P)if(M.layerUpdates.size>0){const q=Ch(le.width,le.height,M.format,M.type);for(const oe of M.layerUpdates){const fe=le.data.subarray(oe*q/le.data.BYTES_PER_ELEMENT,(oe+1)*q/le.data.BYTES_PER_ELEMENT);t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,oe,le.width,le.height,1,S,I,fe)}M.clearLayerUpdates()}else t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,le.width,le.height,le.depth,S,I,le.data)}else t.texImage3D(r.TEXTURE_2D_ARRAY,0,A,le.width,le.height,le.depth,0,S,I,le.data);else if(M.isData3DTexture)j?(ee&&t.texStorage3D(r.TEXTURE_3D,ne,A,le.width,le.height,le.depth),P&&t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,le.width,le.height,le.depth,S,I,le.data)):t.texImage3D(r.TEXTURE_3D,0,A,le.width,le.height,le.depth,0,S,I,le.data);else if(M.isFramebufferTexture){if(ee)if(j)t.texStorage2D(r.TEXTURE_2D,ne,A,le.width,le.height);else{let q=le.width,oe=le.height;for(let fe=0;fe<ne;fe++)t.texImage2D(r.TEXTURE_2D,fe,A,q,oe,0,S,I,null),q>>=1,oe>>=1}}else if(M.isHTMLTexture){if("texElementImage2D"in r){const q=r.canvas;if(q.hasAttribute("layoutsubtree")||q.setAttribute("layoutsubtree","true"),le.parentNode!==q){q.appendChild(le),d.add(M),q.onpaint=oe=>{const fe=oe.changedElements;for(const Z of d)fe.includes(Z.image)&&(Z.needsUpdate=!0)},q.requestPaint();return}if(r.texElementImage2D.length===3)r.texElementImage2D(r.TEXTURE_2D,r.RGBA8,le);else{const fe=r.RGBA,Z=r.RGBA,xe=r.UNSIGNED_BYTE;r.texElementImage2D(r.TEXTURE_2D,0,fe,Z,xe,le)}r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MIN_FILTER,r.LINEAR),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE)}}else if(k.length>0){if(j&&ee){const q=at(k[0]);t.texStorage2D(r.TEXTURE_2D,ne,A,q.width,q.height)}for(let q=0,oe=k.length;q<oe;q++)N=k[q],j?P&&t.texSubImage2D(r.TEXTURE_2D,q,0,0,S,I,N):t.texImage2D(r.TEXTURE_2D,q,A,S,I,N);M.generateMipmaps=!1}else if(j){if(ee){const q=at(le);t.texStorage2D(r.TEXTURE_2D,ne,A,q.width,q.height)}P&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,S,I,le)}else t.texImage2D(r.TEXTURE_2D,0,A,S,I,le);m(M)&&b($),ge.__version=me.version,M.onUpdate&&M.onUpdate(M)}L.__version=M.version}function ze(L,M,W){if(M.image.length!==6)return;const $=Be(L,M),ie=M.source;t.bindTexture(r.TEXTURE_CUBE_MAP,L.__webglTexture,r.TEXTURE0+W);const me=n.get(ie);if(ie.version!==me.__version||$===!0){t.activeTexture(r.TEXTURE0+W);const ge=et.getPrimaries(et.workingColorSpace),ae=M.colorSpace===Ui?null:et.getPrimaries(M.colorSpace),le=M.colorSpace===Ui||ge===ae?r.NONE:r.BROWSER_DEFAULT_WEBGL;t.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(r.UNPACK_ALIGNMENT,M.unpackAlignment),t.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,le);const S=M.isCompressedTexture||M.image[0].isCompressedTexture,I=M.image[0]&&M.image[0].isDataTexture,A=[];for(let Z=0;Z<6;Z++)!S&&!I?A[Z]=p(M.image[Z],!0,i.maxCubemapSize):A[Z]=I?M.image[Z].image:M.image[Z],A[Z]=Kt(M,A[Z]);const N=A[0],k=s.convert(M.format,M.colorSpace),j=s.convert(M.type),ee=x(M.internalFormat,k,j,M.normalized,M.colorSpace),P=M.isVideoTexture!==!0,ne=me.__version===void 0||$===!0,q=ie.dataReady;let oe=T(M,N);je(r.TEXTURE_CUBE_MAP,M);let fe;if(S){P&&ne&&t.texStorage2D(r.TEXTURE_CUBE_MAP,oe,ee,N.width,N.height);for(let Z=0;Z<6;Z++){fe=A[Z].mipmaps;for(let xe=0;xe<fe.length;xe++){const pe=fe[xe];M.format!==Cn?k!==null?P?q&&t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,xe,0,0,pe.width,pe.height,k,pe.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,xe,ee,pe.width,pe.height,0,pe.data):Ie("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):P?q&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,xe,0,0,pe.width,pe.height,k,j,pe.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,xe,ee,pe.width,pe.height,0,k,j,pe.data)}}}else{if(fe=M.mipmaps,P&&ne){fe.length>0&&oe++;const Z=at(A[0]);t.texStorage2D(r.TEXTURE_CUBE_MAP,oe,ee,Z.width,Z.height)}for(let Z=0;Z<6;Z++)if(I){P?q&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,A[Z].width,A[Z].height,k,j,A[Z].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,ee,A[Z].width,A[Z].height,0,k,j,A[Z].data);for(let xe=0;xe<fe.length;xe++){const De=fe[xe].image[Z].image;P?q&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,xe+1,0,0,De.width,De.height,k,j,De.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,xe+1,ee,De.width,De.height,0,k,j,De.data)}}else{P?q&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,k,j,A[Z]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,ee,k,j,A[Z]);for(let xe=0;xe<fe.length;xe++){const pe=fe[xe];P?q&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,xe+1,0,0,k,j,pe.image[Z]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,xe+1,ee,k,j,pe.image[Z])}}}m(M)&&b(r.TEXTURE_CUBE_MAP),me.__version=ie.version,M.onUpdate&&M.onUpdate(M)}L.__version=M.version}function ye(L,M,W,$,ie,me){const ge=s.convert(W.format,W.colorSpace),ae=s.convert(W.type),le=x(W.internalFormat,ge,ae,W.normalized,W.colorSpace),S=n.get(M),I=n.get(W);if(I.__renderTarget=M,!S.__hasExternalTextures){const A=Math.max(1,M.width>>me),N=Math.max(1,M.height>>me);ie===r.TEXTURE_3D||ie===r.TEXTURE_2D_ARRAY?t.texImage3D(ie,me,le,A,N,M.depth,0,ge,ae,null):t.texImage2D(ie,me,le,A,N,0,ge,ae,null)}t.bindFramebuffer(r.FRAMEBUFFER,L),wt(M)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,$,ie,I.__webglTexture,0,Mt(M)):(ie===r.TEXTURE_2D||ie>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&ie<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,$,ie,I.__webglTexture,me),t.bindFramebuffer(r.FRAMEBUFFER,null)}function qe(L,M,W){if(r.bindRenderbuffer(r.RENDERBUFFER,L),M.depthBuffer){const $=M.depthTexture,ie=$&&$.isDepthTexture?$.type:null,me=y(M.stencilBuffer,ie),ge=M.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;wt(M)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Mt(M),me,M.width,M.height):W?r.renderbufferStorageMultisample(r.RENDERBUFFER,Mt(M),me,M.width,M.height):r.renderbufferStorage(r.RENDERBUFFER,me,M.width,M.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,ge,r.RENDERBUFFER,L)}else{const $=M.textures;for(let ie=0;ie<$.length;ie++){const me=$[ie],ge=s.convert(me.format,me.colorSpace),ae=s.convert(me.type),le=x(me.internalFormat,ge,ae,me.normalized,me.colorSpace);wt(M)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Mt(M),le,M.width,M.height):W?r.renderbufferStorageMultisample(r.RENDERBUFFER,Mt(M),le,M.width,M.height):r.renderbufferStorage(r.RENDERBUFFER,le,M.width,M.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Lt(L,M,W){const $=M.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(r.FRAMEBUFFER,L),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const ie=n.get(M.depthTexture);if(ie.__renderTarget=M,(!ie.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),$){if(ie.__webglInit===void 0&&(ie.__webglInit=!0,M.depthTexture.addEventListener("dispose",C)),ie.__webglTexture===void 0){ie.__webglTexture=r.createTexture(),t.bindTexture(r.TEXTURE_CUBE_MAP,ie.__webglTexture),je(r.TEXTURE_CUBE_MAP,M.depthTexture);const S=s.convert(M.depthTexture.format),I=s.convert(M.depthTexture.type);let A;M.depthTexture.format===Mi?A=r.DEPTH_COMPONENT24:M.depthTexture.format===ts&&(A=r.DEPTH24_STENCIL8);for(let N=0;N<6;N++)r.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+N,0,A,M.width,M.height,0,S,I,null)}}else ue(M.depthTexture,0);const me=ie.__webglTexture,ge=Mt(M),ae=$?r.TEXTURE_CUBE_MAP_POSITIVE_X+W:r.TEXTURE_2D,le=M.depthTexture.format===ts?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;if(M.depthTexture.format===Mi)wt(M)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,le,ae,me,0,ge):r.framebufferTexture2D(r.FRAMEBUFFER,le,ae,me,0);else if(M.depthTexture.format===ts)wt(M)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,le,ae,me,0,ge):r.framebufferTexture2D(r.FRAMEBUFFER,le,ae,me,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Ye(L){const M=n.get(L),W=L.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==L.depthTexture){const $=L.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),$){const ie=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,$.removeEventListener("dispose",ie)};$.addEventListener("dispose",ie),M.__depthDisposeCallback=ie}M.__boundDepthTexture=$}if(L.depthTexture&&!M.__autoAllocateDepthBuffer)if(W)for(let $=0;$<6;$++)Lt(M.__webglFramebuffer[$],L,$);else{const $=L.texture.mipmaps;$&&$.length>0?Lt(M.__webglFramebuffer[0],L,0):Lt(M.__webglFramebuffer,L,0)}else if(W){M.__webglDepthbuffer=[];for(let $=0;$<6;$++)if(t.bindFramebuffer(r.FRAMEBUFFER,M.__webglFramebuffer[$]),M.__webglDepthbuffer[$]===void 0)M.__webglDepthbuffer[$]=r.createRenderbuffer(),qe(M.__webglDepthbuffer[$],L,!1);else{const ie=L.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,me=M.__webglDepthbuffer[$];r.bindRenderbuffer(r.RENDERBUFFER,me),r.framebufferRenderbuffer(r.FRAMEBUFFER,ie,r.RENDERBUFFER,me)}}else{const $=L.texture.mipmaps;if($&&$.length>0?t.bindFramebuffer(r.FRAMEBUFFER,M.__webglFramebuffer[0]):t.bindFramebuffer(r.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=r.createRenderbuffer(),qe(M.__webglDepthbuffer,L,!1);else{const ie=L.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,me=M.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,me),r.framebufferRenderbuffer(r.FRAMEBUFFER,ie,r.RENDERBUFFER,me)}}t.bindFramebuffer(r.FRAMEBUFFER,null)}function it(L,M,W){const $=n.get(L);M!==void 0&&ye($.__webglFramebuffer,L,L.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),W!==void 0&&Ye(L)}function dt(L){const M=L.texture,W=n.get(L),$=n.get(M);L.addEventListener("dispose",v);const ie=L.textures,me=L.isWebGLCubeRenderTarget===!0,ge=ie.length>1;if(ge||($.__webglTexture===void 0&&($.__webglTexture=r.createTexture()),$.__version=M.version,a.memory.textures++),me){W.__webglFramebuffer=[];for(let ae=0;ae<6;ae++)if(M.mipmaps&&M.mipmaps.length>0){W.__webglFramebuffer[ae]=[];for(let le=0;le<M.mipmaps.length;le++)W.__webglFramebuffer[ae][le]=r.createFramebuffer()}else W.__webglFramebuffer[ae]=r.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){W.__webglFramebuffer=[];for(let ae=0;ae<M.mipmaps.length;ae++)W.__webglFramebuffer[ae]=r.createFramebuffer()}else W.__webglFramebuffer=r.createFramebuffer();if(ge)for(let ae=0,le=ie.length;ae<le;ae++){const S=n.get(ie[ae]);S.__webglTexture===void 0&&(S.__webglTexture=r.createTexture(),a.memory.textures++)}if(L.samples>0&&wt(L)===!1){W.__webglMultisampledFramebuffer=r.createFramebuffer(),W.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,W.__webglMultisampledFramebuffer);for(let ae=0;ae<ie.length;ae++){const le=ie[ae];W.__webglColorRenderbuffer[ae]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,W.__webglColorRenderbuffer[ae]);const S=s.convert(le.format,le.colorSpace),I=s.convert(le.type),A=x(le.internalFormat,S,I,le.normalized,le.colorSpace,L.isXRRenderTarget===!0),N=Mt(L);r.renderbufferStorageMultisample(r.RENDERBUFFER,N,A,L.width,L.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ae,r.RENDERBUFFER,W.__webglColorRenderbuffer[ae])}r.bindRenderbuffer(r.RENDERBUFFER,null),L.depthBuffer&&(W.__webglDepthRenderbuffer=r.createRenderbuffer(),qe(W.__webglDepthRenderbuffer,L,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(me){t.bindTexture(r.TEXTURE_CUBE_MAP,$.__webglTexture),je(r.TEXTURE_CUBE_MAP,M);for(let ae=0;ae<6;ae++)if(M.mipmaps&&M.mipmaps.length>0)for(let le=0;le<M.mipmaps.length;le++)ye(W.__webglFramebuffer[ae][le],L,M,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ae,le);else ye(W.__webglFramebuffer[ae],L,M,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0);m(M)&&b(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ge){for(let ae=0,le=ie.length;ae<le;ae++){const S=ie[ae],I=n.get(S);let A=r.TEXTURE_2D;(L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(A=L.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(A,I.__webglTexture),je(A,S),ye(W.__webglFramebuffer,L,S,r.COLOR_ATTACHMENT0+ae,A,0),m(S)&&b(A)}t.unbindTexture()}else{let ae=r.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(ae=L.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(ae,$.__webglTexture),je(ae,M),M.mipmaps&&M.mipmaps.length>0)for(let le=0;le<M.mipmaps.length;le++)ye(W.__webglFramebuffer[le],L,M,r.COLOR_ATTACHMENT0,ae,le);else ye(W.__webglFramebuffer,L,M,r.COLOR_ATTACHMENT0,ae,0);m(M)&&b(ae),t.unbindTexture()}L.depthBuffer&&Ye(L)}function $e(L){const M=L.textures;for(let W=0,$=M.length;W<$;W++){const ie=M[W];if(m(ie)){const me=w(L),ge=n.get(ie).__webglTexture;t.bindTexture(me,ge),b(me),t.unbindTexture()}}}const bt=[],kt=[];function Zt(L){if(L.samples>0){if(wt(L)===!1){const M=L.textures,W=L.width,$=L.height;let ie=r.COLOR_BUFFER_BIT;const me=L.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ge=n.get(L),ae=M.length>1;if(ae)for(let S=0;S<M.length;S++)t.bindFramebuffer(r.FRAMEBUFFER,ge.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+S,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,ge.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+S,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,ge.__webglMultisampledFramebuffer);const le=L.texture.mipmaps;le&&le.length>0?t.bindFramebuffer(r.DRAW_FRAMEBUFFER,ge.__webglFramebuffer[0]):t.bindFramebuffer(r.DRAW_FRAMEBUFFER,ge.__webglFramebuffer);for(let S=0;S<M.length;S++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(ie|=r.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(ie|=r.STENCIL_BUFFER_BIT)),ae){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,ge.__webglColorRenderbuffer[S]);const I=n.get(M[S]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,I,0)}r.blitFramebuffer(0,0,W,$,0,0,W,$,ie,r.NEAREST),c===!0&&(bt.length=0,kt.length=0,bt.push(r.COLOR_ATTACHMENT0+S),L.depthBuffer&&L.storeMultisampledDepthBuffer===!1&&(bt.push(me),kt.push(me),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,kt)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,bt))}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),ae)for(let S=0;S<M.length;S++){t.bindFramebuffer(r.FRAMEBUFFER,ge.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+S,r.RENDERBUFFER,ge.__webglColorRenderbuffer[S]);const I=n.get(M[S]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,ge.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+S,r.TEXTURE_2D,I,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,ge.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.storeMultisampledDepthBuffer===!1&&c){const M=L.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[M])}}}function Mt(L){return Math.min(i.maxSamples,L.samples)}function wt(L){const M=n.get(L);return L.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function G(L){const M=a.render.frame;h.get(L)!==M&&(h.set(L,M),L.update())}function Kt(L,M){const W=L.colorSpace,$=L.format,ie=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||W!==xn&&W!==Ui&&(et.getTransfer(W)===lt?($!==Cn||ie!==gn)&&Ie("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Oe("WebGLTextures: Unsupported texture color space:",W)),M}function at(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(l.width=L.naturalWidth||L.width,l.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(l.width=L.displayWidth,l.height=L.displayHeight):(l.width=L.width,l.height=L.height),l}this.allocateTextureUnit=te,this.resetTextureUnits=B,this.getTextureUnits=F,this.setTextureUnits=V,this.setTexture2D=ue,this.setTexture2DArray=Y,this.setTexture3D=ce,this.setTextureCube=he,this.rebindTextures=it,this.setupRenderTarget=dt,this.updateRenderTargetMipmap=$e,this.updateMultisampleRenderTarget=Zt,this.setupDepthRenderbuffer=Ye,this.setupFrameBufferTexture=ye,this.useMultisampledRTT=wt,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function D_(r,e){function t(n,i=Ui){let s;const a=et.getTransfer(i);if(n===gn)return r.UNSIGNED_BYTE;if(n===$c)return r.UNSIGNED_SHORT_4_4_4_4;if(n===Zc)return r.UNSIGNED_SHORT_5_5_5_1;if(n===kd)return r.UNSIGNED_INT_5_9_9_9_REV;if(n===Fd)return r.UNSIGNED_INT_10F_11F_11F_REV;if(n===Dd)return r.BYTE;if(n===Nd)return r.SHORT;if(n===yr)return r.UNSIGNED_SHORT;if(n===Jc)return r.INT;if(n===ni)return r.UNSIGNED_INT;if(n===Rn)return r.FLOAT;if(n===ii)return r.HALF_FLOAT;if(n===Ud)return r.ALPHA;if(n===Od)return r.RGB;if(n===Cn)return r.RGBA;if(n===Mi)return r.DEPTH_COMPONENT;if(n===ts)return r.DEPTH_STENCIL;if(n===Qc)return r.RED;if(n===el)return r.RED_INTEGER;if(n===rs)return r.RG;if(n===tl)return r.RG_INTEGER;if(n===nl)return r.RGBA_INTEGER;if(n===ua||n===fa||n===pa||n===ma)if(a===lt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===ua)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===fa)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===pa)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===ma)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===ua)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===fa)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===pa)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===ma)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===tc||n===nc||n===ic||n===sc)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===tc)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===nc)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===ic)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===sc)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===rc||n===ac||n===oc||n===cc||n===lc||n===ya||n===hc)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===rc||n===ac)return a===lt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===oc)return a===lt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(n===cc)return s.COMPRESSED_R11_EAC;if(n===lc)return s.COMPRESSED_SIGNED_R11_EAC;if(n===ya)return s.COMPRESSED_RG11_EAC;if(n===hc)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===dc||n===uc||n===fc||n===pc||n===mc||n===gc||n===bc||n===xc||n===_c||n===vc||n===Mc||n===Sc||n===yc||n===Ec)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===dc)return a===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===uc)return a===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===fc)return a===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===pc)return a===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===mc)return a===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===gc)return a===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===bc)return a===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===xc)return a===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===_c)return a===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===vc)return a===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Mc)return a===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Sc)return a===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===yc)return a===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Ec)return a===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Tc||n===wc||n===Ac)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===Tc)return a===lt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===wc)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Ac)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Rc||n===Cc||n===Ea||n===Lc)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===Rc)return s.COMPRESSED_RED_RGTC1_EXT;if(n===Cc)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Ea)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Lc)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Er?r.UNSIGNED_INT_24_8:r[n]!==void 0?r[n]:null}return{convert:t}}const N_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,k_=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class F_{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new Qd(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Gn({vertexShader:N_,fragmentShader:k_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new We(new Vi(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class U_ extends Wi{constructor(e,t){super();const n=this;let i=null,s=1,a=null,o="local-floor",c=1,l=null,h=null,d=null,u=null,f=null,g=null;const _=typeof XRWebGLBinding<"u",p=new F_,m={},b=t.getContextAttributes();let w=null,x=null;const y=[],T=[],C=new He;let v=null,R=null;const D=new dn;D.viewport=new ft;const U=new dn;U.viewport=new ft;const H=[D,U],B=new Dm;let F=null,V=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(se){let de=y[se];return de===void 0&&(de=new so,y[se]=de),de.getTargetRaySpace()},this.getControllerGrip=function(se){let de=y[se];return de===void 0&&(de=new so,y[se]=de),de.getGripSpace()},this.getHand=function(se){let de=y[se];return de===void 0&&(de=new so,y[se]=de),de.getHandSpace()};function te(se){const de=T.indexOf(se.inputSource);if(de===-1)return;const Te=y[de];Te!==void 0&&(Te.update(se.inputSource,se.frame,l||a),Te.dispatchEvent({type:se.type,data:se.inputSource}))}function J(){i.removeEventListener("select",te),i.removeEventListener("selectstart",te),i.removeEventListener("selectend",te),i.removeEventListener("squeeze",te),i.removeEventListener("squeezestart",te),i.removeEventListener("squeezeend",te),i.removeEventListener("end",J),i.removeEventListener("inputsourceschange",ue);for(let se=0;se<y.length;se++){const de=T[se];de!==null&&(T[se]=null,y[se].disconnect(de))}F=null,V=null,p.reset();for(const se in m)delete m[se];if(e.setRenderTarget(w),f=null,u=null,d=null,i=null,x=null,Be.stop(),n.isPresenting=!1,e.setPixelRatio(v),e.setSize(C.width,C.height,!1),R!==null){const se=R.camera;se.fov=R.fov,se.zoom=R.zoom,se.updateProjectionMatrix(),R=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(se){s=se,n.isPresenting===!0&&Ie("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(se){o=se,n.isPresenting===!0&&Ie("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(se){l=se},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return d===null&&_&&(d=new XRWebGLBinding(i,t)),d},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(se){if(i=se,i!==null){if(w=e.getRenderTarget(),i.addEventListener("select",te),i.addEventListener("selectstart",te),i.addEventListener("selectend",te),i.addEventListener("squeeze",te),i.addEventListener("squeezestart",te),i.addEventListener("squeezeend",te),i.addEventListener("end",J),i.addEventListener("inputsourceschange",ue),b.xrCompatible!==!0&&await t.makeXRCompatible(),v=e.getPixelRatio(),e.getSize(C),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let Te=null,ze=null,ye=null;b.depth&&(ye=b.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Te=b.stencil?ts:Mi,ze=b.stencil?Er:ni);const qe={colorFormat:t.RGBA8,depthFormat:ye,scaleFactor:s};d=this.getBinding(),u=d.createProjectionLayer(qe),i.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),x=new zn(u.textureWidth,u.textureHeight,{format:Cn,type:gn,depthTexture:new Cr(u.textureWidth,u.textureHeight,ze,void 0,void 0,void 0,void 0,void 0,void 0,Te),stencilBuffer:b.stencil,colorSpace:e.outputColorSpace,samples:b.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{const Te={antialias:b.antialias,alpha:!0,depth:b.depth,stencil:b.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(i,t,Te),i.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),x=new zn(f.framebufferWidth,f.framebufferHeight,{format:Cn,type:gn,colorSpace:e.outputColorSpace,stencilBuffer:b.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await i.requestReferenceSpace(o),Be.setContext(i),Be.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function ue(se){for(let de=0;de<se.removed.length;de++){const Te=se.removed[de],ze=T.indexOf(Te);ze>=0&&(T[ze]=null,y[ze].disconnect(Te))}for(let de=0;de<se.added.length;de++){const Te=se.added[de];let ze=T.indexOf(Te);if(ze===-1){for(let qe=0;qe<y.length;qe++)if(qe>=T.length){T.push(Te),ze=qe;break}else if(T[qe]===null){T[qe]=Te,ze=qe;break}if(ze===-1)break}const ye=y[ze];ye&&ye.connect(Te)}}const Y=new z,ce=new z;function he(se,de,Te){Y.setFromMatrixPosition(de.matrixWorld),ce.setFromMatrixPosition(Te.matrixWorld);const ze=Y.distanceTo(ce),ye=de.projectionMatrix.elements,qe=Te.projectionMatrix.elements,Lt=ye[14]/(ye[10]-1),Ye=ye[14]/(ye[10]+1),it=(ye[9]+1)/ye[5],dt=(ye[9]-1)/ye[5],$e=(ye[8]-1)/ye[0],bt=(qe[8]+1)/qe[0],kt=Lt*$e,Zt=Lt*bt,Mt=ze/(-$e+bt),wt=Mt*-$e;if(de.matrixWorld.decompose(se.position,se.quaternion,se.scale),se.translateX(wt),se.translateZ(Mt),se.matrixWorld.compose(se.position,se.quaternion,se.scale),se.matrixWorldInverse.copy(se.matrixWorld).invert(),ye[10]===-1)se.projectionMatrix.copy(de.projectionMatrix),se.projectionMatrixInverse.copy(de.projectionMatrixInverse);else{const G=Lt+Mt,Kt=Ye+Mt,at=kt-wt,L=Zt+(ze-wt),M=it*Ye/Kt*G,W=dt*Ye/Kt*G;se.projectionMatrix.makePerspective(at,L,M,W,G,Kt),se.projectionMatrixInverse.copy(se.projectionMatrix).invert()}}function Me(se,de){de===null?se.matrixWorld.copy(se.matrix):se.matrixWorld.multiplyMatrices(de.matrixWorld,se.matrix),se.matrixWorldInverse.copy(se.matrixWorld).invert()}this.updateCamera=function(se){if(i===null)return;let de=se.near,Te=se.far;p.texture!==null&&(p.depthNear>0&&(de=p.depthNear),p.depthFar>0&&(Te=p.depthFar)),B.near=U.near=D.near=de,B.far=U.far=D.far=Te,(F!==B.near||V!==B.far)&&(i.updateRenderState({depthNear:B.near,depthFar:B.far}),F=B.near,V=B.far),B.layers.mask=se.layers.mask|6,D.layers.mask=B.layers.mask&-5,U.layers.mask=B.layers.mask&-3;const ze=se.parent,ye=B.cameras;Me(B,ze);for(let qe=0;qe<ye.length;qe++)Me(ye[qe],ze);ye.length===2?he(B,D,U):B.projectionMatrix.copy(D.projectionMatrix),R===null&&se.isPerspectiveCamera&&(R={camera:se,fov:se.fov,zoom:se.zoom}),Ae(se,B,ze)};function Ae(se,de,Te){Te===null?se.matrix.copy(de.matrixWorld):(se.matrix.copy(Te.matrixWorld),se.matrix.invert(),se.matrix.multiply(de.matrixWorld)),se.matrix.decompose(se.position,se.quaternion,se.scale),se.updateMatrixWorld(!0),se.projectionMatrix.copy(de.projectionMatrix),se.projectionMatrixInverse.copy(de.projectionMatrixInverse),se.isPerspectiveCamera&&(se.fov=zs*2*Math.atan(1/se.projectionMatrix.elements[5]),se.zoom=1)}this.getCamera=function(){return B},this.getFoveation=function(){if(!(u===null&&f===null))return c},this.setFoveation=function(se){c=se,u!==null&&(u.fixedFoveation=se),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=se)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(B)},this.getCameraTexture=function(se){return m[se]};let Je=null;function je(se,de){if(h=de.getViewerPose(l||a),g=de,h!==null){const Te=h.views;f!==null&&(e.setRenderTargetFramebuffer(x,f.framebuffer),e.setRenderTarget(x));let ze=!1;Te.length!==B.cameras.length&&(B.cameras.length=0,ze=!0);for(let Ye=0;Ye<Te.length;Ye++){const it=Te[Ye];let dt=null;if(f!==null)dt=f.getViewport(it);else{const bt=d.getViewSubImage(u,it);dt=bt.viewport,Ye===0&&(e.setRenderTargetTextures(x,bt.colorTexture,bt.depthStencilTexture),e.setRenderTarget(x))}let $e=H[Ye];$e===void 0&&($e=new dn,$e.layers.enable(Ye),$e.viewport=new ft,H[Ye]=$e),$e.matrix.fromArray(it.transform.matrix),$e.matrix.decompose($e.position,$e.quaternion,$e.scale),$e.projectionMatrix.fromArray(it.projectionMatrix),$e.projectionMatrixInverse.copy($e.projectionMatrix).invert(),$e.viewport.set(dt.x,dt.y,dt.width,dt.height),Ye===0&&(B.matrix.copy($e.matrix),B.matrix.decompose(B.position,B.quaternion,B.scale)),ze===!0&&B.cameras.push($e)}const ye=i.enabledFeatures;if(ye&&ye.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&_){d=n.getBinding();const Ye=d.getDepthInformation(Te[0]);Ye&&Ye.isValid&&Ye.texture&&p.init(Ye,i.renderState)}if(ye&&ye.includes("camera-access")&&_){e.state.unbindTexture(),d=n.getBinding();for(let Ye=0;Ye<Te.length;Ye++){const it=Te[Ye].camera;if(it){let dt=m[it];dt||(dt=new Qd,m[it]=dt);const $e=d.getCameraImage(it);dt.sourceTexture=$e}}}}for(let Te=0;Te<y.length;Te++){const ze=T[Te],ye=y[Te];ze!==null&&ye!==void 0&&ye.update(ze,de,l||a)}Je&&Je(se,de),de.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:de}),g=null}const Be=new cu;Be.setAnimationLoop(je),this.setAnimationLoop=function(se){Je=se},this.dispose=function(){}}}const O_=new Ve,mu=new Ge;mu.set(-1,0,0,0,1,0,0,0,1);function z_(r,e){function t(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function n(p,m){m.color.getRGB(p.fogColor.value,eu(r)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function i(p,m,b,w,x){m.isNodeMaterial?m.uniformsNeedUpdate=!1:m.isMeshBasicMaterial?s(p,m):m.isMeshLambertMaterial?(s(p,m),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)):m.isMeshToonMaterial?(s(p,m),d(p,m)):m.isMeshPhongMaterial?(s(p,m),h(p,m),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)):m.isMeshStandardMaterial?(s(p,m),u(p,m),m.isMeshPhysicalMaterial&&f(p,m,x)):m.isMeshMatcapMaterial?(s(p,m),g(p,m)):m.isMeshDepthMaterial?s(p,m):m.isMeshDistanceMaterial?(s(p,m),_(p,m)):m.isMeshNormalMaterial?s(p,m):m.isLineBasicMaterial?(a(p,m),m.isLineDashedMaterial&&o(p,m)):m.isPointsMaterial?c(p,m,b,w):m.isSpriteMaterial?l(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function s(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,t(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===fn&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,t(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===fn&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,t(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,t(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);const b=e.get(m),w=b.envMap,x=b.envMapRotation;w&&(p.envMap.value=w,p.envMapRotation.value.setFromMatrix4(O_.makeRotationFromEuler(x)).transpose(),w.isCubeTexture&&w.isRenderTargetTexture===!1&&p.envMapRotation.value.premultiply(mu),p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap&&(p.lightMap.value=m.lightMap,p.lightMapIntensity.value=m.lightMapIntensity,t(m.lightMap,p.lightMapTransform)),m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,p.aoMapTransform))}function a(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform))}function o(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function c(p,m,b,w){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*b,p.scale.value=w*.5,m.map&&(p.map.value=m.map,t(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function l(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function h(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function d(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function u(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,p.roughnessMapTransform)),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function f(p,m,b){p.ior.value=m.ior,m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===fn&&p.clearcoatNormalScale.value.negate())),m.dispersion>0&&(p.dispersion.value=m.dispersion),m.retroreflectivity>0&&(p.retroreflectivity.value=m.retroreflectivity),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=b.texture,p.transmissionSamplerSize.value.set(b.width,b.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,m){m.matcap&&(p.matcap.value=m.matcap)}function _(p,m){const b=e.get(m).light;p.referencePosition.value.setFromMatrixPosition(b.matrixWorld),p.nearDistance.value=b.shadow.camera.near,p.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function B_(r,e,t,n){let i={},s={},a=[];const o=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function c(x,y){const T=y.program;n.uniformBlockBinding(x,T)}function l(x,y){let T=i[x.id];T===void 0&&(p(x),T=h(x),i[x.id]=T,x.addEventListener("dispose",b));const C=y.program;n.updateUBOMapping(x,C);const v=e.render.frame;s[x.id]!==v&&(u(x),s[x.id]=v)}function h(x){const y=d();x.__bindingPointIndex=y;const T=r.createBuffer(),C=x.__size,v=x.usage;return r.bindBuffer(r.UNIFORM_BUFFER,T),r.bufferData(r.UNIFORM_BUFFER,C,v),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,y,T),T}function d(){for(let x=0;x<o;x++)if(a.indexOf(x)===-1)return a.push(x),x;return Oe("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(x){const y=i[x.id],T=x.uniforms,C=x.__cache;r.bindBuffer(r.UNIFORM_BUFFER,y);for(let v=0,R=T.length;v<R;v++){const D=T[v];if(Array.isArray(D))for(let U=0,H=D.length;U<H;U++)f(D[U],v,U,C);else f(D,v,0,C)}r.bindBuffer(r.UNIFORM_BUFFER,null)}function f(x,y,T,C){if(_(x,y,T,C)===!0){const v=x.__offset,R=x.value;if(Array.isArray(R)){let D=0;for(let U=0;U<R.length;U++){const H=R[U],B=m(H);g(H,x.__data,D),typeof H!="number"&&typeof H!="boolean"&&!H.isMatrix3&&!ArrayBuffer.isView(H)&&(D+=B.storage/Float32Array.BYTES_PER_ELEMENT)}}else g(R,x.__data,0);r.bufferSubData(r.UNIFORM_BUFFER,v,x.__data)}}function g(x,y,T){typeof x=="number"||typeof x=="boolean"?y[0]=x:x.isMatrix3?(y[0]=x.elements[0],y[1]=x.elements[1],y[2]=x.elements[2],y[3]=0,y[4]=x.elements[3],y[5]=x.elements[4],y[6]=x.elements[5],y[7]=0,y[8]=x.elements[6],y[9]=x.elements[7],y[10]=x.elements[8],y[11]=0):ArrayBuffer.isView(x)?y.set(new x.constructor(x.buffer,x.byteOffset,y.length)):x.toArray(y,T)}function _(x,y,T,C){const v=x.value,R=y+"_"+T;if(C[R]===void 0)return typeof v=="number"||typeof v=="boolean"?C[R]=v:ArrayBuffer.isView(v)?C[R]=v.slice():C[R]=v.clone(),!0;{const D=C[R];if(typeof v=="number"||typeof v=="boolean"){if(D!==v)return C[R]=v,!0}else{if(ArrayBuffer.isView(v))return!0;if(D.equals(v)===!1)return D.copy(v),!0}}return!1}function p(x){const y=x.uniforms;let T=0;const C=16;for(let R=0,D=y.length;R<D;R++){const U=Array.isArray(y[R])?y[R]:[y[R]];for(let H=0,B=U.length;H<B;H++){const F=U[H],V=Array.isArray(F.value)?F.value:[F.value];for(let te=0,J=V.length;te<J;te++){const ue=V[te],Y=m(ue),ce=T%C,he=ce%Y.boundary,Me=ce+he;T+=he,Me!==0&&C-Me<Y.storage&&(T+=C-Me),F.__data=new Float32Array(Y.storage/Float32Array.BYTES_PER_ELEMENT),F.__offset=T,T+=Y.storage}}}const v=T%C;return v>0&&(T+=C-v),x.__size=T,x.__cache={},this}function m(x){const y={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(y.boundary=4,y.storage=4):x.isVector2?(y.boundary=8,y.storage=8):x.isVector3||x.isColor?(y.boundary=16,y.storage=12):x.isVector4?(y.boundary=16,y.storage=16):x.isMatrix3?(y.boundary=48,y.storage=48):x.isMatrix4?(y.boundary=64,y.storage=64):x.isTexture?Ie("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(x)?(y.boundary=16,y.storage=x.byteLength):Ie("WebGLRenderer: Unsupported uniform value type.",x),y}function b(x){const y=x.target;y.removeEventListener("dispose",b);const T=a.indexOf(y.__bindingPointIndex);a.splice(T,1),r.deleteBuffer(i[y.id]),delete i[y.id],delete s[y.id]}function w(){for(const x in i)r.deleteBuffer(i[x]);a=[],i={},s={}}return{bind:c,update:l,dispose:w}}const G_=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Xn=null;function H_(){return Xn===null&&(Xn=new za(G_,16,16,rs,ii),Xn.name="DFG_LUT",Xn.minFilter=Vt,Xn.magFilter=Vt,Xn.wrapS=Zn,Xn.wrapT=Zn,Xn.generateMipmaps=!1,Xn.needsUpdate=!0),Xn}class V_{constructor(e={}){const{canvas:t=op(),context:n=null,depth:i=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:u=!1,outputBufferType:f=gn}=e;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=a;const _=f,p=new Set([nl,tl,el]),m=new Set([gn,ni,yr,Er,$c,Zc]),b=new Uint32Array(4),w=new Int32Array(4),x=new z;let y=null,T=null;const C=[],v=[];let R=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ti,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const D=this;let U=!1,H=null,B=null,F=null,V=null;this._outputColorSpace=Yt;let te=0,J=0,ue=null,Y=-1,ce=null;const he=new ft,Me=new ft;let Ae=null;const Je=new be(0);let je=0,Be=t.width,se=t.height,de=1,Te=null,ze=null;const ye=new ft(0,0,Be,se),qe=new ft(0,0,Be,se);let Lt=!1;const Ye=new dl;let it=!1,dt=!1;const $e=new Ve,bt=new z,kt=new ft,Zt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Mt=!1;function wt(){return ue===null?de:1}let G=n;function Kt(E,O){return t.getContext(E,O)}let at,L,M,W,$,ie,me,ge,ae,le,S,I,A,N,k,j,ee,P,ne,q,oe,fe,Z;try{const E={alpha:!0,depth:i,stencil:s,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${jc}`),t.addEventListener("webglcontextlost",De,!1),t.addEventListener("webglcontextrestored",Ne,!1),t.addEventListener("webglcontextcreationerror",xt,!1),G===null){const O="webgl2";if(G=Kt(O,E),G===null)throw Kt(O)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}xe()}catch(E){throw t.removeEventListener("webglcontextlost",De,!1),t.removeEventListener("webglcontextrestored",Ne,!1),t.removeEventListener("webglcontextcreationerror",xt,!1),Oe("WebGLRenderer: "+E.message),E}function xe(){at=new Hb(G),at.init(),oe=new D_(G,at),L=new Ib(G,at,e,oe),M=new P_(G,at),L.reversedDepthBuffer&&u&&M.buffers.depth.setReversed(!0),B=G.createFramebuffer(),F=G.createFramebuffer(),V=G.createFramebuffer(),W=new qb(G),$=new b_,ie=new I_(G,at,M,$,L,oe,W),me=new Gb(D),ge=new Km(G),fe=new Lb(G,ge),ae=new Vb(G,ge,W,fe),le=new Kb(G,ae,ge,fe,W),P=new Xb(G,L,ie),k=new Db($),S=new g_(D,me,at,L,fe,k),I=new z_(D,$),A=new __,N=new T_(at),ee=new Cb(D,me,M,le,g,c),j=new L_(D,le,L),Z=new B_(G,W,L,M),ne=new Pb(G,at,W),q=new Wb(G,at,W),W.programs=S.programs,D.capabilities=L,D.extensions=at,D.properties=$,D.renderLists=A,D.shadowMap=j,D.state=M,D.info=W}_!==gn&&(R=new Yb(_,t.width,t.height,o,i,s));const pe=new U_(D,G);this.xr=pe,this.getContext=function(){return G},this.getContextAttributes=function(){return G.getContextAttributes()},this.forceContextLoss=function(){const E=at.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=at.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return de},this.setPixelRatio=function(E){E!==void 0&&(de=E,this.setSize(Be,se,!1))},this.getSize=function(E){return E.set(Be,se)},this.setSize=function(E,O,Q=!0){if(pe.isPresenting){Ie("WebGLRenderer: Can't change size while VR device is presenting.");return}Be=E,se=O,t.width=Math.floor(E*de),t.height=Math.floor(O*de),Q===!0&&(t.style.width=E+"px",t.style.height=O+"px"),R!==null&&R.setSize(t.width,t.height),this.setViewport(0,0,E,O)},this.getDrawingBufferSize=function(E){return E.set(Be*de,se*de).floor()},this.setDrawingBufferSize=function(E,O,Q){Be=E,se=O,de=Q,t.width=Math.floor(E*Q),t.height=Math.floor(O*Q),this.setViewport(0,0,E,O)},this.setEffects=function(E){if(_===gn){Oe("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(E){for(let O=0;O<E.length;O++)if(E[O].isOutputPass===!0){Ie("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}R.setEffects(E||[])},this.getCurrentViewport=function(E){return E.copy(he)},this.getViewport=function(E){return E.copy(ye)},this.setViewport=function(E,O,Q,X){E.isVector4?ye.set(E.x,E.y,E.z,E.w):ye.set(E,O,Q,X),M.viewport(he.copy(ye).multiplyScalar(de).round())},this.getScissor=function(E){return E.copy(qe)},this.setScissor=function(E,O,Q,X){E.isVector4?qe.set(E.x,E.y,E.z,E.w):qe.set(E,O,Q,X),M.scissor(Me.copy(qe).multiplyScalar(de).round())},this.getScissorTest=function(){return Lt},this.setScissorTest=function(E){M.setScissorTest(Lt=E)},this.setOpaqueSort=function(E){Te=E},this.setTransparentSort=function(E){ze=E},this.getClearColor=function(E){return E.copy(ee.getClearColor())},this.setClearColor=function(){ee.setClearColor(...arguments)},this.getClearAlpha=function(){return ee.getClearAlpha()},this.setClearAlpha=function(){ee.setClearAlpha(...arguments)},this.clear=function(E=!0,O=!0,Q=!0){let X=0;if(E){let K=!1;if(ue!==null){const Se=ue.texture.format;K=p.has(Se)}if(K){const Se=ue.texture.type,we=m.has(Se),ve=ee.getClearColor(),Re=ee.getClearAlpha(),Pe=ve.r,Xe=ve.g,Qe=ve.b;we?(b[0]=Pe,b[1]=Xe,b[2]=Qe,b[3]=Re,G.clearBufferuiv(G.COLOR,0,b)):(w[0]=Pe,w[1]=Xe,w[2]=Qe,w[3]=Re,G.clearBufferiv(G.COLOR,0,w))}else X|=G.COLOR_BUFFER_BIT}O&&(X|=G.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),Q&&(X|=G.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),X!==0&&G.clear(X)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(E){E.setRenderer(this),H=E},this.dispose=function(){t.removeEventListener("webglcontextlost",De,!1),t.removeEventListener("webglcontextrestored",Ne,!1),t.removeEventListener("webglcontextcreationerror",xt,!1),ee.dispose(),A.dispose(),N.dispose(),$.dispose(),me.dispose(),le.dispose(),fe.dispose(),Z.dispose(),S.dispose(),pe.dispose(),pe.removeEventListener("sessionstart",Ys),pe.removeEventListener("sessionend",_n),vn.stop()};function De(E){E.preventDefault(),Ra("WebGLRenderer: Context Lost."),U=!0}function Ne(){Ra("WebGLRenderer: Context Restored."),U=!1;const E=W.autoReset,O=j.enabled,Q=j.autoUpdate,X=j.needsUpdate,K=j.type;xe(),W.autoReset=E,j.enabled=O,j.autoUpdate=Q,j.needsUpdate=X,j.type=K}function xt(E){Oe("WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function re(E){const O=E.target;O.removeEventListener("dispose",re),st(O)}function st(E){zt(E),$.remove(E)}function zt(E){const O=$.get(E).programs;O!==void 0&&(O.forEach(function(Q){S.releaseProgram(Q)}),E.isShaderMaterial&&S.releaseShaderCache(E))}this.renderBufferDirect=function(E,O,Q,X,K,Se){O===null&&(O=Zt);const we=K.isMesh&&K.matrixWorld.determinantAffine()<0,ve=Eu(E,O,Q,X,K);M.setMaterial(X,we);let Re=Q.index,Pe=1;if(X.wireframe===!0){if(Re=ae.getWireframeAttribute(Q),Re===void 0)return;Pe=2}const Xe=Q.drawRange,Qe=Q.attributes.position;let Ce=Xe.start*Pe,ot=(Xe.start+Xe.count)*Pe;Se!==null&&(Ce=Math.max(Ce,Se.start*Pe),ot=Math.min(ot,(Se.start+Se.count)*Pe)),Re!==null?(Ce=Math.max(Ce,0),ot=Math.min(ot,Re.count)):Qe!=null&&(Ce=Math.max(Ce,0),ot=Math.min(ot,Qe.count));const Ft=ot-Ce;if(Ft<0||Ft===1/0)return;fe.setup(K,X,ve,Q,Re);let St,gt=ne;if(Re!==null&&(St=ge.get(Re),gt=q,gt.setIndex(St)),K.isMesh)X.wireframe===!0?(M.setLineWidth(X.wireframeLinewidth*wt()),gt.setMode(G.LINES)):gt.setMode(G.TRIANGLES);else if(K.isLine){let Qt=X.linewidth;Qt===void 0&&(Qt=1),M.setLineWidth(Qt*wt()),K.isLineSegments?gt.setMode(G.LINES):K.isLineLoop?gt.setMode(G.LINE_LOOP):gt.setMode(G.LINE_STRIP)}else K.isPoints?gt.setMode(G.POINTS):K.isSprite&&gt.setMode(G.TRIANGLES);if(K.isBatchedMesh)if(at.get("WEBGL_multi_draw"))gt.renderMultiDraw(K._multiDrawStarts,K._multiDrawCounts,K._multiDrawCount);else{const Qt=K._multiDrawStarts,Ee=K._multiDrawCounts,on=K._multiDrawCount,rt=Re?ge.get(Re).bytesPerElement:1,Mn=$.get(X).currentProgram.getUniforms();for(let Wn=0;Wn<on;Wn++)Mn.setValue(G,"_gl_DrawID",Wn),gt.render(Qt[Wn]/rt,Ee[Wn])}else if(K.isInstancedMesh)gt.renderInstances(Ce,Ft,K.count);else if(Q.isInstancedBufferGeometry){const Qt=Q._maxInstanceCount!==void 0?Q._maxInstanceCount:1/0,Ee=Math.min(Q.instanceCount,Qt);gt.renderInstances(Ce,Ft,Ee)}else gt.render(Ce,Ft)};function At(E,O,Q,X){H!==null&&E.isNodeMaterial&&H.setObject(X,E),it===!0&&k.setState(E,Q,!1),E.transparent===!0&&E.side===rn&&E.forceSinglePass===!1?(E.side=fn,E.needsUpdate=!0,un(E,O,X),E.side=Gi,E.needsUpdate=!0,un(E,O,X),E.side=rn):un(E,O,X)}this.compile=function(E,O,Q=null){Q===null&&(Q=E),H!==null&&H.renderStart(E,O,Q),T=N.get(Q),T.init(O),v.push(T),Q.traverseVisible(function(K){K.isLight&&K.layers.test(O.layers)&&(T.pushLight(K),K.castShadow&&T.pushShadow(K))}),E!==Q&&E.traverseVisible(function(K){K.isLight&&K.layers.test(O.layers)&&(T.pushLight(K),K.castShadow&&T.pushShadow(K))}),T.setupLights(),H!==null&&H.updateLights(T.state.lightsArray),dt=this.localClippingEnabled,it=k.init(this.clippingPlanes,dt),it===!0&&k.setGlobalState(this.clippingPlanes,O),H!==null&&j.render(T.state.shadowsArray,Q,O);const X=new Set;return E.traverse(function(K){if(!(K.isMesh||K.isPoints||K.isLine||K.isSprite))return;const Se=K.material;if(Se)if(Array.isArray(Se))for(let we=0;we<Se.length;we++){const ve=Se[we];At(ve,Q,O,K),X.add(ve)}else At(Se,Q,O,K),X.add(Se)}),T=v.pop(),H!==null&&H.renderEnd(),X},this.compileAsync=function(E,O,Q=null){const X=this.compile(E,O,Q);return new Promise(K=>{function Se(){if(X.forEach(function(we){const Re=$.get(we).currentProgram;(Re===void 0||Re.isReady())&&X.delete(we)}),X.size===0){K(E);return}setTimeout(Se,10)}at.get("KHR_parallel_shader_compile")!==null?Se():setTimeout(Se,10)})};let Bt=null;function qi(E){Bt&&Bt(E)}function Ys(){vn.stop()}function _n(){vn.start()}const vn=new cu;vn.setAnimationLoop(qi),typeof self<"u"&&vn.setContext(self),this.setAnimationLoop=function(E){Bt=E,pe.setAnimationLoop(E),E===null?vn.stop():vn.start()},pe.addEventListener("sessionstart",Ys),pe.addEventListener("sessionend",_n),this.render=function(E,O){if(O!==void 0&&O.isCamera!==!0){Oe("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(U===!0)return;H!==null&&H.renderStart(E,O);const Q=pe.enabled===!0&&pe.isPresenting===!0,X=R!==null&&(ue===null||Q)&&R.begin(D,ue);if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),pe.enabled===!0&&pe.isPresenting===!0&&(R===null||R.isCompositing()===!1)&&(pe.cameraAutoUpdate===!0&&pe.updateCamera(O),O=pe.getCamera()),E.isScene===!0&&E.onBeforeRender(D,E,O,ue),T=N.get(E,v.length),T.init(O),T.state.textureUnits=ie.getTextureUnits(),v.push(T),$e.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),Ye.setFromProjectionMatrix($e,Qn,O.reversedDepth),dt=this.localClippingEnabled,it=k.init(this.clippingPlanes,dt),y=A.get(E,C.length),y.init(),C.push(y),pe.enabled===!0&&pe.isPresenting===!0){const we=D.xr.getDepthSensingMesh();we!==null&&Si(we,O,-1/0,D.sortObjects)}Si(E,O,0,D.sortObjects),y.finish(),H!==null&&H.updateLights(T.state.lightsArray),D.sortObjects===!0&&y.sort(Te,ze),Mt=pe.enabled===!1||pe.isPresenting===!1||pe.hasDepthSensing()===!1,Mt&&ee.addToRenderList(y,E),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),it===!0&&k.beginShadows();const K=T.state.shadowsArray;if(j.render(K,E,O),it===!0&&k.endShadows(),(X&&R.hasRenderPass())===!1){const we=y.opaque,ve=y.transmissive;if(T.setupLights(),O.isArrayCamera){const Re=O.cameras;if(ve.length>0)for(let Pe=0,Xe=Re.length;Pe<Xe;Pe++){const Qe=Re[Pe];Ki(we,ve,E,Qe)}Mt&&ee.render(E);for(let Pe=0,Xe=Re.length;Pe<Xe;Pe++){const Qe=Re[Pe];Xi(y,E,Qe,Qe.viewport)}}else ve.length>0&&Ki(we,ve,E,O),Mt&&ee.render(E),Xi(y,E,O)}ue!==null&&J===0&&(ie.updateMultisampleRenderTarget(ue),ie.updateRenderTargetMipmap(ue)),X&&R.end(D),E.isScene===!0&&E.onAfterRender(D,E,O),fe.resetDefaultState(),Y=-1,ce=null,v.pop(),v.length>0?(T=v[v.length-1],ie.setTextureUnits(T.state.textureUnits),it===!0&&k.setGlobalState(D.clippingPlanes,T.state.camera)):T=null,C.pop(),C.length>0?y=C[C.length-1]:y=null,H!==null&&H.renderEnd()};function Si(E,O,Q,X){if(E.visible===!1)return;if(E.layers.test(O.layers)){if(E.isGroup)Q=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(O);else if(E.isLightProbeGrid)T.pushLightProbeGrid(E);else if(E.isLight)T.pushLight(E),E.castShadow&&T.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||E.intersectsFrustum(Ye)){X&&kt.setFromMatrixPosition(E.matrixWorld).applyMatrix4($e);const we=le.update(E),ve=E.material;ve.visible&&y.push(E,we,ve,Q,kt.z,null,O)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||E.intersectsFrustum(Ye))){const we=le.update(E),ve=E.material;if(X&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),kt.copy(E.boundingSphere.center)):(we.boundingSphere===null&&we.computeBoundingSphere(),kt.copy(we.boundingSphere.center)),kt.applyMatrix4(E.matrixWorld).applyMatrix4($e)),Array.isArray(ve)){const Re=we.groups;for(let Pe=0,Xe=Re.length;Pe<Xe;Pe++){const Qe=Re[Pe],Ce=ve[Qe.materialIndex];Ce&&Ce.visible&&y.push(E,we,Ce,Q,kt.z,Qe,O)}}else ve.visible&&y.push(E,we,ve,Q,kt.z,null,O)}}const Se=E.children;for(let we=0,ve=Se.length;we<ve;we++)Si(Se[we],O,Q,X)}function Xi(E,O,Q,X){const{opaque:K,transmissive:Se,transparent:we}=E;T.setupLightsView(Q),it===!0&&k.setGlobalState(D.clippingPlanes,Q),X&&M.viewport(he.copy(X)),K.length>0&&as(K,O,Q),Se.length>0&&as(Se,O,Q),we.length>0&&as(we,O,Q),M.buffers.depth.setTest(!0),M.buffers.depth.setMask(!0),M.buffers.color.setMask(!0),M.setPolygonOffset(!1)}function Ki(E,O,Q,X){if((Q.isScene===!0?Q.overrideMaterial:null)!==null)return;if(T.state.transmissionRenderTarget[X.id]===void 0){const Ce=at.has("EXT_color_buffer_half_float")||at.has("EXT_color_buffer_float");T.state.transmissionRenderTarget[X.id]=new zn(1,1,{generateMipmaps:!0,type:Ce?ii:gn,minFilter:gi,samples:Math.max(4,L.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:et.workingColorSpace})}const Se=T.state.transmissionRenderTarget[X.id],we=X.viewport||he;Se.setSize(we.z*D.transmissionResolutionScale,we.w*D.transmissionResolutionScale);const ve=D.getRenderTarget(),Re=D.getActiveCubeFace(),Pe=D.getActiveMipmapLevel();D.setRenderTarget(Se),D.getClearColor(Je),je=D.getClearAlpha(),je<1&&D.setClearColor(16777215,.5),D.clear(),Mt&&ee.render(Q);const Xe=D.toneMapping;D.toneMapping=ti;const Qe=X.viewport;if(X.viewport!==void 0&&(X.viewport=void 0),T.setupLightsView(X),it===!0&&k.setGlobalState(D.clippingPlanes,X),as(E,Q,X),ie.updateMultisampleRenderTarget(Se),ie.updateRenderTargetMipmap(Se),at.has("WEBGL_multisampled_render_to_texture")===!1){let Ce=!1;for(let ot=0,Ft=O.length;ot<Ft;ot++){const St=O[ot],{object:gt,geometry:Qt,material:Ee,group:on}=St;if(Ee.side===rn&&gt.layers.test(X.layers)){const rt=Ee.side;Ee.side=fn,Ee.needsUpdate=!0,Js(gt,Q,X,Qt,Ee,on),Ee.side=rt,Ee.needsUpdate=!0,Ce=!0}}Ce===!0&&(ie.updateMultisampleRenderTarget(Se),ie.updateRenderTargetMipmap(Se))}D.setRenderTarget(ve,Re,Pe),D.setClearColor(Je,je),Qe!==void 0&&(X.viewport=Qe),D.toneMapping=Xe}function as(E,O,Q){const X=O.isScene===!0?O.overrideMaterial:null;for(let K=0,Se=E.length;K<Se;K++){const we=E[K],{object:ve,geometry:Re,group:Pe}=we;let Xe=we.material;Xe.allowOverride===!0&&X!==null&&(Xe=X),ve.layers.test(Q.layers)&&Js(ve,O,Q,Re,Xe,Pe)}}function Js(E,O,Q,X,K,Se){H!==null&&K.isNodeMaterial&&H.setObject(E,K),E.onBeforeRender(D,O,Q,X,K,Se),E.modelViewMatrix.multiplyMatrices(Q.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),K.onBeforeRender(D,O,Q,X,E,Se),K.transparent===!0&&K.side===rn&&K.forceSinglePass===!1?(K.side=fn,K.needsUpdate=!0,D.renderBufferDirect(Q,O,X,K,E,Se),K.side=Gi,K.needsUpdate=!0,D.renderBufferDirect(Q,O,X,K,E,Se),K.side=rn):D.renderBufferDirect(Q,O,X,K,E,Se),E.onAfterRender(D,O,Q,X,K,Se)}function un(E,O,Q){O.isScene!==!0&&(O=Zt);const X=$.get(E),K=T.state.lights,Se=T.state.shadowsArray,we=K.state.version,ve=S.getParameters(E,K.state,Se,O,Q,T.state.lightProbeGridArray),Re=S.getProgramCacheKey(ve);let Pe=X.programs;X.environment=E.isMeshStandardMaterial||E.isMeshLambertMaterial||E.isMeshPhongMaterial?O.environment:null,X.fog=O.fog;const Xe=E.isMeshStandardMaterial||E.isMeshLambertMaterial&&!E.envMap||E.isMeshPhongMaterial&&!E.envMap;X.envMap=me.get(E.envMap||X.environment,Xe),X.envMapRotation=X.environment!==null&&E.envMap===null?O.environmentRotation:E.envMapRotation,Pe===void 0&&(E.addEventListener("dispose",re),Pe=new Map,X.programs=Pe);let Qe=Pe.get(Re);if(Qe!==void 0){if(X.currentProgram===Qe&&X.lightsStateVersion===we)return El(E,ve),Qe}else ve.uniforms=S.getUniforms(E),H!==null&&E.isNodeMaterial&&H.build(E,Q,ve),E.onBeforeCompile(ve,D),Qe=S.acquireProgram(ve,Re),Pe.set(Re,Qe),X.uniforms=ve.uniforms;const Ce=X.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Ce.clippingPlanes=k.uniform),El(E,ve),X.needsLights=wu(E),X.lightsStateVersion=we,X.needsLights&&(Ce.ambientLightColor.value=K.state.ambient,Ce.lightProbe.value=K.state.probe,Ce.sunLights.value=K.state.sun,Ce.sunLightShadows.value=K.state.sunShadow,Ce.directionalLights.value=K.state.directional,Ce.directionalLightShadows.value=K.state.directionalShadow,Ce.spotLights.value=K.state.spot,Ce.spotLightShadows.value=K.state.spotShadow,Ce.rectAreaLights.value=K.state.rectArea,Ce.ltc_1.value=K.state.rectAreaLTC1,Ce.ltc_2.value=K.state.rectAreaLTC2,Ce.pointLights.value=K.state.point,Ce.pointLightShadows.value=K.state.pointShadow,Ce.hemisphereLights.value=K.state.hemi,Ce.sunShadowMatrix.value=K.state.sunShadowMatrix,Ce.sunShadowCascade.value=K.state.sunShadowCascade,Ce.directionalShadowMatrix.value=K.state.directionalShadowMatrix,Ce.spotLightMatrix.value=K.state.spotLightMatrix,Ce.spotLightMap.value=K.state.spotLightMap,Ce.pointShadowMatrix.value=K.state.pointShadowMatrix),X.lightProbeGrid=T.state.lightProbeGridArray.length>0,X.currentProgram=Qe,X.uniformsList=null,Qe}function yl(E){if(E.uniformsList===null){const O=E.currentProgram.getUniforms();E.uniformsList=ba.seqWithValue(O.seq,E.uniforms)}return E.uniformsList}function El(E,O){const Q=$.get(E);Q.outputColorSpace=O.outputColorSpace,Q.batching=O.batching,Q.batchingColor=O.batchingColor,Q.instancing=O.instancing,Q.instancingColor=O.instancingColor,Q.instancingMorph=O.instancingMorph,Q.skinning=O.skinning,Q.morphTargets=O.morphTargets,Q.morphNormals=O.morphNormals,Q.morphColors=O.morphColors,Q.morphTargetsCount=O.morphTargetsCount,Q.numClippingPlanes=O.numClippingPlanes,Q.numIntersection=O.numClipIntersection,Q.vertexAlphas=O.vertexAlphas,Q.vertexTangents=O.vertexTangents,Q.toneMapping=O.toneMapping}function yu(E,O){if(E.length===0)return null;if(E.length===1)return E[0].texture!==null?E[0]:null;x.setFromMatrixPosition(O.matrixWorld);for(let Q=0,X=E.length;Q<X;Q++){const K=E[Q];if(K.texture!==null&&K.boundingBox.containsPoint(x))return K}return null}function Eu(E,O,Q,X,K){O.isScene!==!0&&(O=Zt),ie.resetTextureUnits();const Se=O.fog,we=X.isMeshStandardMaterial||X.isMeshLambertMaterial||X.isMeshPhongMaterial?O.environment:null,ve=ue===null?D.outputColorSpace:ue.isXRRenderTarget===!0?ue.texture.colorSpace:et.workingColorSpace,Re=X.isMeshStandardMaterial||X.isMeshLambertMaterial&&!X.envMap||X.isMeshPhongMaterial&&!X.envMap,Pe=me.get(X.envMap||we,Re),Xe=X.vertexColors===!0&&!!Q.attributes.color&&Q.attributes.color.itemSize===4,Qe=!!Q.attributes.tangent&&(!!X.normalMap||X.anisotropy>0),Ce=!!Q.morphAttributes.position,ot=!!Q.morphAttributes.normal,Ft=!!Q.morphAttributes.color;let St=ti;X.toneMapped&&(ue===null||ue.isXRRenderTarget===!0)&&(St=D.toneMapping);const gt=Q.morphAttributes.position||Q.morphAttributes.normal||Q.morphAttributes.color,Qt=gt!==void 0?gt.length:0,Ee=$.get(X),on=T.state.lights;if(it===!0&&(dt===!0||E!==ce)){const _t=E===ce&&X.id===Y;k.setState(X,E,_t)}let rt=!1;X.version===Ee.__version?(Ee.needsLights&&Ee.lightsStateVersion!==on.state.version||Ee.outputColorSpace!==ve||K.isBatchedMesh&&Ee.batching===!1||!K.isBatchedMesh&&Ee.batching===!0||K.isBatchedMesh&&Ee.batchingColor===!0&&K._colorsTexture===null||K.isBatchedMesh&&Ee.batchingColor===!1&&K._colorsTexture!==null||K.isInstancedMesh&&Ee.instancing===!1||!K.isInstancedMesh&&Ee.instancing===!0||K.isSkinnedMesh&&Ee.skinning===!1||!K.isSkinnedMesh&&Ee.skinning===!0||K.isInstancedMesh&&Ee.instancingColor===!0&&K.instanceColor===null||K.isInstancedMesh&&Ee.instancingColor===!1&&K.instanceColor!==null||K.isInstancedMesh&&Ee.instancingMorph===!0&&K.morphTexture===null||K.isInstancedMesh&&Ee.instancingMorph===!1&&K.morphTexture!==null||Ee.envMap!==Pe||X.fog===!0&&Ee.fog!==Se||Ee.numClippingPlanes!==void 0&&(Ee.numClippingPlanes!==k.numPlanes||Ee.numIntersection!==k.numIntersection)||Ee.vertexAlphas!==Xe||Ee.vertexTangents!==Qe||Ee.morphTargets!==Ce||Ee.morphNormals!==ot||Ee.morphColors!==Ft||Ee.toneMapping!==St||Ee.morphTargetsCount!==Qt||!!Ee.lightProbeGrid!=T.state.lightProbeGridArray.length>0)&&(rt=!0):(rt=!0,Ee.__version=X.version);let Mn=Ee.currentProgram;rt===!0&&(Mn=un(X,O,K),H&&X.isNodeMaterial&&H.onUpdateProgram(X,Mn,Ee));let Wn=!1,yi=!1,os=!1;const ut=Mn.getUniforms(),Pt=Ee.uniforms;if(M.useProgram(Mn.program)&&(Wn=!0,yi=!0,os=!0),X.id!==Y&&(Y=X.id,yi=!0),Ee.needsLights){const _t=yu(T.state.lightProbeGridArray,K);Ee.lightProbeGrid!==_t&&(Ee.lightProbeGrid=_t,yi=!0)}if(Wn||ce!==E){M.buffers.depth.getReversed()&&E.reversedDepth!==!0&&(E._reversedDepth=!0,E.updateProjectionMatrix()),ut.setValue(G,"projectionMatrix",E.projectionMatrix),ut.setValue(G,"viewMatrix",E.matrixWorldInverse);const Ti=ut.map.cameraPosition;Ti!==void 0&&Ti.setValue(G,bt.setFromMatrixPosition(E.matrixWorld)),L.logarithmicDepthBuffer&&ut.setValue(G,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial)&&ut.setValue(G,"isOrthographic",E.isOrthographicCamera===!0),ce!==E&&(ce=E,yi=!0,os=!0)}if(Ee.needsLights&&(on.state.sunShadowMap.length>0&&ut.setValue(G,"sunShadowMap",on.state.sunShadowMap,ie),on.state.directionalShadowMap.length>0&&ut.setValue(G,"directionalShadowMap",on.state.directionalShadowMap,ie),on.state.spotShadowMap.length>0&&ut.setValue(G,"spotShadowMap",on.state.spotShadowMap,ie),on.state.pointShadowMap.length>0&&ut.setValue(G,"pointShadowMap",on.state.pointShadowMap,ie)),K.isSkinnedMesh){ut.setOptional(G,K,"bindMatrix"),ut.setOptional(G,K,"bindMatrixInverse");const _t=K.skeleton;_t&&(_t.boneTexture===null&&_t.computeBoneTexture(),ut.setValue(G,"boneTexture",_t.boneTexture,ie))}K.isBatchedMesh&&(ut.setOptional(G,K,"batchingTexture"),ut.setValue(G,"batchingTexture",K._matricesTexture,ie),ut.setOptional(G,K,"batchingIdTexture"),ut.setValue(G,"batchingIdTexture",K._indirectTexture,ie),ut.setOptional(G,K,"batchingColorTexture"),K._colorsTexture!==null&&ut.setValue(G,"batchingColorTexture",K._colorsTexture,ie));const Ei=Q.morphAttributes;if((Ei.position!==void 0||Ei.normal!==void 0||Ei.color!==void 0)&&P.update(K,Q,Mn),(yi||Ee.receiveShadow!==K.receiveShadow)&&(Ee.receiveShadow=K.receiveShadow,ut.setValue(G,"receiveShadow",K.receiveShadow)),(X.isMeshStandardMaterial||X.isMeshLambertMaterial||X.isMeshPhongMaterial)&&X.envMap===null&&O.environment!==null&&(Pt.envMapIntensity.value=O.environmentIntensity),Pt.dfgLUT!==void 0&&(Pt.dfgLUT.value=H_()),yi){if(ut.setValue(G,"toneMappingExposure",D.toneMappingExposure),Ee.needsLights&&Tu(Pt,os),Se&&X.fog===!0&&I.refreshFogUniforms(Pt,Se),I.refreshMaterialUniforms(Pt,X,de,se,T.state.transmissionRenderTarget[E.id]),Ee.needsLights&&Ee.lightProbeGrid){const _t=Ee.lightProbeGrid;Pt.probesSH.value=_t.texture,Pt.probesMin.value.copy(_t.boundingBox.min),Pt.probesMax.value.copy(_t.boundingBox.max),Pt.probesResolution.value.copy(_t.resolution)}ba.upload(G,yl(Ee),Pt,ie)}if(X.isShaderMaterial&&X.uniformsNeedUpdate===!0&&(ba.upload(G,yl(Ee),Pt,ie),X.uniformsNeedUpdate=!1),X.isSpriteMaterial&&ut.setValue(G,"center",K.center),ut.setValue(G,"modelViewMatrix",K.modelViewMatrix),ut.setValue(G,"normalMatrix",K.normalMatrix),ut.setValue(G,"modelMatrix",K.matrixWorld),X.uniformsGroups!==void 0){const _t=X.uniformsGroups;for(let Ti=0,cs=_t.length;Ti<cs;Ti++){const wl=_t[Ti];Z.update(wl,Mn),Z.bind(wl,Mn)}}return Mn}function Tu(E,O){E.ambientLightColor.needsUpdate=O,E.lightProbe.needsUpdate=O,E.sunLights.needsUpdate=O,E.sunLightShadows.needsUpdate=O,E.directionalLights.needsUpdate=O,E.directionalLightShadows.needsUpdate=O,E.pointLights.needsUpdate=O,E.pointLightShadows.needsUpdate=O,E.spotLights.needsUpdate=O,E.spotLightShadows.needsUpdate=O,E.rectAreaLights.needsUpdate=O,E.hemisphereLights.needsUpdate=O}function wu(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return te},this.getActiveMipmapLevel=function(){return J},this.getRenderTarget=function(){return ue},this.setRenderTargetTextures=function(E,O,Q){const X=$.get(E);X.__autoAllocateDepthBuffer=E.resolveDepthBuffer===!1,X.__autoAllocateDepthBuffer===!1&&(X.__useRenderToTexture=!1),$.get(E.texture).__webglTexture=O,$.get(E.depthTexture).__webglTexture=X.__autoAllocateDepthBuffer?void 0:Q,X.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(E,O){const Q=$.get(E);Q.__webglFramebuffer=O,Q.__useDefaultFramebuffer=O===void 0},this.setRenderTarget=function(E,O=0,Q=0){ue=E,te=O,J=Q;let X=null,K=!1,Se=!1;if(E){const ve=$.get(E);if(ve.__useDefaultFramebuffer!==void 0){M.bindFramebuffer(G.FRAMEBUFFER,ve.__webglFramebuffer),he.copy(E.viewport),Me.copy(E.scissor),Ae=E.scissorTest,M.viewport(he),M.scissor(Me),M.setScissorTest(Ae),Y=-1;return}else if(ve.__webglFramebuffer===void 0)ie.setupRenderTarget(E);else if(ve.__hasExternalTextures)ie.rebindTextures(E,$.get(E.texture).__webglTexture,$.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){const Xe=E.depthTexture;if(ve.__boundDepthTexture!==Xe){if(Xe!==null&&$.has(Xe)&&(E.width!==Xe.image.width||E.height!==Xe.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");ie.setupDepthRenderbuffer(E)}}const Re=E.texture;(Re.isData3DTexture||Re.isDataArrayTexture||Re.isCompressedArrayTexture)&&(Se=!0);const Pe=$.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Pe[O])?X=Pe[O][Q]:X=Pe[O],K=!0):E.samples>0&&ie.useMultisampledRTT(E)===!1?X=$.get(E).__webglMultisampledFramebuffer:Array.isArray(Pe)?X=Pe[Q]:X=Pe,he.copy(E.viewport),Me.copy(E.scissor),Ae=E.scissorTest}else he.copy(ye).multiplyScalar(de).floor(),Me.copy(qe).multiplyScalar(de).floor(),Ae=Lt;if(Q!==0&&(X=B),M.bindFramebuffer(G.FRAMEBUFFER,X)&&M.drawBuffers(E,X),M.viewport(he),M.scissor(Me),M.setScissorTest(Ae),K){const ve=$.get(E.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_CUBE_MAP_POSITIVE_X+O,ve.__webglTexture,Q)}else if(Se){const ve=O;for(let Re=0;Re<E.textures.length;Re++){const Pe=$.get(E.textures[Re]);G.framebufferTextureLayer(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0+Re,Pe.__webglTexture,Q,ve)}}else if(E!==null&&Q!==0){const ve=$.get(E.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,ve.__webglTexture,Q)}Y=-1};function Tl(E){const O=$.get(E);return(O.__readFormat!==E.format||O.__readType!==E.type)&&(O.__readFormat=E.format,O.__readType=E.type,O.__formatReadable=L.textureFormatReadable(E.format),O.__typeReadable=L.textureTypeReadable(E.type)),O}this.readRenderTargetPixels=function(E,O,Q,X,K,Se,we,ve=0){if(!(E&&E.isWebGLRenderTarget)){Oe("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Re=$.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&we!==void 0&&(Re=Re[we]),Re){M.bindFramebuffer(G.FRAMEBUFFER,Re);try{const Pe=E.textures[ve],Xe=Pe.format,Qe=Pe.type;E.textures.length>1&&G.readBuffer(G.COLOR_ATTACHMENT0+ve);const Ce=Tl(Pe);if(Ce.__formatReadable===!1){Oe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Ce.__typeReadable===!1){Oe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=E.width-X&&Q>=0&&Q<=E.height-K&&G.readPixels(O,Q,X,K,oe.convert(Xe),oe.convert(Qe),Se)}finally{const Pe=ue!==null?$.get(ue).__webglFramebuffer:null;M.bindFramebuffer(G.FRAMEBUFFER,Pe)}}},this.readRenderTargetPixelsAsync=async function(E,O,Q,X,K,Se,we,ve=0){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Re=$.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&we!==void 0&&(Re=Re[we]),Re)if(O>=0&&O<=E.width-X&&Q>=0&&Q<=E.height-K){M.bindFramebuffer(G.FRAMEBUFFER,Re);const Pe=E.textures[ve],Xe=Pe.format,Qe=Pe.type;E.textures.length>1&&G.readBuffer(G.COLOR_ATTACHMENT0+ve);const Ce=Tl(Pe);if(Ce.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Ce.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ot=G.createBuffer();G.bindBuffer(G.PIXEL_PACK_BUFFER,ot),G.bufferData(G.PIXEL_PACK_BUFFER,Se.byteLength,G.STREAM_READ),G.readPixels(O,Q,X,K,oe.convert(Xe),oe.convert(Qe),0),G.bindBuffer(G.PIXEL_PACK_BUFFER,null);const Ft=ue!==null?$.get(ue).__webglFramebuffer:null;M.bindFramebuffer(G.FRAMEBUFFER,Ft);const St=G.fenceSync(G.SYNC_GPU_COMMANDS_COMPLETE,0);return G.flush(),await cp(G,St,4),G.bindBuffer(G.PIXEL_PACK_BUFFER,ot),G.getBufferSubData(G.PIXEL_PACK_BUFFER,0,Se),G.bindBuffer(G.PIXEL_PACK_BUFFER,null),G.deleteBuffer(ot),G.deleteSync(St),Se}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(E,O=null,Q=0){const X=Math.pow(2,-Q),K=Math.floor(E.image.width*X),Se=Math.floor(E.image.height*X),we=O!==null?O.x:0,ve=O!==null?O.y:0;ie.setTexture2D(E,0),G.copyTexSubImage2D(G.TEXTURE_2D,Q,0,0,we,ve,K,Se),M.unbindTexture()},this.copyTextureToTexture=function(E,O,Q=null,X=null,K=0,Se=0){let we,ve,Re,Pe,Xe,Qe,Ce,ot,Ft;const St=E.isCompressedTexture?E.mipmaps[Se]:E.image;if(Q!==null)we=Q.max.x-Q.min.x,ve=Q.max.y-Q.min.y,Re=Q.isBox3?Q.max.z-Q.min.z:1,Pe=Q.min.x,Xe=Q.min.y,Qe=Q.isBox3?Q.min.z:0;else{const Pt=Math.pow(2,-K);we=Math.floor(St.width*Pt),ve=Math.floor(St.height*Pt),E.isDataArrayTexture?Re=St.depth:E.isData3DTexture?Re=Math.floor(St.depth*Pt):Re=1,Pe=0,Xe=0,Qe=0}X!==null?(Ce=X.x,ot=X.y,Ft=X.z):(Ce=0,ot=0,Ft=0);const gt=oe.convert(O.format),Qt=oe.convert(O.type);let Ee;O.isData3DTexture?(ie.setTexture3D(O,0),Ee=G.TEXTURE_3D):O.isDataArrayTexture||O.isCompressedArrayTexture?(ie.setTexture2DArray(O,0),Ee=G.TEXTURE_2D_ARRAY):(ie.setTexture2D(O,0),Ee=G.TEXTURE_2D),M.activeTexture(G.TEXTURE0),M.pixelStorei(G.UNPACK_FLIP_Y_WEBGL,O.flipY),M.pixelStorei(G.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),M.pixelStorei(G.UNPACK_ALIGNMENT,O.unpackAlignment);const on=M.getParameter(G.UNPACK_ROW_LENGTH),rt=M.getParameter(G.UNPACK_IMAGE_HEIGHT),Mn=M.getParameter(G.UNPACK_SKIP_PIXELS),Wn=M.getParameter(G.UNPACK_SKIP_ROWS),yi=M.getParameter(G.UNPACK_SKIP_IMAGES);M.pixelStorei(G.UNPACK_ROW_LENGTH,St.width),M.pixelStorei(G.UNPACK_IMAGE_HEIGHT,St.height),M.pixelStorei(G.UNPACK_SKIP_PIXELS,Pe),M.pixelStorei(G.UNPACK_SKIP_ROWS,Xe),M.pixelStorei(G.UNPACK_SKIP_IMAGES,Qe);const os=E.isDataArrayTexture||E.isData3DTexture,ut=O.isDataArrayTexture||O.isData3DTexture;if(E.isDepthTexture){const Pt=$.get(E),Ei=$.get(O),_t=$.get(Pt.__renderTarget),Ti=$.get(Ei.__renderTarget);M.bindFramebuffer(G.READ_FRAMEBUFFER,_t.__webglFramebuffer),M.bindFramebuffer(G.DRAW_FRAMEBUFFER,Ti.__webglFramebuffer);for(let cs=0;cs<Re;cs++)os&&(G.framebufferTextureLayer(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,$.get(E).__webglTexture,K,Qe+cs),G.framebufferTextureLayer(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,$.get(O).__webglTexture,Se,Ft+cs)),G.blitFramebuffer(Pe,Xe,we,ve,Ce,ot,we,ve,G.DEPTH_BUFFER_BIT,G.NEAREST);M.bindFramebuffer(G.READ_FRAMEBUFFER,null),M.bindFramebuffer(G.DRAW_FRAMEBUFFER,null)}else if(K!==0||E.isRenderTargetTexture||$.has(E)){const Pt=$.get(E),Ei=$.get(O);M.bindFramebuffer(G.READ_FRAMEBUFFER,F),M.bindFramebuffer(G.DRAW_FRAMEBUFFER,V);for(let _t=0;_t<Re;_t++)os?G.framebufferTextureLayer(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,Pt.__webglTexture,K,Qe+_t):G.framebufferTexture2D(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,Pt.__webglTexture,K),ut?G.framebufferTextureLayer(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,Ei.__webglTexture,Se,Ft+_t):G.framebufferTexture2D(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,Ei.__webglTexture,Se),K!==0?G.blitFramebuffer(Pe,Xe,we,ve,Ce,ot,we,ve,G.COLOR_BUFFER_BIT,G.NEAREST):ut?G.copyTexSubImage3D(Ee,Se,Ce,ot,Ft+_t,Pe,Xe,we,ve):G.copyTexSubImage2D(Ee,Se,Ce,ot,Pe,Xe,we,ve);M.bindFramebuffer(G.READ_FRAMEBUFFER,null),M.bindFramebuffer(G.DRAW_FRAMEBUFFER,null)}else ut?E.isDataTexture||E.isData3DTexture?G.texSubImage3D(Ee,Se,Ce,ot,Ft,we,ve,Re,gt,Qt,St.data):O.isCompressedArrayTexture?G.compressedTexSubImage3D(Ee,Se,Ce,ot,Ft,we,ve,Re,gt,St.data):G.texSubImage3D(Ee,Se,Ce,ot,Ft,we,ve,Re,gt,Qt,St):E.isDataTexture?G.texSubImage2D(G.TEXTURE_2D,Se,Ce,ot,we,ve,gt,Qt,St.data):E.isCompressedTexture?G.compressedTexSubImage2D(G.TEXTURE_2D,Se,Ce,ot,St.width,St.height,gt,St.data):G.texSubImage2D(G.TEXTURE_2D,Se,Ce,ot,we,ve,gt,Qt,St);M.pixelStorei(G.UNPACK_ROW_LENGTH,on),M.pixelStorei(G.UNPACK_IMAGE_HEIGHT,rt),M.pixelStorei(G.UNPACK_SKIP_PIXELS,Mn),M.pixelStorei(G.UNPACK_SKIP_ROWS,Wn),M.pixelStorei(G.UNPACK_SKIP_IMAGES,yi),Se===0&&O.generateMipmaps&&G.generateMipmap(Ee),M.unbindTexture()},this.initRenderTarget=function(E){$.get(E).__webglFramebuffer===void 0&&ie.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?ie.setTextureCube(E,0):E.isData3DTexture?ie.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?ie.setTexture2DArray(E,0):ie.setTexture2D(E,0),M.unbindTexture()},this.resetState=function(){te=0,J=0,ue=null,M.reset(),fe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Qn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=et._getDrawingBufferColorSpace(e),t.unpackColorSpace=et._getUnpackColorSpace()}}function W_(r,e=!1){const t=r[0].index!==null,n=new Set(Object.keys(r[0].attributes)),i=new Set(Object.keys(r[0].morphAttributes)),s={},a={},o=r[0].morphTargetsRelative,c=new Ct;let l=0;for(let h=0;h<r.length;++h){const d=r[h];let u=0;if(t!==(d.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const f in d.attributes){if(!n.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;s[f]===void 0&&(s[f]=[]),s[f].push(d.attributes[f]),u++}if(u!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(o!==d.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const f in d.morphAttributes){if(!i.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;a[f]===void 0&&(a[f]=[]),a[f].push(d.morphAttributes[f])}if(e){let f;if(t)f=d.index.count;else if(d.attributes.position!==void 0)f=d.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,f,h),l+=f}}if(t){let h=0;const d=[];for(let u=0;u<r.length;++u){const f=r[u].index;for(let g=0;g<f.count;++g)d.push(f.getX(g)+h);h+=r[u].attributes.position.count}c.setIndex(d)}for(const h in s){const d=Zh(s[h]);if(!d)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;c.setAttribute(h,d)}for(const h in a){const d=a[h][0].length;if(d!==0){c.morphAttributes=c.morphAttributes||{},c.morphAttributes[h]=[];for(let u=0;u<d;++u){const f=[];for(let _=0;_<a[h].length;++_)f.push(a[h][_][u]);const g=Zh(f);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;c.morphAttributes[h].push(g)}}}return c}function Zh(r){let e,t,n,i=-1,s=0;for(let l=0;l<r.length;++l){const h=r[l];if(e===void 0&&(e=h.array.constructor),e!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=h.itemSize),t!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(i===-1&&(i=h.gpuType),i!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;s+=h.count*t}const a=new e(s),o=new Rt(a,t,n);let c=0;for(let l=0;l<r.length;++l){const h=r[l];if(h.isInterleavedBufferAttribute){const d=c/t;for(let u=0,f=h.count;u<f;u++)for(let g=0;g<t;g++){const _=h.getComponent(u,g);o.setComponent(u+d,g,_)}}else a.set(h.array,c);c+=h.count*t}return i!==void 0&&(o.gpuType=i),o}function Qh(r,e){if(e===Yf)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),r;if(e===Pc||e===Gd){let t=r.getIndex();if(t===null){const s=[],a=r.getAttribute("position");if(a!==void 0){for(let o=0;o<a.count;o++)s.push(o);r.setIndex(s),t=r.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),r}const n=t.count-2,i=[];if(e===Pc)for(let s=1;s<=n;s++)i.push(t.getX(0)),i.push(t.getX(s)),i.push(t.getX(s+1));else for(let s=0;s<n;s++)s%2===0?(i.push(t.getX(s)),i.push(t.getX(s+1)),i.push(t.getX(s+2))):(i.push(t.getX(s+2)),i.push(t.getX(s+1)),i.push(t.getX(s)));return i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles."),r.setIndex(i),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),r}function gu(r){const e=new Map,t=new Map,n=r.clone();return bu(r,n,function(i,s){e.set(s,i),t.set(i,s)}),n.traverse(function(i){if(!i.isSkinnedMesh)return;const s=i,a=e.get(i),o=a.skeleton.bones;s.skeleton=a.skeleton.clone(),s.bindMatrix.copy(a.bindMatrix),s.skeleton.bones=o.map(function(c){return t.get(c)}),s.bind(s.skeleton,s.bindMatrix)}),n}function bu(r,e,t){t(r,e);for(let n=0;n<r.children.length;n++)bu(r.children[n],e.children[n],t)}class q_ extends Ks{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new J_(t)}),this.register(function(t){return new $_(t)}),this.register(function(t){return new av(t)}),this.register(function(t){return new ov(t)}),this.register(function(t){return new cv(t)}),this.register(function(t){return new Q_(t)}),this.register(function(t){return new ev(t)}),this.register(function(t){return new tv(t)}),this.register(function(t){return new nv(t)}),this.register(function(t){return new Y_(t)}),this.register(function(t){return new iv(t)}),this.register(function(t){return new Z_(t)}),this.register(function(t){return new rv(t)}),this.register(function(t){return new sv(t)}),this.register(function(t){return new K_(t)}),this.register(function(t){return new ed(t,Ze.EXT_MESHOPT_COMPRESSION)}),this.register(function(t){return new ed(t,Ze.KHR_MESHOPT_COMPRESSION)}),this.register(function(t){return new lv(t)})}load(e,t,n,i){const s=this;let a;if(this.resourcePath!=="")a=this.resourcePath;else if(this.path!==""){const l=vr.extractUrlBase(e);a=vr.resolveURL(l,this.path)}else a=vr.extractUrlBase(e);this.manager.itemStart(e);const o=function(l){i?i(l):console.error(l),s.manager.itemError(e),s.manager.itemEnd(e)},c=new su(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(l){try{s.parse(l,a,function(h){t(h),s.manager.itemEnd(e)},o)}catch(h){o(h)}},n,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let s;const a={},o={},c=new TextDecoder;if(typeof e=="string")s=JSON.parse(e);else if(e instanceof ArrayBuffer)if(c.decode(new Uint8Array(e,0,4))===xu){try{a[Ze.KHR_BINARY_GLTF]=new hv(e)}catch(d){i&&i(d);return}s=JSON.parse(a[Ze.KHR_BINARY_GLTF].content)}else s=JSON.parse(c.decode(e));else s=e;if(s.asset===void 0||s.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const l=new yv(s,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){const d=this.pluginCallbacks[h](l);d.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[d.name]=d,a[d.name]=!0}if(s.extensionsUsed)for(let h=0;h<s.extensionsUsed.length;++h){const d=s.extensionsUsed[h],u=s.extensionsRequired||[];switch(d){case Ze.KHR_MATERIALS_UNLIT:a[d]=new j_;break;case Ze.KHR_DRACO_MESH_COMPRESSION:a[d]=new dv(s,this.dracoLoader);break;case Ze.KHR_TEXTURE_TRANSFORM:a[d]=new uv;break;case Ze.KHR_MESH_QUANTIZATION:a[d]=new fv;break;default:u.indexOf(d)>=0&&o[d]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+d+'".')}}l.setExtensions(a),l.setPlugins(o),l.parse(n,i)}parseAsync(e,t){const n=this;return new Promise(function(i,s){n.parse(e,t,i,s)})}}function X_(){let r={};return{get:function(e){return r[e]},add:function(e,t){r[e]=t},remove:function(e){delete r[e]},removeAll:function(){r={}}}}function Nt(r,e,t){const n=r.json.materials[e];return n.extensions&&n.extensions[t]?n.extensions[t]:null}const Ze={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",KHR_MESHOPT_COMPRESSION:"KHR_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class K_{constructor(e){this.parser=e,this.name=Ze.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){const s=t[n];s.extensions&&s.extensions[this.name]&&s.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,s.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let i=t.cache.get(n);if(i)return i;const s=t.json,c=((s.extensions&&s.extensions[this.name]||{}).lights||[])[e];let l;const h=new be(16777215);c.color!==void 0&&h.setRGB(c.color[0],c.color[1],c.color[2],xn);const d=c.range!==void 0?c.range:0;switch(c.type){case"directional":l=new Dc(h),l.target.position.set(0,0,-1),l.add(l.target);break;case"point":l=new Na(h),l.distance=d;break;case"spot":l=new Rm(h),l.distance=d,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,l.angle=c.spot.outerConeAngle,l.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,l.target.position.set(0,0,-1),l.add(l.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return l.position.set(0,0,0),jn(l,c),c.intensity!==void 0&&(l.intensity=c.intensity),l.name=t.createUniqueName(c.name||"light_"+e),i=Promise.resolve(l),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,s=n.json.nodes[e],o=(s.extensions&&s.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(c){return n._getNodeRef(t.cache,o,c)})}}class j_{constructor(){this.name=Ze.KHR_MATERIALS_UNLIT}getMaterialType(){return Tt}extendParams(e,t,n){const i=[];e.color=new be(1,1,1),e.opacity=1;const s=t.pbrMetallicRoughness;if(s){if(Array.isArray(s.baseColorFactor)){const a=s.baseColorFactor;e.color.setRGB(a[0],a[1],a[2],xn),e.opacity=a[3]}s.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",s.baseColorTexture,Yt))}return Promise.all(i)}}class Y_{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const n=Nt(this.parser,e,this.name);return n===null||n.emissiveStrength!==void 0&&(t.emissiveIntensity=n.emissiveStrength),Promise.resolve()}}class J_{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){return Nt(this.parser,e,this.name)!==null?ri:null}extendMaterialParams(e,t){const n=Nt(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];if(n.clearcoatFactor!==void 0&&(t.clearcoat=n.clearcoatFactor),n.clearcoatTexture!==void 0&&i.push(this.parser.assignTexture(t,"clearcoatMap",n.clearcoatTexture)),n.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=n.clearcoatRoughnessFactor),n.clearcoatRoughnessTexture!==void 0&&i.push(this.parser.assignTexture(t,"clearcoatRoughnessMap",n.clearcoatRoughnessTexture)),n.clearcoatNormalTexture!==void 0&&(i.push(this.parser.assignTexture(t,"clearcoatNormalMap",n.clearcoatNormalTexture)),n.clearcoatNormalTexture.scale!==void 0)){const s=n.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new He(s,s)}return Promise.all(i)}}class $_{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_DISPERSION}getMaterialType(e){return Nt(this.parser,e,this.name)!==null?ri:null}extendMaterialParams(e,t){const n=Nt(this.parser,e,this.name);return n===null||(t.dispersion=n.dispersion!==void 0?n.dispersion:0),Promise.resolve()}}class Z_{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){return Nt(this.parser,e,this.name)!==null?ri:null}extendMaterialParams(e,t){const n=Nt(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];return n.iridescenceFactor!==void 0&&(t.iridescence=n.iridescenceFactor),n.iridescenceTexture!==void 0&&i.push(this.parser.assignTexture(t,"iridescenceMap",n.iridescenceTexture)),n.iridescenceIor!==void 0&&(t.iridescenceIOR=n.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),n.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=n.iridescenceThicknessMinimum),n.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=n.iridescenceThicknessMaximum),n.iridescenceThicknessTexture!==void 0&&i.push(this.parser.assignTexture(t,"iridescenceThicknessMap",n.iridescenceThicknessTexture)),Promise.all(i)}}class Q_{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_SHEEN}getMaterialType(e){return Nt(this.parser,e,this.name)!==null?ri:null}extendMaterialParams(e,t){const n=Nt(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];if(t.sheenColor=new be(0,0,0),t.sheenRoughness=0,t.sheen=1,n.sheenColorFactor!==void 0){const s=n.sheenColorFactor;t.sheenColor.setRGB(s[0],s[1],s[2],xn)}return n.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=n.sheenRoughnessFactor),n.sheenColorTexture!==void 0&&i.push(this.parser.assignTexture(t,"sheenColorMap",n.sheenColorTexture,Yt)),n.sheenRoughnessTexture!==void 0&&i.push(this.parser.assignTexture(t,"sheenRoughnessMap",n.sheenRoughnessTexture)),Promise.all(i)}}class ev{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){return Nt(this.parser,e,this.name)!==null?ri:null}extendMaterialParams(e,t){const n=Nt(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];return n.transmissionFactor!==void 0&&(t.transmission=n.transmissionFactor),n.transmissionTexture!==void 0&&i.push(this.parser.assignTexture(t,"transmissionMap",n.transmissionTexture)),Promise.all(i)}}class tv{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_VOLUME}getMaterialType(e){return Nt(this.parser,e,this.name)!==null?ri:null}extendMaterialParams(e,t){const n=Nt(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];t.thickness=n.thicknessFactor!==void 0?n.thicknessFactor:0,n.thicknessTexture!==void 0&&i.push(this.parser.assignTexture(t,"thicknessMap",n.thicknessTexture)),t.attenuationDistance=n.attenuationDistance||1/0;const s=n.attenuationColor||[1,1,1];return t.attenuationColor=new be().setRGB(s[0],s[1],s[2],xn),Promise.all(i)}}class nv{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_IOR}getMaterialType(e){return Nt(this.parser,e,this.name)!==null?ri:null}extendMaterialParams(e,t){const n=Nt(this.parser,e,this.name);return n===null||(t.ior=n.ior!==void 0?n.ior:1.5,t.ior===0&&(t.ior=1e3)),Promise.resolve()}}class iv{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_SPECULAR}getMaterialType(e){return Nt(this.parser,e,this.name)!==null?ri:null}extendMaterialParams(e,t){const n=Nt(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];t.specularIntensity=n.specularFactor!==void 0?n.specularFactor:1,n.specularTexture!==void 0&&i.push(this.parser.assignTexture(t,"specularIntensityMap",n.specularTexture));const s=n.specularColorFactor||[1,1,1];return t.specularColor=new be().setRGB(s[0],s[1],s[2],xn),n.specularColorTexture!==void 0&&i.push(this.parser.assignTexture(t,"specularColorMap",n.specularColorTexture,Yt)),Promise.all(i)}}class sv{constructor(e){this.parser=e,this.name=Ze.EXT_MATERIALS_BUMP}getMaterialType(e){return Nt(this.parser,e,this.name)!==null?ri:null}extendMaterialParams(e,t){const n=Nt(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];return t.bumpScale=n.bumpFactor!==void 0?n.bumpFactor:1,n.bumpTexture!==void 0&&i.push(this.parser.assignTexture(t,"bumpMap",n.bumpTexture)),Promise.all(i)}}class rv{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){return Nt(this.parser,e,this.name)!==null?ri:null}extendMaterialParams(e,t){const n=Nt(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];return n.anisotropyStrength!==void 0&&(t.anisotropy=n.anisotropyStrength),n.anisotropyRotation!==void 0&&(t.anisotropyRotation=n.anisotropyRotation),n.anisotropyTexture!==void 0&&i.push(this.parser.assignTexture(t,"anisotropyMap",n.anisotropyTexture)),Promise.all(i)}}class av{constructor(e){this.parser=e,this.name=Ze.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;const s=i.extensions[this.name],a=t.options.ktx2Loader;if(!a){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,s.source,a)}}class ov{constructor(e){this.parser=e,this.name=Ze.EXT_TEXTURE_WEBP}loadTexture(e){const t=this.name,n=this.parser,i=n.json,s=i.textures[e];if(!s.extensions||!s.extensions[t])return null;const a=s.extensions[t],o=i.images[a.source];let c=n.textureLoader;if(o.uri){const l=n.options.manager.getHandler(o.uri);l!==null&&(c=l)}return n.loadTextureImage(e,a.source,c)}}class cv{constructor(e){this.parser=e,this.name=Ze.EXT_TEXTURE_AVIF}loadTexture(e){const t=this.name,n=this.parser,i=n.json,s=i.textures[e];if(!s.extensions||!s.extensions[t])return null;const a=s.extensions[t],o=i.images[a.source];let c=n.textureLoader;if(o.uri){const l=n.options.manager.getHandler(o.uri);l!==null&&(c=l)}return n.loadTextureImage(e,a.source,c)}}class ed{constructor(e,t){this.name=t,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const i=n.extensions[this.name],s=this.parser.getDependency("buffer",i.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return s.then(function(o){const c=i.byteOffset||0,l=i.byteLength||0,h=i.count,d=i.byteStride,u=new Uint8Array(o,c,l);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(h,d,u,i.mode,i.filter).then(function(f){return f.buffer}):a.ready.then(function(){const f=new ArrayBuffer(h*d);return a.decodeGltfBuffer(new Uint8Array(f),h,d,u,i.mode,i.filter),f})})}else return null}}class lv{constructor(e){this.name=Ze.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const i=t.meshes[n.mesh];for(const l of i.primitives)if(l.mode!==Tn.TRIANGLES&&l.mode!==Tn.TRIANGLE_STRIP&&l.mode!==Tn.TRIANGLE_FAN&&l.mode!==void 0)return null;const a=n.extensions[this.name].attributes,o=[],c={};for(const l in a)o.push(this.parser.getDependency("accessor",a[l]).then(h=>(c[l]=h,c[l])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(l=>{const h=l.pop(),d=h.isGroup?h.children:[h],u=l[0].count,f=[];for(const g of d){const _=new Ve,p=new z,m=new Pn,b=new z(1,1,1),w=new Ht(g.geometry,g.material,u);for(let y=0;y<u;y++)c.TRANSLATION&&p.fromBufferAttribute(c.TRANSLATION,y),c.ROTATION&&m.fromBufferAttribute(c.ROTATION,y),c.SCALE&&b.fromBufferAttribute(c.SCALE,y),w.setMatrixAt(y,_.compose(p,m,b));let x=null;for(const y in c)if(y==="_COLOR_0"){const T=c[y];w.instanceColor=new Ca(T.array,T.itemSize,T.normalized)}else if(y!=="TRANSLATION"&&y!=="ROTATION"&&y!=="SCALE"){if(x===null){const C=w.geometry;x=new Ct,x.name=C.name;for(const v in C.attributes)x.setAttribute(v,C.attributes[v]);for(const v in C.morphAttributes)x.morphAttributes[v]=C.morphAttributes[v];C.index!==null&&x.setIndex(C.index),x.morphTargetsRelative=C.morphTargetsRelative;for(const v of C.groups)x.addGroup(v.start,v.count,v.materialIndex);C.boundingBox!==null&&(x.boundingBox=C.boundingBox.clone()),C.boundingSphere!==null&&(x.boundingSphere=C.boundingSphere.clone()),x.drawRange.start=C.drawRange.start,x.drawRange.count=C.drawRange.count,x.userData=Object.assign({},C.userData),w.geometry=x}const T=c[y];x.setAttribute(y,new Ca(T.array,T.itemSize,T.normalized))}pt.prototype.copy.call(w,g),this.parser.assignFinalMaterial(w),f.push(w)}return h.isGroup?(h.clear(),h.add(...f),h):f[0]}))}}const xu="glTF",or=12,td={JSON:1313821514,BIN:5130562};class hv{constructor(e){this.name=Ze.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,or),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==xu)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const i=this.header.length-or,s=new DataView(e,or);let a=0;for(;a<i;){const o=s.getUint32(a,!0);a+=4;const c=s.getUint32(a,!0);if(a+=4,c===td.JSON){const l=new Uint8Array(e,or+a,o);this.content=n.decode(l)}else if(c===td.BIN){const l=or+a;this.body=e.slice(l,l+o)}a+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class dv{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Ze.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,i=this.dracoLoader,s=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,o={},c={},l={};for(const h in a){const d=Fc[h]||h.toLowerCase();o[d]=a[h]}for(const h in e.attributes){const d=Fc[h]||h.toLowerCase();if(a[h]!==void 0){const u=n.accessors[e.attributes[h]],f=ks[u.componentType];l[d]=f.name,c[d]=u.normalized===!0}}return t.getDependency("bufferView",s).then(function(h){return new Promise(function(d,u){i.decodeDracoFile(h,function(f){for(const g in f.attributes){const _=f.attributes[g],p=c[g];p!==void 0&&(_.normalized=p)}d(f)},o,l,xn,u)})})}}class uv{constructor(){this.name=Ze.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){if((t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0)return e;if(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),t.rotation!==void 0){const n=Math.cos(e.rotation),i=Math.sin(e.rotation);e.matrix.set(e.repeat.x*n,e.repeat.y*i,e.offset.x,-e.repeat.x*i,e.repeat.y*n,e.offset.y,0,0,1),e.matrixAutoUpdate=!1}return e.needsUpdate=!0,e}}class fv{constructor(){this.name=Ze.KHR_MESH_QUANTIZATION}}class _u extends Ws{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i*3+i;for(let a=0;a!==i;a++)t[a]=n[s+a];return t}interpolate_(e,t,n,i){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=o*2,l=o*3,h=i-t,d=(n-t)/h,u=d*d,f=u*d,g=e*l,_=g-l,p=-2*f+3*u,m=f-u,b=1-p,w=m-u+d;for(let x=0;x!==o;x++){const y=a[_+x+o],T=a[_+x+c]*h,C=a[g+x+o],v=a[g+x]*h;s[x]=b*y+w*T+p*C+m*v}return s}}const pv=new Pn;class mv extends _u{interpolate_(e,t,n,i){const s=super.interpolate_(e,t,n,i);return pv.fromArray(s).normalize().toArray(s),s}}const Tn={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},ks={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},nd={9728:Dt,9729:Vt,9984:Id,9985:da,9986:pr,9987:gi},id={33071:Zn,33648:Sa,10497:Os},Po={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Fc={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Pi={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},gv={CUBICSPLINE:void 0,LINEAR:wr,STEP:Tr},Io={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function bv(r){return r.DefaultMaterial===void 0&&(r.DefaultMaterial=new ml({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Gi})),r.DefaultMaterial}function Qi(r,e,t){for(const n in t.extensions)r[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function jn(r,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(r.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function xv(r,e,t){let n=!1,i=!1,s=!1;for(let l=0,h=e.length;l<h;l++){const d=e[l];if(d.POSITION!==void 0&&(n=!0),d.NORMAL!==void 0&&(i=!0),d.COLOR_0!==void 0&&(s=!0),n&&i&&s)break}if(!n&&!i&&!s)return Promise.resolve(r);const a=[],o=[],c=[];for(let l=0,h=e.length;l<h;l++){const d=e[l];if(n){const u=d.POSITION!==void 0?t.getDependency("accessor",d.POSITION):r.attributes.position;a.push(u)}if(i){const u=d.NORMAL!==void 0?t.getDependency("accessor",d.NORMAL):r.attributes.normal;o.push(u)}if(s){const u=d.COLOR_0!==void 0?t.getDependency("accessor",d.COLOR_0):r.attributes.color;c.push(u)}}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(c)]).then(function(l){const h=l[0],d=l[1],u=l[2];return n&&(r.morphAttributes.position=h),i&&(r.morphAttributes.normal=d),s&&(r.morphAttributes.color=u),r.morphTargetsRelative=!0,r})}function _v(r,e){if(r.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)r.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(r.morphTargetInfluences.length===t.length){r.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)r.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function vv(r){let e;const t=r.extensions&&r.extensions[Ze.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Do(t.attributes):e=r.indices+":"+Do(r.attributes)+":"+r.mode,r.targets!==void 0)for(let n=0,i=r.targets.length;n<i;n++)e+=":"+Do(r.targets[n]);return e}function Do(r){let e="";const t=Object.keys(r).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+r[t[n]]+";";return e}function Uc(r){switch(r){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function Mv(r){return r.search(/\.jpe?g($|\?)/i)>0||r.search(/^data\:image\/jpeg/)===0?"image/jpeg":r.search(/\.webp($|\?)/i)>0||r.search(/^data\:image\/webp/)===0?"image/webp":r.search(/\.ktx2($|\?)/i)>0||r.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const Sv=new Ve;class yv{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new X_,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=-1,s=!1,a=-1;if(typeof navigator<"u"&&typeof navigator.userAgent<"u"){const o=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(o)===!0;const c=o.match(/Version\/(\d+)/);i=n&&c?parseInt(c[1],10):-1,s=o.indexOf("Firefox")>-1,a=s?o.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&i<17||s&&a<98?this.textureLoader=new Tm(this.options.manager):this.textureLoader=new Pm(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new su(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,i=this.json,s=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(a){const o={scene:a[0][i.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:i.asset,parser:n,userData:{}};return Qi(s,o,i),jn(o,i),Promise.all(n._invokeAll(function(c){return c.afterRoot&&c.afterRoot(o)})).then(function(){for(const c of o.scenes)c.updateMatrixWorld();e(o)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,s=t.length;i<s;i++){const a=t[i].joints;for(let o=0,c=a.length;o<c;o++)e[a[o]].isBone=!0}for(let i=0,s=e.length;i<s;i++){const a=e[i];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(n[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const i=n.clone(),s=(a,o)=>{const c=this.associations.get(a);c!=null&&this.associations.set(o,c);for(const[l,h]of a.children.entries())s(h,o.children[l])};return s(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const i=e(t[n]);if(i)return i}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let i=0;i<t.length;i++){const s=e(t[i]);s&&n.push(s)}return n}getDependency(e,t){const n=e+":"+t;let i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(s){return s.loadNode&&s.loadNode(t)});break;case"mesh":i=this._invokeOne(function(s){return s.loadMesh&&s.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(s){return s.loadBufferView&&s.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(s){return s.loadMaterial&&s.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(s){return s.loadTexture&&s.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(s){return s.loadAnimation&&s.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(s){return s!=this&&s.getDependency&&s.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(s,a){return n.getDependency(e,a)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[Ze.KHR_BINARY_GLTF].body);const i=this.options;return new Promise(function(s,a){n.load(vr.resolveURL(t.uri,i.path),s,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const i=t.byteLength||0,s=t.byteOffset||0;return n.slice(s,s+i)})}loadAccessor(e){const t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){const a=Po[i.type],o=ks[i.componentType],c=i.normalized===!0,l=new o(i.count*a);return Promise.resolve(new Rt(l,a,c))}const s=[];return i.bufferView!==void 0?s.push(this.getDependency("bufferView",i.bufferView)):s.push(null),i.sparse!==void 0&&(s.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),s.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(s).then(function(a){const o=a[0],c=Po[i.type],l=ks[i.componentType],h=l.BYTES_PER_ELEMENT,d=h*c,u=i.byteOffset||0,f=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,g=i.normalized===!0;let _,p;if(f&&f!==d){const m=Math.floor(u/f),b="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+m+":"+i.count;let w=t.cache.get(b);w||(_=new l(o,m*f,i.count*f/h),w=new Wp(_,f/h),t.cache.add(b,w)),p=new ll(w,c,u%f/h,g)}else o===null?_=new l(i.count*c):_=new l(o,u,i.count*c),p=new Rt(_,c,g);if(i.sparse!==void 0){const m=Po.SCALAR,b=ks[i.sparse.indices.componentType],w=i.sparse.indices.byteOffset||0,x=i.sparse.values.byteOffset||0,y=new b(a[1],w,i.sparse.count*m),T=new l(a[2],x,i.sparse.count*c);o!==null&&(p=new Rt(p.array.slice(),p.itemSize,p.normalized)),p.normalized=!1;for(let C=0,v=y.length;C<v;C++){const R=y[C];if(p.setX(R,T[C*c]),c>=2&&p.setY(R,T[C*c+1]),c>=3&&p.setZ(R,T[C*c+2]),c>=4&&p.setW(R,T[C*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}p.normalized=g}return p})}loadTexture(e){const t=this.json,n=this.options,s=t.textures[e].source,a=t.images[s];let o=this.textureLoader;if(a.uri){const c=n.manager.getHandler(a.uri);c!==null&&(o=c)}return this.loadTextureImage(e,s,o)}loadTextureImage(e,t,n){const i=this,s=this.json,a=s.textures[e],o=s.images[t],c=(o.uri||o.bufferView)+":"+a.sampler;if(this.textureCache[c])return this.textureCache[c];const l=this.loadImageSource(t,n).then(function(h){h.flipY=!1,h.name=a.name||o.name||"",h.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(h.name=o.uri);const u=(s.samplers||{})[a.sampler]||{};return h.magFilter=nd[u.magFilter]||Vt,h.minFilter=nd[u.minFilter]||gi,h.wrapS=id[u.wrapS]||Os,h.wrapT=id[u.wrapT]||Os,h.generateMipmaps=!h.isCompressedTexture&&h.minFilter!==Dt&&h.minFilter!==Vt,i.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[c]=l,l}loadImageSource(e,t){const n=this,i=this.json,s=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(d=>d.clone());const a=i.images[e],o=self.URL||self.webkitURL;let c=a.uri||"",l=!1;if(a.bufferView!==void 0)c=n.getDependency("bufferView",a.bufferView).then(function(d){l=!0;const u=new Blob([d],{type:a.mimeType});return c=o.createObjectURL(u),c});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const h=Promise.resolve(c).then(function(d){return new Promise(function(u,f){let g=u;t.isImageBitmapLoader===!0&&(g=function(_){const p=new Wt(_);p.needsUpdate=!0,u(p)}),t.load(vr.resolveURL(d,s.path),g,void 0,f)})}).then(function(d){return l===!0&&o.revokeObjectURL(c),jn(d,a),d.userData.mimeType=a.mimeType||Mv(a.uri),d}).catch(function(d){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),d});return this.sourceCache[e]=h,h}assignTexture(e,t,n,i){const s=this;return this.getDependency("texture",n.index).then(function(a){if(!a)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(a=a.clone(),a.channel=n.texCoord),s.extensions[Ze.KHR_TEXTURE_TRANSFORM]){const o=n.extensions!==void 0?n.extensions[Ze.KHR_TEXTURE_TRANSFORM]:void 0;if(o){const c=s.associations.get(a);a=s.extensions[Ze.KHR_TEXTURE_TRANSFORM].extendTexture(a,o),s.associations.set(a,c)}}return i!==void 0&&(a.colorSpace=i),e[t]=a,a})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const i=t.attributes.tangent===void 0,s=t.attributes.color!==void 0,a=t.attributes.normal===void 0;if(e.isPoints){const o="PointsMaterial:"+n.uuid;let c=this.cache.get(o);c||(c=new fl,Bn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,c.sizeAttenuation=!1,this.cache.add(o,c)),n=c}else if(e.isLine){const o="LineBasicMaterial:"+n.uuid;let c=this.cache.get(o);c||(c=new Jd,Bn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,this.cache.add(o,c)),n=c}if(i||s||a){let o="ClonedMaterial:"+n.uuid+":";i&&(o+="derivative-tangents:"),s&&(o+="vertex-colors:"),a&&(o+="flat-shading:");let c=this.cache.get(o);c||(c=n.clone(),s&&(c.vertexColors=!0),a&&(c.flatShading=!0),i&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(o,c),this.associations.set(c,this.associations.get(n))),n=c}e.material=n}getMaterialType(){return ml}loadMaterial(e){const t=this,n=this.json,i=this.extensions,s=n.materials[e];let a;const o={},c=s.extensions||{},l=[];if(c[Ze.KHR_MATERIALS_UNLIT]){const d=i[Ze.KHR_MATERIALS_UNLIT];a=d.getMaterialType(),l.push(d.extendParams(o,s,t))}else{const d=s.pbrMetallicRoughness||{};if(o.color=new be(1,1,1),o.opacity=1,Array.isArray(d.baseColorFactor)){const u=d.baseColorFactor;o.color.setRGB(u[0],u[1],u[2],xn),o.opacity=u[3]}d.baseColorTexture!==void 0&&l.push(t.assignTexture(o,"map",d.baseColorTexture,Yt)),o.metalness=d.metallicFactor!==void 0?d.metallicFactor:1,o.roughness=d.roughnessFactor!==void 0?d.roughnessFactor:1,d.metallicRoughnessTexture!==void 0&&(l.push(t.assignTexture(o,"metalnessMap",d.metallicRoughnessTexture)),l.push(t.assignTexture(o,"roughnessMap",d.metallicRoughnessTexture))),a=this._invokeOne(function(u){return u.getMaterialType&&u.getMaterialType(e)}),l.push(Promise.all(this._invokeAll(function(u){return u.extendMaterialParams&&u.extendMaterialParams(e,o)})))}s.doubleSided===!0&&(o.side=rn);const h=s.alphaMode||Io.OPAQUE;if(h===Io.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,h===Io.MASK&&(o.alphaTest=s.alphaCutoff!==void 0?s.alphaCutoff:.5)),s.normalTexture!==void 0&&a!==Tt&&(l.push(t.assignTexture(o,"normalMap",s.normalTexture)),o.normalScale=new He(1,1),s.normalTexture.scale!==void 0)){const d=s.normalTexture.scale;o.normalScale.set(d,d)}if(s.occlusionTexture!==void 0&&a!==Tt&&(l.push(t.assignTexture(o,"aoMap",s.occlusionTexture)),s.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=s.occlusionTexture.strength)),s.emissiveFactor!==void 0&&a!==Tt){const d=s.emissiveFactor;o.emissive=new be().setRGB(d[0],d[1],d[2],xn)}return s.emissiveTexture!==void 0&&a!==Tt&&l.push(t.assignTexture(o,"emissiveMap",s.emissiveTexture,Yt)),Promise.all(l).then(function(){const d=new a(o);return s.name&&(d.name=s.name),jn(d,s),t.associations.set(d,{materials:e}),s.extensions&&Qi(i,d,s),d})}createUniqueName(e){const t=ct.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,i=this.primitiveCache;function s(o){return n[Ze.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(c){return sd(c,o,t)})}const a=[];for(let o=0,c=e.length;o<c;o++){const l=e[o],h=vv(l),d=i[h];if(d)a.push(d.promise);else{let u;l.extensions&&l.extensions[Ze.KHR_DRACO_MESH_COMPRESSION]?u=s(l):u=sd(new Ct,l,t),l.mode===Tn.TRIANGLE_STRIP?u=u.then(f=>Qh(f,Gd)):l.mode===Tn.TRIANGLE_FAN&&(u=u.then(f=>Qh(f,Pc))),i[h]={primitive:l,promise:u},a.push(u)}}return Promise.all(a)}loadMesh(e){const t=this,n=this.json,i=this.extensions,s=n.meshes[e],a=s.primitives,o=[];for(let c=0,l=a.length;c<l;c++){const h=a[c].material===void 0?bv(this.cache):this.getDependency("material",a[c].material);o.push(h)}return o.push(t.loadGeometries(a)),Promise.all(o).then(async function(c){const l=c.slice(0,c.length-1),h=c[c.length-1],d=[];for(let f=0,g=h.length;f<g;f++){const _=h[f],p=a[f];let m;const b=l[f];if(p.mode===Tn.TRIANGLES||p.mode===Tn.TRIANGLE_STRIP||p.mode===Tn.TRIANGLE_FAN||p.mode===void 0){const w=s.isSkinnedMesh===!0,x=_.hasAttribute("skinIndex")&&_.hasAttribute("skinWeight");w&&x===!1&&console.warn("THREE.GLTFLoader: Missing skinIndex or skinWeight attributes. Skinning disabled."),m=w&&x?new Jp(_,b):new We(_,b),m.isSkinnedMesh===!0&&m.normalizeSkinWeights()}else if(p.mode===Tn.LINES)m=new em(_,b);else if(p.mode===Tn.LINE_STRIP)m=new ul(_,b);else if(p.mode===Tn.LINE_LOOP)m=new tm(_,b);else if(p.mode===Tn.POINTS)m=new $d(_,b);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+p.mode);Object.keys(m.geometry.morphAttributes).length>0&&_v(m,s),m.name=t.createUniqueName(s.name||"mesh_"+e),jn(m,s),p.extensions&&Qi(i,m,p),t.assignFinalMaterial(m),d.push(m)}for(let f=0,g=d.length;f<g;f++)t.associations.set(d[f],{meshes:e,primitives:f});if(d.length===1)return s.extensions&&Qi(i,d[0],s),d[0];const u=new an;s.extensions&&Qi(i,u,s),t.associations.set(u,{meshes:e});for(let f=0,g=d.length;f<g;f++)u.add(d[f]);return u})}loadCamera(e){let t;const n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new dn(wp.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new Ga(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),jn(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let i=0,s=t.joints.length;i<s;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){const s=i.pop(),a=i,o=[],c=[];for(let l=0,h=a.length;l<h;l++){const d=a[l];if(d){o.push(d);const u=new Ve;s!==null&&u.fromArray(s.array,l*16),c.push(u)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[l])}return new hl(o,c)})}loadAnimation(e){const t=this.json,n=this,i=t.animations[e],s=i.name?i.name:"animation_"+e,a=[],o=[],c=[],l=[],h=[];for(let d=0,u=i.channels.length;d<u;d++){const f=i.channels[d],g=i.samplers[f.sampler],_=f.target,p=_.node,m=i.parameters!==void 0?i.parameters[g.input]:g.input,b=i.parameters!==void 0?i.parameters[g.output]:g.output;_.node!==void 0&&(a.push(this.getDependency("node",p)),o.push(this.getDependency("accessor",m)),c.push(this.getDependency("accessor",b)),l.push(g),h.push(_))}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(c),Promise.all(l),Promise.all(h)]).then(function(d){const u=d[0],f=d[1],g=d[2],_=d[3],p=d[4],m=[];for(let w=0,x=u.length;w<x;w++){const y=u[w],T=f[w],C=g[w],v=_[w],R=p[w];if(y===void 0)continue;y.updateMatrix&&y.updateMatrix();const D=n._createAnimationTracks(y,T,C,v,R);if(D)for(let U=0;U<D.length;U++)m.push(D[U])}const b=new Da(s,void 0,m);return jn(b,i),b})}createNodeMesh(e){const t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(s){const a=n._getNodeRef(n.meshCache,i.mesh,s);return i.weights!==void 0&&a.traverse(function(o){if(o.isMesh)for(let c=0,l=i.weights.length;c<l;c++)o.morphTargetInfluences[c]=i.weights[c]}),a})}loadNode(e){const t=this.json,n=this,i=t.nodes[e],s=n._loadNodeShallow(e),a=[],o=i.children||[];for(let l=0,h=o.length;l<h;l++)a.push(n.getDependency("node",o[l]));const c=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([s,Promise.all(a),c]).then(function(l){const h=l[0],d=l[1],u=l[2];u!==null&&h.traverse(function(f){f.isSkinnedMesh&&f.bind(u,Sv)});for(let f=0,g=d.length;f<g;f++)h.add(d[f]);if(h.userData.pivot!==void 0&&d.length>0){const f=h.userData.pivot,g=d[0];h.pivot=new z().fromArray(f),h.position.x-=f[0],h.position.y-=f[1],h.position.z-=f[2],g.position.set(0,0,0),delete h.userData.pivot}return h})}_loadNodeShallow(e){const t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const s=t.nodes[e],a=s.name?i.createUniqueName(s.name):"",o=[],c=i._invokeOne(function(l){return l.createNodeMesh&&l.createNodeMesh(e)});return c&&o.push(c),s.camera!==void 0&&o.push(i.getDependency("camera",s.camera).then(function(l){return i._getNodeRef(i.cameraCache,s.camera,l)})),i._invokeAll(function(l){return l.createNodeAttachment&&l.createNodeAttachment(e)}).forEach(function(l){o.push(l)}),this.nodeCache[e]=Promise.all(o).then(function(l){let h;if(s.isBone===!0?h=new Yd:l.length>1?h=new an:l.length===1?h=l[0]:h=new pt,h!==l[0])for(let d=0,u=l.length;d<u;d++)h.add(l[d]);if(s.name&&(h.userData.name=s.name,h.name=a),jn(h,s),s.extensions&&Qi(n,h,s),s.matrix!==void 0){const d=new Ve;d.fromArray(s.matrix),h.applyMatrix4(d)}else s.translation!==void 0&&h.position.fromArray(s.translation),s.rotation!==void 0&&h.quaternion.fromArray(s.rotation),s.scale!==void 0&&h.scale.fromArray(s.scale);if(!i.associations.has(h))i.associations.set(h,{});else if(s.mesh!==void 0&&i.meshCache.refs[s.mesh]>1){const d=i.associations.get(h);i.associations.set(h,{...d})}return i.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],i=this,s=new an;n.name&&(s.name=i.createUniqueName(n.name)),jn(s,n),n.extensions&&Qi(t,s,n);const a=n.nodes||[],o=[];for(let c=0,l=a.length;c<l;c++)o.push(i.getDependency("node",a[c]));return Promise.all(o).then(function(c){for(let h=0,d=c.length;h<d;h++){const u=c[h];u.parent!==null?s.add(gu(u)):s.add(u)}const l=h=>{const d=new Map;for(const[u,f]of i.associations)(u instanceof Bn||u instanceof Wt)&&d.set(u,f);return h.traverse(u=>{const f=i.associations.get(u);f!=null&&d.set(u,f)}),d};return i.associations=l(s),s})}_createAnimationTracks(e,t,n,i,s){const a=[],o=e.name?e.name:e.uuid,c=[];function l(f){f.morphTargetInfluences&&c.push(f.name?f.name:f.uuid)}Pi[s.path]===Pi.weights?(l(e),e.isGroup&&e.children.forEach(l)):c.push(o);let h;switch(Pi[s.path]){case Pi.weights:h=Pr;break;case Pi.rotation:h=Vs;break;case Pi.translation:case Pi.scale:h=Ia;break;default:switch(n.itemSize){case 1:h=Pr;break;case 2:case 3:default:h=Ia;break}break}const d=i.interpolation!==void 0?gv[i.interpolation]:wr,u=this._getArrayFromAccessor(n);for(let f=0,g=c.length;f<g;f++){const _=new h(c[f]+"."+Pi[s.path],t.array,u,d);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(_),a.push(_)}return a}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=Uc(t.constructor),i=new Float32Array(t.length);for(let s=0,a=t.length;s<a;s++)i[s]=t[s]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){const i=this instanceof Vs?mv:_u;return new i(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function Ev(r,e,t){const n=e.attributes,i=new In;if(n.POSITION!==void 0){const o=t.json.accessors[n.POSITION],c=o.min,l=o.max;if(c!==void 0&&l!==void 0){if(i.set(new z(c[0],c[1],c[2]),new z(l[0],l[1],l[2])),o.normalized){const h=Uc(ks[o.componentType]);i.min.multiplyScalar(h),i.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const s=e.targets;if(s!==void 0){const o=new z,c=new z;for(let l=0,h=s.length;l<h;l++){const d=s[l];if(d.POSITION!==void 0){const u=t.json.accessors[d.POSITION],f=u.min,g=u.max;if(f!==void 0&&g!==void 0){if(c.setX(Math.max(Math.abs(f[0]),Math.abs(g[0]))),c.setY(Math.max(Math.abs(f[1]),Math.abs(g[1]))),c.setZ(Math.max(Math.abs(f[2]),Math.abs(g[2]))),u.normalized){const _=Uc(ks[u.componentType]);c.multiplyScalar(_)}o.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(o)}r.boundingBox=i;const a=new si;i.getCenter(a.center),a.radius=i.min.distanceTo(i.max)/2,r.boundingSphere=a}function sd(r,e,t){const n=e.attributes,i=[];function s(a,o){return t.getDependency("accessor",a).then(function(c){r.setAttribute(o,c)})}for(const a in n){const o=Fc[a]||a.toLowerCase();o in r.attributes||i.push(s(n[a],o))}if(e.indices!==void 0&&!r.index){const a=t.getDependency("accessor",e.indices).then(function(o){r.setIndex(o)});i.push(a)}return et.workingColorSpace!==xn&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${et.workingColorSpace}" not supported.`),jn(r,e),Ev(r,e,t),Promise.all(i).then(function(){return e.targets!==void 0?xv(r,e.targets,t):r})}var rd=(function(){var r="b9H79Tebbbe8Fv9Gbb9Gvuuuuueu9Giuuub9Geueu9Giuuueuixkbeeeddddillviebeoweuecj:Gdkr;Neqo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbeY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVbdE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbiL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtblK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949WboY9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVJ9V29VVbrl79IV9Rbwq:VZkdbk:XYi5ud9:du8Jjjjjbcj;kb9Rgv8Kjjjjbc9:hodnalTmbcuhoaiRbbgrc;WeGc:Ge9hmbarcsGgwce0mbc9:hoalcufadcd4cbawEgDadfgrcKcaawEgqaraq0Egk6mbaicefhxcj;abad9Uc;WFbGcjdadca0EhmaialfgPar9Rgoadfhsavaoadz:jjjjbgzceVhHcbhOdndninaeaO9nmeaPax9RaD6mdamaeaO9RaOamfgoae6EgAcsfglc9WGhCabaOad2fhXaAcethQaxaDfhiaOaeaoaeao6E9RhLalcl4cifcd4hKazcj;cbfaAfhYcbh8AazcjdfhEaHh3incbh5dnawTmbaxa8Acd4fRbbh5kcbh8Eazcj;cbfhqinaih8Fdndndndna5a8Ecet4ciGgoc9:fPdebdkaPa8F9RaA6mrazcj;cbfa8EaA2fa8FaAz:jjjjb8Aa8FaAfhixdkazcj;cbfa8EaA2fcbaAz:kjjjb8Aa8FhixekaPa8F9RaK6mva8FaKfhidnaCTmbaPai9RcK6mbaocdtc:q:G:cjbfcj:G:cjbawEhaczhrcbhlinargoc9Wfghaqfhrdndndndndndnaaa8Fahco4fRbbalcoG4ciGcdtfydbPDbedvivvvlvkar9cb83bwar9cb83bbxlkarcbaiRbdai8Xbb9c:c:qj:bw9:9c:q;c1:I1e:d9c:b:c:e1z9:gg9cjjjjjz:dg8J9qE86bbaqaofgrcGfcbaicdfa8J9c8N1:NfghRbbag9cjjjjjw:dg8J9qE86bbarcVfcbaha8J9c8M1:NfghRbbag9cjjjjjl:dg8J9qE86bbarc7fcbaha8J9c8L1:NfghRbbag9cjjjjjd:dg8J9qE86bbarctfcbaha8J9c8K1:NfghRbbag9cjjjjje:dg8J9qE86bbarc91fcbaha8J9c8J1:NfghRbbag9cjjjj;ab:dg8J9qE86bbarc4fcbaha8J9cg1:NfghRbbag9cjjjja:dg8J9qE86bbarc93fcbaha8J9ch1:NfghRbbag9cjjjjz:dgg9qE86bbarc94fcbahag9ca1:NfghRbbai8Xbe9c:c:qj:bw9:9c:q;c1:I1e:d9c:b:c:e1z9:gg9cjjjjjz:dg8J9qE86bbarc95fcbaha8J9c8N1:NfgiRbbag9cjjjjjw:dg8J9qE86bbarc96fcbaia8J9c8M1:NfgiRbbag9cjjjjjl:dg8J9qE86bbarc97fcbaia8J9c8L1:NfgiRbbag9cjjjjjd:dg8J9qE86bbarc98fcbaia8J9c8K1:NfgiRbbag9cjjjjje:dg8J9qE86bbarc99fcbaia8J9c8J1:NfgiRbbag9cjjjj;ab:dg8J9qE86bbarc9:fcbaia8J9cg1:NfgiRbbag9cjjjja:dg8J9qE86bbarcufcbaia8J9ch1:NfgiRbbag9cjjjjz:dgg9qE86bbaiag9ca1:NfhixikaraiRblaiRbbghco4g8Ka8KciSg8KE86bbaqaofgrcGfaiclfa8Kfg8KRbbahcl4ciGg8La8LciSg8LE86bbarcVfa8Ka8Lfg8KRbbahcd4ciGg8La8LciSg8LE86bbarc7fa8Ka8Lfg8KRbbahciGghahciSghE86bbarctfa8Kahfg8KRbbaiRbeghco4g8La8LciSg8LE86bbarc91fa8Ka8Lfg8KRbbahcl4ciGg8La8LciSg8LE86bbarc4fa8Ka8Lfg8KRbbahcd4ciGg8La8LciSg8LE86bbarc93fa8Ka8Lfg8KRbbahciGghahciSghE86bbarc94fa8Kahfg8KRbbaiRbdghco4g8La8LciSg8LE86bbarc95fa8Ka8Lfg8KRbbahcl4ciGg8La8LciSg8LE86bbarc96fa8Ka8Lfg8KRbbahcd4ciGg8La8LciSg8LE86bbarc97fa8Ka8Lfg8KRbbahciGghahciSghE86bbarc98fa8KahfghRbbaiRbigico4g8Ka8KciSg8KE86bbarc99faha8KfghRbbaicl4ciGg8Ka8KciSg8KE86bbarc9:faha8KfghRbbaicd4ciGg8Ka8KciSg8KE86bbarcufaha8KfgrRbbaiciGgiaiciSgiE86bbaraifhixdkaraiRbwaiRbbghcl4g8Ka8KcsSg8KE86bbaqaofgrcGfaicwfa8Kfg8KRbbahcsGghahcsSghE86bbarcVfa8KahfghRbbaiRbeg8Kcl4g8La8LcsSg8LE86bbarc7faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarctfaha8KfghRbbaiRbdg8Kcl4g8La8LcsSg8LE86bbarc91faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc4faha8KfghRbbaiRbig8Kcl4g8La8LcsSg8LE86bbarc93faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc94faha8KfghRbbaiRblg8Kcl4g8La8LcsSg8LE86bbarc95faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc96faha8KfghRbbaiRbvg8Kcl4g8La8LcsSg8LE86bbarc97faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc98faha8KfghRbbaiRbog8Kcl4g8La8LcsSg8LE86bbarc99faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc9:faha8KfghRbbaiRbrgicl4g8Ka8KcsSg8KE86bbarcufaha8KfgrRbbaicsGgiaicsSgiE86bbaraifhixekarai8Pbw83bwarai8Pbb83bbaiczfhikdnaoaC9pmbalcdfhlaoczfhraPai9RcL0mekkaoaC6moaimexokaCmva8FTmvkaqaAfhqa8Ecefg8Ecl9hmbkdndndndnawTmbasa8Acd4fRbbgociGPlbedrbkaATmdaza8Afh8Fazcj;cbfhhcbh8EaEhaina8FRbbhraahocbhlinaoahalfRbbgqce4cbaqceG9R7arfgr86bbaoadfhoaAalcefgl9hmbkaacefhaa8Fcefh8FahaAfhha8Ecefg8Ecl9hmbxikkaATmeaza8Afhaazcj;cbfhhcbhoceh8EaYh8FinaEaofhlaa8Vbbhrcbhoinala8FaofRbbcwtahaofRbbgqVc;:FiGce4cbaqceG9R7arfgr87bbaladfhlaLaocefgofmbka8FaQfh8FcdhoaacdfhaahaQfhha8EceGhlcbh8EalmbxdkkaATmbaocl4h8Eaza8AfRbbhqcwhoa3hlinalRbbaotaqVhqalcefhlaocwfgoca9hmbkcbhhaEh8FaYhainazcj;cbfahfRbbhrcwhoaahlinalRbbaotarVhralaAfhlaocwfgoca9hmbkara8E94aq7hqcbhoa8Fhlinalaqao486bbalcefhlaocwfgoca9hmbka8Fadfh8FaacefhaahcefghaA9hmbkkaEclfhEa3clfh3a8Aclfg8Aad6mbkaXazcjdfaAad2z:jjjjb8AazazcjdfaAcufad2fadz:jjjjb8AaAaOfhOaihxaimbkc9:hoxdkcbc99aPax9RakSEhoxekc9:hokavcj;kbf8Kjjjjbaok:ysezu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnalaeci9UgrcHf6mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgDce0mbavc;abfcFecjez:kjjjb8Aav9cu83iUav9cu83i8Wav9cu83iyav9cu83iaav9cu83iKav9cu83izav9cu83iwav9cu83ibaialfc9WfhqaicefgwarfhldnaeTmbcmcsaDceSEhkcbhxcbhmcbhrcbhicbhoindnalaq9nmbc9:hoxikdndnawRbbgDc;Ve0mbavc;abfaoaDcu7gPcl4fcsGcitfgsydlhzasydbhHdndnaDcsGgsak9pmbavaiaPfcsGcdtfydbaxasEhDaxasTgOfhxxekdndnascsSmbcehOasc987asamffcefhDxekalcefhDal8SbbgscFeGhPdndnascu9mmbaDhlxekalcvfhlaPcFbGhPcrhsdninaD8SbbgOcFbGastaPVhPaOcu9kmeaDcefhDascrfgsc8J9hmbxdkkaDcefhlkcehOaPce4cbaPceG9R7amfhDkaDhmkavc;abfaocitfgsaDBdbasazBdlavaicdtfaDBdbavc;abfaocefcsGcitfgsaHBdbasaDBdlaocdfhoaOaifhidnadcd9hmbabarcetfgsaH87ebasclfaD87ebascdfaz87ebxdkabarcdtfgsaHBdbascwfaDBdbasclfazBdbxekdnaDcpe0mbavaiaqaDcsGfRbbgscl4gP9RcsGcdtfydbaxcefgOaPEhDavaias9RcsGcdtfydbaOaPTgzfgOascsGgPEhsaPThPdndnadcd9hmbabarcetfgHax87ebaHclfas87ebaHcdfaD87ebxekabarcdtfgHaxBdbaHcwfasBdbaHclfaDBdbkavaicdtfaxBdbavc;abfaocitfgHaDBdbaHaxBdlavaicefgicsGcdtfaDBdbavc;abfaocefcsGcitfgHasBdbaHaDBdlavaiazfgicsGcdtfasBdbavc;abfaocdfcsGcitfgDaxBdbaDasBdlaocifhoaiaPfhiaOaPfhxxekaxcbalRbbgsEgHaDc;:eSgDfhOascsGhAdndnascl4gCmbaOcefhzxekaOhzavaiaC9RcsGcdtfydbhOkdndnaAmbazcefhxxekazhxavaias9RcsGcdtfydbhzkdndnaDTmbalcefhDxekalcdfhDal8SbegPcFeGhsdnaPcu9kmbalcofhHascFbGhscrhldninaD8SbbgPcFbGaltasVhsaPcu9kmeaDcefhDalcrfglc8J9hmbkaHhDxekaDcefhDkasce4cbasceG9R7amfgmhHkdndnaCcsSmbaDhsxekaDcefhsaD8SbbglcFeGhPdnalcu9kmbaDcvfhOaPcFbGhPcrhldninas8SbbgDcFbGaltaPVhPaDcu9kmeascefhsalcrfglc8J9hmbkaOhsxekascefhskaPce4cbaPceG9R7amfgmhOkdndnaAcsSmbashlxekascefhlas8SbbgDcFeGhPdnaDcu9kmbascvfhzaPcFbGhPcrhDdninal8SbbgscFbGaDtaPVhPascu9kmealcefhlaDcrfgDc8J9hmbkazhlxekalcefhlkaPce4cbaPceG9R7amfgmhzkdndnadcd9hmbabarcetfgDaH87ebaDclfaz87ebaDcdfaO87ebxekabarcdtfgDaHBdbaDcwfazBdbaDclfaOBdbkavc;abfaocitfgDaOBdbaDaHBdlavaicdtfaHBdbavc;abfaocefcsGcitfgDazBdbaDaOBdlavaicefgicsGcdtfaOBdbavc;abfaocdfcsGcitfgDaHBdbaDazBdlavaiaCTaCcsSVfgicsGcdtfazBdbaiaATaAcsSVfhiaocifhokawcefhwaocsGhoaicsGhiarcifgrae6mbkkcbc99alaqSEhokavc;aef8Kjjjjbaok:clevu8Jjjjjbcz9Rhvdnalaecvf9pmbc9:skdnaiRbbc;:eGc;qeSmbcuskav9cb83iwaicefhoaialfc98fhrdnaeTmbdnadcdSmbcbhwindnaoar6mbc9:skaocefhlao8SbbgicFeGhddndnaicu9mmbalhoxekaocvfhoadcFbGhdcrhidninal8SbbgDcFbGaitadVhdaDcu9kmealcefhlaicrfgic8J9hmbxdkkalcefhokabawcdtfadc8Etc8F91adcd47avcwfadceGcdtVglydbfgiBdbalaiBdbawcefgwae9hmbxdkkcbhwindnaoar6mbc9:skaocefhlao8SbbgicFeGhddndnaicu9mmbalhoxekaocvfhoadcFbGhdcrhidninal8SbbgDcFbGaitadVhdaDcu9kmealcefhlaicrfgic8J9hmbxdkkalcefhokabawcetfadc8Etc8F91adcd47avcwfadceGcdtVglydbfgi87ebalaiBdbawcefgwae9hmbkkcbc99aoarSEk:Lvoeue99dud99eud99dndnadcl9hmbaeTmeindndnabcdfgd8Sbb:Yab8Sbbgi:Ygl:l:tabcefgv8Sbbgo:Ygr:l:tgwJbb;:9cawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai86bbdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad86bbdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad86bbabclfhbaecufgembxdkkaeTmbindndnabclfgd8Ueb:Yab8Uebgi:Ygl:l:tabcdfgv8Uebgo:Ygr:l:tgwJb;:FSawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai87ebdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad87ebdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad87ebabcwfhbaecufgembkkk:4ioiue99dud99dud99dnaeTmbcbhiabhlindndnal8Uebgv:YgoJ:ji:1Salcof8UebgrciVgw:Y:vgDNJbbbZJbbb:;avcu9kEMgq:lJbbb9p9DTmbaq:Ohkxekcjjjj94hkkalclf8Uebhvalcdf8UebhxalarcefciGcetfak87ebdndnax:YgqaDNJbbbZJbbb:;axcu9kEMgm:lJbbb9p9DTmbam:Ohxxekcjjjj94hxkabaiarciGgkfcd7cetfax87ebdndnav:YgmaDNJbbbZJbbb:;avcu9kEMgP:lJbbb9p9DTmbaP:Ohvxekcjjjj94hvkalarcufciGcetfav87ebdndnawaw2:ZgPaPMaoaoN:taqaqN:tamamN:tgoJbbbbaoJbbbb9GE:raDNJbbbZMgD:lJbbb9p9DTmbaD:Ohrxekcjjjj94hrkalakcetfar87ebalcwfhlaiclfhiaecufgembkkk9mbdnadcd4ae2gdTmbinababydbgecwtcw91:Yaece91cjjj98Gcjjj;8if::NUdbabclfhbadcufgdmbkkk:Tvirud99eudndnadcl9hmbaeTmeindndnabRbbgiabcefgl8Sbbgvabcdfgo8Sbbgrf9R:YJbbuJabcifgwRbbgdce4adVgDcd4aDVgDcl4aDVgD:Z:vgqNJbbbZMgk:lJbbb9p9DTmbak:Ohxxekcjjjj94hxkaoax86bbdndnaraif:YaqNJbbbZMgk:lJbbb9p9DTmbak:Ohoxekcjjjj94hokalao86bbdndnavaifar9R:YaqNJbbbZMgk:lJbbb9p9DTmbak:Ohixekcjjjj94hikabai86bbdndnaDadcetGadceGV:ZaqNJbbbZMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkawad86bbabclfhbaecufgembxdkkaeTmbindndnab8Vebgiabcdfgl8Uebgvabclfgo8Uebgrf9R:YJbFu9habcofgw8Vebgdce4adVgDcd4aDVgDcl4aDVgDcw4aDVgD:Z:vgqNJbbbZMgk:lJbbb9p9DTmbak:Ohxxekcjjjj94hxkaoax87ebdndnaraif:YaqNJbbbZMgk:lJbbb9p9DTmbak:Ohoxekcjjjj94hokalao87ebdndnavaifar9R:YaqNJbbbZMgk:lJbbb9p9DTmbak:Ohixekcjjjj94hikabai87ebdndnaDadcetGadceGV:ZaqNJbbbZMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkawad87ebabcwfhbaecufgembkkk9teiucbcbyd:K:G:cjbgeabcifc98GfgbBd:K:G:cjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaik;LeeeudndnaeabVciGTmbabhixekdndnadcz9pmbabhixekabhiinaiaeydbBdbaiclfaeclfydbBdbaicwfaecwfydbBdbaicxfaecxfydbBdbaeczfheaiczfhiadc9Wfgdcs0mbkkadcl6mbinaiaeydbBdbaeclfheaiclfhiadc98fgdci0mbkkdnadTmbinaiaeRbb86bbaicefhiaecefheadcufgdmbkkabk;aeedudndnabciGTmbabhixekaecFeGc:b:c:ew2hldndnadcz9pmbabhixekabhiinaialBdbaicxfalBdbaicwfalBdbaiclfalBdbaiczfhiadc9Wfgdcs0mbkkadcl6mbinaialBdbaiclfhiadc98fgdci0mbkkdnadTmbinaiae86bbaicefhiadcufgdmbkkabkk83dbcj:Gdk8Kbbbbdbbblbbbwbbbbbbbebbbdbbblbbbwbbbbc:K:Gdkl8W:qbb",e="b9H79TebbbeKl9Gbb9Gvuuuuueu9Giuuub9Geueuixkbbebeeddddilve9Weeeviebeoweuecj:Gdkr;Neqo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbdY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVblE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtboK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbrL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949WbwY9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVJ9V29VVbDl79IV9Rbqq:W9Dklbzik94evu8Jjjjjbcz9Rhbcbheincbhdcbhiinabcwfadfaicjuaead4ceGglE86bbaialfhiadcefgdcw9hmbkaeai86b:q:W:cjbaecitab8Piw83i:q:G:cjbaecefgecjd9hmbkk:JBl8Aud97dur978Jjjjjbcj;kb9Rgv8Kjjjjbc9:hodnalTmbcuhoaiRbbgrc;WeGc:Ge9hmbarcsGgwce0mbc9:hoalcufadcd4cbawEgDadfgrcKcaawEgqaraq0Egk6mbaialfgxar9RhodnadTgmmbavaoad;8qbbkaicefhPcj;abad9Uc;WFbGcjdadca0EhsdndndnadTmbaoadfhzcbhHinaeaH9nmdaxaP9RaD6miabaHad2fhOaPaDfhAasaeaH9RaHasfae6EgCcsfgocl4cifcd4hXavcj;cbfaoc9WGgQcetfhLavcj;cbfaQci2fhKavcj;cbfaQfhYcbh8Aaoc;ab6hEincbh3dnawTmbaPa8Acd4fRbbh3kcbh5avcj;cbfh8Eindndndndna3a5cet4ciGgoc9:fPdebdkaxaA9RaQ6mwdnaQTmbavcj;cbfa5aQ2faAaQ;8qbbkaAaCfhAxdkaQTmeavcj;cbfa5aQ2fcbaQ;8kbxekaxaA9RaX6moaoclVcbawEhraAaXfhocbhidnaEmbaxao9Rc;Gb6mbcbhlina8EalfhidndndndndndnaAalco4fRbbgqciGarfPDbedibledibkaipxbbbbbbbbbbbbbbbbpklbxlkaiaopbblaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLg8Fcdp:mea8FpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogapxiiiiiiiiiiiiiiiip8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaoclffagRb:q:W:cjbfhoxikaiaopbbwaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogapxssssssssssssssssp8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaocwffagRb:q:W:cjbfhoxdkaiaopbbbpklbaoczfhoxekaiaopbbdaoRbbghcitpbi:q:G:cjbahRb:q:W:cjbghpsaoRbeggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpklbahaocdffagRb:q:W:cjbfhokdndndndndndnaqcd4ciGarfPDbedibledibkaiczfpxbbbbbbbbbbbbbbbbpklbxlkaiczfaopbblaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLg8Fcdp:mea8FpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogapxiiiiiiiiiiiiiiiip8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaoclffagRb:q:W:cjbfhoxikaiczfaopbbwaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogapxssssssssssssssssp8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaocwffagRb:q:W:cjbfhoxdkaiczfaopbbbpklbaoczfhoxekaiczfaopbbdaoRbbghcitpbi:q:G:cjbahRb:q:W:cjbghpsaoRbeggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpklbahaocdffagRb:q:W:cjbfhokdndndndndndnaqcl4ciGarfPDbedibledibkaicafpxbbbbbbbbbbbbbbbbpklbxlkaicafaopbblaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLg8Fcdp:mea8FpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogapxiiiiiiiiiiiiiiiip8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaoclffagRb:q:W:cjbfhoxikaicafaopbbwaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogapxssssssssssssssssp8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaocwffagRb:q:W:cjbfhoxdkaicafaopbbbpklbaoczfhoxekaicafaopbbdaoRbbghcitpbi:q:G:cjbahRb:q:W:cjbghpsaoRbeggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpklbahaocdffagRb:q:W:cjbfhokdndndndndndnaqco4arfPDbedibledibkaic8Wfpxbbbbbbbbbbbbbbbbpklbxlkaic8Wfaopbblaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLg8Fcdp:mea8FpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogapxiiiiiiiiiiiiiiiip8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Ngicitpbi:q:G:cjbaiRb:q:W:cjbgipsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Ngqcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbaiaoclffaqRb:q:W:cjbfhoxikaic8Wfaopbbwaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogapxssssssssssssssssp8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Ngicitpbi:q:G:cjbaiRb:q:W:cjbgipsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Ngqcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbaiaocwffaqRb:q:W:cjbfhoxdkaic8Wfaopbbbpklbaoczfhoxekaic8WfaopbbdaoRbbgicitpbi:q:G:cjbaiRb:q:W:cjbgipsaoRbegqcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpklbaiaocdffaqRb:q:W:cjbfhokalc;abfhialcjefaQ0meaihlaxao9Rc;Fb0mbkkdnaiaQ9pmbaici4hlinaxao9RcK6mwa8EaifhqdndndndndndnaAaico4fRbbalcoG4ciGarfPDbedibledibkaqpxbbbbbbbbbbbbbbbbpkbbxlkaqaopbblaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLg8Fcdp:mea8FpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogapxiiiiiiiiiiiiiiiip8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spkbbahaoclffagRb:q:W:cjbfhoxikaqaopbbwaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogapxssssssssssssssssp8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spkbbahaocwffagRb:q:W:cjbfhoxdkaqaopbbbpkbbaoczfhoxekaqaopbbdaoRbbghcitpbi:q:G:cjbahRb:q:W:cjbghpsaoRbeggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpkbbahaocdffagRb:q:W:cjbfhokalcdfhlaiczfgiaQ6mbkkaohAaoTmoka8EaQfh8Ea5cefg5cl9hmbkdndndndnawTmbaza8Acd4fRbbglciGPlbedwbkaQTmdavcjdfa8Afhlava8Afpbdbh8Jcbhoinalavcj;cbfaofpblbg8KaYaofpblbg8LpmbzeHdOiAlCvXoQrLg8MaLaofpblbg8NaKaofpblbgypmbzeHdOiAlCvXoQrLg8PpmbezHdiOAlvCXorQLg8Fcep9Ta8Fpxeeeeeeeeeeeeeeeegap9op9Hp9rg8Fa8Jp9Ug8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp9Ug8Jp9Abbbaladfgla8Ja8Ma8PpmwDKYqk8AExm35Ps8E8Fg8Fcep9Ta8Faap9op9Hp9rg8Fp9Ug8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp9Ug8Jp9Abbbaladfgla8Ja8Ka8LpmwKDYq8AkEx3m5P8Es8Fg8Ka8NaypmwKDYq8AkEx3m5P8Es8Fg8LpmbezHdiOAlvCXorQLg8Fcep9Ta8Faap9op9Hp9rg8Fp9Ug8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp9Ug8Jp9Abbbaladfgla8Ja8Ka8LpmwDKYqk8AExm35Ps8E8Fg8Fcep9Ta8Faap9op9Hp9rg8Fp9Ugap9Abbbaladfglaaa8Fa8Fpmlvorlvorlvorlvorp9Ugap9Abbbaladfglaaa8Fa8FpmwDqkwDqkwDqkwDqkp9Ugap9Abbbaladfglaaa8Fa8FpmxmPsxmPsxmPsxmPsp9Ug8Jp9AbbbaladfhlaoczfgoaQ6mbxikkaQTmeavcjdfa8Afhlava8Afpbdbh8Jcbhoinalavcj;cbfaofpblbg8KaYaofpblbg8LpmbzeHdOiAlCvXoQrLg8MaLaofpblbg8NaKaofpblbgypmbzeHdOiAlCvXoQrLg8PpmbezHdiOAlvCXorQLg8Fcep:nea8Fpxebebebebebebebebgap9op:bep9rg8Fa8Jp:oeg8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp:oeg8Jp9Abbbaladfgla8Ja8Ma8PpmwDKYqk8AExm35Ps8E8Fg8Fcep:nea8Faap9op:bep9rg8Fp:oeg8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp:oeg8Jp9Abbbaladfgla8Ja8Ka8LpmwKDYq8AkEx3m5P8Es8Fg8Ka8NaypmwKDYq8AkEx3m5P8Es8Fg8LpmbezHdiOAlvCXorQLg8Fcep:nea8Faap9op:bep9rg8Fp:oeg8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp:oeg8Jp9Abbbaladfgla8Ja8Ka8LpmwDKYqk8AExm35Ps8E8Fg8Fcep:nea8Faap9op:bep9rg8Fp:oegap9Abbbaladfglaaa8Fa8Fpmlvorlvorlvorlvorp:oegap9Abbbaladfglaaa8Fa8FpmwDqkwDqkwDqkwDqkp:oegap9Abbbaladfglaaa8Fa8FpmxmPsxmPsxmPsxmPsp:oeg8Jp9AbbbaladfhlaoczfgoaQ6mbxdkkaQTmbcbhocbalcl4gl9Rc8FGhiavcjdfa8Afhrava8Afpbdbhainaravcj;cbfaofpblbg8JaYaofpblbg8KpmbzeHdOiAlCvXoQrLg8LaLaofpblbg8MaKaofpblbg8NpmbzeHdOiAlCvXoQrLgypmbezHdiOAlvCXorQLg8Faip:Rea8Falp:Tep9qg8Faap9rgap9Abbbaradfgraaa8Fa8Fpmlvorlvorlvorlvorp9rgap9Abbbaradfgraaa8Fa8FpmwDqkwDqkwDqkwDqkp9rgap9Abbbaradfgraaa8Fa8FpmxmPsxmPsxmPsxmPsp9rgap9Abbbaradfgraaa8LaypmwDKYqk8AExm35Ps8E8Fg8Faip:Rea8Falp:Tep9qg8Fp9rgap9Abbbaradfgraaa8Fa8Fpmlvorlvorlvorlvorp9rgap9Abbbaradfgraaa8Fa8FpmwDqkwDqkwDqkwDqkp9rgap9Abbbaradfgraaa8Fa8FpmxmPsxmPsxmPsxmPsp9rgap9Abbbaradfgraaa8Ja8KpmwKDYq8AkEx3m5P8Es8Fg8Ja8Ma8NpmwKDYq8AkEx3m5P8Es8Fg8KpmbezHdiOAlvCXorQLg8Faip:Rea8Falp:Tep9qg8Fp9rgap9Abbbaradfgraaa8Fa8Fpmlvorlvorlvorlvorp9rgap9Abbbaradfgraaa8Fa8FpmwDqkwDqkwDqkwDqkp9rgap9Abbbaradfgraaa8Fa8FpmxmPsxmPsxmPsxmPsp9rgap9Abbbaradfgraaa8Ja8KpmwDKYqk8AExm35Ps8E8Fg8Faip:Rea8Falp:Tep9qg8Fp9rgap9Abbbaradfgraaa8Fa8Fpmlvorlvorlvorlvorp9rgap9Abbbaradfgraaa8Fa8FpmwDqkwDqkwDqkwDqkp9rgap9Abbbaradfgraaa8Fa8FpmxmPsxmPsxmPsxmPsp9rgap9AbbbaradfhraoczfgoaQ6mbkka8Aclfg8Aad6mbkdnaCad2goTmbaOavcjdfao;8qbbkdnammbavavcjdfaCcufad2fad;8qbbkaCaHfhHc9:hoaAhPaAmbxlkkaeTmbaDalfhrcbhocuhlinaralaD9RglfaD6mdasaeao9Raoasfae6Eaofgoae6mbkaial9RhPkcbc99axaP9RakSEhoxekc9:hokavcj;kbf8Kjjjjbaokwbz:bjjjbkNsezu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnalaeci9UgrcHf6mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgDce0mbavc;abfcFecje;8kbav9cu83iUav9cu83i8Wav9cu83iyav9cu83iaav9cu83iKav9cu83izav9cu83iwav9cu83ibaialfc9WfhqaicefgwarfhldnaeTmbcmcsaDceSEhkcbhxcbhmcbhrcbhicbhoindnalaq9nmbc9:hoxikdndnawRbbgDc;Ve0mbavc;abfaoaDcu7gPcl4fcsGcitfgsydlhzasydbhHdndnaDcsGgsak9pmbavaiaPfcsGcdtfydbaxasEhDaxasTgOfhxxekdndnascsSmbcehOasc987asamffcefhDxekalcefhDal8SbbgscFeGhPdndnascu9mmbaDhlxekalcvfhlaPcFbGhPcrhsdninaD8SbbgOcFbGastaPVhPaOcu9kmeaDcefhDascrfgsc8J9hmbxdkkaDcefhlkcehOaPce4cbaPceG9R7amfhDkaDhmkavc;abfaocitfgsaDBdbasazBdlavaicdtfaDBdbavc;abfaocefcsGcitfgsaHBdbasaDBdlaocdfhoaOaifhidnadcd9hmbabarcetfgsaH87ebasclfaD87ebascdfaz87ebxdkabarcdtfgsaHBdbascwfaDBdbasclfazBdbxekdnaDcpe0mbavaiaqaDcsGfRbbgscl4gP9RcsGcdtfydbaxcefgOaPEhDavaias9RcsGcdtfydbaOaPTgzfgOascsGgPEhsaPThPdndnadcd9hmbabarcetfgHax87ebaHclfas87ebaHcdfaD87ebxekabarcdtfgHaxBdbaHcwfasBdbaHclfaDBdbkavaicdtfaxBdbavc;abfaocitfgHaDBdbaHaxBdlavaicefgicsGcdtfaDBdbavc;abfaocefcsGcitfgHasBdbaHaDBdlavaiazfgicsGcdtfasBdbavc;abfaocdfcsGcitfgDaxBdbaDasBdlaocifhoaiaPfhiaOaPfhxxekaxcbalRbbgsEgHaDc;:eSgDfhOascsGhAdndnascl4gCmbaOcefhzxekaOhzavaiaC9RcsGcdtfydbhOkdndnaAmbazcefhxxekazhxavaias9RcsGcdtfydbhzkdndnaDTmbalcefhDxekalcdfhDal8SbegPcFeGhsdnaPcu9kmbalcofhHascFbGhscrhldninaD8SbbgPcFbGaltasVhsaPcu9kmeaDcefhDalcrfglc8J9hmbkaHhDxekaDcefhDkasce4cbasceG9R7amfgmhHkdndnaCcsSmbaDhsxekaDcefhsaD8SbbglcFeGhPdnalcu9kmbaDcvfhOaPcFbGhPcrhldninas8SbbgDcFbGaltaPVhPaDcu9kmeascefhsalcrfglc8J9hmbkaOhsxekascefhskaPce4cbaPceG9R7amfgmhOkdndnaAcsSmbashlxekascefhlas8SbbgDcFeGhPdnaDcu9kmbascvfhzaPcFbGhPcrhDdninal8SbbgscFbGaDtaPVhPascu9kmealcefhlaDcrfgDc8J9hmbkazhlxekalcefhlkaPce4cbaPceG9R7amfgmhzkdndnadcd9hmbabarcetfgDaH87ebaDclfaz87ebaDcdfaO87ebxekabarcdtfgDaHBdbaDcwfazBdbaDclfaOBdbkavc;abfaocitfgDaOBdbaDaHBdlavaicdtfaHBdbavc;abfaocefcsGcitfgDazBdbaDaOBdlavaicefgicsGcdtfaOBdbavc;abfaocdfcsGcitfgDaHBdbaDazBdlavaiaCTaCcsSVfgicsGcdtfazBdbaiaATaAcsSVfhiaocifhokawcefhwaocsGhoaicsGhiarcifgrae6mbkkcbc99alaqSEhokavc;aef8Kjjjjbaok:clevu8Jjjjjbcz9Rhvdnalaecvf9pmbc9:skdnaiRbbc;:eGc;qeSmbcuskav9cb83iwaicefhoaialfc98fhrdnaeTmbdnadcdSmbcbhwindnaoar6mbc9:skaocefhlao8SbbgicFeGhddndnaicu9mmbalhoxekaocvfhoadcFbGhdcrhidninal8SbbgDcFbGaitadVhdaDcu9kmealcefhlaicrfgic8J9hmbxdkkalcefhokabawcdtfadc8Etc8F91adcd47avcwfadceGcdtVglydbfgiBdbalaiBdbawcefgwae9hmbxdkkcbhwindnaoar6mbc9:skaocefhlao8SbbgicFeGhddndnaicu9mmbalhoxekaocvfhoadcFbGhdcrhidninal8SbbgDcFbGaitadVhdaDcu9kmealcefhlaicrfgic8J9hmbxdkkalcefhokabawcetfadc8Etc8F91adcd47avcwfadceGcdtVglydbfgi87ebalaiBdbawcefgwae9hmbkkcbc99aoarSEk;Toio97eue97aec98Ghedndnadcl9hmbaeTmecbhdinababpbbbgicKp:RecKp:Sep;6eglaicwp:RecKp:Sep;6ealp;Geaiczp:RecKp:Sep;6egvp;Gep;Kep;Legopxbbbbbbbbbbbbbbbbp:2egralpxbbbjbbbjbbbjbbbjgwp9op9rp;Keglpxbb;:9cbb;:9cbb;:9cbb;:9calalp;Meaoaop;Meavaravawp9op9rp;Keglalp;Mep;Kep;Kep;Jep;Negvp;Mepxbbn0bbn0bbn0bbn0grp;KepxFbbbFbbbFbbbFbbbp9oaipxbbbFbbbFbbbFbbbFp9op9qalavp;Mearp;Kecwp:RepxbFbbbFbbbFbbbFbbp9op9qaoavp;Mearp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qpkbbabczfhbadclfgdae6mbxdkkaeTmbcbhdinabczfgDaDpbbbgipxbbbbbbFFbbbbbbFFgwp9oabpbbbgoaipmbediwDqkzHOAKY8AEgvczp:Reczp:Sep;6eglaoaipmlvorxmPsCXQL358E8FpxFubbFubbFubbFubbp9op;6eavczp:Sep;6egvp;Gealp;Gep;Kep;Legipxbbbbbbbbbbbbbbbbp:2egralpxbbbjbbbjbbbjbbbjgqp9op9rp;Keglpxb;:FSb;:FSb;:FSb;:FSalalp;Meaiaip;Meavaravaqp9op9rp;Keglalp;Mep;Kep;Kep;Jep;Negvp;Mepxbbn0bbn0bbn0bbn0grp;KepxFFbbFFbbFFbbFFbbp9oaiavp;Mearp;Keczp:Rep9qgialavp;Mearp;KepxFFbbFFbbFFbbFFbbp9oglpmwDKYqk8AExm35Ps8E8Fp9qpkbbabaoawp9oaialpmbezHdiOAlvCXorQLp9qpkbbabcafhbadclfgdae6mbkkk;2ileue97euo97dnaec98GgiTmbcbheinabcKfpx:ji:1S:ji:1S:ji:1S:ji:1SabpbbbglabczfgvpbbbgopmlvorxmPsCXQL358E8Fgrczp:Segwpxibbbibbbibbbibbbp9qp;6egDp;NegqaDaDp;MegDaDp;KealaopmbediwDqkzHOAKY8AEgDczp:Reczp:Sep;6eglalp;MeaDczp:Sep;6egoaop;Mearczp:Reczp:Sep;6egrarp;Mep;Kep;Kep;Lepxbbbbbbbbbbbbbbbbp:4ep;Jep;Mepxbbn0bbn0bbn0bbn0gDp;KepxFFbbFFbbFFbbFFbbgkp9oaqaop;MeaDp;Keczp:Rep9qgoaqalp;MeaDp;Keakp9oaqarp;MeaDp;Keczp:Rep9qgDpmwDKYqk8AExm35Ps8E8Fglp5eawclp:RegqpEi:T:j83ibavalp5baqpEd:T:j83ibabcwfaoaDpmbezHdiOAlvCXorQLgDp5eaqpEe:T:j83ibabaDp5baqpEb:T:j83ibabcafhbaeclfgeai6mbkkkuee97dnadcd4ae2c98GgeTmbcbhdinababpbbbgicwp:Recwp:Sep;6eaicep:SepxbbjFbbjFbbjFbbjFp9opxbbjZbbjZbbjZbbjZp:Uep;Mepkbbabczfhbadclfgdae6mbkkk:Sodw97euaec98Ghedndnadcl9hmbaeTmecbhdinabpxbbuJbbuJbbuJbbuJabpbbbgicKp:TeglaicYp:Tep9qgvcdp:Teavp9qgvclp:Teavp9qgop;6ep;Negvaicwp:RecKp:SegraipxFbbbFbbbFbbbFbbbgwp9ogDp:Uep;6ep;Mepxbbn0bbn0bbn0bbn0gqp;Kecwp:RepxbFbbbFbbbFbbbFbbp9oavaDarp:Xeaiczp:RecKp:Segip:Uep;6ep;Meaqp;Keawp9op9qavaDaraip:Uep:Xep;6ep;Meaqp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qavaoalcep:Rep9oalpxebbbebbbebbbebbbp9op9qp;6ep;Meaqp;KecKp:Rep9qpkbbabczfhbadclfgdae6mbxdkkaeTmbcbhdinabczfgkpxbFu9hbFu9hbFu9hbFu9habpbbbglakpbbbgrpmlvorxmPsCXQL358E8Fgvczp:TegqavcHp:Tep9qgicdp:Teaip9qgiclp:Teaip9qgicwp:Teaip9qgop;6ep;NegialarpmbediwDqkzHOAKY8AEgDpxFFbbFFbbFFbbFFbbglp9ograDczp:Segwp:Ueavczp:Reczp:SegDp:Xep;6ep;Mepxbbn0bbn0bbn0bbn0gvp;Kealp9oaiarawaDp:Uep:Xep;6ep;Meavp;Keczp:Rep9qgwaiaoaqcep:Rep9oaqpxebbbebbbebbbebbbp9op9qp;6ep;Meavp;Keczp:ReaiaDarp:Uep;6ep;Meavp;Kealp9op9qgipmwDKYqk8AExm35Ps8E8FpkbbabawaipmbezHdiOAlvCXorQLpkbbabcafhbadclfgdae6mbkkk9teiucbcbydj:G:cjbgeabcifc98GfgbBdj:G:cjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaikkxebcj:Gdklz:zbb",t=new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,3,2,0,0,5,3,1,0,1,12,1,0,10,22,2,12,0,65,0,65,0,65,0,252,10,0,0,11,7,0,65,0,253,15,26,11]),n=new Uint8Array([32,0,65,2,1,106,34,33,3,128,11,4,13,64,6,253,10,7,15,116,127,5,8,12,40,16,19,54,20,9,27,255,113,17,42,67,24,23,146,148,18,14,22,45,70,69,56,114,101,21,25,63,75,136,108,28,118,29,73,115]);if(typeof WebAssembly!="object")return{supported:!1};var i=WebAssembly.validate(t)?o(e):o(r),s,a=WebAssembly.instantiate(i,{}).then(function(m){s=m.instance,s.exports.__wasm_call_ctors()});function o(m){for(var b=new Uint8Array(m.length),w=0;w<m.length;++w){var x=m.charCodeAt(w);b[w]=x>96?x-97:x>64?x-39:x+4}for(var y=0,w=0;w<m.length;++w)b[y++]=b[w]<60?n[b[w]]:(b[w]-60)*64+b[++w];return b.buffer.slice(0,y)}function c(m,b,w,x,y,T,C){var v=m.exports.sbrk,R=x+3&-4,D=v(R*y),U=v(T.length),H=new Uint8Array(m.exports.memory.buffer);H.set(T,U);var B=b(D,x,y,U,T.length);if(B==0&&C&&C(D,R,y),w.set(H.subarray(D,D+x*y)),v(D-v(0)),B!=0)throw new Error("Malformed buffer data: "+B)}var l={NONE:"",OCTAHEDRAL:"meshopt_decodeFilterOct",QUATERNION:"meshopt_decodeFilterQuat",EXPONENTIAL:"meshopt_decodeFilterExp",COLOR:"meshopt_decodeFilterColor"},h={ATTRIBUTES:"meshopt_decodeVertexBuffer",TRIANGLES:"meshopt_decodeIndexBuffer",INDICES:"meshopt_decodeIndexSequence"},d=[],u=0;function f(m){var b={object:new Worker(m),pending:0,requests:{}};return b.object.onmessage=function(w){var x=w.data;b.pending-=x.count,b.requests[x.id][x.action](x.value),delete b.requests[x.id]},b}function g(m){for(var b="self.ready = WebAssembly.instantiate(new Uint8Array(["+new Uint8Array(i)+"]), {}).then(function(result) { result.instance.exports.__wasm_call_ctors(); return result.instance; });self.onmessage = "+p.name+";"+c.toString()+p.toString(),w=new Blob([b],{type:"text/javascript"}),x=URL.createObjectURL(w),y=d.length;y<m;++y)d[y]=f(x);for(var y=m;y<d.length;++y)d[y].object.postMessage({});d.length=m,URL.revokeObjectURL(x)}function _(m,b,w,x,y){for(var T=d[0],C=1;C<d.length;++C)d[C].pending<T.pending&&(T=d[C]);return new Promise(function(v,R){var D=new Uint8Array(w),U=++u;T.pending+=m,T.requests[U]={resolve:v,reject:R},T.object.postMessage({id:U,count:m,size:b,source:D,mode:x,filter:y},[D.buffer])})}function p(m){var b=m.data;self.ready.then(function(w){if(!b.id)return self.close();try{var x=new Uint8Array(b.count*b.size);c(w,w.exports[b.mode],x,b.count,b.size,b.source,w.exports[b.filter]),self.postMessage({id:b.id,count:b.count,action:"resolve",value:x},[x.buffer])}catch(y){self.postMessage({id:b.id,count:b.count,action:"reject",value:y})}})}return{ready:a,supported:!0,useWorkers:function(m){g(m)},decodeVertexBuffer:function(m,b,w,x,y){c(s,s.exports.meshopt_decodeVertexBuffer,m,b,w,x,s.exports[l[y]])},decodeIndexBuffer:function(m,b,w,x){c(s,s.exports.meshopt_decodeIndexBuffer,m,b,w,x)},decodeIndexSequence:function(m,b,w,x){c(s,s.exports.meshopt_decodeIndexSequence,m,b,w,x)},decodeGltfBuffer:function(m,b,w,x,y,T){c(s,s.exports[h[y]],m,b,w,x,s.exports[l[T]])},decodeGltfBufferAsync:function(m,b,w,x,y){return d.length>0?_(m,b,w,h[x],l[y]):a.then(function(){var T=new Uint8Array(m*b);return c(s,s.exports[h[x]],T,m,b,w,s.exports[l[y]]),T})}}})();let No=null;function vi(){if(No)return No;const r=new Uint8Array([150,150,150,255,205,205,205,255,255,255,255,255]),e=new za(r,3,1);return e.minFilter=Dt,e.magFilter=Dt,e.needsUpdate=!0,No=e,e}function Tv(r,e){const t=new an,n=e.clone(!0);t.add(n),n.updateMatrixWorld(!0);const s=new In().setFromObject(n).getSize(new z),a=Math.max(s.x,s.y,s.z,.001);n.scale.setScalar(1.7/a),n.updateMatrixWorld(!0);const c=new In().setFromObject(n);n.position.sub(c.getCenter(new z)),s.y>=s.x&&s.y>=s.z?t.rotation.x=Math.PI/2:s.x>=s.z&&(t.rotation.y=Math.PI/2),t.position.set(.42,1.25,.15),t.traverse(l=>{const h=l;h.isMesh&&(h.castShadow=!0,h.frustumCulled=!1)}),r.group.add(t),r.rifle={gun:t,dir:new z(0,0,1)}}const wv=/(Shoulder|Arm|ForeArm|Hand)$/;function Av(r){for(const e of r)for(const t of e.tracks){if(!/hips\.position$/i.test(t.name))continue;const n=t.values,i=n[0]??0,s=n[2]??0;for(let a=0;a<n.length;a+=3)n[a]=i,n[a+2]=s}}function ko(r,e,t,n){if(r.some(o=>o.name===e))return;const i=r.find(o=>o.name===t),s=r.find(o=>o.name===n);if(!i||!s)return;const a=i.tracks.map(o=>{const c=o.name.split(".")[0]??"";if(!wv.test(c)||!o.name.endsWith("quaternion"))return o.clone();const l=s.tracks.find(d=>d.name===o.name);if(!l)return o.clone();const h=Array.from(l.values.slice(0,4));return new Vs(o.name,[0,i.duration],[...h,...h])});r.push(new Da(e,i.duration,a))}function Rv(r,e){Av(e),r==="rose_rifle_meshy"&&(ko(e,"IdleR","IdleBase","Ready"),ko(e,"AimR","IdleBase","Ready"),ko(e,"AimRun","Run","Ready"))}function Cv(r,e){const t=[],n=e?new be(e):null;return r.traverse(i=>{const s=i;if(!s.isMesh)return;const a=s.material,o=a.color?a.color.clone():new be(16777215);n&&o.multiply(n);const c=new Et({color:o,map:a.map??null,gradientMap:vi(),emissive:a.emissive?a.emissive.clone():new be(0),emissiveIntensity:a.emissiveIntensity||0});/eye/i.test(s.name)&&(c.emissive.set(12056319),c.emissiveIntensity=1.2),c.transparent=!1,c.opacity=1,c.depthWrite=!0,c.alphaTest=0,c.userData.baseE=c.emissive.clone(),c.userData.baseI=c.emissiveIntensity,s.material=c,s.castShadow=!0,s.frustumCulled=!1,t.push(c)}),t}function ad(r){r.updateMatrixWorld(!0);const e=new In,t=new z;return r.traverse(n=>{const i=n;if(i.isSkinnedMesh){i.skeleton.update();const s=i.geometry.getAttribute("position"),a=Math.max(1,Math.floor(s.count/500));for(let o=0;o<s.count;o+=a)i.getVertexPosition(o,t),t.applyMatrix4(i.matrixWorld),e.expandByPoint(t)}else n.isMesh&&e.expandByObject(n)}),e}function Fo(r,e,t){const n=gu(r.scene);n.traverse(f=>{const g=f;g.isMesh&&(g.frustumCulled=!1)});const i=ad(n),s=Math.max(.05,i.max.y-i.min.y||1),a=e/s;n.scale.setScalar(a),n.updateMatrixWorld(!0);const o=ad(n);n.position.y-=o.min.y;const c=new an;c.add(n);const l=Cv(n,t?.tint),h=new au(n),d={};for(const f of r.animations)d[f.name]=h.clipAction(f);const u={group:c,root:n,mixer:h,acts:d,cur:null,mats:l,aim:t?.aim??{},recoil:0,hero:t?.hero};return t?.gun&&Tv(u,t.gun),u}function Lv(r,e,t){const n=r.acts[e]??r.acts.Idle??r.acts.IdleR??r.acts.IdleBase;if(!n)return;const i=t?.fade??.14,s=t?.once??!1,a=t?.speed??1;if(r.cur===n){n.timeScale=a;return}n.reset(),n.setLoop(s?zd:Bd,1/0),n.clampWhenFinished=s,n.enabled=!0,n.timeScale=a,n.fadeIn(i).play(),r.cur&&r.cur.fadeOut(i),r.cur=n}function Uo(r,e,t,n,i,s,a=!1){r.group.visible=!0,r.group.position.set(e,0,t),r.group.rotation.y=n,Lv(r,s,{once:a,fade:a?.08:.16}),r.mixer.update(i),r.rifle||(r.root.rotation.y=r.aim[s]??0)}function od(r,e){for(const t of r.mats){const n=t.userData.baseE,i=t.userData.baseI??0;e>.02?(t.emissive.set(16773586),t.emissiveIntensity=Math.min(.65,i+e*1.6)):n&&(t.emissive.copy(n),t.emissiveIntensity=i)}}const Pv={silva:{Shoot:-2.15,ShootQuick:-1.7,ShootCharged:-1.75}},Iv=2.7;function Dv(r,e){return!(r>0)||e<=1?[0]:Array.from({length:e},(t,n)=>r*n/e)}function Nv(r,e,t=4){const n=[];r.traverse(l=>{l.isMesh&&n.push(l)});const i=[];for(const l of n){const h=Array.isArray(l.material)?l.material[0]:l.material;h&&!i.includes(h)&&i.push(h)}n.sort((l,h)=>i.indexOf(Array.isArray(l.material)?l.material[0]:l.material)-i.indexOf(Array.isArray(h.material)?h.material[0]:h.material));const s=e?new au(r):null,a=e&&s?s.clipAction(e):null;a?.play();const o=new z,c=[];for(const l of Dv(e?.duration??0,e?t:1)){s?.setTime(l),r.updateMatrixWorld(!0);const h=[],d=[],u=[],f=[];for(const _ of n){const p=_;p.isSkinnedMesh&&p.skeleton.update();const m=_.geometry,b=m.getAttribute("position"),w=m.getAttribute("uv"),x=h.length/3;for(let v=0;v<b.count;v++)_.getVertexPosition(v,o),o.applyMatrix4(_.matrixWorld),h.push(o.x,o.y,o.z),w?d.push(w.getX(v),w.getY(v)):d.push(0,0);const y=u.length;if(m.index)for(let v=0;v<m.index.count;v++)u.push(x+m.index.getX(v));else for(let v=0;v<b.count;v++)u.push(x+v);const T=i.indexOf(Array.isArray(_.material)?_.material[0]:_.material),C=f[f.length-1];C&&C.mat===T?C.count+=u.length-y:f.push({start:y,count:u.length-y,mat:T})}const g=new Ct;g.setAttribute("position",new Rt(new Float32Array(h),3)),g.setAttribute("uv",new Rt(new Float32Array(d),2)),g.setIndex(u);for(const _ of f)g.addGroup(_.start,_.count,_.mat);g.computeVertexNormals(),c.push(g)}return a?.stop(),{frames:c,materials:i}}function kv(r,e){const t=r[0];if(!t)return;t.computeBoundingBox();const n=t.boundingBox;if(!n)return;const i=n.max.y-n.min.y||1,s=e/i,a=(n.min.x+n.max.x)/2,o=(n.min.z+n.max.z)/2;for(const c of r)c.translate(-a,-n.min.y,-o),c.scale(s,s,s)}const ka={value:new z};function Fv(r){return r.onBeforeCompile=e=>{e.uniforms.focus=ka,e.vertexShader=e.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vOcc;`).replace("#include <project_vertex>",`vec4 occW = vec4(transformed, 1.0);
        #ifdef USE_INSTANCING
          occW = instanceMatrix * occW;
        #endif
        vOcc = (modelMatrix * occW).xyz;
        #include <project_vertex>`),e.fragmentShader=e.fragmentShader.replace("#include <common>",`#include <common>
        varying vec3 vOcc;
        uniform vec3 focus;
        float bayer4(vec2 p) {
          int x = int(mod(p.x, 4.0));
          int y = int(mod(p.y, 4.0));
          int i = x + y * 4;
          float v = 0.0;
          if (i == 0) v = 0.0; else if (i == 1) v = 8.0; else if (i == 2) v = 2.0; else if (i == 3) v = 10.0;
          else if (i == 4) v = 12.0; else if (i == 5) v = 4.0; else if (i == 6) v = 14.0; else if (i == 7) v = 6.0;
          else if (i == 8) v = 3.0; else if (i == 9) v = 11.0; else if (i == 10) v = 1.0; else if (i == 11) v = 9.0;
          else if (i == 12) v = 15.0; else if (i == 13) v = 7.0; else if (i == 14) v = 13.0; else v = 5.0;
          return v / 16.0;
        }`).replace("#include <dithering_fragment>",`         float distHero = distance(vOcc.xz, focus.xz);
         float closeness = 1.0 - smoothstep(0.6, 6.2, distHero);
         if (vOcc.y > 0.45 && closeness > 0.22 && bayer4(gl_FragCoord.xy) > mix(0.62, 0.1, closeness)) discard;
         #include <dithering_fragment>`)},r.customProgramCacheKey=()=>"occlude-dither",r}function Uv(r){return r.onBeforeCompile=e=>{e.uniforms.focus=ka,e.vertexShader=e.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vOcc;`).replace("#include <project_vertex>",`vec4 occW = vec4(transformed, 1.0);
        #ifdef USE_INSTANCING
          occW = instanceMatrix * occW;
        #endif
        vOcc = (modelMatrix * occW).xyz;
        #include <project_vertex>`),e.fragmentShader=e.fragmentShader.replace("#include <common>",`#include <common>
        varying vec3 vOcc;
        uniform vec3 focus;
        float bayer4(vec2 p) {
          int x = int(mod(p.x, 4.0));
          int y = int(mod(p.y, 4.0));
          int i = x + y * 4;
          float v = 0.0;
          if (i == 0) v = 0.0; else if (i == 1) v = 8.0; else if (i == 2) v = 2.0; else if (i == 3) v = 10.0;
          else if (i == 4) v = 12.0; else if (i == 5) v = 4.0; else if (i == 6) v = 14.0; else if (i == 7) v = 6.0;
          else if (i == 8) v = 3.0; else if (i == 9) v = 11.0; else if (i == 10) v = 1.0; else if (i == 11) v = 9.0;
          else if (i == 12) v = 15.0; else if (i == 13) v = 7.0; else if (i == 14) v = 13.0; else v = 5.0;
          return v / 16.0;
        }`).replace("#include <dithering_fragment>",`float distHero = distance(vOcc.xz, focus.xz);
         float nearCam = smoothstep(0.0, 6.0, vOcc.z - focus.z);
         float cover = nearCam * (1.0 - smoothstep(4.0, 16.0, distHero));
         if (cover > 0.15 && bayer4(gl_FragCoord.xy) > mix(0.85, 0.15, cover)) discard;
         #include <dithering_fragment>`)},r.customProgramCacheKey=()=>"boss-wall-fade",r.transparent=!0,r.depthWrite=!0,r}new pt;new Ve;const ke=new pt;function Ov(r,e,t){const{c:n,r:i}=Ln(r,e,t);return n<0||i<0||n>=r.cols||i>=r.rows?"#":String.fromCharCode(r.kind[i*r.cols+n])}function zv(r){const e=r.def.id,t=r.cols*r.tile,n=r.rows*r.tile,i=new Vi(t,n,r.cols*2,r.rows*2);i.rotateX(-Math.PI/2);const s=i.attributes.position,a=new Float32Array(s.count*3),o=(r.roadL+r.roadR+1)*r.tile/2-r.cols*r.tile/2,c=new be(e==="ford"?3968824:5154876),l=new be(e==="ford"?3108402:8245080),h=new be(9260836),d=new be(11889204),u=new be(3810322),f=new be(9075048),g=new be(9077112),_=new be(5130564),p=new be(3841732),m=new be(2386738),b=new be;for(let B=0;B<s.count;B++){const F=s.getX(B),V=s.getZ(B),te=Ov(r,F,V);let J=0;if(te==="W")b.copy(p),J=-.28;else if(te==="#"||te==="R")e==="boss"?(b.set(1052180),J=0):(b.copy(_).lerp(g,((Math.floor(F)^Math.floor(V))&3)/3),J=2.6);else if(te==="T")b.copy(m).lerp(l,.2),J=1.6;else if(e==="boss"){const ue=(V+r.rows*r.tile/2)/r.tile;let Y=3947076,ce=3025972;ue>=24&&ue<=34?(Y=6983340,ce=5008520):ue>=12&&ue<=22?(Y=11561534,ce=8800296):ue<=10&&(Y=8150168,ce=5784180);const he=(Math.floor(F/2)+Math.floor(V/2)&1)===0;b.set(he?Y:ce);const Me=Math.abs(F/2-Math.round(F/2)),Ae=Math.abs(V/2-Math.round(V/2));Me<.08||Ae<.08?b.multiplyScalar(.58):b.multiplyScalar(.88+Jn(F*1.6,V*1.6)*.18),J=0}else{const ue=Jn(F*.22,V*.18);b.copy(c).lerp(l,ue*.55);const Y=Math.abs(F-o),he=3.2+(Jn(V*.08,4)-.5)*.6,Me=he+1.55;if(Y<Me&&te!=="T"&&te!=="#"&&te!=="W"){const Ae=Y<=he?1:1-((Y-he)/(Me-he))**2,Je=h.clone().lerp(d,Jn(F*.45,V*.16)),je=Jn(F*1.1,V*.28);je>.8&&Je.lerp(f,.4),je<.07&&Je.lerp(u,.6);const Be=Math.abs(Y-1.05);Be<.14&&Je.lerp(u,(1-Be/.14)*.32),b.lerp(Je,Ae)}J=0}s.setY(B,J),a[B*3]=b.r,a[B*3+1]=b.g,a[B*3+2]=b.b}i.setAttribute("color",new Rt(a,3)),i.computeVertexNormals();const w=new We(i,new Tt({vertexColors:!0,side:2}));w.receiveShadow=!0;const x=new an;if(e==="boss"){const B=new We(new Vi(t+120,n+120),new Tt({color:723216}));B.rotation.x=-Math.PI/2,B.position.y=-.25,x.add(B)}x.add(w);const y=vi(),T=[],C=[],v=[],R=[],D=[];for(let B=0;B<r.rows;B++)for(let F=0;F<r.cols;F++){const V=String.fromCharCode(r.kind[B*r.cols+F]),te=(F+.5)*r.tile-r.cols*r.tile/2,J=(B+.5)*r.tile-r.rows*r.tile/2;V==="T"&&(F+B)%2===0&&T.push({x:te,z:J}),e!=="boss"&&(V==="R"||V==="#"&&(F+B)%3===0)&&C.push({x:te,z:J});const ue=Math.floor((r.roadL+r.roadR)/2);if(V==="D"&&F===ue){const Y=Gv(y);Y.gate.position.set(o,0,J),Y.gate.userData.row=B,Y.gate.userData.baseY=0,Y.gate.userData.mover=Y.bars,x.add(Y.gate),R.push(Y.gate)}else if(V==="G"||V==="B"&&F===ue){const Y=new an,ce=new Et({color:11569746,gradientMap:y});for(const Me of[-.7,-.35,0,.35,.7]){const Ae=new We(new Jt(.12,3.1,.16),ce);Ae.position.set(Me,1.55,0),Y.add(Ae)}const he=new We(new Jt(1.7,.28,.32),ce);he.position.y=3.15,Y.add(he),Y.position.set(V==="G"?te:o,0,J),V==="B"&&(Y.scale.x=3.4),Y.userData.row=B,Y.userData.baseY=0,x.add(Y),V==="B"?D.push(Y):v.push(Y)}}if(T.length){const B=new Ht(new $t(.18,.28,1.5,6),new Et({color:7028004,gradientMap:y}),T.length),F=new Ht(new An(1.15,2.1,7),new Et({color:3115576,gradientMap:y}),T.length);T.forEach((V,te)=>{ke.position.set(V.x,.75,V.z),ke.rotation.set(0,te,0),ke.scale.set(1,1,1),ke.updateMatrix(),B.setMatrixAt(te,ke.matrix),ke.position.set(V.x,2.05,V.z),ke.updateMatrix(),F.setMatrixAt(te,ke.matrix)}),B.instanceMatrix.needsUpdate=!0,F.instanceMatrix.needsUpdate=!0,x.add(B,F)}if(C.length){const B=new Ht(new Jt(1.1,1.3,1.1),new Et({color:10129798,gradientMap:y}),C.length);C.forEach((F,V)=>{ke.position.set(F.x,.7,F.z),ke.rotation.set(0,V*.4,0),ke.scale.set(1,.8+V%3*.2,1),ke.updateMatrix(),B.setMatrixAt(V,ke.matrix)}),B.instanceMatrix.needsUpdate=!0,x.add(B)}const U=new We(new Gs(1.7,.16,8,24),new Tt({color:11766015,transparent:!0,opacity:.9}));U.rotation.x=Math.PI/2,U.position.set(r.goal.x,.35,r.goal.z),U.visible=!1,x.add(U),R.sort((B,F)=>F.userData.row-B.userData.row),R.forEach((B,F)=>{B.userData.index=F}),D.sort((B,F)=>F.userData.row-B.userData.row),D.forEach((B,F)=>{B.userData.index=F}),e!=="boss"?Bv(x,r,o,y):Hv(x,r,y);const H=new We(new $t(.35,.7,14,8,1,!0),new Tt({color:16769162,transparent:!0,opacity:.55,depthWrite:!1,side:2}));return H.position.set(r.goal.x,7,r.goal.z),e!=="boss"&&x.add(H),x.userData={gates:v,doors:R,bars:D,portal:U},x}function Bv(r,e,t,n){const i=e.rows*e.tile/2,s=6.4,a=[],o=[],c=[],l=[];for(let p=-i+2;p<i-2;p+=4)a.push(t-s-.4,p,t+s+.4,p);for(let p=-i+3;p<i-2;p+=8)o.push(t-s-.2,p,t+s+.2,p);for(let p=-i+2;p<i-2;p+=3.4)for(const m of[-1,1])c.push(t+m*(s+2.4),p),c.push(t+m*(s+4.8),p+1.4);for(let p=-i+8;p<i-4;p+=18)l.push(t-s+.6,p,t+s-.6,p);const h=new Ht(new Jt(.7,.45,.7),new Et({color:13156272,gradientMap:n}),a.length/2);for(let p=0;p<a.length;p+=2)ke.position.set(a[p],.28,a[p+1]),ke.rotation.set(0,p,0),ke.scale.set(1,1,1),ke.updateMatrix(),h.setMatrixAt(p/2,ke.matrix);h.instanceMatrix.needsUpdate=!0;const d=new Ht(new $t(.08,.1,1.3,5),new Et({color:7031342,gradientMap:n}),Math.max(1,o.length/2));for(let p=0;p<o.length;p+=2)ke.position.set(o[p],.7,o[p+1]),ke.rotation.set(0,0,0),ke.updateMatrix(),d.setMatrixAt(p/2,ke.matrix);d.instanceMatrix.needsUpdate=!0;const u=c.length/2,f=new Ht(new $t(.22,.34,2.2,6),new Et({color:4860438,gradientMap:n}),u),g=new Ht(new An(1.25,2.8,7),new Et({color:2062898,gradientMap:n}),u);for(let p=0;p<u;p++)ke.position.set(c[p*2],1.1,c[p*2+1]),ke.rotation.set(0,p*.4,0),ke.scale.set(1,.85+p%4*.08,1),ke.updateMatrix(),f.setMatrixAt(p,ke.matrix),ke.position.set(c[p*2],3.1,c[p*2+1]),ke.updateMatrix(),g.setMatrixAt(p,ke.matrix);f.instanceMatrix.needsUpdate=!0,g.instanceMatrix.needsUpdate=!0;const _=new Ht(new An(.18,.45,5),new Tt({color:16756800}),Math.max(1,l.length/2));for(let p=0;p<l.length;p+=2)ke.position.set(l[p],1.15,l[p+1]),ke.rotation.set(0,0,0),ke.scale.set(1,1,1),ke.updateMatrix(),_.setMatrixAt(p/2,ke.matrix);_.instanceMatrix.needsUpdate=!0,r.add(h,d,f,g,_)}function Gv(r){const e=new an,t=new Et({color:7235422,gradientMap:r}),n=new Et({color:2303532,gradientMap:r});for(const a of[-1,1]){const o=new We(new Jt(1.15,3.8,1.25),t);o.position.set(a*5.15,1.9,0),e.add(o)}const i=new We(new Jt(11.6,.72,1.35),t);i.position.y=3.85,e.add(i);const s=new an;for(let a=0;a<8;a++){const o=new We(new Jt(.18,3.35,.22),n);o.position.set(-3.7+a*1.06,1.7,0),s.add(o)}for(const a of[1.15,2.7]){const o=new We(new Jt(8.1,.16,.22),n);o.position.y=a,s.add(o)}return e.add(s),{gate:e,bars:s}}function Hv(r,e,t){const n=[],i=[8304383,16738858,12607743],s=[];for(let l=0;l<e.rows;l++)for(let h=0;h<e.cols;h++){const d=String.fromCharCode(e.kind[l*e.cols+h]);if(d!=="#"&&d!=="R")continue;let u=!1;for(const[_,p]of[[1,0],[-1,0],[0,1],[0,-1]]){const m=h+_,b=l+p;if(m<0||b<0||m>=e.cols||b>=e.rows){u=!0;break}const w=String.fromCharCode(e.kind[b*e.cols+m]);if(w!=="#"&&w!=="R"){u=!0;break}}if(!u)continue;const f=(h+.5)*e.tile-e.cols*e.tile/2,g=(l+.5)*e.tile-e.rows*e.tile/2;s.push({x:f,z:g,sx:e.tile*.98,sz:e.tile*.98})}if(s.length){const l=Uv(new Et({color:3814978,gradientMap:t})),h=new Ht(new Jt(1,1.55,1),l,s.length);s.forEach((d,u)=>{ke.position.set(d.x,.78,d.z),ke.rotation.set(0,0,0),ke.scale.set(d.sx,1,d.sz),ke.updateMatrix(),h.setMatrixAt(u,ke.matrix)}),h.instanceMatrix.needsUpdate=!0,r.add(h)}e.rooms.forEach((l,h)=>{const d=(l.r0+.5)*e.tile-e.rows*e.tile/2,u=(l.r1+.5)*e.tile-e.rows*e.tile/2,f=1.5*e.tile-e.cols*e.tile/2,g=(e.cols-2.5)*e.tile-e.cols*e.tile/2;n.push(f,d,g,d,f,u,g,u);const _=new Na(i[h]??16764040,6,36,1.6);_.position.set(0,5.2,(d+u)/2);const p=new Na(16749376,3.2,16,2);p.position.set(-6,2.2,(d+u)/2);const m=p.clone();m.position.x=6,r.add(_,p,m)});const a=new Ht(new $t(.45,.55,3.2,6),new Et({color:10129798,gradientMap:t}),Math.max(1,n.length/2));for(let l=0;l<n.length;l+=2)ke.position.set(n[l],1.6,n[l+1]),ke.rotation.set(0,0,0),ke.scale.set(1,1,1),ke.updateMatrix(),a.setMatrixAt(l/2,ke.matrix);a.instanceMatrix.needsUpdate=!0;const o=new Ht(new $t(.62,.78,.7,7),new Et({color:4866104,gradientMap:t}),e.rooms.length*2),c=new Ht(new An(.32,.85,6),new Tt({color:16756800}),e.rooms.length*2);e.rooms.forEach((l,h)=>{const d=((l.r0+l.r1)/2+.5)*e.tile-e.rows*e.tile/2;for(const u of[-1,1]){const f=h*2+(u<0?0:1);ke.position.set(u*5.4,.4,d),ke.rotation.set(0,0,0),ke.scale.set(1,1,1),ke.updateMatrix(),o.setMatrixAt(f,ke.matrix),ke.position.set(u*5.4,1.15,d),ke.updateMatrix(),c.setMatrixAt(f,ke.matrix)}}),o.instanceMatrix.needsUpdate=!0,c.instanceMatrix.needsUpdate=!0,r.add(a,o,c)}const mi=new pt,ca={orb:new nn(.42,8,6),box:new Jt(.62,.48,.5),gem:new Bs(.4,0),disc:new Gs(.32,.1,6,12)};class Vv{ground;skirt;trunk;canopy;canopyB;rock;tuft;flower;flowerB;ruin;shrines=[];picks=[];scene;mapRoot=null;dressed=!1;seed=1;constructor(e){this.scene=e,this.skirt=new We(new Vi(2400,2400),new Et({color:6535242,gradientMap:vi()})),this.skirt.rotation.x=-Math.PI/2,this.skirt.position.y=-.04,this.skirt.receiveShadow=!0,e.add(this.skirt),this.ground=Wv(),e.add(this.ground);const t=vi(),n=(s,a=0)=>Fv(new Et({color:s,gradientMap:t,emissive:s,emissiveIntensity:a}));this.trunk=this.pool(new $t(.18,.3,1.6,6),n(7028004,.04),320,e),this.canopy=this.pool(new An(1.15,2.05,7),n(3115576,.08),320,e),this.canopyB=this.pool(new An(.85,1.35,6),n(5746762,.1),320,e),this.rock=this.pool(new nn(.7,7,5),n(13352872,.05),160,e),this.tuft=this.pool(new An(.16,.55,5),n(4168252,.08),520,e),this.flower=this.pool(new An(.14,.42,5),n(15909198,.28),220,e),this.flowerB=this.pool(new An(.12,.36,5),n(15764144,.24),220,e),this.ruin=this.pool(new $t(.28,.36,1.15,6),n(14996400,.06),160,e);for(let s=0;s<4;s++)this.shrines.push(this.makeShrine(e));for(let s=0;s<8;s++){const a=new We(new nn(.38,8,6),new Tt({color:16777215}));a.visible=!1,e.add(a),this.picks.push(a)}const i=new We(new Gs(3.2,.08,6,24),new Tt({color:14991994,transparent:!0,opacity:.55}));i.rotation.x=Math.PI/2,i.position.y=.05,e.add(i)}pool(e,t,n,i){const s=new Ht(e,t,n);return s.count=0,s.frustumCulled=!1,i.add(s),s}useMap(e){this.mapRoot&&(this.scene.remove(this.mapRoot),this.mapRoot=null),e&&(this.mapRoot=zv(e),this.scene.add(this.mapRoot))}syncStage(e,t,n,i=0,s=[]){const a=this.mapRoot?.userData;if(!a)return;const o=(c,l)=>{const h=c.userData.baseY??0;c.position.y=l?h+3.4:h};for(const c of a.gates??[])o(c,e);for(const c of a.doors??[]){const l=c.userData.index??0,h=c.userData.mover??c,d=s[l]??(l<t?1:0);h.position.y=d*3.6}for(const c of a.bars??[])o(c,c.userData.index<i);a.portal&&(a.portal.visible=n)}setRun(e){this.seed===e&&this.dressed||(this.seed=e,this.dressed=!1)}makeShrine(e){const t=new an,n=new Et({color:14273460,gradientMap:vi()}),i=new We(new $t(1.55,1.7,.28,8),n);i.position.y=.14;const s=new We(new $t(.72,.86,.9,7),n);s.position.y=.62;const a=new We(new $t(.16,.2,1.7,6),n);a.position.set(-.85,1.15,0);const o=a.clone();o.position.x=.85;const c=new We(new Jt(2.05,.22,.38),n);c.position.y=2.05;const l=new Tt({color:14991994,transparent:!0,opacity:.9,blending:ei,side:rn,depthWrite:!1}),h=new We(new Gs(1.15,.045,6,24),l);h.rotation.x=Math.PI/2,h.position.y=.36;const d=new Tt({color:16773570,transparent:!0,opacity:.95,blending:ei,depthWrite:!1}),u=new We(new Bs(.28,0),d);u.position.y=1.35;const f=new Tt({color:16774864,transparent:!0,opacity:.22,blending:ei,side:rn,depthWrite:!1}),g=new We(new $t(.18,.55,3.4,8,1,!0),f);return g.position.y=2.5,t.add(i,s,a,o,c,h,u,g),t.visible=!1,t.userData={rune:h,crystal:u,beam:g,runeMat:l,crystalMat:d,beamMat:f},e.add(t),t}hide(){for(const e of[this.trunk,this.canopy,this.canopyB,this.rock,this.tuft,this.flower,this.flowerB,this.ruin])e.count=0;this.mapRoot&&(this.mapRoot.visible=!1),this.ground.visible=!0,this.skirt.visible=!0;for(const e of this.shrines)e.visible=!1;for(const e of this.picks)e.visible=!1}update(e,t,n,i,s,a){if(!a){this.hide();return}if(this.mapRoot){this.mapRoot.visible=!0,this.ground.visible=!1,this.skirt.visible=!1;const l=this.mapRoot.userData.water;l&&(l.uniforms.time.value+=s);const h=this.mapRoot.userData.fireflies,d=this.mapRoot.userData.moteBase;if(h&&d){const u=performance.now()/1e3,f=this.mapRoot.userData.moteCount??d.length/3;for(let g=0;g<f;g++)mi.position.set(d[g*3]+Math.sin(u+g)*.35,d[g*3+1]+Math.sin(u*1.4+g)*.25,d[g*3+2]+Math.cos(u*.8+g)*.35),mi.scale.setScalar(.12),mi.updateMatrix(),h.setMatrixAt(g,mi.matrix);h.instanceMatrix.needsUpdate=!0}for(const u of[this.trunk,this.canopy,this.canopyB,this.rock,this.tuft,this.flower,this.flowerB,this.ruin])u.count=0}else this.ground.visible=!0,this.skirt.visible=!0,this.dressed||(this.dressed=!0,this.dress());const o=performance.now()/1e3;n.forEach((l,h)=>{const d=this.shrines[h];if(!d||(d.visible=l.alive&&!l.used,!d.visible))return;d.position.set(l.x,0,l.z);const u=va[l.blessing],f=d.userData.rune,g=d.userData.crystal,_=d.userData.beam;d.userData.runeMat.color.set(u),d.userData.crystalMat.color.set(u),d.userData.beamMat.color.set(u),d.userData.beamMat.opacity=.16+l.channel*.45,f.rotation.z+=s*(.8+l.channel*3),g.position.y=1.28+Math.sin(o*2+h)*.12+l.channel*.25,g.rotation.y+=s*1.4;const p=1+l.channel*.45+Math.sin(o*3)*.04;g.scale.setScalar(p),_.scale.set(.7+l.channel,1+l.channel*.3,.7+l.channel)});for(let l=n.length;l<this.shrines.length;l++)this.shrines[l].visible=!1;const c={bomb:{color:16773570,geo:"orb"},magnet:{color:8308991,geo:"disc"},freeze:{color:14152959,geo:"gem"},potion:{color:9306010,geo:"orb"},guard:{color:16769162,geo:"gem"},chest:{color:16766314,geo:"box"},chicken:{color:16747098,geo:"orb"},rage:{color:16734794,geo:"gem"},boots:{color:13170080,geo:"box"},clover:{color:4050538,geo:"disc"},holy:{color:16774850,geo:"gem"},vacuum:{color:11766015,geo:"orb"}};i.forEach((l,h)=>{const d=this.picks[h];if(!d||(d.visible=l.alive,!l.alive))return;const u=c[l.kind],f=u.geo==="box"?ca.box:u.geo==="gem"?ca.gem:u.geo==="disc"?ca.disc:ca.orb;d.geometry!==f&&(d.geometry=f),d.position.set(l.x,.85+Math.sin(o*3+h)*.14,l.z),d.rotation.y+=s,d.material.color.set(u.color)});for(let l=i.length;l<this.picks.length;l++)this.picks[l].visible=!1}dress(){let e=0,t=0,n=0,i=0,s=0,a=0;const o=(c,l,h,d,u,f,g,_,p=0)=>{mi.position.set(h,d,u),mi.rotation.set(0,p,0),mi.scale.set(f,g,_),mi.updateMatrix(),c.setMatrixAt(l,mi.matrix)};for(const c of Hc(this.seed)){const l=(c.x*.7+c.z*.4)%6,h=.82+Math.abs(Math.floor(c.x*3+c.z))%6*.06;if(c.kind==="tree"&&e<300){const d=1.05+Math.abs(Math.floor(c.x*5))%5*.14,u=e%3===0;o(this.trunk,e,c.x,.8*d,c.z,h,d,h,l),o(this.canopy,e,c.x,(u?1.35:1.7)*d,c.z,h*(u?1.45:1.05),d*(u?.72:1),h*(u?1.45:1.05),l),o(this.canopyB,e,c.x,(u?2.05:2.35)*d,c.z,h*(u?1.05:.72),d*.62,h*(u?1.05:.72),l),e++}else if(c.kind==="rock"&&t<150)o(this.rock,t,c.x,.38*h,c.z,h*1.15,h*.7,h*1.05,l),t++;else if(c.kind==="ruin"&&a<150)o(this.ruin,a,c.x,.55,c.z,h,.85+h*.4,h,l),a++;else if(c.kind==="tuft"&&n<500)o(this.tuft,n,c.x,.18,c.z,h,.7+h*.4,h,l),n++;else if(c.kind==="flower"){const d=i<=s?this.flower:this.flowerB,u=i<=s?i:s;u<200&&(o(d,u,c.x,.22,c.z,1.4,1.3,1.4,l),i<=s?i++:s++)}}this.trunk.count=e,this.canopy.count=e,this.canopyB.count=e,this.rock.count=t,this.tuft.count=n,this.flower.count=i,this.flowerB.count=s,this.ruin.count=a;for(const c of[this.trunk,this.canopy,this.canopyB,this.rock,this.tuft,this.flower,this.flowerB,this.ruin])c.instanceMatrix.needsUpdate=!0}}function Wv(){const r=new Vi(200,200,140,140);r.rotateX(-Math.PI/2);const e=r.attributes.position,t=new Float32Array(e.count*3),n=new be(5156412),i=new be(8837212),s=new be(3971636),a=new be(14206112),o=new be(10912853),c=new be;for(let h=0;h<e.count;h++){const d=e.getX(h),u=e.getZ(h),f=Jn(d*.08,u*.08);c.copy(n).lerp(i,f).lerp(s,Jn(d*.03,u*.03)*.28);const g=hr(d,u);g>0&&c.lerp(a.clone().lerp(o,Jn(d*.4,u*.4)*.45),g*(.55+.45*(1-g)));const _=Math.min(1,Math.max(0,(Math.hypot(d,u)-78)/22));_>0&&c.lerp(i,_*.35),t[h*3]=c.r,t[h*3+1]=c.g,t[h*3+2]=c.b}r.setAttribute("color",new Rt(t,3)),r.computeVertexNormals();const l=new We(r,new Et({vertexColors:!0,gradientMap:vi()}));return l.receiveShadow=!0,l}const cr=new z;function yn(r,e,t,n,i,s){const a=2*Math.PI*i/4,o=Math.max(s-2*i,0),c=Math.PI/4;cr.copy(e),cr[n]=0,cr.normalize();const l=.5*a/(a+o),h=1-cr.angleTo(r)/c;return Math.sign(cr[t])===1?h*l:o/(a+o)+l+l*(1-h)}class Fi extends Jt{constructor(e=1,t=1,n=1,i=2,s=.1){const a=i*2+1;if(s=Math.min(e/2,t/2,n/2,s),super(1,1,1,a,a,a),this.type="RoundedBoxGeometry",this.parameters={width:e,height:t,depth:n,segments:i,radius:s},a===1)return;const o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;const c=new z,l=new z,h=new z(e,t,n).divideScalar(2).subScalar(s),d=this.attributes.position.array,u=this.attributes.normal.array,f=this.attributes.uv.array,g=d.length/6,_=new z,p=.5/a;for(let m=0,b=0;m<d.length;m+=3,b+=2)switch(c.fromArray(d,m),l.copy(c),l.x-=Math.sign(l.x)*p,l.y-=Math.sign(l.y)*p,l.z-=Math.sign(l.z)*p,l.normalize(),d[m+0]=h.x*Math.sign(c.x)+l.x*s,d[m+1]=h.y*Math.sign(c.y)+l.y*s,d[m+2]=h.z*Math.sign(c.z)+l.z*s,u[m+0]=l.x,u[m+1]=l.y,u[m+2]=l.z,Math.floor(m/g)){case 0:_.set(1,0,0),f[b+0]=yn(_,l,"z","y",s,n),f[b+1]=1-yn(_,l,"y","z",s,t);break;case 1:_.set(-1,0,0),f[b+0]=1-yn(_,l,"z","y",s,n),f[b+1]=1-yn(_,l,"y","z",s,t);break;case 2:_.set(0,1,0),f[b+0]=1-yn(_,l,"x","z",s,e),f[b+1]=yn(_,l,"z","x",s,n);break;case 3:_.set(0,-1,0),f[b+0]=1-yn(_,l,"x","z",s,e),f[b+1]=1-yn(_,l,"z","x",s,n);break;case 4:_.set(0,0,1),f[b+0]=1-yn(_,l,"x","y",s,e),f[b+1]=1-yn(_,l,"y","x",s,t);break;case 5:_.set(0,0,-1),f[b+0]=yn(_,l,"x","y",s,e),f[b+1]=1-yn(_,l,"y","x",s,t);break}}static fromJSON(e){return new Fi(e.width,e.height,e.depth,e.segments,e.radius)}}function qv(r){r.updateMatrixWorld(!0);const e=[];r.traverse(n=>{const i=n;if(!i.isMesh)return;const s=i.geometry.index?i.geometry.toNonIndexed():i.geometry.clone();s.applyMatrix4(i.matrixWorld);for(const d of Object.keys(s.attributes))d!=="position"&&s.deleteAttribute(d);const a=s.getAttribute("position"),o=new Float32Array(a.count*3),c=Array.isArray(i.material)?i.material[0]:i.material,l=new be(1,1,1);c?.emissive&&(c.emissiveIntensity??0)>.45&&c.emissive.r+c.emissive.g+c.emissive.b>.08?l.copy(c.emissive):c?.color&&l.copy(c.color);for(let d=0;d<a.count;d++)o[d*3]=l.r,o[d*3+1]=l.g,o[d*3+2]=l.b;s.setAttribute("color",new Rt(o,3)),e.push(s)});const t=W_(e,!1);for(const n of e)n.dispose();if(!t){const n=new Ct;return n.setAttribute("position",new mt([0,0,0,0,1,0,1,0,0],3)),n.setAttribute("color",new mt([1,1,1,1,1,1,1,1,1],3)),n}return t.computeVertexNormals(),t}function Xv(r,e){r.computeBoundingBox();const t=r.boundingBox;if(!t)return r;const n=t.max.y-t.min.y||1,i=e/n,s=(t.min.x+t.max.x)/2,a=(t.min.z+t.max.z)/2;return r.translate(-s,-t.min.y,-a),r.scale(i,i,i),r}const Kv={slime:{kind:"slime",color:13038173,eye:1192714,scale:1.35},wolf:{kind:"wolf",color:7033668,eye:16769162,scale:1.45},goblin:{kind:"goblin",color:8244842,eye:16774048,scale:1.4},knight:{kind:"knight",color:9147303,eye:16724821,scale:1.55},wraith:{kind:"wraith",color:7166928,eye:10156031,scale:1.5},golem:{kind:"golem",color:8029332,eye:16756768,scale:1.7},drake:{kind:"drake",color:12730669,eye:16769162,scale:1.55}},_l=()=>vi(),Oo=r=>new Et({color:r,gradientMap:_l()}),Kn=(r,e=1.6)=>new Et({color:r,emissive:r,emissiveIntensity:e,gradientMap:_l()}),Gt=(r,e=12,t=8)=>new nn(r,e,t),la=(r,e,t)=>new Jt(r,e,t),En=(r,e,t=7)=>new An(r,e,t),Ii=(r,e,t,n=8)=>new $t(r,e,t,n);function Fe(r,e,t,n,i,s){const a=new We(r,e);return a.position.set(t,n,i),s.add(a),a}function jv(r){const e=Kv[r],t=new an,n=new an;t.add(n);const i=e.scale*.8;n.scale.setScalar(i);const s=Oo(e.color),a=new Et({color:e.color,gradientMap:_l()});a.color.lerp(a.color.clone().set("#ffffff"),.38);const o=Oo(e.color);o.color.multiplyScalar(.45);const c=Kn(e.eye,1.7);if(e.kind==="slime"){Fe(Gt(.56,14,10),s,0,.44,0,n).scale.set(1.15,.84,1.1);for(const h of[-.18,.18])Fe(Gt(.085,8,6),c,h,.54,.48,n),Fe(Gt(.06,6,6),Kn(16739211,1.2),h*1.6,.44,.45,n);Fe(Ii(.035,.05,.25,6),s,0,.92,0,n),Fe(Gt(.11,8,6),Kn(16777215,1.4),0,1.08,0,n)}else if(e.kind==="wolf"){Fe(Gt(.38,12,8),s,0,.56,0,n).scale.set(.95,.85,1.6),Fe(Gt(.32,10,8),a,0,.62,.32,n),Fe(Gt(.27,10,8),s,0,.82,.52,n).scale.set(1,.92,1.15),Fe(Gt(.14,8,6),a,0,.76,.76,n).scale.set(.9,.75,1.4),Fe(Gt(.055,6,6),o,0,.8,.94,n);for(const u of[-.14,.14])Fe(En(.09,.26,5),o,u,1.08,.46,n),Fe(Gt(.055,6,6),c,u*.85,.86,.72,n);for(let u=0;u<3;u++){const f=Fe(En(.07,.24,5),a,0,.92-u*.04,.22-u*.22,n);f.rotation.x=-.45}const d=Fe(En(.11,.52,6),s,0,.68,-.68,n);d.rotation.x=-Math.PI/2-.4;for(const[u,f]of[[-.18,.34],[.18,.34],[-.18,-.34],[.18,-.34]])Fe(Ii(.065,.05,.44,6),o,u,.24,f,n)}else if(e.kind==="goblin"){Fe(Ii(.24,.3,.52,8),o,0,.46,0,n);const l=Fe(En(.34,.55,7),Oo(3868516),0,.48,-.14,n);l.rotation.x=.25,Fe(Gt(.33,12,8),s,0,.92,.04,n);for(const h of[-1,1]){const d=Fe(En(.095,.38,5),s,h*.38,.94,0,n);d.rotation.z=-h*1.15,Fe(Gt(.06,6,6),c,h*.13,.94,.3,n);const u=Fe(En(.055,.42,4),Kn(3718648,1.3),h*.34,.52,.28,n);u.rotation.x=Math.PI/2,Fe(Ii(.075,.06,.36,6),o,h*.13,.18,0,n)}}else if(e.kind==="knight"){Fe(new Fi(.58,.66,.44,2,.06),s,0,.64,0,n);for(const h of[-.36,.36])Fe(Gt(.16,8,6),a,h,.88,0,n);Fe(Ii(.27,.29,.4,8),o,0,1.16,0,n),Fe(la(.4,.085,.14),c,0,1.17,.25,n);const l=Fe(En(.14,.42,6),Kn(16731501,1.2),0,1.5,-.06,n);l.rotation.x=-.3,Fe(new Fi(.12,.64,.5,2,.04),a,-.4,.64,.14,n),Fe(la(.09,.78,.14),Kn(3718648,1.4),.4,.8,.28,n);for(const h of[-.15,.15])Fe(Ii(.095,.085,.4,6),o,h,.2,0,n)}else if(e.kind==="wraith"){const l=Fe(En(.54,1.28,10),s,0,.74,0,n);l.scale.z=.88,Fe(Gt(.3,10,8),o,0,1.3,.06,n);const h=Fe(En(.34,.42,7),s,0,1.54,-.04,n);h.rotation.x=-.25;for(const f of[-.11,.11])Fe(Gt(.06,6,6),c,f,1.3,.32,n);const d=Fe(Ii(.03,.03,1.45,6),o,.44,.85,.18,n);d.rotation.z=-.15;const u=Fe(En(.14,.68,4),Kn(6740456,1.6),.22,1.48,.28,n);u.rotation.z=Math.PI/2+.25}else if(e.kind==="golem"){Fe(new Fi(.86,.86,.66,2,.08),s,0,.8,0,n),Fe(new Bs(.22,0),c,0,.84,.32,n),Fe(new Fi(.48,.4,.44,2,.05),o,0,1.36,.08,n),Fe(la(.34,.095,.12),c,0,1.38,.29,n);for(const l of[-1,1]){const h=Fe(new Bs(.22,0),Kn(16749099,1.4),l*.48,1.28,0,n);h.scale.y=1.6,Fe(new Fi(.3,.72,.3,2,.05),o,l*.6,.74,.08,n),Fe(new Fi(.28,.46,.3,2,.04),o,l*.25,.24,0,n)}}else{Fe(Gt(.52,12,8),s,0,.7,0,n).scale.set(.98,.92,1.5),Fe(Gt(.36,10,8),a,0,.68,.38,n),Fe(Gt(.34,10,8),s,0,1.12,.56,n);const h=Fe(En(.18,.75,6),s,0,.62,-.78,n);h.rotation.x=-Math.PI/2-.2;for(const d of[-1,1]){Fe(En(.085,.36,5),Kn(16766011,1.3),d*.22,1.4,.44,n),Fe(Gt(.06,6,6),c,d*.15,1.16,.82,n);const u=Fe(la(.88,.06,.52),Kn(16749099,1.2),d*.64,.98,-.05,n);u.rotation.z=d*.35,Fe(Ii(.11,.095,.44,6),o,d*.25,.22,.1,n)}}return t}const Yv={slime:1.45,wolf:1.55,goblin:1.6,knight:1.9,wraith:2.05,golem:2.25,drake:1.85},cd=new Map;function Jv(r){const e=cd.get(r);if(e)return e;const t=jv(r),n=Xv(qv(t),Yv[r]);return t.traverse(i=>{const s=i;if(!s.isMesh)return;s.geometry.dispose();const a=s.material;Array.isArray(a)?a.forEach(o=>o.dispose()):a.dispose()}),cd.set(r,n),n}function $v(){const r=document.createElement("canvas");r.width=r.height=64;const e=r.getContext("2d"),t=e.createRadialGradient(32,32,0,32,32,32);return t.addColorStop(0,"#fff"),t.addColorStop(.35,"rgba(255,255,255,0.75)"),t.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=t,e.fillRect(0,0,64,64),new nm(r)}class Zv{constructor(e){this.scene=e;const t=300;this.pos=new Float32Array(t*3).fill(-999),this.col=new Float32Array(t*3);const n=new Ct;n.setAttribute("position",new Rt(this.pos,3)),n.setAttribute("color",new Rt(this.col,3));const i=new fl({size:.42,map:$v(),vertexColors:!0,transparent:!0,depthWrite:!1,blending:ei});this.points=new $d(n,i),this.points.frustumCulled=!1,e.add(this.points)}points;pos;col;vel=new Float32Array(900);life=new Float32Array(300);max=new Float32Array(300);grav=new Float32Array(300);cursor=0;rings=[];ringGeo=new Lr(.82,1,40);burst(e,t,n,i,s,a=4){const o=new be(s);for(let c=0;c<i;c++){const l=this.cursor;this.cursor=(this.cursor+1)%this.life.length;const h=l*3;this.pos[h]=e+(Math.random()-.5)*.4,this.pos[h+1]=t,this.pos[h+2]=n+(Math.random()-.5)*.4;const d=Math.random()*Math.PI*2,u=.2+Math.random()*.8,f=(.35+Math.random()*.65)*a;this.vel[h]=Math.cos(d)*f,this.vel[h+1]=u*f,this.vel[h+2]=Math.sin(d)*f,this.life[l]=this.max[l]=.35+Math.random()*.35,this.grav[l]=-8,this.col[h]=o.r,this.col[h+1]=o.g,this.col[h+2]=o.b}}ring(e,t,n,i,s=.38){if(this.rings.length>16){const o=this.rings.shift();o&&(this.scene.remove(o.mesh),o.mesh.material.dispose())}const a=new We(this.ringGeo,new Tt({color:i,transparent:!0,opacity:.85,side:rn,depthWrite:!1,blending:ei,depthTest:!1}));a.rotation.x=-Math.PI/2,a.position.set(e,.12,t),a.scale.setScalar(.2),this.scene.add(a),this.rings.push({mesh:a,t:0,dur:s,r:n})}update(e){for(let i=0;i<this.life.length;i++){if(this.life[i]<=0)continue;const s=i*3;if(this.life[i]=(this.life[i]??0)-e,this.life[i]<=0){this.pos[s+1]=-999;continue}this.vel[s+1]=(this.vel[s+1]??0)+(this.grav[i]??0)*e,this.pos[s]=(this.pos[s]??0)+(this.vel[s]??0)*e,this.pos[s+1]=(this.pos[s+1]??0)+(this.vel[s+1]??0)*e,this.pos[s+2]=(this.pos[s+2]??0)+(this.vel[s+2]??0)*e;const a=(this.life[i]??0)/(this.max[i]||1);this.col[s]=(this.col[s]??1)*.92+a*.08}const t=this.points.geometry.getAttribute("position"),n=this.points.geometry.getAttribute("color");t.needsUpdate=!0,n.needsUpdate=!0;for(let i=this.rings.length-1;i>=0;i--){const s=this.rings[i];s.t+=e;const a=s.t/s.dur;s.mesh.scale.setScalar(.25+a*s.r);const o=s.mesh.material;o.opacity=(1-a)*.85,a>=1&&(this.scene.remove(s.mesh),o.dispose(),this.rings.splice(i,1))}}}const Oi={theta:.22,phi:.9};function Qv(r,e){const t=-Math.sin(Oi.theta),n=-Math.cos(Oi.theta),i=Math.cos(Oi.theta),s=-Math.sin(Oi.theta);return{x:r*i+e*t,z:r*s+e*n}}const ld=["archer_meshy","mage_meshy","warrior_meshy","rose_rifle_meshy","rose_rifle_gun","seoyun_meshy","lich_meshy","sk_minion","sk_rogue","sk_warrior","sk_mage"],vl=["slime","wolf","goblin","knight","wraith","golem","drake"],Ml=["skel_minion","skel_rogue","skel_warrior","skel_mage"],eM={skel_minion:"sk_minion",skel_rogue:"sk_rogue",skel_warrior:"sk_warrior",skel_mage:"sk_mage"},tM={skel_minion:16052198,skel_rogue:15193008,skel_warrior:15783384,skel_mage:14537983},hd=[...vl,"wisp",...Ml],nM={slime:1,wolf:1,goblin:1,knight:1,wraith:1,wisp:.72,golem:1,drake:1,skel_minion:1,skel_rogue:1,skel_warrior:1,skel_mage:1},iM={wisp:10153727};function sM(r){return r==="wisp"?"wisp":r==="goblin_archer"?"goblin":Ml.includes(r)||vl.includes(r)?r:"knight"}class rM{renderer;scene=new Bp;camera;sun;field;vfx;camLook=new z;camReady=!1;heroes=new Map;elite=null;boss=null;bossMotes=[];pinged=new WeakSet;heroRing;hordes=new Map;dummy=new pt;gemMesh;shotMesh;orbit;shakeOn=!0;mode="title";focus=null;clock=0;shake=0;hurt=0;shotSeen=-1;shownMap="";look=new z;skyMat;xrayHorde=null;constructor(e){const t=matchMedia("(pointer: coarse)").matches;this.renderer=new V_({antialias:!0,powerPreference:"high-performance"}),this.renderer.setPixelRatio(Math.min(devicePixelRatio||1,t?1.35:1.6)),this.renderer.setSize(e.clientWidth||innerWidth,e.clientHeight||innerHeight),this.renderer.outputColorSpace=Yt,this.renderer.toneMapping=Yc,this.renderer.toneMappingExposure=1.05,this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=br,e.appendChild(this.renderer.domElement),this.scene.fog=new cl(1779748,22,58),this.camera=new dn(t?48:40,1,.4,220);const n={top:{value:new be(2768213)},bot:{value:new be(7244386)}};this.skyMat=new Gn({uniforms:n,side:1,depthWrite:!1,fog:!1,vertexShader:"varying vec3 vP; void main(){ vP = (modelMatrix*vec4(position,1.)).xyz; gl_Position = projectionMatrix*viewMatrix*vec4(vP,1.); }",fragmentShader:"uniform vec3 top; uniform vec3 bot; varying vec3 vP; void main(){ float h = clamp(normalize(vP).y*1.6+.05,0.,1.); gl_FragColor = vec4(mix(bot,top,h),1.); }"}),this.scene.add(new We(new nn(140,24,12),this.skyMat)),this.scene.add(new wm(16773596,5139008,1.15)),this.sun=new Dc(16770992,2.15),this.sun.castShadow=!0,this.sun.shadow.mapSize.set(1024,1024),this.sun.shadow.camera.near=2,this.sun.shadow.camera.far=70,this.sun.shadow.camera.left=-16,this.sun.shadow.camera.right=16,this.sun.shadow.camera.top=16,this.sun.shadow.camera.bottom=-16,this.sun.shadow.bias=-4e-4,this.scene.add(this.sun,this.sun.target);const i=new Dc(10406911,.7);i.position.set(-8,6,-10),this.scene.add(i),this.field=new Vv(this.scene),this.vfx=new Zv(this.scene),this.heroRing=new We(new Lr(.85,1.28,32),new Tt({color:16770976,transparent:!0,opacity:.95,depthWrite:!1,depthTest:!1,side:rn})),this.heroRing.rotation.x=-Math.PI/2,this.heroRing.renderOrder=40,this.heroRing.visible=!1,this.scene.add(this.heroRing);const s=vi(),a=new Ht(new nn(.22,8,6),new Et({color:16766314,emissive:16756768,emissiveIntensity:.7,gradientMap:s}),200);a.count=0,a.frustumCulled=!1,this.gemMesh=a,this.scene.add(a);const o=c=>new Et({color:c,emissive:c,emissiveIntensity:1.1,gradientMap:s});this.shotMesh={arrow:this.makeShot(new nn(.12,6,4).scale(1,1,3.2),o(15783818)),bullet:this.makeShot(new nn(.1,6,4).scale(1,1,2.4),o(16770984)),bolt:this.makeShot(new nn(.28,8,6),o(13215487)),fire:this.makeShot(new nn(.42,8,6),o(16742970)),ice:this.makeShot(new nn(.16,6,4).scale(1,1,2.2),o(14153471)),cross:this.makeShot(new nn(.22,6,4),o(16770976))},this.orbit=new Ht(new nn(.16,6,5),o(10147839),16),this.orbit.count=0,this.orbit.frustumCulled=!1,this.scene.add(this.orbit),this.resize()}makeShot(e,t){const n=new Ht(e,t,140);return n.count=0,n.frustumCulled=!1,this.scene.add(n),n}async load(e){const t=new q_;await rd.ready,t.setMeshoptDecoder(rd);const n="./",i=new Map;let s=0;for(const p of ld)e(s/(ld.length+2),p.replaceAll("_"," ")),i.set(p,await t.loadAsync(`${n}models/${p}.glb`)),s+=1;e(.82,"무리 굽기");for(const p of["archer_meshy","mage_meshy","warrior_meshy","rose_rifle_meshy","seoyun_meshy","lich_meshy"]){const m=i.get(p);m&&Rv(p,m.animations)}const a=i.get("rose_rifle_gun").scene;for(const p of zi){const m=As[p],b=i.get(m.model),w=Fo(b,Iv,{hero:p,aim:Pv[p],gun:p==="rose"?a:void 0});this.scene.add(w.group),this.heroes.set(p,w)}const o=i.get("warrior_meshy");this.elite=Fo(o,3.15,{tint:7223874}),this.elite.group.visible=!1,this.scene.add(this.elite.group);const c=i.get("lich_meshy");this.boss=Fo(c,6.8,{tint:14993151});for(const p of this.boss.mats)p.emissive.set(11815935),p.emissiveIntensity=.85;const l=new We(new Lr(2.3,3.5,40),new Tt({color:12868607,transparent:!0,opacity:.72,depthWrite:!1,depthTest:!1,blending:ei,side:rn}));l.rotation.x=-Math.PI/2,l.position.y=.35,l.renderOrder=12;const h=new We(new $t(.28,.7,8,12,1,!0),new Tt({color:11815935,transparent:!0,opacity:.38,depthWrite:!1,depthTest:!1,blending:ei,side:rn}));h.position.y=5,h.renderOrder=12;const d=new Tt({color:14262527,transparent:!0,opacity:.75,depthWrite:!1,depthTest:!1,blending:ei}),u=new nn(.16,6,5);this.bossMotes=[];for(let p=0;p<10;p++){const m=new We(u,d);m.renderOrder=13,this.boss.group.add(m),this.bossMotes.push(m)}const f=new Na(14721279,8,26,2);f.position.y=4,this.boss.group.add(l,h,f),this.boss.group.visible=!1,this.scene.add(this.boss.group);const g=vi();for(const p of vl){const m=Jv(p),b=new Ht(m,new Et({vertexColors:!0,gradientMap:g}),300);b.count=0,b.frustumCulled=!1,this.scene.add(b),this.hordes.set(p,{mesh:b,frame:0,tint:new be(iM[p]??16777215)})}this.hordes.set("wisp",{mesh:this.hordes.get("wraith").mesh,frame:0,tint:new be(10153727)});const _=i.get("sk_minion").animations.find(p=>/walk/i.test(p.name))??null;for(const p of Ml){const m=i.get(eM[p]).scene;m.traverse(y=>{const T=y;if(!T.isMesh)return;const C=T.material,v=C.color?C.color.clone():new be(16777215);v.multiply(new be(tM[p]));const R=new Et({map:C.map??null,color:v,gradientMap:g});/eye/i.test(T.name)&&(R.emissive.set(10154239),R.emissiveIntensity=1.15),T.material=R});const b=Nv(m,_,4);kv(b.frames,2.05);const w=b.frames[0],x=new Ht(w,b.materials.length===1?b.materials[0]:b.materials,300);x.count=0,x.frustumCulled=!1,this.scene.add(x),this.hordes.set(p,{mesh:x,frames:b.frames,frame:0,tint:new be(16777215)})}e(1,"준비됨")}resize(){const e=this.renderer.domElement.parentElement,t=e?.clientWidth||innerWidth,n=e?.clientHeight||innerHeight;this.camera.aspect=t/Math.max(1,n);const i=n>t;this.camera.fov=i?54:40,this.camera.updateProjectionMatrix(),this.renderer.setSize(t,n)}setShake(e){this.shakeOn=e,e||(this.shake=0)}setMode(e,t){this.mode=e,this.focus=t}project(e,t,n){const i=new z(e,t,n).project(this.camera),s=this.renderer.domElement.clientWidth,a=this.renderer.domElement.clientHeight;return{x:(i.x*.5+.5)*s,y:(-i.y*.5+.5)*a,ok:i.z<1}}render(e,t,n){this.clock+=e,this.shake=Math.max(0,this.shake-e*2.4),this.hurt=Math.max(0,this.hurt-e);for(const p of n){if(p.kind==="hurt"&&(this.hurt=.16),this.shakeOn&&(p.kind==="slam"||p.kind==="boom"||p.kind==="hurt")&&(this.shake=Math.max(this.shake,p.kind==="hurt"?.12:.28)),(p.kind==="slash"||p.kind==="slam")&&this.vfx.ring(p.x,p.z,p.r??2.4,p.kind==="slam"?16762218:16773586),(p.kind==="boom"||p.kind==="cast")&&this.vfx.burst(p.x,1.1,p.z,p.kind==="boom"?16:8,p.kind==="boom"?16757850:10401535,5),p.kind==="hit"&&this.vfx.burst(p.x,1.2,p.z,4,16774890,3),p.kind==="shoot"&&this.vfx.burst(p.x,1.4,p.z,3,16770976,2),p.kind==="die"&&this.vfx.burst(p.x,.8,p.z,8,16765120,3),p.kind==="level"&&(this.vfx.ring(p.x,p.z,3.2,16769162,.55),this.vfx.burst(p.x,1.4,p.z,12,16769162,4)),p.kind==="shrine"){const m=Number.parseInt((p.color||"#e4c27a").slice(1),16);this.vfx.ring(p.x,p.z,2.8,m,.7),this.vfx.burst(p.x,1.6,p.z,14,m,5)}if(p.kind==="skill"){const m=Number.parseInt((p.color||"#ffffff").slice(1),16);p.r&&this.vfx.ring(p.x,p.z,p.r,m,.35),this.vfx.burst(p.x,1.1,p.z,p.text==="arc"||p.text==="tesla"?6:4,m,4)}p.kind==="pickup"&&this.vfx.burst(p.x,1,p.z,8,Number.parseInt((p.color||"#ffe7a0").slice(1),16),3)}if(t&&t.state.player.shotSeq!==this.shotSeen){this.shotSeen=t.state.player.shotSeq;const p=this.heroes.get(t.state.hero);p&&(p.recoil=1)}this.mode==="run"&&t?this.syncRun(t,e):this.syncShowcase(e);const i=innerHeight>innerWidth,s=this.mode==="run"?i?36:23:this.mode==="title"?14.2:7.4,a=this.mode==="title"?1.02:i&&this.mode==="run"?.66:Oi.phi,o=Oi.theta+(this.mode==="title"?Math.sin(this.clock*.15)*.18:0),c=this.look;if(this.mode==="run"&&t){if(c.set(t.state.player.x-Math.sin(Oi.theta)*(i?.35:2.6),1.15,t.state.player.z-Math.cos(Oi.theta)*(i?.35:2.6)),!this.camReady)this.camLook.copy(c),this.camReady=!0;else{const p=1-Math.exp(-3.4*Math.max(.001,e));this.camLook.lerp(c,p);const m=c.x-this.camLook.x,b=c.z-this.camLook.z,w=Math.hypot(m,b);if(w>3.2){const x=3.2/w;this.camLook.x=c.x-m*x,this.camLook.z=c.z-b*x}}this.camLook.y=1.15}else this.camReady=!1,this.focus&&this.mode!=="title"?c.set(0,.45,.4):c.set(0,1.2,0),this.camLook.copy(c);const l=this.camLook,h=(Math.random()-.5)*this.shake,d=(Math.random()-.5)*this.shake*.25;this.camera.position.set(l.x+s*Math.sin(a)*Math.sin(o)+h,1.15+s*Math.cos(a),l.z+s*Math.sin(a)*Math.cos(o)),this.camera.up.set(0,1,0),this.camera.lookAt(l.x,1.15,l.z+d*.05);const u=this.scene.fog,f=this.mode==="run"&&t?t.state.mapId:"";if(new URLSearchParams(location.search).has("top")&&this.mode==="run"&&!!t)this.camera.up.set(0,0,-1),this.camera.position.set(0,150,.4),this.camera.lookAt(0,0,0),this.camera.fov=58,this.camera.updateProjectionMatrix(),u.near=400,u.far=900,u.color.set(14016206);else if(f==="boss"){u.near=28,u.far=72,u.color.set(1052182);const p=this.skyMat.uniforms;p.top.value.set(1446942),p.bot.value.set(789010);const m=innerHeight>innerWidth?62:matchMedia("(pointer: coarse)").matches?48:40;this.camera.fov!==m&&(this.camera.fov=m,this.camera.updateProjectionMatrix())}else if(f){u.near=92,u.far=148,u.color.set(9347210);const p=this.skyMat.uniforms;p.top.value.set(2768213),p.bot.value.set(7244386);const m=innerHeight>innerWidth?62:matchMedia("(pointer: coarse)").matches?48:40;this.camera.fov!==m&&(this.camera.fov=m,this.camera.updateProjectionMatrix())}else u.near=22,u.far=58,u.color.set(1779748);this.sun.position.set(l.x-14,26,l.z+12),this.sun.target.position.set(l.x,0,l.z);const _=this.mode==="run"&&t?t.state.mapId:"";_!==this.shownMap&&(this.shownMap=_,this.field.useMap(_?Ps(_):null)),this.mode==="run"&&t&&this.field.setRun(t.state.seed),this.field.update(t?.state.player.x??0,t?.state.player.z??0,t?.state.shrines??[],t?.state.pickups??[],e,this.mode==="run"&&!!t),t&&this.mode==="run"&&this.field.syncStage(t.state.gatesOpen,t.state.doorsOpen,t.state.portalOpen,t.state.laneBars,t.state.doorLift),this.vfx.update(e),this.mode==="run"&&t&&ka.value.set(t.state.player.x,1.2,t.state.player.z),this.renderer.render(this.scene,this.camera),this.mode==="run"&&t&&this.paintReadable(t)}paintReadable(e){const t=this.heroes.get(e.state.hero),n=[];t&&n.push(t.group),this.elite?.group.visible&&n.push(this.elite.group),this.boss?.group.visible&&n.push(this.boss.group);const i=[];for(const c of n)c.traverse(l=>{const h=l;if(!h.isMesh)return;const d=h.material;i.push({mesh:h,test:d.depthTest!==!1,order:h.renderOrder}),Array.isArray(h.material)||(d.depthTest=!1,d.transparent=!1,d.opacity=1,d.blending=Is,d.depthWrite=!0),h.renderOrder=30});const s=[];for(const c of this.scene.children)n.includes(c)||c.isLight||(s.push({obj:c,vis:c.visible}),c.visible=!1);const a=this.renderer.autoClear;this.renderer.autoClear=!1,this.renderer.clearDepth(),this.renderer.render(this.scene,this.camera);for(const c of s)c.obj.visible=c.vis;this.xrayHorde||(this.xrayHorde=new Tt({color:16738858,depthTest:!0,depthWrite:!1,depthFunc:Ma}),this.xrayHorde.onBeforeCompile=c=>{c.uniforms.focus=ka,c.vertexShader=c.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vOcc;`).replace("#include <project_vertex>",`vec4 occW = vec4(transformed, 1.0);
            #ifdef USE_INSTANCING
              occW = instanceMatrix * occW;
            #endif
            vOcc = (modelMatrix * occW).xyz;
            #include <project_vertex>`),c.fragmentShader=c.fragmentShader.replace("#include <common>",`#include <common>
varying vec3 vOcc;
uniform vec3 focus;`).replace("#include <dithering_fragment>",`if (distance(vOcc.xz, focus.xz) > 16.0) discard;
            #include <dithering_fragment>`)});const o=new Set;for(const c of this.hordes.values()){if(o.has(c.mesh)||c.mesh.count===0)continue;o.add(c.mesh);const l=c.mesh.material;c.mesh.material=this.xrayHorde,this.renderer.render(c.mesh,this.camera),c.mesh.material=l}for(const c of i){const l=c.mesh.material;Array.isArray(l)||(l.depthTest=c.test),c.mesh.renderOrder=c.order}this.renderer.autoClear=a}syncShowcase(e){this.heroRing.visible=!1,this.hideHorde(),this.gemMesh.count=0,this.orbit.count=0;for(const n of Object.values(this.shotMesh))n.count=0;this.elite&&(this.elite.group.visible=!1),this.boss&&(this.boss.group.visible=!1);let t=0;for(const n of zi){const i=this.heroes.get(n);if(!i)continue;const s=this.mode==="title"||this.focus===n;if(i.group.visible=s,!s)continue;const a=this.mode==="title"?(t-2)*3.15:0,o=n==="rose"?"IdleR":n==="seoyun"?"Combat":"Idle",c=this.mode==="select"?this.clock*.55:this.mode==="title"?.15+Math.sin(this.clock*.4+t)*.08:.05;Uo(i,a,0,c,e,i.acts[o]?o:"Idle"),t+=1}}hideHorde(){for(const e of this.hordes.values())e.mesh.count=0}syncRun(e,t){const n=e.state;for(const h of zi){const d=this.heroes.get(h);d.group.visible=h===n.hero}const i=this.heroes.get(n.hero);if(i){const h=n.status==="dead"?"Death":n.player.attack?n.player.attack:n.player.moving?(n.hero==="rose","Run"):n.hero==="rose"?"IdleR":n.hero==="seoyun"?"Combat":"Idle",d=n.status==="dead";Uo(i,n.player.x,n.player.z,n.player.facing,t,h,d),od(i,0),this.heroRing.visible=n.status!=="dead",this.heroRing.position.set(n.player.x,.14,n.player.z)}this.placeBoss(this.elite,n.elite,t,n.player.x,n.player.z),this.placeBoss(this.boss,n.boss,t,n.player.x,n.player.z);const s=new Map;for(const h of n.enemies){if(!h.alive)continue;const d=sM(h.kind),u=s.get(d)??[],f=h.hover+Math.abs(Math.sin(h.phase))*(h.hover>0?.18:h.kind==="slime"?.16:.08),g=h.kind==="goblin_archer"?15774761:h.kind==="wisp"?10153727:16777215;u.push({x:h.x,y:f,z:h.z,yaw:Math.atan2(h.windup>0?h.aimX-h.x:n.player.x-h.x,h.windup>0?h.aimZ-h.z:n.player.z-h.z),s:nM[d]*(h.kind==="slime"?1+Math.sin(h.phase*2)*.06:1),flash:h.flash,color:g}),s.set(d,u)}const a=Math.floor(this.clock*8)%4,o=new Set;for(const h of hd){const d=this.hordes.get(h);!d||o.has(d.mesh)||d.frames&&d.frames[a]&&d.frame!==a&&(d.mesh.geometry=d.frames[a],d.frame=a)}for(const h of hd){const d=this.hordes.get(h);if(!d||h==="wisp")continue;const u=s.get(h)??[],f=h==="wraith"?s.get("wisp")??[]:[],g=h==="wraith"?[...u,...f]:u;this.writeInstances(d,g),o.add(d.mesh)}let c=0;for(const h of n.gems)!h.alive||c>=200||(this.dummy.position.set(h.x,.35+Math.sin(this.clock*4+h.x)*.08,h.z),this.dummy.rotation.set(0,this.clock*2,0),this.dummy.scale.setScalar(.7+Math.min(1.4,h.v/6)),this.dummy.updateMatrix(),this.gemMesh.setMatrixAt(c,this.dummy.matrix),c+=1);this.gemMesh.count=c,this.gemMesh.instanceMatrix.needsUpdate=!0,this.syncOrbits(n);const l={arrow:0,bullet:0,bolt:0,fire:0,ice:0,cross:0};for(const h of n.shots){if(!h.alive)continue;const d=l[h.style];if(d>=140)continue;l[h.style]=d+1;const u=h.style==="fire"?.9:h.style==="bolt"?1.1:1.25;this.dummy.position.set(h.x,u,h.z),this.dummy.rotation.set(0,Math.atan2(h.vx,h.vz),0),this.dummy.scale.set(1,1,1),this.dummy.updateMatrix(),this.shotMesh[h.style].setMatrixAt(d,this.dummy.matrix)}for(const h of["arrow","bullet","bolt","fire","ice","cross"])this.shotMesh[h].count=l[h],this.shotMesh[h].instanceMatrix.needsUpdate=!0;for(const h of n.zones)h.alive&&(h.kind==="aim"&&h.t<h.dur&&!this.pinged.has(h)&&(this.pinged.add(h),this.vfx.ring(h.x,h.z,2.4,16769162,Math.max(.45,h.dur))),h.hostile&&h.t<h.delay&&!this.pinged.has(h)&&(this.pinged.add(h),this.vfx.ring(h.x,h.z,h.r,13656319,Math.max(.7,h.delay))),!(h.kind==="meteor"&&h.t<h.delay)&&h.kind==="meteor"&&h.applied&&h.t-h.delay<t*1.5&&this.vfx.ring(h.x,h.z,h.r,9352959))}syncOrbits(e){let t=0;for(const n of e.skills){if(n.id!=="tesla"||t>=16)continue;const i=Math.min(5,2+Math.floor((n.level-1)/2)+(n.evolved?1:0)),s=2.15+n.level*.16;for(let a=0;a<i&&t<16;a++){const o=this.clock*(2.1+n.level*.12)+a/i*Math.PI*2;this.dummy.position.set(e.player.x+Math.sin(o)*s,1.15,e.player.z+Math.cos(o)*s),this.dummy.rotation.set(0,o,0),this.dummy.scale.setScalar(n.evolved?1.25:1),this.dummy.updateMatrix(),this.orbit.setMatrixAt(t,this.dummy.matrix),t+=1}}this.orbit.count=t,this.orbit.instanceMatrix.needsUpdate=!0}placeBoss(e,t,n,i,s){if(!e)return;if(!t){e.group.visible=!1;return}const a=t.pose==="Walk"||t.pose==="Run",o=t.alive?t.poseT>0?t.pose:a?e===this.boss?"Walk":"Run":"Idle":"Death",c=e.acts[o]?o:"Idle",l=Math.atan2(i-t.x,s-t.z);if(Uo(e,t.x,t.z,l,n,c,!t.alive||t.poseT>0),od(e,t.alive?t.flash:0),e===this.boss){const h=this.clock;this.bossMotes.forEach((d,u)=>{const f=h*1.3+u*.9,g=(h*1.1+u*.45)%8,_=1.1+u%4*.45;d.position.set(Math.cos(f)*_,.3+g,Math.sin(f)*_),d.scale.setScalar(.7+u%3*.25)})}}writeInstances(e,t){const n=e.mesh;n.count=t.length;for(let i=0;i<t.length;i++){const s=t[i];this.dummy.position.set(s.x,s.y,s.z),this.dummy.rotation.set(0,s.yaw,0),this.dummy.scale.setScalar(s.s),this.dummy.updateMatrix(),n.setMatrixAt(i,this.dummy.matrix);const a=new be(s.color),o=s.flash>0?a.lerp(new be(16777215),.65):a;n.setColorAt(i,o)}n.instanceMatrix.needsUpdate=!0,n.instanceColor&&(n.instanceColor.needsUpdate=!0)}}const nt=r=>`<svg viewBox="0 0 32 32" aria-hidden="true" focusable="false">${r}</svg>`,dd={sword:nt('<path fill="currentColor" d="M18 2l2 6-8 8-3-3 8-8zm-9 13l3 3-6 8H3v-3l6-8z"/>'),bow:nt('<path fill="none" stroke="currentColor" stroke-width="2.4" d="M8 4c8 6 8 18 0 24M8 4l16 12L8 28"/><path fill="currentColor" d="M22 14l4 2-4 2v-4z"/>'),staff:nt('<path fill="currentColor" d="M15 8h2v20h-2zM16 4l4 5h-8l4-5zm0 6a3 3 0 110 6 3 3 0 010-6z"/>'),gun:nt('<path fill="currentColor" d="M4 14h16l2-3h6v4h-4l-1 3H12l-2 6H6l2-6H4v-4z"/>'),fist:nt('<path fill="currentColor" d="M8 14V8h3v6h2V7h3v7h2V9h3v8c0 5-3 9-8 9h-2c-4 0-7-3-7-8v-4h4z"/>'),heart:nt('<path fill="currentColor" d="M16 27S4 18 4 11a6 6 0 0111-3 6 6 0 0111 3c0 7-10 16-10 16z"/>'),boot:nt('<path fill="currentColor" d="M8 4h8v10l6 3v5H6v-4l2-2V4z"/>'),magnet:nt('<path fill="currentColor" d="M8 4h5v10a3 3 0 006 0V4h5v10a8 8 0 01-16 0V4z"/>'),bomb:nt('<circle cx="14" cy="18" r="8" fill="currentColor"/><path fill="currentColor" d="M20 8l4-4 2 2-4 4zM22 6l3 1-1 2"/>'),snow:nt('<path fill="currentColor" d="M15 2h2v28h-2zM2 15h28v2H2zM6 6l1.4 1.4L23 23.6 21.6 25 6 9.4zM25 6L9.4 21.6 8 20.2 23.6 4.6z"/>'),shield:nt('<path fill="currentColor" d="M16 3l10 4v8c0 7-4.5 11-10 14C10.5 26 6 22 6 15V7l10-4z"/>'),chest:nt('<path fill="currentColor" d="M4 12h24v4H4zM6 16h20v10H6zM14 18h4v4h-4z"/>'),chicken:nt('<path fill="currentColor" d="M8 18c0-6 4-10 10-10 2 0 3-2 5-2 0 3-1 4-1 6 3 1 5 4 5 7 0 5-4 8-10 8S8 24 8 18z"/>'),rage:nt('<path fill="currentColor" d="M16 2l3 8h8l-6 5 2 9-7-5-7 5 2-9-6-5h8z"/>'),clover:nt('<circle cx="16" cy="10" r="5" fill="currentColor"/><circle cx="10" cy="16" r="5" fill="currentColor"/><circle cx="22" cy="16" r="5" fill="currentColor"/><circle cx="16" cy="20" r="4" fill="currentColor"/><path fill="currentColor" d="M15 22h2v8h-2z"/>'),holy:nt('<path fill="currentColor" d="M14 4h4v6h6v4h-6v12h-4V14H8v-4h6z"/>'),vacuum:nt('<path fill="currentColor" d="M16 4l8 8h-5v4a7 7 0 11-6 0v-4H8l8-8z"/>'),potion:nt('<path fill="currentColor" d="M13 3h6v4l4 6v12a4 4 0 01-4 4h-6a4 4 0 01-4-4V13l4-6V3z"/>'),gold:nt('<circle cx="16" cy="16" r="10" fill="currentColor"/><circle cx="16" cy="16" r="6" fill="none" stroke="#3a250c" stroke-width="2"/>'),skull:nt('<path fill="currentColor" d="M16 4a9 9 0 00-6 15v5h4v-3h4v3h4v-5a9 9 0 00-6-15zm-3 9a2 2 0 110-4 2 2 0 010 4zm6 0a2 2 0 110-4 2 2 0 010 4z"/>'),pause:nt('<path fill="currentColor" d="M8 5h5v22H8zM19 5h5v22h-5z"/>'),reroll:nt('<path fill="none" stroke="currentColor" stroke-width="2.6" d="M8 16a8 8 0 0113-6M24 16a8 8 0 01-13 6"/><path fill="currentColor" d="M18 4l6 6-7 1zM8 21l7-1-6 7z"/>'),skip:nt('<path fill="currentColor" d="M6 6h4v20H6zM14 6l12 10-12 10z"/>'),bolt:nt('<path fill="currentColor" d="M18 2L8 18h7l-2 12 12-18h-7l0-10z"/>'),fire:nt('<path fill="currentColor" d="M16 2s6 6 6 12a6 6 0 01-12 0c0-2 2-3 2-6 2 2 4 2 4-6z"/>'),ice:nt('<path fill="currentColor" d="M16 2l2 6 6-2-2 6 6 2-6 2 2 6-6-2-2 6-2-6-6 2 2-6-6-2 6-2-2-6 6 2z"/>'),cross:nt('<path fill="currentColor" d="M13 4h6v7h7v6h-7v11h-6V17H6v-6h7z"/>'),poison:nt('<path fill="currentColor" d="M16 4c4 4 8 8 8 14a8 8 0 11-16 0c0-6 4-10 8-14z"/>'),chain:nt('<path fill="currentColor" d="M6 14h8l4-8 4 16 4-8h6v3h-4l-3 6-4-16-4 8H6z"/>'),book:nt('<path fill="currentColor" d="M6 6h8a4 4 0 014 4v16H10a4 4 0 01-4-4V6zm16 0h-4v20h6a4 4 0 004-4V10a4 4 0 00-4-4z"/>'),thorn:nt('<path fill="currentColor" d="M16 2l3 8 8 2-6 6 2 8-7-4-7 4 2-8-6-6 8-2z"/>'),drop:nt('<path fill="currentColor" d="M16 3s8 9 8 15a8 8 0 11-16 0C8 12 16 3 16 3z"/>'),crit:nt('<path fill="currentColor" d="M16 2l2 8 8 2-6 5 2 9-6-4-6 4 2-9-6-5 8-2z"/>'),regen:nt('<path fill="none" stroke="currentColor" stroke-width="2.4" d="M16 6v8M8 18c0 6 16 6 16 0"/><path fill="currentColor" d="M16 4l4 5H12z"/>'),xp:nt('<path fill="currentColor" d="M16 3l3 7 8 1-6 5 2 8-7-4-7 4 2-8-6-5 8-1z"/>'),back:nt('<path fill="currentColor" d="M18 6l-8 10 8 10 2-2-6-8 6-8z"/>')},aM={silva:"bow",luna:"staff",sera:"sword",rose:"gun",seoyun:"fist"},oM={tesla:"bolt",pyre:"fire",frost:"ice",cross:"cross",miasma:"poison",arc:"chain"},cM={vital:"heart",haste:"boot",leech:"drop",thorns:"thorn",scholar:"book",crit:"crit",regen:"regen",guard:"shield"};function It(r){return dd[r]??dd.sword}function lr(r){return It(aM[r]??"sword")}function ud(r){return It(oM[r]??"bolt")}function lM(r){return It(cM[r]??"book")}class hM{handlers=null;joy={active:!1,id:-1,x:0,y:0,ox:0,oy:0};keys=new Set;screen;hudEl;stick;nub;floats;openSlot=null;volume=.55;shakeOn=!0;tab="hero";shownHero=null;constructor(e){try{this.shakeOn=localStorage.getItem("avalon-survival-shake")!=="0"}catch{}e.innerHTML='<div id="screen"></div><div id="hud" class="hidden"></div><div id="floats" class="floats"></div><div id="stick" class="hidden"><i></i></div>',this.screen=e.querySelector("#screen"),this.hudEl=e.querySelector("#hud"),this.stick=e.querySelector("#stick"),this.nub=this.stick.querySelector("i"),this.floats=e.querySelector("#floats"),this.hudEl.className="hud hidden",this.hudEl.innerHTML=`
      <div class="lv-badge" data-xp-label>1</div>
      <div class="xp-rail track xp"><span data-xp></span></div>
      <div class="hud-row">
        <div class="portrait" data-portrait></div>
        <div class="hp track"><span data-hp></span></div>
        <div class="timer"><div class="time" data-time>0:00</div><div class="phase" data-phase></div></div>
        <div class="counters">
          <div class="counter">${It("skull")}<b data-kills>0</b></div>
          <div class="counter">${It("gold")}<b data-gold>0</b></div>
        </div>
      </div>
      <div class="bossbar hidden" data-boss><div class="name" data-boss-name></div><div class="track"><span data-boss-hp></span></div></div>
      <div class="goal"><span data-goal-bar></span><b data-goal-label>도로 0%</b></div>
      <div class="banner hidden" data-banner></div>
      <div class="map-frame"><canvas class="minimap" data-map width="96" height="96"></canvas></div>
      <div class="marks" data-marks></div>
      <div class="buffs" data-buffs></div>
      <div class="skills" data-skills></div>
      <button class="pause-btn" type="button" data-pause>${It("pause")}</button>
      <div class="fps hidden" data-fps></div>`,this.bindInput()}on(e){this.handlers=e}bindInput(){const e=i=>{if(this.joy.active)return;const s=i.target;s instanceof Element&&s.closest("button, a, input, .blocked")||this.hudEl.classList.contains("hidden")||!this.screen.classList.contains("is-clear")&&this.screen.childElementCount>0||(this.joy.active=!0,this.joy.id=i.pointerId,this.joy.ox=i.clientX,this.joy.oy=i.clientY,this.joy.x=0,this.joy.y=0,this.stick.classList.remove("hidden"),this.stick.style.left=`${i.clientX}px`,this.stick.style.top=`${i.clientY}px`,this.nub.style.transform="translate(0px, 0px)")},t=i=>{if(!this.joy.active||i.pointerId!==this.joy.id)return;const s=i.clientX-this.joy.ox,a=i.clientY-this.joy.oy,o=46,c=Math.hypot(s,a)||1,l=Math.min(o,c)/c;this.joy.x=s*l/o,this.joy.y=-(a*l)/o,this.nub.style.transform=`translate(${s*l}px, ${a*l}px)`},n=i=>{i.pointerId===this.joy.id&&(this.joy.active=!1,this.joy.x=0,this.joy.y=0,this.stick.classList.add("hidden"))};window.addEventListener("pointerdown",e),window.addEventListener("pointermove",t),window.addEventListener("pointerup",n),window.addEventListener("pointercancel",n),window.addEventListener("keydown",i=>{this.keys.add(i.code),["ArrowUp","ArrowDown","ArrowLeft","ArrowRight","Space"].includes(i.code)&&i.preventDefault(),i.code==="Escape"&&this.handlers?.pause(),i.code==="Digit1"&&this.handlers?.choose(0),i.code==="Digit2"&&this.handlers?.choose(1),i.code==="Digit3"&&this.handlers?.choose(2)}),window.addEventListener("keyup",i=>this.keys.delete(i.code)),this.hudEl.querySelector("[data-pause]")?.addEventListener("click",()=>this.handlers?.pause())}setVolume(e){this.volume=e}prefersShake(){return this.shakeOn}setTab(e){this.tab=e}bindVolume(e){const t=e.querySelector("[data-vol]");t?.addEventListener("input",()=>this.handlers?.volume?.(Number(t.value)/100))}readMove(){let e=0,t=0;(this.keys.has("KeyA")||this.keys.has("ArrowLeft"))&&(e-=1),(this.keys.has("KeyD")||this.keys.has("ArrowRight"))&&(e+=1),(this.keys.has("KeyW")||this.keys.has("ArrowUp"))&&(t+=1),(this.keys.has("KeyS")||this.keys.has("ArrowDown"))&&(t-=1),this.joy.active&&(e=this.joy.x,t=this.joy.y);const n=Math.hypot(e,t);return n>1&&(e/=n,t/=n),{x:e,y:t}}boot(e,t){this.hudEl.classList.add("hidden"),this.screen.className="",this.screen.innerHTML=`<div class="boot"><div class="boot-card"><p class="kicker">AVALON</p><h1>아발론 서바이벌</h1><p class="sub">${t}</p><div class="bar"><span style="width:${Math.round(e*100)}%"></span></div></div></div>`}bootError(e){this.screen.innerHTML=`<div class="boot"><div class="boot-card"><h1>불러오지 못했다</h1><p class="sub">${e}</p></div></div>`}title(e,t){this.hudEl.classList.add("hidden"),this.screen.className="",this.screen.innerHTML=`<div class="title"><div class="title-block plate"><p class="ribbon">10분의 밤</p><div class="logo"><h1>아발론<br>서바이벌</h1></div><p class="sub">영웅 하나. 자동으로 쏘는 무기 하나. 열 분이 지나면 리치가 온다.</p><div class="title-actions"><button class="btn pulse" type="button" data-start>출정</button><button class="btn ghost" type="button" data-camp>야영지</button></div><label class="vol">소리 <input type="range" min="0" max="100" value="${Math.round(this.volume*100)}" data-vol></label><p class="record">최장 생존 ${e} · 토벌 ${t}</p></div></div>`,this.screen.querySelector("[data-start]")?.addEventListener("click",()=>this.handlers?.start()),this.screen.querySelector("[data-camp]")?.addEventListener("click",()=>this.handlers?.camp()),this.bindVolume(this.screen)}select(e,t){this.hudEl.classList.add("hidden");const n={silva:[62,74,78],luna:[58,86,52],sera:[80,76,60],rose:[64,82,66],seoyun:[78,80,70]},i=zi.map(a=>{const o=As[a],c=Fs(t.heroes[a].xp).level,[l,h,d]=n[a];return`<button class="hero-card ${a===e?"on":""}" type="button" data-hero="${a}"><span class="ico">${lr(a)}</span><span class="role">${o.role} · Lv.${c} · 해금</span><strong>${o.name}</strong><div class="statline"><i>${It("heart")}<b><span style="width:${l}%"></span></b></i><i>${It("sword")}<b><span style="width:${h}%"></span></b></i><i>${It("boot")}<b><span style="width:${d}%"></span></b></i></div></button>`}).join(""),s=As[e];this.screen.innerHTML=`<div class="select"><div class="select-sheet plate blocked"><p class="ribbon">${s.weapon}</p><div class="hero-row">${i}</div><div class="row"><button class="btn ghost" type="button" data-back>${It("back")}</button><button class="btn" type="button" data-begin>${s.name} 출정</button></div></div></div>`,this.screen.querySelectorAll("[data-hero]").forEach(a=>a.addEventListener("click",()=>this.handlers?.pick(a.dataset.hero))),this.screen.querySelector("[data-back]")?.addEventListener("click",()=>this.handlers?.back()),this.screen.querySelector("[data-begin]")?.addEventListener("click",()=>this.handlers?.maps?this.handlers.maps():this.handlers?.begin())}maps(){this.hudEl.classList.add("hidden");const e=qo.map(t=>`<button class="map-card" type="button" data-map="${t.id}"><canvas data-preview="${t.id}" width="220" height="150"></canvas><span class="diff ${t.difficulty}">${t.difficulty==="easy"?"쉬움":t.difficulty==="hard"?"어려움":"보통"}</span><strong>${t.name}</strong><span>${t.blurb}</span></button>`).join("");this.screen.innerHTML=`<div class="select"><div class="select-sheet plate blocked"><p class="ribbon">맵</p><div class="hero-row">${e}</div><div class="row"><button class="btn ghost" type="button" data-back>${It("back")}</button></div></div></div>`;for(const t of qo){const n=this.screen.querySelector(`[data-preview="${t.id}"]`),i=Ps(t.id);if(n&&i)this.paintLayout(n,i.kind,i.cols,i.rows);else if(n){const s=n.getContext("2d");s&&(s.fillStyle="#243228",s.fillRect(0,0,n.width,n.height))}}this.screen.querySelectorAll("[data-map]").forEach(t=>t.addEventListener("click",()=>this.handlers?.pickMap?.(t.dataset.map||"field"))),this.screen.querySelector("[data-back]")?.addEventListener("click",()=>this.handlers?.start())}paintLayout(e,t,n,i){const s=e.getContext("2d");if(!s)return;const a=Math.min(e.width/n,e.height/i);s.fillStyle="#1a2218",s.fillRect(0,0,e.width,e.height);for(let o=0;o<i;o++)for(let c=0;c<n;c++){const l=String.fromCharCode(t[o*n+c]);s.fillStyle=l==="#"?"#3e463c":l==="R"?"#d7cbb6":l==="T"?"#2f9a3e":l==="C"?"#e6d3b0":l==="W"?"#3ad4ff":l==="G"||l==="D"?"#c4a46a":l==="E"?"#f0d48a":l==="="?"#8a5a32":l==="+"?"#9fe7ff":l==="S"?"#f0d48a":l==="@"?"#fff6ea":"#c2a56a",s.fillRect(c*a,o*a,a-.5,a-.5)}}run(){this.screen.className="is-clear",this.screen.innerHTML="",this.hudEl.classList.remove("hidden","combat-hidden")}hud(e){const t=(m,b)=>{const w=this.hudEl.querySelector(m);w&&(w.textContent=b)};t("[data-time]",Gc(e.t));const n=this.hudEl.querySelector("[data-phase]"),i=this.hudEl.querySelector("[data-hint]");n&&(n.textContent=""),i&&(i.textContent="");const s=this.hudEl.querySelector("[data-goal-bar]"),a=this.hudEl.querySelector("[data-goal-label]"),o=e.stage==="boss"&&e.bossRoom>=3;if(s&&(s.style.display=o?"none":"block",s.style.width=`${Math.max(0,Math.min(100,e.progress*100))}%`),a&&(a.textContent=e.stageNote),t("[data-kills]",String(e.kills)),t("[data-gold]",String(e.gold)),this.shownHero!==e.hero){this.shownHero=e.hero;const m=this.hudEl.querySelector("[data-portrait]");m&&(m.innerHTML=lr(e.hero))}const c=this.hudEl.querySelector("[data-hp]"),l=this.hudEl.querySelector("[data-xp]");c&&(c.style.width=`${Math.max(0,e.player.hp/Math.max(1,e.player.maxHp)*100)}%`),l&&(l.style.width=`${Math.max(0,Math.min(100,e.player.xp/Math.max(1,e.player.xpNeed)*100))}%`);const h=this.hudEl.querySelector("[data-boss]"),d=e.boss?.alive?e.boss:e.elite?.alive?e.elite:null;if(h&&(h.classList.toggle("hidden",!d),d)){t("[data-boss-name]",d.kind==="lich"?`리치 군주 · ${e.bossPhase}`:"흑철 기사");const m=this.hudEl.querySelector("[data-boss-hp]");m&&(m.style.width=`${Math.max(0,d.hp/d.maxHp*100)}%`)}const u=this.hudEl.querySelector("[data-banner]");u&&(u.classList.toggle("hidden",e.bannerT<=0),u.textContent=e.banner);const f=[];e.atkBuffT>0&&f.push({id:"sword",t:e.atkBuffT}),e.magnetBuffT>0&&f.push({id:"magnet",t:e.magnetBuffT}),e.hasteT>0&&f.push({id:"boot",t:e.hasteT}),e.rageT>0&&f.push({id:"rage",t:e.rageT}),e.luckT>0&&f.push({id:"clover",t:e.luckT}),e.freezeT>0&&f.push({id:"snow",t:e.freezeT}),e.guardT>0&&f.push({id:"shield",t:e.guardT});const g=this.hudEl.querySelector("[data-buffs]");g&&(g.innerHTML=f.map(m=>`<span class="buff">${It(m.id)}<b>${m.t.toFixed(0)}</b></span>`).join(""));const _=this.hudEl.querySelector("[data-xp-label]");_&&(_.textContent=String(e.player.level));const p=this.hudEl.querySelector("[data-skills]");if(p){const m=Array.from({length:8},(w,x)=>`<i class="${x<e.player.weaponLevel?"on":""}"></i>`).join(""),b=[0,1,2].map(w=>{const x=e.skills[w];if(!x)return`<div class="sk empty">${It("sword")}</div>`;const y=Array.from({length:5},(C,v)=>`<i class="${v<x.level?"on":""}"></i>`).join(""),T=Math.max(0,Math.min(100,x.t*140));return`<div class="sk">${ud(x.id)}<span class="sweep" style="--cd:${T}"></span><div class="pips">${y}</div></div>`}).join("");p.innerHTML=`<div class="sk">${lr(e.hero)}<div class="pips">${m}</div></div>${b}`}this.drawMap(e),this.drawMarks(e)}drawMap(e){const t=this.hudEl.querySelector("[data-map]");if(!t)return;const n=t.getContext("2d");if(!n)return;const i=t.width,s=t.height,a=Ps(e.mapId);if(a){this.paintLayout(t,a.kind,a.cols,a.rows);const{c:l,r:h}=Ln(a,e.player.x,e.player.z),d=Math.min(i/a.cols,s/a.rows);n.fillStyle="#fff6ea",n.beginPath(),n.arc((l+.5)*d,(h+.5)*d,Math.max(2,d*.28),0,Math.PI*2),n.fill(),n.fillStyle="#f0d48a";for(const u of e.shrines){if(!u.alive||u.used)continue;const f=Ln(a,u.x,u.z);n.fillRect(f.c*d+1,f.r*d+1,Math.max(3,d),Math.max(3,d))}if(e.stage!=="boss"){const u=Ln(a,a.goal.x,a.goal.z);n.fillStyle="#fff6ea",n.fillRect(u.c*d,u.r*d,Math.max(4,d+1),Math.max(4,d+1))}return}n.clearRect(0,0,i,s),n.fillStyle="#3f8f38",n.fillRect(0,0,i,s);const o=1.35,c=(l,h)=>({x:i/2+(l-e.player.x)*o,y:s/2+(h-e.player.z)*o});n.strokeStyle="#d8c4a0",n.lineWidth=3;for(const l of bd)n.beginPath(),l.forEach((h,d)=>{const u=c(h.x,h.z);d===0?n.moveTo(u.x,u.y):n.lineTo(u.x,u.y)}),n.stroke();for(const l of Hc(e.seed)){const h=c(l.x,l.z);if(h.x<-4||h.y<-4||h.x>i+4||h.y>s+4)continue;n.fillStyle=l.kind==="tree"?"#1d5c2c":l.kind==="rock"?"#cbbfa8":l.kind==="ruin"?"#efe6d4":l.kind==="flower"?"#f2c14e":"#67b84c";const d=l.kind==="tree"?4.2:l.kind==="tuft"?1.6:2.6;n.fillRect(h.x-d*.5,h.y-d*.5,d,d)}for(const l of e.shrines){if(!l.alive||l.used)continue;const h=c(l.x,l.z);n.fillStyle=va[l.blessing],n.beginPath(),n.moveTo(h.x,h.y-5),n.lineTo(h.x+4,h.y),n.lineTo(h.x,h.y+5),n.lineTo(h.x-4,h.y),n.fill()}n.fillStyle="#9ad7ff";for(const l of e.pickups){if(!l.alive)continue;const h=c(l.x,l.z);n.beginPath(),n.arc(h.x,h.y,3,0,Math.PI*2),n.fill()}n.fillStyle="#fff6ea",n.beginPath(),n.arc(i/2,s/2,3.5,0,Math.PI*2),n.fill()}drawMarks(e){const t=this.hudEl.querySelector("[data-marks]");if(!t)return;const n=this.hudEl.clientWidth||window.innerWidth,i=this.hudEl.clientHeight||window.innerHeight,s=[],a=e.stage==="farm"?e.shrines.filter(o=>o.alive&&!o.used).sort((o,c)=>{const l=(o.x-e.player.x)**2+(o.z-e.player.z)**2,h=(c.x-e.player.x)**2+(c.z-e.player.z)**2;return l-h}).slice(0,1):[];if(e.stage==="lane"){const o=Ps(e.mapId);if(o){const c=o.goal.x-e.player.x,l=o.goal.z-e.player.z,h=Math.atan2(c,l),d=Math.max(18,Math.min(n-18,n/2+Math.sin(h)*(n*.34))),u=Math.max(150,Math.min(i-110,i/2+Math.cos(h)*(i*.22)));s.push(`<div class="mark" style="left:${d}px;top:${u}px;color:#ffe7a8;border-color:#ffe7a8"><i></i>출구</div>`)}}for(const o of a){const c=o.x-e.player.x,l=o.z-e.player.z;if(c*c+l*l<144)continue;const h=Math.atan2(c,l),d=n/2+Math.sin(h)*(n*.38),u=i/2+Math.cos(h)*(i*.28),f=Math.max(18,Math.min(n-18,d)),g=Math.max(70,Math.min(i-90,u)),_=va[o.blessing];s.push(`<div class="mark" style="left:${f}px;top:${g}px;color:${_};border-color:${_}"><i></i>성소</div>`)}t.innerHTML=s.join("")}level(e){const t=(i,s,a)=>i==="skill"&&s?ud(s):i==="passive"&&a?lM(a):i==="heal"?It("heart"):lr(e.hero),n=(e.offer??[]).map((i,s)=>{const a=i.evolve?"EVOLVE":i.kind==="skill"&&i.title&&!i.title.includes("Lv")?"NEW":i.kind==="weapon"?"WEAPON":"",o=i.pipMax?`<div class="pips">${Array.from({length:i.pipMax},(c,l)=>`<i class="${l<(i.pips??0)?"on":""}"></i>`).join("")}</div>`:"";return`<button class="card kind-${i.kind}${i.evolve?" evo":""}" type="button" data-i="${s}">${a?`<em class="badge">${a}</em>`:""}<div class="ico">${t(i.kind,i.skill,i.passive)}</div>${o}<strong>${i.title}</strong><span>${i.text}</span></button>`}).join("");this.hudEl.classList.add("combat-hidden"),this.screen.className="",this.screen.innerHTML=`<div class="level"><div class="level-sheet blocked"><p class="ribbon">LEVEL ${e.player.level}</p><div class="cards">${n}</div><div class="actions"><button class="text-btn" type="button" data-reroll ${e.rerolls<=0?"disabled":""}>${It("reroll")}<b>리롤 ${e.rerolls}</b></button><button class="text-btn" type="button" data-skip>${It("skip")}<b>건너뛰기</b></button></div></div></div>`,this.screen.querySelectorAll("[data-i]").forEach(i=>i.addEventListener("click",()=>this.handlers?.choose(Number(i.dataset.i)))),this.screen.querySelector("[data-reroll]")?.addEventListener("click",()=>this.handlers?.reroll?.()),this.screen.querySelector("[data-skip]")?.addEventListener("click",()=>this.handlers?.skip?.())}pause(){this.screen.className="",this.screen.innerHTML=`<div class="pause"><div class="pause-card plate blocked"><p class="ribbon">일시정지</p><h2>밤은 기다려 준다</h2><label class="vol">소리 <input type="range" min="0" max="100" value="${Math.round(this.volume*100)}" data-vol></label><label class="vol">화면 흔들림 <input type="checkbox" data-shake ${this.shakeOn?"checked":""}></label><div class="row"><button class="btn" type="button" data-resume>계속</button><button class="btn ghost" type="button" data-give>포기</button></div></div></div>`,this.screen.querySelector("[data-resume]")?.addEventListener("click",()=>this.handlers?.resume()),this.screen.querySelector("[data-give]")?.addEventListener("click",()=>this.handlers?.giveUp()),this.bindVolume(this.screen);const e=this.screen.querySelector("[data-shake]");e?.addEventListener("change",()=>{this.shakeOn=e.checked;try{localStorage.setItem("avalon-survival-shake",e.checked?"1":"0")}catch{}this.handlers?.shake?.(e.checked)})}setDebug(e){this.hudEl.querySelector("[data-fps]")?.classList.toggle("hidden",!e)}setFps(e,t){const n=this.hudEl.querySelector("[data-fps]");n&&(n.textContent=`${e} FPS · 적 ${t}`)}result(e){this.hudEl.classList.add("hidden");const t=e.items.length?`<div class="chest"><div class="lid"></div><ul class="loot">${e.items.map(a=>`<li>${It("chest")} ${a}</li>`).join("")}</ul></div>`:'<p class="sub">상자는 비어 있었다.</p>';this.screen.innerHTML=`<div class="result"><div class="result-card plate blocked"><p class="ribbon">${e.cleared?"승리":"패배"}</p><h2>${e.cleared?"아발론이 밝아졌다":"쓰러졌다"}</h2><p class="sub">생존 ${e.time} · 야전 Lv.${e.level}</p><p>처치 <b data-tally="kills">0</b> · 금화 <b data-tally="gold">0</b> / ${e.purse}</p><p>영웅 경험치 <b data-tally="xp">0</b> · Lv.${e.before} → Lv.${e.after}</p>${t}<div class="row"><button class="btn" type="button" data-hub>야영지</button><button class="btn ghost" type="button" data-retry>다시</button></div><div class="row"><button class="btn ghost" type="button" data-title>처음으로</button></div></div></div>`;const n={kills:e.kills,gold:e.gold,xp:e.gained},i=performance.now(),s=a=>{const o=Math.min(1,(a-i)/900);for(const c of Object.keys(n)){const l=this.screen.querySelector(`[data-tally="${c}"]`);l&&(l.textContent=String(Math.round(n[c]*o)))}o<1&&requestAnimationFrame(s)};requestAnimationFrame(s),this.screen.querySelector("[data-hub]")?.addEventListener("click",()=>this.handlers?.hub()),this.screen.querySelector("[data-retry]")?.addEventListener("click",()=>this.handlers?.retry()),this.screen.querySelector("[data-title]")?.addEventListener("click",()=>this.handlers?.title())}hub(e,t,n){this.openSlot=n,this.hudEl.classList.add("hidden");const i=e.heroes[t],s=Fs(i.xp),a=md(e,t),o=gd(e,t),c=zi.map(_=>`<button class="chip tab ${_===t?"on":""}" type="button" data-hero="${_}">${lr(_)}<span>${As[_].name}</span></button>`).join(""),l=["weapon","armor","accessory"].map(_=>{const p=i.equip[_],m=p?e.items.find(w=>w.uid===p):void 0,b=m?Bi[m.defId]:void 0;return`<button class="slot ${n===_?"on":""}" type="button" data-slot="${_}"><em>${zu(_)}</em><strong class="${b?.rarity??""}">${b?b.name:"비어 있음"}</strong><span class="meta">${b?b.blurb:"눌러서 장착"}</span></button>`}).join(""),h=["weapon","survival","utility"].map(_=>{const m=Bc.filter(b=>b.hero===t&&b.branch===_).map(b=>{const w=!!i.skills[b.id],x=b.index===0||!!i.skills[`${t}-${_}-${b.index-1}`];return`<button class="node ${w?"owned":x&&a>0?"":"locked"}" type="button" data-node="${b.id}" ${w||!x||a<=0?"disabled":""}><strong>${b.name}</strong><br>${b.text}</button>`}).join("");return`<div class="branch"><h3>${Nu[_]}</h3>${m}</div>`}).join("");let d="";n&&(d=`<div class="bag">${e.items.filter(m=>Bi[m.defId]?.slot===n&&!Object.values(i.equip).includes(m.uid)).map(m=>{const b=Bi[m.defId];return`<button class="item" type="button" data-uid="${m.uid}"><strong class="${b.rarity}">${b.name}</strong><small>${Ou(b.rarity)} · ${b.blurb}</small></button>`}).join("")||'<p class="sub">이 칸에 넣을 전리품이 없다.</p>'}<button class="btn ghost" type="button" data-clear>해제</button></div>`);const u=`<div class="slots"><button class="offer" type="button" data-shop="gear">${It("chest")}<strong>무작위 장비</strong><span>60 금화</span></button><button class="offer" type="button" data-shop="tome">${It("book")}<strong>수련의 서</strong><span>40 금화 · 경험치</span></button></div>`,f=this.tab==="gear"?`<div class="slots">${l}</div>${d}`:this.tab==="tree"?`<p class="points">포인트 ${a}</p><p class="mods">체력 +${Math.round(o.hp*100)}% · 공격 +${Math.round(o.atk*100)}% · 이동 +${Math.round(o.spd*100)}%</p><div class="tree">${h}</div>`:this.tab==="shop"?u:`<div class="hero-row">${c}</div><h2>${As[t].name} · Lv.${s.level}</h2><div class="track xp"><span style="width:${s.into/Math.max(1,s.next)*100}%"></span></div><div class="row"><button class="btn" type="button" data-fight>출정</button></div>`,g=[["hero","sword","영웅"],["gear","chest","장비"],["tree","book","기술"],["shop","gold","상점"]].map(([_,p,m])=>`<button class="tab ${this.tab===_?"on":""}" type="button" data-tab="${_}">${It(p)}<span>${m}</span></button>`).join("");this.screen.innerHTML=`<div class="hub"><div class="hub-top"><div class="currency">${It("gold")}<b>${e.gold}</b></div></div><div class="hub-body plate blocked">${f}<div class="row"><button class="btn ghost" type="button" data-title>처음으로</button></div></div><div class="tabs">${g}</div></div>`,this.screen.querySelectorAll("[data-hero]").forEach(_=>_.addEventListener("click",()=>this.handlers?.pick(_.dataset.hero))),this.screen.querySelectorAll("[data-slot]").forEach(_=>_.addEventListener("click",()=>{const p=_.dataset.slot;this.handlers?.openSlot(this.openSlot===p?null:p)})),this.screen.querySelector("[data-clear]")?.addEventListener("click",()=>{n&&this.handlers?.equip(n,null)}),this.screen.querySelectorAll("[data-uid]").forEach(_=>_.addEventListener("click",()=>{n&&this.handlers?.equip(n,_.dataset.uid??null)})),this.screen.querySelectorAll("[data-node]").forEach(_=>_.addEventListener("click",()=>this.handlers?.buy(_.dataset.node||""))),this.screen.querySelector("[data-fight]")?.addEventListener("click",()=>this.handlers?.begin()),this.screen.querySelector("[data-title]")?.addEventListener("click",()=>this.handlers?.title()),this.screen.querySelectorAll("[data-tab]").forEach(_=>_.addEventListener("click",()=>this.handlers?.tab?.(_.dataset.tab))),this.screen.querySelectorAll("[data-shop]").forEach(_=>_.addEventListener("click",()=>this.handlers?.shop?.(_.dataset.shop)))}float(e,t,n,i){this.floats.childElementCount>18&&this.floats.firstElementChild?.remove();const s=document.createElement("div");s.className="floater",s.textContent=e,s.style.left=`${t}px`,s.style.top=`${n}px`,s.style.color=i,this.floats.appendChild(s),setTimeout(()=>s.remove(),700)}}const Sl=new URLSearchParams(location.search),dM=Math.max(1,Math.min(12,Number(Sl.get("fast"))||1)),vu=Sl.has("debug"),uM=Sl.has("nolevelup"),fM=document.querySelector("#stage"),pM=document.querySelector("#ui"),Hn=new rM(fM),vt=new hM(pM),yt=new Cu,Mr=gf();let hn=Mr.load(),bn="silva",Mu="field",sn="boot",Ue=null,Fa=!1,gr=null,wn="none";function Oc(){sn="title",Ue=null,Fa=!1,wn="none",Hn.setMode("title",null),vt.title(Gc(hn.bestSeconds),hn.clears)}function fd(){sn="select",Hn.setMode("select",bn),vt.select(bn,hn)}function Di(){sn="hub",Hn.setMode("hub",bn),vt.hub(hn,bn,gr)}function zo(){yt.unlock(),yt.play("ok"),Ue=sf({hero:bn,seed:(Date.now()^Math.floor(Math.random()*1e9))>>>0,mods:gd(hn,bn),mapId:Mu});const r=new URLSearchParams(location.search).get("at");(r==="corridor"||r==="choke"||r==="cliff")&&(Ue.state.player.x=Fl[r].x,Ue.state.player.z=Fl[r].z),Fa=!1,wn="none",sn="run",Hn.setMode("run",bn),vt.run()}vt.on({start:()=>{yt.unlock(),fd()},camp:()=>{yt.unlock(),gr=null,Di()},back:()=>Oc(),pick:r=>{bn=r,yt.play("select"),sn==="hub"?Di():fd(),Hn.setMode(sn==="hub"?"hub":"select",bn)},begin:zo,maps:()=>vt.maps(),pickMap:r=>{Mu=r,zo()},pause:()=>{Ue?.state.status==="play"&&(Ue.pause(),wn="pause",vt.pause())},resume:()=>{Ue?.resume(),wn="none",sn==="run"&&vt.run()},giveUp:()=>Ue?.giveUp(),reroll:()=>{Ue?.reroll(),Ue?.state.status==="level"&&vt.level(Ue.state)},skip:()=>{Ue?.skip(),Ue?.state.status==="play"&&(wn="none",vt.run())},shake:r=>Hn.setShake(r),choose:r=>{Ue?.state.status==="level"&&(yt.play("ok"),Ue.choose(r),Ue.state.status==="level"?vt.level(Ue.state):(wn="none",vt.run()))},retry:()=>zo(),hub:()=>{gr=null,Di()},title:()=>Oc(),equip:(r,e)=>{xf(hn,bn,r,e)&&(Mr.write(hn),yt.play("ok"),gr=null,Di())},buy:r=>{_f(hn,bn,r)&&(Mr.write(hn),yt.play("ok"),Di())},openSlot:r=>{gr=r,Di()},shop:r=>{(r==="gear"?Mf(hn):Sf(hn,bn))&&(Mr.write(hn),yt.play("ok"),Di())},tab:r=>{vt.setTab(r),Di()},volume:r=>{yt.setMaster(r),vt.setVolume(r)}});vt.setVolume(yt.master);vt.setDebug(vu);Hn.setShake(vt.prefersShake());window.addEventListener("pointerdown",r=>{yt.unlock(),(r.target instanceof Element?r.target.closest("button"):null)&&yt.play("click")},{capture:!0});window.addEventListener("resize",()=>Hn.resize());let pd=performance.now(),Bo=performance.now(),Go=0;function Su(r){const e=Math.min(.5,(r-pd)/1e3)||0;pd=r;const t=Ue&&sn==="run"?Ue.drainFx():[];if(Ue&&sn==="run"&&Ue.state.status==="play"){const n=vt.readMove(),i=Qv(n.x,n.y);let s=e*dM,a=0;for(;s>0&&a++<90&&Ue.state.status==="play";){const o=Math.min(.05,s);Ue.step(o,i.x,i.z),s-=o}}if(Ue&&sn==="run"){for(const i of t)if(i.kind==="shoot"?yt.play("shoot"):i.kind==="cast"?yt.play("cast"):i.kind==="slash"?yt.play("slash"):i.kind==="slam"?yt.play("slam"):i.kind==="boom"?yt.play("boom"):i.kind==="hurt"?yt.play("hurt"):i.kind==="level"?yt.play("level"):i.kind==="die"?yt.play("die"):i.kind==="clear"?yt.play("clear"):i.kind==="banner"?yt.play("banner"):i.kind==="shrine"?yt.play("shrine"):i.kind==="pickup"&&yt.play("pickup"),(i.kind==="hit"||i.kind==="hurt")&&i.text){const s=Hn.project(i.x,1.7,i.z);s.ok&&vt.float(i.text,s.x,s.y,i.color??"#fff6ea")}const n=Ue.state.status;if(n==="level"&&uM?(Ue.choose(0),wn="none"):n==="level"&&wn!=="level"?(wn="level",vt.level(Ue.state)):n==="play"&&wn==="level"&&(wn="none",vt.run()),n==="play"&&vt.hud(Ue.state),(n==="dead"||n==="clear")&&!Fa){Fa=!0,wn="none";const i=vf(hn,{hero:bn,seconds:Ue.state.t,kills:Ue.state.kills,cleared:n==="clear",loot:Ue.state.loot.slice(),gold:Ue.state.gold});Mr.write(hn),vt.result({cleared:n==="clear",time:Gc(Ue.state.t),kills:Ue.state.kills,level:Ue.state.player.level,gained:i.gained,before:i.before,after:i.after,items:i.minted.map(s=>Bi[s.defId]?.name??s.defId),gold:Ue.state.gold,purse:hn.gold})}}if(Hn.render(e,sn==="run"?Ue:null,t),vu){const n=window;n.__place=(i,s)=>{!Ue||sn!=="run"||(Ue.state.player.x=i,Ue.state.player.z=s)},n.__setLift=(i,s)=>{if(!Ue||sn!=="run")return;const a=Math.max(0,i);Ue.state.doorsOpen=Math.max(Ue.state.doorsOpen,a+1),Ue.state.doorLift[a]=s},n.__resume=()=>Ue?.resume(),n.__probe=()=>{if(!Ue||sn!=="run")return{screen:sn,status:"menu"};const i=Ue.state;return{screen:sn,status:i.status,map:i.mapId,stage:i.stage,progress:Math.round(i.progress*100),note:i.stageNote,shrines:`${i.shrineDone}/${i.shrineTotal}`,room:i.bossRoom,roomKills:i.roomKills,roomNeed:i.roomNeed,roomLeft:Math.ceil(i.roomLeft),doors:i.doorsOpen,doorLift:i.doorLift.map(s=>Math.round(s*100)/100),portal:i.portalOpen,next:(()=>{const s=i.shrines.find(a=>a.alive&&!a.used);return s?{x:s.x,z:s.z}:null})(),t:Math.round(i.t*10)/10,hp:Math.round(i.player.hp),maxHp:Math.round(i.player.maxHp),x:Math.round(i.player.x*10)/10,z:Math.round(i.player.z*10)/10,level:i.player.level,kills:i.kills,alive:i.alive,gold:i.gold,banner:i.bannerT>0?i.banner:"",boss:i.boss?{alive:i.boss.alive,hp:Math.round(i.boss.hp),max:Math.round(i.boss.maxHp)}:null,telegraph:i.zones.some(s=>s.alive&&s.hostile&&s.t<s.delay),elite:!!i.elite?.alive,pickups:i.pickups.filter(s=>s.alive).map(s=>s.kind),skills:i.skills.map(s=>`${s.id}${s.level}${s.evolved?"*":""}`),offer:i.offer?.map(s=>s.title)??null,near:(()=>{let s=99,a=1,o=0;const c=(l,h)=>{const d=l-i.player.x,u=h-i.player.z,f=Math.hypot(d,u);f<s&&(s=f,a=d,o=u)};for(const l of i.enemies)l.alive&&c(l.x,l.z);return i.boss?.alive&&c(i.boss.x,i.boss.z),{d:Math.round(s*10)/10,x:a,z:o}})()}},Go+=1,r-Bo>=500&&(vt.setFps(Math.round(Go*1e3/(r-Bo)),Ue?.state.alive??0),Go=0,Bo=r)}requestAnimationFrame(Su)}Hn.load((r,e)=>vt.boot(r,e)).then(()=>{Oc(),requestAnimationFrame(Su)}).catch(r=>{console.error(r),vt.bootError(r instanceof Error?r.message:"모델을 열 수 없다")});
