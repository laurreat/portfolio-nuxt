<template>
  <div class="hero-content">
    <div class="profile-image">
      <img src="/img.jpeg" alt="Luis Alberto Urrea" @error="handleImageError" />
    </div>
    <div class="hero-badge">Disponible para proyectos</div>
    <h1>
      Hola, soy <span class="gradient">Luis Urrea</span><br />
      Desarrollador Full Stack
    </h1>
    <p class="hero-subtitle">
      <i class="fas fa-code"></i>
      <span>Ingeniero Multimedia</span>
    </p>
    <p class="hero-description">
      Estudiante de Ingenieria Multimedia en la UNAD y Analisis y Desarrollo de Software en el SENA. 
      Creo soluciones digitales innovadoras combinando desarrollo web y multimedia.
    </p>
    <div class="hero-cta">
      <a href="#proyectos" class="btn btn-primary">
        <i class="fas fa-folder-open"></i> Ver Proyectos
      </a>
      <NuxtLink to="/contacto" class="btn btn-secondary">
        <i class="fas fa-envelope"></i> Contactar
      </NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
function handleImageError(e: Event) {
  const img = e.target as HTMLImageElement
  img.src = 'https://ui-avatars.com/api/?name=Luis+Urrea&background=3b82f6&color=fff&size=200'
}
</script>
