import { HiShoppingCart, HiX, HiTrash, HiShoppingBag } from 'react-icons/hi'
import logo from "../assets/logo.png"
export default function Header({ cartCount, onCartClick }) {
  return (
    <header className="bg-linear-to-r from-white to-pink-300 text-white sticky top-0 z-50 shadow-lg">
      <div className="container mx-auto px-4 py-0 flex justify-between items-center">
        <div className="flex items-center">
          <img className="m-0 p-0 w-30" src={logo} alt="logo" />
        </div>
        
        <button 
          onClick={onCartClick}
          className="relative bg-white text-pink-700 px-4 py-2 rounded-lg font-semibold border-2 border-transparent hover:border-pink-700 transition-all duration-150 flex items-center gap-2 cursor-pointer"
        >
          <HiShoppingCart className="text-xl"/>
          <span> Carrinho</span>
          {cartCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold">
              {cartCount}
            </span>
          )}
        </button>
      </div>
    </header>
  );
}