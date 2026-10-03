/* =========================================================
   ここだけ編集すれば、日常的な更新ができます。
   文字列は "..." の中を書き換えてください。
   項目を増やす場合は、同じ形式の行をコピーしてください。
   ========================================================= */

const SITE_CONTENT = {
  labName: "犯罪認知脳科学研究室",
  labNameEn: "Laboratory of Criminal Cognitive Neuroscience",

  members: [
    // 例:
    // { role: "PI", name: "氏名", detail: "専門・所属など" },
  ],

  publications: [
    // 例:
    // { year: "2026", text: "著者名. 論文タイトル. 雑誌名." },
  ],

  news: [
    { date: "2026.10", text: "研究室ウェブサイトを準備しています。" },
    // 例:
    // { date: "2026.11.01", text: "○○学会で研究成果を発表しました。" },
  ]
};

/* 以下は表示処理です。通常は編集しなくて大丈夫です。 */
document.getElementById("lab-name").textContent = SITE_CONTENT.labName;
document.getElementById("lab-name-en").textContent = SITE_CONTENT.labNameEn;

function renderList(id, items, renderer, emptyText) {
  const el = document.getElementById(id);
  if (!el) return;
  if (!items.length) {
    el.innerHTML = `<p class="empty">${emptyText}</p>`;
    return;
  }
  el.innerHTML = items.map(renderer).join("");
}

renderList("members-list", SITE_CONTENT.members,
  x => `<div class="data-row"><b>${x.role || ""}</b><span><strong>${x.name || ""}</strong><small>${x.detail || ""}</small></span></div>`,
  "メンバー情報は準備中です。");

renderList("publications-list", SITE_CONTENT.publications,
  x => `<div class="data-row"><b>${x.year || ""}</b><span>${x.text || ""}</span></div>`,
  "研究業績は準備中です。");

renderList("news-list", SITE_CONTENT.news,
  x => `<div class="data-row"><b>${x.date || ""}</b><span>${x.text || ""}</span></div>`,
  "お知らせはありません。");
