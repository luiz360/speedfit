import React from 'react';
import { 
  Home, 
  Users, 
  Calendar, 
  DollarSign, 
  Dumbbell, 
  BarChart3,
  MessageCircle,
  Settings
} from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';

const menuItems = [
  { icon: Home, label: 'Dashboard', path: '/' },
  { icon: Users, label: 'Alunos', path: '/alunos' },
  { icon: Calendar, label: 'Agenda', path: '/agenda' },
  { icon: DollarSign, label: 'Financeiro', path: '/financeiro' },
  { icon: Dumbbell, label: 'Treinos', path: '/treinos' },
  { icon: BarChart3, label: 'Métricas', path: '/metricas' },
  { icon: MessageCircle, label: 'Comunidade', path: '/comunidade' },
  { icon: Settings, label: 'Configurações', path: '/configuracoes' },
];

const Sidebar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <div className="w-64 bg-white border-r border-gray-200 h-screen p-4">
      {/* Logo */}
      <div className="flex items-center space-x-3 mb-8">
        <div className="w-8 h-8 bg-primary-500 rounded-lg flex items-center justify-center">
          <Dumbbell className="h-5 w-5 text-white" />
        </div>
        <span className="text-xl font-bold text-gray-900">SpeedFit</span>
      </div>

      {/* Menu */}
      <nav className="space-y-2">
        {menuItems.map((item, index) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.path;
          
          return (
            <button
              key={index}
              onClick={() => navigate(item.path)}
              className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-left transition-colors ${
                isActive 
                  ? 'bg-primary-50 text-primary-500 border border-primary-200' 
                  : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
              }`}
            >
              <Icon className="h-5 w-5" />
              <span className="font-medium">{item.label}</span>
            </button>
          );
        })}
      </nav>

      {/* Quick Stats */}
      <div className="mt-8 p-4 bg-gray-50 rounded-lg">
        <div className="text-sm text-gray-600">Alunos ativos</div>
        <div className="text-2xl font-bold text-gray-900">24</div>
        <div className="text-xs text-success mt-1">+3 este mês</div>
      </div>
    </div>
  );
};

export default Sidebar;