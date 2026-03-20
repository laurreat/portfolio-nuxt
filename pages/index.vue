<template>
  <div>
    <section id="inicio" class="hero">
      <div class="hero-bg">
        <div class="hero-gradient hero-gradient-1"></div>
        <div class="hero-gradient hero-gradient-2"></div>
        <div class="hero-gradient hero-gradient-3"></div>
        <div class="hero-grid"></div>
      </div>
      <div class="container">
        <Hero />
      </div>
    </section>

    <section id="sobre-mi" class="reveal">
      <div class="container">
        <div class="section-header">
          <span class="section-label">Sobre Mi</span>
          <h2 class="section-title">Desarrollador Full Stack y Ingeniero Multimedia</h2>
          <p class="section-desc">
            Combino habilidades tecnicas con vision creativa para desarrollar aplicaciones web robustas 
            y experiencias de usuario excepcionales.
          </p>
        </div>

        <div class="about-grid">
          <div class="about-text reveal">
            <h3>Mi Trayectoria</h3>
            <p>
              Estudiante de <strong>Ingenieria Multimedia</strong> en la UNAD y 
              <strong>Analisis y Desarrollo de Software</strong> en el SENA. Mi enfoque se centra 
              en crear soluciones digitales que resuelven problemas reales.
            </p>
            <p>
              Con experiencia en desarrollo frontend y backend, me especializo en construir 
              aplicaciones web escalables y modernas. Mi pasion por la tecnologia se combina 
              con un compromiso constante por aprender nuevas herramientas y metodologias.
            </p>

            <div class="about-stats reveal">
              <div class="stat-box">
                <div class="stat-number">15+</div>
                <div class="stat-label">Proyectos</div>
              </div>
              <div class="stat-box">
                <div class="stat-number">1+</div>
                <div class="stat-label">Ano de Experiencia</div>
              </div>
              <div class="stat-box">
                <div class="stat-number">100%</div>
                <div class="stat-label">Entregas</div>
              </div>
            </div>
          </div>

          <div class="about-image reveal">
            <div class="about-backdrop"></div>
            <img src="/brand/luKshaDEV_Banner_Perfil.png" alt="luKshaDEV" class="about-brand-img" />
          </div>
        </div>

        <div class="specialties-grid">
          <div class="specialty-card reveal">
            <div class="specialty-icon">
              <i class="fas fa-code"></i>
            </div>
            <h4>Desarrollo Frontend</h4>
            <p>Interfaces modernas y responsivas con HTML5, CSS3, JavaScript y frameworks actuales.</p>
            <div class="tech-tags">
              <span class="tech-tag">HTML5</span>
              <span class="tech-tag">CSS3</span>
              <span class="tech-tag">JavaScript</span>
              <span class="tech-tag">Bootstrap</span>
            </div>
          </div>

          <div class="specialty-card reveal">
            <div class="specialty-icon">
              <i class="fas fa-server"></i>
            </div>
            <h4>Desarrollo Backend</h4>
            <p>APIs robustas y sistemas escalables con PHP, Laravel, MySQL y tecnologias .NET.</p>
            <div class="tech-tags">
              <span class="tech-tag">PHP</span>
              <span class="tech-tag">Laravel</span>
              <span class="tech-tag">MySQL</span>
              <span class="tech-tag">C#</span>
            </div>
          </div>

          <div class="specialty-card reveal">
            <div class="specialty-icon">
              <i class="fas fa-gamepad"></i>
            </div>
            <h4>Desarrollo Multimedia</h4>
            <p>Experiencias interactivas y juegos utilizando Unity y Godot con enfoque en UX.</p>
            <div class="tech-tags">
              <span class="tech-tag">Unity</span>
              <span class="tech-tag">Godot</span>
              <span class="tech-tag">C#</span>
            </div>
          </div>

          <div class="specialty-card reveal">
            <div class="specialty-icon">
              <i class="fas fa-shield-halved"></i>
            </div>
            <h4>Ciberseguridad</h4>
            <p>Mejores practicas de seguridad, analisis de vulnerabilidades y proteccion de datos.</p>
            <div class="tech-tags">
              <span class="tech-tag">OWASP</span>
              <span class="tech-tag">Encryption</span>
            </div>
          </div>
        </div>

        <div class="philosophy reveal">
          <h3><i class="fas fa-lightbulb"></i> Mi Filosofia</h3>
          <blockquote>
            "Para mi, programar no es solo escribir codigo, sino transformar ideas en soluciones 
            que faciliten la vida de las personas."
          </blockquote>
          <div class="philosophy-grid">
            <div class="philosophy-item">
              <i class="fas fa-rocket"></i>
              <span>Innovacion Constante</span>
            </div>
            <div class="philosophy-item">
              <i class="fas fa-users"></i>
              <span>Enfoque en Usuario</span>
            </div>
            <div class="philosophy-item">
              <i class="fas fa-code"></i>
              <span>Codigo Limpio</span>
            </div>
            <div class="philosophy-item">
              <i class="fas fa-handshake"></i>
              <span>Trabajo en Equipo</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="habilidades" class="reveal">
      <div class="container">
        <div class="section-header">
          <span class="section-label">Habilidades</span>
          <h2 class="section-title">Tecnologias que domino</h2>
        </div>

        <div class="skills-grid">
          <div class="skill-category reveal">
            <h3><i class="fas fa-palette"></i> Frontend</h3>
            <div class="skill-list">
              <div class="skill-item">
                <i class="fab fa-html5"></i>
                <span>HTML5</span>
              </div>
              <div class="skill-item">
                <i class="fab fa-css3-alt"></i>
                <span>CSS3</span>
              </div>
              <div class="skill-item">
                <i class="fab fa-js"></i>
                <span>JavaScript</span>
              </div>
              <div class="skill-item">
                <i class="fab fa-bootstrap"></i>
                <span>Bootstrap</span>
              </div>
            </div>
          </div>

          <div class="skill-category reveal">
            <h3><i class="fas fa-database"></i> Backend</h3>
            <div class="skill-list">
              <div class="skill-item">
                <i class="fab fa-php"></i>
                <span>PHP</span>
              </div>
              <div class="skill-item">
                <i class="fas fa-database"></i>
                <span>MySQL</span>
              </div>
              <div class="skill-item">
                <i class="fab fa-laravel"></i>
                <span>Laravel</span>
              </div>
              <div class="skill-item">
                <i class="fas fa-code"></i>
                <span>C# .NET</span>
              </div>
            </div>
          </div>

          <div class="skill-category reveal">
            <h3><i class="fas fa-tools"></i> Herramientas</h3>
            <div class="skill-list">
              <div class="skill-item">
                <i class="fab fa-figma"></i>
                <span>Figma</span>
              </div>
              <div class="skill-item">
                <i class="fab fa-git-alt"></i>
                <span>Git</span>
              </div>
              <div class="skill-item">
                <i class="fab fa-unity"></i>
                <span>Unity</span>
              </div>
              <div class="skill-item">
                <i class="fab fa-github"></i>
                <span>GitHub</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="proyectos" class="reveal">
      <div class="container">
        <div class="section-header">
          <span class="section-label">Proyectos</span>
          <h2 class="section-title">Trabajos Destacados</h2>
          <p class="section-desc">Una seleccion de mis mejores proyectos que demuestran mis habilidades tecnicas.</p>
        </div>

        <div class="projects-grid">
          <ProjectCard 
            v-for="project in projects" 
            :key="project.id" 
            :project="project"
            class="reveal"
          />
        </div>

        <div class="projects-cta reveal">
          <h3>Quieres ver mas proyectos?</h3>
          <p>Explora mi repositorio completo en GitHub</p>
          <a href="https://github.com/laurreat" target="_blank" class="btn btn-primary">
            <i class="fab fa-github"></i> Ver GitHub
          </a>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
const { data: projects } = await useAsyncData('projects', async () => {
  try {
    const { getProjects } = await import('~/composables/useSupabase')
    return await getProjects()
  } catch (e) {
    return [
      { id: 1, title: 'Sistema de Gestion de Inventarios', description: 'Aplicacion web completa para gestion de inventarios con PHP y MySQL', technologies: 'PHP,Laravel,MySQL,Bootstrap', demo_url: '#', repo_url: 'https://github.com/laurreat', featured: true, created_at: '2024-09-01' },
      { id: 2, title: 'APP Biblica', description: 'Aplicacion con versiculos diarios y devocionales', technologies: 'JavaScript,HTML5,CSS3', demo_url: '#', repo_url: 'https://github.com/laurreat', featured: false, created_at: '2024-08-15' },
      { id: 3, title: 'Red de Ventas', description: 'Sistema de gestion de ventas para pequenas empresas', technologies: 'PHP,MySQL,JavaScript', demo_url: '#', repo_url: 'https://github.com/laurreat', featured: true, created_at: '2024-07-20' },
    ]
  }
})

function handleImageError(e: Event) {
  const img = e.target as HTMLImageElement
  img.src = 'https://ui-avatars.com/api/?name=Luis+Urrea&background=6366f1&color=fff&size=400'
}
</script>
