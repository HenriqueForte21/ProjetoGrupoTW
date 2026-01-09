// script.js

// Array de objetos para utilizadores
const users = [
    { username: 'admin', password: 'admin', role: 'admin' },
    { username: 'user', password: 'user', role: 'user' }
];

// Array de objetos para jogos
let games = [
    {
        id: 1,
        title: 'Super Mario Bros',
        genre: 'Plataforma',
        year: 1985,
        description: 'Um clássico jogo de plataforma onde Mario salva a princesa.',
        ratings: [],
        comments: []
    },
    {
        id: 2,
        title: 'The Legend of Zelda',
        genre: 'Aventura',
        year: 1986,
        description: 'Aventura épica com Link explorando Hyrule.',
        ratings: [],
        comments: []
    },
    {
        id: 3,
        title: 'Grand Theft Auto V',
        genre: 'Ação',
        year: 2013,
        description: 'Jogo de mundo aberto com missões e multiplayer.',
        ratings: [],
        comments: []
    }
];

// Função para renderizar o catálogo
function renderCatalog(filteredGames = games) {
    const gamesList = document.getElementById('gamesList');
    gamesList.innerHTML = '';
    filteredGames.forEach(game => {
        const card = `
            <div class="col-md-4">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">${game.title}</h5>
                        <p class="card-text">Género: ${game.genre} | Ano: ${game.year}</p>
                        <button class="btn btn-info view-details" data-id="${game.id}">Ver Detalhes</button>
                    </div>
                </div>
            </div>
        `;
        gamesList.innerHTML += card;
    });

    // Adicionar event listeners aos botões de detalhes
    document.querySelectorAll('.view-details').forEach(button => {
        button.addEventListener('click', showGameDetails);
    });
}

// Função para mostrar detalhes no modal
function showGameDetails(event) {
    const gameId = parseInt(event.target.dataset.id);
    const game = games.find(g => g.id === gameId);
    if (game) {
        const details = `
            <h4>${game.title}</h4>
            <p><strong>Género:</strong> ${game.genre}</p>
            <p><strong>Ano:</strong> ${game.year}</p>
            <p><strong>Descrição:</strong> ${game.description}</p>
            <p><strong>Avaliação Média:</strong> ${game.ratings.length ? (game.ratings.reduce((a, b) => a + b, 0) / game.ratings.length).toFixed(1) : 'N/A'}</p>
            <h6>Comentários:</h6>
            <ul>${game.comments.map(c => `<li>${c}</li>`).join('')}</ul>
        `;
        document.getElementById('gameDetails').innerHTML = details;
        const modal = new bootstrap.Modal(document.getElementById('gameModal'));
        modal.show();

        // Evento para submeter avaliação/comentário
        document.getElementById('submitReview').onclick = () => {
            const rating = parseInt(document.getElementById('rating').value);
            const comment = document.getElementById('comment').value;
            if (rating) game.ratings.push(rating);
            if (comment) game.comments.push(comment);
            modal.hide();
            renderCatalog(); // Atualizar catálogo se necessário
        };
    }
}

// Login
document.getElementById('loginForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const user = users.find(u => u.username === username && u.password === password);
    if (user) {
        alert('Login bem-sucedido!');
        if (user.role === 'admin') {
            document.getElementById('adminSection').style.display = 'block';
        }
        const loginModal = bootstrap.Modal.getInstance(document.getElementById('loginModal'));
        loginModal.hide();
    } else {
        alert('Credenciais inválidas!');
    }
});

// Adicionar novo jogo (admin)
document.getElementById('addGameForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const newGame = {
        id: games.length + 1,
        title: document.getElementById('title').value,
        genre: document.getElementById('genre').value,
        year: parseInt(document.getElementById('year').value),
        description: document.getElementById('description').value,
        ratings: [],
        comments: []
    };
    games.push(newGame);
    renderCatalog();
    e.target.reset();
});

// Filtros
document.getElementById('applyFilter').addEventListener('click', () => {
    const genre = document.getElementById('genreFilter').value;
    const year = document.getElementById('yearFilter').value;
    let filtered = games;
    if (genre) filtered = filtered.filter(g => g.genre === genre);
    if (year) filtered = filtered.filter(g => g.year === parseInt(year));
    renderCatalog(filtered);
});

// Inicializar catálogo
renderCatalog();