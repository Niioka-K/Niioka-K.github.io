(() => {
  const list = document.getElementById("notes-list");
  if (!list || typeof LAB_NOTES === "undefined") return;
  const labels = {reports:"研究報告",column:"コラム",life:"研究室の日々",tools:"研究ツール"};
  const buttons = [...document.querySelectorAll("[data-category]")];
  const esc = value => String(value ?? "").replace(/[&<>"']/g, ch => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[ch]));
  let active = null;
  function render(){
    buttons.forEach(btn=>btn.setAttribute("aria-pressed",String(btn.dataset.category===active)));
    const articles = LAB_NOTES.filter(x=>!active||x.category===active).slice().sort((a,b)=>String(b.date).localeCompare(String(a.date)));
    if(!articles.length){list.innerHTML='<p class="notes-empty">記事は準備中です。</p>';return;}
    list.innerHTML=articles.map(x=>`<article class="note-item"><div class="meta">${esc(x.date)} / ${esc(labels[x.category]||x.category)} ${Array.isArray(x.tags)?x.tags.map(t=>' · #'+esc(t)).join(''):''}</div><h4>${esc(x.title)}</h4><p>${esc(x.summary)}</p>${x.url && /^(articles\/[-\w./]+\.html|https:\/\/[^\s"<>]+)$/.test(x.url)?`<a href="${esc(x.url)}">続きを読む →</a>`:''}</article>`).join("");
  }
  buttons.forEach(btn=>btn.addEventListener("click",()=>{active=active===btn.dataset.category?null:btn.dataset.category;render();}));
  document.getElementById("notes-reset")?.addEventListener("click",()=>{active=null;render();});
  render();
})();
