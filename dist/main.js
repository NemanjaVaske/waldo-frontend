(()=>{var e={51:e=>{e.exports=()=>{const e=document.getElementById("content");for(;e.firstChild;)e.removeChild(e.firstChild)}},844:e=>{e.exports=e=>{const t=document.getElementById("content"),n=document.createElement("span");n.setAttribute("id","timer");const s=document.createElement("div");s.classList.add("characters"),s.appendChild(n);const a=document.createElement("div");a.classList.add("picture-cover");const o=document.createElement("img");o.setAttribute("id","waldo"),o.setAttribute("src","./assets/image/waldo.jpg"),s.appendChild(o);const c=document.createElement("img");c.setAttribute("id","wenda"),c.setAttribute("src","./assets/image/wenda.jpg"),s.appendChild(c);const i=document.createElement("img");i.setAttribute("id","wizard"),i.setAttribute("src","./assets/image/wizard.jpg"),s.appendChild(i);const d=document.createElement("img");d.setAttribute("id","odlaw"),d.setAttribute("src","./assets/image/odlaw.jpg"),s.appendChild(d),t.appendChild(s);const r=document.createElement("img");r.setAttribute("src",`./assets/image/${e}`),r.classList.add("main-picture"),a.appendChild(r),t.appendChild(a)}},261:(e,t,n)=>{const s=n(458),a=n(717);n(51),e.exports=(e,t)=>{const n=document.getElementsByClassName("main-picture")[0];let o=0;n.addEventListener("click",(n=>{let c=n.offsetX,i=n.offsetY;t.characters.forEach((n=>{n.x_pos-c<=7&&n.x_pos-c>=-7&&n.y_pos-i<=7&&n.y_pos-i>=-7&&(a(n.x_pos,n.y_pos,n.name),o++,o===t.characters.length&&s(e,t))}))}))}},458:(e,t,n)=>{const s=n(51),a=n(265);e.exports=(e,t)=>{const n=document.getElementById("timer").innerHTML;s(),window.clearInterval(e),a(n,t)}},666:(e,t,n)=>{const s=n(51),a=n(688);e.exports=async()=>{s();const e=document.getElementById("content");await(async()=>{const t=await fetch("http://localhost:3000/api/v1/images");(await t.json()).forEach((t=>{const n=document.createElement("img");n.classList.add("home-image"),n.setAttribute("src",`./assets/image/${t.url}`),e.appendChild(n),n.addEventListener("click",(()=>{a(t.id)}))}))})()}},688:(e,t,n)=>{const s=n(51),a=n(844),o=n(261),c=n(503);e.exports=async e=>{if(e){const t=await fetch(`http://localhost:3000/api/v1/images/${e}`),n=await t.json();s(),a(n.url);let i=setInterval(c,1e3);o(i,n)}}},265:(e,t,n)=>{const s=n(241);e.exports=(e,t)=>{const n=document.getElementById("content"),a=document.createElement("div");a.innerHTML='<form>\n  <p>You win! Please enter your Name</p>\n  <label>Name:</label>\n  <input type="text" id="name"  name="name"/>\n  \n  <input type="submit" value="Submit" />\n</form>',n.appendChild(a),a.addEventListener("submit",(n=>{n.preventDefault(),s(n.target.childNodes[5].value,e,t)}))}},241:e=>{e.exports=async(e,t,n)=>{let s=t.split(":"),a=parseInt(s[0],10);s=parseInt(s[1],10)+60*a;const o=await fetch(`http://localhost:3000/api/v1/images/${n.id}/scores/${e}/${s}`,{method:"post"}),c=await o.json(),i=document.getElementById("content"),d=document.createElement("ol");d.textContent="Best scores:",c.forEach((e=>{const t=document.createElement("li");let n=e.seconds%60,s=e.seconds/60;t.innerHTML=e.name+" with time "+Math.floor(s)+":"+n,d.appendChild(t)})),i.appendChild(d);const r=document.createElement("button");r.textContent="Play Again!",i.appendChild(r),r.addEventListener("click",(()=>{window.location.reload()}))}},717:e=>{e.exports=(e,t,n)=>{const s=document.getElementsByClassName("picture-cover")[0],a=document.createElement("div");document.getElementById(`${n}`).style.border="3px solid limegreen",a.classList.add("tag"),a.style.top=t+6+"px",a.style.left=e-10+"px",s.appendChild(a)}},503:e=>{let t=0,n=0;e.exports=()=>{n++,n/60==1&&(n=0,t++),document.getElementById("timer").innerHTML=t+":"+n}}},t={};function n(s){var a=t[s];if(void 0!==a)return a.exports;var o=t[s]={exports:{}};return e[s](o,o.exports,n),o.exports}(()=>{const e=n(666);window.addEventListener("load",(async()=>{await e()}))})()})();