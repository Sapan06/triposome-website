(() => {
  'use strict';
  const menuButton = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.nav');
  if (menuButton && nav) {
    menuButton.addEventListener('click', () => {
      const open = nav.classList.toggle('is-open');
      menuButton.setAttribute('aria-expanded', String(open));
      menuButton.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
    });
    nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
      nav.classList.remove('is-open');
      menuButton.setAttribute('aria-expanded', 'false');
      menuButton.setAttribute('aria-label', 'Open navigation');
    }));
    document.addEventListener('keydown', event => {
      if (event.key === 'Escape' && nav.classList.contains('is-open')) {
        nav.classList.remove('is-open');
        menuButton.setAttribute('aria-expanded', 'false');
        menuButton.setAttribute('aria-label', 'Open navigation');
        menuButton.focus();
      }
    });
  }

  const products = {
    hair: [
      {name:'Minoxidil topical solution',type:'TOPICAL SOLUTION',strength:'2% · 5% · 10% w/v',detail:'Concentrations grouped as one formulation family.',pack:'bottle'},
      {name:'Minoxidil + Finasteride solution',type:'TOPICAL SOLUTION',strength:'Minoxidil 2% / 5% / 10% + Finasteride 0.1%',detail:'Concentrations grouped as one formulation family.',pack:'dropper'},
      {name:'Ketoconazole microbeads',type:'SHAMPOO / SUSPENSION',strength:'Ketoconazole 2% w/v',detail:'Microbeads formulation listed in the source portfolio.',pack:'shampoo'},
      {name:'Caffeinated hair shampoo',type:'HAIR CLEANSER',strength:'Caffeinated shampoo concept',detail:'Comb-applicator concept mentioned in the source material.',pack:'shampoo'},
      {name:'Caffeinated hair serum',type:'HAIR SERUM',strength:'Caffeinated serum concept',detail:'Formulation concept listed in the supplied portfolio.',pack:'dropper'},
      {name:'Hair booster serum',type:'HAIR SERUM',strength:'Novel + natural serum concept',detail:'Scalp and hair-care concept described in the source.',pack:'dropper'}
    ],
    skin: [
      {name:'Luliconazole cream',type:'TOPICAL CREAM',strength:'Luliconazole 1% w/v',detail:'Antifungal cream concept listed in the source portfolio.',pack:'jar'},
      {name:'Luliconazole lotion',type:'TOPICAL LOTION',strength:'Luliconazole 1% w/v',detail:'Antifungal lotion concept listed in the source portfolio.',pack:'bottle'},
      {name:'Glycolic acid + urea lotion',type:'TOPICAL LOTION',strength:'Glycolic acid 15% + Urea 10%',detail:'Exfoliating and skin-care formulation concept.',pack:'bottle'},
      {name:'Glycolic acid + urea cream',type:'TOPICAL CREAM',strength:'Glycolic acid 15% + Urea 10%',detail:'Moisturising and exfoliating foot-care concept.',pack:'jar'},
      {name:'Kojic dipalmitate cream',type:'TOPICAL CREAM',strength:'Kojic dipalmitate 2% w/v',detail:'Cream concept listed in the supplied portfolio.',pack:'jar'},
      {name:'Intense moisturising cream',type:'MOISTURISING CREAM',strength:'Moisturiser formulation concept',detail:'Paraben-free is stated in the supplied source.',pack:'jar'},
      {name:'Skin depigmentation cream',type:'TOPICAL CREAM',strength:'Skin-care formulation concept',detail:'Source associates this concept with pigmentation concerns.',pack:'jar'}
    ],
    baby: [],
    hygiene: []
  };
  const grid = document.getElementById('product-grid');
  const tabs = [...document.querySelectorAll('.category-tab')];
  const panel = document.getElementById('product-panel');
  const safe = value => String(value).replace(/[&<>"']/g, char => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]));
  function card(product) {
    return `<article class="product-card">
      <div class="packshot" aria-hidden="true"><div class="pack ${safe(product.pack)}"><div class="pack-cap"></div><div class="pack-body"><span class="pack-brand">TRIPOSOME™</span><span class="pack-line"></span><b>${safe(product.type)}</b><small>${safe(product.strength)}</small><span class="pack-label">ILLUSTRATIVE</span></div></div></div>
      <div class="product-info"><span class="product-type">${safe(product.type)}</span><h3>${safe(product.name)}</h3><p class="product-strength">${safe(product.strength)}</p><p>${safe(product.detail)}</p></div>
    </article>`;
  }
  function render(category) {
    if (!grid) return;
    const items = products[category] || [];
    if (!items.length) {
      const label = category === 'baby' ? 'Baby care' : 'Hygiene';
      grid.innerHTML = `<div class="empty-products"><h3>${label} products are not listed yet</h3><p>No approved product details for this category were included in the supplied portfolio. This section can be populated when the information is available.</p></div>`;
    } else {
      grid.innerHTML = items.map(card).join('');
    }
    tabs.forEach(tab => {
      const active = tab.dataset.category === category;
      tab.classList.toggle('is-active', active);
      tab.setAttribute('aria-selected', String(active));
      tab.tabIndex = active ? 0 : -1;
    });
    if (panel) panel.setAttribute('aria-labelledby', `tab-${category}`);
  }
  tabs.forEach((tab, index) => {
    tab.addEventListener('click', () => render(tab.dataset.category));
    tab.addEventListener('keydown', event => {
      if (!['ArrowRight','ArrowLeft','Home','End'].includes(event.key)) return;
      event.preventDefault();
      let next = index;
      if (event.key === 'ArrowRight') next = (index + 1) % tabs.length;
      if (event.key === 'ArrowLeft') next = (index - 1 + tabs.length) % tabs.length;
      if (event.key === 'Home') next = 0;
      if (event.key === 'End') next = tabs.length - 1;
      tabs[next].focus();
      render(tabs[next].dataset.category);
    });
  });
  render('hair');
  const year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();
})();
