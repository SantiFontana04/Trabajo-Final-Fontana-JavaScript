document.addEventListener("DOMContentLoaded", () => {

    // --- Buscador de películas ---
    const API_KEY = "676987f5eb1e956ca78d369f9f6e918a";
    const API_URL = "https://api.themoviedb.org/3/search/movie";
    const searchForm = document.getElementById("search-form");
    const searchInput = document.getElementById("search-input");
    const resultsContainer = document.getElementById("results-container");

    searchForm.addEventListener("submit", async (event) => {
        event.preventDefault();

        const query = searchInput.value.trim();
        if (!query) {
            resultsContainer.innerHTML = "<p>Por favor, ingresa un título de película para buscar.</p>";
            return;
        }

        resultsContainer.innerHTML = "<p>Buscando películas...</p>";

        try {
            const response = await fetch(`${API_URL}?api_key=${API_KEY}&query=${encodeURIComponent(query)}`);
            if (!response.ok) {
                throw new Error("Error en la solicitud de la API.");
            }

            const data = await response.json();
            displayMovies(data.results);
        } catch (error) {
            resultsContainer.innerHTML = `<p>Error al buscar películas: ${error.message}</p>`;
        }
    });

    function displayMovies(movies) {
        if (movies.length === 0) {
            resultsContainer.innerHTML = "<p>No se encontraron películas con ese título.</p>";
            return;
        }

        resultsContainer.innerHTML = "";
        movies.forEach((movie) => {
            const movieElement = document.createElement("div");
            movieElement.classList.add("movie");

            const movieTitle = document.createElement("h3");
            movieTitle.textContent = movie.title;

            const moviePoster = document.createElement("img");
            if (movie.poster_path) {
                moviePoster.src = `https://image.tmdb.org/t/p/w200${movie.poster_path}`;
                moviePoster.alt = `${movie.title} Poster`;
            } else {
                moviePoster.src = "https://via.placeholder.com/200x300?text=Sin+Imagen";
                moviePoster.alt = "Sin imagen disponible";
            }

            const movieOverview = document.createElement("p");
            movieOverview.textContent = movie.overview || "Sin descripción disponible.";

            movieElement.appendChild(moviePoster);
            movieElement.appendChild(movieTitle);
            movieElement.appendChild(movieOverview);

            resultsContainer.appendChild(movieElement);
        });
    }
});

// --- Validación del formulario ---
const form = document.querySelector("#formulario form");
const nombreInput = document.getElementById("nombre");
const emailInput = document.getElementById("email");
const asuntoInput = document.getElementById("asunto");
const mensajeInput = document.getElementById("mensaje");
const checkboxInput = document.getElementById("terms");
const formMessage = document.getElementById("form-message");

const createErrorElement = (message) => {
    const errorElement = document.createElement("p");
    errorElement.classList.add("error-message");
    errorElement.style.color = "red";
    errorElement.textContent = message;
    return errorElement;
};

const clearErrors = () => {
    const errorMessages = document.querySelectorAll(".error-message");
    errorMessages.forEach((error) => error.remove());
};

form.addEventListener("submit", (event) => {
    event.preventDefault();
    clearErrors();

    const nombre = nombreInput.value.trim();
    const email = emailInput.value.trim();
    const asunto = asuntoInput.value.trim();
    const mensaje = mensajeInput.value.trim();

    let isValid = true;

    // Validación de nombre
    if (!nombre || nombre.length < 3) {
        const errorElement = createErrorElement("El nombre debe tener al menos 3 caracteres.");
        nombreInput.insertAdjacentElement("afterend", errorElement);
        isValid = false;
    }

    // Validación de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        const errorElement = createErrorElement("Ingresa un email válido.");
        emailInput.insertAdjacentElement("afterend", errorElement);
        isValid = false;
    }

    // Validación de contraseña
    if (!asunto || asunto.length < 6) {
        const errorElement = createErrorElement("La contraseña debe tener al menos 6 caracteres.");
        asuntoInput.insertAdjacentElement("afterend", errorElement);
        isValid = false;
    }

    // Validación de mensaje
    if (!mensaje || mensaje.length < 10) {
        const errorElement = createErrorElement("El mensaje debe tener al menos 10 caracteres.");
        mensajeInput.insertAdjacentElement("afterend", errorElement);
        isValid = false;
    }

    // Validación de términos
    if (!checkboxInput.checked) {
        const errorElement = createErrorElement("Debes aceptar los términos y condiciones.");
        checkboxInput.insertAdjacentElement("afterend", errorElement);
        isValid = false;
    }

    // Si todo es válido
    if (isValid) {
        formMessage.textContent = "Formulario enviado correctamente.";
        formMessage.style.color = "green";
        form.reset();
    }
});