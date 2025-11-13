import React from 'react';
import { Dumbbell } from 'lucide-react';

const Login = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="max-w-md w-full space-y-8">
        {/* Logo */}
        <div className="text-center">
          <div className="flex justify-center">
            <div className="w-12 h-12 bg-primary-500 rounded-lg flex items-center justify-center">
              <Dumbbell className="h-6 w-6 text-white" />
            </div>
          </div>
          <h2 className="mt-6 text-3xl font-bold text-gray-900">SpeedFit</h2>
          <p className="mt-2 text-sm text-gray-600">
            Entre na sua conta para gerenciar seus alunos
          </p>
        </div>

        {/* Login Form */}
        <form className="mt-8 space-y-6 card p-8">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              E-mail
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-primary-500 focus:border-primary-500"
              placeholder="seu@email.com"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Senha
            </label>
            <input
              id="password"
              name="password"
              type="password"
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-primary-500 focus:border-primary-500"
              placeholder="Sua senha"
            />
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-4 w-4 text-primary-500 focus:ring-primary-500 border-gray-300 rounded"
              />
              <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                Lembrar de mim
              </label>
            </div>

            <div className="text-sm">
              <a href="#" className="font-medium text-primary-500 hover:text-primary-600">
                Esqueceu sua senha?
              </a>
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="w-full btn-primary"
            >
              Entrar na conta
            </button>
          </div>

          <div className="text-center">
            <span className="text-sm text-gray-600">
              Não tem uma conta?{' '}
              <a href="#" className="font-medium text-primary-500 hover:text-primary-600">
                Cadastre-se
              </a>
            </span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;