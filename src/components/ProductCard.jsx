export default function ProductCard({ product, onAddToCart, onClick }) {
  return (
    <div 
      className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer"
      onClick={() => {
    console.log('Clicou no produto:', product.name)
    onClick(product)
  }}
    >
      {/* Imagem */}
      <div className="h-64 overflow-hidden">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
        />
      </div>
      
      {/* Informações */}
      <div className="p-5">
        <div className="text-sm text-pink-700 font-semibold mb-2">
          {product.category}
        </div>
        
        <h3 className="text-xl font-bold text-gray-800 mb-2">
          {product.name}
        </h3>
        
        <p className="text-gray-600 text-sm mb-4">
          {product.description}
        </p>
        
        <div className="flex items-center justify-between">
          <span className="text-xl md:text-2xl font-bold text-pink-700">
            R$ {product.price.toFixed(2)}
          </span>
          
          <button
            onClick={() => onAddToCart(product)}
            className="border-2 border-pink-700 text-pink-700 px-6 py-2 rounded-lg font-semibold hover:bg-pink-700 hover:text-white cursor-pointer"
          >
            Adicionar
          </button>
        </div>
      </div>
    </div>
  );
}