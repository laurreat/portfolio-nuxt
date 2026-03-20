<template>
  <div class="hero-content">
    <div class="hero-badge">
      <span>Disponible para proyectos</span>
    </div>
    
    <div class="hero-profile">
      <div class="hero-image-container">
        <img src="/brand/luKshaDEV_Banner_Perfil.png" alt="luKshaDEV Banner" class="hero-banner" />
        <div class="hero-image-overlay"></div>
      </div>
    </div>
    
    <h1 class="hero-title">
      <span class="line"><span>Hola, soy</span></span>
      <span class="line"><span class="gradient">luKshaDEV</span></span>
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

.hero-profile {
  margin-bottom: 40px;
}

.hero-image-container {
  position: relative;
  width: 180px;
  height: 180px;
  margin: 0 auto;
  border-radius: 50%;
  overflow: hidden;
  border: 3px solid var(--accent);
  box-shadow: 0 0 60px rgba(99, 102, 241, 0.3);
}

.hero-banner {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.hero-image-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, rgba(99, 102, 241, 0.2) 0%, transparent 50%);
}
</style>
