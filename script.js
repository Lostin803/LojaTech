// Produtos
const produtos = [
  {
    id: 1,
    title: "ASUS TUF Gaming F16",
    price: 4999.0,
    img: "https://br.store.asus.com/media/catalog/product/p/r/principal_01-_fx607__3_1.png?quality=90&bg-color=255,255,255&fit=bounds&height=439&width=439&canvas=439:439",
    category: "notebooks",
    oferta: true,
    descricao:
      "O ASUS TUF Gaming F16 é um notebook gamer potente, projetado para oferecer desempenho excepcional em jogos e tarefas pesadas. Equipado com uma placa de vídeo RTX, 16GB de RAM e SSD de 512GB, ele proporciona carregamento rápido e multitarefa fluida. Seu design robusto e resistente, combinado com um sistema de refrigeração eficiente, garante longas horas de jogabilidade sem superaquecimento. Ideal para gamers e profissionais que buscam alto desempenho e durabilidade.",
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
    descricao:
      "O PRO X SUPERLIGHT 2 DEX é um mouse assimétrico de 60 g que apresenta o avançado sensor HERO 2, a robusta tecnologia sem fio LIGHTSPEED e os switches LIGHTFORCE, proporcionando até 95 horas de duração da bateria.",
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
    descricao:
      "O Headset Surround 7.1 oferece imersão sonora completa com som 7.1 virtual, perfeito para jogos, filmes e música. Seus drivers de alta qualidade proporcionam graves profundos e agudos claros, enquanto o microfone integrado garante comunicação nítida.",
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
    descricao:
      "O Teclado Mecânico Pro combina precisão e durabilidade com switches mecânicos que oferecem feedback tátil e sonoro satisfatório. Projetado para gamers e digitadores exigentes, possui iluminação RGB personalizável e construção robusta.",
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
    descricao:
      "A Webcam Full HD proporciona vídeos nítidos e claros com resolução 1080p, ideal para reuniões, transmissões ao vivo e chamadas de vídeo. Com ajuste automático de luz e foco, garante imagens profissionais em qualquer ambiente.",
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
    descricao:
      "O Mousepad Logitech é projetado para gamers e profissionais que exigem precisão e fluidez nos movimentos. Com superfície otimizada para sensores ópticos e base antiderrapante, garante controle total do mouse.",
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
    descricao:
      "O Notebook Ultra Slim combina portabilidade e desempenho em um design elegante e leve. Ideal para trabalho e estudo, possui tela de alta resolução, processador eficiente e armazenamento rápido.",
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
    descricao:
      "O Fone Bluetooth oferece liberdade de movimento com conexão sem fio estável e alta qualidade de áudio. Com bateria de longa duração e design ergonômico, é ideal para ouvir música, fazer chamadas ou assistir vídeos.",
    marca: "JBL",
    avaliacao: 4.8,
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
  idx > -1 ? (carrinho[idx].qty += 1) : carrinho.push({ ...prod, qty: 1 });
  atualizarCarrinho();
  openCart();
  mostrarMensagem("Produto adicionado ao carrinho!");
}
function atualizarCarrinho() {
  document.getElementById("cartCount").textContent = carrinho.reduce((a, b) => a + b.qty, 0);
  const cartItems = document.getElementById("cartItems");
  cartItems.innerHTML = carrinho.length
    ? carrinho
        .map(
          (item) => `
        <div class="cart-item">
          <span class="cart-item-title">${item.title}</span>
          <button onclick="alterarQtd(${item.id},-1)" style="background:none;border:none;font-size:1.2rem;color:var(--primary);cursor:pointer;">-</button>
          <span class="cart-item-qty">${item.qty}</span>
          <button onclick="alterarQtd(${item.id},1)" style="background:none;border:none;font-size:1.2rem;color:var(--primary);cursor:pointer;">+</button>
          <span>R$ ${(item.price * item.qty).toLocaleString("pt-BR", { minimumFractionDigits: 2 })}</span>
          <button onclick="removerItem(${item.id})" style="background:none;border:none;color:#c00;font-size:1.2rem;cursor:pointer;">&times;</button>
        </div>
      `
        )
        .join("")
    : '<div style="text-align:center;color:#888;">Seu carrinho está vazio.</div>';
  document.getElementById("cartTotal").textContent =
    "Total: R$ " + carrinho.reduce((a, b) => a + b.price * b.qty, 0).toLocaleString("pt-BR", { minimumFractionDigits: 2 });
}
function mostrarMensagem(texto) {
  const msg = document.createElement("div");
  msg.className = "success-msg";
  msg.textContent = texto;
  document.body.appendChild(msg);
  setTimeout(() => msg.remove(), 1200);
}
function finalizarCompra() {
  if (carrinho.length === 0) return alert("Seu carrinho está vazio!");
  alert("Compra finalizada! Obrigado por comprar na LojaTech.");
  carrinho = [];
  atualizarCarrinho();
  closeCart();
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
// Mensagem de sucesso
const msg = document.createElement("div");
msg.className = "success-msg";
msg.textContent = "Produto adicionado ao carrinho!";
document.body.appendChild(msg);
setTimeout(() => msg.remove(), 1200);

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
      modal.querySelector(".close-btn").focus();
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
