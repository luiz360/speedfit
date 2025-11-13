import React from 'react';

const CardMetric = ({ title, value, change, icon: Icon, color = 'blue' }) => {
  const colorClasses = {
    blue: 'bg-blue-50 text-blue-500',
    green: 'bg-green-50 text-green-500',
    orange: 'bg-orange-50 text-orange-500',
    red: 'bg-red-50 text-red-500',
  };

  return (
    <div className="card p-6">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-gray-600">{title}</p>
          <p className="text-2xl font-bold text-gray-900 mt-1">{value}</p>
          {change && (
            <p className={`text-sm mt-1 ${
              change.startsWith('+') ? 'text-success' : 'text-error'
            }`}>
              {change}
            </p>
          )}
        </div>
        <div className={`p-3 rounded-lg ${colorClasses[color]}`}>
          <Icon className="h-6 w-6" />
        </div>
      </div>
    </div>
  );
};

export default CardMetric;