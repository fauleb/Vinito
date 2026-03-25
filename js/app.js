// =============================================
// App principal V1NITO
// =============================================

const FILTER_TREE = {
  Tintos: [
    'Malbec',
    'Cabernet Franc',
    'Pinot Noir',
    'Cabernet Sauvignon',
    'Bonarda',
    'Syrah',
  ],
  Blancos: [
    'Chardonnay',
    'Sauvignon Blanc',
  ],
};

const VARIETAL_TO_TYPE = Object.entries(FILTER_TREE).reduce((acc, [type, varietals]) => {
  varietals.forEach(varietal => {
    acc[normalizeText(varietal)] = type;
  });
  return acc;
}, {});

const cart = new Cart();
let allWines = [];
let activeTypeFilter = 'Todos';
let activeVarietalFilter = 'Todos';
let activeSearchTerm = '';

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
const menuFilterButtons = document.querySelectorAll('[data-type]');

// ---- Init ----
document.addEventListener('DOMContentLoaded', () => {
  loadWines();
  setupCartUI();
  setupMenuUI();
  updateCartBadge();
});

// ---- Cargar vinos desde Sheets ----
async function loadWines() {
  loading.style.display = 'block';
  errorMsg.style.display = 'none';
  winesGrid.innerHTML = '';

  try {
    allWines = await fetchWinesFromSheet();
    loading.style.display = 'none';
    buildFilters();
    renderWines();
  } catch (err) {
    console.error('Error cargando vinos:', err);
    loading.style.display = 'none';
    errorMsg.style.display = 'block';
  }
}

// ---- Filtros por tipo y varietal ----
function buildFilters() {
  filtersContainer.innerHTML = '';

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

// ---- Renderizar vinos ----
function renderWines() {
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

  winesGrid.innerHTML = filtered.map(wine => `
    <article class="wine-card${wine.tiene_stock ? '' : ' no-stock'}">
      <div class="wine-img-wrap">
        ${wine.photo_url
          ? `<img class="wine-img" src="${escapeAttr(wine.photo_url)}" alt="${escapeAttr(wine.nombre)}" loading="lazy" onerror="this.style.display='none'; this.nextElementSibling.style.display='block'">`
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
        <p class="wine-desc">${escapeHTML(wine.descripcion)}</p>
        <div class="wine-bottom">
          <span class="wine-price">${CONFIG.CURRENCY}${wine.precio.toLocaleString('es-AR')}</span>
          <button
            class="add-btn"
            ${wine.tiene_stock ? '' : 'disabled'}
            onclick="addToCart(${wine.id})"
          >
            ${wine.tiene_stock ? 'Agregar' : 'Agotado'}
          </button>
        </div>
      </div>
    </article>
  `).join('');

  if (filtered.length === 0) {
    winesGrid.innerHTML = '<p class="empty-results">No hay vinos para ese filtro todavia.</p>';
  }
}

// ---- Agregar al carrito ----
function addToCart(wineId) {
  const wine = allWines.find(w => w.id === wineId);
  if (!wine || !wine.tiene_stock) return;

  cart.add(wine);
  updateCartBadge();
  showToast(`${wine.nombre} agregado al carrito`);

  const btns = document.querySelectorAll('.add-btn');
  btns.forEach(btn => {
    if (btn.getAttribute('onclick') === `addToCart(${wineId})`) {
      btn.classList.add('added');
      btn.textContent = 'Agregado';
      setTimeout(() => {
        btn.classList.remove('added');
        btn.textContent = 'Agregar';
      }, 1200);
    }
  });
}

// ---- Cart UI ----
function setupCartUI() {
  cartBtn.addEventListener('click', openCart);
  cartClose.addEventListener('click', closeCart);
  cartOverlay.addEventListener('click', closeCart);
  checkoutBtn.addEventListener('click', checkout);
}

function setupMenuUI() {
  menuBtn.addEventListener('click', openMenu);
  menuClose.addEventListener('click', closeMenu);
  menuOverlay.addEventListener('click', closeMenu);
  menuSearchBtn.addEventListener('click', handleMenuSearch);
  menuSearch.addEventListener('keydown', event => {
    if (event.key === 'Enter') {
      handleMenuSearch();
    }
  });

  menuFilterButtons.forEach(button => {
    button.addEventListener('click', () => {
      activeTypeFilter = button.dataset.type || 'Todos';
      activeVarietalFilter = button.dataset.varietal || 'Todos';
      activeSearchTerm = '';
      menuSearch.value = '';
      buildFilters();
      renderWines();
      scrollToCatalog();
      closeMenu();
    });
  });
}

function openCart() {
  closeMenu();
  renderCart();
  cartSidebar.classList.add('open');
  cartOverlay.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeCart() {
  cartSidebar.classList.remove('open');
  cartOverlay.classList.remove('open');
  document.body.style.overflow = '';
}

function openMenu() {
  closeCart();
  menuSidebar.classList.add('open');
  menuOverlay.classList.add('open');
  menuSidebar.setAttribute('aria-hidden', 'false');
  menuBtn.setAttribute('aria-expanded', 'true');
  document.body.style.overflow = 'hidden';
}

function closeMenu() {
  menuSidebar.classList.remove('open');
  menuOverlay.classList.remove('open');
  menuSidebar.setAttribute('aria-hidden', 'true');
  menuBtn.setAttribute('aria-expanded', 'false');
  if (!cartSidebar.classList.contains('open')) {
    document.body.style.overflow = '';
  }
}

function handleMenuSearch() {
  activeTypeFilter = 'Todos';
  activeVarietalFilter = 'Todos';
  activeSearchTerm = menuSearch.value.trim();
  buildFilters();
  renderWines();
  scrollToCatalog();
  closeMenu();
}

function scrollToCatalog() {
  const catalogSection = document.getElementById('catalogo');
  if (catalogSection) {
    catalogSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

function renderCart() {
  if (cart.items.length === 0) {
    cartItems.innerHTML = '<p class="cart-empty">Tu carrito est\\u00e1 vac\\u00edo</p>';
    cartFooter.style.display = 'none';
    return;
  }

  cartFooter.style.display = 'block';
  cartTotal.textContent = `${CONFIG.CURRENCY}${cart.getTotal().toLocaleString('es-AR')}`;

  cartItems.innerHTML = cart.items.map(item => `
    <div class="cart-item">
      ${item.photo_url
        ? `<img class="cart-item-img" src="${escapeAttr(item.photo_url)}" alt="${escapeAttr(item.nombre)}">`
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
  cart.updateQty(wineId, delta);
  updateCartBadge();
  renderCart();
}

function updateCartBadge() {
  const count = cart.getCount();
  cartCount.textContent = count;
  cartCount.classList.toggle('show', count > 0);
}

// ---- Checkout WhatsApp ----
function checkout() {
  const name = document.getElementById('clientName').value.trim();
  const address = document.getElementById('clientAddress').value.trim();

  if (!name) {
    showToast('Ingres\\u00e1 tu nombre');
    document.getElementById('clientName').focus();
    return;
  }

  if (!address) {
    showToast('Ingres\\u00e1 la direcci\\u00f3n de entrega');
    document.getElementById('clientAddress').focus();
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

// ---- Helpers de filtros ----
function getWineType(wine) {
  const category = normalizeText(wine.categoria);

  if (category.includes('blanco')) return 'Blancos';
  if (category.includes('tinto')) return 'Tintos';

  const varietalMatch = findKnownVarietal(wine);
  if (varietalMatch) {
    return VARIETAL_TO_TYPE[normalizeText(varietalMatch)] || 'Otros';
  }

  return 'Otros';
}

function getWineVarietal(wine) {
  const varietalMatch = findKnownVarietal(wine);
  return varietalMatch || wine.categoria || 'Otros';
}

function getWineFilterLabel(wine) {
  const type = getWineType(wine);
  const varietal = getWineVarietal(wine);

  if (type === 'Otros') return varietal;
  return `${type} · ${varietal}`;
}

function findKnownVarietal(wine) {
  const searchableText = normalizeText(`${wine.categoria} ${wine.nombre} ${wine.descripcion}`);

  for (const varietals of Object.values(FILTER_TREE)) {
    for (const varietal of varietals) {
      if (searchableText.includes(normalizeText(varietal))) {
        return varietal;
      }
    }
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

// ---- Toast ----
function showToast(message) {
  const existing = document.querySelector('.toast');
  if (existing) existing.remove();

  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.textContent = message;
  document.body.appendChild(toast);

  requestAnimationFrame(() => {
    toast.classList.add('show');
  });

  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => toast.remove(), 400);
  }, 2500);
}

// ---- Helpers seguridad ----
function escapeHTML(str) {
  const div = document.createElement('div');
  div.textContent = str;
  return div.innerHTML;
}

function escapeAttr(str) {
  return str
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}
