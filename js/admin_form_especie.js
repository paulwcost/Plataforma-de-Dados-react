const formCadastro = document.getElementById('formCadastroEspecie');
const idEspecieEditando = localStorage.getItem('idEspecieEditando');

// Elementos do Modal e Mapa
const mapModal = document.getElementById('mapModal');
const btnSelecionarLocalizacao = document.getElementById('btnSelecionarLocalizacao');
const closeButton = document.querySelector('.close-button');
const btnConfirmarLocalizacao = document.getElementById('btnConfirmarLocalizacao');
let map;
let marker;
let selectedCoords = null;

if (idEspecieEditando) {
    preencherFormularioParaEdicao(idEspecieEditando);
}

async function preencherFormularioParaEdicao(id) {
    try {
        const response = await fetch(`https://plataforma-de-dados-com-login.onrender.com/especies-locais/${id}`);
        if (!response.ok) throw new Error("Erro ao buscar dados.");

        const especie = await response.json();

        document.getElementById('id').value = especie._id || '';
        document.getElementById('nome_popular').value = especie.nome_popular || '';
        document.getElementById('nome_cientifico').value = especie.nome_cientifico || '';
        document.getElementById('caracteristicas_morfologicas').value = especie.caracteristicas_morfologicas || '';
        document.getElementById('familia').value = especie.familia || '';
        document.getElementById('status_conservacao').value = especie.status_conservacao || '';
        document.getElementById('descricao').value = especie.descricao || '';
        document.getElementById('latitude').value = especie.latitude || '';
        document.getElementById('longitude').value = especie.longitude || '';

    } catch (error) {
        console.error('Erro ao carregar dados:', error);
        alert("Erro ao carregar dados da espécie.");
    }
}

formCadastro.addEventListener('submit', async function (event) {
    event.preventDefault();

    const formData = new FormData(formCadastro);
    const dadosEspecie = Object.fromEntries(formData.entries());

    const metodo = dadosEspecie.id ? 'PUT' : 'POST';
    const url = dadosEspecie.id
        ? `/especies-locais/${dadosEspecie.id}`
        : '/especies-locais';

    try {
        const response = await fetch(url, {
            method: metodo,
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + (localStorage.getItem('authToken'))
            },
            body: JSON.stringify(dadosEspecie)
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(`Erro ${response.status}: ${errorData.message || 'Erro desconhecido'}`);
        }

        alert(dadosEspecie.id ? "Espécie atualizada com sucesso!" : "Espécie cadastrada com sucesso!");
        localStorage.removeItem('idEspecieEditando');
        formCadastro.reset();
        window.location.href = "admin_lista_especies.html";

    } catch (error) {
        console.error('Erro ao salvar espécie:', error);
        alert(`Erro: ${error.message}`);
    }
});

// --- Lógica do Mapa ---

function initAdminMap() {
    map = new google.maps.Map(document.getElementById("mapContainer"), {
        center: { lat: -24.3836, lng: -53.5183 }, // Centro em Assis Chateaubriand
        zoom: 12,
    });

    map.addListener("click", (e) => {
        if (marker) {
            marker.setMap(null); // Remove marcador anterior
        }
        marker = new google.maps.Marker({
            position: e.latLng,
            map: map,
        });
        selectedCoords = e.latLng.toJSON();
    });
}

btnSelecionarLocalizacao.addEventListener('click', () => {
    mapModal.style.display = 'block';
    if (map) {
        // Centraliza o mapa se ele já foi inicializado
        const center = new google.maps.LatLng(-24.3836, -53.5183);
        map.setCenter(center);
    }
});

closeButton.addEventListener('click', () => {
    mapModal.style.display = 'none';
});

btnConfirmarLocalizacao.addEventListener('click', () => {
    if (selectedCoords) {
        document.getElementById('latitude').value = selectedCoords.lat;
        document.getElementById('longitude').value = selectedCoords.lng;
        mapModal.style.display = 'none';
    }
});

window.addEventListener('click', (event) => {
    if (event.target == mapModal) {
        mapModal.style.display = 'none';
    }
});
