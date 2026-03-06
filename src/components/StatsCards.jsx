import React from 'react';

export default function StatsCards({ inProgressCount, resolvedCount }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
      <div className="bg-gradient-to-br from-[#8B5CF6] to-[#6366F1] rounded-xl p-10 flex flex-col items-center justify-center text-white shadow-lg relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white to-transparent"></div>
        <h2 className="text-xl font-medium mb-2 relative z-10">In-Progress</h2>
        <p className="text-6xl font-bold relative z-10">{inProgressCount}</p>
      </div>
      <div className="bg-gradient-to-br from-[#10B981] to-[#0D9488] rounded-xl p-10 flex flex-col items-center justify-center text-white shadow-lg relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white to-transparent"></div>
        <h2 className="text-xl font-medium mb-2 relative z-10">Resolved</h2>
        <p className="text-6xl font-bold relative z-10">{resolvedCount}</p>
      </div>
    </div>
  );
}
