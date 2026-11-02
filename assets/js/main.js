/* =========================================================
   GINSA · Interactividad
   ========================================================= */
(() => {
  'use strict';

  const PHONE = '34722311706';
  const EMAIL = 'ginsamultiservicios@gmail.com';
  const $ = (s, c = document) => c.querySelector(s);
  const $$ = (s, c = document) => [...c.querySelectorAll(s)];
  const isFinePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const waLink = (msg) => `https://wa.me/${PHONE}?text=${encodeURIComponent(msg)}`;

  /* ---------- Iconos ---------- */
  const ICONS = {
    albanileria: '<svg viewBox="0 0 24 24"><rect x="2" y="4" width="20" height="16" rx="1"/><path d="M2 9.3h20M2 14.6h20M8 4v5.3M16 4v5.3M12 9.3v5.3M6 14.6V20M18 14.6V20"/></svg>',
    pintura: '<svg viewBox="0 0 24 24"><rect x="3" y="3" width="15" height="6" rx="1.5"/><path d="M18 6h2a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-8v3"/><rect x="10" y="14" width="4" height="7" rx="1"/></svg>',
    electricidad: '<svg viewBox="0 0 24 24"><path d="M13 2 4 14h7l-1 8 9-12h-7l1-8Z"/></svg>',
    fontaneria: '<svg viewBox="0 0 24 24"><path d="M4 4h6v4H8v3a3 3 0 0 0 3 3h5v-2h4v6h-4v-2h-5a5 5 0 0 1-5-5V8H4V4Z"/><path d="M18 20.5c0 .8-.7 1.5-1.5 1.5s-1.5-.7-1.5-1.5S16.5 18 16.5 18s1.5 1.7 1.5 2.5Z"/></svg>',
    calefaccion: '<svg viewBox="0 0 24 24"><path d="M12 2s5 4.5 5 9.5a5 5 0 0 1-10 0C7 9 8.5 7.5 8.5 7.5S9 10 11 10.5C11 7 12 2 12 2Z"/><path d="M12 21a2.5 2.5 0 0 0 2.5-2.5c0-1.7-2.5-3.5-2.5-3.5s-2.5 1.8-2.5 3.5A2.5 2.5 0 0 0 12 21Z"/></svg>',
    humedades: '<svg viewBox="0 0 24 24"><path d="M12 2.5S5 10 5 14.5a7 7 0 0 0 14 0C19 10 12 2.5 12 2.5Z"/><path d="M9 15a3 3 0 0 0 3 3"/></svg>',
    cerrajeria: '<svg viewBox="0 0 24 24"><circle cx="8" cy="15" r="5"/><path d="m11.5 11.5 9-9M17 6l3 3M14.5 8.5l2 2"/></svg>',
    iluminacion: '<svg viewBox="0 0 24 24"><path d="M9 18h6M10 21h4M12 3a6 6 0 0 0-3.5 10.9c.6.4 1 1.2 1 2V16h5v-.1c0-.8.4-1.6 1-2A6 6 0 0 0 12 3Z"/></svg>',
    persianas: '<svg viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="1.5"/><path d="M3 7h18M3 10.5h18M3 14h18M12 17v4"/></svg>',
    muebles: '<svg viewBox="0 0 24 24"><path d="M4 10V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v4"/><path d="M2 12a2 2 0 0 1 4 0v3h12v-3a2 2 0 0 1 4 0v5H2v-5ZM5 17v3M19 17v3"/></svg>',
    mas: '<svg viewBox="0 0 24 24"><path d="M14.7 6.3a4 4 0 0 0-5.4 5.4L3 18l3 3 6.3-6.3a4 4 0 0 0 5.4-5.4l-2.5 2.5-2.5-.5-.5-2.5 2.5-2.5Z"/></svg>',
    arrow: '<svg viewBox="0 0 24 24"><path d="M5 12h14M13 6l6 6-6 6"/></svg>',
    zoom: '<svg viewBox="0 0 24 24"><circle cx="11" cy="11" r="7"/><path d="M20 20l-3.5-3.5M11 8v6M8 11h6"/></svg>',
    pin: '<svg viewBox="0 0 24 24" style="fill:currentColor;width:14px;height:14px"><path d="M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7Zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5Z"/></svg>'
  };

  /* ---------- Datos ---------- */
  const SERVICES = [
    { id: 'albanileria', name: 'Albañilería', img: 'albanileria.jpg',
      short: 'Obras, reformas y reparaciones respetando la construcción tradicional jiennense.',
      desc: 'Desde pequeñas reparaciones hasta reformas completas. Trabajamos con piedra, ladrillo, cal y teja árabe, respetando la esencia de las casas de Jaén.',
      list: ['Reformas integrales de viviendas', 'Tabiquería, enfoscados y alicatados', 'Reparación de grietas y fisuras', 'Tejados de teja árabe y azoteas', 'Solerías de barro cocido e hidráulicas'] },
    { id: 'pintura', name: 'Pintura', img: 'pintura.jpg',
      short: 'Interiores, fachadas y encalados tradicionales con acabado impecable.',
      desc: 'Damos vida a tu casa con acabados limpios y duraderos. Especialistas en encalado tradicional de fachadas andaluzas.',
      list: ['Pintura de interiores y techos', 'Encalado y pintura de fachadas', 'Esmaltes de rejas, puertas y carpintería', 'Pinturas antihumedad y antimoho', 'Alisado de gotelé'] },
    { id: 'electricidad', name: 'Electricidad', img: 'electricidad.jpg',
      short: 'Instalaciones, averías y cuadros eléctricos seguros y certificados.',
      desc: 'Resolvemos cualquier avería eléctrica y renovamos instalaciones antiguas para que tu hogar sea seguro y eficiente.',
      list: ['Averías y urgencias 24h', 'Renovación de instalaciones antiguas', 'Cuadros eléctricos y diferenciales', 'Enchufes, puntos de luz y mecanismos', 'Boletines e instalaciones nuevas'] },
    { id: 'fontaneria', name: 'Fontanería', img: 'fontaneria.jpg',
      short: 'Fugas, atascos, grifería y sanitarios. Respuesta inmediata.',
      desc: 'Fugas, atascos o una reforma de baño: solucionamos cualquier problema de agua de forma rápida y limpia.',
      list: ['Detección y reparación de fugas', 'Desatascos', 'Cambio de grifería y sanitarios', 'Instalación de termos y calentadores', 'Renovación de tuberías'] },
    { id: 'calefaccion', name: 'Calefacción', img: 'calefaccion.jpg',
      short: 'Calderas, radiadores y sistemas para los inviernos de Jaén.',
      desc: 'Prepara tu casa para el invierno. Instalamos, reparamos y mantenemos todo tipo de sistemas de calefacción.',
      list: ['Instalación y reparación de radiadores', 'Calderas de gas y gasoil', 'Purgado y mantenimiento', 'Emisores térmicos y suelo radiante', 'Termostatos y control eficiente'] },
    { id: 'humedades', name: 'Humedades', img: 'antes-humedad.jpg',
      short: 'Capilaridad, filtraciones y condensación. Diagnóstico y solución definitiva.',
      desc: 'Las casas antiguas de muros gruesos sufren a menudo humedad por capilaridad. Diagnosticamos el origen y la eliminamos de raíz.',
      list: ['Diagnóstico del origen de la humedad', 'Tratamiento de capilaridad', 'Impermeabilización de cubiertas y terrazas', 'Eliminación de moho y salitre', 'Saneado y acabado de paredes'] }
  ];

  const EXTRAS = [
    { id: 'cerrajeria', name: 'Cerrajería', short: 'Aperturas, cambio de bombines y cerraduras',
      desc: '¿Te has quedado fuera de casa? Abrimos puertas sin daños y cambiamos cerraduras y bombines por otros de seguridad.',
      list: ['Apertura de puertas 24h', 'Cambio de bombines y cerraduras', 'Cerraduras de seguridad', 'Reparación de puertas de madera'] },
    { id: 'iluminacion', name: 'Iluminación', short: 'Lámparas, LED y ambientes',
      desc: 'Instalamos lámparas, focos y tiras LED para crear el ambiente perfecto ahorrando en la factura.',
      list: ['Instalación de lámparas y apliques', 'Iluminación LED y empotrada', 'Iluminación exterior de patios', 'Sensores y reguladores'] },
    { id: 'persianas', name: 'Persianas', short: 'Reparación, cintas y motorización',
      desc: 'Reparamos y cambiamos persianas, cintas, lamas y recogedores. También motorizamos tus persianas.',
      list: ['Cambio de cintas y lamas', 'Reparación de persianas atascadas', 'Motorización', 'Persianas nuevas a medida'] },
    { id: 'muebles', name: 'Montaje de muebles', short: 'Cocinas, armarios y mobiliario',
      desc: 'Montamos todo tipo de muebles: cocinas, armarios, estanterías y mobiliario de cualquier marca.',
      list: ['Montaje de muebles de cualquier marca', 'Cocinas y armarios', 'Anclaje de estanterías y TV', 'Cuadros, cortinas y accesorios'] },
    { id: 'mas', name: 'Y mucho más…', short: 'Pequeñas reparaciones del hogar',
      desc: 'Si es una reparación del hogar, nosotros la hacemos. Cuéntanos qué necesitas y te damos solución.',
      list: ['Pequeñas reparaciones', 'Mantenimiento de viviendas', 'Comunidades de vecinos', 'Locales y oficinas'] }
  ];

  const PROJECTS = [
    { img: 'proyecto-cocina.jpg', cat: 'interior', tag: 'Interiores', title: 'Cocina rústica andaluza', loc: 'Casco antiguo, Jaén', size: 'wide' },
    { img: 'proyecto-fachada.jpg', cat: 'exterior', tag: 'Fachadas', title: 'Rehabilitación de fachada', loc: 'Barrio de la Magdalena, Jaén', size: 'tall' },
    { img: 'proyecto-bano.jpg', cat: 'interior', tag: 'Interiores', title: 'Baño con suelo hidráulico', loc: 'Jaén capital' },
    { img: 'despues-humedad.jpg', cat: 'rehab', tag: 'Rehabilitación', title: 'Saneado integral de humedades', loc: 'San Ildefonso, Jaén' },
    { img: 'about.jpg', cat: 'exterior', tag: 'Fachadas', title: 'Encalado tradicional', loc: 'Casco histórico, Jaén' },
    { img: 'hero.jpg', cat: 'rehab', tag: 'Rehabilitación', title: 'Rehabilitación con vistas a la Catedral', loc: 'Jaén', size: 'wide' }
  ];

  const PAIRS = {
    humedad: { before: 'antes-humedad.jpg', after: 'despues-humedad.jpg' },
    fachada: { before: 'antes-fachada.jpg', after: 'despues-fachada.jpg' },
    bano: { before: 'antes-bano.jpg', after: 'despues-bano.jpg' }
  };

  const TOWNS = ['Jaén', 'Martos', 'Mancha Real', 'Torredelcampo', 'Torredonjimeno', 'Los Villares', 'La Guardia de Jaén', 'Mengíbar', 'Jamilena', 'Pegalajar', 'Fuerte del Rey', 'Villatorres', 'Cambil', 'Valdepeñas de Jaén', 'Fuensanta de Martos', 'Torres', 'Jimena', 'Villardompardo', 'Escañuela', 'Lahiguera', 'Arjona', 'Andújar', 'Bailén', 'Linares', 'Baeza', 'Úbeda', 'Jódar', 'Huelma', 'Alcalá la Real', 'Castillo de Locubín', 'Porcuna', 'Cazorla'];

  const IMG = (f) => `assets/img/${f}`;

  /* ---------- Preloader ---------- */
  function stringArt(svg, { N = 44, K = 12, K2 = 15, R = 96, color = '#5ec8f2', animate = false } = {}) {
    const ns = 'http://www.w3.org/2000/svg';
    const cx = 110, cy = 110;
    const mk = (tag, attrs) => { const el = document.createElementNS(ns, tag); for (const k in attrs) el.setAttribute(k, attrs[k]); return el; };
    svg.appendChild(mk('circle', { cx, cy, r: 104, fill: 'none', stroke: color, 'stroke-width': 2 }));
    [[K, 1.1, 1], [K2, .7, .6]].forEach(([k, w, o], layer) => {
      const g = mk('g', { stroke: color, 'stroke-width': w, opacity: o, 'stroke-linecap': 'round' });
      for (let i = 0; i < N; i++) {
        const a1 = (-90 + i * 360 / N) * Math.PI / 180;
        const a2 = (-90 + ((i + k) % N) * 360 / N) * Math.PI / 180;
        const l = mk('line', { x1: cx + R * Math.cos(a1), y1: cy + R * Math.sin(a1), x2: cx + R * Math.cos(a2), y2: cy + R * Math.sin(a2) });
        if (animate) l.style.animationDelay = `${(i * 0.025 + layer * 0.3).toFixed(3)}s`;
        g.appendChild(l);
      }
      svg.appendChild(g);
    });
  }

  const preloader = $('#preloader');
  document.body.classList.add('is-loading');
  stringArt($('#preloaderRing'), { animate: !reduceMotion });
  stringArt($('#heroRing'), { color: '#a8e6ff' });

  let progress = 0;
  const bar = $('#preloaderBar');
  const tick = setInterval(() => { progress = Math.min(progress + Math.random() * 18, 92); bar.style.width = progress + '%'; }, 140);
  const start = performance.now();
  let preloaderDone = false;
  const hidePreloader = () => {
    if (preloaderDone) return;
    preloaderDone = true;
    clearInterval(tick);
    bar.style.width = '100%';
    const wait = Math.max(0, 1700 - (performance.now() - start));
    setTimeout(() => {
      preloader.classList.add('hide');
      document.body.classList.remove('is-loading');
      setTimeout(() => $$('.hero .reveal').forEach(el => el.classList.add('in-view')), 200);
    }, wait);
  };
  window.addEventListener('load', hidePreloader);
  setTimeout(hidePreloader, 3500);

  /* ---------- Render: servicios ---------- */
  const grid = $('#servicesGrid');
  grid.innerHTML = SERVICES.map((s, i) => `
    <button class="scard reveal" data-delay="${i % 3}" data-service="${s.id}" aria-label="Ver servicio de ${s.name}">
      <div class="scard__img"><img src="${IMG(s.img)}" alt="${s.name} en Jaén" loading="lazy"/></div>
      <span class="scard__shine"></span>
      <span class="scard__num">0${i + 1}</span>
      <div class="scard__body">
        <div class="scard__icon">${ICONS[s.id]}</div>
        <h3>${s.name}</h3>
        <p>${s.short}</p>
        <span class="scard__more">Ver más ${ICONS.arrow}</span>
      </div>
    </button>`).join('');

  $('#extraGrid').innerHTML = EXTRAS.map((s, i) => `
    <button class="extra reveal" data-delay="${i % 4}" data-extra="${s.id}">
      <span class="extra__icon">${ICONS[s.id]}</span>
      <strong>${s.name}</strong>
      <small>${s.short}</small>
    </button>`).join('');

  /* ---------- Render: proyectos ---------- */
  const pGrid = $('#projectsGrid');
  pGrid.innerHTML = PROJECTS.map((p, i) => `
    <figure class="pcard reveal ${p.size ? 'pcard--' + p.size : ''}" data-cat="${p.cat}" data-index="${i}">
      <img src="${IMG(p.img)}" alt="${p.title} - ${p.loc}" loading="lazy"/>
      <figcaption class="pcard__info">
        <span class="pcard__tag">${p.tag}</span>
        <h3>${p.title}</h3>
        <span class="pcard__loc">${ICONS.pin} ${p.loc}</span>
      </figcaption>
      <span class="pcard__zoom">${ICONS.zoom}</span>
    </figure>`).join('');

  /* ---------- Render: municipios ---------- */
  const townsEl = $('#towns');
  townsEl.innerHTML = TOWNS.map(t => `<span class="town">${t}</span>`).join('');

  /* ---------- Reveal on scroll ---------- */
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('in-view'); io.unobserve(e.target); }
    });
  }, { threshold: 0.14, rootMargin: '0px 0px -40px 0px' });
  $$('.reveal, .reveal-left, .reveal-right').forEach(el => { if (!el.closest('.hero')) io.observe(el); });

  /* ---------- Header / scroll ---------- */
  const header = $('#header');
  const progressBar = $('#scrollProgress');
  const toTop = $('#toTop');
  const toTopCircle = $('#toTopCircle');
  const heroBg = $('#heroBg');
  const sections = $$('main section[id]');
  const navLinks = $$('.nav__link');
  let lastY = 0, ticking = false;

  function onScroll() {
    const y = window.scrollY;
    const max = document.documentElement.scrollHeight - innerHeight;
    const pct = max > 0 ? y / max : 0;
    progressBar.style.width = (pct * 100) + '%';
    header.classList.toggle('scrolled', y > 60);
    header.classList.toggle('hidden', y > lastY && y > 500 && !nav.classList.contains('open'));
    toTop.classList.toggle('show', y > 700);
    toTopCircle.style.strokeDashoffset = 132 - 132 * pct;
    if (!reduceMotion && y < innerHeight * 1.2) heroBg.style.translate = `0 ${y * 0.35}px`;

    // nav activo
    let current = sections[0]?.id;
    sections.forEach(s => { if (s.getBoundingClientRect().top < innerHeight * 0.35) current = s.id; });
    navLinks.forEach(l => l.classList.toggle('active', l.getAttribute('href') === '#' + current));

    // timeline
    const tl = $('#timeline');
    if (tl) {
      const r = tl.getBoundingClientRect();
      const p = Math.min(Math.max((innerHeight * 0.75 - r.top) / (r.height + innerHeight * 0.2), 0), 1);
      $('#timelineFill').style.width = (p * 100) + '%';
    }
    lastY = y;
    ticking = false;
  }
  window.addEventListener('scroll', () => { if (!ticking) { requestAnimationFrame(onScroll); ticking = true; } }, { passive: true });
  toTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

  /* ---------- Menú móvil ---------- */
  const burger = $('#burger');
  const nav = $('#nav');
  burger.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    burger.classList.toggle('open', open);
    burger.setAttribute('aria-expanded', open);
  });
  $$('#nav a').forEach(a => a.addEventListener('click', () => { nav.classList.remove('open'); burger.classList.remove('open'); }));

  /* ---------- Typed ---------- */
  const typedEl = $('#typed');
  const words = ['albañilería', 'pintura', 'electricidad', 'fontanería', 'calefacción', 'humedades', 'cerrajería', 'persianas', 'iluminación', 'montaje de muebles'];
  let wi = 0, ci = words[0].length, deleting = true;
  function typeLoop() {
    const w = words[wi];
    if (deleting) {
      ci--;
      if (ci <= 0) { deleting = false; wi = (wi + 1) % words.length; }
    } else {
      ci++;
      if (ci >= words[wi].length) { deleting = true; typedEl.textContent = words[wi]; return setTimeout(typeLoop, 1800); }
    }
    typedEl.textContent = (deleting ? w : words[wi]).slice(0, ci);
    setTimeout(typeLoop, deleting ? 45 : 85);
  }
  setTimeout(typeLoop, 3200);

  /* ---------- Hero canvas: partículas tipo plano ---------- */
  const canvas = $('#heroCanvas');
  if (canvas && !reduceMotion) {
    const ctx = canvas.getContext('2d');
    let W, H, pts = [], mouse = { x: -999, y: -999 };
    const resize = () => {
      const dpr = Math.min(devicePixelRatio || 1, 2);
      W = canvas.offsetWidth; H = canvas.offsetHeight;
      canvas.width = W * dpr; canvas.height = H * dpr; ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const n = Math.round(Math.min(70, W * H / 22000));
      pts = Array.from({ length: n }, () => ({ x: Math.random() * W, y: Math.random() * H, vx: (Math.random() - .5) * .35, vy: (Math.random() - .5) * .35, r: Math.random() * 1.6 + .6 }));
    };
    resize();
    window.addEventListener('resize', resize);
    canvas.parentElement.addEventListener('mousemove', e => { const r = canvas.getBoundingClientRect(); mouse.x = e.clientX - r.left; mouse.y = e.clientY - r.top; });
    canvas.parentElement.addEventListener('mouseleave', () => { mouse.x = mouse.y = -999; });
    let visible = true;
    new IntersectionObserver(([e]) => { visible = e.isIntersecting; }).observe(canvas);
    (function draw() {
      requestAnimationFrame(draw);
      if (!visible) return;
      ctx.clearRect(0, 0, W, H);
      for (const p of pts) {
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0 || p.x > W) p.vx *= -1;
        if (p.y < 0 || p.y > H) p.vy *= -1;
        const dx = p.x - mouse.x, dy = p.y - mouse.y, d = Math.hypot(dx, dy);
        if (d < 140) { p.x += dx / d * 1.2; p.y += dy / d * 1.2; }
        ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2); ctx.fillStyle = 'rgba(168,230,255,.8)'; ctx.fill();
      }
      for (let i = 0; i < pts.length; i++) for (let j = i + 1; j < pts.length; j++) {
        const a = pts[i], b = pts[j], d = Math.hypot(a.x - b.x, a.y - b.y);
        if (d < 130) { ctx.strokeStyle = `rgba(94,200,242,${(1 - d / 130) * .35})`; ctx.lineWidth = .7; ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y); ctx.stroke(); }
      }
    })();
  }

  /* ---------- Cursor personalizado ---------- */
  if (isFinePointer && !reduceMotion) {
    const cur = $('#cursor'), dot = $('#cursorDot');
    let mx = innerWidth / 2, my = innerHeight / 2, cx = mx, cy = my;
    window.addEventListener('mousemove', e => { mx = e.clientX; my = e.clientY; dot.style.transform = `translate(${mx}px, ${my}px)`; });
    (function loop() { cx += (mx - cx) * .18; cy += (my - cy) * .18; cur.style.transform = `translate(${cx}px, ${cy}px)`; requestAnimationFrame(loop); })();
    document.addEventListener('mouseover', e => { cur.classList.toggle('is-hover', !!e.target.closest('a, button, .pcard, .scard, input, label, select, textarea')); });
    document.addEventListener('mouseleave', () => { cur.classList.add('is-hidden'); dot.classList.add('is-hidden'); });
    document.addEventListener('mouseenter', () => { cur.classList.remove('is-hidden'); dot.classList.remove('is-hidden'); });
  }

  /* ---------- Magnetic + tilt ---------- */
  if (isFinePointer && !reduceMotion) {
    $$('.magnetic').forEach(el => {
      el.addEventListener('mousemove', e => {
        const r = el.getBoundingClientRect();
        el.style.transform = `translate(${(e.clientX - r.left - r.width / 2) * .25}px, ${(e.clientY - r.top - r.height / 2) * .35}px)`;
      });
      el.addEventListener('mouseleave', () => { el.style.transform = ''; });
    });
    const tilt = (el, max = 8) => {
      el.addEventListener('mousemove', e => {
        const r = el.getBoundingClientRect();
        const px = (e.clientX - r.left) / r.width, py = (e.clientY - r.top) / r.height;
        el.style.transform = `perspective(1000px) rotateY(${(px - .5) * max * 2}deg) rotateX(${(.5 - py) * max * 2}deg)`;
        el.style.setProperty('--mx', px * 100 + '%'); el.style.setProperty('--my', py * 100 + '%');
      });
      el.addEventListener('mouseleave', () => { el.style.transform = ''; });
    };
    $$('.scard').forEach(el => tilt(el, 7));
    $$('.tilt').forEach(el => tilt(el, 5));
  }

  /* ---------- Contadores ---------- */
  const cio = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (!e.isIntersecting) return;
      const el = e.target, end = +el.dataset.count, pre = el.dataset.prefix || '', suf = el.dataset.suffix || '';
      const dur = 1800, t0 = performance.now();
      (function step(t) {
        const p = Math.min((t - t0) / dur, 1), eased = 1 - Math.pow(1 - p, 4);
        el.textContent = pre + Math.round(end * eased) + suf;
        if (p < 1) requestAnimationFrame(step);
      })(t0);
      cio.unobserve(el);
    });
  }, { threshold: .6 });
  $$('[data-count]').forEach(el => cio.observe(el));

  /* ---------- Modal de servicios ---------- */
  const modal = $('#modal');
  function openModal(s, isExtra) {
    $('#modalImg').src = IMG(s.img || 'team.jpg');
    $('#modalImg').alt = s.name;
    $('#modalEyebrow').textContent = isExtra ? 'Más servicios' : 'Servicio';
    $('#modalTitle').textContent = s.name;
    $('#modalDesc').textContent = s.desc;
    $('#modalList').innerHTML = s.list.map(l => `<li><span>✓</span> ${l}</li>`).join('');
    $('#modalWa').href = waLink(`Hola GINSA, me gustaría pedir presupuesto para un trabajo de ${s.name.toLowerCase()}.`);
    modal.classList.add('open'); modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }
  function closeModal() { modal.classList.remove('open'); modal.setAttribute('aria-hidden', 'true'); document.body.style.overflow = ''; }
  grid.addEventListener('click', e => { const c = e.target.closest('[data-service]'); if (c) openModal(SERVICES.find(s => s.id === c.dataset.service)); });
  $('#extraGrid').addEventListener('click', e => { const c = e.target.closest('[data-extra]'); if (c) openModal(EXTRAS.find(s => s.id === c.dataset.extra), true); });
  $$('[data-close]', modal).forEach(b => b.addEventListener('click', closeModal));

  /* ---------- Filtros proyectos ---------- */
  const filters = $$('.filter');
  const indicator = $('#filterIndicator');
  const moveIndicator = (btn) => { indicator.style.width = btn.offsetWidth + 'px'; indicator.style.transform = `translateX(${btn.offsetLeft}px)`; };
  const activeFilter = () => $('.filter.active');
  requestAnimationFrame(() => moveIndicator(activeFilter()));
  window.addEventListener('resize', () => moveIndicator(activeFilter()));
  document.fonts?.ready.then(() => moveIndicator(activeFilter()));
  filters.forEach(btn => btn.addEventListener('click', () => {
    filters.forEach(b => b.classList.remove('active'));
    btn.classList.add('active'); moveIndicator(btn);
    const f = btn.dataset.filter;
    const cards = $$('.pcard', pGrid);
    cards.forEach(c => c.classList.add('is-filtering'));
    setTimeout(() => {
      cards.forEach(c => {
        const show = f === 'all' || c.dataset.cat === f;
        c.classList.toggle('is-hidden', !show);
        c.classList.toggle('pcard--compact', f !== 'all');
      });
      requestAnimationFrame(() => cards.forEach(c => c.classList.remove('is-filtering')));
    }, 300);
  }));

  /* ---------- Lightbox ---------- */
  const lb = $('#lightbox');
  let lbIndex = 0;
  const visibleProjects = () => $$('.pcard:not(.is-hidden)', pGrid).map(c => +c.dataset.index);
  function showLb(i) {
    const p = PROJECTS[i]; lbIndex = i;
    $('#lbImg').src = IMG(p.img); $('#lbImg').alt = p.title;
    $('#lbTitle').textContent = p.title; $('#lbCap').textContent = `${p.tag} · ${p.loc}`;
  }
  function stepLb(d) { const v = visibleProjects(); const pos = v.indexOf(lbIndex); showLb(v[(pos + d + v.length) % v.length]); }
  pGrid.addEventListener('click', e => { const c = e.target.closest('.pcard'); if (!c) return; showLb(+c.dataset.index); lb.classList.add('open'); document.body.style.overflow = 'hidden'; });
  const closeLb = () => { lb.classList.remove('open'); document.body.style.overflow = ''; };
  $('#lbClose').addEventListener('click', closeLb);
  $('#lbPrev').addEventListener('click', () => stepLb(-1));
  $('#lbNext').addEventListener('click', () => stepLb(1));
  lb.addEventListener('click', e => { if (e.target === lb) closeLb(); });
  let lbTouchX = 0;
  lb.addEventListener('touchstart', e => { lbTouchX = e.touches[0].clientX; }, { passive: true });
  lb.addEventListener('touchend', e => { const dx = e.changedTouches[0].clientX - lbTouchX; if (Math.abs(dx) > 50) stepLb(dx < 0 ? 1 : -1); });

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') { closeModal(); closeLb(); }
    if (lb.classList.contains('open')) { if (e.key === 'ArrowRight') stepLb(1); if (e.key === 'ArrowLeft') stepLb(-1); }
  });

  /* ---------- Antes / Después ---------- */
  const ba = $('#ba'), baRange = $('#baRange'), baBeforeWrap = $('#baBeforeWrap'), baHandle = $('#baHandle');
  const setBA = (v) => { baBeforeWrap.style.clipPath = `inset(0 ${100 - v}% 0 0)`; baHandle.style.left = v + '%'; };
  baRange.addEventListener('input', () => { ba.classList.add('touched'); setBA(baRange.value); });
  setBA(50);
  const tabs = $$('.ctab');
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      $$('.ctab').forEach(t => t.classList.remove('active')); tab.classList.add('active');
    });
  });
  // Barrido inicial al entrar en pantalla
  new IntersectionObserver(([e], obs) => {
    if (!e.isIntersecting) return; obs.disconnect();
    let t0 = performance.now();
    (function anim(t) {
      const p = Math.min((t - t0) / 1800, 1);
      const v = 50 + Math.sin(p * Math.PI * 2) * 30 * (1 - p);
      setBA(v); baRange.value = v;
      if (p < 1 && !ba.classList.contains('touched')) requestAnimationFrame(anim);
    })(t0);
  }, { threshold: .6 }).observe(ba);

  /* ---------- Wizard de presupuesto ---------- */
  const wizard = $('#wizard');
  const steps = $$('.wizard__step', wizard);
  const prevBtn = $('#wizardPrev'), nextBtn = $('#wizardNext'), errEl = $('#wizardError');
  let step = 1;
  const getVals = (name) => $$(`[data-name="${name}"] input:checked`, wizard).map(i => i.value);
  function renderStep() {
    steps.forEach(s => s.classList.toggle('active', +s.dataset.step === step));
    $('#wizardBar').style.width = (Math.min(step, 4) / 4 * 100) + '%';
    $('#wizardStepNum').textContent = Math.min(step, 4);
    prevBtn.disabled = step === 1;
    nextBtn.textContent = step === 4 ? 'Enviar por WhatsApp' : 'Siguiente';
    errEl.textContent = '';
    if (step === 4) {
      $('#wizardSummary').innerHTML = `
        <strong>Resumen de tu solicitud:</strong>
        <div class="wizard__summary-item"><span class="wizard__summary-label">Servicio:</span> <span>${getVals('servicio').join(', ')}</span></div>
        <div class="wizard__summary-item"><span class="wizard__summary-label">Inmueble:</span> <span>${getVals('inmueble')[0]} en ${$('#wLocalidad').value || 'Jaén'}</span></div>
        <div class="wizard__summary-item"><span class="wizard__summary-label">Urgencia:</span> <span>${getVals('urgencia')[0]}</span></div>`;
    }
  }
  function validate() {
    if (step === 1 && !getVals('servicio').length) return 'Selecciona al menos un servicio.';
    if (step === 2 && !getVals('inmueble').length) return 'Indica el tipo de inmueble.';
    if (step === 3 && !getVals('urgencia').length) return 'Indica la urgencia.';
    if (step === 4) {
      if ($('#wNombre').value.trim().length < 2) return 'Escribe tu nombre.';
      if ($('#wTelefono').value.replace(/\D/g, '').length < 9) return 'Escribe un teléfono válido.';
    }
    return '';
  }
  nextBtn.addEventListener('click', () => {
    const err = validate();
    if (err) { errEl.textContent = err; wizard.classList.remove('shake'); void wizard.offsetWidth; wizard.classList.add('shake'); return; }
    if (step === 4) {
      const msg = `Hola GINSA, quiero pedir presupuesto:\n\n` +
        `• Servicio: ${getVals('servicio').join(', ')}\n` +
        `• Inmueble: ${getVals('inmueble')[0]}\n` +
        `• Localidad: ${$('#wLocalidad').value || 'Jaén'}\n` +
        `• Urgencia: ${getVals('urgencia')[0]}\n` +
        ($('#wDetalle').value.trim() ? `• Detalle: ${$('#wDetalle').value.trim()}\n` : '') +
        `\nContacto: ${$('#wNombre').value.trim()} · Tel: ${$('#wTelefono').value.trim()}`;
      window.open(waLink(msg), '_blank');
      step = 5; wizard.classList.add('done'); renderStep();
      return;
    }
    step++; renderStep();
  });
  prevBtn.addEventListener('click', () => { if (step > 1) { step--; renderStep(); } });
  $('#wizardRestart').addEventListener('click', () => { wizard.reset(); $('#wLocalidad').value = 'Jaén'; wizard.classList.remove('done'); step = 1; renderStep(); });

  /* ---------- Buscador de municipios ---------- */
  const norm = (s) => s.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().trim();
  const townSearch = $('#townSearch'), townResult = $('#townResult');
  townSearch.addEventListener('input', () => {
    const q = norm(townSearch.value);
    let found = null;
    $$('.town', townsEl).forEach(t => {
      const m = q && norm(t.textContent).includes(q);
      t.classList.toggle('match', !!m); t.classList.toggle('dim', !!q && !m);
      if (m && !found) found = t.textContent;
    });
    townResult.classList.toggle('ok', !!found);
    townResult.textContent = !q ? '' : found ? `¡Sí! Damos servicio en ${found}.` : 'Llámanos al 722 311 706: seguro que también llegamos a tu localidad.';
  });

  /* ---------- Testimonios slider ---------- */
  const track = $('#sliderTrack');
  const cards = $$('.tcard', track);
  const dotsEl = $('#sliderDots');
  let sIndex = 0, perView = 3, autoplay;
  const calcPerView = () => innerWidth <= 720 ? 1 : innerWidth <= 1060 ? 2 : 3;
  const maxIndex = () => Math.max(0, cards.length - perView);
  function buildDots() {
    perView = calcPerView();
    dotsEl.innerHTML = Array.from({ length: maxIndex() + 1 }, (_, i) => `<button aria-label="Opinión ${i + 1}"></button>`).join('');
    $$('button', dotsEl).forEach((d, i) => d.addEventListener('click', () => { goTo(i); restart(); }));
    goTo(Math.min(sIndex, maxIndex()));
  }
  function goTo(i) {
    sIndex = (i + maxIndex() + 1) % (maxIndex() + 1);
    const gap = parseFloat(getComputedStyle(track).gap) || 0;
    track.style.transform = `translateX(${-sIndex * (cards[0].offsetWidth + gap)}px)`;
    $$('button', dotsEl).forEach((d, k) => d.classList.toggle('active', k === sIndex));
  }
  const restart = () => { clearInterval(autoplay); autoplay = setInterval(() => goTo(sIndex + 1), 5500); };
  $('#sliderPrev').addEventListener('click', () => { goTo(sIndex - 1); restart(); });
  $('#sliderNext').addEventListener('click', () => { goTo(sIndex + 1); restart(); });
  window.addEventListener('resize', buildDots);
  buildDots(); restart();
  // Arrastre / swipe
  let dragX = null, dragDX = 0;
  const startDrag = (x) => { dragX = x; dragDX = 0; track.classList.add('dragging'); clearInterval(autoplay); };
  const moveDrag = (x) => { if (dragX === null) return; dragDX = x - dragX; const gap = parseFloat(getComputedStyle(track).gap) || 0; track.style.transform = `translateX(${-sIndex * (cards[0].offsetWidth + gap) + dragDX}px)`; };
  const endDrag = () => { if (dragX === null) return; track.classList.remove('dragging'); if (Math.abs(dragDX) > 60) goTo(sIndex + (dragDX < 0 ? 1 : -1)); else goTo(sIndex); dragX = null; restart(); };
  track.addEventListener('mousedown', e => { e.preventDefault(); startDrag(e.clientX); });
  window.addEventListener('mousemove', e => moveDrag(e.clientX));
  window.addEventListener('mouseup', endDrag);
  track.addEventListener('touchstart', e => startDrag(e.touches[0].clientX), { passive: true });
  track.addEventListener('touchmove', e => moveDrag(e.touches[0].clientX), { passive: true });
  track.addEventListener('touchend', endDrag);

  /* ---------- Acordeón ---------- */
  $$('.acc__head').forEach(h => h.addEventListener('click', () => {
    const acc = h.parentElement, open = acc.classList.contains('open');
    $$('.acc').forEach(a => a.classList.remove('open'));
    if (!open) acc.classList.add('open');
  }));
  $('.acc')?.classList.add('open');

  /* ---------- Formulario de contacto ---------- */
  const form = $('#contactForm');
  let channel = 'wa';
  $$('button[type="submit"]', form).forEach(b => b.addEventListener('click', () => { channel = b.dataset.channel; }));
  form.addEventListener('submit', e => {
    e.preventDefault();
    const fields = [['#cNombre', v => v.trim().length >= 2], ['#cTelefono', v => v.replace(/\D/g, '').length >= 9], ['#cMensaje', v => v.trim().length >= 3]];
    let ok = true;
    fields.forEach(([sel, fn]) => { const el = $(sel); const valid = fn(el.value); el.closest('.float').classList.toggle('invalid', !valid); if (!valid) ok = false; });
    const priv = $('#cPrivacidad');
    priv.closest('.check').classList.toggle('invalid', !priv.checked);
    if (!priv.checked) ok = false;
    if (!ok) { toast('Revisa los campos marcados en rojo.'); form.classList.remove('shake'); void form.offsetWidth; form.classList.add('shake'); return; }
    const nombre = $('#cNombre').value.trim(), tel = $('#cTelefono').value.trim(), serv = $('#cServicio').value, msg = $('#cMensaje').value.trim();
    const text = `Hola GINSA, soy ${nombre} (tel. ${tel}).\nServicio: ${serv}\n\n${msg}`;
    if (channel === 'mail') location.href = `mailto:${EMAIL}?subject=${encodeURIComponent('Solicitud web - ' + serv)}&body=${encodeURIComponent(text)}`;
    else window.open(waLink(text), '_blank');
    toast('¡Gracias! Te responderemos lo antes posible.');
    form.reset();
  });

  /* ---------- Toast ---------- */
  let toastT;
  function toast(t) { const el = $('#toast'); el.textContent = t; el.classList.add('show'); clearTimeout(toastT); toastT = setTimeout(() => el.classList.remove('show'), 3500); }

  /* ---------- Reloj en directo (Jaén) ---------- */
  const clock = $('#liveClock');
  const fmt = new Intl.DateTimeFormat('es-ES', { hour: '2-digit', minute: '2-digit', second: '2-digit', timeZone: 'Europe/Madrid' });
  const updClock = () => { clock.textContent = fmt.format(new Date()); };
  updClock(); setInterval(updClock, 1000);

  /* ---------- Tooltip WhatsApp ---------- */
  const fab = $('.fab-wa');
  setTimeout(() => { fab.classList.add('show-tip'); setTimeout(() => fab.classList.remove('show-tip'), 4000); }, 9000);

  $('#year').textContent = new Date().getFullYear();
  onScroll();
})();
