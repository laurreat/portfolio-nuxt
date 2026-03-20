<template>
  <footer>
    <div class="container">
      <div class="footer-grid">
        <div class="footer-brand">
          <img src="/brand/luKshaDEV_Logo_Perfil.png" alt="luKshaDEV" class="footer-logo" />
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
        <p>&copy; 2025 luKshaDEV. Todos los derechos reservados.</p>
        <p>Hecho con <i class="fas fa-heart"></i> y mucho codigo</p>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer-logo {
  height: 50px;
  margin-bottom: 16px;
  filter: brightness(0) invert(1);
}
</style>
