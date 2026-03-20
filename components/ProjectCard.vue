<template>
  <article class="project-card">
    <div class="project-image">
      <img v-if="project.image" :src="`/uploads/${project.image}`" :alt="project.title" loading="lazy" />
      <div v-else class="project-placeholder">
        <i class="fas fa-folder-code"></i>
      </div>
      <div class="project-overlay">
        <a v-if="project.demo_url" :href="project.demo_url" target="_blank" title="Ver Demo">
          <i class="fas fa-external-link-alt"></i>
        </a>
        <a :href="project.repo_url || 'https://github.com/laurreat'" target="_blank" title="Codigo">
          <i class="fab fa-github"></i>
        </a>
      </div>
    </div>
    <div class="project-content">
      <div class="project-header">
        <h3 class="project-title">{{ project.title }}</h3>
        <span v-if="project.featured" class="project-badge">Destacado</span>
      </div>
      <p class="project-desc">{{ project.description }}</p>
      <div class="project-tech">
        <span v-for="tech in techArray.slice(0, 4)" :key="tech">{{ tech }}</span>
      </div>
      <div class="project-links">
        <a v-if="project.demo_url" :href="project.demo_url" target="_blank" class="project-link">
          <i class="fas fa-external-link-alt"></i> Demo
        </a>
        <a :href="project.repo_url || 'https://github.com/laurreat'" target="_blank" class="project-link">
          <i class="fab fa-github"></i> Codigo
        </a>
      </div>
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
  created_at: string
}

const props = defineProps<{ project: Project }>()

const techArray = computed(() => 
  props.project.technologies?.split(',').map(t => t.trim()) || ['Web']
)
</script>
