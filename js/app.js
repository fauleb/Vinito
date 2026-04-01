// =============================================
// App principal V1NITO
// =============================================

const FILTER_TREE = {
  Tintos: [
    'Malbec',
    'Cabernet Franc',
    'Merlot',
    'Pinot Noir',
    'Cabernet Sauvignon',
    'Bonarda',
    'Syrah',
  ],
  Blancos: [
    'Chardonnay',
    'Sauvignon Blanc',
  ],
  Espumantes: [
    'Espumante',
  ],
};

const SORT_OPTIONS = [
  { value: 'price-desc', label: 'Precio mayor a menor' },
  { value: 'price-asc', label: 'Precio menor a mayor' },
];

const LOCAL_IMAGE_PATHS = [
  'img/DVCatenaMalbecVineyardDesignatedAdrianna.png',
  'img/DVCatena Garnacha Apelaciones Lunlunta.png',
  'img/DVCATEANA_MB-MB.png',
  'img/DILEMA.png',
  'img/D.V. Catena Tinto Historico Apelaciones Paraje Altamira.png',
  'img/D.V. Catena Malbec Vineyard Designated Nicasia Altamira.png',
  'img/D.V. Catena L ’Esploratore Malbec La Rioja.png',
  'img/D.V. Catena L ’Esploratore Malbec Cafayate Salta.png',
  'img/D.V. Catena Cabernet Sauvignon Vineyard Designated Piramide.png',
  'img/D.V. Catena Cabernet Sauvignon Vineyard Designated Domingo.png',
  'img/D.V. Catena Blanco Historico Apelaciones Agrelo.png',
  'img/CorderoPielLobo.png',
  'img/CHAMPAN BRESSIA.png',
  'img/chacabuco.png',
  'img/cazador malbec.png',
  'img/BRESSIA PROFUNDO.png',
  'img/BRESSIA CONJURO.png',
  'img/BIRTHOFCABERBET.png',
  'img/ANGELICA_MERLOT.png',
  'img/ANGELICA_MALBEC.png',
  'img/ANGELICA_CHARDONNAY.png',
  'img/ANGELICA_CBSAU.png',
  'img/ANGELICA_CBF.png',
  'img/Altupalka_MB-T.png',
  'img/ALTUPALKA-MB EXTREMO.png',
  'img/ALTUPALKA TORROTNES.png',
  'img/ALTUPALKA SAUV.BLANC.png',
  'img/ALTUPALKA MB MB.png',
  'img/ALTUPALKA CABSAUV.png',
  'img/Amuleto malbec.png',
  'img/Amuleto syrah.png',
  'img/Amuleto Bonarda.png',
  'img/Amuleto raros club moscato bianco.png',
  'img/Amuleto raros club freisa.png',
  'img/Amuleto expedicion uco blend.png',
  'img/AlaparGustavo.png',
  'img/AlaParE.E.png',
  'img/AlaParE.B.png',
  'img/ALA COLORADA PETIT VERDOT.png',
  'img/ALA COLORADA CBF.png',
  'img/ALA COLORADA ANCELLOTA.png',
  'img/LAS PERDICES RED BLEND.png',
  'img/LAS PERDICES MALBEC.png',
  'img/LAS PERDICES CHARDONNAY.png',
  'img/lAGRIMA_CANELA.png',
  'img/GRANENEMIGO_GUALTALLARAY.png',
  'img/GRANENEMIGO_CORTE.png',
  'img/GRANENEMIGO_CHACAYES.png',
  'img/GRANENEMIGO_CEPILLO.png',
  'img/GRANENEMIGO_AGRELO.png',
  'img/FAMILIA GASCON MALBEC.png',
  'img/ESCORIHUELA ROSAURA.png',
  'img/ESCORIHUELA MALBEC.png',
  'img/ESCORIHUELA MALBEC CAB.png',
  'img/ESCORIHUELA GRAN RESERVA MALBEC.png',
  'img/ESCORIHUELA GRAN RESERVA CHARDONNAY.png',
  'img/ESCORIHUELA G.RESERVA CBS.png',
  'img/ESCORIHUELA CHARDONNAY.png',
  'img/ESCORIHUELA CBF.png',
  'img/ENEMIGO_MALBEC.png',
  'img/ENEMIGO_CHARDONNAY.jpg',
  'img/ENEMIGO_CBF.png',
  'img/ENEMIGO_BONARDA.png',
  'img/DVCATENA_PINOT.png',
  'img/DVCATENA_CHARDONNAY.png',
  'img/DVCATENA_CB-MB.png',
  'img/DVCATENA_CB-CB.png',
  'img/NICASIA_BLANC DE BLANCS.png',
  'img/MONTEAGRELO.png',
  'img/MALBEC_ARGENTINO.png',
  'img/Mosquita muerta.png',
  'img/Nebula blend de tintas.png',
  'img/Nebula cav sauv.png',
  'img/Nebula rosado de malbec.png',
  'img/nebula malbec (2).png',
  'img/nebula syrah (2).png',
  'img/LUIGI PINOT.png',
  'img/LUIGI MALBEC.png',
  'img/LUIGI DE SANGRE MALBEC DOC.png',
  'img/LUIGI DE SANGRE CBF.png',
  'img/LUIGI CHARDONNAY.png',
  'img/LUIGI BOSCA DE SANGRE MALBEC VALLE DE UCO.png',
  'img/LAS PERDICES RESERVA PINOT.png',
  'img/LAS PERDICES RESERVA MALBEC.png',
  'img/LAS PERDICES RESERVA CHARDONNAY.png',
  'img/LAS PERDICES RESERVA BONARDA.png',
  'img/NICASIA_RED BLEND MALBEC.png',
  'img/NICASIA_RED BLEND CBF.png',
  'img/NICASIA_GRANBLEND.png',
  'img/PEQUEÑAS PROD PINOT.png',
  'img/PEQUEÑAS PROD CBF.png',
  'img/NICOLAS_CATENA.png',
  'img/NICOLASCATENA_BONARDA.png',
  'img/otro loco mas.png',
  'img/NAMPE.png',
  'img/PIEL NEGRA PINOT.png',
  'img/PEQUEÑAS PRODUCCIONES MALBEC.png',
  'img/perro callejero.png',
  'img/pispi.png',
  'img/portillo.png',
  'img/PULENTA CBF.png',
  'img/ULTIMA_HOJA.png',
  'img/TRUMPETER MALBEC.png',
  'img/TRUMPETER CHARDONNAY.png',
  'img/TRUMPETER CBS.png',
  'img/TRUMPETER CBF.png',
  'img/THE PRESIDENTS.png',
  'img/Salentein Extra Brut.png',
  'img/salentein brut rose.png',
  'img/salentein brut nature.png',
  'img/salentein blanc de blancs.png',
  'img/SAINT_PINOT.png',
  'img/SAINT_MALBEC.png',
  'img/SAINT_CHARDONNAY.png',
  'img/SAINT_CBS.png',
  'img/SAINT_CBF.png',
  'img/Santa Julia.png',
  'img/Sapo de otro pozo.png',
  'img/RUTINI SINGLE VINEYARD ALTAMIRA MALBEC.png',
  'img/RUTINI MALBEC.png',
  'img/RUTINI CHARDONNAY.png',
  'img/RUTINI CB MB.png',
  'img/PULENTA MALBEC.png',
  'img/PULENTA CHARDONNAY.png',
];

const LOCAL_IMAGE_CANDIDATES = LOCAL_IMAGE_PATHS.map(path => ({
  path,
  key: normalizeImageKey(path),
}));

const MANUAL_IMAGE_MAP = {
  [normalizeText('A La Par Extra Brut')]: 'img/AlaParE.B.png',
  [normalizeText('A La Par Edición Especial Brut Nature')]: 'img/AlaParE.E.png',
  [normalizeText('Gustavo Agostini Brut Nature')]: 'img/AlaparGustavo.png',
  [normalizeText('Salentein brut rose')]: 'img/salentein brut rose.png',
  [normalizeText('Salentein brut nature')]: 'img/salentein brut nature.png',
  [normalizeText('Salentein Blanc de Blanc')]: 'img/salentein blanc de blancs.png',
  [normalizeText('Salentein extra brut')]: 'img/Salentein Extra Brut.png',
};

const VARIETAL_TO_TYPE = Object.entries(FILTER_TREE).reduce((acc, [type, varietals]) => {
  varietals.forEach(varietal => {
    acc[normalizeText(varietal)] = type;
  });
  return acc;
}, {});

const hasCart = typeof Cart === 'function';
const cart = hasCart ? new Cart() : null;

let allWines = [];
let activeTypeFilter = 'Todos';
let activeVarietalFilter = 'Todos';
let activeSearchTerm = '';
let activeSort = 'price-desc';

// ---- DOM refs ----
const winesGrid = document.getElementById('winesGrid');
const loading = document.getElementById('loading');
const errorMsg = document.getElementById('errorMsg');
const filtersContainer = document.getElementById('filters');
const cartBtn = document.getElementById('cartBtn');
const cartCount = document.getElementById('cartCount');
const cartSidebar = document.getElementById('cartSidebar');
const cartOverlay = document.getElementById('cartOverlay');
const cartClose = document.getElementById('cartClose');
const cartItems = document.getElementById('cartItems');
const cartFooter = document.getElementById('cartFooter');
const cartTotal = document.getElementById('cartTotal');
const checkoutBtn = document.getElementById('checkoutBtn');
const menuBtn = document.getElementById('menuBtn');
const menuClose = document.getElementById('menuClose');
const menuOverlay = document.getElementById('menuOverlay');
const menuSidebar = document.getElementById('menuSidebar');
const menuSearch = document.getElementById('menuSearch');
const menuSearchBtn = document.getElementById('menuSearchBtn');
const catalogSearchForm = document.getElementById('catalogSearchForm');
const catalogSearchToggle = document.getElementById('catalogSearchToggle');
const catalogSearch = document.getElementById('catalogSearch');
const menuFilterButtons = document.querySelectorAll('[data-type]');
const wineModal = document.getElementById('wineModal');
const wineModalOverlay = document.getElementById('wineModalOverlay');
const wineModalClose = document.getElementById('wineModalClose');
const wineModalContent = document.getElementById('wineModalContent');

const hasCatalog = Boolean(winesGrid && loading && filtersContainer);
const hasWineModal = Boolean(wineModal && wineModalOverlay && wineModalClose && wineModalContent);
const shouldOpenCatalogInNewTab = !hasCatalog;

document.addEventListener('DOMContentLoaded', () => {
  applyQueryParams();
  setupMenuUI();
  setupWineModalUI();
  setupCatalogSearchUI();

  if (hasCatalog) {
    loadWines();
  }

  if (hasCart) {
    setupCartUI();
    updateCartBadge();
  }
});

async function loadWines() {
  if (!hasCatalog) return;

  loading.style.display = 'block';
  errorMsg.style.display = 'none';
  winesGrid.innerHTML = '';

  try {
    allWines = (await fetchWinesFromSheet()).map(prepareWineImage);
    syncCartItemImages();
    loading.style.display = 'none';
    buildFilters();
    renderWines();
  } catch (err) {
    console.error('Error cargando vinos:', err);
    loading.style.display = 'none';
    errorMsg.style.display = 'block';
  }
}

function buildFilters() {
  if (!filtersContainer) return;

  filtersContainer.innerHTML = '';

  const sortGroup = document.createElement('div');
  sortGroup.className = 'filters-group';

  const sortLabel = document.createElement('span');
  sortLabel.className = 'filters-label';
  sortLabel.textContent = 'Ordenar por';
  sortGroup.appendChild(sortLabel);

  const sortSelect = document.createElement('select');
  sortSelect.className = 'sort-select';

  SORT_OPTIONS.forEach(option => {
    const optionElement = document.createElement('option');
    optionElement.value = option.value;
    optionElement.textContent = option.label;
    optionElement.selected = option.value === activeSort;
    sortSelect.appendChild(optionElement);
  });

  sortSelect.addEventListener('change', event => {
    activeSort = event.target.value;
    renderWines();
  });

  sortGroup.appendChild(sortSelect);
  filtersContainer.appendChild(sortGroup);

  const typeGroup = document.createElement('div');
  typeGroup.className = 'filters-group';

  const typeLabel = document.createElement('span');
  typeLabel.className = 'filters-label';
  typeLabel.textContent = 'Tipo';
  typeGroup.appendChild(typeLabel);

  const typeButtons = document.createElement('div');
  typeButtons.className = 'filters-row';

  ['Todos', ...Object.keys(FILTER_TREE)].forEach(type => {
    typeButtons.appendChild(createFilterButton({
      label: type,
      isActive: type === activeTypeFilter,
      onClick: () => {
        activeTypeFilter = type;
        activeVarietalFilter = 'Todos';
        buildFilters();
        renderWines();
      },
    }));
  });

  typeGroup.appendChild(typeButtons);
  filtersContainer.appendChild(typeGroup);

  if (activeTypeFilter !== 'Todos') {
    const varietalGroup = document.createElement('div');
    varietalGroup.className = 'filters-group';

    const varietalLabel = document.createElement('span');
    varietalLabel.className = 'filters-label';
    varietalLabel.textContent = 'Varietal';
    varietalGroup.appendChild(varietalLabel);

    const varietalButtons = document.createElement('div');
    varietalButtons.className = 'filters-row';

    ['Todos', ...FILTER_TREE[activeTypeFilter]].forEach(varietal => {
      varietalButtons.appendChild(createFilterButton({
        label: varietal,
        isActive: varietal === activeVarietalFilter,
        onClick: () => {
          activeVarietalFilter = varietal;
          buildFilters();
          renderWines();
        },
      }));
    });

    varietalGroup.appendChild(varietalButtons);
    filtersContainer.appendChild(varietalGroup);
  }
}

function createFilterButton({ label, isActive, onClick }) {
  const btn = document.createElement('button');
  btn.className = `filter-btn${isActive ? ' active' : ''}`;
  btn.textContent = label;
  btn.addEventListener('click', onClick);
  return btn;
}

function renderWines() {
  if (!hasCatalog) return;

  const filtered = allWines.filter(wine => {
    const type = getWineType(wine);
    const varietal = getWineVarietal(wine);
    const searchableText = normalizeText(`${wine.nombre} ${wine.categoria} ${wine.descripcion}`);

    if (activeTypeFilter !== 'Todos' && type !== activeTypeFilter) {
      return false;
    }

    if (activeVarietalFilter !== 'Todos' && varietal !== activeVarietalFilter) {
      return false;
    }

    if (activeSearchTerm && !searchableText.includes(normalizeText(activeSearchTerm))) {
      return false;
    }

    return true;
  });

  const sorted = [...filtered].sort((a, b) => compareWines(a, b));

  winesGrid.innerHTML = sorted.map(wine => `
    <article class="wine-card${wine.tiene_stock ? '' : ' no-stock'}">
      <div class="wine-img-wrap">
        ${wine.photo_url
          ? `<img class="wine-img" src="${escapeAttr(wine.photo_url)}" alt="${escapeAttr(wine.nombre)}" loading="lazy" onerror="handleWineImageError(this, '${escapeAttr(wine.original_photo_url || '')}')">`
          : ''}
        <div class="wine-img-placeholder" ${wine.photo_url ? 'style="display:none"' : ''}>
          <svg width="48" height="48" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C11.2 2 10.4 2.1 9.6 2.4L7.8 6.6C7.3 7.8 7 9.1 7 10.5C7 13.5 9.2 16 12 16S17 13.5 17 10.5C17 9.1 16.7 7.8 16.2 6.6L14.4 2.4C13.6 2.1 12.8 2 12 2ZM11 17.9V20H10C9.4 20 9 20.4 9 21S9.4 22 10 22H14C14.6 22 15 21.6 15 21S14.6 20 14 20H13V17.9C16.4 17.4 19 14.6 19 10.5C19 8.8 18.6 7.2 17.9 5.7L19.5 2.1C19.7 1.6 19.4 1 18.9 1H5.1C4.6 1 4.3 1.6 4.5 2.1L6.1 5.7C5.4 7.2 5 8.8 5 10.5C5 14.6 7.6 17.4 11 17.9Z"/>
          </svg>
        </div>
        <span class="wine-badge ${wine.tiene_stock ? 'badge-stock' : 'badge-nostock'}">
          ${wine.tiene_stock ? 'En stock' : 'Sin stock'}
        </span>
      </div>
      <div class="wine-info">
        <span class="wine-category">${escapeHTML(getWineFilterLabel(wine))}</span>
        <h3 class="wine-name">${escapeHTML(wine.nombre)}</h3>
        <button
          class="wine-detail-link"
          type="button"
          onclick="handleWineDetailClick(event, ${wine.id})"
        >
          Ver ficha completa
        </button>
        <div class="wine-bottom">
          <span class="wine-price">${CONFIG.CURRENCY}${wine.precio.toLocaleString('es-AR')}</span>
          <button
            class="add-btn"
            ${wine.tiene_stock ? '' : 'disabled'}
            onclick="handleAddButtonClick(event, ${wine.id})"
          >
            ${wine.tiene_stock ? 'Agregar' : 'Agotado'}
          </button>
        </div>
      </div>
    </article>
  `).join('');

  if (sorted.length === 0) {
    winesGrid.innerHTML = '<p class="empty-results">No hay vinos para ese filtro todavia.</p>';
  }
}

function renderWineModal(wine) {
  if (!hasWineModal || !wine) return;

  wineModalContent.innerHTML = `
    <article class="wine-detail-card">
      <div class="wine-detail-media">
        ${wine.photo_url
          ? `<img class="wine-detail-img" src="${escapeAttr(wine.photo_url)}" alt="${escapeAttr(wine.nombre)}" loading="lazy" onerror="handleWineImageError(this, '${escapeAttr(wine.original_photo_url || '')}')">`
          : `<div class="wine-detail-placeholder">V1NITO</div>`
        }
      </div>
      <div class="wine-detail-info">
        <p class="wine-detail-category">${escapeHTML(getWineFilterLabel(wine))}</p>
        <h1 class="wine-detail-title">${escapeHTML(wine.nombre)}</h1>
        <p class="wine-detail-price">${CONFIG.CURRENCY}${wine.precio.toLocaleString('es-AR')}</p>
        <p class="wine-detail-stock ${wine.tiene_stock ? 'is-stock' : 'no-stock'}">
          ${wine.tiene_stock ? 'Disponible para pedir' : 'Sin stock por ahora'}
        </p>
        <div class="wine-detail-copy">
          <h2>Descripci&oacute;n</h2>
          <p>${escapeHTML(wine.descripcion || 'Sin descripci&oacute;n disponible por ahora.')}</p>
        </div>
        <div class="wine-detail-actions">
          <button
            class="add-btn wine-detail-add"
            ${wine.tiene_stock ? '' : 'disabled'}
            onclick="handleAddButtonClick(event, ${wine.id})"
          >
            ${wine.tiene_stock ? 'Agregar al carrito' : 'Agotado'}
          </button>
          <button class="wine-detail-back" type="button" onclick="closeWineModal()">Seguir viendo</button>
        </div>
      </div>
    </article>
  `;
}

function compareWines(a, b) {
  if (activeSort === 'price-desc') return b.precio - a.precio;
  if (activeSort === 'price-asc') return a.precio - b.precio;
  return a.nombre.localeCompare(b.nombre, 'es', { sensitivity: 'base' });
}

function prepareWineImage(wine) {
  const resolvedPhoto = resolveWineImage(wine);

  return {
    ...wine,
    original_photo_url: wine.photo_url,
    photo_url: resolvedPhoto,
  };
}

function syncCartItemImages() {
  if (!cart || !Array.isArray(cart.items) || cart.items.length === 0) return;

  const winesById = new Map(allWines.map(wine => [wine.id, wine]));
  let updated = false;

  cart.items = cart.items.map(item => {
    const freshWine = winesById.get(item.id);
    if (!freshWine) return item;

    const nextPhoto = freshWine.photo_url || item.photo_url;
    const nextOriginalPhoto = freshWine.original_photo_url || item.original_photo_url || '';

    if (item.photo_url !== nextPhoto || item.original_photo_url !== nextOriginalPhoto) {
      updated = true;
    }

    return {
      ...item,
      photo_url: nextPhoto,
      original_photo_url: nextOriginalPhoto,
    };
  });

  if (updated) {
    cart.save();
  }
}

function resolveWineImage(wine) {
  const manualImage = MANUAL_IMAGE_MAP[normalizeText(wine.nombre)];
  if (manualImage) return manualImage;

  const sourceKeys = [
    normalizeImageKey(wine.photo_url),
    normalizeImageKey(wine.nombre),
  ].filter(Boolean);

  for (const key of sourceKeys) {
    const exactMatch = LOCAL_IMAGE_CANDIDATES.find(candidate => candidate.key === key);
    if (exactMatch) return exactMatch.path;
  }

  const bestCandidate = findBestLocalImageMatch(wine);
  return bestCandidate ? bestCandidate.path : (wine.photo_url || '');
}

function findBestLocalImageMatch(wine) {
  const wineKey = normalizeImageKey(wine.nombre);
  const wineTokens = getMeaningfulTokens(wineKey);
  let bestCandidate = null;
  let bestScore = 0;

  LOCAL_IMAGE_CANDIDATES.forEach(candidate => {
    const candidateTokens = getMeaningfulTokens(candidate.key);
    const sharedTokens = wineTokens.filter(token => candidateTokens.includes(token));
    let score = sharedTokens.length * 12;

    if (candidate.key.includes(wineKey) || wineKey.includes(candidate.key)) {
      score += 25;
    }

    if (wineTokens.length && wineTokens.every(token => candidateTokens.includes(token))) {
      score += 30;
    }

    if (score > bestScore) {
      bestScore = score;
      bestCandidate = candidate;
    }
  });

  return bestScore >= 24 ? bestCandidate : null;
}

function handleWineImageError(img, fallbackSrc) {
  if (!img) return;

  const triedFallback = img.dataset.fallbackTried === 'true';

  if (!triedFallback && fallbackSrc && img.currentSrc !== fallbackSrc) {
    img.dataset.fallbackTried = 'true';
    img.src = fallbackSrc;
    return;
  }

  img.style.display = 'none';
  const placeholder = img.nextElementSibling;
  if (placeholder && placeholder.classList.contains('wine-img-placeholder')) {
    placeholder.style.display = 'block';
    return;
  }

  if (img.classList.contains('wine-detail-img')) {
    img.insertAdjacentHTML('afterend', '<div class="wine-detail-placeholder">V1NITO</div>');
    return;
  }

  if (img.classList.contains('cart-item-img')) {
    img.insertAdjacentHTML('afterend', '<div class="cart-item-img cart-item-placeholder">V1NITO</div>');
  }
}

function handleAddButtonClick(event, wineId) {
  if (event) {
    event.preventDefault();
    event.stopPropagation();
  }

  addToCart(wineId);
}

function handleWineDetailClick(event, wineId) {
  if (event) {
    event.preventDefault();
    event.stopPropagation();
  }

  const wine = allWines.find(item => item.id === wineId);
  if (!wine) return;

  renderWineModal(wine);
  openWineModal();
}

function addToCart(wineId) {
  if (!cart) return;

  const wine = allWines.find(w => w.id === wineId);
  if (!wine || !wine.tiene_stock) return;

  cart.add(wine);
  updateCartBadge();
  showToast(`${wine.nombre} agregado al carrito`);

  const btns = document.querySelectorAll('.add-btn');
  btns.forEach(btn => {
    const action = btn.getAttribute('onclick') || '';
    if (action.includes(`handleAddButtonClick(event, ${wineId})`)) {
      btn.classList.add('added');
      btn.textContent = 'Agregado';
      setTimeout(() => {
        btn.classList.remove('added');
        btn.textContent = btn.classList.contains('wine-detail-add') ? 'Agregar al carrito' : 'Agregar';
      }, 1200);
    }
  });
}

function setupCartUI() {
  if (!cartBtn || !cartClose || !cartOverlay || !checkoutBtn) return;

  cartBtn.addEventListener('click', openCart);
  cartClose.addEventListener('click', closeCart);
  cartOverlay.addEventListener('click', closeCart);
  checkoutBtn.addEventListener('click', checkout);
}

function setupMenuUI() {
  if (!menuBtn || !menuClose || !menuOverlay || !menuSidebar || !menuSearch || !menuSearchBtn) return;

  menuBtn.addEventListener('click', openMenu);
  menuClose.addEventListener('click', closeMenu);
  menuOverlay.addEventListener('click', closeMenu);
  menuSearchBtn.addEventListener('click', handleMenuSearch);
  menuSearch.addEventListener('keydown', event => {
    if (event.key === 'Enter') handleMenuSearch();
  });

  menuFilterButtons.forEach(button => {
    button.addEventListener('click', () => {
      const type = button.dataset.type || 'Todos';
      const varietal = button.dataset.varietal || 'Todos';

      if (shouldOpenCatalogInNewTab) {
        openCatalogPage({ type, varietal });
        closeMenu();
        return;
      }

      activeTypeFilter = type;
      activeVarietalFilter = varietal;
      activeSearchTerm = '';
      menuSearch.value = '';
      if (catalogSearch) catalogSearch.value = '';
      if (catalogSearchForm) catalogSearchForm.classList.remove('open');
      buildFilters();
      renderWines();
      scrollToCatalog();
      closeMenu();
    });
  });
}

function setupWineModalUI() {
  if (!hasWineModal) return;

  wineModalClose.addEventListener('click', closeWineModal);
  wineModalOverlay.addEventListener('click', closeWineModal);
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && wineModal.classList.contains('open')) {
      closeWineModal();
    }
  });
}

function setupCatalogSearchUI() {
  if (!catalogSearch || !catalogSearchForm || !catalogSearchToggle) return;

  catalogSearch.value = activeSearchTerm;
  catalogSearchForm.classList.toggle('open', Boolean(activeSearchTerm));

  catalogSearchToggle.addEventListener('click', () => {
    const isOpen = catalogSearchForm.classList.toggle('open');
    if (isOpen) {
      catalogSearch.focus();
      return;
    }

    if (activeSearchTerm) {
      activeSearchTerm = '';
      catalogSearch.value = '';
      if (menuSearch) menuSearch.value = '';
      renderWines();
    }
  });

  catalogSearchForm.addEventListener('submit', event => {
    event.preventDefault();
    applyCatalogSearch();
  });

  catalogSearch.addEventListener('keydown', event => {
    if (event.key === 'Enter') {
      event.preventDefault();
      applyCatalogSearch();
    }
  });
}

function applyCatalogSearch() {
  if (!catalogSearch) return;

  activeSearchTerm = catalogSearch.value.trim();
  if (menuSearch) {
    menuSearch.value = activeSearchTerm;
  }
  renderWines();
}

function openCart() {
  if (!cartSidebar || !cartOverlay) return;

  closeMenu();
  closeWineModal();
  renderCart();
  cartSidebar.classList.add('open');
  cartOverlay.classList.add('open');
  syncBodyScroll();
}

function closeCart() {
  if (!cartSidebar || !cartOverlay) return;

  cartSidebar.classList.remove('open');
  cartOverlay.classList.remove('open');
  syncBodyScroll();
}

function openMenu() {
  closeCart();
  closeWineModal();
  menuSidebar.classList.add('open');
  menuOverlay.classList.add('open');
  menuSidebar.setAttribute('aria-hidden', 'false');
  menuBtn.setAttribute('aria-expanded', 'true');
  syncBodyScroll();
}

function closeMenu() {
  if (!menuSidebar || !menuOverlay || !menuBtn) return;

  menuSidebar.classList.remove('open');
  menuOverlay.classList.remove('open');
  menuSidebar.setAttribute('aria-hidden', 'true');
  menuBtn.setAttribute('aria-expanded', 'false');
  syncBodyScroll();
}

function handleMenuSearch() {
  const query = menuSearch.value.trim();

  if (shouldOpenCatalogInNewTab) {
    openCatalogPage({ search: query });
    closeMenu();
    return;
  }

  activeTypeFilter = 'Todos';
  activeVarietalFilter = 'Todos';
  activeSearchTerm = query;
  if (catalogSearch) {
    catalogSearch.value = activeSearchTerm;
  }
  if (catalogSearchForm) {
    catalogSearchForm.classList.toggle('open', Boolean(activeSearchTerm));
  }
  buildFilters();
  renderWines();
  scrollToCatalog();
  closeMenu();
}

function openCatalogPage({ type = '', varietal = '', search = '' } = {}) {
  const params = new URLSearchParams();

  if (type && type !== 'Todos') params.set('type', type);
  if (varietal && varietal !== 'Todos') params.set('varietal', varietal);
  if (search) params.set('search', search);

  const query = params.toString();
  const url = `catalogo.html${query ? `?${query}` : ''}`;
  window.open(url, '_blank', 'noopener');
}

function openWineModal() {
  if (!hasWineModal) return;

  wineModal.classList.add('open');
  wineModalOverlay.classList.add('open');
  wineModal.setAttribute('aria-hidden', 'false');
  syncBodyScroll();
}

function closeWineModal() {
  if (!hasWineModal) return;

  wineModal.classList.remove('open');
  wineModalOverlay.classList.remove('open');
  wineModal.setAttribute('aria-hidden', 'true');
  syncBodyScroll();
}

function syncBodyScroll() {
  const cartOpen = cartSidebar && cartSidebar.classList.contains('open');
  const menuOpen = menuSidebar && menuSidebar.classList.contains('open');
  const modalOpen = wineModal && wineModal.classList.contains('open');
  document.body.style.overflow = cartOpen || menuOpen || modalOpen ? 'hidden' : '';
}

function scrollToCatalog() {
  const catalogSection = document.getElementById('catalogo');
  if (catalogSection) {
    catalogSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

function applyQueryParams() {
  const params = new URLSearchParams(window.location.search);

  if (params.has('type')) activeTypeFilter = params.get('type') || 'Todos';
  if (params.has('varietal')) activeVarietalFilter = params.get('varietal') || 'Todos';
  if (params.has('search')) {
    activeSearchTerm = params.get('search') || '';
    if (menuSearch) menuSearch.value = activeSearchTerm;
    if (catalogSearch) catalogSearch.value = activeSearchTerm;
    if (catalogSearchForm) {
      catalogSearchForm.classList.toggle('open', Boolean(activeSearchTerm));
    }
  }
}

function renderCart() {
  if (!cart || !cartItems || !cartFooter || !cartTotal) return;

  if (cart.items.length === 0) {
    cartItems.innerHTML = '<p class="cart-empty">Tu carrito est&aacute; vac&iacute;o</p>';
    cartFooter.style.display = 'none';
    return;
  }

  cartFooter.style.display = 'block';
  cartTotal.textContent = `${CONFIG.CURRENCY}${cart.getTotal().toLocaleString('es-AR')}`;

  cartItems.innerHTML = cart.items.map(item => `
    <div class="cart-item">
      ${item.photo_url
        ? `<img class="cart-item-img" src="${escapeAttr(item.photo_url)}" alt="${escapeAttr(item.nombre)}" onerror="handleWineImageError(this, '${escapeAttr(item.original_photo_url || '')}')">`
        : '<div class="cart-item-img"></div>'
      }
      <div class="cart-item-info">
        <div class="cart-item-name">${escapeHTML(item.nombre)}</div>
        <div class="cart-item-price">${CONFIG.CURRENCY}${(item.precio * item.qty).toLocaleString('es-AR')}</div>
      </div>
      <div class="cart-item-qty">
        <button class="qty-btn" onclick="changeQty(${item.id}, -1)">-</button>
        <span>${item.qty}</span>
        <button class="qty-btn" onclick="changeQty(${item.id}, 1)">+</button>
      </div>
    </div>
  `).join('');
}

function changeQty(wineId, delta) {
  if (!cart) return;
  cart.updateQty(wineId, delta);
  updateCartBadge();
  renderCart();
}

function updateCartBadge() {
  if (!cart || !cartCount) return;

  const count = cart.getCount();
  cartCount.textContent = count;
  cartCount.classList.toggle('show', count > 0);
}

function checkout() {
  if (!cart) return;

  const nameField = document.getElementById('clientName');
  const addressField = document.getElementById('clientAddress');
  const name = nameField ? nameField.value.trim() : '';
  const address = addressField ? addressField.value.trim() : '';

  if (!name) {
    showToast('Ingres&aacute; tu nombre');
    if (nameField) nameField.focus();
    return;
  }

  if (!address) {
    showToast('Ingres&aacute; la direcci&oacute;n de entrega');
    if (addressField) addressField.focus();
    return;
  }

  const message = cart.buildWhatsAppMessage(name, address);
  const encoded = encodeURIComponent(message);
  const url = `https://wa.me/${CONFIG.WHATSAPP_NUMBER}?text=${encoded}`;

  window.open(url, '_blank');

  cart.clear();
  updateCartBadge();
  closeCart();
  showToast('Pedido enviado por WhatsApp');
}

function getWineType(wine) {
  const category = normalizeText(wine.categoria);
  const sparklingStyle = getSparklingStyle(wine);

  if (sparklingStyle) return 'Espumantes';
  if (category.includes('blanco')) return 'Blancos';
  if (category.includes('tinto')) return 'Tintos';

  const varietalMatch = findKnownVarietal(wine);
  if (varietalMatch) {
    return VARIETAL_TO_TYPE[normalizeText(varietalMatch)] || 'Otros';
  }

  return 'Otros';
}

function getWineVarietal(wine) {
  const sparklingStyle = getSparklingStyle(wine);
  if (sparklingStyle) return sparklingStyle;

  const varietalMatch = findKnownVarietal(wine);
  return varietalMatch || wine.categoria || 'Otros';
}

function getWineFilterLabel(wine) {
  const type = getWineType(wine);
  const varietal = getWineVarietal(wine);

  if (type === 'Otros') return varietal;
  return `${type} - ${varietal}`;
}

function findKnownVarietal(wine) {
  const searchableText = normalizeText(`${wine.categoria} ${wine.nombre} ${wine.descripcion}`);

  for (const [type, varietals] of Object.entries(FILTER_TREE)) {
    if (type === 'Espumantes') continue;

    for (const varietal of varietals) {
      if (searchableText.includes(normalizeText(varietal))) {
        return varietal;
      }
    }
  }

  return '';
}

function getSparklingStyle(wine) {
  const searchableText = normalizeText(`${wine.categoria} ${wine.nombre} ${wine.descripcion}`);

  if (!searchableText) return '';
  if (normalizeText(wine.nombre) === normalizeText('Nicasia Blanc de Blancs')) return '';

  const champagneKeywords = ['champagne', 'champan', 'champan bressia'];
  if (champagneKeywords.some(keyword => searchableText.includes(keyword))) {
    return 'Espumante';
  }

  const sparklingKeywords = [
    'espumante',
    'brut',
    'extra brut',
    'brut nature',
    'blanc de blanc',
    'blanc de blancs',
    'metodo tradicional',
  ];

  if (sparklingKeywords.some(keyword => searchableText.includes(keyword))) {
    return 'Espumante';
  }

  return '';
}

function normalizeText(value) {
  return String(value || '')
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .trim();
}

function normalizeImageKey(value) {
  return normalizeText(String(value || '')
    .split('/')
    .pop()
    .replace(/\.[a-z0-9]+$/i, '')
    .replace(/copy/gi, '')
    .replace(/copia/gi, '')
    .replace(/granenemigo/gi, 'gran enemigo')
    .replace(/nicolascatena/gi, 'nicolas catena')
    .replace(/corderopiellobo/gi, 'cordero piel lobo')
    .replace(/dvcateana/gi, 'd v catena')
    .replace(/dvcatena/gi, 'd v catena')
    .replace(/alapar/gi, 'a la par')
    .replace(/lagrima/gi, 'lagrima')
    .replace(/cabsau/gi, 'cabernet sauvignon')
    .replace(/cabsauv/gi, 'cabernet sauvignon')
    .replace(/\bcbsau\b/gi, 'cabernet sauvignon')
    .replace(/\bcbs\b/gi, 'cabernet sauvignon')
    .replace(/\bcbf\b/gi, 'cabernet franc')
    .replace(/\bcs\b/gi, 'cabernet sauvignon')
    .replace(/\bmb\b/gi, 'malbec')
    .replace(/[-_.]/g, ' ')
    .replace(/[^a-z0-9\s]/gi, ' ')
    .replace(/\s+/g, ' '));
}

function getMeaningfulTokens(value) {
  const STOP_WORDS = ['de', 'del', 'la', 'las', 'el', 'los', 'y', 'a', 'al', 'the'];

  return normalizeText(value)
    .split(' ')
    .filter(token => token.length > 1 && !STOP_WORDS.includes(token));
}

function showToast(message) {
  const existing = document.querySelector('.toast');
  if (existing) existing.remove();

  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = message;
  document.body.appendChild(toast);

  requestAnimationFrame(() => {
    toast.classList.add('show');
  });

  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => toast.remove(), 400);
  }, 2500);
}

function escapeHTML(str) {
  const div = document.createElement('div');
  div.textContent = str;
  return div.innerHTML;
}

function escapeAttr(str) {
  return String(str || '')
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}
