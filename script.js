        // Produtos
        const produtos = [
            {
                id: 1,
                title: "Notebook Gamer X1",
                price: 4999.00,
                img: "https://www.asus.com/media/Odin/Websites/global/ProductLine/20200824120814.jpg",
                category: "notebooks",
                oferta: true
            },
            {
                id: 2,
                title: "Mouse Gamer RGB",
                price: 199.90,
                img: "https://m.media-amazon.com/images/I/61UxfXTUyvL._UF894,1000_QL80_.jpg",
                category: "perifericos",
                oferta: true
            },
            {
                id: 3,
                title: "Headset Surround 7.1",
                price: 349.90,
                img: "https://img.terabyteshop.com.br/produto/g/headset-gamer-havit-hv-h2002d-35mm-pretocinza_126056.png",
                category: "perifericos",
                oferta: false
            },
            {
                id: 4,
                title: "Teclado Mecânico Pro",
                price: 499.90,
                img: "https://images.tcdn.com.br/img/img_prod/1314128/teclado_mecanico_redragon_castor_pro_rgb_switch_marrom_sem_fio_preto_vermelho_e_branco_k631rgb_pro_b_3993_1_ca341950557ba5845783535b51743627.jpg",
                category: "perifericos",
                oferta: false
            },
            {
                id: 5,
                title: "Webcam Full HD",
                price: 249.90,
                img: "https://cdn.awsli.com.br/2547/2547358/produto/206197257/webcam-logitech-c920-1-hjjltj.jpg",
                category: "acessorios",
                oferta: true
            },
            {
                id: 6,
                title: "Mousepad logitech ",
                price: 89.90,
                img: "https://www.havan.com.br/media/catalog/product/cache/73a52df140c4d19dbec2b6c485ea6a50/m/o/mousepad-gamer-logitech-g240_238324_1.webp",
                category: "acessorios",
                oferta: false
            },
            {
                id: 7,
                title: "Notebook Ultra Slim",
                price: 3999.00,
                img: "download (2).jpeg",
                category: "notebooks",
                oferta: false
            },
            {
                id: 8,
                title: "Fone Bluetooth",
                price: 159.90,
                img: "https://lojaibyte.vteximg.com.br/arquivos/ids/427931-1200-1200/47304-1_47304.jpg?v=638496672672300000",
                category: "acessorios",
                oferta: true
            }
        ];

        // Carrinho
        let carrinho = [];

        // Renderização de produtos
        function renderProdutos(lista, containerId) {
            const container = document.getElementById(containerId);
            container.innerHTML = '';
            if (lista.length === 0) {
                container.innerHTML = '<div style="color:#fff;grid-column:1/-1;text-align:center;font-size:1.2rem;margin:40px 0;">Nenhum produto encontrado.</div>';
                return;
            }
            lista.forEach(prod => {
                const card = document.createElement('div');
                card.className = 'product-card';
                card.setAttribute('data-title', prod.title);
                card.setAttribute('data-category', prod.category);
                card.innerHTML = `
                    <img src="${prod.img}" alt="${prod.title}">
                    <div class="product-title">${prod.title}</div>
                    <div class="product-price">R$ ${prod.price.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</div>
                    <button class="buy-btn" onclick="adicionarCarrinho(${prod.id})">Comprar</button>
                `;
                container.appendChild(card);
            });
        }

        // Inicialização
        renderProdutos(produtos, 'products');
        renderProdutos(produtos.filter(p => p.oferta), 'offersProducts');
        renderProdutos(produtos, 'categoriesProducts');

        // Busca
        function buscarProduto() {
            const termo = document.getElementById('searchInput').value.trim().toLowerCase();
            const filtrados = produtos.filter(p => p.title.toLowerCase().includes(termo));
            renderProdutos(filtrados, 'products');
        }

        // Filtro por categoria
        function filterCategory(cat, btn, onlyCategoriesSection) {
            document.querySelectorAll('.category-btn').forEach(b => b.classList.remove('active'));
            if (btn) btn.classList.add('active');
            let lista = produtos;
            if (cat !== 'all') lista = lista.filter(p => p.category === cat || (cat === 'ofertas' && p.oferta));
            if (onlyCategoriesSection) {
                renderProdutos(lista, 'categoriesProducts');
            } else {
                renderProdutos(lista, 'products');
            }
        }

        // Carrinho
        function adicionarCarrinho(id) {
            const prod = produtos.find(p => p.id === id);
            const idx = carrinho.findIndex(item => item.id === id);
            if (idx > -1) {
                carrinho[idx].qty += 1;
            } else {
                carrinho.push({ ...prod, qty: 1 });
            }
            atualizarCarrinho();
            openCart();
        }
        function atualizarCarrinho() {
            document.getElementById('cartCount').textContent = carrinho.reduce((a, b) => a + b.qty, 0);
            const cartItems = document.getElementById('cartItems');
            cartItems.innerHTML = '';
            if (carrinho.length === 0) {
                cartItems.innerHTML = '<div style="text-align:center;color:#888;">Seu carrinho está vazio.</div>';
            } else {
                carrinho.forEach(item => {
                    const div = document.createElement('div');
                    div.className = 'cart-item';
                    div.innerHTML = `
                        <span class="cart-item-title">${item.title}</span>
                        <button onclick="alterarQtd(${item.id},-1)" style="background:none;border:none;font-size:1.2rem;color:var(--primary);cursor:pointer;">-</button>
                        <span class="cart-item-qty">${item.qty}</span>
                        <button onclick="alterarQtd(${item.id},1)" style="background:none;border:none;font-size:1.2rem;color:var(--primary);cursor:pointer;">+</button>
                        <span>R$ ${(item.price * item.qty).toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</span>
                        <button onclick="removerItem(${item.id})" style="background:none;border:none;color:#c00;font-size:1.2rem;cursor:pointer;">&times;</button>
                    `;
                    cartItems.appendChild(div);
                });
            }
            document.getElementById('cartTotal').textContent = 'Total: R$ ' + carrinho.reduce((a, b) => a + b.price * b.qty, 0).toLocaleString('pt-BR', { minimumFractionDigits: 2 });
        }
        function alterarQtd(id, delta) {
            const idx = carrinho.findIndex(item => item.id === id);
            if (idx > -1) {
                carrinho[idx].qty += delta;
                if (carrinho[idx].qty <= 0) carrinho.splice(idx, 1);
                atualizarCarrinho();
            }
        }
        function removerItem(id) {
            carrinho = carrinho.filter(item => item.id !== id);
            atualizarCarrinho();
        }
        function openCart() {
            atualizarCarrinho();
            document.getElementById('cartModal').style.display = 'flex';
        }
        function closeCart() {
            document.getElementById('cartModal').style.display = 'none';
        }
        function finalizarCompra() {
            if (carrinho.length === 0) {
                alert('Seu carrinho está vazio!');
                return;
            }
            alert('Compra finalizada! Obrigado por comprar na LojaTech.');
            carrinho = [];
            atualizarCarrinho();
            closeCart();
        }

        // Navegação entre seções
        function showSection(sec, el) {
            event && event.preventDefault();
            document.querySelectorAll('nav a').forEach(a => a.classList.remove('active'));
            if (el) el.classList.add('active');
            document.getElementById('homeSection').style.display = sec === 'home' ? 'block' : 'none';
            document.getElementById('offersSection').style.display = sec === 'offers' ? 'block' : 'none';
            document.getElementById('categoriesSection').style.display = sec === 'categories' ? 'block' : 'none';
            document.getElementById('contactSection').style.display = sec === 'contact' ? 'block' : 'none';
        }

        // Contato
        function enviarContato(e) {
            e.preventDefault();
            document.getElementById('contactMsg').textContent = 'Mensagem enviada! Entraremos em contato em breve.';
            document.getElementById('contactForm').reset();
        }

        // Fechar modal ao clicar fora
        window.onclick = function (event) {
            const modal = document.getElementById('cartModal');
            if (event.target === modal) closeCart();
        }