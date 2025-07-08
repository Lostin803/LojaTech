// Produtos
const produtos = [
  {
    _id: 1,
    get id() {
      return this._id;
    },
    set id(value) {
      this._id = value;
    },
    title: "ASUS TUF Gaming F16",
    price: 4999.0,
    img: "https://br.store.asus.com/media/catalog/product/p/r/principal_01-_fx607__3_1.png?quality=90&bg-color=255,255,255&fit=bounds&height=439&width=439&canvas=439:439",
    category: "notebooks",
    oferta: true,
    descricao: "O ASUS TUF Gaming F16 é um notebook gamer potente, projetado para oferecer desempenho excepcional em jogos e tarefas pesadas. Equipado com uma placa de vídeo RTX, 16GB de RAM e SSD de 512GB, ele proporciona carregamento rápido e multitarefa fluida. Seu design robusto e resistente, combinado com um sistema de refrigeração eficiente, garante longas horas de jogabilidade sem superaquecimento. Ideal para gamers e profissionais que buscam alto desempenho e durabilidade.",
    marca: "TechBrand",
    avaliacao: 4.8,
  },
  {
    id: 2,
    title: "PRO X SUPERLIGHT 2",
    price: 235.2,
    img: "https://resource.logitechg.com/w_692,c_lpad,ar_4:3,q_auto,f_auto,dpr_1.0/d_transparent.gif/content/dam/gaming/en/products/pro-x-superlight-2-dex/gallery/new-gallery-assets-2025/pro-x-superlight-2-dex-mouse-top-angle-black-gallery-1.png?v=1",
    category: "perifericos",
    oferta: true,
    descricao: "O PRO X SUPERLIGHT 2 DEX é um mouse assimétrico de 60 g que apresenta o avançado sensor HERO 2, a robusta tecnologia sem fio LIGHTSPEED e os switches LIGHTFORCE, proporcionando até 95 horas de duração da bateria.",
    marca: "Logitech",
    avaliacao: 4.9,
    },
  {
    id: 3,
    title: "Headset Surround 7.1",
    price: 349.9,
    img: "https://img.terabyteshop.com.br/produto/g/headset-gamer-havit-hv-h2002d-35mm-pretocinza_126056.png",
    category: "perifericos",
    oferta: false,
    descricao: "O Headset Surround 7.1 oferece imersão sonora completa com som 7.1 virtual, perfeito para jogos, filmes e música. Seus drivers de alta qualidade proporcionam graves profundos e agudos claros, enquanto o microfone integrado garante comunicação nítida.",
    marca: "Havit",
    avaliacao: 4.5,
  },
  {
    id: 4,
    title: "Teclado Mecânico Pro",
    price: 199.99,
    img: "https://images.tcdn.com.br/img/img_prod/1314128/teclado_mecanico_redragon_castor_pro_rgb_switch_marrom_sem_fio_preto_vermelho_e_branco_k631rgb_pro_b_3993_1_ca341950557ba5845783535b51743627.jpg",
    category: "perifericos",
    oferta: false,
    descricao: "O Teclado Mecânico Pro combina precisão e durabilidade com switches mecânicos que oferecem feedback tátil e sonoro satisfatório. Projetado para gamers e digitadores exigentes, possui iluminação RGB personalizável e construção robusta.",
    marca: "Redragon",
    avaliacao: 4.6,
  },
  {
   id: 5,
    title: "Webcam Full HD",
    price: 439.99,
    img: "https://cdn.awsli.com.br/2547/2547358/produto/206197257/webcam-logitech-c920-1-hjjltj.jpg",
    category: "acessorios",
    oferta: true,
    descricao: "A Webcam Full HD proporciona vídeos nítidos e claros com resolução 1080p, ideal para reuniões, transmissões ao vivo e chamadas de vídeo. Com ajuste automático de luz e foco, garante imagens profissionais em qualquer ambiente.",
    marca: "Logitech",
    avaliacao: 4.7,
  },
  {
     id: 6,
    title: "Mousepad logitech",
    price: 89.9,
    img: "https://www.havan.com.br/media/catalog/product/cache/73a52df140c4d19dbec2b6c485ea6a50/m/o/mousepad-gamer-logitech-g240_238324_1.webp",
    category: "acessorios",
    oferta: false,
    descricao: "O Mousepad Logitech é projetado para gamers e profissionais que exigem precisão e fluidez nos movimentos. Com superfície otimizada para sensores ópticos e base antiderrapante, garante controle total do mouse.",
    marca: "Logitech",
    avaliacao: 4.4,
  },
  {
    id: 7,
    title: "Notebook Ultra Slim",
    price: 3999.0,
    img: "download (2).jpeg",
    category: "notebooks",
    oferta: false,
    descricao: "O Notebook Ultra Slim combina portabilidade e desempenho em um design elegante e leve. Ideal para trabalho e estudo, possui tela de alta resolução, processador eficiente e armazenamento rápido.",
    marca: "TechBrand",
    avaliacao: 4.3,
  },
  {
    id: 8,
    title: "Fone Bluetooth",
    price: 371.0,
    img: "https://lojaibyte.vteximg.com.br/arquivos/ids/427931-1200-1200/47304-1_47304.jpg?v=638496672672300000",
    category: "acessorios",
    oferta: true,
    descricao: "O Fone Bluetooth oferece liberdade de movimento com conexão sem fio estável e alta qualidade de áudio. Com bateria de longa duração e design ergonômico, é ideal para ouvir música, fazer chamadas ou assistir vídeos.",
    marca: "JBL",
    avaliacao: 4.8,
  },
    {
    id: 9,
    title: "Monitor Gamer 27'' 165Hz",
    price: 1299.90,
    img: "https://images.kabum.com.br/produtos/fotos/monitorgamer.jpg",
    category: "monitores",
    oferta: true,
    descricao: "Monitor gamer com alta taxa de atualização, ideal para jogos competitivos e imagens fluidas.",
    marca: "AOC",
    avaliacao: 4.7,
  },
  {
    id: 10,
    title: "Cadeira Gamer Mymax Mx5",
    price: 899.00,
    img: "https://images9.kabum.com.br/produtos/fotos/sync_mirakl/265789/xlarge/Cadeira-Gamer-Mymax-Mx5-At-150Kg-Girat-ria-e-Ergon-mica-Preto_1745857831.jpg",
    category: "cadeiras",
    oferta: false,
    descricao: "Conforto e ergonomia para longas sessões de uso, com ajuste de altura e inclinação.",
    marca: "ThunderX3",
    avaliacao: 4.5,
  },
  {
    id: 11,
    title: "SSD NVMe 1TB",
    price: 499.90,
    img: "https://images.kabum.com.br/produtos/fotos/ssd1tb.jpg",
    category: "armazenamento",
    oferta: true,
    descricao: "SSD NVMe de 1TB com velocidades de leitura e gravação ultrarrápidas.",
    marca: "Kingston",
    avaliacao: 4.9,
  },
  {
    id: 12,
    title: "Placa de Vídeo RTX 4060",
    price: 2499.00,
    img: "https://images.kabum.com.br/produtos/fotos/placavideo4060.jpg",
    category: "placas",
    oferta: false,
    descricao: "Placa de vídeo NVIDIA RTX 4060, desempenho de ponta para jogos e aplicações profissionais.",
    marca: "NVIDIA",
    avaliacao: 4.8,
  },
  {
    id: 13,
    title: "Teclado Mecânico RGB",
    price: 299.99,
    img: "https://images.kabum.com.br/produtos/fotos/tecladomecanico.jpg",
    category: "perifericos",
    oferta: true,
    descricao: "Teclado mecânico com iluminação RGB e switches de alta durabilidade.",
    marca: "Corsair",
    avaliacao: 4.6,
  },
  {
    id: 14,
    title: "Mouse Gamer 16000 DPI",
    price: 159.90,
    img: "https://images.kabum.com.br/produtos/fotos/mousegamer.jpg",
    category: "perifericos",
    oferta: false,
    descricao: "Mouse gamer com sensor de alta precisão e ajuste de DPI.",
    marca: "Razer",
    avaliacao: 4.7,
  },
  {
    id: 15,
    title: "Headset Wireless 7.1",
    price: 499.00,
    img: "https://images.kabum.com.br/produtos/fotos/headsetwireless.jpg",
    category: "perifericos",
    oferta: true,
    descricao: "Headset sem fio com som surround 7.1 e microfone removível.",
    marca: "HyperX",
    avaliacao: 4.8,
  },
  {
    id: 16,
    title: "Webcam 4K Ultra HD",
    price: 699.00,
    img: "https://images.kabum.com.br/produtos/fotos/webcam4k.jpg",
    category: "acessorios",
    oferta: false,
    descricao: "Webcam com resolução 4K, foco automático e microfone embutido.",
    marca: "Logitech",
    avaliacao: 4.9,
  },
  {
    id: 17,
    title: "Notebook Gamer Ryzen 7",
    price: 5999.00,
    img: "https://images.kabum.com.br/produtos/fotos/notebookgamer.jpg",
    category: "notebooks",
    oferta: true,
    descricao: "Notebook gamer com processador Ryzen 7, 16GB RAM e RTX 3050.",
    marca: "Acer",
    avaliacao: 4.7,
  },
  {
    id: 18,
    title: "Smartwatch Fitness",
    price: 349.90,
    img: "https://images.kabum.com.br/produtos/fotos/smartwatch.jpg",
    category: "acessorios",
    oferta: false,
    descricao: "Smartwatch com monitoramento de saúde, GPS e resistência à água.",
    marca: "Xiaomi",
    avaliacao: 4.5,
  },
  {
    id: 19,
    title: "Impressora Multifuncional Wi-Fi",
    price: 599.00,
    img: "https://images.kabum.com.br/produtos/fotos/impressora.jpg",
    category: "acessorios",
    oferta: true,
    descricao: "Impressora multifuncional com conexão Wi-Fi e impressão frente e verso.",
    marca: "HP",
    avaliacao: 4.4,
  },
  {
    id: 20,
    title: "HD Externo 2TB",
    price: 399.90,
    img: "https://images.kabum.com.br/produtos/fotos/hdexterno.jpg",
    category: "armazenamento",
    oferta: false,
    descricao: "HD externo portátil de 2TB, ideal para backups e transporte de arquivos.",
    marca: "Seagate",
    avaliacao: 4.6,
  },
  {
    id: 21,
    title: "Fonte 650W 80 Plus Bronze",
    price: 349.00,
    img: "https://images.kabum.com.br/produtos/fotos/fonte650w.jpg",
    category: "acessorios",
    oferta: true,
    descricao: "Fonte de alimentação 650W com certificação 80 Plus Bronze.",
    marca: "Corsair",
    avaliacao: 4.7,
  },
  {
    id: 22,
    title: "Gabinete Gamer RGB",
    price: 499.00,
    img: "https://images.kabum.com.br/produtos/fotos/gabinete.jpg",
    category: "acessorios",
    oferta: false,
    descricao: "Gabinete gamer com painel lateral em vidro e iluminação RGB.",
    marca: "Cooler Master",
    avaliacao: 4.8,
  },
  {
    id: 23,
    title: "Tablet 10.1'' Android",
    price: 1199.00,
    img: "https://images.kabum.com.br/produtos/fotos/tablet.jpg",
    category: "acessorios",
    oferta: true,
    descricao: "Tablet com tela de 10.1 polegadas, Android e bateria de longa duração.",
    marca: "Samsung",
    avaliacao: 4.5,
  },
  {
    id: 24,
    title: "Roteador Wi-Fi 6",
    price: 399.00,
    img: "https://images.kabum.com.br/produtos/fotos/roteador.jpg",
    category: "acessorios",
    oferta: false,
    descricao: "Roteador Wi-Fi 6 de alta velocidade, ideal para casas conectadas.",
    marca: "TP-Link",
    avaliacao: 4.6,
  },
];

// Carrinho
let carrinho = [];

// Renderização de produtos
function renderProdutos(lista, containerId) {
  const container = document.getElementById(containerId);
  container.innerHTML = "";
  if (lista.length === 0) {
    container.innerHTML =
      '<div style="color:#fff;grid-column:1/-1;text-align:center;font-size:1.2rem;margin:40px 0;">Nenhum produto encontrado.</div>';
    return;
  }
  lista.forEach((prod) => {
    const card = document.createElement("div");
    card.className = "product-card";
    card.setAttribute("data-title", prod.title);
    card.setAttribute("data-category", prod.category);
    card.style.cursor = "pointer";
    card.onclick = () => openProductModal(prod);
    card.innerHTML = `
            <img src="${prod.img}" alt="${prod.title}">
            <div class="product-title">${prod.title}</div>
            <div class="product-price">R$ ${prod.price.toLocaleString("pt-BR", {
              minimumFractionDigits: 2,
            })}</div>
            <button class="buy-btn">Comprar</button>
        `;
    // Corrige o botão para não abrir o modal
    card.querySelector(".buy-btn").onclick = function (event) {
      event.stopPropagation();
      adicionarCarrinho(prod.id);
    };
    container.appendChild(card);
  });
}
// Inicialização
renderProdutos(produtos, "products");
renderProdutos(
  produtos.filter((p) => p.oferta),
  "offersProducts"
);
renderProdutos(produtos, "categoriesProducts");

// Busca
function buscarProduto() {
  const termo = document
    .getElementById("searchInput")
    .value.trim()
    .toLowerCase();
  const container = document.getElementById("products");
  container.innerHTML = '<div class="loading-spinner"></div>';
  setTimeout(() => {
    const filtrados = produtos.filter(
      (p) =>
        p.title.toLowerCase().includes(termo) ||
        (p.marca && p.marca.toLowerCase().includes(termo)) ||
        (p.descricao && p.descricao.toLowerCase().includes(termo))
    );
    renderProdutos(filtrados, "products");
  }, 500); // 500ms só para mostrar o loading
}

// Filtro por categoria
function filterCategory(cat, btn, onlyCategoriesSection) {
  document
    .querySelectorAll(".category-btn")
    .forEach((b) => b.classList.remove("active"));
  if (btn) btn.classList.add("active");
  let lista = produtos;
  if (cat !== "all")
    lista = lista.filter(
      (p) => p.category === cat || (cat === "ofertas" && p.oferta)
    );
  if (onlyCategoriesSection) {
    renderProdutos(lista, "categoriesProducts");
  } else {
    renderProdutos(lista, "products");
  }
}

// Carrinho
function adicionarCarrinho(id) {
  const prod = produtos.find((p) => p.id === id);
  const idx = carrinho.findIndex((item) => item.id === id);
  if (idx > -1) {
    carrinho[idx].qty += 1;
  } else {
    carrinho.push({ ...prod, qty: 1 });
  }
  atualizarCarrinho();
  openCart();
}
function atualizarCarrinho() {
  document.getElementById("cartCount").textContent = carrinho.reduce(
    (a, b) => a + b.qty,
    0
  );
  const cartItems = document.getElementById("cartItems");
  cartItems.innerHTML = "";
  if (carrinho.length === 0) {
    cartItems.innerHTML =
      '<div style="text-align:center;color:#888;">Seu carrinho está vazio.</div>';
  } else {
    carrinho.forEach((item) => {
      const div = document.createElement("div");
      div.className = "cart-item";
      div.innerHTML = `
                        <span class="cart-item-title">${item.title}</span>
                        <button onclick="alterarQtd(${
                          item.id
                        },-1)" style="background:none;border:none;font-size:1.2rem;color:var(--primary);cursor:pointer;">-</button>
                        <span class="cart-item-qty">${item.qty}</span>
                        <button onclick="alterarQtd(${
                          item.id
                        },1)" style="background:none;border:none;font-size:1.2rem;color:var(--primary);cursor:pointer;">+</button>
                        <span>R$ ${(item.price * item.qty).toLocaleString(
                          "pt-BR",
                          { minimumFractionDigits: 2 }
                        )}</span>
                        <button onclick="removerItem(${
                          item.id
                        })" style="background:none;border:none;color:#c00;font-size:1.2rem;cursor:pointer;">&times;</button>
                    `;
      cartItems.appendChild(div);
    });
  }
  document.getElementById("cartTotal").textContent =
    "Total: R$ " +
    carrinho
      .reduce((a, b) => a + b.price * b.qty, 0)
      .toLocaleString("pt-BR", { minimumFractionDigits: 2 });
}
function alterarQtd(id, delta) {
  const idx = carrinho.findIndex((item) => item.id === id);
  if (idx > -1) {
    carrinho[idx].qty += delta;
    if (carrinho[idx].qty <= 0) carrinho.splice(idx, 1);
    atualizarCarrinho();
  }
}
function removerItem(id) {
  carrinho = carrinho.filter((item) => item.id !== id);
  atualizarCarrinho();
}
function openCart() {
  atualizarCarrinho();
  document.getElementById("cartModal").style.display = "flex";
}
function closeCart() {
  document.getElementById("cartModal").style.display = "none";
}
function finalizarCompra() {
  if (carrinho.length === 0) {
    alert("Seu carrinho está vazio!");
    return;
  }
  alert("Compra finalizada! Obrigado por comprar na LojaTech.");
  carrinho = [];
  atualizarCarrinho();
  closeCart();
}

// Navegação entre seções
function showSection(sec, el) {
  event && event.preventDefault();
  document
    .querySelectorAll("nav a")
    .forEach((a) => a.classList.remove("active"));
  if (el) el.classList.add("active");
  document.getElementById("homeSection").style.display =
    sec === "home" ? "block" : "none";
  document.getElementById("offersSection").style.display =
    sec === "offers" ? "block" : "none";
  document.getElementById("categoriesSection").style.display =
    sec === "categories" ? "block" : "none";
  document.getElementById("contactSection").style.display =
    sec === "contact" ? "block" : "none";
}

// Contato
function enviarContato(e) {
  e.preventDefault();
  document.getElementById("contactMsg").textContent =
    "Mensagem enviada! Entraremos em contato em breve.";
  document.getElementById("contactForm").reset();
}

// Fechar modal ao clicar fora
window.onclick = function (event) {
  const modal = document.getElementById("cartModal");
  if (event.target === modal) closeCart();
};

function openProductModal(prod) {
  const modal = document.getElementById("productModal");
  const content = document.getElementById("productModalContent");
  content.innerHTML = `
      <button class="close-btn" onclick="closeProductModal()">&times;</button>
      <img src="${prod.img}" alt="${prod.title}">
      <h3>${prod.title}</h3>
      <div class="product-price">R$ ${prod.price.toLocaleString("pt-BR", {
        minimumFractionDigits: 2,
      })}</div>
      <p><b>Categoria:</b> ${prod.category}</p>
      <p><b>Marca:</b> ${prod.marca ? prod.marca : "Não informado"}</p>
     <p><b>Avaliação:</b> ${
  prod.avaliacao
    ? "★".repeat(Math.round(prod.avaliacao)) +
      "☆".repeat(5 - Math.round(prod.avaliacao)) +
      ` (${prod.avaliacao})`
    : "Sem avaliação"
}</p>
      <p><b>Descrição:</b> ${
        prod.descricao ? prod.descricao : "Sem descrição."
      }</p>
      <button class="buy-btn" onclick="adicionarCarrinho(${
        prod.id
      });closeProductModal()">Adicionar ao Carrinho</button>
  `;
  modal.style.display = "flex";
  function openProductModal(prod) {
  // ...código existente...
  modal.style.display = "flex";
  setTimeout(() => {
    modal.querySelector('.close-btn').focus();
  }, 100);
}
}
function closeProductModal() {
  document.getElementById("productModal").style.display = "none";
}
window.addEventListener("click", function (event) {
  const modal = document.getElementById("productModal");
  if (event.target === modal) closeProductModal();
});

window.addEventListener("keydown", function (event) {
  if (event.key === "Escape") closeProductModal();
});
const PRODUTOS_POR_PAGINA = 8;
let paginaAtual = 0;

function renderProdutosPaginados() {
  // Ordena por ID crescente
  const produtosOrdenados = [...produtos].sort((a, b) => a.id - b.id);
  const inicio = paginaAtual * PRODUTOS_POR_PAGINA;
  const fim = inicio + PRODUTOS_POR_PAGINA;
  let produtosPagina = produtosOrdenados.slice(inicio, fim);

  // Se chegou ao fim, volta para o início
  if (produtosPagina.length === 0) {
    paginaAtual = 0;
    produtosPagina = produtosOrdenados.slice(0, PRODUTOS_POR_PAGINA);
  }

  // Renderiza os produtos da página
  const container = document.getElementById("products");
  container.innerHTML = "";
  produtosPagina.forEach((prod) => {
    const card = document.createElement("div");
    card.className = "product-card";
    card.setAttribute("data-title", prod.title);
    card.setAttribute("data-category", prod.category);
    card.style.cursor = "pointer";
    card.onclick = () => openProductModal(prod);
    card.innerHTML = `
      <img src="${prod.img}" alt="${prod.title}">
      <div class="product-title">${prod.title}</div>
      <div class="product-price">R$ ${prod.price.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}</div>
      <div style="font-size:0.95rem;color:#444;margin-bottom:8px;"><b>Marca:</b> ${prod.marca || '-'}</div>
      <div style="font-size:0.95rem;color:#444;margin-bottom:8px;"><b>Avaliação:</b> ${prod.avaliacao ? '★'.repeat(Math.round(prod.avaliacao)) + '☆'.repeat(5-Math.round(prod.avaliacao)) + ` (${prod.avaliacao})` : '-'}</div>
      <button class="buy-btn">Comprar</button>
    `;
    card.querySelector(".buy-btn").onclick = function (event) {
      event.stopPropagation();
      adicionarCarrinho(prod.id);
    };
    container.appendChild(card);
  });
}
document.getElementById("btnProximaPagina").onclick = function () {
  paginaAtual++;
  renderProdutosPaginados();
};

// Inicialize mostrando a primeira página ao carregar
renderProdutosPaginados();