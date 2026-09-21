# 💖 Nuestros Momentos — App para Parejas & Flores Amarillas 🌻

¡Bienvenido! Este es un proyecto **Mobile-First** moderno y responsivo para parejas, construido con **Next.js 15 (App Router)**, **React**, **TypeScript** y **Tailwind CSS**. La aplicación está totalmente preconfigurada para ser **compilable a un sitio web estático**.

---

## 📑 Tabla de Contenidos
1. [Características Principales](#-características-principales)
2. [Paleta de Colores y Modo Claro](#-paleta-de-colores-y-modo-claro)
3. [Páginas e Interactividad](#-páginas-e-interactividad)
4. [Estructura de Archivos](#-estructura-de-archivos)
5. [Comandos para Ejecutar y Compilar](#-comandos-para-ejecutar-y-compilar)
6. [Cómo Agregar Nuevas Páginas de Parejas](#-cómo-agregar-nuevas-páginas-de-parejas)

---

## ✨ Características Principales

- **Diseño Mobile-First en Modo Claro**: Optimizado para teléfonos móviles y adaptable a cualquier pantalla.
- **Rastros de Partículas en el Mouse**:
  - **Página Principal**: Cursor de corazón con estela efímera de **corazones rosados** que salen despedidos hacia afuera.
  - **Flores Amarillas**: Estela efímera de **pétalos dorados** sin bordes negros.
- **Fondo de Flores Animadas**: Animaciones fluidas de flores (`1.png` a `5.png`) asomándose desde los bordes y en el centro.
- **Flores Interactivas (Hover & Click)**:
  - Al pasar el cursor sobre cualquier flor, esta **se agranda y se queda fija en pantalla**.
  - Al hacer clic en una flor, se elige al azar una frase en minúsculas (*"te quiero"*, *"te quiero mucho"* o *"te amo"*) y se activa una de las **4 animaciones en ciclo secuencial (5 segundos de duración)** sobre una capa de **fondo oscuro con efecto de cristal/blur (`backdrop-blur-md`)**.
- **Favicon Vectorial**: Favicon de flor amarilla SVG (`/flower-favicon.svg`).

---

## 🎨 Paleta de Colores y Modo Claro

- **Blanco (Fondo Principal)**: `#F7F7F7`
- **Negro (Texto, Bordes e Ilustraciones)**: `#000F08` / `#171D1C`
- **Color Principal (Flores Amarillas)**: `#FFC000`
- **Color Secundario (Naranja)**: `#FF8400`
- **Color Rosa (Página Principal)**: `#FC5A8D` y `#F786AA`

---

## 🌸 Páginas e Interactividad

### 1. Página Principal (`/`)
- Contenedor dinámico para distintas páginas de parejas.
- Header destacado *"Nuestros Momentos"*.
- Cada sección dispone de sus propios colores distintivos en botones y badges.
- Incluye el componente `<HeartTrail />` y cursor de corazón personalizado.

### 2. Subpágina "Flores Amarillas" (`/flores-amarillas`)
- Header con botón *"Volver al Inicio"* alineado a la izquierda e ícono + título centrado.
- 19 posiciones de flores animadas distribuidas en el viewport.
- **Ciclo Secuencial de Animaciones Interactivas (5s de duración)**:
  1. **Animación 1**: 38 frases en minúscula sin fondos ni emojis que aparecen una a una en tiempo real por la pantalla.
  2. **Animación 2**: Explosión inicial en ráfaga de corazones saliendo en 360° desde el centro + frase central.
  3. **Animación 3**: Frase central con su última letra repitiéndose en tiempo real (`...oooooooooo`) estirándose horizontalmente.
  4. **Animación 4**: Flujo continuo e incesante de corazones que nacen en el centro y salen volando velozmente hacia los bordes.

---

## 📂 Estructura de Archivos

```text
maxi/
├── src/
│   ├── app/
│   │   ├── layout.tsx                # Diseñador global y metadata de la app
│   │   ├── page.tsx                  # 🏠 Página Principal (Ruta: /)
│   │   ├── globals.css               # Estilos globales y animaciones CSS keyframes
│   │   └── flores-amarillas/
│   │       ├── layout.tsx            # Metadata e ícono para Flores Amarillas
│   │       └── page.tsx              # 🌻 Subpágina interactiva "Flores Amarillas"
│   └── components/
│       ├── PetalTrail.tsx            # Componente de rastro de pétalos amarillos
│       └── HeartTrail.tsx            # Componente de rastro de corazones rosas
├── public/
│   ├── flowers/                      # Imágenes PNG de flores (1.png a 5.png)
│   ├── flower-favicon.svg            # Favicon vectorial de flor amarilla
│   └── heart-favicon.svg             # Ícono de corazón
├── out/                              # 📦 Carpeta generada al compilar el sitio estático
├── next.config.ts                    # Configuración con `output: 'export'`
└── package.json                      # Dependencias del proyecto
```

---

## 🚀 Comandos para Ejecutar y Compilar

### 1. Modo Desarrollo
Para ver la aplicación en vivo en tu navegador:
```bash
npm run dev
```
Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

### 2. Compilación a Sitio Estático (Export HTML)
Para generar los archivos estáticos listos para publicar en **GitHub Pages**, **Vercel** o cualquier hosting estático:
```bash
npm run build
```
Los archivos finales HTML/CSS/JS se compilarán dentro de la carpeta **`out/`**.

---

## 🛠️ Cómo Agregar Nuevas Páginas de Parejas

1. Crea una nueva carpeta en `src/app/`, por ejemplo `src/app/nuestra-historia/`.
2. Crea el archivo `page.tsx` dentro de esa carpeta.
3. En `src/app/page.tsx`, descomenta o agrega la sección en el array `couplePages` activando `active: true`.
