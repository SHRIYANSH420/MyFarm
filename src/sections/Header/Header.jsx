import { Search, ShoppingCart } from 'lucide-react';

const Header = () => {
  return (
      <header className="bg-pink-100 p-4">
        <nav className="flex justify-between items-center">
          <div className="text-green-700 font-bold">THE LOCAL LIFE</div>
          <ul className="flex space-x-4">
            <li>Home</li>
            <li>About</li>
            <li>Shop</li>
            <li>Contact Us</li>
          </ul>
          <div className="flex space-x-2">
            <Search size={20} />
            <ShoppingCart size={20} />
          </div>
        </nav>
      </header>
  );
};

export default Header;
