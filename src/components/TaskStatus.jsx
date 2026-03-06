import React from 'react';

export default function TaskStatus({ taskStatusTickets, resolvedTickets, onComplete }) {
  return (
    <div className="flex flex-col space-y-8">
      <div>
        <h2 className="text-xl font-bold text-gray-800 mb-1">Task Status</h2>
        <p className="text-sm text-gray-500 mb-4">Select a ticket to add to Task Status</p>
        
        <div className="space-y-3">
          {taskStatusTickets.map(ticket => (
            <div key={ticket.id} className="bg-white rounded-xl shadow-sm border border-gray-100 p-4">
              <h3 className="font-bold text-gray-800 text-sm mb-3">{ticket.title}</h3>
              <button 
                onClick={() => onComplete(ticket)}
                className="w-full bg-[#10B981] hover:bg-[#059669] text-white py-2 rounded-md text-sm font-medium transition-colors"
              >
                Complete
              </button>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h2 className="text-xl font-bold text-gray-800 mb-4">Resolved Task</h2>
        <div className="space-y-2">
          {resolvedTickets.length === 0 ? (
            <p className="text-sm text-gray-500">No resolved tasks yet.</p>
          ) : (
            resolvedTickets.map(ticket => (
              <div key={ticket.id} className="bg-blue-50 text-gray-800 rounded-md p-3 text-sm font-medium border border-blue-100">
                {ticket.title}
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
