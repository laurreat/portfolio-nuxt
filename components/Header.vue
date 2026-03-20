<template>
  <header>
    <div class="container">
      <div class="logo"><span>Luis Urrea</span></div>
      <nav>
        <NuxtLink to="/#inicio">Inicio</NuxtLink>
        <NuxtLink to="/#sobre-mi">Sobre Mí</NuxtLink>
        <NuxtLink to="/#habilidades">Habilidades</NuxtLink>
        <NuxtLink to="/#proyectos">Proyectos</NuxtLink>
        <NuxtLink to="/contacto">Contacto</NuxtLink>
        <a href="https://github.com/laurreat" target="_blank" class="github-link">
          <i class="fab fa-github"></i> GitHub
        </a>
      </nav>
    </div>
  </header>
</template>

<style scoped>
header .container {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
