import lottie from 'lottie-web';
import loadingScreen from './assets/Animation.json';

const translations = {
  en: {
    h1: "Inserting fluid animations using After Effects, HTML/CSS, Javascript and Lottie",
    subtitle: "Implementation of high-performance animations using Lottie.js and After Effects.",
    s1h3: "01. Main Design in Illustrator",
    s1p: "The main element was designed as a vector (the logo), organizing everything in separate layers to animate each part independently and precisely.",
    s1alt: "Illustrator layer design",
    s2h3: "02. Importing from Illustrator to After Effects",
    s2p: "The Illustrator file was imported into After Effects preserving vector quality. The imported logo layers were converted to vector layers to be animated in the After Effects composition.",
    s2alt: "After Effects composition",
    s3h3: "03. Motion Graphics & Keyframing",
    s3p: "Animation execution applying fundamental motion design principles. Simple animations (Position, scale, opacity) were used so that Bodymovin rendered them correctly.",
    s3alt: "Animation timeline",
    s4h3: "04. JSON Export and Rendering",
    s4p: "Using the <strong>Bodymovin</strong> extension, the composition was processed to generate a JSON file. This technique allows ultra-light loading and infinite scalability without resolution loss.",
    s5h3: "05. Frontend Development in Vite",
    s5p: "Final integration using Vanilla JavaScript under the Vite environment and the Lottie.js Library (Code available in Github repository).",
    s5alt: "Landing development",
    footer: "Created by <strong>Raquel Bonilla</strong> &mdash; Copyright 2026"
  },
  es: {
    h1: "Insertando animaciones fluidas usando After Effects, HTML/CSS, Javascript y Lottie",
    subtitle: "Implementación de animaciones de alto rendimiento mediante Lottie.js y After Effects.",
    s1h3: "01. Diseño principal en Illustrator",
    s1p: "Se diseño el elemento principal como vector (el logo), organizando todo en capas separadas para poder animar cada parte de forma independiente y precisa.",
    s1alt: "Diseño en capas de Illustrator",
    s2h3: "02. Importando de Illustrator a After Effects",
    s2p: "Se importó el archivo de Illustrator en After Effects conservando la calidad vectorial. Las capas del logo importados se convirtieron a capas de vectores para ser animado en la composición del After Effects",
    s2alt: "Composición en After Effects",
    s3h3: "03. Motion Graphics & Keyframing",
    s3p: "Ejecución de la animación aplicando principios fundamentales de motion design (animación). Se trabajó con animaciones simples (Posición, escala, opacidad) para que el Bodymovin lo renderizara correctamente.",
    s3alt: "Timeline de animación",
    s4h3: "04. Exportación y Renderizado JSON",
    s4p: "Utilizando la extensión <strong>Bodymovin</strong>, se procesó la composición para generar un archivo JSON. Esta técnica permite una carga ultraligera y escalabilidad infinita sin pérdida de resolución.",
    s5h3: "05. Desarrollo Frontend en Vite",
    s5p: "Integración final utilizando JavaScript Vanilla bajo el entorno de Vite y la Librería Lottie.js (Codigo disponible en repositorio Github).",
    s5alt: "Desarrollo de la landing",
    footer: "Creado por <strong>Raquel Bonilla</strong> &mdash; Copyright 2026"
  }
};

document.querySelector('#app').innerHTML = `
  <div id="loading-screen">
    <div id="animation-container" class="animation-c-style"></div>
  </div>

  <main class="landing">
    <button id="lang-toggle">
    <img id="lang-flag" src="https://flagcdn.com/w20/us.png" srcset="https://flagcdn.com/w40/us.png 2x" alt="English" width="20" height="15" style="vertical-align:middle; margin-right:6px; border-radius:2px;">
    <span id="lang-label">EN</span>
  </button>
    <article class="case-study">
      <header class="hero">
        <h1 data-i18n="h1">Insertando animaciones fluidas usando After Effects, HTML/CSS, Javascript y Lottie</h1>
        <p class="subtitle" data-i18n="subtitle">Implementación de animaciones de alto rendimiento mediante Lottie.js y After Effects.</p>
      </header>

      <section class="content-grid">
        <div class="step">
          <h3 data-i18n="s1h3">01. Diseño principal en Illustrator</h3>
          <p data-i18n="s1p">Se diseño el elemento principal como vector (el logo), organizando todo en capas separadas para poder animar cada parte de forma independiente y precisa.</p>
          <img src="src/assets/1.png" data-i18n-alt="s1alt" alt="Diseño en capas de Illustrator" class="project-img">
        </div>

        <div class="step">
          <h3 data-i18n="s2h3">02. Importando de Illustrator a After Effects</h3>
          <p data-i18n="s2p">Se importó el archivo de Illustrator en After Effects conservando la calidad vectorial. Las capas del logo importados se convirtieron a capas de vectores para ser animado en la composición del After Effects</p>
          <img src="src/assets/2.png" data-i18n-alt="s2alt" alt="Composición en After Effects" class="project-img">
        </div>

        <div class="step">
          <h3 data-i18n="s3h3">03. Motion Graphics & Keyframing</h3>
          <p data-i18n="s3p">Ejecución de la animación aplicando principios fundamentales de motion design (animación). Se trabajó con animaciones simples (Posición, escala, opacidad) para que el Bodymovin lo renderizara correctamente.</p>
          <img src="src/assets/3.png" data-i18n-alt="s3alt" alt="Timeline de animación" class="project-img">
          
          <div class="video-container">
          <video class="video-bg" autoplay muted loop playsinline>
            <source src="src/assets/andromeda.mp4" type="video/mp4">
        </video>
          </div>
        </div>

        <div class="step">
          <h3 data-i18n="s4h3">04. Exportación y Renderizado JSON</h3>
          <p data-i18n="s4p">Utilizando la extensión <strong>Bodymovin</strong>, se procesó la composición para generar un archivo JSON. Esta técnica permite una carga ultraligera y escalabilidad infinita sin pérdida de resolución.</p>
          <img src="src/assets/6.png" data-i18n-alt="s5alt" alt="Desarrollo de la landing" class="project-img">
          </div>

        <div class="step">
          <h3 data-i18n="s5h3">05. Desarrollo Frontend en Vite</h3>
          <p data-i18n="s5p">Integración final utilizando JavaScript Vanilla bajo el entorno de Vite y la Librería Lottie.js (Codigo disponible en repositorio Github).</p>
          <img src="src/assets/5.png" data-i18n-alt="s5alt" alt="Desarrollo de la landing" class="project-img">
        </div>
      </section>
    </article>
  </main>

  <footer class="site-footer">
    <p data-i18n-html="footer">Creado por <strong>Raquel Bonilla</strong> &mdash; Copyright 2026</p>
    <nav class="footer-links" aria-label="Redes sociales">
      <a href="https://github.com/Lesathch" target="_blank" rel="noopener noreferrer">GitHub</a>
      <a href="https://www.linkedin.com/in/raquel-bonilla-a02959193/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
    </nav>
  </footer>
`;

const anim = lottie.loadAnimation({
  container: document.getElementById('animation-container'),
  renderer: 'svg',
  loop: true,
  autoplay: true,
  animationData: loadingScreen
});

anim.setSpeed(1.5)

setTimeout(() => {
  document.getElementById('loading-screen').style.display = 'none';
  document.querySelector('.landing').style.display = 'block';
  document.querySelector('.site-footer').style.display = 'flex';
}, 6000);

let currentLang = 'es';

const flagMap = {
  en: { src: 'https://flagcdn.com/w20/us.png', srcset: 'https://flagcdn.com/w40/us.png 2x', alt: 'English',  label: 'EN' },
  es: { src: 'https://flagcdn.com/w20/co.png', srcset: 'https://flagcdn.com/w40/co.png 2x', alt: 'Español', label: 'ES' }
};

document.getElementById('lang-toggle').addEventListener('click', () => {
  currentLang = currentLang === 'en' ? 'es' : 'en'; // ← también se corrige el bug: 'es' → 'en'
  const t = translations[currentLang];

  document.querySelectorAll('[data-i18n]').forEach(el => {
    el.textContent = t[el.dataset.i18n];
  });

  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    el.innerHTML = t[el.dataset.i18nHtml];
  });

  document.querySelectorAll('[data-i18n-alt]').forEach(el => {
    el.alt = t[el.dataset.i18nAlt];
  });

  const flag = flagMap[currentLang];
  const flagImg = document.getElementById('lang-flag');
  flagImg.src = flag.src;
  flagImg.srcset = flag.srcset;
  flagImg.alt = flag.alt;
  document.getElementById('lang-label').textContent = flag.label;
});