/**
 * NG PIERCING JOIAS — CATÁLOGO OFICIAL COM FOTOS REAIS MARINA PIERCING
 * Todas as 82 peças reais mapeadas com URLs em alta resolução do CDN oficial da Marina Piercing (mitiendanube.com).
 * Estrutura anatômica: Bases Flat Back, Clickers Articulados, Hastes Curvas e Barbells Industriais.
 */

const IMAGENS_MARINA = {
  // 1. LABRETS & TRAGUS
  labretSolitario: "https://acdn-us.mitiendanube.com/stores/001/488/287/products/1088-1779538534300-v6qdeuwe-bdab164b389391aef017812278995108-1024-1024.webp",
  labretTiaraMarquise: "https://acdn-us.mitiendanube.com/stores/001/488/287/products/7374-1781730210852-mpvv83bm-8a8298c734146a794a17832185783528-1024-1024.webp",
  labretFlorNobre: "https://acdn-us.mitiendanube.com/stores/001/488/287/products/7368-1781713073698-nr5a4qe6-2593410c2b7121afce17832185595021-1024-1024.webp",
  labretBorboleta: "https://acdn-us.mitiendanube.com/stores/001/488/287/products/1089-1779473204254-0p6smp3i-5dcde0fc97f4f222c517812279047731-1024-1024.webp",
  labretSerpenteCruz: "https://acdn-us.mitiendanube.com/stores/001/488/287/products/1076-1779545498639-hlnks3sm-218efe9073bd87906717812278308878-1024-1024.webp",
  labretLuaEstrelaRamo: "https://acdn-us.mitiendanube.com/stores/001/488/287/products/1087-1779538619437-1q49weur-e324ad9c7bdca5c91017812278942058-1024-1024.webp",

  // 2. ARGOLAS & D-RINGS
  dRingLisoClicker: "https://acdn-us.mitiendanube.com/stores/001/488/287/products/3355-1780500992692-8kd68qwc-dcbf7b30b814dcede217812249033998-480-0.webp",
  argolaCravejada: "https://acdn-us.mitiendanube.com/stores/001/488/287/products/3249-1780602907208-c2f5bv0x-4061ec7f046d080f0817812242948587-480-0.webp",
  argolaClickerLisa: "https://acdn-us.mitiendanube.com/stores/001/488/287/products/2163-1780506535082-rp3ixolg-6e2da122986b2352ad17812161915024-480-0.webp",

  // 3. PIERCINGS DE UMBIGO
  umbigoPontoDeLuz: "https://acdn-us.mitiendanube.com/stores/001/488/287/products/2130-1780526726518-wl6ixs3w-41164585a7d1ebca3b17812159824312-480-0.webp",
  umbigoZirconiaGota: "https://acdn-us.mitiendanube.com/stores/001/488/287/products/3396-1780596723805-q2hukm73-dbeaee132ca415748c17812251665438-480-0.webp",
  umbigoFlorZirconias: "https://acdn-us.mitiendanube.com/stores/001/488/287/products/7340-1780677094361-x841u2g1-13911992c80001f31017812288069233-1024-1024.webp",
  umbigoRosaceaMandala: "https://acdn-us.mitiendanube.com/stores/001/488/287/products/7341-1781018750026-s70w81ey-3a0e097f829c7632b417812288124092-1024-1024.webp",
  umbigoEstrelaTripla: "https://acdn-us.mitiendanube.com/stores/001/488/287/products/7345-1783121090995-17e1d195-8916e39b33ae39862c17832185450249-1024-1024.webp",
  umbigoEscorpiaoRamo: "https://acdn-us.mitiendanube.com/stores/001/488/287/products/7342-1781018814711-cqusvz16-1de00ebeed42ad6b8017812288178732-1024-1024.webp",
  umbigoCoracaoColorido: "https://acdn-us.mitiendanube.com/stores/001/488/287/products/7335-1783120236704-9yyjomes-3bd0b13e63dd6a7fee17865780567029-480-0.webp",

  // 4. TRANSVERSAL (INDUSTRIAL)
  transversalAdornoCentral: "https://acdn-us.mitiendanube.com/stores/001/488/287/products/7133-1780513042549-oax2ld3v-3bd16853af262970e517812280167971-480-0.webp",

  // 5. CLUSTERS (Conch, Scapha, Helix)
  cluster5Zirconias: "https://acdn-us.mitiendanube.com/stores/001/488/287/products/7357-1781297302069-6wxv693q-64486629a5546c7dbb17832185505651-1024-1024.webp",
  clusterCartilagem: "https://acdn-us.mitiendanube.com/stores/001/488/287/products/2844-1780659249467-dara46ue-784920120f234d03be17812178720008-1024-1024.webp",

  // 6. KITS DE 3 BRINCOS
  kit3PontoArgola: "https://acdn-us.mitiendanube.com/stores/001/488/287/products/2335-1780529664622-w85jlqb6-d4644c925ab5d7b3b017812299022013-480-0.webp",
  kit3Borboleta: "https://acdn-us.mitiendanube.com/stores/001/488/287/products/2007-1780510052993-t477goeo-12183ccd89aedc165f17812155220962-1024-1024.png",
  kit3DelicadoOuroPrata: "https://acdn-us.mitiendanube.com/stores/001/488/287/products/7348-1781047806440-promlkrq-86371e7652267e2f0817812288362710-480-0.webp"
};

const catalogoJoias = [
  // =========================================================================
  // --- COLEÇÃO EM ALTA (HERO / DESTAQUES) ---
  // =========================================================================
  {
    id: 1,
    nome: "Argola Cravejada",
    material: "Titânio",
    acabamento: "Rosé",
    preco: 89.90,
    categoria: "argolas",
    destaque: true,
    espessura: "1.2mm (16G)",
    diametro: "8mm / 10mm",
    indicacao: "Hélix, Conch, Septo, Daith",
    descricaoVisual: "Argola clicker em titânio com acabamento rosé e cravação de zircônias brilhantes na borda externa.",
    especificacaoTecnica: {
      estruturaFisica: "Aro circular articulado com fecho click (Hinged Segment Ring)",
      tipoFecho: "Clicker Articulado de Alta Precisão",
      materialGrau: "Titânio ASTM F-136 Grau Implante",
      pedraria: "Microzircônias Cúbicas 5A Cravejadas"
    },
    imagemUrl: IMAGENS_MARINA.argolaCravejada,
    imagem: IMAGENS_MARINA.argolaCravejada,
    descricao: "Argola clicker em Titânio biocompatível com acabamento Rosé e cravação de zircônias cúbicas em lapidação brilhante. Fecho click suave e seguro."
  },
  {
    id: 2,
    nome: "Labret Solitário Zircônia",
    material: "Titânio",
    acabamento: "Prata",
    preco: 69.90,
    categoria: "labret",
    destaque: true,
    espessura: "1.2mm (16G)",
    diametro: "Haste 6mm / 8mm • Base 4mm",
    indicacao: "Tragus, Conch, Hélix, Forward Hélix, Lóbulo",
    descricaoVisual: "",
    especificacaoTecnica: {
      estruturaFisica: "Haste reta anatômica com disco plano traseiro (Flat Back Stud)",
      tipoFecho: "Rosca Interna / Push-in",
      materialGrau: "Titânio ASTM F-136 Grau Implante",
      pedraria: ""
    },
    imagemUrl: IMAGENS_MARINA.labretSolitario,
    imagem: IMAGENS_MARINA.labretSolitario,
    descricao: "Topo ponto de luz em zircônia solitária facetada com base labret anatômica reta. Conforto total para dormir e uso contínuo."
  },
  {
    id: 3,
    nome: "Banana Dupla Zircônia",
    material: "Titânio",
    acabamento: "Ouro",
    preco: 79.90,
    categoria: "bananas",
    destaque: true,
    espessura: "1.2mm (16G)",
    diametro: "8mm",
    indicacao: "Rook, Sobrancelha, Daith, Vertical Labret",
    descricaoVisual: "Microbell curvo em titânio anodizado dourado com duas extremidades em pedrarias de zircônia lapidadas.",
    especificacaoTecnica: {
      estruturaFisica: "Curved Barbell Microbell anatômico",
      tipoFecho: "Rosca Interna com Topos Rosqueáveis",
      materialGrau: "Titânio ASTM F-136 Anodizado Ouro",
      pedraria: "Zircônias Cúbicas Duplas"
    },
    imagemUrl: IMAGENS_MARINA.umbigoZirconiaGota,
    imagem: IMAGENS_MARINA.umbigoZirconiaGota,
    descricao: "Microbell curvo em Titânio anodizado dourado com duas zircônias lapidadas de alta refração luminosa. Design anatômico preciso."
  },
  {
    id: 4,
    nome: "Barbell Bolinha Lisa",
    material: "Titânio",
    acabamento: "Prata",
    preco: 59.90,
    categoria: "barras",
    destaque: true,
    espessura: "1.2mm / 1.6mm (14G)",
    diametro: "12mm / 14mm / 16mm",
    indicacao: "Mamilo, Língua, Hélix Industrial",
    descricaoVisual: "Barra reta em titânio cirúrgico polido com esferas simétricas e rosca interna suave.",
    especificacaoTecnica: {
      estruturaFisica: "Straight Barbell clássico de grau médico",
      tipoFecho: "Rosca Interna Antilesão",
      materialGrau: "Titânio ASTM F-136 Grau Implante",
      pedraria: "Esferas de titânio polido 5mm"
    },
    imagemUrl: IMAGENS_MARINA.transversalAdornoCentral,
    imagem: IMAGENS_MARINA.transversalAdornoCentral,
    descricao: "Barra reta polida espelhada em Titânio ASTM F-136 com rosca interna suave que preserva o canal da perfuração."
  },
  {
    id: 5,
    nome: "Cravejada Flor Luxo",
    material: "Titânio",
    acabamento: "Ouro",
    preco: 89.90,
    categoria: "cravejadas",
    destaque: true,
    espessura: "1.2mm (16G)",
    diametro: "Haste 8mm • Topo 7mm",
    indicacao: "Conch, Hélix, Flat",
    descricaoVisual: "Labret com base chata flat back e suntuoso topo floral em pedras navete facetadas em tom dourado nobre.",
    especificacaoTecnica: {
      estruturaFisica: "Base reta plana com cluster floral superior em garras",
      tipoFecho: "Rosca Interna / Push-in",
      materialGrau: "Titânio ASTM F-136 Acabamento Ouro",
      pedraria: "Zircônias Navete e Central Lapidação Fina"
    },
    imagemUrl: IMAGENS_MARINA.labretFlorNobre,
    imagem: IMAGENS_MARINA.labretFlorNobre,
    descricao: "Composição floral rica com pétalas em lapidação navete e zircônia central brilhante. Acabamento nobre em tom ouro nobre."
  },

  // =========================================================================
  // --- ARGOLAS & D-RINGS ---
  // =========================================================================
  {
    id: 6,
    nome: "Argola Básica",
    material: "Titânio",
    preco: 55.00,
    categoria: "argolas",
    espessura: "1.2mm (16G)",
    diametro: "8mm / 10mm",
    indicacao: "Hélix, Nariz, Septo, Lóbulo",
    descricaoVisual: "Argola clicker em titânio polido com aro contínuo e articulação invisível.",
    especificacaoTecnica: {
      estruturaFisica: "Hinged Segment Ring de titânio puro",
      tipoFecho: "Clicker Articulado",
      materialGrau: "Titânio ASTM F-136 Polido",
      pedraria: "Metal liso de alto brilho"
    },
    imagemUrl: IMAGENS_MARINA.argolaClickerLisa,
    imagem: IMAGENS_MARINA.argolaClickerLisa,
    descricao: "Minimalismo puro. Clicker liso em Titânio polido de grau cirúrgico. Leveza e biocompatibilidade absoluta."
  },
  {
    id: 7,
    nome: "Argola Gota Delicada",
    material: "Titânio",
    preco: 50.00,
    categoria: "argolas",
    espessura: "1.2mm (16G)",
    diametro: "8mm / 10mm",
    indicacao: "Daith, Septo, Hélix",
    descricaoVisual: "Argola no contorno de gota fina para encaixe anatômico em daith e cartilagem.",
    especificacaoTecnica: {
      estruturaFisica: "Aro anatômico moldado em gota",
      tipoFecho: "Clicker Articulado",
      materialGrau: "Titânio ASTM F-136",
      pedraria: "Aro liso polido"
    },
    imagemUrl: IMAGENS_MARINA.argolaCravejada,
    imagem: IMAGENS_MARINA.argolaCravejada,
    descricao: "Silhueta fluida em formato de gota esculpida em titânio. Cria um caimento anatômico delicado na orelha."
  },
  {
    id: 8,
    nome: "Argola Cravejada Zircônias Frontais",
    material: "Titânio",
    preco: 80.00,
    categoria: "argolas",
    espessura: "1.2mm (16G)",
    diametro: "8mm / 10mm",
    indicacao: "Hélix, Conch, Septo",
    descricaoVisual: "Argola clicker em titânio com canaleta externa inteiramente pavimentada por zircônias cúbicas brilhantes.",
    especificacaoTecnica: {
      estruturaFisica: "Aro circular articulado com canaleta externa cravejada",
      tipoFecho: "Clicker Articulado",
      materialGrau: "Titânio ASTM F-136",
      pedraria: "Microzircônias Cúbicas 5A"
    },
    imagemUrl: IMAGENS_MARINA.argolaCravejada,
    imagem: IMAGENS_MARINA.argolaCravejada,
    descricao: "Fileira de micro-zircônias frontais de alta pureza. O brilho perfeito para iluminar o contorno auricular."
  },
  {
    id: 9,
    nome: "Argola Mamilo Cravejada",
    material: "Titânio",
    preco: 55.00,
    categoria: "argolas",
    espessura: "1.6mm (14G)",
    diametro: "12mm / 14mm",
    indicacao: "Mamilo",
    descricaoVisual: "Argola de calibre 1.6mm com arco cravejado de pedrarias e fecho click reforçado.",
    especificacaoTecnica: {
      estruturaFisica: "Aro de calibre 14G reforçado para mamilo",
      tipoFecho: "Clicker Articulado 14G",
      materialGrau: "Titânio ASTM F-136",
      pedraria: "Fileira de Zircônias Transparentes"
    },
    imagemUrl: IMAGENS_MARINA.argolaCravejada,
    imagem: IMAGENS_MARINA.argolaCravejada,
    descricao: "Argola especialmente desenvolvida para a anatomia do mamilo, com arco cravejado e fecho de click macio."
  },
  {
    id: 10,
    nome: "Argola Pingente Cruz / Espada",
    material: "Titânio",
    preco: 55.00,
    categoria: "argolas",
    espessura: "1.2mm (16G)",
    diametro: "8mm / 10mm",
    indicacao: "Hélix, Lóbulo, Conch",
    descricaoVisual: "Argola articulada fina em titânio com pingente pendurado de cruz com balanço suave.",
    especificacaoTecnica: {
      estruturaFisica: "Clicker com elo de suspensão e pingente móvel",
      tipoFecho: "Clicker Articulado",
      materialGrau: "Titânio ASTM F-136",
      pedraria: "Pingente polido"
    },
    imagemUrl: IMAGENS_MARINA.labretSerpenteCruz,
    imagem: IMAGENS_MARINA.labretSerpenteCruz,
    descricao: "Argola click com delicado pingente estilizado que traz movimento sutil e sofisticação autêntica."
  },
  {
    id: 11,
    nome: "D-Ring Click Facilidade",
    material: "Titânio",
    preco: 38.00,
    categoria: "argolas",
    espessura: "1.0mm / 1.2mm",
    diametro: "8mm",
    indicacao: "Nostril (Nariz), Hélix",
    descricaoVisual: "Formato D anatômico com barra interna reta que acomoda a narina sem rodopiar.",
    especificacaoTecnica: {
      estruturaFisica: "Perfil D anti-rotação com acabamento espelhado",
      tipoFecho: "Clicker Articulado ou Encaixe Firme",
      materialGrau: "Titânio ASTM F-136",
      pedraria: "Metal polido"
    },
    imagemUrl: IMAGENS_MARINA.dRingLisoClicker,
    imagem: IMAGENS_MARINA.dRingLisoClicker,
    descricao: "Geometria em formato D que se assenta perfeitamente reta no interior do nariz ou cartilagem, sem rodopiar."
  },
  {
    id: 12,
    nome: "Argola Click Clássica",
    material: "Aço Cirúrgico",
    preco: 30.00,
    categoria: "argolas",
    espessura: "1.2mm (16G)",
    diametro: "8mm / 10mm",
    indicacao: "Hélix, Septo, Lóbulo",
    descricaoVisual: "Argola em aço 316L articulada com polimento espelhado contínuo.",
    especificacaoTecnica: {
      estruturaFisica: "Hinged Segment Ring uniforme",
      tipoFecho: "Clicker Articulado",
      materialGrau: "Aço Inoxidável Cirúrgico 316L",
      pedraria: "Aço polido"
    },
    imagemUrl: IMAGENS_MARINA.argolaClickerLisa,
    imagem: IMAGENS_MARINA.argolaClickerLisa,
    descricao: "Aço cirúrgico 316L com polimento de alto brilho. Um essencial atemporal para composições diárias."
  },
  {
    id: 13,
    nome: "Argola Pingente Cruz",
    material: "Aço Cirúrgico",
    preco: 75.00,
    categoria: "argolas",
    espessura: "1.2mm (16G)",
    diametro: "10mm",
    indicacao: "Lóbulo, Hélix",
    descricaoVisual: "Aro articulado em aço cirúrgico com pingente de cruz gótica pendurada.",
    especificacaoTecnica: {
      estruturaFisica: "Clicker com elo móvel e pingente cruz",
      tipoFecho: "Clicker Articulado",
      materialGrau: "Aço Cirúrgico 316L",
      pedraria: "Cruz facetada em aço"
    },
    imagemUrl: IMAGENS_MARINA.labretSerpenteCruz,
    imagem: IMAGENS_MARINA.labretSerpenteCruz,
    descricao: "Pingente em cruz polida com balanço refinado sobre aro de aço 316L ultra polido."
  },
  {
    id: 14,
    nome: "Argola Design D Cravejado",
    material: "Aço Cirúrgico",
    preco: 85.00,
    categoria: "argolas",
    espessura: "1.2mm (16G)",
    diametro: "8mm / 10mm",
    indicacao: "Hélix, Conch, Septo",
    descricaoVisual: "Perfil D com arco frontal cravejado de zircônias cúbicas em virolas delicadas.",
    especificacaoTecnica: {
      estruturaFisica: "Geometria em D com cravação externa",
      tipoFecho: "Clicker Articulado",
      materialGrau: "Aço Cirúrgico 316L",
      pedraria: "Microzircônias Cúbicas"
    },
    imagemUrl: IMAGENS_MARINA.dRingLisoClicker,
    imagem: IMAGENS_MARINA.dRingLisoClicker,
    descricao: "Linha geométrica D enriquecida com micro-zircônias alinhadas individualmente com acabamento fino."
  },
  {
    id: 15,
    nome: "Argola Dupla Lisa",
    material: "Aço Cirúrgico",
    preco: 45.00,
    categoria: "argolas",
    espessura: "1.2mm (16G)",
    diametro: "8mm",
    indicacao: "Conch, Hélix, Lóbulo",
    descricaoVisual: "Haste única que se abre em dois aros paralelos lisos criando efeito de furo duplo.",
    especificacaoTecnica: {
      estruturaFisica: "Argola dupla com pino único",
      tipoFecho: "Clicker Articulado",
      materialGrau: "Aço Cirúrgico 316L",
      pedraria: "Aros lisos polidos"
    },
    imagemUrl: IMAGENS_MARINA.argolaClickerLisa,
    imagem: IMAGENS_MARINA.argolaClickerLisa,
    descricao: "Efeito de dupla perfuração com uma única haste. Ideal para dar volume e presença no conch ou hélix."
  },
  {
    id: 16,
    nome: "Argola Coração Anatômica",
    material: "Aço Cirúrgico",
    preco: 45.00,
    categoria: "argolas",
    espessura: "1.2mm (16G)",
    diametro: "10mm",
    indicacao: "Daith, Hélix, Lóbulo Superior",
    descricaoVisual: "Aro moldado em formato angular de coração para daith ou cartilagem.",
    especificacaoTecnica: {
      estruturaFisica: "Formato anatômico em coração",
      tipoFecho: "Torção Suave (Seamless Ring)",
      materialGrau: "Aço Cirúrgico 316L",
      pedraria: "Tubo polido espelhado"
    },
    imagemUrl: IMAGENS_MARINA.umbigoCoracaoColorido,
    imagem: IMAGENS_MARINA.umbigoCoracaoColorido,
    descricao: "Curvatura romântica e minimalista moldada em formato de coração, com abertura por torção suave."
  },
  {
    id: 17,
    nome: "Argola Cravejada Formato S",
    material: "Aço Cirúrgico",
    preco: 55.00,
    categoria: "argolas",
    espessura: "1.2mm (16G)",
    diametro: "8mm",
    indicacao: "Hélix, Conch",
    descricaoVisual: "Curva ondulada em formato de serpente/S com zircônias cúbicas embutidas.",
    especificacaoTecnica: {
      estruturaFisica: "Curva em S cravejada",
      tipoFecho: "Encaixe Click",
      materialGrau: "Aço Cirúrgico 316L",
      pedraria: "Microzircônias Cravejadas"
    },
    imagemUrl: IMAGENS_MARINA.argolaCravejada,
    imagem: IMAGENS_MARINA.argolaCravejada,
    descricao: "Desenho orgânico em ondas com zircônias cintilantes acompanhando o relevo da curva."
  },
  {
    id: 18,
    nome: "Argola Cravejada Linha Fina",
    material: "Aço Cirúrgico",
    preco: 50.00,
    categoria: "argolas",
    espessura: "1.0mm (18G)",
    diametro: "8mm",
    indicacao: "Nostril, Hélix, Tragus",
    descricaoVisual: "Perfil ultrafino de 1.0mm com fileira discreta de microzircônias.",
    especificacaoTecnica: {
      estruturaFisica: "Perfil ultrafino para perfurações delicadas",
      tipoFecho: "Clicker Articulado",
      materialGrau: "Aço Cirúrgico 316L",
      pedraria: "Microzircônias Cúbicas"
    },
    imagemUrl: IMAGENS_MARINA.argolaCravejada,
    imagem: IMAGENS_MARINA.argolaCravejada,
    descricao: "Perfil ultra delicado para quem aprecia joias quase imperceptíveis, mas com pontuação de brilho puro."
  },
  {
    id: 19,
    nome: "D-Ring Liso Minimalista",
    material: "Aço Cirúrgico",
    preco: 25.00,
    categoria: "argolas",
    espessura: "1.0mm",
    diametro: "8mm",
    indicacao: "Nostril, Hélix",
    descricaoVisual: "Piercing no formato D liso em aço cirúrgico polido com haste reta de apoio.",
    especificacaoTecnica: {
      estruturaFisica: "Formato D específico para aba nasal",
      tipoFecho: "Haste reta com arco liso",
      materialGrau: "Aço Cirúrgico 316L",
      pedraria: "Metal liso polido"
    },
    imagemUrl: IMAGENS_MARINA.dRingLisoClicker,
    imagem: IMAGENS_MARINA.dRingLisoClicker,
    descricao: "Argolinha em formato D que garante encaixe rente à asa nasal sem projetar para fora."
  },
  {
    id: 20,
    nome: "D-Ring Cravejada",
    material: "Aço Cirúrgico",
    preco: 55.00,
    categoria: "argolas",
    espessura: "1.0mm",
    diametro: "8mm",
    indicacao: "Nostril, Hélix",
    descricaoVisual: "Formato D com face externa curva decorada com microzircônias lapidadas.",
    especificacaoTecnica: {
      estruturaFisica: "Perfil D com cravação externa",
      tipoFecho: "Clicker Articulado",
      materialGrau: "Aço Cirúrgico 316L",
      pedraria: "Microzircônias Cúbicas"
    },
    imagemUrl: IMAGENS_MARINA.dRingLisoClicker,
    imagem: IMAGENS_MARINA.dRingLisoClicker,
    descricao: "Acabamento de micro-zircônias na face externa do perfil D. Luxo discreto para uso diário."
  },

  // =========================================================================
  // --- LABRETS (BASE CHATA / FLAT BACK) ---
  // =========================================================================
  {
    id: 21,
    nome: "Labret Ponto de Luz Solitário",
    material: "Titânio",
    preco: 35.00,
    categoria: "labret",
    espessura: "1.2mm (16G)",
    diametro: "Haste 6mm / 8mm • Base 4mm",
    indicacao: "Tragus, Conch, Hélix, Lóbulo, Forward Hélix",
    descricaoVisual: "Haste reta em titânio com base chata flat back e zircônia solitária em virola de 2mm.",
    especificacaoTecnica: {
      estruturaFisica: "Flat Back Labret Stud anatômico",
      tipoFecho: "Rosca Interna / Push-in",
      materialGrau: "Titânio ASTM F-136 Grau Implante",
      pedraria: "Zircônia Solitária 2mm em virola lisa"
    },
    imagemUrl: IMAGENS_MARINA.labretSolitario,
    imagem: IMAGENS_MARINA.labretSolitario,
    descricao: "Titânio ASTM F-136 com zircônia cúbica de 2mm cravada em virola. Perfeita para primeiras perfurações e uso constante."
  },
  {
    id: 22,
    nome: "Labret Ponto de Luz Médio",
    material: "Titânio",
    preco: 40.00,
    categoria: "labret",
    espessura: "1.2mm (16G)",
    diametro: "Haste 6mm / 8mm • Base 4mm",
    indicacao: "Conch, Hélix, Lóbulo",
    descricaoVisual: "Base plana chata com haste 1.2mm em titânio e zircônia facetada de 3mm em garra quádrupla.",
    especificacaoTecnica: {
      estruturaFisica: "Haste reta flat back com base polida 4mm",
      tipoFecho: "Rosca Interna",
      materialGrau: "Titânio ASTM F-136",
      pedraria: "Zircônia 3mm Lapidação Brilhante"
    },
    imagemUrl: IMAGENS_MARINA.labretSolitario,
    imagem: IMAGENS_MARINA.labretSolitario,
    descricao: "Zircônia de 3mm com lapidação facetada de joalheria sobre base anatômica em titânio polido."
  },
  {
    id: 23,
    nome: "Labret Zircônia Facetada",
    material: "Titânio",
    preco: 45.00,
    categoria: "labret",
    espessura: "1.2mm (16G)",
    diametro: "Haste 6mm / 8mm • Topo 4mm",
    indicacao: "Tragus, Hélix, Flat",
    descricaoVisual: "Base plana com topo solitário lapidado de 4 garras elevadas.",
    especificacaoTecnica: {
      estruturaFisica: "Flat Back Labret com topo elevado em 4 garras",
      tipoFecho: "Rosca Interna de Alta Precisão",
      materialGrau: "Titânio ASTM F-136",
      pedraria: "Zircônia Cúbica Transparente 4mm"
    },
    imagemUrl: IMAGENS_MARINA.labretSolitario,
    imagem: IMAGENS_MARINA.labretSolitario,
    descricao: "Cravação em garras delicadas que valorizam a entrada de luz e o brilho diamante da gema sintética."
  },
  {
    id: 24,
    nome: "Labret Garra Alta Solitária",
    material: "Titânio",
    preco: 50.00,
    categoria: "labret",
    espessura: "1.2mm (16G)",
    diametro: "Haste 6mm / 8mm",
    indicacao: "Flat, Conch, Hélix",
    descricaoVisual: "Haste reta com base flat back e zircônia montada em 4 garras altas de joalheria.",
    especificacaoTecnica: {
      estruturaFisica: "Flat back com topo de solitário em garra alta",
      tipoFecho: "Rosca Interna / Push-in",
      materialGrau: "Titânio ASTM F-136",
      pedraria: "Zircônia Solitária 4mm"
    },
    imagemUrl: IMAGENS_MARINA.labretSolitario,
    imagem: IMAGENS_MARINA.labretSolitario,
    descricao: "Quatro garras nobres elevando a gema central, conferindo aspecto de anel solitário de alta joalheria."
  },
  {
    id: 25,
    nome: "Labret Gota Zircônia",
    material: "Titânio",
    preco: 45.00,
    categoria: "labret",
    espessura: "1.2mm (16G)",
    diametro: "Haste 6mm / 8mm",
    indicacao: "Flat, Hélix, Tragus, Medusa",
    descricaoVisual: "Haste reta flat back com topo facetado no formato de gota de zircônia.",
    especificacaoTecnica: {
      estruturaFisica: "Haste reta com disco traseiro e topo formato gota",
      tipoFecho: "Rosca Interna",
      materialGrau: "Titânio ASTM F-136",
      pedraria: "Gema lapidação lágrima/gota"
    },
    imagemUrl: IMAGENS_MARINA.labretSolitario,
    imagem: IMAGENS_MARINA.labretSolitario,
    descricao: "Lapidação formato lágrima/gota em titânio cirúrgico. Harmonia perfeita com a curvatura natural da cartilagem."
  },
  {
    id: 26,
    nome: "Labret Estrela Cadente",
    material: "Titânio",
    preco: 50.00,
    categoria: "labret",
    espessura: "1.2mm (16G)",
    diametro: "Haste 6mm / 8mm",
    indicacao: "Hélix, Flat, Lóbulo",
    descricaoVisual: "Base plana reta em titânio com topo esculpido em estrela com microzircônias cravejadas.",
    especificacaoTecnica: {
      estruturaFisica: "Flat Back Labret com topo estelar",
      tipoFecho: "Rosca Interna / Push-in",
      materialGrau: "Titânio ASTM F-136",
      pedraria: "Microzircônias Cúbicas"
    },
    imagemUrl: IMAGENS_MARINA.labretLuaEstrelaRamo,
    imagem: IMAGENS_MARINA.labretLuaEstrelaRamo,
    descricao: "Motivo estelar cravado com micro-cristais. Traz poesia e encanto celestial à composição auricular."
  },
  {
    id: 27,
    nome: "Labret Coração Zircônia",
    material: "Titânio",
    preco: 45.00,
    categoria: "labret",
    espessura: "1.2mm (16G)",
    diametro: "Haste 6mm / 8mm",
    indicacao: "Tragus, Flat, Hélix, Medusa",
    descricaoVisual: "Haste flat back com pedra de zircônia lapidada em coração em 3 garras.",
    especificacaoTecnica: {
      estruturaFisica: "Flat Back Stud com topo em coração",
      tipoFecho: "Rosca Interna Suave",
      materialGrau: "Titânio ASTM F-136",
      pedraria: "Zircônia Lapidação Coração 4mm"
    },
    imagemUrl: IMAGENS_MARINA.umbigoCoracaoColorido,
    imagem: IMAGENS_MARINA.umbigoCoracaoColorido,
    descricao: "Zircônia lapidada em formato de coração montada em suporte seguro de titânio biocompatível."
  },
  {
    id: 28,
    nome: "Labret Raminho de Folhas",
    material: "Titânio",
    preco: 55.00,
    categoria: "labret",
    espessura: "1.2mm (16G)",
    diametro: "Haste 8mm • Topo curvo",
    indicacao: "Hélix, Flat, Conch",
    descricaoVisual: "Base chata flat back com topo curvo composto por folhagens esculpidas e microcristais.",
    especificacaoTecnica: {
      estruturaFisica: "Flat back com topo anatômico curvado botânico",
      tipoFecho: "Rosca Interna / Push-in",
      materialGrau: "Titânio ASTM F-136",
      pedraria: "Zircônias Foliares Navete"
    },
    imagemUrl: IMAGENS_MARINA.labretLuaEstrelaRamo,
    imagem: IMAGENS_MARINA.labretLuaEstrelaRamo,
    descricao: "Design botânico com folhagens delicadas esculpidas em relevo orgânico. Elegância fluida e natural."
  },
  {
    id: 29,
    nome: "Labret Tiara Marquise 5 Cristais",
    material: "Titânio",
    preco: 55.00,
    categoria: "labret",
    espessura: "1.2mm (16G)",
    diametro: "Haste 6mm / 8mm • Topo em leque",
    indicacao: "Hélix, Conch, Flat",
    descricaoVisual: "Base plana chata com topo em leque curvado contendo 5 pedras navete/marquise em graduação.",
    especificacaoTecnica: {
      estruturaFisica: "Flat Back Labret com topo em arco fan leque",
      tipoFecho: "Rosca Interna",
      materialGrau: "Titânio ASTM F-136 Grau Implante",
      pedraria: "5 Cristais Lapidação Marquise/Navete"
    },
    imagemUrl: IMAGENS_MARINA.labretTiaraMarquise,
    imagem: IMAGENS_MARINA.labretTiaraMarquise,
    descricao: "Cinco gemas em lapidação marquise dispostas em arco que abraça a curva da borda auricular."
  },
  {
    id: 30,
    nome: "Labret Borboleta Cravejada",
    material: "Titânio",
    preco: 60.00,
    categoria: "labret",
    espessura: "1.2mm (16G)",
    diametro: "Haste 6mm / 8mm • Topo 6mm",
    indicacao: "Flat, Hélix, Lóbulo",
    descricaoVisual: "Haste com base chata flat back e borboleta cravejada em microzircônias cúbicas.",
    especificacaoTecnica: {
      estruturaFisica: "Base chata com topo de borboleta alada cravejada",
      tipoFecho: "Rosca Interna / Push-in",
      materialGrau: "Titânio ASTM F-136",
      pedraria: "Micro Pavé de Zircônias Cúbicas"
    },
    imagemUrl: IMAGENS_MARINA.labretBorboleta,
    imagem: IMAGENS_MARINA.labretBorboleta,
    descricao: "Silhueta alada com asas cobertas por micro pavé de cristais cúbicos. Simbolismo de transformação e leveza."
  },
  {
    id: 31,
    nome: "Labret Borboleta Navetes Luxo",
    material: "Titânio",
    preco: 62.00,
    categoria: "labret",
    espessura: "1.2mm (16G)",
    diametro: "Haste 6mm / 8mm",
    indicacao: "Conch, Flat, Hélix",
    descricaoVisual: "Haste reta com base plana e quatro gemas de zircônia navete formando as asas da borboleta.",
    especificacaoTecnica: {
      estruturaFisica: "Haste reta anatômica com topo 4 navetes",
      tipoFecho: "Rosca Interna",
      materialGrau: "Titânio ASTM F-136",
      pedraria: "4 Pedras Navete Facetadas 5A"
    },
    imagemUrl: IMAGENS_MARINA.labretBorboleta,
    imagem: IMAGENS_MARINA.labretBorboleta,
    descricao: "Asas formadas por quatro gemas marquise de reflexo prismático. Um destaque supremo para a orelha."
  },
  {
    id: 32,
    nome: "Labret Lua e Estrela Cravejada",
    material: "Titânio",
    preco: 60.00,
    categoria: "labret",
    espessura: "1.2mm (16G)",
    diametro: "Haste 6mm / 8mm",
    indicacao: "Flat, Hélix, Tragus",
    descricaoVisual: "Haste flat back com meia-lua cravejada e micro estrela com zircônias de alto brilho.",
    especificacaoTecnica: {
      estruturaFisica: "Flat Back Stud com adorno celestial superior",
      tipoFecho: "Rosca Interna / Push-in",
      materialGrau: "Titânio ASTM F-136",
      pedraria: "Microzircônias na Lua e Estrela"
    },
    imagemUrl: IMAGENS_MARINA.labretLuaEstrelaRamo,
    imagem: IMAGENS_MARINA.labretLuaEstrelaRamo,
    descricao: "Composição mística de quarto crescente com estrela adjacente em titânio e zircônias."
  },
  {
    id: 33,
    nome: "Labret Flor Nobre Esculpida",
    material: "Titânio",
    preco: 75.00,
    categoria: "labret",
    espessura: "1.2mm (16G)",
    diametro: "Haste 6mm / 8mm",
    indicacao: "Conch, Flat, Lóbulo",
    descricaoVisual: "Haste com base plana e topo floral trabalhado em titânio com zircônias cravejadas.",
    especificacaoTecnica: {
      estruturaFisica: "Flat Back com flor esculpida e gema central",
      tipoFecho: "Rosca Interna",
      materialGrau: "Titânio ASTM F-136",
      pedraria: "Zircônia Central com pétalas texturizadas"
    },
    imagemUrl: IMAGENS_MARINA.labretFlorNobre,
    imagem: IMAGENS_MARINA.labretFlorNobre,
    descricao: "Jóia floral com detalhes em relevo de orfebraria e centro de gema brilhante em titânio cirúrgico."
  },
  {
    id: 34,
    nome: "Labret Mini Flor",
    material: "Aço Cirúrgico",
    preco: 32.00,
    categoria: "labret",
    espessura: "1.2mm (16G)",
    diametro: "Haste 6mm / 8mm",
    indicacao: "Tragus, Hélix, Forward Hélix",
    descricaoVisual: "Base plana chata com delicada mini flor em aço cirúrgico e centro brilhante.",
    especificacaoTecnica: {
      estruturaFisica: "Flat Back Stud com micro flor",
      tipoFecho: "Rosca Interna",
      materialGrau: "Aço Cirúrgico 316L",
      pedraria: "Microzircônia 1.5mm"
    },
    imagemUrl: IMAGENS_MARINA.labretFlorNobre,
    imagem: IMAGENS_MARINA.labretFlorNobre,
    descricao: "Mini flor com pétalas de micro-esferas polidas e zircônia central em aço cirúrgico 316L."
  },
  {
    id: 35,
    nome: "Labret Ponto Duplo de Luz",
    material: "Aço Cirúrgico",
    preco: 32.00,
    categoria: "labret",
    espessura: "1.2mm (16G)",
    diametro: "Haste 6mm / 8mm",
    indicacao: "Tragus, Hélix, Lóbulo",
    descricaoVisual: "Haste reta com base chata e duas zircônias alinhadas em sequência vertical.",
    especificacaoTecnica: {
      estruturaFisica: "Base chata com topo linear de dois cristais",
      tipoFecho: "Rosca Interna",
      materialGrau: "Aço Cirúrgico 316L",
      pedraria: "Dupla de Zircônias Cúbicas 2mm"
    },
    imagemUrl: IMAGENS_MARINA.labretSolitario,
    imagem: IMAGENS_MARINA.labretSolitario,
    descricao: "Duas zircônias em sequência linear para quem busca um toque geométrico limpo."
  },
  {
    id: 36,
    nome: "Labret Serpente / Cobrinha",
    material: "Aço Cirúrgico",
    preco: 35.00,
    categoria: "labret",
    espessura: "1.2mm (16G)",
    diametro: "Haste 6mm / 8mm • Topo 11mm ondulado",
    indicacao: "Flat, Hélix, Lóbulo",
    descricaoVisual: "Haste flat back reta com topo em relevo escultural de serpente ondulada em aço polido.",
    especificacaoTecnica: {
      estruturaFisica: "Flat Back Stud com topo em serpente escultural",
      tipoFecho: "Rosca Interna",
      materialGrau: "Aço Cirúrgico 316L",
      pedraria: "Metal escultural trabalhado"
    },
    imagemUrl: IMAGENS_MARINA.labretSerpenteCruz,
    imagem: IMAGENS_MARINA.labretSerpenteCruz,
    descricao: "Silhueta sinuosa da serpente com escamas texturizadas e olhos em micro-cristal."
  },
  {
    id: 37,
    nome: "Labret Cruz Delicada",
    material: "Aço Cirúrgico",
    preco: 35.00,
    categoria: "labret",
    espessura: "1.2mm (16G)",
    diametro: "Haste 6mm / 8mm",
    indicacao: "Tragus, Hélix, Lóbulo",
    descricaoVisual: "Base plana chata com topo em cruz delicada com bordas polidas.",
    especificacaoTecnica: {
      estruturaFisica: "Flat Back com topo em cruz polida",
      tipoFecho: "Rosca Interna",
      materialGrau: "Aço Cirúrgico 316L",
      pedraria: "Aço polido com bordas bisotadas"
    },
    imagemUrl: IMAGENS_MARINA.labretSerpenteCruz,
    imagem: IMAGENS_MARINA.labretSerpenteCruz,
    descricao: "Cruz minimalista polida em aço de alta durabilidade com rosca precisa e confortável."
  },
  {
    id: 38,
    nome: "Labret Ramo 4 Pedras",
    material: "Aço Cirúrgico",
    preco: 35.00,
    categoria: "labret",
    espessura: "1.2mm (16G)",
    diametro: "Haste 6mm / 8mm",
    indicacao: "Hélix, Conch, Flat",
    descricaoVisual: "Haste flat back com ramo curvado composto por 4 zircônias brilhantes.",
    especificacaoTecnica: {
      estruturaFisica: "Flat back com topo curvado de 4 gemas",
      tipoFecho: "Rosca Interna",
      materialGrau: "Aço Cirúrgico 316L",
      pedraria: "4 Zircônias Cúbicas em virolas"
    },
    imagemUrl: IMAGENS_MARINA.labretLuaEstrelaRamo,
    imagem: IMAGENS_MARINA.labretLuaEstrelaRamo,
    descricao: "Quatro pedrarias delicadas simulando botões de flores ao longo da cartilagem."
  },
  {
    id: 39,
    nome: "Labret Tiara 7 Pedras Cravejadas",
    material: "Aço Cirúrgico",
    preco: 55.00,
    categoria: "labret",
    espessura: "1.2mm (16G)",
    diametro: "Haste 6mm / 8mm • Topo 12mm",
    indicacao: "Conch, Hélix",
    descricaoVisual: "Haste com base chata flat back e arco curvado em tiara com 7 zircônias em graduação.",
    especificacaoTecnica: {
      estruturaFisica: "Flat Back Stud com tiara de 7 cristais",
      tipoFecho: "Rosca Interna",
      materialGrau: "Aço Cirúrgico 316L",
      pedraria: "7 Zircônias Graduadas Lapidação Brilhante"
    },
    imagemUrl: IMAGENS_MARINA.labretTiaraMarquise,
    imagem: IMAGENS_MARINA.labretTiaraMarquise,
    descricao: "Arco exuberante com 7 zircônias em graduação que abraçam a anatomia auricular com impacto visual."
  },
  {
    id: 40,
    nome: "Labret Borboleta Aço",
    material: "Aço Cirúrgico",
    preco: 52.00,
    categoria: "labret",
    espessura: "1.2mm (16G)",
    diametro: "Haste 6mm / 8mm",
    indicacao: "Flat, Hélix, Tragus",
    descricaoVisual: "Haste flat back com borboleta delicada em corte cirúrgico espelhado.",
    especificacaoTecnica: {
      estruturaFisica: "Base chata com topo de borboleta recortada",
      tipoFecho: "Rosca Interna",
      materialGrau: "Aço Cirúrgico 316L",
      pedraria: "Aço inox com polimento mecânico"
    },
    imagemUrl: IMAGENS_MARINA.labretBorboleta,
    imagem: IMAGENS_MARINA.labretBorboleta,
    descricao: "Borboleta clássica em aço inoxidável cirúrgico com acabamento espelhado de alta resistência."
  },
  {
    id: 41,
    nome: "Ponto de Luz Flor Delicada",
    material: "Aço Cirúrgico",
    preco: 35.00,
    categoria: "labret",
    espessura: "1.2mm (16G)",
    diametro: "Haste 6mm / 8mm",
    indicacao: "Tragus, Lóbulo, Hélix",
    descricaoVisual: "Base plana chata com topo de flor em microzircônias brilhantes.",
    especificacaoTecnica: {
      estruturaFisica: "Flat Back Labret com topo floral",
      tipoFecho: "Rosca Interna",
      materialGrau: "Aço Cirúrgico 316L",
      pedraria: "Zircônias Cúbicas Lapidadas"
    },
    imagemUrl: IMAGENS_MARINA.labretFlorNobre,
    imagem: IMAGENS_MARINA.labretFlorNobre,
    descricao: "Mini flor com zircônias em garras delicadas, garantindo luminosidade e discrição no dia a dia."
  },
  {
    id: 42,
    nome: "Ponto de Luz Formato Coração",
    material: "Aço Cirúrgico",
    preco: 30.00,
    categoria: "labret",
    espessura: "1.2mm (16G)",
    diametro: "Haste 6mm / 8mm",
    indicacao: "Tragus, Nostril, Hélix",
    descricaoVisual: "Base plana reta com topo de zircônia formato coração facetado em garra fina.",
    especificacaoTecnica: {
      estruturaFisica: "Base chata com topo coração facetado",
      tipoFecho: "Rosca Interna",
      materialGrau: "Aço Cirúrgico 316L",
      pedraria: "Zircônia Coração 3mm"
    },
    imagemUrl: IMAGENS_MARINA.umbigoCoracaoColorido,
    imagem: IMAGENS_MARINA.umbigoCoracaoColorido,
    descricao: "Gema coração montada em aço 316L polido com base plana anti-pressão."
  },

  // =========================================================================
  // --- PIERCINGS DE UMBIGO (BANANA COM PINGENTE) ---
  // =========================================================================
  {
    id: 43,
    nome: "Umbigo Ponto de Luz Duplo",
    material: "Aço Cirúrgico",
    preco: 38.00,
    categoria: "umbigo",
    espessura: "1.6mm (14G)",
    diametro: "10mm",
    indicacao: "Umbigo",
    descricaoVisual: "Haste curva em aço 316L com cristal superior rosqueável e grande zircônia inferior facetada.",
    especificacaoTecnica: {
      estruturaFisica: "Banana curva clássica com rosca superior",
      tipoFecho: "Esfera superior rosqueável com cristal",
      materialGrau: "Aço Cirúrgico 316L",
      pedraria: "Duas Zircônias Cúbicas Facetadas"
    },
    imagemUrl: IMAGENS_MARINA.umbigoPontoDeLuz,
    imagem: IMAGENS_MARINA.umbigoPontoDeLuz,
    descricao: "Barra curva com esfera superior de zircônia e cristal inferior lapidado de alta refração."
  },
  {
    id: 44,
    nome: "Umbigo Estrela Tripla",
    material: "Aço Cirúrgico",
    preco: 38.00,
    categoria: "umbigo",
    espessura: "1.6mm (14G)",
    diametro: "10mm",
    indicacao: "Umbigo",
    descricaoVisual: "Haste curva com pingente articulado de 3 estrelas cadentes sobrepostas cravejadas de cristais.",
    especificacaoTecnica: {
      estruturaFisica: "Banana com pingente pendurado articulado",
      tipoFecho: "Bolinha rosqueável superior",
      materialGrau: "Aço Cirúrgico 316L",
      pedraria: "Estrelas Cravejadas de Cristais"
    },
    imagemUrl: IMAGENS_MARINA.umbigoEstrelaTripla,
    imagem: IMAGENS_MARINA.umbigoEstrelaTripla,
    descricao: "Design com constelação de três estrelas polidas e zircônias centrais que valorizam o abdômen."
  },
  {
    id: 45,
    nome: "Umbigo Coração Zircônia",
    material: "Aço Cirúrgico",
    preco: 35.00,
    categoria: "umbigo",
    espessura: "1.6mm (14G)",
    diametro: "10mm",
    indicacao: "Umbigo",
    descricaoVisual: "Banana para umbigo com extremidade inferior em cristal lapidado em coração em garras finas.",
    especificacaoTecnica: {
      estruturaFisica: "Banana curva com coração facetado",
      tipoFecho: "Rosca tradicional com esfera superior",
      materialGrau: "Aço Cirúrgico 316L",
      pedraria: "Zircônia Coração Lapidação Diamante"
    },
    imagemUrl: IMAGENS_MARINA.umbigoCoracaoColorido,
    imagem: IMAGENS_MARINA.umbigoCoracaoColorido,
    descricao: "Pêndulo com gema coração facetada em garras de aço cirúrgico de brilho eterno."
  },
  {
    id: 46,
    nome: "Umbigo Flor Vintage Clássica",
    material: "Aço Cirúrgico",
    preco: 45.00,
    categoria: "umbigo",
    espessura: "1.6mm (14G)",
    diametro: "10mm",
    indicacao: "Umbigo",
    descricaoVisual: "Haste curva com pingente floral vintage e pétalas cravejadas em pedras zircônia.",
    especificacaoTecnica: {
      estruturaFisica: "Navel Barbell com pingente floral articulado",
      tipoFecho: "Bolinha rosqueável superior",
      materialGrau: "Aço Cirúrgico 316L",
      pedraria: "Zircônias em Flor Vintage"
    },
    imagemUrl: IMAGENS_MARINA.umbigoFlorZirconias,
    imagem: IMAGENS_MARINA.umbigoFlorZirconias,
    descricao: "Motivo floral vintage com filigranas detalhadas e zircônias cúbicas em lapidação brilhante."
  },
  {
    id: 47,
    nome: "Umbigo Esferas Coloridas",
    material: "Aço Cirúrgico",
    preco: 30.00,
    categoria: "umbigo",
    espessura: "1.6mm (14G)",
    diametro: "10mm",
    indicacao: "Umbigo",
    descricaoVisual: "Haste curva em aço com esferas acrílicas lisas em tons vivos e acabamento suave.",
    especificacaoTecnica: {
      estruturaFisica: "Haste curva clássica com esferas poliméricas",
      tipoFecho: "Rosca rosqueável",
      materialGrau: "Aço Cirúrgico 316L + Resina Hipoalergênica",
      pedraria: "Esferas coloridas lisas"
    },
    imagemUrl: IMAGENS_MARINA.umbigoCoracaoColorido,
    imagem: IMAGENS_MARINA.umbigoCoracaoColorido,
    descricao: "Esferas de resina acetinada com efeito opalescente e haste em aço cirúrgico."
  },
  {
    id: 48,
    nome: "Umbigo Cristais Coloridos 02",
    material: "Aço Cirúrgico",
    preco: 35.00,
    categoria: "umbigo",
    espessura: "1.6mm (14G)",
    diametro: "10mm",
    indicacao: "Umbigo",
    descricaoVisual: "Haste curva com cristais em tons especiais e reflexo prismático.",
    especificacaoTecnica: {
      estruturaFisica: "Navel curved barbell duplo cristal",
      tipoFecho: "Rosca superior",
      materialGrau: "Aço Cirúrgico 316L",
      pedraria: "Zircônias Prismáticas"
    },
    imagemUrl: IMAGENS_MARINA.umbigoCoracaoColorido,
    imagem: IMAGENS_MARINA.umbigoCoracaoColorido,
    descricao: "Duas pedrarias com tonalidades especiais que refletem nuances furta-cor sob a luz do sol."
  },
  {
    id: 49,
    nome: "Umbigo Rosácea Cravejada",
    material: "Titânio",
    preco: 42.00,
    categoria: "umbigo",
    espessura: "1.6mm (14G)",
    diametro: "10mm",
    indicacao: "Umbigo",
    descricaoVisual: "Haste curva em titânio com pingente em mandala rosácea cravejado de zircônias.",
    especificacaoTecnica: {
      estruturaFisica: "Banana curva com rosácea mandala esculpida",
      tipoFecho: "Rosca Interna com Esfera de Cristal",
      materialGrau: "Titânio ASTM F-136 Grau Implante",
      pedraria: "Microzircônias em Cravação Circular"
    },
    imagemUrl: IMAGENS_MARINA.umbigoRosaceaMandala,
    imagem: IMAGENS_MARINA.umbigoRosaceaMandala,
    descricao: "Rosácea gótica esculpida em titânio grau implante com micro-cristais. Altíssima tolerância biológica."
  },
  {
    id: 50,
    nome: "Umbigo Argola Click Navetes",
    material: "Titânio",
    preco: 50.00,
    categoria: "umbigo",
    espessura: "1.6mm (14G)",
    diametro: "10mm / 12mm",
    indicacao: "Umbigo",
    descricaoVisual: "Argola articulada específica para umbigo adornada com cristais em formato navete.",
    especificacaoTecnica: {
      estruturaFisica: "Argola articulada clicker para umbigo",
      tipoFecho: "Clicker Articulado Invisível",
      materialGrau: "Titânio ASTM F-136",
      pedraria: "Zircônias Navete Lapidadas"
    },
    imagemUrl: IMAGENS_MARINA.argolaCravejada,
    imagem: IMAGENS_MARINA.argolaCravejada,
    descricao: "Formato inovador de argola clicker para umbigo adornada com zircônias lapidação navete."
  },
  {
    id: 51,
    nome: "Umbigo Esferas Zircônia Dupla",
    material: "Titânio",
    preco: 55.00,
    categoria: "umbigo",
    espessura: "1.6mm (14G)",
    diametro: "10mm",
    indicacao: "Umbigo",
    descricaoVisual: "Banana para umbigo com cristais facetados suíços no topo e na base em titânio grau implante.",
    especificacaoTecnica: {
      estruturaFisica: "Haste curva em titânio com rosca interna",
      tipoFecho: "Rosca Interna Antilesão",
      materialGrau: "Titânio ASTM F-136",
      pedraria: "Topos e base em zircônias facetadas"
    },
    imagemUrl: IMAGENS_MARINA.umbigoZirconiaGota,
    imagem: IMAGENS_MARINA.umbigoZirconiaGota,
    descricao: "Topos e base em zircônias lapidadas de alto calibre fixadas em titânio ASTM F-136."
  },
  {
    id: 52,
    nome: "Umbigo Borboleta com Flor",
    material: "Titânio",
    preco: 60.00,
    categoria: "umbigo",
    espessura: "1.6mm (14G)",
    diametro: "10mm",
    indicacao: "Umbigo",
    descricaoVisual: "Haste curva com pingente articulado combinando borboleta escultural e flor de cristais reluzentes.",
    especificacaoTecnica: {
      estruturaFisica: "Banana curva com pingente composto articulado",
      tipoFecho: "Rosca Interna",
      materialGrau: "Titânio ASTM F-136",
      pedraria: "Micro Pavé de Zircônias"
    },
    imagemUrl: IMAGENS_MARINA.umbigoFlorZirconias,
    imagem: IMAGENS_MARINA.umbigoFlorZirconias,
    descricao: "Pêndulo elaborado com borboleta graciosa e delicada flor de zircônias cintilantes."
  },
  {
    id: 53,
    nome: "Umbigo Escorpião Cravejado",
    material: "Titânio",
    preco: 65.00,
    categoria: "umbigo",
    espessura: "1.6mm (14G)",
    diametro: "10mm",
    indicacao: "Umbigo",
    descricaoVisual: "Banana em titânio com pingente articulado de escorpião metálico com corpo e cauda cravejados.",
    especificacaoTecnica: {
      estruturaFisica: "Banana para umbigo com pingente de escorpião articulado",
      tipoFecho: "Rosca Interna",
      materialGrau: "Titânio ASTM F-136",
      pedraria: "Zircônias Cúbicas no Corpo e Cauda"
    },
    imagemUrl: IMAGENS_MARINA.umbigoEscorpiaoRamo,
    imagem: IMAGENS_MARINA.umbigoEscorpiaoRamo,
    descricao: "Design arrojado e escultural de escorpião com cauda articulada e corpo cravejado de pedrarias."
  },
  {
    id: 54,
    nome: "Umbigo Gota Cravejada e Zircônia",
    material: "Titânio",
    preco: 65.00,
    categoria: "umbigo",
    espessura: "1.6mm (14G)",
    diametro: "10mm",
    indicacao: "Umbigo",
    descricaoVisual: "Banana curva em titânio com gota vazada com halo de microzircônias e pedra central facetada.",
    especificacaoTecnica: {
      estruturaFisica: "Banana curva com halo de gota articulado",
      tipoFecho: "Rosca Interna",
      materialGrau: "Titânio ASTM F-136",
      pedraria: "Zircônia Central Facetada com Halo"
    },
    imagemUrl: IMAGENS_MARINA.umbigoZirconiaGota,
    imagem: IMAGENS_MARINA.umbigoZirconiaGota,
    descricao: "Gotas entrelaçadas em titânio puro com halo de micro-zircônias e pedra central suspensa."
  },
  {
    id: 55,
    nome: "Umbigo Zircônias Duplas Premium",
    material: "Titânio",
    preco: 70.00,
    categoria: "umbigo",
    espessura: "1.6mm (14G)",
    diametro: "10mm",
    indicacao: "Umbigo",
    descricaoVisual: "Alta joalheria em titânio com gemas de lapidação brilhante suíça de transparência impecável.",
    especificacaoTecnica: {
      estruturaFisica: "Banana clássica de luxo com rosca interna",
      tipoFecho: "Rosca Interna Suave",
      materialGrau: "Titânio ASTM F-136 Polido Manualmente",
      pedraria: "Zircônias Suíças Grau 5A"
    },
    imagemUrl: IMAGENS_MARINA.umbigoZirconiaGota,
    imagem: IMAGENS_MARINA.umbigoZirconiaGota,
    descricao: "Alta joalheria em titânio grau implante com gemas de lapidação brilhante suíça de transparência impecável."
  },
  {
    id: 56,
    nome: "Umbigo Ramo Floral Completo",
    material: "Titânio",
    preco: 75.00,
    categoria: "umbigo",
    espessura: "1.6mm (14G)",
    diametro: "10mm",
    indicacao: "Umbigo",
    descricaoVisual: "Haste curva em titânio com cascata de folhas e cristais navete esculpidos.",
    especificacaoTecnica: {
      estruturaFisica: "Banana curva com ramo pendente articulado",
      tipoFecho: "Rosca Interna",
      materialGrau: "Titânio ASTM F-136",
      pedraria: "Cascata de Pedras Navete e Brilhantes"
    },
    imagemUrl: IMAGENS_MARINA.umbigoEscorpiaoRamo,
    imagem: IMAGENS_MARINA.umbigoEscorpiaoRamo,
    descricao: "Cascata de folhas e cristais navete esculpidos em titânio polido de biocompatibilidade máxima."
  },

  // =========================================================================
  // --- BANANINHAS (MICROBELLS CURVOS) ---
  // =========================================================================
  {
    id: 57,
    nome: "Bananinha Lisa Polida",
    material: "Aço Cirúrgico",
    preco: 32.00,
    categoria: "bananas",
    espessura: "1.2mm (16G)",
    diametro: "8mm",
    indicacao: "Rook, Sobrancelha, Daith, Snug",
    descricaoVisual: "Haste curva microbell em aço cirúrgico polido com duas esferas rosqueáveis de 3mm.",
    especificacaoTecnica: {
      estruturaFisica: "Microbell Curvo Anatômico (Curved Barbell 16G)",
      tipoFecho: "Esferas rosqueáveis simétricas 3mm",
      materialGrau: "Aço Cirúrgico 316L",
      pedraria: "Metal polido espelhado"
    },
    imagemUrl: IMAGENS_MARINA.umbigoPontoDeLuz,
    imagem: IMAGENS_MARINA.umbigoPontoDeLuz,
    descricao: "Microbell curvo com esferas rosqueáveis de precisão. Acabamento espelhado livre de rebarbas."
  },
  {
    id: 58,
    nome: "Bananinha Pedrarias Duplas",
    material: "Aço Cirúrgico",
    preco: 40.00,
    categoria: "bananas",
    espessura: "1.2mm (16G)",
    diametro: "8mm",
    indicacao: "Rook, Sobrancelha, Vertical Labret",
    descricaoVisual: "Haste curva microbell com duas extremidades em pedrarias de zircônia em virolas lisas.",
    especificacaoTecnica: {
      estruturaFisica: "Microbell curvo com topos de cristal em virola",
      tipoFecho: "Rosca com topos de zircônia",
      materialGrau: "Aço Cirúrgico 316L",
      pedraria: "Zircônias Cúbicas 3mm"
    },
    imagemUrl: IMAGENS_MARINA.umbigoZirconiaGota,
    imagem: IMAGENS_MARINA.umbigoZirconiaGota,
    descricao: "Duas extremidades com zircônias cravejadas em virolas lisas que não enroscam no cabelo ou roupas."
  },
  {
    id: 59,
    nome: "Bananinha Cristais Cravejados",
    material: "Titânio",
    preco: 45.00,
    categoria: "bananas",
    espessura: "1.2mm (16G)",
    diametro: "8mm",
    indicacao: "Rook, Sobrancelha, Daith",
    descricaoVisual: "Microbell em titânio ASTM F-136 com rosca interna e cristais facetados nas extremidades.",
    especificacaoTecnica: {
      estruturaFisica: "Haste curva em titânio com rosca interna",
      tipoFecho: "Rosca Interna Suave",
      materialGrau: "Titânio ASTM F-136",
      pedraria: "Topos em Zircônia Facetada"
    },
    imagemUrl: IMAGENS_MARINA.umbigoZirconiaGota,
    imagem: IMAGENS_MARINA.umbigoZirconiaGota,
    descricao: "Titânio grau implante ASTM F-136 com topos em cristais lapidados e rosca interna suave."
  },

  // =========================================================================
  // --- BARBELLS DE MAMILO & BARRAS RETAS ---
  // =========================================================================
  {
    id: 60,
    nome: "Barbell Mamilo Básico Zircônias",
    material: "Aço Cirúrgico",
    preco: 30.00,
    categoria: "barras",
    espessura: "1.6mm (14G)",
    diametro: "14mm / 16mm",
    indicacao: "Mamilo, Língua",
    descricaoVisual: "Haste reta 1.6mm em aço cirúrgico com duas esferas nas pontas cravadas com zircônias transparentes.",
    especificacaoTecnica: {
      estruturaFisica: "Straight Barbell 14G com pontas simétricas",
      tipoFecho: "Rosca tradicional com esferas cravejadas",
      materialGrau: "Aço Cirúrgico 316L",
      pedraria: "Esferas com Zircônias Embutidas 5mm"
    },
    imagemUrl: IMAGENS_MARINA.transversalAdornoCentral,
    imagem: IMAGENS_MARINA.transversalAdornoCentral,
    descricao: "Barra reta em aço 316L com duas esferas cravejadas em pedras de zircônia transparentes."
  },
  {
    id: 61,
    nome: "Barbell Mamilo Coração Cravejado",
    material: "Aço Cirúrgico",
    preco: 35.00,
    categoria: "barras",
    espessura: "1.6mm (14G)",
    diametro: "14mm",
    indicacao: "Mamilo",
    descricaoVisual: "Barra reta 1.6mm com dois topos frontais em formato de coração vazado inteiramente cravejados.",
    especificacaoTecnica: {
      estruturaFisica: "Straight Barbell com dois topos em coração vazado",
      tipoFecho: "Rosca com topos coração",
      materialGrau: "Aço Cirúrgico 316L",
      pedraria: "Micro Pavé de Zircônias nos Corações"
    },
    imagemUrl: IMAGENS_MARINA.umbigoCoracaoColorido,
    imagem: IMAGENS_MARINA.umbigoCoracaoColorido,
    descricao: "Ponta estilizada em coração com contorno em micro-cristais cintilantes e haste anatômica."
  },
  {
    id: 62,
    nome: "Barbell Mamilo Arco de Cristais",
    material: "Aço Cirúrgico",
    preco: 40.00,
    categoria: "barras",
    espessura: "1.6mm (14G)",
    diametro: "14mm",
    indicacao: "Mamilo",
    descricaoVisual: "Barra reta com escudo inferior em arco de cristais que contorna a base da aréola mamária.",
    especificacaoTecnica: {
      estruturaFisica: "Haste reta com escudo/arco inferior anatômico",
      tipoFecho: "Esferas rosqueáveis laterais",
      materialGrau: "Aço Cirúrgico 316L",
      pedraria: "Fileira de Zircônias Lapidadas"
    },
    imagemUrl: IMAGENS_MARINA.cluster5Zirconias,
    imagem: IMAGENS_MARINA.cluster5Zirconias,
    descricao: "Escudo inferior com arco de cristais que contorna elegantemente a aréola com caimento sutil."
  },
  {
    id: 63,
    nome: "Barbell Mamilo Haste Lisa",
    material: "Titânio",
    preco: 35.00,
    categoria: "barras",
    espessura: "1.6mm (14G)",
    diametro: "12mm / 14mm / 16mm",
    indicacao: "Mamilo, Língua",
    descricaoVisual: "Barbell reto em titânio ASTM F-136 com rosca interna suave e duas esferas lisas de 5mm.",
    especificacaoTecnica: {
      estruturaFisica: "Haste reta padrão ouro para mamilo e cicatrização",
      tipoFecho: "Rosca Interna de Alta Precisão",
      materialGrau: "Titânio ASTM F-136 Grau Implante",
      pedraria: "Esferas sólidas em titânio 5mm"
    },
    imagemUrl: IMAGENS_MARINA.transversalAdornoCentral,
    imagem: IMAGENS_MARINA.transversalAdornoCentral,
    descricao: "Titânio ASTM F-136 com rosca interna e esferas lisas de 5mm. O padrão ouro para cicatrização de mamilo."
  },
  {
    id: 64,
    nome: "Barbell Mamilo Trio Zircônia",
    material: "Titânio",
    preco: 50.00,
    categoria: "barras",
    espessura: "1.6mm (14G)",
    diametro: "14mm",
    indicacao: "Mamilo",
    descricaoVisual: "Barra reta em titânio com dois topos em leque triangular contendo 3 zircônias alinhadas.",
    especificacaoTecnica: {
      estruturaFisica: "Haste reta com topos de 3 pedras em leque",
      tipoFecho: "Rosca Interna",
      materialGrau: "Titânio ASTM F-136",
      pedraria: "Trio de Zircônias Cúbicas de Alta Pureza"
    },
    imagemUrl: IMAGENS_MARINA.clusterCartilagem,
    imagem: IMAGENS_MARINA.clusterCartilagem,
    descricao: "Topos em trio de zircônias dispostas em triângulo de luz em titânio hipoalergênico puro."
  },
  {
    id: 65,
    nome: "Barbell Mamilo Topos Coração",
    material: "Titânio",
    preco: 55.00,
    categoria: "barras",
    espessura: "1.6mm (14G)",
    diametro: "14mm",
    indicacao: "Mamilo",
    descricaoVisual: "Barra reta em titânio com duas pedras de coração facetadas em caixas maciças de titânio.",
    especificacaoTecnica: {
      estruturaFisica: "Haste reta 14G com topos rosqueáveis coração",
      tipoFecho: "Rosca Interna Antilesão",
      materialGrau: "Titânio ASTM F-136",
      pedraria: "Zircônias Lapidadas em Coração"
    },
    imagemUrl: IMAGENS_MARINA.umbigoCoracaoColorido,
    imagem: IMAGENS_MARINA.umbigoCoracaoColorido,
    descricao: "Topos em formato de coração em titânio polido espelhado com pedras zircônias facetadas."
  },
  {
    id: 66,
    nome: "Barbell Reto Pontas Facetadas",
    material: "Titânio",
    preco: 55.00,
    categoria: "barras",
    espessura: "1.2mm / 1.6mm",
    diametro: "8mm / 10mm / 12mm",
    indicacao: "Língua, Mamilo, Conch, Lóbulo",
    descricaoVisual: "Barbell reto em titânio com topos geométricos facetados de reflexo prismático.",
    especificacaoTecnica: {
      estruturaFisica: "Straight Barbell com pontas prismáticas facetadas",
      tipoFecho: "Rosca Interna",
      materialGrau: "Titânio ASTM F-136",
      pedraria: "Pontas geométricas em titânio lapidado"
    },
    imagemUrl: IMAGENS_MARINA.transversalAdornoCentral,
    imagem: IMAGENS_MARINA.transversalAdornoCentral,
    descricao: "Pontas geométricas facetadas com reflexo prismático e rosca interna em titânio cirúrgico."
  },

  // =========================================================================
  // --- TRANSVERSAIS (INDUSTRIAL EAR PIERCING) ---
  // =========================================================================
  {
    id: 67,
    nome: "Transversal Clássico Liso",
    material: "Aço Cirúrgico",
    preco: 30.00,
    categoria: "barras",
    espessura: "1.6mm (14G)",
    diametro: "36mm / 38mm",
    indicacao: "Industrial (Transversal da orelha)",
    descricaoVisual: "Haste reta longa de 38mm em aço cirúrgico 316L com duas esferas lisas de 5mm.",
    especificacaoTecnica: {
      estruturaFisica: "Barra longa industrial (Industrial Scaffolding Barbell)",
      tipoFecho: "Rosca simétrica em ambas as pontas",
      materialGrau: "Aço Cirúrgico 316L",
      pedraria: "Esferas de aço polido 5mm"
    },
    imagemUrl: IMAGENS_MARINA.transversalAdornoCentral,
    imagem: IMAGENS_MARINA.transversalAdornoCentral,
    descricao: "Barra transversal em aço 316L com comprimento padrão e esferas lisas com rosca de alta precisão."
  },
  {
    id: 68,
    nome: "Transversal Estrela Central",
    material: "Aço Cirúrgico",
    preco: 35.00,
    categoria: "barras",
    espessura: "1.6mm (14G)",
    diametro: "38mm",
    indicacao: "Industrial (Transversal da orelha)",
    descricaoVisual: "Barra industrial longa de 38mm com adorno central esculpido em estrela.",
    especificacaoTecnica: {
      estruturaFisica: "Barra transversal com elemento central estelar",
      tipoFecho: "Rosca tradicional nas extremidades",
      materialGrau: "Aço Cirúrgico 316L",
      pedraria: "Estrela central de corte preciso"
    },
    imagemUrl: IMAGENS_MARINA.transversalAdornoCentral,
    imagem: IMAGENS_MARINA.transversalAdornoCentral,
    descricao: "Detalhe em relevo no centro da barra com estrela em corte cirúrgico refinado."
  },
  {
    id: 69,
    nome: "Transversal Cravejado Central",
    material: "Aço Cirúrgico",
    preco: 50.00,
    categoria: "barras",
    espessura: "1.6mm (14G)",
    diametro: "38mm",
    indicacao: "Industrial (Transversal da orelha)",
    descricaoVisual: "Haste industrial longa de 38mm com feixe central de zircônias cúbicas embutidas.",
    especificacaoTecnica: {
      estruturaFisica: "Haste longa com cravação central de pedrarias",
      tipoFecho: "Esferas rosqueáveis nas pontas",
      materialGrau: "Aço Cirúrgico 316L",
      pedraria: "Microzircônias Cúbicas Cravejadas"
    },
    imagemUrl: IMAGENS_MARINA.transversalAdornoCentral,
    imagem: IMAGENS_MARINA.transversalAdornoCentral,
    descricao: "Composição central com feixe de micro-zircônias que atrai os olhares para a extensão da orelha."
  },
  {
    id: 70,
    nome: "Transversal Polido Grau Implante",
    material: "Titânio",
    preco: 60.00,
    categoria: "barras",
    espessura: "1.6mm (14G)",
    diametro: "36mm / 38mm",
    indicacao: "Industrial (Transversal da orelha)",
    descricaoVisual: "Barra industrial em titânio puro ASTM F-136 com rosca interna suave e polimento espelhado a mão.",
    especificacaoTecnica: {
      estruturaFisica: "Barra industrial em titânio puro de grau médico",
      tipoFecho: "Rosca Interna Antilesão",
      materialGrau: "Titânio ASTM F-136 Hipoalergênico",
      pedraria: "Esferas sólidas em titânio polido"
    },
    imagemUrl: IMAGENS_MARINA.transversalAdornoCentral,
    imagem: IMAGENS_MARINA.transversalAdornoCentral,
    descricao: "Titânio ASTM F-136 polido a mão com rosca interna. A melhor opção médica para cicatrização do transversal."
  },
  {
    id: 71,
    nome: "Transversal Lua e Zircônias",
    material: "Titânio",
    preco: 80.00,
    categoria: "barras",
    espessura: "1.6mm (14G)",
    diametro: "38mm",
    indicacao: "Industrial (Transversal da orelha)",
    descricaoVisual: "Barra industrial em titânio com adorno central em meia-lua cravejada de zircônias cintilantes.",
    especificacaoTecnica: {
      estruturaFisica: "Barra transversal com elemento central em meia-lua cravejada",
      tipoFecho: "Rosca Interna de Alta Precisão",
      materialGrau: "Titânio ASTM F-136",
      pedraria: "Microzircônias Cravejadas na Lua"
    },
    imagemUrl: IMAGENS_MARINA.transversalAdornoCentral,
    imagem: IMAGENS_MARINA.transversalAdornoCentral,
    descricao: "Adorno celestial central com meia-lua cravada em zircônias e corpo em titânio puro."
  },

  // =========================================================================
  // --- CLUSTERS & ESPECIAIS ---
  // =========================================================================
  {
    id: 72,
    nome: "Cluster Curvo 5 Zircônias",
    material: "Titânio",
    preco: 45.00,
    categoria: "cravejadas",
    espessura: "1.2mm (16G)",
    diametro: "Haste 6mm / 8mm • Topo 12mm",
    indicacao: "Conch, Hélix, Flat",
    descricaoVisual: "Haste reta com base flat back e topo curvo composto por 5 zircônias redondas em graduação de tamanho.",
    especificacaoTecnica: {
      estruturaFisica: "Flat Back Labret com topo curvado anatômico (Ear Cluster)",
      tipoFecho: "Rosca Interna / Push-in",
      materialGrau: "Titânio ASTM F-136",
      pedraria: "5 Zircônias Cúbicas em Graduação"
    },
    imagemUrl: IMAGENS_MARINA.cluster5Zirconias,
    imagem: IMAGENS_MARINA.cluster5Zirconias,
    descricao: "Cluster anatômico curvo com 5 zircônias em garras de titânio biocompatível."
  },
  {
    id: 73,
    nome: "Cluster Marquise Curvado",
    material: "Titânio",
    preco: 50.00,
    categoria: "cravejadas",
    espessura: "1.2mm (16G)",
    diametro: "Haste 6mm / 8mm",
    indicacao: "Conch, Hélix, Flat",
    descricaoVisual: "Topo em curva anatômica com pedras marquise navete de zircônia cintilante.",
    especificacaoTecnica: {
      estruturaFisica: "Cluster curvado anatômico com pedras navete",
      tipoFecho: "Rosca Interna",
      materialGrau: "Titânio ASTM F-136",
      pedraria: "Pedras Marquise Facetadas"
    },
    imagemUrl: IMAGENS_MARINA.cluster5Zirconias,
    imagem: IMAGENS_MARINA.cluster5Zirconias,
    descricao: "Sequência fluida de pedras marquise que moldam perfeitamente a curva do conch ou hélix."
  },
  {
    id: 74,
    nome: "Cluster Cravejado Alta Gama",
    material: "Titânio",
    preco: 55.00,
    categoria: "cravejadas",
    espessura: "1.2mm (16G)",
    diametro: "Haste 6mm / 8mm",
    indicacao: "Conch, Flat",
    descricaoVisual: "Montagem em leque tridimensional com cristais navete e brilhantes facetados sobre base chata.",
    especificacaoTecnica: {
      estruturaFisica: "Cluster tridimensional de alta joalheria",
      tipoFecho: "Rosca Interna / Push-in",
      materialGrau: "Titânio ASTM F-136",
      pedraria: "Zircônias Suíças Multilapidação"
    },
    imagemUrl: IMAGENS_MARINA.clusterCartilagem,
    imagem: IMAGENS_MARINA.clusterCartilagem,
    descricao: "Montagem em leque com gemas de variadas lapidações produzindo brilho facetado tridimensional."
  },
  {
    id: 75,
    nome: "Piercing Íntimo Flores Cravejadas",
    material: "Titânio",
    preco: 65.00,
    categoria: "barras",
    espessura: "1.6mm (14G)",
    diametro: "12mm / 14mm",
    indicacao: "Íntimo (VCH, Christina, etc.)",
    descricaoVisual: "Haste curva em titânio cirúrgico polido com extremidade superior de topo floral plano e anatômico.",
    especificacaoTecnica: {
      estruturaFisica: "Haste anatômica com rosca interna suave e topos lisos",
      tipoFecho: "Rosca Interna de Baixo Perfil",
      materialGrau: "Titânio ASTM F-136 Estéril",
      pedraria: "Flor Cravejada com Virolas Lisas"
    },
    imagemUrl: IMAGENS_MARINA.labretFlorNobre,
    imagem: IMAGENS_MARINA.labretFlorNobre,
    descricao: "Jóia para perfurações íntimas com topos anatômicos em flor cravejada e titânio cirúrgico estéril."
  },
  {
    id: 76,
    nome: "Nostril Ponto Cravejado",
    material: "Aço Cirúrgico",
    preco: 30.00,
    categoria: "cravejadas",
    espessura: "0.8mm (20G)",
    diametro: "Haste L 6mm",
    indicacao: "Nostril (Nariz)",
    descricaoVisual: "Haste em L para aba nasal com micro zircônia solitária em virola lisa rente à pele.",
    especificacaoTecnica: {
      estruturaFisica: "Pino Nostril em formato L (Nose Stud)",
      tipoFecho: "Curvatura em L que não solta",
      materialGrau: "Aço Cirúrgico 316L",
      pedraria: "Zircônia Solitária 1.5mm em Virola Lisa"
    },
    imagemUrl: IMAGENS_MARINA.labretSolitario,
    imagem: IMAGENS_MARINA.labretSolitario,
    descricao: "Haste em formato L com zircônia redonda lapidada de 1.5mm cravada em virola lisa."
  },
  {
    id: 77,
    nome: "Coração Cravejado Daith",
    material: "Titânio",
    preco: 55.00,
    categoria: "cravejadas",
    espessura: "1.2mm (16G)",
    diametro: "10mm",
    indicacao: "Daith, Hélix",
    descricaoVisual: "Argola anatômica em formato de coração em titânio com contorno frontal pavimentado em microzircônias.",
    especificacaoTecnica: {
      estruturaFisica: "Argola em coração com pavimentação frontal",
      tipoFecho: "Clicker Articulado / Torção Suave",
      materialGrau: "Titânio ASTM F-136",
      pedraria: "Microzircônias em Cravação Contínua"
    },
    imagemUrl: IMAGENS_MARINA.umbigoCoracaoColorido,
    imagem: IMAGENS_MARINA.umbigoCoracaoColorido,
    descricao: "Argola em forma de coração com contorno inteiramente pavimentado em micro-zircônias brilhantes."
  },

  // =========================================================================
  // --- KITS DE BRINCOS COMPOSIÇÃO ---
  // =========================================================================
  {
    id: 78,
    nome: "Kit 3 Brincos Cristais Zircônia",
    material: "Prata 925",
    preco: 35.00,
    categoria: "cravejadas",
    espessura: "0.8mm (pino tradicional)",
    diametro: "3 furos (2mm, 3mm e 4mm)",
    indicacao: "Lóbulos múltiplos (1º, 2º e 3º furos)",
    descricaoVisual: "Composição de 3 brincos ponto de luz em Prata 925 exibidos em sequência de 3 furos do maior ao menor.",
    especificacaoTecnica: {
      estruturaFisica: "Trio de pinos com tarraxa borboleta confortável",
      tipoFecho: "Pino tradicional com tarraxa de segurança",
      materialGrau: "Prata de Lei 925 Legítima",
      pedraria: "3 Zircônias Facetadas (4mm, 3mm e 2mm)"
    },
    imagemUrl: IMAGENS_MARINA.kit3PontoArgola,
    imagem: IMAGENS_MARINA.kit3PontoArgola,
    descricao: "Trio harmônico de brincos ponto de luz em Prata de Lei 925 em tamanhos decrescentes para composição de furos."
  },
  {
    id: 79,
    nome: "Kit 3 Brincos Argolinha Gota",
    material: "Prata 925",
    preco: 35.00,
    categoria: "argolas",
    espessura: "1.0mm",
    diametro: "P, M e G para lóbulos",
    indicacao: "Lóbulos múltiplos",
    descricaoVisual: "Foto em orelha real com 3 argolinhas de diâmetros decrescentes em Prata 925 com pingentes em gota.",
    especificacaoTecnica: {
      estruturaFisica: "Trio de argolinhas articuladas com pingente gota",
      tipoFecho: "Fecho clicker suave",
      materialGrau: "Prata de Lei 925",
      pedraria: "Gotas de Cristal Zircônia"
    },
    imagemUrl: IMAGENS_MARINA.kit3PontoArgola,
    imagem: IMAGENS_MARINA.kit3PontoArgola,
    descricao: "Composição de três argolinhas em Prata 925 com pingentes em gota para um mix de orelha completo."
  },
  {
    id: 80,
    nome: "Kit 3 Brincos Borboleta Cravejada",
    material: "Prata 925",
    preco: 35.00,
    categoria: "cravejadas",
    espessura: "0.8mm",
    diametro: "Composição 1º, 2º e 3º furos",
    indicacao: "Lóbulos múltiplos",
    descricaoVisual: "Mix de orelha real com 3 brincos combinados: borboleta cravejada no 1º furo, argolinha com cristal no 2º furo e ponto de luz no 3º furo.",
    especificacaoTecnica: {
      estruturaFisica: "Mix curado com 3 peças harmônicas em Prata 925",
      tipoFecho: "Tarraxa e Clicker",
      materialGrau: "Prata de Lei 925 Hipoalergênica",
      pedraria: "Micro Pavé de Zircônias"
    },
    imagemUrl: IMAGENS_MARINA.kit3Borboleta,
    imagem: IMAGENS_MARINA.kit3Borboleta,
    descricao: "Kit com borboletas em zircônias e pontos de luz em Prata 925 para criar um ear cuff visualmente equilibrado."
  },
  {
    id: 81,
    nome: "Kit 3 Brincos Estrela & Ponto de Luz",
    material: "Banhado a Ouro",
    preco: 35.00,
    categoria: "cravejadas",
    espessura: "0.8mm",
    diametro: "Lóbulos múltiplos",
    indicacao: "Lóbulos múltiplos",
    descricaoVisual: "Composição de 3 brincos banhados a ouro 18k em orelha real: argola cravejada no 1º furo, estrela polida no 2º furo e ponto de luz no 3º furo.",
    especificacaoTecnica: {
      estruturaFisica: "Trio curado folheado a ouro com verniz antialérgico",
      tipoFecho: "Pinos e Clicker articulado",
      materialGrau: "Banho de Ouro 18k sobre Liga Hipoalergênica",
      pedraria: "Zircônias e Estrela Dourada"
    },
    imagemUrl: IMAGENS_MARINA.kit3DelicadoOuroPrata,
    imagem: IMAGENS_MARINA.kit3DelicadoOuroPrata,
    descricao: "Banho de ouro 18k premium sobre liga hipoalergênica com estrelas e zircônias reluzentes."
  },
  {
    id: 82,
    nome: "Kit 3 Brincos Borboleta Delicada",
    material: "Banhado a Ouro",
    preco: 35.00,
    categoria: "cravejadas",
    espessura: "0.8mm",
    diametro: "Lóbulos múltiplos",
    indicacao: "Lóbulos múltiplos",
    descricaoVisual: "Trio em banho de ouro 18k exibido em sequência harmônica de 3 furos no lóbulo: pingente borboleta no 1º furo, argolinha no 2º e ponto de luz no 3º.",
    especificacaoTecnica: {
      estruturaFisica: "Trio harmônico folheado a ouro 18k",
      tipoFecho: "Tarraxas e Fecho Click",
      materialGrau: "Banho de Ouro 18k Premium",
      pedraria: "Zircônias Cúbicas Facetadas"
    },
    imagemUrl: IMAGENS_MARINA.kit3Borboleta,
    imagem: IMAGENS_MARINA.kit3Borboleta,
    descricao: "Conjunto folheado a ouro em camadas com motivos florais e borboletas com verniz protetor antialérgico."
  }
];

/* ==========================================================================
   TAXONOMIA ANATÔMICA REAL DE BODY PIERCING & MAPEAMENTO OFICIAL NG PIERCING
   Classificação técnica por regiões e tipos reais de perfuração
   ========================================================================== */
const ANATOMIA_TAXONOMIA = {
  orelha: {
    id: "orelha",
    nome: "Orelha",
    icone: "👂",
    descricao: "Cartilagens, lóbulo e composições auriculares",
    sublocais: [
      { id: "flat", nome: "Flat" },
      { id: "anti-helix", nome: "Anti-hélix" },
      { id: "hidden-helix", nome: "Hidden Hélix" },
      { id: "helix", nome: "Hélix" },
      { id: "rook", nome: "Rook" },
      { id: "daith", nome: "Daith" },
      { id: "tragus", nome: "Tragus" },
      { id: "lobulo", nome: "Lóbulo" },
      { id: "conch", nome: "Conch" },
      { id: "midi-helix", nome: "Midi-hélix" },
      { id: "transversal", nome: "Transversal" },
      { id: "australianos", nome: "Australianos" },
      { id: "minions", nome: "Minions" }
    ]
  },
  nariz: {
    id: "nariz",
    nome: "Nariz",
    icone: "👃",
    descricao: "Aba nasal e septo",
    sublocais: [
      { id: "aba-nasal", nome: "Aba Nasal" },
      { id: "septo", nome: "Septo" }
    ]
  },
  boca: {
    id: "boca",
    nome: "Boca",
    icone: "👄",
    descricao: "Lábios, freio e língua",
    sublocais: [
      { id: "medusa", nome: "Medusa" },
      { id: "labret-lateral", nome: "Labret Lateral" },
      { id: "labret", nome: "Labret" },
      { id: "vertical-labret", nome: "Vertical Labret" },
      { id: "monroe", nome: "Monroe" },
      { id: "madonna", nome: "Madonna" },
      { id: "snake-bites", nome: "Snake Bites" },
      { id: "angel-fangs", nome: "Angel Fangs" },
      { id: "lingua", nome: "Língua" }
    ]
  },
  faciais: {
    id: "faciais",
    nome: "Faciais",
    icone: "✨",
    descricao: "Pontos dérmicos e faciais",
    sublocais: [
      { id: "microdermal", nome: "Microdermal" },
      { id: "surface", nome: "Surface" },
      { id: "bridge", nome: "Bridge" },
      { id: "sobrancelha", nome: "Sobrancelha" }
    ]
  }
};

// Mapeamento dos 82 produtos do acervo por anatomia
const MAPEAMENTO_ANATOMICO = {
  // 1. ORELHA
  "flat": [2, 5, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 36, 38, 40, 72, 73, 74],
  "anti-helix": [2, 3, 21, 23, 34, 41, 57, 58, 59],
  "hidden-helix": [10, 13, 28, 29, 31, 38, 39, 72, 73],
  "helix": [1, 2, 5, 6, 7, 8, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 34, 35, 36, 37, 38, 39, 40, 41, 42, 72, 73, 77, 79, 80],
  "rook": [3, 6, 7, 18, 57, 58, 59],
  "daith": [1, 3, 6, 7, 12, 16, 57, 59, 77],
  "tragus": [2, 6, 18, 21, 23, 25, 27, 32, 34, 35, 37, 40, 41, 42],
  "lobulo": [1, 2, 6, 10, 12, 13, 15, 16, 21, 22, 26, 30, 33, 35, 36, 37, 41, 66, 78, 79, 80, 81, 82],
  "conch": [1, 2, 5, 8, 10, 14, 15, 17, 21, 22, 24, 28, 29, 31, 33, 38, 39, 66, 72, 73, 74],
  "midi-helix": [1, 6, 8, 12, 15, 18, 21, 22, 34, 41],
  "transversal": [4, 67, 68, 69, 70, 71],
  "australianos": [5, 28, 29, 39, 72, 73, 74],
  "minions": [29, 35, 38, 39, 72, 73],

  // 2. NARIZ
  "aba-nasal": [6, 11, 18, 19, 20, 21, 23, 25, 42, 76],
  "septo": [1, 6, 7, 8, 12, 14, 77],

  // 3. BOCA
  "medusa": [2, 21, 22, 23, 24, 25, 27, 30, 32, 33, 36, 41, 42],
  "labret-lateral": [1, 2, 6, 12, 18, 21, 22, 23, 34, 35],
  "labret": [2, 21, 22, 23, 24, 25, 27, 35, 37, 41],
  "vertical-labret": [3, 57, 58, 59],
  "monroe": [2, 21, 22, 23, 25, 34, 42],
  "madonna": [2, 21, 22, 23, 25, 34, 42],
  "snake-bites": [1, 2, 6, 12, 18, 21, 22, 23],
  "angel-fangs": [3, 57, 58, 59],
  "lingua": [4, 60, 63, 66],

  // 4. FACIAIS
  "microdermal": [2, 21, 22, 23, 24, 26, 27, 30, 32, 33, 34, 41, 42, 75],
  "surface": [2, 21, 23, 27, 41, 63, 66, 75],
  "bridge": [4, 60, 63, 66],
  "sobrancelha": [3, 57, 58, 59]
};

// Vincula dinamicamente as regiões e sublocais a cada produto
catalogoJoias.forEach(joia => {
  joia.regioes = [];
  joia.sublocais = [];

  Object.keys(MAPEAMENTO_ANATOMICO).forEach(sublocalId => {
    if (MAPEAMENTO_ANATOMICO[sublocalId].includes(joia.id)) {
      joia.sublocais.push(sublocalId);

      // Associa a região correspondente
      Object.keys(ANATOMIA_TAXONOMIA).forEach(regiaoId => {
        const temSublocal = ANATOMIA_TAXONOMIA[regiaoId].sublocais.some(s => s.id === sublocalId);
        if (temSublocal && !joia.regioes.includes(regiaoId)) {
          joia.regioes.push(regiaoId);
        }
      });
    }
  });

  // Se for joia de umbigo ou avulsa sem tag direta, adiciona opções versáteis
  if (joia.categoria === 'umbigo') {
    if (!joia.regioes.includes('faciais')) joia.regioes.push('faciais');
    if (!joia.sublocais.includes('surface')) joia.sublocais.push('surface');
  }

  // Garantia de integridade para qualquer item
  if (joia.regioes.length === 0) {
    joia.regioes.push('orelha');
    joia.sublocais.push('helix');
  }
});

// Helper para formatação de moeda em Real Brasileiro
function formatarPreco(valor) {
  return valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}
