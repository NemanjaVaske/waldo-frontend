(()=>{var e={51:e=>{e.exports=()=>{const e=document.getElementById("content");for(;e.firstChild;)e.removeChild(e.firstChild)}},844:e=>{e.exports=e=>{const t=document.getElementById("content"),s=document.createElement("div");s.classList.add("characters");const a=document.createElement("div");a.classList.add("picture-cover");const o=document.createElement("img");o.setAttribute("id","waldo"),o.setAttribute("src","./assets/image/waldo.jpg"),s.appendChild(o);const n=document.createElement("img");n.setAttribute("id","wenda"),n.setAttribute("src","./assets/image/wenda.jpg"),s.appendChild(n);const c=document.createElement("img");c.setAttribute("id","wizard"),c.setAttribute("src","./assets/image/wizard.jpg"),s.appendChild(c);const i=document.createElement("img");i.setAttribute("id","odlaw"),i.setAttribute("src","./assets/image/odlaw.jpg"),s.appendChild(i),t.appendChild(s);const d=document.createElement("img");d.setAttribute("src",`./assets/image/${e}`),d.classList.add("main-picture"),a.appendChild(d),t.appendChild(a)}},261:(e,t,s)=>{const a=s(458),o=s(717);s(51),e.exports=e=>{const t=document.getElementsByClassName("main-picture")[0];let s=0;t.addEventListener("click",(t=>{let n=t.offsetX,c=t.offsetY;e.forEach((t=>{t.x_pos-n<=7&&t.x_pos-n>=-7&&t.y_pos-c<=7&&t.y_pos-c>=-7&&(console.log("pronasli ste "+t.name),o(t.x_pos,t.y_pos,t.name),s++,s===e.length&&a())}))}))}},458:(e,t,s)=>{const a=s(51);e.exports=()=>{a(),console.log("kraj")}},666:(e,t,s)=>{const a=s(51),o=s(688);e.exports=async()=>{a();const e=document.getElementById("content");await(async()=>{const t=await fetch("http://localhost:3000/api/v1/images"),s=await t.json();console.log(s),s.forEach((t=>{const s=document.createElement("img");s.classList.add("home-image"),s.setAttribute("src",`./assets/image/${t.url}`),e.appendChild(s),s.addEventListener("click",(()=>{o(t.id)}))}))})()}},688:(e,t,s)=>{const a=s(51),o=s(844),n=s(261);e.exports=async e=>{if(e){const t=await fetch(`http://localhost:3000/api/v1/images/${e}`),s=await t.json();console.log(s.characters),a(),o(s.url),n(s.characters)}}},717:e=>{e.exports=(e,t,s)=>{const a=document.getElementsByClassName("picture-cover")[0],o=document.createElement("div"),n=document.getElementById(`${s}`);n.style.border="3px solid limegreen",console.log(n),o.classList.add("tag"),o.style.top=t+6+"px",o.style.left=e-10+"px",a.appendChild(o)}}},t={};function s(a){var o=t[a];if(void 0!==o)return o.exports;var n=t[a]={exports:{}};return e[a](n,n.exports,s),n.exports}(()=>{const e=s(666);window.addEventListener("load",(async()=>{await e()}))})()})();