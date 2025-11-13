import React, { useState } from 'react';
import { Bell, Search, User } from 'lucide-react';

const Navbar = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    // Implementar busca depois
    console.log('Buscar:', searchTerm);
  };

  return (
    <nav className="bg-white border-b border-gray-200 px-4 py-3">
      <div className="flex items-center justify-between">
        {/* Search Bar */}
        <div className="flex items-center space-x-4 flex-1 max-w-lg">
          <form onSubmit={handleSearch} className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <input
              type="text"
              placeholder="Buscar alunos, treinos..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            />
          </form>
        </div>

        {/* User Menu */}
        <div className="flex items-center space-x-4">
          <button className="relative p-2 text-gray-600 hover:text-gray-900">
            <Bell className="h-5 w-5" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-error rounded-full"></span>
          </button>
          
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-primary-500 rounded-full flex items-center justify-center">
              <User className="h-4 w-4 text-white" />
            </div>
            <span className="text-sm font-medium text-gray-700">Personal</span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;