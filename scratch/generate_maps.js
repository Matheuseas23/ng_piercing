const fs = require('fs');

// Common background SVG elements matching the client's reference
function getCommonBackground(subtitle) {
  return `
    <rect width="100%" height="100%" fill="url(#bgGrad)" />
    
    <!-- Geometric diamond facets (Top-Left corner) matching NG Piercing reference poster -->
    <g opacity="0.25">
      <rect x="-30" y="-30" width="90" height="90" rx="8" fill="#A855F7" transform="rotate(35 15 15)" />
      <rect x="25" y="-40" width="70" height="70" rx="8" fill="#7E22CE" transform="rotate(35 60 -5)" opacity="0.7" />
      <rect x="-20" y="45" width="60" height="60" rx="8" fill="#9333EA" transform="rotate(35 10 75)" opacity="0.5" />
      <rect x="50" y="25" width="45" height="45" rx="6" fill="#C084FC" transform="rotate(35 72 47)" opacity="0.4" />
    </g>

    <!-- Header Banner -->
    <g transform="translate(190, 42)" text-anchor="middle">
      <text fill="#FFFFFF" font-family="'Cinzel', Georgia, serif" font-size="14" font-weight="600" letter-spacing="3">LOCAIS PARA PERFURAÇÃO</text>
      <text y="18" fill="#D4AF37" font-family="'Cinzel', Georgia, serif" font-size="12" font-weight="500" letter-spacing="4">(${subtitle})</text>
    </g>

    <!-- Watermark NG PIERCING STUDIO (Bottom) -->
    <g transform="translate(190, 420)" text-anchor="middle" opacity="0.18">
      <text fill="none" stroke="#A855F7" stroke-width="1" font-family="'Cinzel', Georgia, serif" font-size="20" font-weight="600" letter-spacing="4">NG PIERCING STUDIO</text>
      <text y="15" fill="#A855F7" font-family="'Cinzel', Georgia, serif" font-size="18" font-weight="600" letter-spacing="4">NG PIERCING STUDIO</text>
    </g>
  `;
}

// 1. EAR DIAGRAM SVG
function generateEarSVG() {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 380 440" width="100%" height="100%">
  <defs>
    <radialGradient id="bgGrad" cx="50%" cy="40%" r="65%">
      <stop offset="0%" stop-color="#2d124d" />
      <stop offset="60%" stop-color="#140f1f" />
      <stop offset="100%" stop-color="#09070e" />
    </radialGradient>
    <radialGradient id="earSkin" cx="40%" cy="35%" r="70%">
      <stop offset="0%" stop-color="#F2C5A5" />
      <stop offset="50%" stop-color="#E2A682" />
      <stop offset="85%" stop-color="#BF7854" />
      <stop offset="100%" stop-color="#8F492E" />
    </radialGradient>
    <radialGradient id="earInner" cx="45%" cy="45%" r="60%">
      <stop offset="0%" stop-color="#D8926E" />
      <stop offset="65%" stop-color="#9C5234" />
      <stop offset="100%" stop-color="#5C2513" />
    </radialGradient>
    <filter id="pinShadow" x="-30%" y="-30%" width="160%" height="160%">
      <feDropShadow dx="0" dy="2" stdDeviation="2" flood-color="#000" flood-opacity="0.6"/>
    </filter>
    <marker id="arrowGold" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#D4AF37" />
    </marker>
  </defs>

  ${getCommonBackground('ORELHA')}

  <!-- Silhueta Anatômica da Orelha (Sem joias) -->
  <g id="earAnatomy" transform="translate(42, 28) scale(0.72)">
    <!-- Orelha Exterior -->
    <path d="M 230 110 
             C 170 105, 120 150, 115 210
             C 110 260, 130 295, 130 330
             C 130 370, 160 440, 205 440
             C 245 440, 275 390, 280 340
             C 285 280, 305 180, 270 130
             C 260 115, 245 110, 230 110 Z" 
          fill="url(#earSkin)" stroke="#74381C" stroke-width="2" />

    <!-- Fossa Triangular / Scapha / Hélix Dobra Superior -->
    <path d="M 230 130
             C 190 130, 145 165, 145 220
             C 145 260, 160 280, 165 310
             C 170 340, 185 380, 215 390
             C 240 395, 255 350, 255 310
             C 255 250, 270 180, 250 145
             C 245 135, 238 130, 230 130 Z"
          fill="#DF9E7B" opacity="0.65" />

    <!-- Concha Auricular Profunda & Meato Acústico -->
    <path d="M 195 230
             C 175 240, 165 265, 165 290
             C 165 320, 180 345, 210 345
             C 235 345, 245 320, 245 285
             C 245 250, 225 225, 195 230 Z"
          fill="url(#earInner)" />

    <!-- Tragus (Aba anterior) -->
    <path d="M 140 285
             C 130 295, 130 315, 140 325
             C 152 335, 165 320, 165 305
             C 165 290, 150 280, 140 285 Z"
          fill="url(#earSkin)" stroke="#8F492E" stroke-width="1.5" />

    <!-- Anti-tragus & Lóbulo vinco -->
    <path d="M 175 345 C 185 365, 205 370, 225 360" fill="none" stroke="#7A391E" stroke-width="2" stroke-linecap="round" />
    
    <!-- Crux Hélix & Raiz -->
    <path d="M 170 235 C 190 230, 220 235, 230 250" fill="none" stroke="#682E15" stroke-width="2.5" stroke-linecap="round" />

    <!-- Daith (Curva sobre o canal) -->
    <path d="M 180 235 C 175 255, 185 275, 200 270" fill="none" stroke="#5C2513" stroke-width="2" stroke-linecap="round" />

    <!-- Anti-hélix bifurcação superior (Rook / Crura) -->
    <path d="M 185 185 C 205 185, 220 205, 215 230" fill="none" stroke="#854425" stroke-width="2" stroke-linecap="round" />
  </g>

  <!-- PONTOS NUMERADOS COM SETAS E NOMES (EXATAMENTE COMO O POSTER DO ESTÚDIO) -->
  
  <!-- 5 - FLAT -->
  <g class="map-pin-item" onclick="filtrarPontoAnatomico('orelha', 'flat')">
    <path d="M 215 130 L 255 115" stroke="#D4AF37" stroke-width="1.2" marker-start="url(#arrowGold)" />
    <circle cx="205" cy="135" r="10" fill="#7E22CE" stroke="#D4AF37" stroke-width="1.2" filter="url(#pinShadow)"/>
    <text x="205" y="139" fill="#FFF" font-family="'Montserrat', sans-serif" font-size="10" font-weight="700" text-anchor="middle">5</text>
    <text x="262" y="119" fill="#FFF" font-family="'Cinzel', serif" font-size="9.5" letter-spacing="1">FLAT</text>
  </g>

  <!-- 9 - ROOK -->
  <g class="map-pin-item" onclick="filtrarPontoAnatomico('orelha', 'rook')">
    <path d="M 180 168 L 130 160" stroke="#D4AF37" stroke-width="1.2" marker-start="url(#arrowGold)" />
    <circle cx="180" cy="168" r="10" fill="#7E22CE" stroke="#D4AF37" stroke-width="1.2" filter="url(#pinShadow)"/>
    <text x="180" y="172" fill="#FFF" font-family="'Montserrat', sans-serif" font-size="10" font-weight="700" text-anchor="middle">9</text>
    <text x="122" y="163" fill="#FFF" font-family="'Cinzel', serif" font-size="9.5" letter-spacing="1" text-anchor="end">ROOK</text>
  </g>

  <!-- 6 - ANTI-HÉLIX / FORWARD HELIX -->
  <g class="map-pin-item" onclick="filtrarPontoAnatomico('orelha', 'forward-helix')">
    <path d="M 152 190 L 105 190" stroke="#D4AF37" stroke-width="1.2" marker-start="url(#arrowGold)" />
    <circle cx="152" cy="190" r="10" fill="#7E22CE" stroke="#D4AF37" stroke-width="1.2" filter="url(#pinShadow)"/>
    <text x="152" y="194" fill="#FFF" font-family="'Montserrat', sans-serif" font-size="10" font-weight="700" text-anchor="middle">6</text>
    <text x="98" y="193" fill="#FFF" font-family="'Cinzel', serif" font-size="9.5" letter-spacing="1" text-anchor="end">ANTI-HÉLIX</text>
  </g>

  <!-- 11 - HÉLIX -->
  <g class="map-pin-item" onclick="filtrarPontoAnatomico('orelha', 'helix')">
    <path d="M 235 160 L 275 160" stroke="#D4AF37" stroke-width="1.2" marker-start="url(#arrowGold)" />
    <circle cx="235" cy="160" r="10" fill="#7E22CE" stroke="#D4AF37" stroke-width="1.2" filter="url(#pinShadow)"/>
    <text x="235" y="164" fill="#FFF" font-family="'Montserrat', sans-serif" font-size="9" font-weight="700" text-anchor="middle">11</text>
    <text x="282" y="163" fill="#FFF" font-family="'Cinzel', serif" font-size="9.5" letter-spacing="1">HÉLIX</text>
  </g>

  <!-- 8 - DAITH -->
  <g class="map-pin-item" onclick="filtrarPontoAnatomico('orelha', 'daith')">
    <path d="M 175 225 L 125 225" stroke="#D4AF37" stroke-width="1.2" marker-start="url(#arrowGold)" />
    <circle cx="175" cy="225" r="10" fill="#7E22CE" stroke="#D4AF37" stroke-width="1.2" filter="url(#pinShadow)"/>
    <text x="175" y="229" fill="#FFF" font-family="'Montserrat', sans-serif" font-size="10" font-weight="700" text-anchor="middle">8</text>
    <text x="118" y="228" fill="#FFF" font-family="'Cinzel', serif" font-size="9.5" letter-spacing="1" text-anchor="end">DAITH</text>
  </g>

  <!-- 7 - CONCH -->
  <g class="map-pin-item" onclick="filtrarPontoAnatomico('orelha', 'conch')">
    <path d="M 205 235 L 260 215" stroke="#D4AF37" stroke-width="1.2" marker-start="url(#arrowGold)" />
    <circle cx="205" cy="235" r="10" fill="#7E22CE" stroke="#D4AF37" stroke-width="1.2" filter="url(#pinShadow)"/>
    <text x="205" y="239" fill="#FFF" font-family="'Montserrat', sans-serif" font-size="10" font-weight="700" text-anchor="middle">7</text>
    <text x="268" y="218" fill="#FFF" font-family="'Cinzel', serif" font-size="9.5" letter-spacing="1">CONCH</text>
  </g>

  <!-- 10 - MID HÉLIX -->
  <g class="map-pin-item" onclick="filtrarPontoAnatomico('orelha', 'midi-helix')">
    <path d="M 235 245 L 275 255" stroke="#D4AF37" stroke-width="1.2" marker-start="url(#arrowGold)" />
    <circle cx="235" cy="245" r="10" fill="#7E22CE" stroke="#D4AF37" stroke-width="1.2" filter="url(#pinShadow)"/>
    <text x="235" y="249" fill="#FFF" font-family="'Montserrat', sans-serif" font-size="9" font-weight="700" text-anchor="middle">10</text>
    <text x="282" y="258" fill="#FFF" font-family="'Cinzel', serif" font-size="9.5" letter-spacing="1">MID HÉLIX</text>
  </g>

  <!-- 4 - TRAGUS -->
  <g class="map-pin-item" onclick="filtrarPontoAnatomico('orelha', 'tragus')">
    <path d="M 145 250 L 95 250" stroke="#D4AF37" stroke-width="1.2" marker-start="url(#arrowGold)" />
    <circle cx="145" cy="250" r="10" fill="#7E22CE" stroke="#D4AF37" stroke-width="1.2" filter="url(#pinShadow)"/>
    <text x="145" y="254" fill="#FFF" font-family="'Montserrat', sans-serif" font-size="10" font-weight="700" text-anchor="middle">4</text>
    <text x="88" y="253" fill="#FFF" font-family="'Cinzel', serif" font-size="9.5" letter-spacing="1" text-anchor="end">TRAGUS</text>
  </g>

  <!-- 3 - TERCEIRO FURO LÓBULO -->
  <g class="map-pin-item" onclick="filtrarPontoAnatomico('orelha', 'lobulo')">
    <path d="M 205 285 L 255 295" stroke="#D4AF37" stroke-width="1.2" marker-start="url(#arrowGold)" />
    <circle cx="205" cy="285" r="10" fill="#7E22CE" stroke="#D4AF37" stroke-width="1.2" filter="url(#pinShadow)"/>
    <text x="205" y="289" fill="#FFF" font-family="'Montserrat', sans-serif" font-size="10" font-weight="700" text-anchor="middle">3</text>
    <text x="262" y="298" fill="#FFF" font-family="'Cinzel', serif" font-size="9" letter-spacing="1">3º FURO LÓBULO</text>
  </g>

  <!-- 2 - SEGUNDO FURO LÓBULO -->
  <g class="map-pin-item" onclick="filtrarPontoAnatomico('orelha', 'lobulo')">
    <path d="M 185 305 L 245 325" stroke="#D4AF37" stroke-width="1.2" marker-start="url(#arrowGold)" />
    <circle cx="185" cy="305" r="10" fill="#7E22CE" stroke="#D4AF37" stroke-width="1.2" filter="url(#pinShadow)"/>
    <text x="185" y="309" fill="#FFF" font-family="'Montserrat', sans-serif" font-size="10" font-weight="700" text-anchor="middle">2</text>
    <text x="252" y="328" fill="#FFF" font-family="'Cinzel', serif" font-size="9" letter-spacing="1">2º FURO LÓBULO</text>
  </g>

  <!-- 1 - PRIMEIRO FURO LÓBULO -->
  <g class="map-pin-item" onclick="filtrarPontoAnatomico('orelha', 'lobulo')">
    <path d="M 165 320 L 115 320" stroke="#D4AF37" stroke-width="1.2" marker-start="url(#arrowGold)" />
    <circle cx="165" cy="320" r="10" fill="#7E22CE" stroke="#D4AF37" stroke-width="1.2" filter="url(#pinShadow)"/>
    <text x="165" y="324" fill="#FFF" font-family="'Montserrat', sans-serif" font-size="10" font-weight="700" text-anchor="middle">1</text>
    <text x="108" y="323" fill="#FFF" font-family="'Cinzel', serif" font-size="9" letter-spacing="1" text-anchor="end">1º FURO LÓBULO</text>
  </g>

</svg>`;
}

// 2. MOUTH / LIPS DIAGRAM SVG
function generateMouthSVG() {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 380 440" width="100%" height="100%">
  <defs>
    <radialGradient id="bgGrad" cx="50%" cy="40%" r="65%">
      <stop offset="0%" stop-color="#2d124d" />
      <stop offset="60%" stop-color="#140f1f" />
      <stop offset="100%" stop-color="#09070e" />
    </radialGradient>
    <linearGradient id="lipUpper" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#E5989B" />
      <stop offset="100%" stop-color="#B56576" />
    </linearGradient>
    <linearGradient id="lipLower" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#E5989B" />
      <stop offset="60%" stop-color="#D47385" />
      <stop offset="100%" stop-color="#A54F62" />
    </linearGradient>
    <radialGradient id="faceSkin" cx="50%" cy="40%" r="60%">
      <stop offset="0%" stop-color="#EAC0A2" />
      <stop offset="80%" stop-color="#D29E7D" />
      <stop offset="100%" stop-color="#B27855" />
    </radialGradient>
    <filter id="pinShadow" x="-30%" y="-30%" width="160%" height="160%">
      <feDropShadow dx="0" dy="2" stdDeviation="2" flood-color="#000" flood-opacity="0.6"/>
    </filter>
    <marker id="arrowGold" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#D4AF37" />
    </marker>
  </defs>

  ${getCommonBackground('BOCA')}

  <!-- Silhueta Facial & Lábios Realistas (Sem joias) -->
  <g id="mouthAnatomy" transform="translate(190, 220)">
    <!-- Base de Pele Suave (Rosto ao redor dos lábios) -->
    <ellipse cx="0" cy="0" rx="140" ry="110" fill="url(#faceSkin)" opacity="0.35" filter="blur(15px)" />
    
    <!-- Sulco Nasolabial / Filtro Philtrum -->
    <path d="M -18 -85 C -15 -60, -10 -40, -8 -22" fill="none" stroke="#9C5D3E" stroke-width="2" opacity="0.4" />
    <path d="M 18 -85 C 15 -60, 10 -40, 8 -22" fill="none" stroke="#9C5D3E" stroke-width="2" opacity="0.4" />

    <!-- Lábio Superior (Arco do Cupido) -->
    <path d="M -95 0
             C -60 -18, -30 -26, 0 -14
             C 30 -26, 60 -18, 95 0
             C 65 5, 30 14, 0 10
             C -30 14, -65 5, -95 0 Z"
          fill="url(#lipUpper)" stroke="#873549" stroke-width="1.5" />

    <!-- Abertura da Boca / Sombra Interna -->
    <path d="M -95 0 C -45 10, 45 10, 95 0 C 45 4, -45 4, -95 0 Z" fill="#4A1823" />

    <!-- Lábio Inferior com Volume Natural -->
    <path d="M -95 0
             C -65 6, -30 12, 0 10
             C 30 12, 65 6, 95 0
             C 70 42, 35 55, 0 55
             C -35 55, -70 42, -95 0 Z"
          fill="url(#lipLower)" stroke="#873549" stroke-width="1.5" />

    <!-- Brilho Labial Natural -->
    <path d="M -25 24 C -10 32, 10 32, 25 24 C 10 27, -10 27, -25 24 Z" fill="#FFFFFF" opacity="0.4" filter="blur(1px)" />

    <!-- Sulco do Queixo -->
    <path d="M -30 75 C -15 82, 15 82, 30 75" fill="none" stroke="#9C5D3E" stroke-width="2" opacity="0.3" stroke-linecap="round" />
  </g>

  <!-- PONTOS NUMERADOS COM SETAS (EXATAMENTE COMO NO POSTER DE BOCA DA CLIENTE) -->
  
  <!-- 6 - MEDUSA -->
  <g class="map-pin-item" onclick="filtrarPontoAnatomico('boca', 'medusa')">
    <path d="M 190 178 L 190 135" stroke="#D4AF37" stroke-width="1.2" marker-start="url(#arrowGold)" />
    <circle cx="190" cy="182" r="10" fill="#7E22CE" stroke="#D4AF37" stroke-width="1.2" filter="url(#pinShadow)"/>
    <text x="190" y="186" fill="#FFF" font-family="'Montserrat', sans-serif" font-size="10" font-weight="700" text-anchor="middle">6</text>
    <text x="190" y="125" fill="#FFF" font-family="'Cinzel', serif" font-size="10" letter-spacing="1.5" text-anchor="middle">MEDUSA</text>
  </g>

  <!-- 4 - MADONNA (Lado Direito superior da boca) -->
  <g class="map-pin-item" onclick="filtrarPontoAnatomico('boca', 'madonna')">
    <path d="M 145 190 L 95 160" stroke="#D4AF37" stroke-width="1.2" marker-start="url(#arrowGold)" />
    <circle cx="145" cy="190" r="10" fill="#7E22CE" stroke="#D4AF37" stroke-width="1.2" filter="url(#pinShadow)"/>
    <text x="145" y="194" fill="#FFF" font-family="'Montserrat', sans-serif" font-size="10" font-weight="700" text-anchor="middle">4</text>
    <text x="88" y="158" fill="#FFF" font-family="'Cinzel', serif" font-size="9.5" letter-spacing="1" text-anchor="end">MADONNA</text>
  </g>

  <!-- 5 - MONROE (Lado Esquerdo superior da boca) -->
  <g class="map-pin-item" onclick="filtrarPontoAnatomico('boca', 'monroe')">
    <path d="M 235 190 L 285 160" stroke="#D4AF37" stroke-width="1.2" marker-start="url(#arrowGold)" />
    <circle cx="235" cy="190" r="10" fill="#7E22CE" stroke="#D4AF37" stroke-width="1.2" filter="url(#pinShadow)"/>
    <text x="235" y="194" fill="#FFF" font-family="'Montserrat', sans-serif" font-size="10" font-weight="700" text-anchor="middle">5</text>
    <text x="292" y="158" fill="#FFF" font-family="'Cinzel', serif" font-size="9.5" letter-spacing="1">MONROE</text>
  </g>

  <!-- 3 - ASHLEY (Centro do lábio inferior vermelho) -->
  <g class="map-pin-item" onclick="filtrarPontoAnatomico('boca', 'ashley')">
    <path d="M 190 240 L 260 230" stroke="#D4AF37" stroke-width="1.2" marker-start="url(#arrowGold)" />
    <circle cx="190" cy="240" r="10" fill="#7E22CE" stroke="#D4AF37" stroke-width="1.2" filter="url(#pinShadow)"/>
    <text x="190" y="244" fill="#FFF" font-family="'Montserrat', sans-serif" font-size="10" font-weight="700" text-anchor="middle">3</text>
    <text x="268" y="233" fill="#FFF" font-family="'Cinzel', serif" font-size="9.5" letter-spacing="1">ASHLEY</text>
  </g>

  <!-- 1 - LABRET LATERAL (Direito) -->
  <g class="map-pin-item" onclick="filtrarPontoAnatomico('boca', 'snake-bites')">
    <path d="M 135 245 L 85 245" stroke="#D4AF37" stroke-width="1.2" marker-start="url(#arrowGold)" />
    <circle cx="135" cy="245" r="10" fill="#7E22CE" stroke="#D4AF37" stroke-width="1.2" filter="url(#pinShadow)"/>
    <text x="135" y="249" fill="#FFF" font-family="'Montserrat', sans-serif" font-size="10" font-weight="700" text-anchor="middle">1</text>
    <text x="78" y="248" fill="#FFF" font-family="'Cinzel', serif" font-size="9" letter-spacing="1" text-anchor="end">LABRET LATERAL</text>
  </g>

  <!-- 2 - LABRET LATERAL (Esquerdo) -->
  <g class="map-pin-item" onclick="filtrarPontoAnatomico('boca', 'snake-bites')">
    <path d="M 245 245 L 295 245" stroke="#D4AF37" stroke-width="1.2" marker-start="url(#arrowGold)" />
    <circle cx="245" cy="245" r="10" fill="#7E22CE" stroke="#D4AF37" stroke-width="1.2" filter="url(#pinShadow)"/>
    <text x="245" y="249" fill="#FFF" font-family="'Montserrat', sans-serif" font-size="10" font-weight="700" text-anchor="middle">2</text>
    <text x="302" y="248" fill="#FFF" font-family="'Cinzel', serif" font-size="9" letter-spacing="1">LABRET LATERAL</text>
  </g>

  <!-- CENTRAL LABRET / VERTICAL LABRET (Ponto 7 inferior central) -->
  <g class="map-pin-item" onclick="filtrarPontoAnatomico('boca', 'central-labret')">
    <path d="M 190 295 L 190 340" stroke="#D4AF37" stroke-width="1.2" marker-start="url(#arrowGold)" />
    <circle cx="190" cy="295" r="10" fill="#7E22CE" stroke="#D4AF37" stroke-width="1.2" filter="url(#pinShadow)"/>
    <text x="190" y="299" fill="#FFF" font-family="'Montserrat', sans-serif" font-size="10" font-weight="700" text-anchor="middle">7</text>
    <text x="190" y="355" fill="#FFF" font-family="'Cinzel', serif" font-size="9.5" letter-spacing="1" text-anchor="middle">CENTRAL LABRET</text>
  </g>

  <!-- DAHLIA BITES (Cantos dos lábios) -->
  <g class="map-pin-item" onclick="filtrarPontoAnatomico('boca', 'dahlia-bites')">
    <path d="M 100 220 L 60 210" stroke="#D4AF37" stroke-width="1.2" marker-start="url(#arrowGold)" />
    <circle cx="100" cy="220" r="10" fill="#7E22CE" stroke="#D4AF37" stroke-width="1.2" filter="url(#pinShadow)"/>
    <text x="100" y="224" fill="#FFF" font-family="'Montserrat', sans-serif" font-size="10" font-weight="700" text-anchor="middle">8</text>
    <text x="52" y="208" fill="#FFF" font-family="'Cinzel', serif" font-size="8.5" letter-spacing="1" text-anchor="end">DAHLIA BITES</text>
  </g>

</svg>`;
}

// 3. FACIAL / NOSE DIAGRAM SVG
function generateFaceSVG() {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 380 440" width="100%" height="100%">
  <defs>
    <radialGradient id="bgGrad" cx="50%" cy="40%" r="65%">
      <stop offset="0%" stop-color="#2d124d" />
      <stop offset="60%" stop-color="#140f1f" />
      <stop offset="100%" stop-color="#09070e" />
    </radialGradient>
    <radialGradient id="faceSkin" cx="45%" cy="40%" r="60%">
      <stop offset="0%" stop-color="#EAC0A2" />
      <stop offset="60%" stop-color="#D5A080" />
      <stop offset="90%" stop-color="#B77B57" />
      <stop offset="100%" stop-color="#8A4E32" />
    </radialGradient>
    <filter id="pinShadow" x="-30%" y="-30%" width="160%" height="160%">
      <feDropShadow dx="0" dy="2" stdDeviation="2" flood-color="#000" flood-opacity="0.6"/>
    </filter>
    <marker id="arrowGold" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#D4AF37" />
    </marker>
  </defs>

  ${getCommonBackground('FACIAL & NASAL')}

  <!-- Silhueta Facial & Nariz (Sem joias) -->
  <g id="faceAnatomy" transform="translate(190, 220)">
    <!-- Base de Rosto Feminino Suave -->
    <ellipse cx="0" cy="-10" rx="100" ry="140" fill="url(#faceSkin)" opacity="0.3" filter="blur(16px)" />

    <!-- Sobrancelha Esquerda & Direita -->
    <path d="M -65 -85 C -45 -100, -20 -95, -5 -80" fill="none" stroke="#5E2F1B" stroke-width="3.5" stroke-linecap="round" />
    <path d="M 5 -80 C 20 -95, 45 -100, 65 -85" fill="none" stroke="#5E2F1B" stroke-width="3.5" stroke-linecap="round" />

    <!-- Olhos Esboçados Delicados -->
    <path d="M -60 -65 C -45 -75, -25 -75, -15 -65 C -25 -58, -45 -58, -60 -65 Z" fill="#3D1A10" opacity="0.6" />
    <path d="M 15 -65 C 25 -75, 45 -75, 60 -65 C 45 -58, 25 -58, 15 -65 Z" fill="#3D1A10" opacity="0.6" />

    <!-- Ponte Nasal & Dorso do Nariz -->
    <path d="M 0 -70 L -4 -10 C -5 10, -20 25, -22 30 C -15 38, 15 38, 22 30 C 20 25, 5 10, 4 -10 L 0 -70" 
          fill="none" stroke="#87472A" stroke-width="1.8" opacity="0.5" stroke-linejoin="round" />

    <!-- Abas Nasais & Ponta -->
    <path d="M -22 30 C -30 25, -35 15, -28 5 C -22 5, -18 15, -12 25" fill="none" stroke="#7A391E" stroke-width="2" stroke-linecap="round" />
    <path d="M 22 30 C 30 25, 35 15, 28 5 C 22 5, 18 15, 12 25" fill="none" stroke="#7A391E" stroke-width="2" stroke-linecap="round" />

    <!-- Narinas & Columela Septal -->
    <ellipse cx="-10" cy="30" rx="4.5" ry="3" fill="#3A150A" transform="rotate(-15 -10 30)" />
    <ellipse cx="10" cy="30" rx="4.5" ry="3" fill="#3A150A" transform="rotate(15 10 30)" />
    <path d="M -5 32 C 0 35, 0 35, 5 32" fill="none" stroke="#7A391E" stroke-width="2" stroke-linecap="round" />

    <!-- Lábios sutis para proporção facial -->
    <path d="M -30 65 C -15 60, 15 60, 30 65 C 15 78, -15 78, -30 65 Z" fill="#C57585" opacity="0.5" />
  </g>

  <!-- PONTOS NUMERADOS COM SETAS -->

  <!-- 3 - SOBRANCELHA -->
  <g class="map-pin-item" onclick="filtrarPontoAnatomico('faciais', 'sobrancelha')">
    <path d="M 245 130 L 290 120" stroke="#D4AF37" stroke-width="1.2" marker-start="url(#arrowGold)" />
    <circle cx="245" cy="130" r="10" fill="#7E22CE" stroke="#D4AF37" stroke-width="1.2" filter="url(#pinShadow)"/>
    <text x="245" y="134" fill="#FFF" font-family="'Montserrat', sans-serif" font-size="10" font-weight="700" text-anchor="middle">3</text>
    <text x="298" y="123" fill="#FFF" font-family="'Cinzel', serif" font-size="9.5" letter-spacing="1">SOBRANCELHA</text>
  </g>

  <!-- 4 - BRIDGE (Ponte entre os olhos) -->
  <g class="map-pin-item" onclick="filtrarPontoAnatomico('faciais', 'bridge')">
    <path d="M 190 155 L 120 145" stroke="#D4AF37" stroke-width="1.2" marker-start="url(#arrowGold)" />
    <circle cx="190" cy="155" r="10" fill="#7E22CE" stroke="#D4AF37" stroke-width="1.2" filter="url(#pinShadow)"/>
    <text x="190" y="159" fill="#FFF" font-family="'Montserrat', sans-serif" font-size="10" font-weight="700" text-anchor="middle">4</text>
    <text x="112" y="148" fill="#FFF" font-family="'Cinzel', serif" font-size="9.5" letter-spacing="1" text-anchor="end">BRIDGE</text>
  </g>

  <!-- 1 - ABA NASAL (NOSTRIL) -->
  <g class="map-pin-item" onclick="filtrarPontoAnatomico('nariz', 'aba-nasal')">
    <path d="M 218 245 L 275 235" stroke="#D4AF37" stroke-width="1.2" marker-start="url(#arrowGold)" />
    <circle cx="218" cy="245" r="10" fill="#7E22CE" stroke="#D4AF37" stroke-width="1.2" filter="url(#pinShadow)"/>
    <text x="218" y="249" fill="#FFF" font-family="'Montserrat', sans-serif" font-size="10" font-weight="700" text-anchor="middle">1</text>
    <text x="282" y="238" fill="#FFF" font-family="'Cinzel', serif" font-size="9.5" letter-spacing="1">ABA NASAL</text>
  </g>

  <!-- 2 - SEPTO -->
  <g class="map-pin-item" onclick="filtrarPontoAnatomico('nariz', 'septo')">
    <path d="M 190 262 L 125 270" stroke="#D4AF37" stroke-width="1.2" marker-start="url(#arrowGold)" />
    <circle cx="190" cy="262" r="10" fill="#7E22CE" stroke="#D4AF37" stroke-width="1.2" filter="url(#pinShadow)"/>
    <text x="190" y="266" fill="#FFF" font-family="'Montserrat', sans-serif" font-size="10" font-weight="700" text-anchor="middle">2</text>
    <text x="118" y="273" fill="#FFF" font-family="'Cinzel', serif" font-size="9.5" letter-spacing="1" text-anchor="end">SEPTO</text>
  </g>

  <!-- 5 - MICRODERMAL -->
  <g class="map-pin-item" onclick="filtrarPontoAnatomico('faciais', 'microdermal')">
    <path d="M 275 200 L 320 200" stroke="#D4AF37" stroke-width="1.2" marker-start="url(#arrowGold)" />
    <circle cx="275" cy="200" r="10" fill="#7E22CE" stroke="#D4AF37" stroke-width="1.2" filter="url(#pinShadow)"/>
    <text x="275" y="204" fill="#FFF" font-family="'Montserrat', sans-serif" font-size="10" font-weight="700" text-anchor="middle">5</text>
    <text x="328" y="203" fill="#FFF" font-family="'Cinzel', serif" font-size="9.5" letter-spacing="1">MICRODERMAL</text>
  </g>

  <!-- 6 - SURFACE -->
  <g class="map-pin-item" onclick="filtrarPontoAnatomico('faciais', 'surface')">
    <path d="M 105 195 L 60 195" stroke="#D4AF37" stroke-width="1.2" marker-start="url(#arrowGold)" />
    <circle cx="105" cy="195" r="10" fill="#7E22CE" stroke="#D4AF37" stroke-width="1.2" filter="url(#pinShadow)"/>
    <text x="105" y="199" fill="#FFF" font-family="'Montserrat', sans-serif" font-size="10" font-weight="700" text-anchor="middle">6</text>
    <text x="52" y="198" fill="#FFF" font-family="'Cinzel', serif" font-size="9.5" letter-spacing="1" text-anchor="end">SURFACE</text>
  </g>

</svg>`;
}

fs.writeFileSync('img/mapa-orelha.svg', generateEarSVG());
fs.writeFileSync('img/mapa-boca.svg', generateMouthSVG());
fs.writeFileSync('img/mapa-facial.svg', generateFaceSVG());

console.log('Saved all 3 SVG maps with identical backgrounds and numbers/arrows!');

