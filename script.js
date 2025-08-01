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
    img: "data:image/jpeg;base64,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",
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
  {
    id: 9,
    title: "Monitor Gamer Samsung Odyssey G5 165Hz",
    price: 1199.99,
    img: "https://images7.kabum.com.br/produtos/fotos/713377/monitor-gamer-curvo-samsung-odyssey-g5-27-qhd-165hz-1ms-hdr10-freesync-hdmi-e-dp-preto-ls27cg552elmzd_1741372368_gg.jpg",
    category: "monitores",
    oferta: true,
    descricao:
      "Monitor gamer com alta taxa de atualização, ideal para jogos competitivos e imagens fluidas.",
    marca: "AOC",
    avaliacao: 4.7,
  },
  {
    id: 10,
    title: "Cadeira Gamer Mymax Mx5",
    price: 899.0,
    img: "https://images9.kabum.com.br/produtos/fotos/sync_mirakl/265789/xlarge/Cadeira-Gamer-Mymax-Mx5-At-150Kg-Girat-ria-e-Ergon-mica-Preto_1745857831.jpg",
    category: "cadeiras",
    oferta: false,
    descricao:
      "Conforto e ergonomia para longas sessões de uso, com ajuste de altura e inclinação.",
    marca: "ThunderX3",
    avaliacao: 4.5,
  },
  {
    id: 11,
    title: "SSD Kingston KC3000, 1TB NVMe",
    price: 698.99,
    img: "https://images1.kabum.com.br/produtos/fotos/272331/ssd-kingston-kc3000-1024gb-m-2-2280-pcie-nvme-leituras-7-000mb-s-gravacao-6-000mb-s-skc3000s-1024g_1637324305_gg.jpg",
    category: "armazenamento",
    oferta: true,
    descricao:
      "SSD NVMe de 1TB com velocidades de leitura e gravação ultrarrápidas.",
    marca: "Kingston",
    avaliacao: 4.9,
  },
  {
    id: 12,
    title:
      "RTX 4060 VENTUS 2x Black OC MSI NVIDIA GeForce 8GB GDDR6 DLSS Ray Tracing",
    price: 2379.99,
    img: "https://images2.kabum.com.br/produtos/fotos/469132/placa-de-video-rtx-4060-ventus-2x-black-oc-msi-nvidia-geforce-8gb-gddr6-dlss-ray-tracing_1688052210_gg.jpg",
    category: "placas",
    oferta: false,
    descricao:
      "Placa de vídeo NVIDIA RTX 4060, desempenho de ponta para jogos e aplicações profissionais.",
    marca: "NVIDIA",
    avaliacao: 4.8,
  },
  {
    id: 13,
    title: "HUB USB 2.0 F3, 7 Portas, Preto - JC-HUB701",
    price: 29.99,
    img: "https://images1.kabum.com.br/produtos/fotos/112051/hub-f3-usb-2-0-7-portas-chaveadas-jc-hub701_1587405165_gg.jpg",
    category: "acessorios",
    oferta: true,
    descricao:
      "Hub USB 3.0 com 7 portas para conectar múltiplos dispositivos com alta velocidade e praticidade.",
    marca: "Ugreen",
    avaliacao: 4.5,
  },
  {
    id: 14,
    title: "Mouse Gamer Attack Shark X11, Branco, 22000dpi, RGB, Tri-mode",
    price: 329.9,
    img: "https://images0.kabum.com.br/produtos/fotos/sync_mirakl/688540/Mouse-Gamer-Attack-Shark-X11-Branco-22000dpi-RGB-Tri-mode_1734022610_gg.jpg",
    category: "perifericos",
    oferta: false,
    descricao: "Mouse gamer com sensor de alta precisão e ajuste de DPI.",
    marca: "Razer",
    avaliacao: 4.7,
  },
  {
    id: 15,
    title:
      "Headset Gamer Sem Fio Corsair HS55, 7.1 Surround, Driver 50mm, Wireless, Branco - CA-9011281-NA",
    price: 549.99,
    img: "https://images2.kabum.com.br/produtos/fotos/570322/headset-gamer-sem-fio-corsair-hs55-7-1-surround-driver-50mm-wireless-branco-ca-9011281-na_1718371411_gg.jpg",
    category: "perifericos",
    oferta: true,
    descricao: "Headset sem fio com som surround 7.1 e microfone removível.",
    marca: "HyperX",
    avaliacao: 4.8,
  },
  {
    id: 16,
    title:
      "Webcam Logitech Brio, 4K Pro Ultra HD Tecnologia HDR, Windows Hello RightLight 3 - 960-001105",
    price: 1593.75,
    img: "https://images3.kabum.com.br/produtos/fotos/sync_mirakl/133693/xlarge/Webcam-Logitech-Brio-4K-Pro-Ultra-HD-Tecnologia-HDR-Windows-Hello-RightLight-3-960-001105_1738690280.jpg",
    category: "acessorios",
    oferta: false,
    descricao: "Webcam com resolução 4K, foco automático e microfone embutido.",
    marca: "Logitech",
    avaliacao: 4.9,
  },
  {
    id: 17,
    title: "Notebook Gamer MSI Thin A15",
    price: 10.999,
    img: "https://m.media-amazon.com/images/I/71mcDOl-dgL.jpg",
    category: "notebooks",
    oferta: true,
    descricao:
      "AMD Ryzen 7-7735HS, 16GB RAM, SSD 512GB, 15.6 IPS FHD 144Hz, RTX 4060, Win 11H, Cinza - 9S7-16RK11-279",
    marca: "Acer",
    avaliacao: 4.7,
  },
  {
    id: 18,
    title: "Smartwatch Fitness",
    price: 349.9,
    img: "https://a-static.mlcdn.com.br/800x600/relogio-inteligente-smartwatch-masculino-t200-ultra-9-original-compativel-c-samsung-xiaomi-laves/laves01/smart-ultra9-p-447/808f1efb909a2cb93ab9441225af4ae4.jpeg",
    category: "acessorios",
    oferta: false,
    descricao:
      "Smartwatch com monitoramento de saúde, GPS e resistência à água.",
    marca: "Xiaomi",
    avaliacao: 4.5,
  },
  {
    id: 19,
    title: "Impressora Multifuncional Wi-Fi",
    price: 599.0,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbM-es0hZ7VbPhEYWXB787caeeDfsaZL_YnA&s",
    category: "acessorios",
    oferta: true,
    descricao:
      "Impressora multifuncional com conexão Wi-Fi e impressão frente e verso.",
    marca: "HP",
    avaliacao: 4.4,
  },
  {
    id: 20,
    title: "HD Externo 2TB",
    price: 399.9,
    img: "https://images.kabum.com.br/produtos/fotos/100916/hd-seagate-barracuda-2tb-3-5-sata-st2000dm008_hd-seagate-barracuda-2tb-3-5-sata-st2000dm008_1552932729_gg.jpg",
    category: "armazenamento",
    oferta: false,
    descricao:
      "HD externo portátil de 2TB, ideal para backups e transporte de arquivos.",
    marca: "Seagate",
    avaliacao: 4.6,
  },
  {
    id: 21,
    title: "Fonte 650W 80 Plus Bronze",
    price: 349.0,
    img: "data:image/jpeg;base64,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",
    category: "acessorios",
    oferta: true,
    descricao: "Fonte de alimentação 650W com certificação 80 Plus Bronze.",
    marca: "Corsair",
    avaliacao: 4.7,
  },
  {
    id: 22,
    title: "Gabinete Gamer RGB",
    price: 499.0,
    img: "data:image/jpeg;base64,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",
    category: "acessorios",
    oferta: false,
    descricao: "Gabinete gamer com painel lateral em vidro e iluminação RGB.",
    marca: "Cooler Master",
    avaliacao: 4.8,
  },
  {
    id: 23,
    title: "Tablet 10.1'' Android",
    price: 1199.0,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdUh2QIKTTfCD4U1IFTBWfAerAr4tIx5pXdw&s",
    category: "acessorios",
    oferta: true,
    descricao:
      "Tablet com tela de 10.1 polegadas, Android e bateria de longa duração.",
    marca: "Samsung",
    avaliacao: 4.5,
  },
  {
    id: 24,
    title: "Roteador Wi-Fi 6",
    price: 399.0,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrkjGDO-CIP7HfXfYcXoIb54BORDAjA-iv3g&s",
    category: "acessorios",
    oferta: false,
    descricao:
      "Roteador Wi-Fi 6 de alta velocidade, ideal para casas conectadas.",
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
  idx > -1 ? (carrinho[idx].qty += 1) : carrinho.push({ ...prod, qty: 1 });
  atualizarCarrinho();
  openCart();
  mostrarMensagem("Produto adicionado ao carrinho!");
}
function atualizarCarrinho() {
  document.getElementById("cartCount").textContent = carrinho.reduce(
    (a, b) => a + b.qty,
    0
  );
  const cartItems = document.getElementById("cartItems");
  cartItems.innerHTML = carrinho.length
    ? carrinho
        .map(
          (item) => `
        <div class="cart-item">
          <span class="cart-item-title">${item.title}</span>
          <button onclick="alterarQtd(${
            item.id
          },-1)" style="background:none;border:none;font-size:1.2rem;color:var(--primary);cursor:pointer;">-</button>
          <span class="cart-item-qty">${item.qty}</span>
          <button onclick="alterarQtd(${
            item.id
          },1)" style="background:none;border:none;font-size:1.2rem;color:var(--primary);cursor:pointer;">+</button>
          <span>R$ ${(item.price * item.qty).toLocaleString("pt-BR", {
            minimumFractionDigits: 2,
          })}</span>
          <button onclick="removerItem(${
            item.id
          })" style="background:none;border:none;color:#c00;font-size:1.2rem;cursor:pointer;">&times;</button>
        </div>
      `
        )
        .join("")
    : '<div style="text-align:center;color:#888;">Seu carrinho está vazio.</div>';
  document.getElementById("cartTotal").textContent =
    "Total: R$ " +
    carrinho
      .reduce((a, b) => a + b.price * b.qty, 0)
      .toLocaleString("pt-BR", { minimumFractionDigits: 2 });
}
function mostrarMensagem(texto) {
  const msg = document.createElement("div");
  msg.className = "success-msg";
  msg.textContent = texto;
  document.body.appendChild(msg);
  setTimeout(() => msg.remove(), 1200);
}
function finalizarCompra() {
  if (carrinho.length === 0) {
    alert("Seu carrinho está vazio!");
    return;
  }
  carrinho = [];
  atualizarCarrinho();
  closeCart();
  // Modal de agradecimento
  const modal = document.createElement("div");
  modal.className = "thankyou-modal";
  modal.textContent =
    "Obrigado pela preferência! Sua compra foi finalizada com sucesso.";
  document.body.appendChild(modal);
  setTimeout(() => modal.remove(), 2200);
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
// Fechar ao clicar fora
window.onclick = function (event) {
  const modal = document.getElementById("cartModal");
  if (event.target === modal) closeCart();
};
// navegação entre seções
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
  setTimeout(() => {
    modal.querySelector(".close-btn").focus();
  }, 100);
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
      <div class="product-price">R$ ${prod.price.toLocaleString("pt-BR", {
        minimumFractionDigits: 2,
      })}</div>
      <div style="font-size:0.95rem;color:#444;margin-bottom:8px;"><b>Marca:</b> ${
        prod.marca || "-"
      }</div>
<div class="rating-stars" title="${prod.avaliacao ? prod.avaliacao + ' de 5' : ''}">
  ${prod.avaliacao
    ? '<span style="color:#ffb86b;font-size:1.1em;">' +
      "★".repeat(Math.round(prod.avaliacao)) +
      '</span><span style="color:#393552;font-size:1.1em;">' +
      "★".repeat(5 - Math.round(prod.avaliacao)) +
      '</span> <span style="color:#888;font-size:0.95em;">(' + prod.avaliacao + ')</span>'
    : "-"
    // ...no renderProdutos...
  }
</div>
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

// detectar o scrow do mouse
let lastScrollY = window.scrollY;
window.addEventListener("scroll", function () {
  const header = document.getElementById("mainHeader");
  if (!header) return;
  if (window.scrollY > lastScrollY && window.scrollY > 60) {
    // Descendo: esconde
    header.classList.add("hide-header");
  } else {
    // Subindo: mostra
    header.classList.remove("hide-header");
  }
  lastScrollY = window.scrollY;
});
function renderCarrosselOfertas() {
  const ofertas = produtos.filter(p => p.oferta);
  const container = document.getElementById("carouselOfertas");
  container.innerHTML = ofertas.map(prod => `
    <div class="product-card" style="position:relative;">
      <span class="badge-oferta">Oferta</span>
      <img src="${prod.img}" alt="${prod.title}" loading="lazy">
      <div class="product-title">${prod.title}</div>
      <div class="product-price">R$ ${prod.price.toLocaleString("pt-BR", {minimumFractionDigits:2})}</div>
      <div class="rating-stars" title="${prod.avaliacao ? prod.avaliacao + ' de 5' : ''}">
        ${prod.avaliacao
          ? '<span style="color:#ffb86b;font-size:1.1em;">' +
            "★".repeat(Math.round(prod.avaliacao)) +
            '</span><span style="color:#393552;font-size:1.1em;">' +
            "★".repeat(5 - Math.round(prod.avaliacao)) +
            '</span> <span style="color:#888;font-size:0.95em;">(' + prod.avaliacao + ')</span>'
          : "-"
        }
      </div>
      <button class="buy-btn" onclick="adicionarCarrinho(${prod.id})">Comprar</button>
    </div>
  `).join("");

  // Inicializa o Glider.js
  if (window.carouselGlider) window.carouselGlider.destroy();
  window.carouselGlider = new Glider(container, {
    slidesToShow: 3,
    slidesToScroll: 1,
    draggable: true,
    dots: '.dots',
    arrows: {
      prev: '.glider-prev',
      next: '.glider-next'
    },
    responsive: [
      { breakpoint: 900, settings: { slidesToShow: 2 } },
      { breakpoint: 600, settings: { slidesToShow: 1 } }
    ]
  });

  // Auto-play: avança a cada 4 segundos
  clearInterval(window.carouselInterval);
  window.carouselInterval = setInterval(() => {
    if (window.carouselGlider) window.carouselGlider.scrollItem(window.carouselGlider.getCurrentSlide() + 1);
  }, 4000);
}
renderCarrosselOfertas();