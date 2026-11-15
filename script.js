const menuButton=document.querySelector('.menu-toggle');const nav=document.querySelector('.nav');menuButton.addEventListener('click',()=>{const open=nav.classList.toggle('open');menuButton.setAttribute('aria-expanded',String(open));menuButton.textContent=open?'×':'☰'});nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');menuButton.setAttribute('aria-expanded','false');menuButton.textContent='☰'}));
const products={
drug:[
['Minoxidil Topical Solution 2% w/v','Alopecia','Ethanol/IPA-free; very low glycol; excellent rheology.'],
['Minoxidil Topical Solution 5% w/v','Alopecia','Ethanol/IPA-free; very low glycol; excellent rheology.'],
['Minoxidil Topical Solution 10% w/v','Alopecia','Ethanol/IPA-free; very low glycol; excellent rheology.'],
['Minoxidil 2% + Finasteride 0.1% lipid solution','Alopecia','Customisation and compatibility with synergistic actives.'],
['Minoxidil 5% + Finasteride 0.1% lipid solution','Alopecia','Customisation and compatibility with synergistic actives.'],
['Minoxidil 10% + Finasteride 0.1% lipid solution','Alopecia','Customisation and compatibility with synergistic actives.'],
['Luliconazole 1% w/v cream','Tinea fungal infection','Ethanol/IPA-free; very low glycol.'],
['Luliconazole 1% w/v lotion','Tinea fungal infection','Ethanol/IPA-free; very low glycol.'],
['Ketoconazole 2% microbeads topical suspension / shampoo','Anti-dandruff shampoo','Microbeads technology; potency and drug degradation focus; scrubbing action.']
],
cosmetic:[
['Glycolic acid 15% + Urea 10% topical lotion','Exfoliation & skin tone','Stability, emulsification and patient-compliance focus.'],
['Glycolic acid 15% + Urea 10% cream','Advanced skin & foot care','Moisturises and exfoliates dry, rough, cracked or callused feet.'],
['Kojic Dipalmitate Cream 2% w/v','Lip depigmentation','No recrystallisation of key ingredients; no colour change or stickiness.'],
['Caffeinated Hair Shampoo','Hair regrowth','Combination of actives; no scalp dryness; comb-applicator concept.'],
['Caffeinated Hair Serum','Hair regrowth','Combination of actives; clinically proven ingredients as stated.'],
['Hair Booster Serum','Hair growth support','Scalp nourishment, hair-root strengthening and hair-surface care.'],
['Intense Moisturizing Cream','Moisturiser','Paraben-free; no stickiness or messy formulation.'],
['Skin Depigmentation Cream','Acanthosis nigricans-associated pigmentation','For areas such as elbows, underarms, knees and neck, as described in the source.']
]};
function renderProducts(type){const grid=document.getElementById('productGrid');grid.innerHTML=products[type].map((p,i)=>`<article class="product-card"><span class="category">${type==='drug'?'DRUG FORMULATION':'COSMETIC FORMULATION'} · ${(i+1).toString().padStart(2,'0')}</span><h3>${p[0]}</h3><p>${p[1]}</p><div class="benefit">${p[2]}</div></article>`).join('')}
document.querySelectorAll('.product-tab').forEach(tab=>tab.addEventListener('click',()=>{document.querySelectorAll('.product-tab').forEach(t=>{t.classList.remove('active');t.setAttribute('aria-selected','false')});tab.classList.add('active');tab.setAttribute('aria-selected','true');renderProducts(tab.dataset.filter)}));renderProducts('drug');document.getElementById('year').textContent=new Date().getFullYear();