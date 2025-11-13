import React, { createContext, useContext, useState } from 'react';

const AppContext = createContext();

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};

export const AppProvider = ({ children }) => {
  const [students, setStudents] = useState([
    {
      id: 1,
      name: 'João Silva',
      email: 'joao@email.com',
      plan: 'Premium',
      sessionsLeft: 8,
      nextPayment: '2024-01-15',
      status: 'active'
    },
    {
      id: 2,
      name: 'Maria Santos',
      email: 'maria@email.com',
      plan: 'Básico',
      sessionsLeft: 2,
      nextPayment: '2024-01-10',
      status: 'active'
    }
  ]);

  const [payments, setPayments] = useState([
    { id: 1, student: 'João Silva', amount: 450, date: '2024-01-01', status: 'paid' },
    { id: 2, student: 'Maria Santos', amount: 300, date: '2024-01-01', status: 'paid' },
    { id: 3, student: 'Pedro Costa', amount: 450, date: '2024-01-02', status: 'pending' }
  ]);

  const [sessions, setSessions] = useState([
    { id: 1, student: 'João Silva', date: '2024-01-13', time: '14:00', status: 'completed' },
    { id: 2, student: 'Maria Santos', date: '2024-01-13', time: '15:30', status: 'scheduled' },
    { id: 3, student: 'Pedro Costa', date: '2024-01-13', time: '17:00', status: 'scheduled' }
  ]);

  // Métricas calculadas
  const metrics = {
    activeStudents: students.filter(s => s.status === 'active').length,
    monthlyRevenue: payments.filter(p => p.status === 'paid').reduce((sum, p) => sum + p.amount, 0),
    todaySessions: sessions.filter(s => s.date === '2024-01-13' && s.status === 'scheduled').length,
    attendanceRate: 94 // Em uma aplicação real, isso viria do cálculo real
  };

  const addStudent = (student) => {
    const newStudent = {
      ...student,
      id: students.length + 1,
      status: 'active'
    };
    setStudents([...students, newStudent]);
  };

  const updateStudent = (id, updates) => {
    setStudents(students.map(student => 
      student.id === id ? { ...student, ...updates } : student
    ));
  };

  const value = {
    students,
    payments,
    sessions,
    metrics,
    addStudent,
    updateStudent
  };

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
};