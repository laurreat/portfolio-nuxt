export default defineNuxtConfig({
  devtools: { enabled: true },
  
  app: {
    head: {
      title: 'luKshaDEV - Luis Urrea',
      htmlAttrs: { lang: 'es' },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Desarrollador Full Stack & Ingeniero Multimedia - Portafolio profesional' },
        { name: 'theme-color', content: '#030712' }
      ],
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=Inter:wght@300;400;500;600;700;800&display=swap' },
        { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css' },
        { rel: 'icon', type: 'image/png', href: '/brand/luKshaDEV_Logo_Perfil.png' }
      ]
    }
  },

  css: ['~/assets/css/main.css'],

  runtimeConfig: {
    supabaseServiceKey: process.env.SUPABASE_SERVICE_KEY,
    public: {
      supabaseUrl: process.env.SUPABASE_URL,
      supabaseKey: process.env.SUPABASE_KEY
    }
  },

  compatibilityDate: '2024-11-01'
})
