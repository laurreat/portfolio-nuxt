# Portfolio Nuxt 3 - Luis Alberto Urrea

Portfolio profesional migrado de PHP a Nuxt 3 con Supabase.

## Tech Stack

- **Framework**: Nuxt 3 (Vue.js 3)
- **Base de datos**: Supabase (PostgreSQL)
- **Despliegue**: Vercel
- **Estilos**: CSS3 vanilla con variables

## Características

- ✨ Diseño responsivo y moderno
- 🎨 Animaciones y efectos visuales (partículas)
- 📱 Compatible con todos los dispositivos
- 🔐 Formulario de contacto con Supabase
- 🚀 Despliegue rápido en Vercel

## Configuración

1. Clona el repositorio
2. Copia `.env.example` a `.env`
3. Llena las variables de Supabase
4. Ejecuta el SQL en `supabase-schema.sql`
5. `npm install`
6. `npm run dev`

## Despliegue en Vercel

```bash
npm run build
```

O conecta directamente tu repositorio GitHub a Vercel.

## Estructura

```
portfolio-nuxt/
├── pages/
│   ├── index.vue        # Página principal
│   └── contacto.vue      # Página de contacto
├── components/
│   ├── Header.vue
│   ├── Footer.vue
│   └── ProjectCard.vue
├── composables/
│   └── useSupabase.ts    # Cliente Supabase
├── assets/css/
│   └── main.css          # Estilos globales
├── layouts/
│   └── default.vue       # Layout con partículas
└── supabase-schema.sql   # Schema de base de datos
```
