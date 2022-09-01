# Streaming App

---

Este proyecto es un ejercicio de front-end utilizando React, Vite y TypeScript.

Es un catálogo de películas consumiendo una API desde [The Movie Database](https://developers.themoviedb.org/3/getting-started/introduction).

## Cómo ejecutar la aplicación

---

Si quieres ejecutar esta aplicación localmente, clonar el repo y sigue los comandos a continuación:

1. Puedes instalar y ejecutar localmente con lo siguientes comandos:

```
npm i
npm run dev
```

## Estructura de archivos

El código está organizado de la siguiente manera:

- assets: Estilos de todos los componentes(se utilizó css modules).
- components: Componentes genéricos tales como navBar o YoutubeEmbed.
- layouts: Componentes base para las vistas.
- pages: Componentes principales para las vistas.
- stores: Archivos para el manejo de estados globales.

```
src/
┣ api/
┃ ┗ tmdb-client.ts
┣ assets/
┃ ┣ img/
┃ ┃ ┗ backdrop-placeholder.png
┃ ┣ styles/
┃ ┃ ┣ contentCategory.module.css
┃ ┃ ┣ contentDetails.module.css
┃ ┃ ┣ header.module.css
┃ ┃ ┣ home.module.css
┃ ┃ ┣ login.module.css
┃ ┃ ┣ mainLayout.module.css
┃ ┃ ┣ navBar.module.css
┃ ┃ ┗ youtubeEmbed.module.css
┃ ┗ react.svg
┣ components/
┃ ┣ NavBar.tsx
┃ ┣ ProtectedRoutes.tsx
┃ ┗ YoutubeEmbed.tsx
┣ layouts/
┃ ┣ Header.tsx
┃ ┗ MainLayout.tsx
┣ pages/
┃ ┣ ContentCategory.tsx
┃ ┣ ContentDetails.tsx
┃ ┣ Home.tsx
┃ ┗ Login.tsx
┣ stores/
┃ ┣ auth.ts
┃ ┣ movieCategories.ts
┃ ┣ movieDetails.ts
┃ ┗ movies.ts
┣ App.css
┣ App.tsx
┣ index.css
┣ main.tsx
┣ types.ts
┗ vite-env.d.ts
```

## Workflow y herramientas

**[Vite](https://vitejs.dev/)** fue la herramienta escogida para el servidor de desarrollo.

**[React Hook Form](https://react-hook-form.com/)** se utilizó esta librería para facilitar el manejo del formulario de login.

**[Zustand](https://github.com/pmndrs/zustand)** Zustand es una alternativa mas ergonómica con respecto a Redux o useContext para el manejo de state global.

**[sweetAlert2](https://sweetalert2.github.io/)** sweetAlert se utilizó para facilitar la creación de alertas tipo pop-up durante la validación de formulario de login.
