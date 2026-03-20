-- Migración para Supabase del Portfolio PHP a Nuxt 3
-- Ejecuta este SQL en el SQL Editor de Supabase

-- Tabla de proyectos
CREATE TABLE IF NOT EXISTS projects (
  id SERIAL PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  description TEXT,
  image VARCHAR(255),
  technologies TEXT,
  demo_url VARCHAR(500),
  repo_url VARCHAR(500),
  featured BOOLEAN DEFAULT FALSE,
  status VARCHAR(50) DEFAULT 'completed',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Tabla de mensajes de contacto
CREATE TABLE IF NOT EXISTS messages (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  message TEXT NOT NULL,
  project_type VARCHAR(100),
  budget VARCHAR(50),
  timeline VARCHAR(50),
  read BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Habilitar Row Level Security
ALTER TABLE projects ENABLE ROW LEVEL SECURITY;
ALTER TABLE messages ENABLE ROW LEVEL SECURITY;

-- Políticas para proyectos (lectura pública)
CREATE POLICY "Proyectos son públicos" ON projects
  FOR SELECT USING (true);

CREATE POLICY "Cualquiera puede insertar proyectos" ON projects
  FOR INSERT WITH CHECK (true);

-- Políticas para mensajes (lectura solo para servicio, inserción pública)
CREATE POLICY "Mensajes son públicos para insertar" ON messages
  FOR INSERT WITH CHECK (true);

CREATE POLICY "Solo servicio puede ver mensajes" ON messages
  FOR SELECT USING (auth.role() = 'service_role');

-- Insertar proyectos de ejemplo
INSERT INTO projects (title, description, image, technologies, demo_url, repo_url, featured) VALUES
('Sistema de Gestión de Inventarios', 'Aplicación web completa para gestión de inventarios con PHP y MySQL, incluye dashboard administrativo, reportes y exportación a PDF', 'inventory.jpg', 'PHP,Laravel,MySQL,Bootstrap,jQuery', '#', 'https://github.com/laurreat', true),
('APP Bíblica', 'Aplicación móvil con versículos diarios, devocionales y plan de lectura bíblica con notificaciones', NULL, 'JavaScript,HTML5,CSS3,Ionic', '#', 'https://github.com/laurreat', false),
('Red de Ventas SENA', 'Sistema de gestión de ventas y clientes desarrollado como proyecto del SENA con módulo de reportes', 'sales.jpg', 'PHP,MySQL,JavaScript,Bootstrap', '#', 'https://github.com/laurreat', true),
('MF CampeSENA', 'Sistema de campeonato deportivo para eventos del SENA con inscripción de equipos y generación de calendarios', NULL, 'PHP,MySQL,JavaScript', '#', 'https://github.com/laurreat', false),
('Gestor de Contraseñas', 'Aplicación segura para gestión de contraseñas con encriptación AES-256 y autenticación de dos factores', NULL, 'Python,Flask,SQLite,Bcrypt', '#', 'https://github.com/laurreat', false),
('APP Turística Colombia', 'Guía turística interactiva de Colombia con mapa, puntos de interés y recomendaciones personalizadas', NULL, 'React Native,Node.js,MongoDB', '#', 'https://github.com/laurreat', false);
