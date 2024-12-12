# Movie Finder

## Descripción del proyecto
MovieFinder es una página web que permite buscar información sobre películas de manera sencilla e intuitiva. El usuario puede ingresar el título de una película en la barra de búsqueda y recibir resultados detallados, como el título y el póster de la película, gracias a la integración con una API de cine reconocida mundialmente.

## Tecnologías utilizadas
- **HTML5**: Para la estructura de la página.
- **CSS3**: Para los estilos y diseño visual.
- **JavaScript**: Para la funcionalidad del buscador y la interacción con la API.

## API utilizada
Este proyecto utiliza la [API de The Movie Database (TMDB)](https://www.themoviedb.org/) para obtener los datos de las películas. La API proporciona información actualizada y precisa sobre una amplia variedad de películas.

### Configuración de la API
Para utilizar la API, se necesita una clave de API (**API Key**) que puedes obtener registrándote en el sitio web de TMDB. Una vez obtenida, deberás reemplazar la constante `API_KEY` en el archivo JavaScript con tu propia clave.

```javascript
const API_KEY = "TU_API_KEY_AQUÍ";
```

## Instrucciones para visualizar el proyecto

1. **Clonar el repositorio:**
   ```bash
   git clone https://github.com/usuario/Trabajo-Final-Fontana-JavaScript.git
   ```

2. **Navegar al directorio del proyecto:**
   ```bash
   cd moviefinder
   ```

3. **Abrir el archivo principal:**
   - Ubica el archivo `index.html` y ábrelo con tu navegador web favorito.

4. **Buscar películas:**
   - En la barra de búsqueda, ingresa el título de una película y haz clic en "Buscar" para visualizar los resultados.

## Características principales
- Interfaz simple e intuitiva.
- Resultados organizados en un diseño tipo grilla para una mejor visualización.
- Integración con la API de TMDB para garantizar información actualizada.

## Contribuciones
Las contribuciones son bienvenidas. Si tienes ideas para mejorar el proyecto, no dudes en abrir un issue o enviar un pull request.
