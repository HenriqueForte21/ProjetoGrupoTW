// script.js - Website de Jogos - Projeto Tecnologias Web
// Versão final para entrega - 22/01/2026

const users = [
    { username: 'admin', password: 'admin123', role: 'admin' },
    { username: 'user', password: 'user123', role: 'user' }
];

let games = JSON.parse(localStorage.getItem('games')) || [
    {
        id: 1,
        title: "The Legend of Zelda: Breath of the Wild",
        genre: "Aventura",
        year: 2017,
        description: "Exploração aberta num vasto mundo com física avançada e liberdade total.",
        imageUrl: "https://gaming-cdn.com/images/products/2616/orig/the-legend-of-zelda-breath-of-the-wild-switch-jogo-nintendo-eshop-europe-cover.jpg?v=1730381682",
        ratings: [5, 5, 4, 5],
        comments: ["Obra-prima absoluta", "Melhor jogo que já joguei"]
    },
    {
        id: 2,
        title: "Elden Ring",
        genre: "RPG",
        year: 2022,
        description: "Mundo aberto brutal da FromSoftware com colaboração de George R.R. Martin.",
        imageUrl: "https://upload.wikimedia.org/wikipedia/pt/thumb/0/0d/Elden_Ring_capa.jpg/330px-Elden_Ring_capa.jpg",
        ratings: [5, 4, 5, 5, 4],
        comments: []
    },
    {
        id: 3,
        title: "Grand Theft Auto V",
        genre: "Ação",
        year: 2013,
        description: "Um dos jogos mais vendidos de sempre, com história, online e mundo aberto gigante.",
        imageUrl: "https://upload.wikimedia.org/wikipedia/pt/thumb/8/80/Grand_Theft_Auto_V_capa.png/250px-Grand_Theft_Auto_V_capa.png",
        ratings: [4, 5, 4],
        comments: ["Ainda hoje jogável", "Online incrível"]
    },
    {
        id: 4,
        title: "God of War (2018)",
        genre: "Ação-Aventura",
        year: 2018,
        description: "Nova era para Kratos, agora com narrativa emocional e combate evoluído.",
        imageUrl: "https://image.api.playstation.com/vulcan/img/rnd/202010/2217/p3pYq0QxntZQREXRVdAzmn1w.png",
        ratings: [],
        comments: []
    },
    {
        id: 5,
        title: "NBA 2K26",
        genre: "Desporto",
        year: 2025,
        description: "O direito de te gabares está em jogo no MyCAREER, MyTEAM, MyNBA, The W e Play Now. Mostra os teus \"moves\" com hiperrealismo, com a tecnologia ProPLAY™, e desafia os teus amigos, ou rivais, nos modos competitivos de NBA 2K26.",
        imageUrl: "https://assets.2k.com/1a6ngf98576c/5DNr22xJExEbrXuVfmBCFe/c6ea29eab938b89da3474f43b44ebde0/NBA26_AppConfig_Thumbnail_1200x630.jpg",
        ratings: [],
        comments: []
    },
    {
        id: 6,
        title: "EA Sports FC 26",
        genre: "Desporto",
        year: 2025,
        description: "O Clube é Teu no EA SPORTS FC™ 26. Joga à tua maneira com uma experiência de jogabilidade renovada potenciada pelo feedback da comunidade, Desafios de Treinador(a) Ao Vivo e Arquétipos inspirados nos Grandes do Jogo.",
        imageUrl: "https://assetsio.gnwcdn.com/thumbnail_5comiHi.jpeg?width=690&quality=85&format=jpg&dpr=3&auto=webp",
        ratings: [],
        comments: []
    },
    {
        id: 7,
        title: "Helldivers 2",
        genre: "Shooter",
        year: 2024,
        description: "Co-op shooter intenso e caótico contra hordas alienígenas, com mecânicas de friendly fire hilariantes.",
        imageUrl: "https://image.api.playstation.com/vulcan/ap/rnd/202509/0421/f629927b9f4be0178bf8dd5fb7aa9445bafe8aee096009d5.jpg",
        ratings: [],
        comments: []
    },
    {
        id: 8,
        title: "The Forest",
        genre: "Aventura",
        year: 2018,
        description: "Como único sobrevivente de um acidente de avião, você se encontra em uma floresta misteriosa lutando para sobreviver contra uma sociedade de mutantes canibais.",
        imageUrl: "https://images.igdb.com/igdb/image/upload/t_cover_big/co20x5.png",
        ratings: [],
        comments: []
    },
    {
        id: 9,
        title: "Black Myth: Wukong",
        genre: "Ação",
        year: 2024,
        description: "Action RPG chinês inspirado em mitologia com combates espectaculares e visuais de cortar a respiração.",
        imageUrl: "https://image.api.playstation.com/vulcan/ap/rnd/202405/2120/5fd2d705e3b53619bcac56f6ed7837e4605f1457824da2a4.jpeg",
        ratings: [],
        comments: []
    },
    {
        id: 10,
        title: "Balatro",
        genre: "Puzzle / Roguelike",
        year: 2024,
        description: "O roguelike de póquer. Balatro é um jogo de construção de baralhos de cartas hipnoticamente satisfatório onde vais jogar mãos de póquer ilegais.",
        imageUrl: "https://sm.ign.com/t/ign_pt/cover/b/balatro/balatro_fph2.600.jpg",
        ratings: [],
        comments: []
    },
    {
        id: 11,
        title: "Overwatch",
        genre: "Shooter",
        year: 2016,
        description: "Hero shooter multiplayer com personagens únicas e modos competitivos.",
        imageUrl: "https://upload.wikimedia.org/wikipedia/en/5/51/Overwatch_cover_art.jpg",
        ratings: [],
        comments: []
    },
    {
        id: 12,
        title: "Hades",
        genre: "Roguelike",
        year: 2020,
        description: "Roguelike de ação mitológica com narrativa dinâmica e combate viciante.",
        imageUrl: "https://upload.wikimedia.org/wikipedia/pt/thumb/8/80/Hades_capa.jpg/330px-Hades_capa.jpg",
        ratings: [],
        comments: []
    },
    {
        id: 13,
        title: "Uncharted 4: A Thief's End",
        genre: "Ação-Aventura",
        year: 2016,
        description: "Aventura cinematográfica com Nathan Drake em busca de tesouros perdidos.",
        imageUrl: "https://gaming-cdn.com/images/products/21536/orig/uncharted-4-a-thief-s-end-playstation-4-playstation-store-cover.jpg?v=1768235733",
        ratings: [],
        comments: []
    },
    {
        id: 14,
        title: "Dark Souls III",
        genre: "Action RPG",
        year: 2016,
        description: "RPG de ação desafiador com bosses épicos e mundo interconectado.",
        imageUrl: "https://cdn.dlcompare.com/game_tetiere/upload/gameimage/file/7437.jpeg.webp",
        ratings: [],
        comments: []
    },
    {
        id: 15,
        title: "Stardew Valley",
        genre: "Simulação",
        year: 2016,
        description: "Simulador de fazenda relaxante com cultivo, mineração e relações sociais.",
        imageUrl: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/413150/capsule_616x353.jpg?t=1754692865",
        ratings: [],
        comments: []
    },
    {
        id: 16,
        title: "Civilization VI",
        genre: "Estratégia",
        year: 2016,
        description: "Jogo de estratégia por turnos para construir impérios ao longo da história.",
        imageUrl: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/289070/capsule_616x353.jpg?t=1740607040",
        ratings: [],
        comments: []
    },
    {
        id: 17,
        title: "Titanfall 2",
        genre: "FPS",
        year: 2016,
        description: "Shooter com mechs gigantes e campanha single-player aclamada.",
        imageUrl: "https://gaming-cdn.com/images/products/1273/orig/titanfall-2-pc-jogo-ea-app-cover.jpg?v=1703158431",
        ratings: [],
        comments: []
    },
    {
        id: 18,
        title: "The Witcher 3: Wild Hunt",
        genre: "RPG",
        year: 2015,
        description: "RPG épico com mundo aberto, narrativa ramificada e caçadas a monstros.", // Nota: 2015 é próximo de 2016, se quiser ajustar
        imageUrl: "https://images.igdb.com/igdb/image/upload/t_cover_big/co1wyy.webp",
        ratings: [],
        comments: []
    },
    {
        id: 19,
        title: "Cuphead",
        genre: "Run and Gun",
        year: 2017,
        description: "Run and gun com animação clássica dos anos 30 e dificuldade elevada.",
        imageUrl: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/268910/capsule_616x353.jpg?t=1709068852",
        ratings: [],
        comments: []
    },
    {
        id: 20,
        title: "Hollow Knight",
        genre: "Plataforma",
        year: 2017,
        description: "Plataforma 2D com exploração subterrânea e combates precisos.",
        imageUrl: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/367520/header.jpg?t=1764916620",
        ratings: [],
        comments: []
    },
    {
        id: 21,
        title: "Five Nights at Freddy's",
        genre: "Survival Horror",
        year: 2014,
        description: "O jogo original que iniciou a saga: sobrevive 5 noites como guarda noturno na Freddy Fazbear's Pizza, monitorizando animatrónicos assassinos.",
        imageUrl: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/319510/header.jpg?t=1666889251",
        ratings: [],
        comments: []
    },
    {
        id: 22,
        title: "Five Nights at Freddy's 2",
        genre: "Survival Horror",
        year: 2014,
        description: "Prequela com mais animatrónicos, máscara para se disfarçar e mecânicas mais intensas de gestão de recursos.",
        imageUrl: "https://upload.wikimedia.org/wikipedia/en/3/35/FNAF2logo.jpg",
        ratings: [],
        comments: []
    },
    {
        id: 23,
        title: "Five Nights at Freddy's 3",
        genre: "Survival Horror",
        year: 2015,
        description: "Localização abandonada com fantasmas dos animatrónicos anteriores. Sistema de ventilação e alucinações aumentam a tensão.",
        imageUrl: "https://img.itch.zone/aW1nLzEyMDc2MjU0LmpwZw==/original/SQ218u.jpg",
        ratings: [],
        comments: []
    },
    {
        id: 24,
        title: "Five Nights at Freddy's 4",
        genre: "Survival Horror",
        year: 2015,
        description: "Ação passa-se em casa: criança com pesadelos enfrenta versões nightmare dos animatrónicos. Usa lanterna e portas.",
        imageUrl: "https://newzoo.com/wp-content/uploads/api/games/artworks/game--five-nights-at-freddys-4.jpg",
        ratings: [],
        comments: []
    },
    {
        id: 25,
        title: "Five Nights at Freddy's: Sister Location",
        genre: "Survival Horror",
        year: 2016,
        description: "Instalação subterrânea com novos animatrónicos e mecânicas únicas (ex: choque elétrico, esconderijo). História mais profunda.",
        imageUrl: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/506610/header.jpg?t=1579635985",
        ratings: [],
        comments: []
    }
];

// Salvar jogos no localStorage
function saveGames() {
    localStorage.setItem('games', JSON.stringify(games));
}

// Atualizar opções de género no filtro e no datalist
function updateGenreOptions() {
    const genres = [...new Set(games.map(g => g.genre))].sort();
    
    const select = document.getElementById('genreFilter');
    select.innerHTML = '<option value="">Todos os géneros</option>';
    genres.forEach(genre => {
        const option = document.createElement('option');
        option.value = genre;
        option.textContent = genre;
        select.appendChild(option);
    });

    const datalist = document.getElementById('genreSuggestions');
    datalist.innerHTML = '';
    genres.forEach(genre => {
        const option = document.createElement('option');
        option.value = genre;
        datalist.appendChild(option);
    });
}

// Calcular média de avaliações
function calculateAverage(ratings) {
    if (!ratings.length) return '—';
    const sum = ratings.reduce((a, b) => a + b, 0);
    return (sum / ratings.length).toFixed(1);
}

// Renderizar catálogo
function renderCatalog(filtered = games) {
    const container = document.getElementById('gamesList');
    container.innerHTML = '';

    filtered.forEach(game => {
        const avg = calculateAverage(game.ratings);

        let html = `
            <div class="col-md-6 col-lg-4 col-xl-3 mb-4">
                <div class="card h-100 shadow-sm game-card">
        `;

        if (game.imageUrl) {
            html += `<img src="${game.imageUrl}" class="card-img-top" alt="${game.title}" style="height:240px; object-fit:cover;">`;
        }

        html += `
                    <div class="card-body">
                        <h5 class="card-title">${game.title}</h5>
                        <p class="card-text text-muted small">
                            ${game.genre} • ${game.year}<br>
                            <strong>Avaliação: ${avg} ★</strong> (${game.ratings.length})
                        </p>
                        <button class="btn btn-outline-primary btn-sm view-details" data-id="${game.id}">
                            Ver detalhes
                        </button>
                    </div>
                </div>
            </div>
        `;

        container.innerHTML += html;
    });

    // Atualizar título com contagem
    const count = filtered.length;
    document.querySelector('main section h2').textContent = 
        `Catálogo de Jogos (${count} jogo${count !== 1 ? 's' : ''} encontrado${count !== 1 ? 's' : ''})`;

    // Adicionar eventos aos botões de detalhes
    document.querySelectorAll('.view-details').forEach(btn => {
        btn.addEventListener('click', showGameDetails);
    });
}

// Mostrar detalhes do jogo no modal
function showGameDetails(e) {
    const id = Number(e.target.dataset.id);
    const game = games.find(g => g.id === id);
    if (!game) return;

    const avg = calculateAverage(game.ratings);

    let html = `
        ${game.imageUrl ? `<img src="${game.imageUrl}" class="img-fluid rounded mb-3" style="max-height:400px; object-fit:contain; width:100%">` : ''}
        <h4>${game.title}</h4>
        <p><strong>Género:</strong> ${game.genre}</p>
        <p><strong>Ano:</strong> ${game.year}</p>
        <p><strong>Descrição:</strong> ${game.description}</p>
        <p><strong>Avaliação média:</strong> ${avg} ★ (${game.ratings.length} avaliações)</p>
        
        <hr>
        <h5>Comentários</h5>
    `;

    if (game.comments.length === 0) {
        html += '<p class="text-muted">Ainda não existem comentários.</p>';
    } else {
        html += '<ul class="list-group mb-3">';
        game.comments.forEach(c => {
            html += `<li class="list-group-item">${c}</li>`;
        });
        html += '</ul>';
    }

    document.getElementById('gameDetails').innerHTML = html;

    const modal = new bootstrap.Modal(document.getElementById('gameModal'));
    modal.show();

    // Reset e evento do botão submeter
    const ratingSelect = document.getElementById('rating');
    const commentArea = document.getElementById('comment');
    ratingSelect.value = '';
    commentArea.value = '';

    document.getElementById('submitReview').onclick = function() {
        const rating = ratingSelect.value;
        const comment = commentArea.value.trim();

        let changed = false;

        if (rating && rating !== "") {
            game.ratings.push(Number(rating));
            changed = true;
        }

        if (comment) {
            game.comments.push(comment);
            changed = true;
        }

        if (changed) {
            saveGames();
            renderCatalog();
            modal.hide();
            alert('Avaliação submetida com sucesso!');
        } else {
            alert('Selecione uma avaliação ou escreva um comentário.');
        }
    };
}

// EVENTO - Aplicar filtros e pesquisa
document.getElementById('applyFilter')?.addEventListener('click', () => {
    const search = document.getElementById('searchInput')?.value.toLowerCase().trim() || '';
    const genre = document.getElementById('genreFilter')?.value || '';
    const yearStr = document.getElementById('yearFilter')?.value || '';

    let filtered = games;

    if (search) {
        filtered = filtered.filter(g => g.title.toLowerCase().includes(search));
    }

    if (genre) {
        filtered = filtered.filter(g => g.genre === genre);
    }

    if (yearStr) {
        const year = Number(yearStr);
        filtered = filtered.filter(g => g.year === year);
    }

    renderCatalog(filtered);
});

// EVENTO - Login
document.getElementById('loginForm')?.addEventListener('submit', e => {
    e.preventDefault();

    const username = document.getElementById('username')?.value.trim();
    const password = document.getElementById('password')?.value.trim();

    const user = users.find(u => u.username === username && u.password === password);

    if (user) {
        alert(`Bem-vindo(a), ${username}!`);
        if (user.role === 'admin') {
            document.getElementById('adminSection').style.display = 'block';
        }
        bootstrap.Modal.getInstance(document.getElementById('loginModal'))?.hide();
    } else {
        alert('Utilizador ou palavra-passe incorretos.');
    }
});

// EVENTO - Adicionar jogo novo (admin)
document.getElementById('addGameForm')?.addEventListener('submit', e => {
    e.preventDefault();

    const newId = games.length ? Math.max(...games.map(g => g.id)) + 1 : 1;

    const newGame = {
        id: newId,
        title: document.getElementById('title')?.value.trim(),
        genre: document.getElementById('genre')?.value.trim(),
        year: Number(document.getElementById('year')?.value),
        imageUrl: document.getElementById('imageUrl')?.value.trim() || null,
        description: document.getElementById('description')?.value.trim(),
        ratings: [],
        comments: []
    };

    if (!newGame.title || !newGame.genre || !newGame.year || !newGame.description) {
        alert('Por favor preencha todos os campos obrigatórios.');
        return;
    }

    games.push(newGame);
    saveGames();
    updateGenreOptions();
    renderCatalog();
    e.target.reset();
    alert('Jogo adicionado com sucesso!');
});

// Inicialização
updateGenreOptions();
renderCatalog();