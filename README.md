# 🌻 Proyecto Next.js - Página Principal y Flores Amarillas

¡Bienvenido! Este es un proyecto moderno creado con **Next.js** (React), **TypeScript** y **Tailwind CSS**, preconfigurado para ser **compilable como sitio web estático**.

Si hace mucho tiempo no programas o es tu primera vez usando Next.js y el App Router, **¡no te preocupes!** Esta guía está redactada paso a paso para que entiendas absolutamente todo.

---

## 📑 Tabla de Contenidos
1. [¿Qué contiene este proyecto?](#-qué-contiene-este-proyecto)
2. [Estructura del Proyecto Explicada](#-estructura-del-proyecto-explicada)
3. [Requisitos Previos](#-requisitos-previos)
4. [Cómo Ejecutar el Proyecto en Tu Computadora](#-cómo-ejecutar-el-proyecto-en-tu-computadora)
5. [Cómo Compilar a Página Estática (Export HTML)](#-cómo-compilar-a-página-estática-export-html)
6. [¿Cómo funciona el Enrutamiento (Router)?](#-cómo-funciona-el-enrutamiento-router)
7. [Cómo Editar y Personalizar el Código](#-cómo-editar-y-personalizar-el-código)
8. [Cómo Publicar en Internet (Vercel / GitHub Pages / Netlify)](#-cómo-publicar-en-internet)

---

## 🌻 ¿Qué contiene este proyecto?

El proyecto consta de dos páginas principales navegables con el sistema de rutas de Next.js:

1. **Página Principal (`/`)**: Una pantalla de inicio limpia con diseño moderno, componentes oscuros con efectos de cristal (*glassmorphism*), botones de acceso rápido y tarjetas explicativas.
2. **Subpágina "Flores Amarillas" (`/flores-amarillas`)**: Una subpágina interactiva dedicada a las flores amarillas que incluye:
   - Contador de flores regaladas.
   - Animación de lluvia/confeti dorado al hacer clic.
   - Caja de mensaje/dedicatoria personalizable con botón para copiar al portapapeles.
   - Frase poética temática.

---

## 📂 Estructura del Proyecto Explicada

Aquí tienes el mapa de archivos para que no te pierdas:

```text
maxi/
├── src/
│   ├── app/
│   │   ├── layout.tsx                # El diseño principal que envuelve a todas las páginas (Navbar + Footer)
│   │   ├── page.tsx                  # 🏠 La Página Principal (Ruta: /)
│   │   ├── globals.css               # Estilos globales y Tailwind CSS
│   │   └── flores-amarillas/
│   │       └── page.tsx              # 🌻 Subpágina "Flores Amarillas" (Ruta: /flores-amarillas)
│   └── components/
│       ├── Navbar.tsx                # Barra de navegación superior con enlaces
│       └── Footer.tsx                # Pie de página
├── public/                           # Imágenes, íconos y archivos estáticos públicos
├── out/                              # 📦 Carpeta que se genera al compilar el sitio estático (HTML/CSS/JS)
├── next.config.ts                    # Configuración de Next.js (aquí está configurado `output: 'export'`)
├── package.json                      # Lista de dependencias y comandos del proyecto
└── tsconfig.json                     # Configuración de TypeScript
```

---

## 🛠️ Requisitos Previos

Antes de comenzar, asegúrate de tener instalado en tu computadora:
- **Node.js** (Versión 18 o superior). Puedes verificar si lo tienes instalado abriendo la terminal y ejecutando:
  ```bash
  node -v
  ```

---

## 🚀 Cómo Ejecutar el Proyecto en Tu Computadora

Para ver el proyecto en vivo en tu navegador mientras realizas cambios:

1. Abre la terminal en la carpeta del proyecto (`maxi`).
2. Ejecuta el comando de desarrollo:
   ```bash
   npm run dev
   ```
3. Abre tu navegador web e ingresa a:
   [http://localhost:3000](http://localhost:3000)

Cualquier cambio que guardes en los archivos de la carpeta `src/` se actualizará automáticamente en pantalla sin necesidad de recargar la página.

---

## 📦 Cómo Compilar a Página Estática (Export HTML)

Una de las peticiones de este proyecto es que sea **compilable a una página estática** (sin necesidad de tener un servidor Node.js corriendo todo el tiempo).

Para generar los archivos estáticos:

1. Ejecuta el comando de compilación:
   ```bash
   npm run build
   ```
2. Al finalizar, Next.js creará automáticamente una carpeta llamada **`out/`**.
3. Dentro de **`out/`** encontrarás:
   - `index.html` (La página principal)
   - `flores-amarillas.html` (La subpágina de flores amarillas)
   - Todos los estilos CSS y archivos Javascript procesados.

Esos archivos dentro de `out/` son los que puedes subir a cualquier hosting estático como **GitHub Pages**, **Netlify**, **Hostinger**, **Cloudflare Pages**, etc.

---

## 🗺️ ¿Cómo funciona el Enrutamiento (Router)?

En la versión actual de Next.js se utiliza el **App Router**. Crear una nueva ruta o página es muy fácil:

- Cada carpeta dentro de `src/app/` representa una URL.
- Si creas la carpeta `src/app/contacto/` y agregas dentro un archivo `page.tsx`, la URL automática será `http://localhost:3000/contacto`.

Para navegar entre páginas sin recargar la pantalla se usa la etiqueta `<Link>` de Next.js:

```tsx
import Link from 'next/link';

// Ejemplo de navegación
<Link href="/flores-amarillas">
  Ir a Flores Amarillas
</Link>
```

---

## ✏️ Cómo Editar y Personalizar el Código

### 1. Cambiar la Página Principal
Edita el archivo **`src/app/page.tsx`**. Puedes borrar el contenido actual y escribir tu propio HTML/JSX.

### 2. Cambiar la página de Flores Amarillas
Edita el archivo **`src/app/flores-amarillas/page.tsx`**. Puedes modificar los mensajes, cambiar los colores de los botones o ajustar la cantidad de confeti.

### 3. Modificar la Barra de Navegación o Pie de Página
Edita los archivos dentro de **`src/components/Navbar.tsx`** y **`src/components/Footer.tsx`**.

---

## 🌐 Cómo Publicar en Internet (Deploy Gratis)

### Opción A: Vercel (Recomendado y Gratis)
1. Sube tu proyecto a un repositorio de **GitHub**.
2. Entra a [Vercel.com](https://vercel.com) e inicia sesión con tu cuenta de GitHub.
3. Haz clic en "Add New Project" e importa este repositorio.
4. Haz clic en **Deploy** ¡y listo! Tendrás tu enlace público en 1 minuto.

### Opción B: GitHub Pages / Servidor Estático
1. Ejecuta `npm run build`.
2. Sube únicamente el contenido de la carpeta `out/` a tu servidor o rama `gh-pages` de GitHub.

---

## ❓ Tecnologías Utilizadas

- **Next.js 15+**: Framework de React para producción con App Router.
- **React 19**: Biblioteca para construir interfaces con componentes.
- **TypeScript**: Tipado estático para evitar errores de sintaxis en el código.
- **Tailwind CSS v4**: Framework de CSS mediante clases de utilidad.
- **Lucide React**: Colección de íconos vectoriales modernos.
- **Canvas Confetti**: Efectos de animación de confeti interactivo.

---

¡Disfruta construyendo tu proyecto y regalando flores amarillas! 🌻✨
