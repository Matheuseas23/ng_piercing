/**
 * NG PIERCING JOIAS — SISTEMA DE TEMAS, NAVEGAÇÃO ANATÔMICA & VITRINE
 * Controle de Modo Claro padrão + Tooltip temporizado (5 segundos),
 * Classificação por Anatomia Real de Body Piercing (Orelha, Nariz, Boca, Faciais),
 * Drawer Lateral Fluido, Seletor Dourado Champanhe (#C5A059) e Quick View.
 */

// Estado Central da Vitrine
const vitrineState = {
  regiaoAtiva: 'todas',
  sublocalAtivo: null,
  termoBusca: '',
  materialAtivo: 'todos',
  ordenacao: 'padrao'
};

document.addEventListener('DOMContentLoaded', () => {
  initThemeSystem();
  initCategoryFilters();
  initSearch();
  initSorting();
  initQuickViewModal();
  initNavDrawer();
  renderSublocaisChips();
  renderVitrine();
});

/* ==========================================================================
   1. SISTEMA DE TEMAS (MODO CLARO PADRÃO & TOOLTIP DE 5 SEGUNDOS)
   ========================================================================== */
function initThemeSystem() {
  const html = document.documentElement;
  const themeToggleBtns = document.querySelectorAll('.theme-toggle-btn');
  const tooltip = document.getElementById('themeOnboardingTooltip');
  const closeTooltipBtn = document.getElementById('closeThemeTooltipBtn');

  // Garante Modo Claro como padrão. Se o visitante escolheu modo escuro antes, respeita
  const savedTheme = localStorage.getItem('ng_theme');
  if (savedTheme === 'dark') {
    html.classList.add('dark-theme');
    updateThemeIcons(true);
  } else {
    html.classList.remove('dark-theme');
    updateThemeIcons(false);
  }

  // Caixinha temporizada apontando para o botão de modo escuro
  if (tooltip && !html.classList.contains('dark-theme')) {
    tooltip.style.display = 'flex';
    tooltip.style.opacity = '1';
    tooltip.style.transform = 'translateY(0)';

    // Sumir automaticamente após exatamente 5 segundos com transição suave
    setTimeout(() => {
      dismissTooltip();
    }, 5000);
  } else if (tooltip) {
    tooltip.style.display = 'none';
  }

  if (closeTooltipBtn) {
    closeTooltipBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      dismissTooltip();
    });
  }

  // Alternador de tema
  themeToggleBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const isDark = html.classList.toggle('dark-theme');
      localStorage.setItem('ng_theme', isDark ? 'dark' : 'light');
      updateThemeIcons(isDark);
      dismissTooltip();
    });
  });
}

function dismissTooltip() {
  const tooltip = document.getElementById('themeOnboardingTooltip');
  if (tooltip && tooltip.style.display !== 'none') {
    tooltip.style.opacity = '0';
    tooltip.style.transform = 'translateY(-6px)';
    tooltip.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
    setTimeout(() => {
      tooltip.style.display = 'none';
    }, 400);
  }
}

function updateThemeIcons(isDark) {
  const sunIcons = document.querySelectorAll('.theme-icon-sun');
  const moonIcons = document.querySelectorAll('.theme-icon-moon');

  sunIcons.forEach(icon => {
    icon.style.display = isDark ? 'block' : 'none';
  });
  moonIcons.forEach(icon => {
    icon.style.display = isDark ? 'none' : 'block';
  });
}

/* ==========================================================================
   2. FILTROS ANATÔMICOS (ORELHA, NARIZ, BOCA, FACIAIS) & CHIPS
   ========================================================================== */
function initCategoryFilters() {
  const filterButtons = document.querySelectorAll('.filter-btn[data-regiao]');
  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const regiao = btn.getAttribute('data-regiao') || 'todas';
      setRegiaoFilter(regiao);
    });
  });
}

function setRegiaoFilter(regiao, sublocal = null) {
  vitrineState.regiaoAtiva = regiao;
  vitrineState.sublocalAtivo = sublocal;

  // Atualiza botões principais
  document.querySelectorAll('.filter-btn[data-regiao]').forEach(b => {
    b.classList.toggle('active', b.getAttribute('data-regiao') === regiao);
  });

  renderSublocaisChips();
  renderVitrine();

  // Scroll suave se o usuário estiver abaixo do catálogo
  const vitrineSection = document.getElementById('catalogo');
  if (vitrineSection && window.scrollY > vitrineSection.offsetTop) {
    vitrineSection.scrollIntoView({ behavior: 'smooth' });
  }
}

function renderSublocaisChips() {
  const container = document.getElementById('sublocaisChipsContainer');
  const badge = document.getElementById('activeSublocalBadge');
  const badgeName = document.getElementById('activeSublocalName');
  if (!container) return;

  if (vitrineState.regiaoAtiva === 'todas' || !ANATOMIA_TAXONOMIA[vitrineState.regiaoAtiva]) {
    container.innerHTML = '';
    if (badge) {
      badge.classList.add('hidden');
      badge.classList.remove('inline-flex');
    }
    return;
  }

  const tax = ANATOMIA_TAXONOMIA[vitrineState.regiaoAtiva];
  const sublocais = tax.sublocais;

  let html = `
    <button type="button" 
            onclick="setSublocalFilter(null)" 
            class="sublocal-chip ${vitrineState.sublocalAtivo === null ? 'active' : ''}">
      Todos de ${tax.nome}
    </button>
  `;

  sublocais.forEach(sub => {
    const isActive = vitrineState.sublocalAtivo === sub.id;
    html += `
      <button type="button" 
              onclick="setSublocalFilter('${sub.id}')" 
              class="sublocal-chip ${isActive ? 'active' : ''}">
        ${sub.nome}
      </button>
    `;
  });

  container.innerHTML = html;

  if (badge && badgeName) {
    if (vitrineState.sublocalAtivo) {
      const subItem = sublocais.find(s => s.id === vitrineState.sublocalAtivo);
      badgeName.textContent = `${tax.nome}: ${subItem ? subItem.nome : vitrineState.sublocalAtivo}`;
      badge.classList.remove('hidden');
      badge.classList.add('inline-flex');
    } else {
      badge.classList.add('hidden');
      badge.classList.remove('inline-flex');
    }
  }
}

function setSublocalFilter(sublocal) {
  vitrineState.sublocalAtivo = sublocal;
  renderSublocaisChips();
  renderVitrine();

  const vitrineSection = document.getElementById('catalogo');
  if (vitrineSection) {
    vitrineSection.scrollIntoView({ behavior: 'smooth' });
  }
}

function limparSublocalAtivo() {
  vitrineState.sublocalAtivo = null;
  renderSublocaisChips();
  renderVitrine();
}

/* ==========================================================================
   3. DRAWER DE NAVEGAÇÃO LATERAL (MENU HAMBÚRGUER COM ANATOMIA)
   ========================================================================== */
function initNavDrawer() {
  const openBtn = document.getElementById('navDrawerOpenBtn');
  const closeBtn = document.getElementById('closeNavDrawerBtn');
  const overlay = document.getElementById('navDrawerOverlay');

  if (openBtn) openBtn.addEventListener('click', abrirNavDrawer);
  if (closeBtn) closeBtn.addEventListener('click', fecharNavDrawer);

  if (overlay) {
    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) fecharNavDrawer();
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && overlay && overlay.classList.contains('open')) {
      fecharNavDrawer();
    }
  });
}

function abrirNavDrawer() {
  const overlay = document.getElementById('navDrawerOverlay');
  if (overlay) {
    overlay.classList.add('open');
    document.body.style.overflow = 'hidden';
  }
}

function fecharNavDrawer() {
  const overlay = document.getElementById('navDrawerOverlay');
  if (overlay) {
    overlay.classList.remove('open');
    document.body.style.overflow = '';
  }
}

function drawerFiltrarRegiao(regiao) {
  fecharNavDrawer();
  setRegiaoFilter(regiao, null);
  const vitrineSection = document.getElementById('catalogo');
  if (vitrineSection) {
    vitrineSection.scrollIntoView({ behavior: 'smooth' });
  }
}

function drawerFiltrarSublocal(regiao, sublocal) {
  fecharNavDrawer();
  setRegiaoFilter(regiao, sublocal);
  const vitrineSection = document.getElementById('catalogo');
  if (vitrineSection) {
    vitrineSection.scrollIntoView({ behavior: 'smooth' });
  }
}

/* ==========================================================================
   4. BUSCA EM TEMPO REAL & ORDENAÇÃO
   ========================================================================== */
function initSearch() {
  const searchInputs = document.querySelectorAll('.search-input');
  searchInputs.forEach(input => {
    input.addEventListener('input', (e) => {
      vitrineState.termoBusca = e.target.value.trim().toLowerCase();
      renderVitrine();
    });
  });
}

function initSorting() {
  const sortSelect = document.getElementById('sortSelect');
  if (sortSelect) {
    sortSelect.addEventListener('change', (e) => {
      vitrineState.ordenacao = e.target.value;
      renderVitrine();
    });
  }

  const materialSelect = document.getElementById('materialSelect');
  if (materialSelect) {
    materialSelect.addEventListener('change', (e) => {
      vitrineState.materialAtivo = e.target.value;
      renderVitrine();
    });
  }
}

/* ==========================================================================
   5. RENDERIZAÇÃO DA VITRINE (82 JOIAS)
   ========================================================================== */
function renderVitrine() {
  const container = document.getElementById('vitrineGrid');
  const countDisplay = document.getElementById('vitrineCount');
  if (!container) return;

  // Filtragem
  let filtrados = catalogoJoias.filter(joia => {
    // Filtro por Região Anatômica
    let matchRegiao = true;
    if (vitrineState.regiaoAtiva !== 'todas') {
      matchRegiao = joia.regioes && joia.regioes.includes(vitrineState.regiaoAtiva);
    }

    // Filtro por Sublocal Anatômico
    let matchSublocal = true;
    if (vitrineState.sublocalAtivo) {
      matchSublocal = joia.sublocais && joia.sublocais.includes(vitrineState.sublocalAtivo);
    }

    // Filtro por Material
    let matchMaterial = true;
    if (vitrineState.materialAtivo !== 'todos') {
      matchMaterial = joia.material.toLowerCase().includes(vitrineState.materialAtivo.toLowerCase());
    }

    // Filtro por Busca de Texto
    let matchBusca = true;
    if (vitrineState.termoBusca) {
      const termo = vitrineState.termoBusca;
      const nomeMatch = joia.nome.toLowerCase().includes(termo);
      const matMatch = joia.material.toLowerCase().includes(termo);
      const indMatch = joia.indicacao ? joia.indicacao.toLowerCase().includes(termo) : false;
      const subMatch = joia.sublocais ? joia.sublocais.some(s => s.toLowerCase().includes(termo)) : false;
      matchBusca = nomeMatch || matMatch || indMatch || subMatch;
    }

    return matchRegiao && matchSublocal && matchMaterial && matchBusca;
  });

  // Ordenação
  if (vitrineState.ordenacao === 'preco-asc') {
    filtrados.sort((a, b) => a.preco - b.preco);
  } else if (vitrineState.ordenacao === 'preco-desc') {
    filtrados.sort((a, b) => b.preco - a.preco);
  } else if (vitrineState.ordenacao === 'destaques') {
    filtrados.sort((a, b) => (b.destaque ? 1 : 0) - (a.destaque ? 1 : 0));
  }

  // Atualiza contador
  if (countDisplay) {
    countDisplay.textContent = `${filtrados.length} ${filtrados.length === 1 ? 'joia encontrada' : 'joias encontradas'}`;
  }

  // Se não houver resultados
  if (filtrados.length === 0) {
    container.innerHTML = `
      <div class="col-span-full py-16 text-center">
        <p class="font-serif text-xl text-stone-700 dark:text-stone-300">Nenhuma joia encontrada para os filtros selecionados.</p>
        <p class="text-sm text-stone-500 dark:text-stone-400 mt-2">Experimente limpar o sublocal ou buscar por outro termo.</p>
        <button onclick="resetarFiltros()" class="btn-outline-gold mt-6">
          Limpar Filtros
        </button>
      </div>
    `;
    return;
  }

  // Renderiza cards com acabamento realista (Prata & Dourado Champanhe #C5A059)
  container.innerHTML = filtrados.map(joia => {
    let badgeClass = 'badge-aco';
    if (joia.material === 'Titânio') badgeClass = 'badge-titanio';
    else if (joia.material === 'Prata 925') badgeClass = 'badge-prata';
    else if (joia.material === 'Banhado a Ouro') badgeClass = 'badge-ouro';

    const corSelecionada = cardSelectedColors[joia.id] || 'Prata';

    return `
      <article class="card-luxury fade-in-item group">
        <div class="card-image-wrap cursor-pointer" onclick="abrirQuickView(${joia.id})">
          <img src="${joia.imagemUrl || joia.imagem}" 
               alt="${joia.nome} em ${joia.material}" 
               loading="lazy" 
               onload="if(window.cleanImageElement)window.cleanImageElement(this)" 
               onerror="this.onerror=null; this.src='https://acdn-us.mitiendanube.com/stores/001/488/287/products/1088-1779538534300-v6qdeuwe-bdab164b389391aef017812278995108-1024-1024.webp';" />
          ${joia.destaque ? `
          <div class="absolute top-3 left-3 z-10">
            <span class="badge-metal bg-purple-600/90 text-white text-[10px]">Destaque</span>
          </div>` : ''}
          <button onclick="event.stopPropagation(); abrirQuickView(${joia.id})" 
                  class="absolute bottom-3 right-3 bg-white/95 dark:bg-stone-900/95 text-stone-800 dark:text-stone-200 text-xs px-2.5 py-1.5 rounded-md shadow backdrop-blur opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1.5"
                  title="Visualização Rápida">
            <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
            </svg>
            Detalhes
          </button>
        </div>

        <div class="p-2.5 sm:p-4 flex flex-col flex-1 justify-between">
          <div>
            <h3 class="font-sans text-[11px] sm:text-sm font-medium tracking-[0.03em] uppercase text-stone-900 dark:text-stone-100 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition cursor-pointer line-clamp-2" onclick="abrirQuickView(${joia.id})">
              ${joia.nome}
            </h3>
            <p class="text-[10px] sm:text-xs text-stone-500 dark:text-stone-400 mt-1 line-clamp-1">
              ${joia.indicacao ? `Anatomia: ${joia.indicacao}` : (joia.acabamento ? `Acabamento: ${joia.acabamento}` : '')}
            </p>

            <!-- Seletor Rápido de Acabamento com Tom Realista Dourado Champanhe (#C5A059) -->
            <div class="mt-2 flex flex-wrap items-center justify-between gap-1 text-[10px] font-sans">
              <span class="text-stone-400 text-[10px]">Acabamento:</span>
              <div class="flex items-center gap-1" id="corGroup_${joia.id}">
                <button type="button" 
                        onclick="event.stopPropagation(); setCardColor(${joia.id}, 'Prata')" 
                        id="btnCardCor_${joia.id}_Prata" 
                        class="color-pill-btn ${corSelecionada === 'Prata' ? 'active' : ''}" 
                        title="Acabamento Prata">
                  <span class="swatch-dot swatch-prata"></span> Prata
                </button>
                <button type="button" 
                        onclick="event.stopPropagation(); setCardColor(${joia.id}, 'Dourado')" 
                        id="btnCardCor_${joia.id}_Dourado" 
                        class="color-pill-btn ${corSelecionada === 'Dourado' ? 'active' : ''}" 
                        title="Acabamento Dourado Champanhe">
                  <span class="swatch-dot swatch-dourado"></span> Dourado
                </button>
              </div>
            </div>
          </div>

          <div class="pt-2.5 sm:pt-3 mt-2 border-t border-stone-100 dark:border-stone-800/80 flex items-center justify-between gap-1">
            <div class="min-w-0">
              <span class="text-[9.5px] sm:text-xs text-stone-400 block font-normal leading-tight">Valor da joia</span>
              <span class="font-serif text-xs sm:text-base font-medium text-stone-900 dark:text-stone-100 whitespace-nowrap">
                ${formatarPreco(joia.preco)}
              </span>
            </div>

            <button onclick="adicionarDaVitrine(${joia.id})" 
                    class="btn-gold py-1.5 sm:py-2 px-2 sm:px-3 text-[10.5px] sm:text-xs whitespace-nowrap" 
                    title="Adicionar à Sacola">
              <span>+ Sacola</span>
            </button>
          </div>
        </div>
      </article>
    `;
  }).join('');
}

function resetarFiltros() {
  vitrineState.regiaoAtiva = 'todas';
  vitrineState.sublocalAtivo = null;
  vitrineState.termoBusca = '';
  vitrineState.materialAtivo = 'todos';
  vitrineState.ordenacao = 'padrao';

  document.querySelectorAll('.filter-btn[data-regiao]').forEach(b => {
    b.classList.toggle('active', b.getAttribute('data-regiao') === 'todas');
  });

  const searchInputs = document.querySelectorAll('.search-input');
  searchInputs.forEach(i => i.value = '');

  const sortSelect = document.getElementById('sortSelect');
  if (sortSelect) sortSelect.value = 'padrao';

  const materialSelect = document.getElementById('materialSelect');
  if (materialSelect) materialSelect.value = 'todos';

  renderSublocaisChips();
  renderVitrine();
}

/* ==========================================================================
   6. SELEÇÃO DE COR (PRATA OU DOURADO) NOS CARDS E MODAL
   ========================================================================== */
const cardSelectedColors = {};

function setCardColor(id, cor) {
  cardSelectedColors[id] = cor;
  const btnPrata = document.getElementById(`btnCardCor_${id}_Prata`);
  const btnDourado = document.getElementById(`btnCardCor_${id}_Dourado`);
  if (btnPrata && btnDourado) {
    btnPrata.classList.toggle('active', cor === 'Prata');
    btnDourado.classList.toggle('active', cor === 'Dourado');
  }
}

function adicionarDaVitrine(id) {
  const cor = cardSelectedColors[id] || 'Prata';
  if (window.cartInstance) {
    window.cartInstance.addToCart(id, 1, cor);
  }
}

/* ==========================================================================
   7. MODAL QUICK VIEW (VISUALIZAÇÃO DE DETALHES DE BODY PIERCING)
   ========================================================================== */
let quickViewQty = 1;
let quickViewSelectedColor = 'Prata';

function initQuickViewModal() {
  const overlay = document.getElementById('quickViewOverlay');
  const closeBtn = document.getElementById('closeQuickViewBtn');

  if (closeBtn) {
    closeBtn.addEventListener('click', fecharQuickView);
  }

  if (overlay) {
    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) fecharQuickView();
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && overlay && overlay.classList.contains('open')) {
      fecharQuickView();
    }
  });
}

function selecionarCorModal(cor) {
  quickViewSelectedColor = cor;
  const btnP = document.getElementById('modalCorBtn_Prata');
  const btnD = document.getElementById('modalCorBtn_Dourado');
  if (btnP && btnD) {
    btnP.classList.toggle('active', cor === 'Prata');
    btnD.classList.toggle('active', cor === 'Dourado');
  }
}

function abrirQuickView(id) {
  const joia = catalogoJoias.find(item => item.id === id);
  if (!joia) return;

  quickViewQty = 1;
  quickViewSelectedColor = cardSelectedColors[id] || 'Prata';
  const overlay = document.getElementById('quickViewOverlay');
  const content = document.getElementById('quickViewBody');

  if (!overlay || !content) return;

  let badgeClass = 'badge-aco';
  if (joia.material === 'Titânio') badgeClass = 'badge-titanio';
  else if (joia.material === 'Prata 925') badgeClass = 'badge-prata';
  else if (joia.material === 'Banhado a Ouro') badgeClass = 'badge-ouro';

  const spec = joia.especificacaoTecnica || {};

  content.innerHTML = `
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 p-3.5 sm:p-6">
      <div class="rounded-xl overflow-hidden bg-stone-100 dark:bg-stone-900 border border-stone-200 dark:border-stone-800 aspect-square">
        <img src="${joia.imagemUrl || joia.imagem}" 
             alt="${joia.nome}" 
             class="w-full h-full object-cover modal-product-zoom" 
             onload="if(window.cleanImageElement)window.cleanImageElement(this)" 
             onerror="this.onerror=null; this.src='https://acdn-us.mitiendanube.com/stores/001/488/287/products/1088-1779538534300-v6qdeuwe-bdab164b389391aef017812278995108-1024-1024.webp';" />
      </div>

      <div class="flex flex-col justify-between">
        <div>
          <div class="flex items-center gap-2 mb-2">
            <span class="badge-metal ${badgeClass}">
              ${spec.materialGrau || (joia.material === 'Titânio' ? 'Titânio ASTM F-136 (Grau Implante)' : joia.material)}
            </span>
            ${joia.acabamento ? `<span class="badge-metal badge-aco">${joia.acabamento}</span>` : ''}
          </div>

          <h2 class="font-sans text-lg sm:text-xl font-medium tracking-[0.03em] uppercase text-stone-900 dark:text-stone-100">${joia.nome}</h2>
          <p class="font-serif text-lg sm:text-xl font-medium text-purple-700 dark:text-purple-400 mt-2">${formatarPreco(joia.preco)}</p>

          <!-- Seletor de Acabamento / Cor com Tom Champanhe Realista (#C5A059) -->
          <div class="mt-3 pt-3 border-t border-stone-200/80 dark:border-stone-800">
            <label class="text-xs font-sans font-medium text-stone-700 dark:text-stone-300 block mb-2">
              Escolha o Acabamento / Cor:
            </label>
            <div class="flex items-center gap-2">
              <button type="button" 
                      onclick="selecionarCorModal('Prata')" 
                      id="modalCorBtn_Prata" 
                      class="modal-color-btn ${quickViewSelectedColor === 'Prata' ? 'active' : ''}">
                <span class="swatch-dot swatch-prata" style="width: 11px; height: 11px;"></span>
                <span>Prata (Natural / Polido)</span>
              </button>
              <button type="button" 
                      onclick="selecionarCorModal('Dourado')" 
                      id="modalCorBtn_Dourado" 
                      class="modal-color-btn ${quickViewSelectedColor === 'Dourado' ? 'active' : ''}">
                <span class="swatch-dot swatch-dourado" style="width: 11px; height: 11px;"></span>
                <span>Dourado (Champanhe Nobre)</span>
              </button>
            </div>
          </div>

          <!-- Especificações Anatômicas Limpas -->
          <div class="mt-3 p-3 bg-stone-50/70 dark:bg-stone-900/40 rounded-lg border border-stone-200/80 dark:border-stone-800 space-y-1.5 text-xs text-stone-600 dark:text-stone-400">
            <div><strong class="text-stone-800 dark:text-stone-200">Material / Grau:</strong> ${spec.materialGrau || (joia.material === 'Titânio' ? 'Titânio ASTM F-136 (Grau Implante Biocompatível)' : joia.material)}</div>
            ${spec.tipoFecho ? `<div><strong class="text-stone-800 dark:text-stone-200">Tipo de Fecho:</strong> ${spec.tipoFecho}</div>` : ''}
            ${joia.espessura ? `<div><strong class="text-stone-800 dark:text-stone-200">Calibre:</strong> ${joia.espessura}</div>` : ''}
            ${joia.diametro ? `<div><strong class="text-stone-800 dark:text-stone-200">Dimensões:</strong> ${joia.diametro}</div>` : ''}
          </div>

          <!-- AVISO OBRIGATÓRIO EM LETRAS TOTALMENTE MAIÚSCULAS -->
          <div class="mt-3 p-3 bg-purple-50 dark:bg-purple-950/40 border border-purple-200 dark:border-purple-800/60 rounded-lg flex items-start gap-2">
            <span class="text-purple-600 dark:text-purple-400 text-sm">⚠️</span>
            <p class="text-[11px] text-purple-900 dark:text-purple-200 font-semibold leading-tight tracking-wide">
              VALOR DA PEÇA AVULSA. PERFURAÇÃO NÃO INCLUSA (PROCEDIMENTO REALIZADO À PARTE NO ESTÚDIO EM SP COM HORA MARCADA).
            </p>
          </div>
        </div>

        <div class="pt-5 mt-3 border-t border-stone-200 dark:border-stone-800 flex items-center gap-4">
          <div class="flex items-center border border-stone-300 dark:border-stone-700 rounded-lg overflow-hidden">
            <button onclick="alterarQtdModal(-1)" class="px-3 py-2 text-sm text-stone-600 dark:text-stone-300 hover:bg-stone-100 dark:hover:bg-stone-800" aria-label="Diminuir quantidade">
              −
            </button>
            <span id="quickViewQtyVal" class="px-3 py-2 text-sm font-medium text-stone-900 dark:text-stone-100 min-w-[32px] text-center">
              1
            </span>
            <button onclick="alterarQtdModal(1)" class="px-3 py-2 text-sm text-stone-600 dark:text-stone-300 hover:bg-stone-100 dark:hover:bg-stone-800" aria-label="Aumentar quantidade">
              +
            </button>
          </div>

          <button onclick="adicionarDoModal(${joia.id})" class="btn-gold flex-1 py-3 text-xs tracking-wider">
            Adicionar à Sacola
          </button>
        </div>
      </div>
    </div>
  `;

  overlay.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function alterarQtdModal(delta) {
  quickViewQty += delta;
  if (quickViewQty < 1) quickViewQty = 1;
  const el = document.getElementById('quickViewQtyVal');
  if (el) el.textContent = quickViewQty;
}

function adicionarDoModal(id) {
  if (window.cartInstance) {
    window.cartInstance.addToCart(id, quickViewQty, quickViewSelectedColor);
  }
  fecharQuickView();
}

function fecharQuickView() {
  const overlay = document.getElementById('quickViewOverlay');
  if (overlay) {
    overlay.classList.remove('open');
    document.body.style.overflow = '';
  }
}

/* ==========================================================================
   FUNÇÕES DOS MAPAS ANATÔMICOS INTERATIVOS
   ========================================================================== */
function switchAnatomyTab(tab) {
  const tabs = ['boca', 'orelha', 'facial'];
  tabs.forEach(t => {
    const btn = document.getElementById(`tabBtn-${t}`);
    const card = document.getElementById(`anatomyCard-${t}`);
    if (btn) {
      btn.classList.toggle('active', t === tab);
    }
    if (card) {
      if (t === tab) {
        card.classList.remove('hidden');
        card.classList.add('flex');
      } else {
        card.classList.add('hidden');
        card.classList.remove('flex');
      }
    }
  });
}

function filtrarPontoAnatomico(regiao, sublocal) {
  let reg = regiao;
  let sub = sublocal;

  // Normalização taxonômica direta para o catálogo
  if (sublocal === 'aba-nasal' || sublocal === 'septo') {
    reg = 'nariz';
  } else if (sublocal === 'ashley') {
    reg = 'boca';
    sub = 'vertical-labret';
  } else if (sublocal === 'dahlia-bites') {
    reg = 'boca';
    sub = 'labret-lateral';
  } else if (sublocal === 'forward-helix') {
    reg = 'orelha';
    sub = 'anti-helix';
  } else if (sublocal === 'central-labret') {
    reg = 'boca';
    sub = 'labret';
  } else if (sublocal === 'lobu-los' || sublocal === 'lobulo') {
    reg = 'orelha';
    sub = 'lobulo';
  }

  setRegiaoFilter(reg, sub);

  const vitrineSection = document.getElementById('catalogo');
  if (vitrineSection) {
    vitrineSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  // Notificação visual elegante (Toast)
  const tax = ANATOMIA_TAXONOMIA[reg];
  const nomeRegiao = tax ? tax.nome : reg;
  let nomePonto = sublocal;
  if (tax && tax.sublocais) {
    const s = tax.sublocais.find(item => item.id === sub);
    if (s) nomePonto = s.nome;
  }
  showToast(`✨ Joias filtradas para ${nomePonto} (${nomeRegiao})`);
}

function syncAnatomyHover(regiao, num, active) {
  const pin = document.getElementById(`pin-${regiao}-${num}`);
  const item = document.getElementById(`legend-${regiao}-${num}`);
  if (pin) pin.classList.toggle('active-pin', active);
  if (item) item.classList.toggle('active-item', active);
}
