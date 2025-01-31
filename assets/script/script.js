const speciesData = [
  {
    name: "Riccia atlantica",
    scientificName: "Riccia atlantica Sérgio & Perold",
    status: "Perigo",
    description: "Espécie endêmica encontrada em áreas húmidas de altitude.",
    habitat: "Áreas montanhosas húmidas acima de 800m de altitude",
    distribution: "Santo Antão, Fogo",
    ecology: "Importante na retenção de água e prevenção da erosão do solo",
    pdfUrl: "https://catnee.cv/docs/riccia_atlantica.pdf",
    imgUrl: "/assets/img/Fotos-briofitas-ciclo-carbono-1.png"
  },
  {
    name: "Bryum canariense",
    scientificName: "Bryum canariense Brid.",
    status: "Vulneravel",
    description: "Musgo encontrado em rochas vulcânicas em altitude média.",
    habitat: "Rochas vulcânicas entre 400-700m de altitude",
    distribution: "São Vicente, Santiago",
    ecology: "Pioneira na colonização de rochas, contribuindo para formação de solo",
    pdfUrl: "https://catnee.cv/docs/bryum_canariense.pdf",
    imgUrl: "data:image/jpeg;base64,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"
  },
  {
    name: "Tortula bogosica",
    scientificName: "Tortula bogosica (Müll.Hal.) R.H.Zander",
    status: "Estavel",
    description: "Espécie rara encontrada apenas em algumas localidades montanhosas.",
    habitat: "Fendas de rochas em áreas montanhosas",
    distribution: "Santo Antão",
    ecology: "Indicadora de qualidade ambiental em ecossistemas montanhosos",
    pdfUrl: "https://catnee.cv/docs/tortula_bogosica.pdf",
    imgUrl: "/assets/img/Fotos-briofitas-ciclo-carbono-1.png"
  },
  {
    name: "Bryum canariense",
    scientificName: "Bryum canariense Brid.",
    status: "Vulneravel",
    description: "Musgo encontrado em rochas vulcânicas em altitude média.",
    habitat: "Rochas vulcânicas entre 400-700m de altitude",
    distribution: "São Vicente, Santiago",
    ecology: "Pioneira na colonização de rochas, contribuindo para formação de solo",
    pdfUrl: "https://catnee.cv/docs/bryum_canariense.pdf",
    imgUrl: "/assets/img/Fotos-briofitas-ciclo-carbono-1.png"
  },
  {
    "name": "Fissidens fontanus",
    "scientificName": "Fissidens fontanus (Bach. Pyl.) Steud.",
    "status": "Pouco Preocupante",
    "description": "Musgo aquático que cresce em águas doces, fixando-se em pedras submersas.",
    "habitat": "Riachos e fontes de água doce",
    "distribution": "Santo Antão, Santiago",
    "ecology": "Ajuda na estabilização de sedimentos em ambientes aquáticos.",
    "pdfUrl": "https://catnee.cv/docs/fissidens_fontanus.pdf",
    "imgUrl": "https://upload.wikimedia.org/wikipedia/commons/8/89/Fissidens_fontanus.jpeg"
  },
  {
    "name": "Tortella flavovirens",
    "scientificName": "Tortella flavovirens (Bruch) Broth.",
    "status": "Em Perigo",
    "description": "Musgo calcícola encontrado em solos alcalinos próximos à costa.",
    "habitat": "Dunas calcárias e falésias costeiras",
    "distribution": "Boa Vista, Sal",
    "ecology": "Resistente a altas salinidades, ajuda na fixação de dunas.",
    "pdfUrl": "https://catnee.cv/docs/tortella_flavovirens.pdf",
    "imgUrl": "https://bryophyteportal.org/portal/imagelib/imglib/thumbs/Tortella_flavovirens.jpeg"
  },
  {
    name: "Barbula indica",
    scientificName: "Barbula indica (Hook.) Spreng.",
    status: "Vulnerável",
    description: "Musgo que cresce em superfícies expostas a altos níveis de radiação solar.",
    habitat: "Rochas expostas e solos secos",
    distribution: "Maio, São Nicolau",
    ecology: "Adapta-se bem a condições áridas, auxiliando na retenção de umidade.",
    pdfUrl: "https://catnee.cv/docs/barbula_indica.pdf",
    imgUrl: "https://bryophyteportal.org/portal/imagelib/imglib/thumbs/Barbula_indica.jpeg"
  },
  {
    name: "Campylopus pilifer",
    scientificName: "Campylopus pilifer (Hedw.) Brid.",
    status: "Quase Ameaçado",
    description: "Musgo característico de substratos arenosos e solos pobres.",
    habitat: "Dunas e áreas degradadas",
    distribution: "Santo Antão, Fogo",
    ecology: "Importante na estabilização de solos frágeis e recuperação de áreas degradadas.",
    pdfUrl: "https://catnee.cv/docs/campylopus_pilifer.pdf",
    "imgUrl": "https://upload.wikimedia.org/wikipedia/commons/6/60/Campylopus_pilifer.jpeg"
  },
  {
    "name": "Riccia cavernosa",
    "scientificName": "Riccia cavernosa Hoffm.",
    "status": "Em Perigo Crítico",
    "description": "Hepática talosa encontrada em solos sazonais úmidos.",
    "habitat": "Solo argiloso em zonas húmidas temporárias",
    "distribution": "Santiago, Fogo",
    "ecology": "Contribui para a formação de matéria orgânica no solo.",
    "pdfUrl": "https://catnee.cv/docs/riccia_cavernosa.pdf",
    "imgUrl": "https://upload.wikimedia.org/wikipedia/commons/3/38/Riccia_cavernosa.jpeg"
  }
];

function createSpeciesCard(species) {
  const statusClass = `status-${species.status.toLowerCase().replace(/\s+/g, '-')}`;

  return `
    <div class="species-card" 
         onclick="showSpeciesDetail('${species.name}')"
         role="button"
         tabindex="0"
         aria-label="Detalhes de ${species.name}">
      <div  style="width: 100%; height: 100%; background-image: url('${species.imgUrl}'); background-size: cover; background-position: center;"
 class="species-image">
      </div>
      <div class="species-name-overlay">
        <h3>${species.name}</h3>
      </div>
      <div class="species-info">
        <h3>${species.name}</h3>
        <span class="scientific-name">${species.scientificName}</span>
        <p class="description">${species.description}</p>
        <p><strong>Habitat:</strong> ${species.habitat}</p>
        <p><strong>Distribuição:</strong> ${species.distribution}</p>
        <span class="conservation-status ${statusClass}">${species.status}</span>
        <a style="color: rgba(0, 0, 255, 0.771);"><strong>More info on Click...</strong></a>
      </div>
    </div>
  `;
}

function showSpeciesDetail(speciesName) {
  const species = speciesData.find(s => s.name === speciesName);
  const modal = document.getElementById('speciesModal');
  const modalContent = document.getElementById('modalContent');

  modalContent.innerHTML = `
    <div id="speciebg" style="background-image: url('${species.imgUrl}');"></div>
    <div id="corp">
    <h2>${species.name}</h2>
    <h3><em>${species.scientificName}</em></h3>
    <p><strong>Status:</strong> ${species.status}</p>
    <p><strong>Habitat:</strong> ${species.habitat}</p>
    <p><strong>Distribuição:</strong> ${species.distribution}</p>
    <p><strong>Relevância Ecológica:</strong> ${species.ecology}</p>
    <p><strong>Descrição:</strong> ${species.description}</p>
    <a href="${species.pdfUrl}" class="download-btn" target="_blank">
      <i class="fas fa-download"></i> Download PDF
    </a></div>
  `;

  modal.style.display = 'block';
}

document.getElementById('closeModal').addEventListener('click', () => {
  document.getElementById('speciesModal').style.display = 'none';
});

document.getElementById('searchInput').addEventListener('input', (e) => {
  const searchTerm = e.target.value.toLowerCase();
  const filteredSpecies = speciesData.filter(species =>
    species.name.toLowerCase().includes(searchTerm) ||
    species.scientificName.toLowerCase().includes(searchTerm) ||
    species.description.toLowerCase().includes(searchTerm) || species.distribution.toLocaleLowerCase().includes(searchTerm)
  );
  renderSpecies(filteredSpecies);
});

const menuToggle = document.getElementById('menuToggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
  const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';
  menuToggle.setAttribute('aria-expanded', !isExpanded);
  navLinks.classList.toggle('active');
});

// Intersection Observer for fade-in animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

// Observe all fade-in elements
document.querySelectorAll('.fade-in').forEach(element => {
  observer.observe(element);
});

// Improved keyboard navigation
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    const modal = document.getElementById('speciesModal');
    if (modal.style.display === 'block') {
      modal.style.display = 'none';
    }
  }

  if (e.key === 'Enter' && e.target.classList.contains('species-card')) {
    const speciesName = e.target.querySelector('h3').textContent;
    showSpeciesDetail(speciesName);
  }
});

function renderSpecies(speciesList) {
  const grid = document.getElementById('speciesGrid');
  grid.innerHTML = speciesList.map(species => createSpeciesCard(species)).join('');
}

// Add filter event listeners
document.querySelectorAll('.filter-btn').forEach(btn => {
  btn.addEventListener('click', (e) => {
    // Update active button
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    e.target.classList.add('active');

    const filter = e.target.dataset.filter;
    const filteredSpecies = filter === 'all'
      ? speciesData
      : speciesData.filter(species =>
        species.status.toLowerCase().includes(filter.toLowerCase())
      );

    renderSpecies(filteredSpecies);
  });
});

// Smooth scroll behavior for navigation links
document.querySelectorAll('.nav-links a').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const sectionId = this.getAttribute('href');
    const section = document.querySelector(sectionId);

    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });

      // Close mobile menu if open
      if (navLinks.classList.contains('active')) {
        navLinks.classList.remove('active');
        menuToggle.setAttribute('aria-expanded', 'false');
      }
    }
  });
});

// Add active state to nav links based on scroll position
window.addEventListener('scroll', () => {
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('.nav-links a');

  let currentSection = '';

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100;
    const sectionHeight = section.clientHeight;
    if (pageYOffset >= sectionTop && pageYOffset < sectionTop + sectionHeight) {
      currentSection = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href').substring(1) === currentSection) {
      link.classList.add('active');
    }
  });
});

// Close modal when clicking outside
window.onclick = function (event) {
  const modal = document.getElementById('speciesModal');
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

// Handle scroll events for navbar background change
window.addEventListener('scroll', () => {
  const navbar = document.querySelector('.navbar');
  if (window.scrollY > 50) { // Change this value to adjust when the background appears
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// Initial render
renderSpecies(speciesData);
