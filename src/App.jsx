import { useState } from 'react'
import Header from './components/Header'
import ProductCard from './components/ProductCard'
import Cart from './components/Cart'
import ProductDetails from './components/ProductDetails'
import { products } from './data/products'
import Footer from './components/Footer'


export default function App() {
  const [cartItems, setCartItems] = useState([])
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [selectedProduct, setSelectedProduct] = useState(null)
  const [isDetailsOpen, setIsDetailsOpen] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState('Todos')

  // Pegar categorias únicas dos produtos
  const categories = ['Todos', ...new Set(products.map(p => p.category))]

  //filtrar produtos por categoria
  const filteredProducts = selectedCategory === 'Todos'
    ? products
    : products.filter(p => p.category === selectedCategory)

  // Adicionar produto ao carrinho
  const handleAddToCart = (product) => {
    setCartItems(prev => {
      const existingItem = prev.find(item => item.id === product.id)

      if (existingItem) {
        // Se já existe, aumenta a quantidade
        return prev.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      } else {
        // Se não existe, adiciona novo
        return [...prev, { ...product, quantity: 1 }]
      }
    })
  }

  // Aumentar quantidade no carrinho
  const handleIncreaseQuantity = (productId) => {
  console.log('Aumentando quantidade do produto:', productId)
  setCartItems(prev => {
    const newCart = prev.map(item =>
      item.id === productId
        ? { ...item, quantity: item.quantity + 1 }
        : item
    )
    console.log('Novo carrinho:', newCart)
    return newCart
  })
}

  // Diminuir quantidade no carrinho
  const handleDecreaseQuantity = (productId) => {
    setCartItems(prev =>
      prev.map(item =>
        item.id === productId
          ? { ...item, quantity: item.quantity > 1 ? item.quantity - 1 : 1 }
          : item
      )
    )
  }

  // Remover produto do carrinho
  const handleRemoveFromCart = (productId) => {
    setCartItems(prev => prev.filter(item => item.id !== productId))
  }

  // Calcular total de itens
  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0)

  // Abrir detalhes do produto
  const handleOpenDetails = (product) => {
    setSelectedProduct(product)
    setIsDetailsOpen(true)
  }

  return (
    <div className="relative min-h-screen">
      {/* Background */}
      <div className="fixed top-0 left-0 z-[-2] h-screen w-screen rotate-180 transform bg-white bg-[radial-gradient(60%_120%_at_50%_50%,hsla(0,0%,100%,0)_0,rgba(252,205,238,.5)_100%)]"></div>

      {/* Header */}
      <Header
        cartCount={cartCount}
        onCartClick={() => setIsCartOpen(true)}
      />

      {/* Conteúdo Principal */}
      <main className="container mx-auto px-4 py-8">
        <h2 className="text-4xl font-bold text-center mb-2 text-gray-800">
          Nossos Produtos
        </h2>
        <p className="text-center text-gray-600 mb-8">
          Encontre os melhores produtos com preços incríveis
        </p>

        {/* Botões de filtro */}
        <div className='flex flex-wrap justify-center gap-3 mb-8'>
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full font-semibold transition-all ${selectedCategory === category
                ? 'bg-pink-700 text-white'
                : 'bg-white text-gray-700 hover:bg-pink-100'
                }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Grid de Produtos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProducts.map(product => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={handleAddToCart}
              onClick={handleOpenDetails}
            />
          ))}
        </div>
      </main>

      {/* Detalhes do Produto */}
      <ProductDetails
        product={selectedProduct}
        isOpen={isDetailsOpen}
        onClose={() => setIsDetailsOpen(false)}
        onAddToCart={handleAddToCart}
      />

      {/* Carrinho */}
      <Cart
        key={JSON.stringify(cartItems)}
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onRemoveItem={handleRemoveFromCart}
        onIncreaseQuantity={handleIncreaseQuantity}
        onDecreaseQuantity={handleDecreaseQuantity}
      />

      <Footer />
    </div>
  )
}