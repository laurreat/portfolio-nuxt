<template>
  <div>
    <section id="inicio" class="hero">
      <div class="hero-content">
        <div class="profile-image">
          <img :src="profileImage" alt="Luis Alberto Urrea" @error="handleImageError" />
        </div>
        <h1 class="hero-title">¡Hola, soy Luis Alberto Urrea! 👋</h1>
        <p class="hero-subtitle">
          <i class="fas fa-code"></i> Desarrollador Full Stack & <i class="fas fa-gamepad"></i> Ingeniero Multimedia
        </p>
        <p class="hero-description">
          Estudiante apasionado del SENA e Ingeniero Multimedia de la UNAD. Creo soluciones digitales innovadoras combinando desarrollo web y multimedia.
        </p>
        <div class="cta-buttons">
          <a href="#proyectos" class="cta-primary"><i class="fas fa-rocket"></i> Ver Proyectos</a>
          <NuxtLink to="/contacto" class="cta-secondary"><i class="fas fa-envelope"></i> Contáctame</NuxtLink>
        </div>
      </div>
    </section>

    <section id="sobre-mi">
      <div class="container">
        <h2 class="section-title"><i class="fas fa-user-tie"></i> Sobre Mí</h2>
        <div class="about-hero">
          <div class="about-text">
            <h3 class="about-subtitle">Desarrollador Full Stack & Ingeniero Multimedia</h3>
            <p class="about-description">
              Soy un desarrollador apasionado en proceso de aprendizaje con más de <strong>1 año de experiencia</strong> creando soluciones web innovadoras.
              Mi enfoque combina habilidades técnicas sólidas con una visión creativa, permitiéndome desarrollar aplicaciones
              web robustas y experiencias de usuario excepcionales.
            </p>
            <p class="about-description">
              Actualmente estudio <strong>Ingeniería Multimedia</strong> en la UNAD y <strong>Análisis y Desarrollo de Software</strong> en el SENA,
              lo que me proporciona una base sólida tanto en tecnologías emergentes como en fundamentos de programación.
            </p>
            <div class="stats-grid">
              <div class="stat-item">
                <div class="stat-number">15+</div>
                <div class="stat-label">Proyectos Completados</div>
              </div>
              <div class="stat-item">
                <div class="stat-number">1+</div>
                <div class="stat-label">Años de Experiencia</div>
              </div>
              <div class="stat-item">
                <div class="stat-number">8+</div>
                <div class="stat-label">Tecnologías Dominadas</div>
              </div>
              <div class="stat-item">
                <div class="stat-number">100%</div>
                <div class="stat-label">Proyectos Entregados</div>
              </div>
            </div>
          </div>
          <div class="about-image-container">
            <div class="about-image-wrapper">
              <img :src="profileImage" alt="Luis Alberto Urrea - Developer" class="about-image" @error="handleImageError" />
              <div class="image-overlay"></div>
              <div class="floating-icons">
                <i class="fab fa-js-square"></i>
                <i class="fab fa-php"></i>
                <i class="fab fa-react"></i>
                <i class="fas fa-database"></i>
              </div>
            </div>
          </div>
        </div>

        <div class="specialties-grid">
          <div class="specialty-card">
            <div class="specialty-icon"><i class="fas fa-code"></i></div>
            <h4>Desarrollo Frontend</h4>
            <p>Especializado en crear interfaces modernas y responsivas con HTML5, CSS3, JavaScript y frameworks como Bootstrap.</p>
            <div class="specialty-tech">
              <span class="tech-tag">HTML5</span>
              <span class="tech-tag">CSS3</span>
              <span class="tech-tag">JavaScript</span>
              <span class="tech-tag">Bootstrap</span>
            </div>
          </div>
          <div class="specialty-card">
            <div class="specialty-icon"><i class="fas fa-server"></i></div>
            <h4>Desarrollo Backend</h4>
            <p>Construcción de APIs robustas y sistemas escalables utilizando PHP, Laravel, .NET y MySQL.</p>
            <div class="specialty-tech">
              <span class="tech-tag">PHP</span>
              <span class="tech-tag">Laravel</span>
              <span class="tech-tag">MySQL</span>
              <span class="tech-tag">C# .NET</span>
            </div>
          </div>
          <div class="specialty-card">
            <div class="specialty-icon"><i class="fas fa-gamepad"></i></div>
            <h4>Desarrollo Multimedia</h4>
            <p>Creación de experiencias interactivas y juegos utilizando Unity y Godot.</p>
            <div class="specialty-tech">
              <span class="tech-tag">Unity</span>
              <span class="tech-tag">Godot</span>
              <span class="tech-tag">C#</span>
              <span class="tech-tag">Game Design</span>
            </div>
          </div>
          <div class="specialty-card">
            <div class="specialty-icon"><i class="fas fa-shield-alt"></i></div>
            <h4>Ciberseguridad</h4>
            <p>Implementación de mejores prácticas de seguridad en aplicaciones web.</p>
            <div class="specialty-tech">
              <span class="tech-tag">Security</span>
              <span class="tech-tag">Penetration Testing</span>
              <span class="tech-tag">OWASP</span>
              <span class="tech-tag">Encryption</span>
            </div>
          </div>
        </div>

        <div class="philosophy-section">
          <h3 class="philosophy-title"><i class="fas fa-lightbulb"></i> Mi Filosofía de Desarrollo</h3>
          <div class="philosophy-content">
            <blockquote class="philosophy-quote">
              "Para mí, programar no es solo escribir código, sino transformar ideas en soluciones que faciliten la vida de las personas. Creo en un desarrollo con propósito, donde cada proyecto aporte valor y deje huella positiva."
            </blockquote>
            <div class="philosophy-principles">
              <div class="principle"><i class="fas fa-rocket"></i><span>Innovación Constante</span></div>
              <div class="principle"><i class="fas fa-users"></i><span>Enfoque en el Usuario</span></div>
              <div class="principle"><i class="fas fa-code-branch"></i><span>Código Limpio</span></div>
              <div class="principle"><i class="fas fa-handshake"></i><span>Trabajo en Equipo</span></div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="habilidades">
      <h2 class="section-title">🚀 Habilidades Técnicas</h2>
      <div class="container">
        <div class="skills-grid">
          <div class="skill-category">
            <h3><i class="fas fa-palette"></i> Frontend</h3>
            <div class="skill-item"><i class="fab fa-html5"></i> HTML5</div>
            <div class="skill-item"><i class="fab fa-css3-alt"></i> CSS3</div>
            <div class="skill-item"><i class="fab fa-js"></i> JavaScript</div>
            <div class="skill-item"><i class="fab fa-bootstrap"></i> Bootstrap</div>
          </div>
          <div class="skill-category">
            <h3><i class="fas fa-server"></i> Backend</h3>
            <div class="skill-item"><i class="fab fa-php"></i> PHP</div>
            <div class="skill-item"><i class="fas fa-database"></i> MySQL</div>
            <div class="skill-item"><i class="fab fa-laravel"></i> Laravel</div>
            <div class="skill-item"><i class="fas fa-code"></i> C# .NET</div>
          </div>
          <div class="skill-category">
            <h3><i class="fas fa-tools"></i> Diseño & Herramientas</h3>
            <div class="skill-item"><i class="fab fa-figma"></i> Figma</div>
            <div class="skill-item"><i class="fab fa-git-alt"></i> Git & GitHub</div>
            <div class="skill-item"><i class="fab fa-unity"></i> Unity</div>
            <div class="skill-item"><i class="fas fa-shield-alt"></i> Ciberseguridad</div>
          </div>
        </div>
      </div>
    </section>

    <section id="proyectos">
      <div class="container">
        <h2 class="section-title"><i class="fas fa-laptop-code"></i> Proyectos Destacados</h2>
        <p class="section-subtitle">Una selección de mis mejores trabajos que demuestran mis habilidades técnicas y creatividad</p>
        <div class="projects-grid">
          <ProjectCard 
            v-for="project in projects" 
            :key="project.id" 
            :project="project"
            @open-modal="openProjectModal"
          />
        </div>
        <div class="projects-cta">
          <h3>¿Interesado en ver más proyectos?</h3>
          <p>Explora mi repositorio completo en GitHub con más proyectos adicionales</p>
          <a href="https://github.com/laurreat" target="_blank" class="btn-github-main">
            <i class="fab fa-github"></i> Explorar GitHub <i class="fas fa-arrow-right"></i>
          </a>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
const { data: projects, error } = await useAsyncData('projects', async () => {
  try {
    const { getProjects } = await import('~/composables/useSupabase')
    return await getProjects()
  } catch (e) {
    console.warn('Supabase no disponible, usando datos de ejemplo')
    return [
      { id: 1, title: 'Sistema de Gestión de Inventarios', description: 'Aplicación web completa para gestión de inventarios con PHP y MySQL', technologies: 'PHP,Laravel,MySQL,Bootstrap', demo_url: '#', repo_url: 'https://github.com/laurreat', featured: true, created_at: '2024-09-01' },
      { id: 2, title: 'APP Bíblica', description: 'Aplicación móvil con versículos y devocionales diarios', technologies: 'JavaScript,HTML5,CSS3', demo_url: '#', repo_url: 'https://github.com/laurreat', featured: false, created_at: '2024-08-15' },
      { id: 3, title: 'Red de Ventas', description: 'Sistema de gestión de ventas y clientes para pequeñas empresas', technologies: 'PHP,MySQL,JavaScript', demo_url: '#', repo_url: 'https://github.com/laurreat', featured: true, created_at: '2024-07-20' },
    ]
  }
})

const profileImage = '/img.jpeg'

function handleImageError(e: Event) {
  const img = e.target as HTMLImageElement
  img.src = 'https://via.placeholder.com/200x200/00d4ff/ffffff?text=LU'
}

function openProjectModal(project: any) {
  console.log('Abrir modal:', project)
}
</script>
