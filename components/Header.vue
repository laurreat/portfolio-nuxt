<template>
  <header ref="header">
    <div class="nav-container">
      <div class="logo">
        <NuxtLink to="/">Luis<span>Urrea</span></NuxtLink>
      </div>
      
      <nav class="nav-links" ref="navLinks">
        <NuxtLink to="/#sobre-mi" class="nav-item" @click="closeMenu">Sobre Mi</NuxtLink>
        <NuxtLink to="/#habilidades" class="nav-item" @click="closeMenu">Habilidades</NuxtLink>
        <NuxtLink to="/#proyectos" class="nav-item" @click="closeMenu">Proyectos</NuxtLink>
        <NuxtLink to="/contacto" class="nav-item" @click="closeMenu">Contacto</NuxtLink>
        <a href="https://github.com/laurreat" target="_blank" class="nav-cta" @click="closeMenu">
          <i class="fab fa-github"></i> GitHub
        </a>
      </nav>
      
      <div class="menu-toggle" :class="{ active: isMenuOpen }" @click="toggleMenu">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
const header = ref<HTMLElement | null>(null)
const navLinks = ref<HTMLElement | null>(null)
const isMenuOpen = ref(false)

function toggleMenu() {
  isMenuOpen.value = !isMenuOpen.value
  navLinks.value?.classList.toggle('active', isMenuOpen.value)
}

function closeMenu() {
  isMenuOpen.value = false
  navLinks.value?.classList.remove('active')
}

onMounted(() => {
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.value?.classList.add('scrolled')
    } else {
      header.value?.classList.remove('scrolled')
    }
  })
})
</script>
