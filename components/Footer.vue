<template>
  <footer>
    <div class="container">
      <div class="footer-grid">
        <div class="footer-brand">
          <h3>Luis<span>Urrea</span></h3>
          <p>Desarrollador Full Stack & Ingeniero Multimedia. Creando soluciones digitales inovadoras.</p>
        </div>
        <div class="footer-links">
          <h4>Navegacion</h4>
          <NuxtLink to="/">Inicio</NuxtLink>
          <NuxtLink to="/#sobre-mi">Sobre Mi</NuxtLink>
          <NuxtLink to="/#proyectos">Proyectos</NuxtLink>
          <NuxtLink to="/contacto">Contacto</NuxtLink>
        </div>
        <div class="footer-links">
          <h4>Redes</h4>
          <a href="https://github.com/laurreat" target="_blank">GitHub</a>
          <a href="https://www.linkedin.com/in/luis-urrea-019928261/" target="_blank">LinkedIn</a>
          <a href="mailto:luis2005.320@gmail.com">Email</a>
        </div>
      </div>
      <div class="footer-bottom">
        <p>&copy; 2025 Luis Alberto Urrea. Todos los derechos reservados.</p>
        <p>Hecho con <i class="fas fa-heart"></i> y mucho codigo</p>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer-brand h3 span {
  color: var(--accent);
}
</style>
