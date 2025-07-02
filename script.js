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
                img: "data:image/jpeg;base64,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",
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