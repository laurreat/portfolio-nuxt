<template>
  <article class="project-card-premium" :data-project-id="project.id">
    <div class="project-image-container">
      <img v-if="project.image" :src="`/uploads/${project.image}`" :alt="project.title" class="project-image" loading="lazy" />
      <div v-else class="project-placeholder">
        <i class="fas fa-code"></i>
        <span>Proyecto</span>
      </div>
      <div class="project-overlay">
        <div class="project-tech-stack">
          <span v-for="tech in techArray.slice(0, 4)" :key="tech" class="tech-badge">{{ tech }}</span>
        </div>
        <div class="project-quick-actions">
          <a v-if="project.demo_url" :href="project.demo_url" target="_blank" class="quick-action demo-action" title="Ver Demo">
            <i class="fas fa-external-link-alt"></i>
          </a>
          <a :href="project.repo_url || 'https://github.com/laurreat'" target="_blank" class="quick-action github-action" title="Ver Código">
            <i class="fab fa-github"></i>
          </a>
          <button class="quick-action info-action" title="Más información" @click="$emit('openModal', project)">
            <i class="fas fa-info-circle"></i>
          </button>
        </div>
      </div>
    </div>
    <div class="project-content">
      <div class="project-header">
        <h3 class="project-title">{{ project.title }}</h3>
        <div class="project-status">
          <span :class="['status-badge', project.featured ? 'status-featured' : 'status-completed']">
            <i :class="project.featured ? 'fas fa-star' : 'fas fa-check-circle'"></i>
            {{ project.featured ? 'Destacado' : 'Completado' }}
          </span>
        </div>
      </div>
      <p class="project-description">{{ project.description }}</p>
      <div class="project-features">
        <div class="feature-item">
          <i class="fas fa-mobile-alt"></i>
          <span>Responsive Design</span>
        </div>
        <div class="feature-item">
          <i class="fas fa-database"></i>
          <span>Base de Datos</span>
        </div>
        <div class="feature-item">
          <i class="fas fa-shield-alt"></i>
          <span>Seguro</span>
        </div>
      </div>
      <div class="project-actions">
        <a v-if="project.demo_url" :href="project.demo_url" target="_blank" class="btn-primary">
          <i class="fas fa-rocket"></i> Ver Demo
        </a>
        <a :href="project.repo_url || 'https://github.com/laurreat'" target="_blank" class="btn-secondary">
          <i class="fab fa-github"></i> Código Fuente
        </a>
        <button class="btn-outline" @click="$emit('openModal', project)">
          <i class="fas fa-info-circle"></i> Detalles
        </button>
      </div>
      <div class="project-metrics">
        <div class="metric">
          <i class="fas fa-calendar"></i>
          <span>{{ formatDate(project.created_at) }}</span>
        </div>
        <div class="metric">
          <i class="fas fa-eye"></i>
          <span>Ver proyecto</span>
        </div>
      </div>
    </div>
    <div v-if="project.featured" class="featured-badge">
      <i class="fas fa-star"></i> Destacado
    </div>
  </article>
</template>

<script setup lang="ts">
interface Project {
  id: number
  title: string
  description: string
  image?: string
  technologies?: string
  demo_url?: string
  repo_url?: string
  featured?: boolean
  status?: string
  created_at: string
}

const props = defineProps<{
  project: Project
}>()

defineEmits<{
  openModal: [project: Project]
}>()

const techArray = computed(() => 
  props.project.technologies?.split(',').map(t => t.trim()) || ['Web Development', 'PHP', 'MySQL', 'JavaScript']
)

function formatDate(date: string) {
  return new Date(date).toLocaleDateString('es-ES', { month: 'short', year: 'numeric' })
}
</script>
