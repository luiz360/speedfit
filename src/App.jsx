import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { AppProvider } from './context/AppContext'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import Dashboard from './pages/Dashboard'
import Login from './pages/Login'
import Students from './pages/Students'
import Plans from './pages/Plans'
import Agenda from './pages/Agenda'
import Finance from './pages/Finance'

function App() {
  const isAuthenticated = true

  if (!isAuthenticated) {
    return <Login />
  }

  return (
    <AppProvider>
      <Router>
        <div className="flex h-screen bg-gray-50">
          <Sidebar />
          <div className="flex-1 flex flex-col overflow-hidden">
            <Navbar />
            <main className="flex-1 overflow-y-auto">
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/alunos" element={<Students />} />
                <Route path="/planos" element={<Plans />} />
                <Route path="/agenda" element={<Agenda />} />
                <Route path="/financeiro" element={<Finance />} />
              </Routes>
            </main>
          </div>
        </div>
      </Router>
    </AppProvider>
  )
}

export default App