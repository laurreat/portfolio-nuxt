<template>
  <div class="app">
    <div class="cursor" ref="cursor"></div>
    <div class="cursor-dot" ref="cursorDot"></div>
    
    <div class="loader" ref="loader">
      <div class="loader-content">
        <div class="loader-logo">LU</div>
        <div class="loader-bar">
          <div class="loader-progress"></div>
        </div>
      </div>
    </div>
    
    <canvas id="particles" ref="particlesCanvas"></canvas>
    <Header />
    <main>
      <NuxtPage />
    </main>
    <Footer />
  </div>
</template>

<script setup lang="ts">
const cursor = ref<HTMLDivElement | null>(null)
const cursorDot = ref<HTMLDivElement | null>(null)
const particlesCanvas = ref<HTMLCanvasElement | null>(null)
const loader = ref<HTMLDivElement | null>(null)

let mouseX = 0
let mouseY = 0
let cursorX = 0
let cursorY = 0

onMounted(() => {
  setTimeout(() => {
    if (loader.value) {
      loader.value.classList.add('hidden')
    }
  }, 2500)
  
  initCursor()
  initParticles()
  initScrollReveal()
})

function initCursor() {
  document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX
    mouseY = e.clientY
  })
  
  function animateCursor() {
    cursorX += (mouseX - cursorX) * 0.1
    cursorY += (mouseY - cursorY) * 0.1
    
    if (cursor.value) {
      cursor.value.style.left = cursorX + 'px'
      cursor.value.style.top = cursorY + 'px'
    }
    if (cursorDot.value) {
      cursorDot.value.style.left = mouseX + 'px'
      cursorDot.value.style.top = mouseY + 'px'
    }
    
    requestAnimationFrame(animateCursor)
  }
  animateCursor()
  
  const hoverElements = document.querySelectorAll('a, button, .skill-item, .specialty-card, .project-card, .stat-box')
  hoverElements.forEach(el => {
    el.addEventListener('mouseenter', () => cursor?.value?.classList.add('hover'))
    el.addEventListener('mouseleave', () => cursor?.value?.classList.remove('hover'))
  })
}

function initParticles() {
  const canvas = particlesCanvas.value
  if (!canvas) return
  
  const ctx = canvas.getContext('2d')
  if (!ctx) return

  canvas.width = window.innerWidth
  canvas.height = window.innerHeight

  interface Particle {
    x: number
    y: number
    vx: number
    vy: number
    size: number
    opacity: number
    color: string
  }

  const particles: Particle[] = []
  const particleCount = 80
  const colors = ['99, 102, 241', '139, 92, 246', '34, 211, 238']

  for (let i = 0; i < particleCount; i++) {
    particles.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.5,
      vy: (Math.random() - 0.5) * 0.5,
      size: Math.random() * 2 + 1,
      opacity: Math.random() * 0.5 + 0.3,
      color: colors[Math.floor(Math.random() * colors.length)]
    })
  }

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    
    particles.forEach((p, i) => {
      p.x += p.vx
      p.y += p.vy

      if (p.x < 0 || p.x > canvas.width) p.vx *= -1
      if (p.y < 0 || p.y > canvas.height) p.vy *= -1

      const dx = mouseX - p.x
      const dy = mouseY - p.y
      const dist = Math.sqrt(dx * dx + dy * dy)
      
      if (dist < 150) {
        p.x -= dx * 0.01
        p.y -= dy * 0.01
      }

      ctx.beginPath()
      ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
      ctx.fillStyle = `rgba(${p.color}, ${p.opacity})`
      ctx.fill()

      particles.slice(i + 1).forEach(p2 => {
        const dx2 = p.x - p2.x
        const dy2 = p.y - p2.y
        const dist2 = Math.sqrt(dx2 * dx2 + dy2 * dy2)

        if (dist2 < 120) {
          ctx.beginPath()
          ctx.moveTo(p.x, p.y)
          ctx.lineTo(p2.x, p2.y)
          ctx.strokeStyle = `rgba(${p.color}, ${0.15 * (1 - dist2 / 120)})`
          ctx.lineWidth = 0.5
          ctx.stroke()
        }
      })
    })

    requestAnimationFrame(animate)
  }

  animate()

  window.addEventListener('resize', () => {
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
  })
}

function initScrollReveal() {
  const reveals = document.querySelectorAll('.reveal')
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active')
      }
    })
  }, { threshold: 0.1 })
  
  reveals.forEach(el => observer.observe(el))
}
</script>

<style scoped>
main {
  position: relative;
  z-index: 1;
}
</style>
