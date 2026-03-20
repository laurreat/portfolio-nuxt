<template>
  <div class="hero-content">
    <div class="hero-badge">
      <span>Disponible para proyectos</span>
    </div>
    
    <h1 class="hero-title">
      <span class="line"><span>Hola, soy</span></span>
      <span class="line"><span class="gradient">Luis Urrea</span></span>
    </h1>
    
    <div class="hero-subtitle">
      <span>Desarrollador Full Stack</span>
      <span class="dot"></span>
      <span>Ingeniero Multimedia</span>
    </div>
    
    <p class="hero-description">
      Estudiante apasionado del SENA e Ingeniero Multimedia de la UNAD. 
      Creo soluciones digitales inovadoras combinando desarrollo web y multimedia.
    </p>
    
    <div class="hero-buttons">
      <a href="#proyectos" class="btn btn-primary">
        Ver Proyectos <i class="fas fa-arrow-right"></i>
      </a>
      <NuxtLink to="/contacto" class="btn btn-secondary">
        Contactar <i class="fas fa-envelope"></i>
      </NuxtLink>
    </div>
    
    <div class="scroll-indicator">
      <span>Scroll</span>
      <i class="fas fa-chevron-down"></i>
    </div>
  </div>
</template>

<style scoped>
.hero-title {
  font-family: 'Space Grotesk', sans-serif;
}
</style>
