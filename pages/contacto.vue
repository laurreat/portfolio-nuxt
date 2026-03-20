<template>
  <div class="contact-hero">
    <div class="container">
      <div class="contact-header">
        <h1 class="contact-title"><i class="fas fa-rocket"></i> ¡Trabajemos Juntos!</h1>
        <p class="contact-subtitle">
          ¿Tienes un proyecto en mente? ¿Buscas un desarrollador comprometido?
          <br>Me encantaría escuchar sobre tu idea y cómo puedo ayudarte a hacerla realidad.
        </p>
      </div>

      <div class="contact-main">
        <div class="contact-info">
          <h2><i class="fas fa-address-card"></i> Información de Contacto</h2>
          <div class="contact-cards">
            <div class="contact-card">
              <div class="contact-icon"><i class="fas fa-envelope"></i></div>
              <h3>Email</h3>
              <p>¿Prefieres el email? Perfecto.</p>
              <a href="mailto:luis2005.320@gmail.com" class="contact-link">
                luis2005.320@gmail.com <i class="fas fa-external-link-alt"></i>
              </a>
            </div>
            <div class="contact-card">
              <div class="contact-icon"><i class="fab fa-linkedin"></i></div>
              <h3>LinkedIn</h3>
              <p>Conectemos profesionalmente</p>
              <a href="https://www.linkedin.com/in/luis-urrea-019928261/" target="_blank" class="contact-link">
                /in/luis-urrea <i class="fas fa-external-link-alt"></i>
              </a>
            </div>
            <div class="contact-card">
              <div class="contact-icon"><i class="fab fa-github"></i></div>
              <h3>GitHub</h3>
              <p>Revisa mi código</p>
              <a href="https://github.com/laurreat" target="_blank" class="contact-link">
                /laurreat <i class="fas fa-external-link-alt"></i>
              </a>
            </div>
            <div class="contact-card">
              <div class="contact-icon"><i class="fas fa-map-marker-alt"></i></div>
              <h3>Ubicación</h3>
              <p>Colombia</p>
              <span class="contact-link">
                Disponible para trabajo remoto <i class="fas fa-globe"></i>
              </span>
            </div>
          </div>
          <div class="availability-status">
            <div class="status-indicator">
              <div class="status-dot status-available"></div>
              <span>Disponible para nuevos proyectos</span>
            </div>
            <p>Tiempo de respuesta promedio: <strong>24 horas</strong></p>
          </div>
        </div>

        <div class="contact-form-container">
          <h2><i class="fas fa-paper-plane"></i> Envíame un Mensaje</h2>

          <div v-if="message" :class="['contact-message', messageType]">
            <i :class="['fas', messageType === 'success' ? 'fa-check-circle' : 'fa-exclamation-triangle']"></i>
            {{ message }}
          </div>

          <form @submit.prevent="submitForm" class="contact-form-premium" id="contactForm">
            <div class="form-group">
              <label for="name"><i class="fas fa-user"></i> Nombre Completo</label>
              <input type="text" id="name" v-model="form.name" placeholder="Ej: Juan Pérez" required class="form-input" />
              <span class="form-helper">¿Cómo te gusta que te llamen?</span>
            </div>

            <div class="form-group">
              <label for="email"><i class="fas fa-envelope"></i> Correo Electrónico</label>
              <input type="email" id="email" v-model="form.email" placeholder="ejemplo@correo.com" required class="form-input" />
              <span class="form-helper">Para mantenernos en contacto</span>
            </div>

            <div class="form-group">
              <label for="project-type"><i class="fas fa-briefcase"></i> Tipo de Proyecto</label>
              <select id="project-type" v-model="form.project_type" class="form-input">
                <option value="">Selecciona el tipo de proyecto</option>
                <option value="web-app">Aplicación Web</option>
                <option value="website">Sitio Web Corporativo</option>
                <option value="ecommerce">E-commerce</option>
                <option value="api">API/Backend</option>
                <option value="consultation">Consultoría</option>
                <option value="collaboration">Colaboración</option>
                <option value="other">Otro</option>
              </select>
            </div>

            <div class="form-group">
              <label for="budget"><i class="fas fa-dollar-sign"></i> Presupuesto Estimado</label>
              <select id="budget" v-model="form.budget" class="form-input">
                <option value="">Selecciona un rango</option>
                <option value="1000-3000">$1,000 - $3,000 USD</option>
                <option value="3000-5000">$3,000 - $5,000 USD</option>
                <option value="5000-10000">$5,000 - $10,000 USD</option>
                <option value="10000+">$10,000+ USD</option>
                <option value="discuss">Prefiero discutirlo</option>
              </select>
            </div>

            <div class="form-group">
              <label for="timeline"><i class="fas fa-calendar-alt"></i> Timeline del Proyecto</label>
              <select id="timeline" v-model="form.timeline" class="form-input">
                <option value="">¿Cuándo necesitas el proyecto?</option>
                <option value="asap">Lo antes posible</option>
                <option value="1-month">En 1 mes</option>
                <option value="2-3-months">2-3 meses</option>
                <option value="3+-months">Más de 3 meses</option>
                <option value="flexible">Flexible</option>
              </select>
            </div>

            <div class="form-group">
              <label for="message"><i class="fas fa-comment-dots"></i> Cuéntame sobre tu proyecto</label>
              <textarea id="message" v-model="form.message" rows="6" placeholder="Describe tu proyecto, objetivos, funcionalidades específicas que necesitas..." required class="form-input"></textarea>
              <span class="form-helper">Mientras más detalles, mejor podremos colaborar</span>
            </div>

            <button type="submit" class="btn-submit" :disabled="loading">
              <span v-if="!loading"><i class="fas fa-rocket"></i> Enviar Mensaje</span>
              <span v-else><i class="fas fa-spinner fa-spin"></i> Enviando...</span>
            </button>
          </form>

          <div class="contact-faq">
            <h3><i class="fas fa-question-circle"></i> Preguntas Frecuentes</h3>
            <div class="faq-grid">
              <div class="faq-item">
                <strong>¿Trabajarías con clientes internacionales?</strong>
                <p>¡Por supuesto! Me interesaría trabajar con clientes de diferentes países y zonas horarias.</p>
              </div>
              <div class="faq-item">
                <strong>¿Ofreces mantenimiento post-entrega?</strong>
                <p>Sí, ofrezco soporte y mantenimiento para asegurar que tu proyecto funcione perfectamente.</p>
              </div>
              <div class="faq-item">
                <strong>¿Cuál es tu stack tecnológico principal?</strong>
                <p>PHP, Laravel, JavaScript, MySQL, HTML5, CSS3, y varias tecnologías modernas según el proyecto.</p>
              </div>
              <div class="faq-item">
                <strong>¿Realizas videollamadas de seguimiento?</strong>
                <p>¡Absolutamente! Me gusta mantener comunicación fluida durante todo el desarrollo.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="contact-cta">
        <div class="cta-content">
          <h2>¿Prefieres una llamada rápida?</h2>
          <p>Si tienes un proyecto urgente o prefieres hablar directamente, podemos coordinar una videollamada.</p>
          <a href="https://calendly.com/luis2005-320/30min" target="_blank" class="btn-calendar">
            <i class="fas fa-calendar-check"></i> Agendar Reunión
          </a>
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
  project_type: '',
  budget: '',
  timeline: ''
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
    message.value = `¡Gracias ${form.name}! Tu mensaje ha sido enviado.`
    messageType.value = 'success'
    Object.assign(form, { name: '', email: '', message: '', project_type: '', budget: '', timeline: '' })
  } catch (e) {
    message.value = '¡Gracias! Tu mensaje ha sido registrado (modo demo).'
    messageType.value = 'success'
  } finally {
    loading.value = false
  }
}
</script>
