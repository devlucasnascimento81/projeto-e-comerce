import { HiShoppingCart, HiX, HiTrash, HiShoppingBag } from 'react-icons/hi'
import { useMemo } from 'react'

export default function Cart({ isOpen, onClose, cartItems, onRemoveItem, onIncreaseQuantity, onDecreaseQuantity }) {
  const total = useMemo(() => {
    const calculado = cartItems.reduce((sum, item) => {
      console.log(`Item: ${item.name}, Preço: ${item.price}, Qtd: ${item.quantity}, Subtotal: ${item.price * item.quantity}`)
      return sum + (item.price * item.quantity)
    }, 0)
    console.log('Total calculado:', calculado)
    return calculado
  }, [cartItems])

  return (
    <>
      {/* Overlay escuro */}
      <div
        className={`fixed inset-0 backdrop-blur-sm z-40 transition-opacity duration-300 ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={onClose}
      ></div>

      {/* Carrinho lateral */}
      <div className={`fixed right-0 top-0 h-full w-full md:w-96 bg-white shadow-2xl z-50 flex flex-col transition-transform duration-300 ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        {/* Cabeçalho */}
        <div className="bg-pink-200 border-b-2 text-pink-800 p-5 flex justify-between items-center">
          <div className='flex items-center gap-3'>
            <HiShoppingCart className='text-2xl' />
            <h2 className='text-2xl font-medium'>Meu Carrinho</h2>
          </div>

          <button
            onClick={onClose}
            className="text-3xl hover:rotate-90 transition-transform duration-300 cursor-pointer"
          >
            <HiX />
          </button>
        </div>

        {/* Lista de produtos */}
        <div className="flex-1 overflow-y-auto p-5">
          {cartItems.length === 0 ? (
            <div className="text-center text-gray-500 mt-20">
              <HiShoppingBag className='text-6xl mb-4 mx-auto text-gray-300' />
              <p className='text-lg'>Seu carrinho está vazio.</p>
            </div>
          ) : (
            <div className="space-y-4">
              {cartItems.map(item => (
                <div key={item.id} className="flex gap-4 bg-gray-50 p-4 rounded-lg">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-20 h-20 object-cover rounded-lg"
                  />
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-800">{item.name}</h3>
                    <p className="text-pink-700 font-bold">R$ {item.price.toFixed(2)}</p>
                    
                    {/* Botões de quantidade */}
                    <div className="flex items-center gap-2 mt-2">
                      <button
                        onClick={(e) => {
                          e.stopPropagation()
                          onDecreaseQuantity(item.id)
                        }}
                        className="bg-pink-100 text-pink-700 w-7 h-7 rounded-full font-bold hover:bg-pink-200"
                      >
                        -
                      </button>
                      <span className="text-sm font-semibold">{item.quantity}</span>
                      <button
                        onClick={(e) => {
                          e.stopPropagation()
                          onIncreaseQuantity(item.id)
                        }}
                        className="bg-pink-100 text-pink-700 w-7 h-7 rounded-full font-bold hover:bg-pink-200"
                      >
                        +
                      </button>
                    </div>
                  </div>
                  
                  <button
                    onClick={() => onRemoveItem(item.id)}
                    className="text-red-500 hover:text-red-700 text-xl"
                  >
                    <HiTrash className='text-3xl text-pink-700' />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer com total */}
        {cartItems.length > 0 && (
          <div className="border-t p-5 bg-gray-50">
            <div className="flex justify-between items-center mb-4">
              <span className="text-xl font-semibold">Total:</span>
              <span className="text-xl md:text-2xl font-bold text-pink-700">
                R$ {total.toFixed(2)}
              </span>
            </div>
            <button className="w-full bg-pink-200 border-2 text-pink-700 py-3 rounded-lg font-bold text-lg hover:bg-pink-700 hover:text-white transition-all duration-300">
              Finalizar Compra
            </button>
          </div>
        )}
      </div>
    </>
  );
}