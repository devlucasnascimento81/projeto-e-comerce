
import { useState } from 'react'
import { HiX, HiChevronLeft, HiChevronRight } from 'react-icons/hi'
export default function ProductDetails({ product, isOpen, onClose, onAddToCart }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  // função  para ir para proxima imagem
  const nextImage = () => {
    setCurrentImageIndex((prev) =>
      prev === product.images.length - 1 ? 0 : prev + 1
    )
  }

  //função para voltar imagem

  const prevImage = () => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? product.images.length - 1 : prev - 1)
  }

  if (!isOpen || !product) return null;
  return (
    <>
      <div className="fixed inset-0 backdrop-blur-sm z-40" onClick={onClose}>
      </div>

      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-auto">
        <div className="bg-white rounded-xl max-w-4xl w-full p-6 my-8">
          {/* botão fechar */}
          <button
            onClick={onClose}
            className="float-right text-3xl text-gray-500 hover:text-gray-600 cursor-pointer z-50 relative">
            <HiX />
          </button>

          {/* Carousel de imagens */}
          <div className='relative w-full h-96 mb-6'>
            <img src={product.images[currentImageIndex]} alt={product.name}
              className='w-full h-full object-cover rounded-lg' />

            {/* Seta esquerda */}
            <button
              onClick={prevImage}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-lg hover:bg-gray-100"
            >
              <HiChevronLeft className="text-2xl" />
            </button>

            {/* Seta direita */}
            <button
              onClick={nextImage}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-lg hover:bg-gray-100"
            >
              <HiChevronRight className="text-2xl" />
            </button>

            {/* Bolinhas indicadoras */}
            <div className='absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2'>
              {product.images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ease-in ${currentImageIndex === index
                    ? 'bg-pink-700 w-7'
                    : 'bg-white/70 hover:bg-white'
                    }`}>
                </button>
              ))}

            </div>
          </div>
          <h1 className="text-2xl font-bold">{product.name}</h1>
          <p>R$ {product.price.toFixed(2)}</p>

          {/* Categoria */}
          <span className='inline-block bg-pink-100 text-pink-700 px-3 py-1 rounded-full text-sm font-semibold mt-2'>
            {product.category}
          </span>

          {/* Descrição */}
          <p className="text-gray-600 mt-4">
            {product.description}
          </p>


          <button
            onClick={() => {
              onAddToCart(product)
              onClose()
            }}
            className="w-full mt-6 bg-pink-700 text-white py-3 rounded-lg font-bold text-lg hover:bg-pink-800 transition-all"
          >
            Adicionar ao Carrinho
          </button>
        </div>
      </div>
    </>
  )
}