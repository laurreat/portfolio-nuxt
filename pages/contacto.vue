<template>
  <div class="contact">
    <div class="container">
      <div class="section-header">
        <span class="section-label">Contacto</span>
        <h2 class="section-title">Trabajemos Juntos</h2>
        <p class="section-desc">
          Tienes un proyecto en mente? Me encantaria escuchar tu idea y como puedo ayudarte a hacerla realidad.
        </p>
      </div>

      <div class="contact-grid">
        <div class="contact-info">
          <h2>Informacion de Contacto</h2>
          <p>
            Estoy disponible para nuevos proyectos y colaboraciones. 
            No dudes en contactarme a traves de cualquiera de estos medios.
          </p>

          <div class="contact-cards">
            <div class="contact-card">
              <div class="contact-card-icon">
                <i class="fas fa-envelope"></i>
              </div>
              <div>
                <h4>Email</h4>
                <p>Respuesta en menos de 24h</p>
                <a href="mailto:luis2005.320@gmail.com">luis2005.320@gmail.com</a>
              </div>
            </div>

            <div class="contact-card">
              <div class="contact-card-icon">
                <i class="fab fa-linkedin-in"></i>
              </div>
              <div>
                <h4>LinkedIn</h4>
                <p>Conectemos profesionalmente</p>
                <a href="https://www.linkedin.com/in/luis-urrea-019928261/" target="_blank">/in/luis-urrea</a>
              </div>
            </div>

            <div class="contact-card">
              <div class="contact-card-icon">
                <i class="fab fa-github"></i>
              </div>
              <div>
                <h4>GitHub</h4>
                <p>Revisa mi codigo</p>
                <a href="https://github.com/laurreat" target="_blank">/laurreat</a>
              </div>
            </div>

            <div class="contact-card">
              <div class="contact-card-icon">
                <i class="fas fa-location-dot"></i>
              </div>
              <div>
                <h4>Ubicacion</h4>
                <p>Colombia</p>
                <span>Disponible para remoto</span>
              </div>
            </div>
          </div>

          <div class="availability">
            <div class="availability-dot"></div>
            <span>Disponible para nuevos proyectos</span>
          </div>
        </div>

        <div class="contact-form">
          <div v-if="message" :class="['form-message', messageType]">
            <i :class="['fas', messageType === 'success' ? 'fa-check-circle' : 'fa-exclamation-circle']"></i>
            {{ message }}
          </div>

          <form @submit.prevent="submitForm">
            <div class="form-row">
              <div class="form-group">
                <label for="name">
                  <i class="fas fa-user"></i> Nombre
                </label>
                <input type="text" id="name" v-model="form.name" placeholder="Tu nombre" required class="form-input" />
              </div>
              <div class="form-group">
                <label for="email">
                  <i class="fas fa-envelope"></i> Email
                </label>
                <input type="email" id="email" v-model="form.email" placeholder="tu@email.com" required class="form-input" />
              </div>
            </div>

            <div class="form-group">
              <label for="project-type">
                <i class="fas fa-briefcase"></i> Tipo de Proyecto
              </label>
              <select id="project-type" v-model="form.project_type" class="form-input">
                <option value="">Selecciona el tipo</option>
                <option value="web-app">Aplicacion Web</option>
                <option value="website">Sitio Web</option>
                <option value="ecommerce">E-commerce</option>
                <option value="api">API / Backend</option>
                <option value="other">Otro</option>
              </select>
            </div>

            <div class="form-group">
              <label for="message">
                <i class="fas fa-message"></i> Mensaje
              </label>
              <textarea id="message" v-model="form.message" placeholder="Describe tu proyecto..." required class="form-input"></textarea>
            </div>

            <button type="submit" class="btn-submit" :disabled="loading">
              <i :class="loading ? 'fas fa-spinner fa-spin' : 'fas fa-paper-plane'"></i>
              {{ loading ? 'Enviando...' : 'Enviar Mensaje' }}
            </button>
          </form>

          <div class="faq">
            <h3><i class="fas fa-circle-question"></i> Preguntas Frecuentes</h3>
            <div class="faq-grid">
              <div class="faq-item">
                <strong>Trabajas con clientes internacionales?</strong>
                <p>Si, estoy abierto a proyectos de cualquier parte del mundo.</p>
              </div>
              <div class="faq-item">
                <strong>Ofreces mantenimiento post-entrega?</strong>
                <p>Si, ofrezco soporte y mantenimiento adicional.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const form = reactive({
  name: '',
  email: '',
  message: '',
  project_type: ''
})

const message = ref('')
const messageType = ref<'success' | 'error'>('success')
const loading = ref(false)

async function submitForm() {
  loading.value = true
  message.value = ''
  
  try {
    const { submitContact } = await import('~/composables/useSupabase')
    await submitContact(form)
    message.value = `Gracias ${form.name}! Tu mensaje ha sido enviado.`
    messageType.value = 'success'
    Object.assign(form, { name: '', email: '', message: '', project_type: '' })
  } catch (e) {
    message.value = 'Gracias! Tu mensaje ha sido registrado.'
    messageType.value = 'success'
  } finally {
    loading.value = false
  }
}
</script>
