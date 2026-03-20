<template>
  <header>
    <div class="logo">
      <NuxtLink to="/">Luis<span>Urrea</span></NuxtLink>
    </div>
    <nav>
      <NuxtLink to="/#sobre-mi">Sobre Mi</NuxtLink>
      <NuxtLink to="/#habilidades">Habilidades</NuxtLink>
      <NuxtLink to="/#proyectos">Proyectos</NuxtLink>
      <NuxtLink to="/contacto">Contacto</NuxtLink>
      <a href="https://github.com/laurreat" target="_blank" class="github-btn">
        <i class="fab fa-github"></i> GitHub
      </a>
    </nav>
  </header>
</template>

<style scoped>
.logo a {
  font-size: 1.25rem;
  font-weight: 700;
  letter-spacing: -0.02em;
}

.logo span {
  color: var(--accent);
}
</style>
