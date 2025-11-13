import React from 'react';
import { 
  Users, 
  DollarSign, 
  Calendar, 
  TrendingUp,
  Activity,
  Clock,
  AlertTriangle
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import CardMetric from '../components/CardMetric';

const Dashboard = () => {
  const { metrics, sessions, students, payments } = useApp();

  const dashboardMetrics = [
    {
      title: 'Alunos Ativos',
      value: metrics.activeStudents.toString(),
      change: '+3 este mês',
      icon: Users,
      color: 'blue'
    },
    {
      title: 'Receita Mensal',
      value: `R$ ${metrics.monthlyRevenue}`,
      change: '+12%',
      icon: DollarSign,
      color: 'green'
    },
    {
      title: 'Sessões Hoje',
      value: metrics.todaySessions.toString(),
      change: '2 concluídas',
      icon: Calendar,
      color: 'orange'
    },
    {
      title: 'Taxa de Comparecimento',
      value: `${metrics.attendanceRate}%`,
      change: '+5%',
      icon: TrendingUp,
      color: 'green'
    }
  ];

  const upcomingSessions = sessions
    .filter(session => session.status === 'scheduled')
    .slice(0, 3);

  const expiringPlans = students.filter(student => student.sessionsLeft <= 3);
  const pendingPayments = payments.filter(payment => payment.status === 'pending');

  const alerts = [
    ...(expiringPlans.length > 0 ? [{
      type: 'warning',
      message: `${expiringPlans.length} planos com poucas sessões restantes`,
      icon: AlertTriangle
    }] : []),
    ...(pendingPayments.length > 0 ? [{
      type: 'info', 
      message: `${pendingPayments.length} pagamentos pendentes`,
      icon: Clock
    }] : [])
  ];

  return (
    <div className="p-6 space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
        <p className="text-gray-600">Bem-vindo de volta! Aqui está o resumo do seu negócio.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {dashboardMetrics.map((metric, index) => (
          <CardMetric key={index} {...metric} />
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="card p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Próximas Sessões</h2>
          <div className="space-y-4">
            {upcomingSessions.map((session) => (
              <div key={session.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div>
                  <p className="font-medium text-gray-900">{session.student}</p>
                  <p className="text-sm text-gray-600">{session.time}</p>
                </div>
                <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-medium">
                  Agendado
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="card p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Alertas</h2>
          <div className="space-y-3">
            {alerts.length > 0 ? alerts.map((alert, index) => {
              const Icon = alert.icon;
              return (
                <div key={index} className="flex items-center space-x-3 p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
                  <Icon className="h-5 w-5 text-yellow-600" />
                  <span className="text-sm text-yellow-800">{alert.message}</span>
                </div>
              );
            }) : (
              <p className="text-gray-500 text-sm">Nenhum alerta no momento</p>
            )}
          </div>

          <div className="mt-6">
            <h3 className="font-medium text-gray-900 mb-3">Atividade Recente</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-3 text-sm">
                <Activity className="h-4 w-4 text-green-500" />
                <span>Maria completou o treino A</span>
              </div>
              <div className="flex items-center space-x-3 text-sm">
                <DollarSign className="h-4 w-4 text-blue-500" />
                <span>João renovou plano Premium</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;