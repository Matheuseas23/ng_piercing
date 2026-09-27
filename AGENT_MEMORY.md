# AGENT MEMORY — DIRETRIZES DE TRABALHO, DESIGN & REGRAS DO PROJETO

> **IMPORTANTE — CONSULTA OBRIGATÓRIA A CADA NOVA INTERAÇÃO:**  
> Este documento consolida todo o histórico de conversas, padrões estéticos, preferências técnicas e regras de negócio estabelecidas pelo usuário.  
> Qualquer agente deve consultar e seguir rigorosamente este manual antes de propor, modificar ou executar qualquer código neste projeto.  
> 
> 📂 **Arquivo Histórico Completo de Conversas:** Todas as 23 sessões anteriores (incluindo a atual) com mensagens literais e transcrições estão salvas e arquivadas em [CONVERSATIONS_ARCHIVE.md](file:///c:/Users/NATAL/OneDrive%20-%20Institui%C3%A7%C3%A3o%20Adventista%20de%20Ensino/clientes%202026/NG%20piercing/CONVERSATIONS_ARCHIVE.md).

---

## 1. PERFIL DO USUÁRIO & DINÂMICA DE TRABALHO

### 1.1 Tom e Comunicação
- **Direto ao Ponto e Sem Enrolação:** O usuário prefere instruções claras, objetivas e respostas concisas ("faça rápido", "direto ao ponto"). Evite rodeios, introduções longas ou explicações redundantes.
- **Entendimento Prévio ("Me diga o que você entendeu"):** Em tarefas complexas ou solicitações estruturais, o usuário exige que o agente explique o que entendeu e apresente o plano antes de sair alterando código. Só execute após a validação dele.
- **Leitura Sem Execução Precoce:** Quando o usuário enviar contexto com instruções como *"apenas leia e memorize / não desenvolva nada agora"*, respeite 100%. Apenas absorva as informações e confirme a compreensão.
- **Desenvolvimento por Etapas ("Por partes"):** Divida implementações grandes em blocos lógicos menores (ex.: primeiro o HTML, depois o CSS, depois os scripts). Isso facilita a revisão, os testes e os commits.
- **Commits Claros e Prontos:** O usuário cuida dos commits ou pede sugestões objetivas de mensagens para colocar entre aspas (ex.: `"Remoção das marcas d'água das imagens"` ou `"feat: adiciona seletor de cor no card"`), sem poluição de blocos de código desnecessários no chat.
- **Uso Consciente do Terminal e Disco:**
  - Evite rodar comandos pesados ou lentos no terminal que atrasem o fluxo de desenvolvimento.
  - Jamais instale extensões ou dependências npm dispensáveis que ocupem espaço no disco do usuário.

---

## 2. FILOSOFIA DE DESIGN & IDENTIDADE VISUAL

### 2.1 Diretriz Central: "Menos Cara de IA, Mais Luxo Humano Real"
- Proibido qualquer aspecto que remeta a modelos 3D plastificados, rostos gerados por IA ou fotos de bijuterias comuns de revista.
- Estética inspirada em alta joalheria corporal (referências: Maria Tash, BVLA, alta perfumaria e joalheria fina).
- Imagens reais com peças dispostas sobre suportes físicos e tangíveis: linho texturizado, pedra travertino fosca, pratos de cerâmica artesanal ou cetim neutro.

### 2.2 Sistema de Temas & Paleta de Cores
O site possui sistema duplo de temas com alternância fluida (transição suave de `400ms`):

#### A. Modo Claro (Padrão de Inicialização)
- **Fundo Principal:** Alabastro / Branco acetinado (`#FAFAF9` e `#FFFFFF`).
- **Fundo Terciário/Apoio:** `#F4F1EA`.
- **Tipografia:** Preto Ônix profundo (`#18181B`) com texto secundário em `#52525B` e `#71717A`.
- **Bordas & Sombras:** Bordas ultrafinas e sombras leves (`rgba(0, 0, 0, 0.04)` a `0.08`).

#### B. Modo Noturno / Escuro (Atmosfera Noturna & Grafite Profundo)
- **Fundo Principal:** Preto Grafite Profundo (`#09090B` e `#121016`).
- **Cards e Gavetas:** `#141219` e `#0F0E13`.
- **Tipografia:** Branco acetinado (`#F4F4F5`) e cinza suave (`#A1A1AA`).
- **Bordas:** Fio de ouro sutil (`1px`) ou ametista translúcido (`rgba(168, 85, 247, 0.22)` a `0.35`).

#### C. Cores de Destaque & Acentos
- **Cor Secundária Oficial (Roxo Nobre / Imperial):**
  - Tom primário: `#7E22CE`
  - Variações: `#581C87` (escuro), `#9333EA` (luminoso), `#A855F7` (acento lilás) e tom berinjela nobre (`#2A1828` / `#2D152E`).
- **Dourado Nobre / Ouro Champanhe:**
  - Tons `#C5A059`, `#C5A880` e `#D4AF37`.
  - **PROIBIDO:** Tons amarelados vibrantes ("amarelo canário"). O dourado deve ser fosco, acetinado e nobre.

### 2.3 Efeitos de Interface & Micro-interações
- **Efeito Liquid Glass (Vidro Fluido / Glassmorphism):**
  - Aplicado no cabeçalho fixo (`header-glass`), menu lateral e cards especiais.
  - Uso de `backdrop-filter: blur(12px)` a `blur(16px)` com fundos semi-transparentes (`rgba(255, 255, 255, 0.85)` no claro / `rgba(18, 16, 22, 0.85)` no escuro) e bordas finas de 1px.
- **Tooltip Temporizado de Boas-Vindas ao Tema:**
  - Card discreto no topo apontando para o alternador de modo escuro/claro.
  - **Regra Temporal:** Some automaticamente após **exatamente 5 segundos** via `setTimeout` com fade-out suave, ou permite fechamento imediato no botão `×`.
- **Animações Sutis:**
  - Zoom leve na imagem do card ao passar o mouse (`transform: scale(1.04)`).
  - Fade-in e transições suaves entre abas e filtros sem piscar a tela.

---

## 3. TIPOGRAFIA & HIERARQUIA OFICIAL

A tipografia do projeto é refinada, fina e delicada.

```html
<!-- Importação Oficial no <head> -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@400;500;600&family=Montserrat:ital,wght@0,300;0,400;0,500;1,300;1,400&family=Pinyon+Script&display=swap" rel="stylesheet">
```

### 3.1 Regras Estritas de Fontes:
1. **Fonte Principal — 'Cinzel' (Serif):**
   - Usada no título principal (Hero H1), títulos de seções (H2, H3), nomes dos produtos nos cards e preços das joias (`R$ XX,00`).
   - Usada também nos itens do menu superior ("Início", "Catálogo", "Materiais", etc.).
   - **PROIBIÇÃO DE NEGRITO PESADO:** É terminantemente proibido usar negrito pesado (`font-bold`, `font-extrabold`, pesos `700/800/900`) nos títulos e preços. Usar apenas pesos leves e médios: **Regular (400)** ou **Medium (500)**, com espaçamento entre letras elegante (`letter-spacing: 0.03em` a `0.08em`) e `text-transform: uppercase` onde indicado.
2. **Fonte Secundária — 'Montserrat' (Sans-Serif):**
   - Usada para textos corridos, especificações técnicas, parágrafos, botões e labels.
   - Pesos: **300 (Light)** e **400 (Regular)**.
3. **Fonte de Acento — 'Pinyon Script' (Cursive):**
   - Utilizada com moderação para toques de assinatura editorial, pequenas expressões de boas-vindas ou detalhes manuscritos.

---

## 4. RESPONSIVIDADE & EXPERIÊNCIA MOBILE (MANDATÓRIO)

- **Foco Mobile First:** O público-alvo da loja acessa majoritariamente via smartphones. Toda funcionalidade deve ser pensada e testada prioritariamente na tela de celular.
- **Mapas Anatômicos Interativos:**
  - As ilustrações da orelha, rosto e nariz devem se ajustar harmonicamente no mobile e desktop sem cortar números ou legendas.
  - Os números e indicações não podem ficar amontoados, colados ou sobrepostos.
- **Navegação:**
  - Menu hambúrguer lateral (drawer fluído) acessível no mobile com fecho rápido e categorização clara por anatomia.
  - Barra de navegação e busca compactas, sem comprometer o campo de visão da vitrine.

---

## 5. CATÁLOGO, TRATAMENTO DE FOTOS & IMAGENS LIMPAS

### 5.1 Regras Inegociáveis para Imagens das Joias
1. **Proibição Absoluta de Marcas d'Água:**
   - Nenhuma foto pode conter marca d'água de lojas fornecedoras antigas (ex.: "Rock Body Piercing", "Marina Piercing" ou logos de terceiros).
2. **Proibição de Selos e Textos Promocionais:**
   - Proibido qualquer selo de garantia ("Garantia 100%", "Selo de Garantia"), logos promocionais ou selos de metal estampado na imagem ("G23 TITANIUM", "SOLID G23 TITANIUM").
   - Proibido medidas/tamanhos impressos com letras coloridas sobre a foto.
3. **Preservação de Tamanho e Proporção:**
   - Não aplicar zoom artificial ou cortes bruscos que tirem a joia de proporção ou reduzam o tamanho da imagem.
   - As imagens devem manter suas dimensões e resolução originais (ex.: `1024x1024`), formato quadrado (`aspect-square`), com `object-fit: cover` e centralizadas.
4. **Motor de Limpeza de Selos (`image-cleaner.js`):**
   - O projeto possui o arquivo `js/image-cleaner.js`, que utiliza Canvas HTML5 para cobrir com precisão as máscaras de selos sem distorcer o fundo ou a joia, gerando cache automático. Qualquer nova foto com selo periférico deve ter sua máscara mapeada nele.

### 5.2 Estrutura Técnica de Joias Reais
- Todas as peças em `js/products.js` devem refletir a anatomia autêntica de joias para body piercing profissional:
  - **Labrets:** Haste reta com base chata (*flat back*), rosca interna ou push-in.
  - **Argolas:** Clickers articulados, D-Rings e segmentos lisos ou cravejados.
  - **Bananinhas e Umbigo:** Haste curva anatômica com rosca interna.
  - **Barbells & Industriais:** Barras retas para transversal e mamilo.
  - **Kits de Brincos:** Composições reais de orelha (1º, 2º e 3º furos).

---

## 6. SACOLA DE COMPRAS, SELEÇÃO DE COR & CHECKOUT WHATSAPP

### 6.1 Seleção de Cor em Todas as Peças (Prata vs. Dourado)
- Toda peça adicionada à sacola deve permitir escolher a opção de cor:
  - **"Prata"** (Titânio Natural Polido / Aço Cirúrgico)
  - **"Dourado"** (Anodização Ouro Champanhe / PVD Dourado)
- Os seletores de cor existem:
  1. Diretamente nos **cards da vitrine** (botões rápidos com feedback visual).
  2. No modal de **Visualização Rápida (Quick View)**.
- O carrinho registra itens com chaves compostas (`id_cor`) para permitir ter a mesma joia em prata e em dourado no mesmo pedido.

### 6.2 Comportamento da Sacola (`js/cart.js`)
- **Gaveta Retrátil (Drawer):** Abre suavemente pela direita ao clicar no botão "+ Adicionar à Sacola" ou no ícone da sacola no header.
- **Persistência:** Salva automaticamente no `localStorage` (`ng_piercing_cart`).
- **Aviso de Peça Avulsa:** Destaca o valor da joia avulsa e oferece checkbox opcional:
  - `[ ] Desejo agendar colocação/perfuração no estúdio (Capão Redondo / SP)`.
- **Checkout via WhatsApp (Oficial: (11) 95410-7870):**
  - O botão *"Finalizar Pedido no WhatsApp"* formata uma mensagem completa com lista das peças, quantidades, cores escolhidas (Prata/Dourado), valor unitário, subtotal e intenção de agendamento de furo, abrindo direto o link `https://wa.me/5511954107870?text=...`.

---

## 7. REGRAS DE NEGÓCIO & DIRETRIZES DE TEXTO (COPYWRITING)

### 7.1 O Que é PROIBIDO no Site:
- ❌ **NÃO mencionar "Entrega para todo o Brasil":** A marca opera com foco em joias nobres e atendimento no estúdio em São Paulo.
- ❌ **NÃO usar a palavra "Garantia" nem selos de garantia:** Foi expressamente solicitado pela piercer retirar qualquer termo de garantia das páginas e imagens.
- ❌ **NÃO usar jargões clínicos excessivos:** Foram eliminadas expressões como "Biossegurança Hospitalar", "Biossomatização" e termos excessivamente médicos do topo e do Hero. A comunicação deve ser profissional, porém simples, leve e acessível.
- ❌ **NÃO omitir o aviso de perfuração:** Nos cards e modais, manter sempre explícito em destaque:
  > *"VALOR DA PEÇA AVULSA. PERFURAÇÃO NÃO INCLUSA (PROCEDIMENTO REALIZADO À PARTE NO ESTÚDIO EM SP COM HORA MARCADA)."*

### 7.2 Dados Oficiais do Estúdio
- **Marca:** NG Piercing Studio / NG Piercing Joias (@ngpiercingstudio).
- **Profissional:** Body Piercer com foco em joalheria nobre biocompatível (Titânio ASTM F-136 e Aço Cirúrgico 316L).
- **Localização:** São Paulo - SP (Capão Redondo, Zona Sul).
- **Atendimento:** Terça a Sábado, das 13h às 18h — exclusivamente com hora marcada.
- **Contato Oficial:** (11) 95410-7870 (wa.me/5511954107870).

---

## 8. STACK TECNOLÓGICA & PADRÕES DE CÓDIGO

- **Tecnologias Core:**
  - HTML5 Semântico com acessibilidade (`aria-label`, headings ordenados).
  - CSS3 puro com variáveis organizadas em `:root` e classes utilitárias auxiliares via Tailwind CDN.
  - JavaScript Vanilla puro (modular, orientado a classes/funções limpas, sem dependência de frameworks volumosos de build).
- **Otimização para Vercel:**
  - Arquivo `vercel.json` na raiz configurado com `cleanUrls: true`, headers de segurança (`X-Content-Type-Options`, `X-Frame-Options`, `Referrer-Policy`) e controle rigoroso de cache para CSS/JS (`stale-while-revalidate`) e HTML (`must-revalidate`).
  - `.vercelignore` e `.gitignore` mantendo arquivos temporários fora do deploy.
- **Performance de Imagens:**
  - `loading="lazy"` e `decoding="async"` nas imagens dos produtos.
  - Tratamento de imagens em proporção 1:1 com background neutro para evitar Content Layout Shift (CLS).

---

## 9. TREINAMENTO DO AGENTE: COMO LIDAR COMIGO (REGRAS DE CONVIVÊNCIA & ERROS A EVITAR)

Com base nas 23 conversas arquivadas em [CONVERSATIONS_ARCHIVE.md](file:///c:/Users/NATAL/OneDrive%20-%20Institui%C3%A7%C3%A3o%20Adventista%20de%20Ensino/clientes%202026/NG%20piercing/CONVERSATIONS_ARCHIVE.md), o agente deve internalizar estes aprendizados comportamentais:

1. **Nunca Presuma Nem Execute no Escuro:**
   - Se o usuário disse *"me diga o que você entendeu antes de começar"*, NÃO altere nenhum arquivo antes de explicar o que entendeu e receber o sinal verde.
2. **Nunca Aplique Soluções Preguiçosas em Imagens:**
   - *Erro anterior:* O agente aplicou zoom/corte na imagem para esconder o selo.
   - *Correção do usuário:* *"Não quero zoom nas imagens como você fez agora. Eu quero que você edite a imagem e mantenha seu tamanho original sem nenhuma marca escrita ou selo"*. Solução definitiva: máscara de Canvas no tamanho 1024x1024 preservando o arquivo.
3. **Não Remova Elementos Essenciais sem Autorização:**
   - *Erro anterior:* O agente removeu uma imagem da home e deixou um vazio.
   - *Correção do usuário:* *"Não é pra você remover a imagem e não deixar nada no lugar dela"*. Sempre substitua com o elemento correto ou confirme a alteração.
4. **Respeite a Identidade Visual à Risca:**
   - Se o usuário pedir fonte leve, NUNCA use negrito (`font-bold`).
   - Se pedir roxo ou dourado nobre, NUNCA use tons estridentes como amarelo canário ou roxo fluorescente.
5. **Não Inche o Ambiente nem Execute Comandos Desnecessários:**
   - O usuário preza pelo espaço em disco e pela velocidade. Nunca crie pastas pesadas ou dependências supérfluas.
6. **Entrega Objetiva:**
   - Responda de forma ágil, com confirmação clara do que foi feito e links clicáveis para conferência.

---

## 10. CHECKLIST RÁPIDO PARA NOVAS TAREFAS

Antes de finalizar qualquer modificação, revise:
1. [ ] A tipografia manteve a fonte `'Cinzel'` em peso fino/médio (sem `font-bold` pesado) nos títulos e preços?
2. [ ] A cor secundária respeita a paleta roxa nobre (`#7E22CE` / `#9333EA`) e o ouro champanhe acetinado (sem amarelo canário)?
3. [ ] Todas as novas imagens de joias estão livres de marcas d'água de lojas externas, sem selos "G23" e sem selos de garantia?
4. [ ] O layout permanece 100% responsivo e confortável para visualização em celulares?
5. [ ] Nenhum texto faz menção a "garantia" ou "entrega para todo o Brasil"?
6. [ ] As opções de cor "Prata" e "Dourado" continuam integradas à sacola e à mensagem gerada para o WhatsApp?
7. [ ] A resposta ao usuário foi direta, clara e sem explicações desnecessárias?
