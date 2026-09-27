/**
 * NG PIERCING JOIAS — MOTOR DE LIMPEZA E TRATAMENTO DE IMAGENS
 * Remove automaticamente selos promocionais ("G23 TITANIUM", "SOLID G23 TITANIUM", "Garantia 100%")
 * sem alterar o tamanho original (1024x1024), mantendo a joia 100% intacta e preservando o fundo neutro.
 */

(function () {
  const SEAL_MASKS = {
    // 1. Labret Solitário (Selo Garantia circular no canto inferior direito)
    "br-11134207-81z1k-mfbbjevgg3yf33": { x: 0.65, y: 0.72, w: 0.35, h: 0.28 },

    // 2. Labret Flor Nobre (Selo Solid G23 no canto superior esquerdo)
    "br-11134207-81z1k-mfu59iadbbif77": { x: 0, y: 0, w: 0.24, h: 0.15 },

    // 3. Labret Borboleta / Kit 3 Borboleta (Selo circular G23 no canto superior esquerdo)
    "br-11134207-81z1k-mfzurpgn8etgcd": { x: 0, y: 0, w: 0.30, h: 0.28 },

    // 4. Labret Lua/Estrela/Ramo & Labret Estrela (Selo Solid G23 no canto superior esquerdo)
    "br-11134207-81z1k-mfcvs02va613a3": { x: 0, y: 0, w: 0.30, h: 0.28 },

    // 5. D-Ring Liso & Argola Clicker Lisa (Selo Solid G23 no canto superior esquerdo)
    "br-11134207-81z1k-mfugdaj1pret23": { x: 0, y: 0, w: 0.35, h: 0.28 },

    // 6. Argola Pedras Lateral & Cluster Cartilagem (Selo circular G23 no canto superior esquerdo)
    "br-11134207-81z1k-mg2wq7pb8mpse1": { x: 0, y: 0, w: 0.36, h: 0.35 },

    // 7. Bananinha Cristais Cravejados / Umbigo Zircônia Gota (Selo circular G23 no canto superior direito)
    "br-11134207-81z1k-mhgww729orup5f": { x: 0.68, y: 0, w: 0.32, h: 0.25 },

    // 8. Umbigo Flor Zircônias / Umbigo Borboleta (Selo circular G23 no topo central)
    "br-11134207-81ztc-mj2yontbcr9e69": { x: 0.28, y: 0, w: 0.26, h: 0.24 },

    // 9. Umbigo Rosácea Mandala & Umbigo Argola Click (Selo circular G23 no canto superior esquerdo)
    "br-11134207-81z1k-mfzy0lfj5tl17c": { x: 0, y: 0, w: 0.30, h: 0.28 },

    // 10. Umbigo Escorpião / Ramo (Selo circular G23 no canto superior esquerdo)
    "br-11134207-81z1k-miizefp5lnnl4f": { x: 0, y: 0, w: 0.30, h: 0.28 },

    // 11. Transversal Adorno Central & Barbell Mamilo (Selo circular G23 no canto superior esquerdo)
    "br-11134207-820mh-mmbtni4u3t3491": { x: 0, y: 0, w: 0.30, h: 0.28 },

    // 12. Ferradura Lisa Titânio (Selo Solid G23 no canto superior esquerdo)
    "br-11134207-81z1k-mfmsz6wfmeww40": { x: 0, y: 0, w: 0.30, h: 0.28 },

    // 13. Nostril Ponto de Luz Titânio (Selo circular G23 no canto superior esquerdo)
    "br-11134207-81ztc-mit7j03anyf759": { x: 0, y: 0, w: 0.30, h: 0.28 }
  };

  const cleanCache = new Map();
  const pendingClean = new Map();

  function getHashFromUrl(url) {
    if (!url || typeof url !== 'string') return '';
    return url.split('/').pop().split('?')[0];
  }

  function cleanImageCanvas(img, mask) {
    const canvas = document.createElement('canvas');
    canvas.width = img.naturalWidth || img.width || 1024;
    canvas.height = img.naturalHeight || img.height || 1024;
    const ctx = canvas.getContext('2d');
    ctx.drawImage(img, 0, 0);

    // Fundo neutro cirúrgico (#ffffff puro que bate com o fundo da joia)
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(
      canvas.width * mask.x,
      canvas.height * mask.y,
      canvas.width * mask.w,
      canvas.height * mask.h
    );

    return canvas.toDataURL('image/jpeg', 0.94);
  }

  function cleanUrlAsync(url) {
    const hash = getHashFromUrl(url);
    const mask = SEAL_MASKS[hash];
    if (!mask) return Promise.resolve(url);

    if (cleanCache.has(hash)) {
      return Promise.resolve(cleanCache.get(hash));
    }

    if (pendingClean.has(hash)) {
      return pendingClean.get(hash);
    }

    const promise = new Promise((resolve) => {
      const img = new Image();
      img.crossOrigin = 'anonymous';
      img.onload = () => {
        try {
          const cleanData = cleanImageCanvas(img, mask);
          cleanCache.set(hash, cleanData);
          resolve(cleanData);
        } catch (e) {
          console.warn('Erro ao limpar imagem:', e);
          resolve(url);
        }
      };
      img.onerror = () => resolve(url);
      img.src = url;
    });

    pendingClean.set(hash, promise);
    return promise;
  }

  // Pre-carrega e limpa imediatamente em background
  function preloadAll() {
    Object.keys(SEAL_MASKS).forEach((hash) => {
      const url = 'https://down-br.img.susercontent.com/file/' + hash;
      cleanUrlAsync(url).then((cleanData) => {
        // Atualiza catalogoJoias em memória para que filtros e buscas usem a imagem tratada
        if (window.catalogoJoias && Array.isArray(window.catalogoJoias)) {
          window.catalogoJoias.forEach((joia) => {
            if (joia.imagemUrl && joia.imagemUrl.includes(hash)) joia.imagemUrl = cleanData;
            if (joia.imagem && joia.imagem.includes(hash)) joia.imagem = cleanData;
          });
        }
        // Atualiza dicionário de imagens oficial
        if (window.IMAGENS_LOJA_PIERCING) {
          Object.keys(window.IMAGENS_LOJA_PIERCING).forEach((k) => {
            if (window.IMAGENS_LOJA_PIERCING[k] && window.IMAGENS_LOJA_PIERCING[k].includes(hash)) {
              window.IMAGENS_LOJA_PIERCING[k] = cleanData;
            }
          });
        }
        // Atualiza todas as tags <img> já presentes na tela que usam esse hash
        document.querySelectorAll('img').forEach((el) => {
          if (el.src && el.src.includes(hash) && !el.src.startsWith('data:')) {
            el.src = cleanData;
          }
        });
      });
    });
  }

  // Limpeza de elemento de imagem no onload
  window.cleanImageElement = function (imgEl) {
    if (!imgEl || !imgEl.src || imgEl.src.startsWith('data:')) return;
    const hash = getHashFromUrl(imgEl.src);
    const mask = SEAL_MASKS[hash];
    if (!mask) return;

    if (cleanCache.has(hash)) {
      imgEl.src = cleanCache.get(hash);
      return;
    }

    cleanUrlAsync(imgEl.src).then((cleanData) => {
      if (cleanData && cleanData.startsWith('data:')) {
        imgEl.src = cleanData;
      }
    });
  };

  // Observador de mutações para garantir que novas imagens renderizadas sejam limpas instantaneamente
  function initDOMObserver() {
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        mutation.addedNodes.forEach((node) => {
          if (node.nodeType === 1) {
            if (node.tagName === 'IMG') {
              window.cleanImageElement(node);
            } else if (node.querySelectorAll) {
              node.querySelectorAll('img').forEach((img) => window.cleanImageElement(img));
            }
          }
        });
      });
    });

    if (document.body) {
      observer.observe(document.body, { childList: true, subtree: true });
    } else {
      document.addEventListener('DOMContentLoaded', () => {
        observer.observe(document.body, { childList: true, subtree: true });
      });
    }
  }

  // Execução imediata
  preloadAll();
  initDOMObserver();

  // Exporta utilitários globais
  window.ImageCleaner = {
    SEAL_MASKS,
    cleanCache,
    cleanUrlAsync,
    getHashFromUrl,
    cleanImageCanvas
  };
})();
