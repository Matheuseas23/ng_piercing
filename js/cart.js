/**
 * NG PIERCING JOIAS — SACOLA INTELIGENTE & CHECKOUT WHATSAPP
 * Gerencia o estado da sacola, persistência no localStorage,
 * contadores reativos e mensagem formatada para o WhatsApp (5511954107870).
 */

const WHATSAPP_PHONE = "5511954107870";

class ShoppingCart {
  constructor() {
    this.cart = this.loadCart();
    this.includeAppointment = false;
    this.init();
  }

  init() {
    this.renderCart();
    this.updateBadge();
    this.setupListeners();
  }

  loadCart() {
    try {
      const saved = localStorage.getItem('ng_piercing_cart');
      return saved ? JSON.parse(saved) : [];
    } catch (e) {
      console.error('Erro ao ler carrinho do localStorage', e);
      return [];
    }
  }

  saveCart() {
    try {
      localStorage.setItem('ng_piercing_cart', JSON.stringify(this.cart));
      this.updateBadge();
      this.renderCart();
    } catch (e) {
      console.error('Erro ao salvar carrinho no localStorage', e);
    }
  }

  addToCart(productId, qty = 1, cor = 'Prata') {
    const product = catalogoJoias.find(item => item.id === productId);
    if (!product) return;

    const itemKey = `${productId}_${cor}`;
    const existingIndex = this.cart.findIndex(item => (item.key === itemKey || (!item.key && item.id === productId && item.cor === cor)));

    if (existingIndex > -1) {
      this.cart[existingIndex].quantidade += qty;
    } else {
      this.cart.push({
        key: itemKey,
        id: product.id,
        nome: product.nome,
        material: product.material,
        cor: cor,
        acabamento: product.acabamento || null,
        preco: product.preco,
        imagem: product.imagem,
        quantidade: qty
      });
    }

    this.saveCart();
    this.showToast(`✨ "${product.nome} (${cor})" adicionada à sacola.`);
    this.openCart();
  }

  updateQuantity(itemKey, delta) {
    const item = this.cart.find(item => item.key === itemKey || item.id === itemKey);
    if (!item) return;

    item.quantidade += delta;
    if (item.quantidade <= 0) {
      this.removeFromCart(itemKey);
    } else {
      this.saveCart();
    }
  }

  removeFromCart(itemKey) {
    this.cart = this.cart.filter(item => item.key !== itemKey && item.id !== itemKey);
    this.saveCart();
  }

  clearCart() {
    this.cart = [];
    this.saveCart();
  }

  getSubtotal() {
    return this.cart.reduce((sum, item) => sum + (item.preco * item.quantidade), 0);
  }

  getTotalItemsCount() {
    return this.cart.reduce((sum, item) => sum + item.quantidade, 0);
  }

  updateBadge() {
    const count = this.getTotalItemsCount();
    const badges = document.querySelectorAll('.cart-badge');
    badges.forEach(badge => {
      badge.textContent = count;
      badge.style.display = count > 0 ? 'flex' : 'none';
    });
  }

  openCart() {
    const overlay = document.getElementById('cartDrawerOverlay');
    if (overlay) {
      overlay.classList.add('open');
      document.body.style.overflow = 'hidden';
    }
  }

  closeCart() {
    const overlay = document.getElementById('cartDrawerOverlay');
    if (overlay) {
      overlay.classList.remove('open');
      document.body.style.overflow = '';
    }
  }

  setupListeners() {
    const openBtns = document.querySelectorAll('[data-open-cart]');
    openBtns.forEach(btn => btn.addEventListener('click', () => this.openCart()));

    const closeBtn = document.getElementById('closeCartBtn');
    if (closeBtn) closeBtn.addEventListener('click', () => this.closeCart());

    const overlay = document.getElementById('cartDrawerOverlay');
    if (overlay) {
      overlay.addEventListener('click', (e) => {
        if (e.target === overlay) this.closeCart();
      });
    }

    const checkoutBtn = document.getElementById('checkoutWhatsAppBtn');
    if (checkoutBtn) {
      checkoutBtn.addEventListener('click', () => this.sendToWhatsApp());
    }

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') this.closeCart();
    });
  }

  renderCart() {
    const container = document.getElementById('cartItemsList');
    const emptyState = document.getElementById('cartEmptyState');
    const footer = document.getElementById('cartDrawerFooter');
    const subtotalEl = document.getElementById('cartSubtotalAmount');

    if (!container) return;

    if (this.cart.length === 0) {
      container.innerHTML = '';
      if (emptyState) emptyState.style.display = 'flex';
      if (footer) footer.style.display = 'none';
      return;
    }

    if (emptyState) emptyState.style.display = 'none';
    if (footer) footer.style.display = 'block';

    const subtotal = this.getSubtotal();
    if (subtotalEl) {
      subtotalEl.textContent = formatarPreco(subtotal);
    }

    container.innerHTML = this.cart.map(item => {
      const itemKey = item.key || `${item.id}_${item.cor || 'Prata'}`;
      const corTag = item.cor === 'Dourado' 
        ? '<span class="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[10px] font-sans font-medium bg-amber-500/10 text-amber-900 dark:text-amber-200 border border-amber-600/30"><span class="w-2 h-2 rounded-full inline-block shadow-sm" style="background: linear-gradient(135deg, #DFBA73 0%, #C5A059 50%, #9E7D3B 100%);"></span> Dourado</span>'
        : '<span class="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[10px] font-sans font-medium bg-stone-500/10 text-stone-800 dark:text-stone-200 border border-stone-400/30"><span class="w-2 h-2 rounded-full inline-block shadow-sm" style="background: linear-gradient(135deg, #FFFFFF 0%, #D4D4D8 50%, #A1A1AA 100%);"></span> Prata</span>';

      return `
        <div class="flex items-center gap-3 py-3 border-b border-stone-200 dark:border-stone-800">
          <img src="${item.imagem}" alt="${item.nome}" class="w-16 h-16 object-cover rounded-lg bg-stone-100 dark:bg-stone-900 border border-stone-200 dark:border-stone-800" />
          <div class="flex-1 min-w-0">
            <h4 class="font-sans text-xs sm:text-sm font-medium tracking-[0.03em] uppercase text-stone-900 dark:text-stone-100 truncate">${item.nome}</h4>
            <div class="flex items-center gap-2 mt-1">
              ${corTag}
              <span class="text-[11px] text-stone-500 dark:text-stone-400 truncate">${item.material}</span>
            </div>
            <p class="font-serif text-xs font-medium text-purple-700 dark:text-purple-400 mt-1.5">
              ${formatarPreco(item.preco)}
            </p>
          </div>
          <div class="flex items-center border border-stone-200 dark:border-stone-700 rounded-lg overflow-hidden">
            <button onclick="window.cartInstance.updateQuantity('${itemKey}', -1)" class="px-2 py-1 text-xs text-stone-600 dark:text-stone-300 hover:bg-stone-100 dark:hover:bg-stone-800 transition" title="Diminuir">
              −
            </button>
            <span class="px-2 py-1 text-xs font-medium text-stone-900 dark:text-stone-100 min-w-[24px] text-center">
              ${item.quantidade}
            </span>
            <button onclick="window.cartInstance.updateQuantity('${itemKey}', 1)" class="px-2 py-1 text-xs text-stone-600 dark:text-stone-300 hover:bg-stone-100 dark:hover:bg-stone-800 transition" title="Aumentar">
              +
            </button>
          </div>
          <button onclick="window.cartInstance.removeFromCart('${itemKey}')" class="text-stone-400 hover:text-red-500 p-1.5 transition" title="Remover item">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
            </svg>
          </button>
        </div>
      `;
    }).join('');
  }

  sendToWhatsApp() {
    if (this.cart.length === 0) {
      this.showToast('Sua sacola está vazia.');
      return;
    }

    const checkbox = document.getElementById('appointmentCheckbox');
    const appointmentRequested = checkbox ? checkbox.checked : this.includeAppointment;

    let itemsText = '';
    this.cart.forEach(item => {
      const corStr = item.cor ? ` • Acabamento: ${item.cor}` : '';
      const acab = item.acabamento ? ` (${item.acabamento})` : '';
      itemsText += `• ${item.quantidade}x ${item.nome} [${item.material}${corStr}${acab}] — ${formatarPreco(item.preco * item.quantidade)}\n`;
    });

    const subtotalText = formatarPreco(this.getSubtotal());
    const appointmentText = appointmentRequested
      ? '✨ *Sim, desejo agendar colocação/perfuração no estúdio* (Capão Redondo / Zona Sul - SP com hora marcada)'
      : '📦 *Apenas compra da joia avulsa com embalagem protetora*';

    const message = 
`✨ *NOVO PEDIDO — NG PIERCING JOIAS* ✨
────────────────────────────────
Olá! Gostaria de encomendar as seguintes joias:

${itemsText}
────────────────────────────────
💎 *Subtotal das Joias:* ${subtotalText}
⚠️ *AVISO:* VALOR DA PEÇA AVULSA. PERFURAÇÃO NÃO INCLUSA (PROCEDIMENTO REALIZADO À PARTE NO ESTÚDIO EM SP COM HORA MARCADA).
📍 *Agendamento no Estúdio:* 
${appointmentText}

Gostaria de saber as opções de pagamento e confirmar o pedido! Obrigado(a).`;

    const encoded = encodeURIComponent(message);
    const url = `https://wa.me/${WHATSAPP_PHONE}?text=${encoded}`;
    window.open(url, '_blank');
  }

  showToast(text) {
    const container = document.getElementById('toastContainer');
    if (!container) return;

    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `
      <span class="text-purple-600 dark:text-purple-400">✧</span>
      <span class="text-xs font-medium">${text}</span>
    `;

    container.appendChild(toast);

    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateY(10px)';
      toast.style.transition = 'all 0.3s ease';
      setTimeout(() => toast.remove(), 300);
    }, 3200);
  }
}

// Inicializar instância global da sacola
document.addEventListener('DOMContentLoaded', () => {
  window.cartInstance = new ShoppingCart();
});
