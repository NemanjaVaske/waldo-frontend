(()=>{var e={51:e=>{e.exports=()=>{const e=document.getElementById("content");for(;e.firstChild;)e.removeChild(e.firstChild)}},844:e=>{e.exports=e=>{const t=document.getElementById("content"),s=document.createElement("span");s.setAttribute("id","timer");const n=document.createElement("div");n.classList.add("characters"),n.appendChild(s);const a=document.createElement("div");a.classList.add("picture-cover");const o=document.createElement("img");o.setAttribute("id","waldo"),o.setAttribute("src","./assets/image/waldo.jpg"),n.appendChild(o);const c=document.createElement("img");c.setAttribute("id","wenda"),c.setAttribute("src","./assets/image/wenda.jpg"),n.appendChild(c);const i=document.createElement("img");i.setAttribute("id","wizard"),i.setAttribute("src","./assets/image/wizard.jpg"),n.appendChild(i);const d=document.createElement("img");d.setAttribute("id","odlaw"),d.setAttribute("src","./assets/image/odlaw.jpg"),n.appendChild(d),t.appendChild(n);const r=document.createElement("img");r.setAttribute("src",`./assets/image/${e}`),r.classList.add("main-picture"),a.appendChild(r),t.appendChild(a)}},261:(e,t,s)=>{const n=s(458),a=s(717);s(51),e.exports=(e,t)=>{const s=document.getElementsByClassName("main-picture")[0];let o=0;s.addEventListener("click",(s=>{let c=s.offsetX,i=s.offsetY;t.forEach((s=>{s.x_pos-c<=7&&s.x_pos-c>=-7&&s.y_pos-i<=7&&s.y_pos-i>=-7&&(console.log("pronasli ste "+s.name),a(s.x_pos,s.y_pos,s.name),o++,o===t.length&&n(e))}))}))}},458:(e,t,s)=>{const n=s(51);e.exports=e=>{const t=document.getElementById("timer").innerHTML;console.log(t),n(),console.log("kraj"),window.clearInterval(e)}},666:(e,t,s)=>{const n=s(51),a=s(688);e.exports=async()=>{n();const e=document.getElementById("content");await(async()=>{const t=await fetch("http://localhost:3000/api/v1/images");(await t.json()).forEach((t=>{const s=document.createElement("img");s.classList.add("home-image"),s.setAttribute("src",`./assets/image/${t.url}`),e.appendChild(s),s.addEventListener("click",(()=>{a(t.id)}))}))})()}},688:(e,t,s)=>{const n=s(51),a=s(844),o=s(261),c=s(503);e.exports=async e=>{if(e){const t=await fetch(`http://localhost:3000/api/v1/images/${e}`),s=await t.json();n(),a(s.url);let i=setInterval(c,1e3);o(i,s.characters)}}},717:e=>{e.exports=(e,t,s)=>{const n=document.getElementsByClassName("picture-cover")[0],a=document.createElement("div"),o=document.getElementById(`${s}`);o.style.border="3px solid limegreen",console.log(o),a.classList.add("tag"),a.style.top=t+6+"px",a.style.left=e-10+"px",n.appendChild(a)}},503:e=>{let t=0,s=0;e.exports=()=>{s++,s/60==1&&(s=0,t++),document.getElementById("timer").innerHTML=t+":"+s}}},t={};function s(n){var a=t[n];if(void 0!==a)return a.exports;var o=t[n]={exports:{}};return e[n](o,o.exports,s),o.exports}(()=>{const e=s(666);window.addEventListener("load",(async()=>{await e()}))})()})();