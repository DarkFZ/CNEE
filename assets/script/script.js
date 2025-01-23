const speciesData = [
  {
    name: "Riccia atlantica",
    scientificName: "Riccia atlantica Sérgio & Perold",
    status: "Perigo",
    description: "Espécie endêmica encontrada em áreas húmidas de altitude.",
    habitat: "Áreas montanhosas húmidas acima de 800m de altitude",
    distribution: "Santo Antão, Fogo",
    ecology: "Importante na retenção de água e prevenção da erosão do solo",
    pdfUrl: "https://catnee.cv/docs/riccia_atlantica.pdf"
  },
  {
    name: "Bryum canariense",
    scientificName: "Bryum canariense Brid.",
    status: "Vulneravel",
    description: "Musgo encontrado em rochas vulcânicas em altitude média.",
    habitat: "Rochas vulcânicas entre 400-700m de altitude",
    distribution: "São Vicente, Santiago",
    ecology: "Pioneira na colonização de rochas, contribuindo para formação de solo",
    pdfUrl: "https://catnee.cv/docs/bryum_canariense.pdf"
  },
  {
    name: "Tortula bogosica",
    scientificName: "Tortula bogosica (Müll.Hal.) R.H.Zander",
    status: "Estavel",
    description: "Espécie rara encontrada apenas em algumas localidades montanhosas.",
    habitat: "Fendas de rochas em áreas montanhosas",
    distribution: "Santo Antão",
    ecology: "Indicadora de qualidade ambiental em ecossistemas montanhosos",
    pdfUrl: "https://catnee.cv/docs/tortula_bogosica.pdf"
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
      <div  style="width: 100%; height: 100%; background-image: url(\'/assets/img/Fotos-briofitas-ciclo-carbono-1.png\'); background-size: cover; background-position: center;"
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
    <h2>${species.name}</h2>
    <h3><em>${species.scientificName}</em></h3>
    <p><strong>Status:</strong> ${species.status}</p>
    <p><strong>Habitat:</strong> ${species.habitat}</p>
    <p><strong>Distribuição:</strong> ${species.distribution}</p>
    <p><strong>Relevância Ecológica:</strong> ${species.ecology}</p>
    <p><strong>Descrição:</strong> ${species.description}</p>
    <a href="${species.pdfUrl}" class="download-btn" target="_blank">
      <i class="fas fa-download"></i> Download PDF
    </a>
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
    species.description.toLowerCase().includes(searchTerm)
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
  anchor.addEventListener('click', function(e) {
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
window.onclick = function(event) {
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
