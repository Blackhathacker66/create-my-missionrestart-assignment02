import React from 'react';
import { Calendar } from 'lucide-react';

export default function TicketCard({ ticket, onClick }) {
  const priorityColor = {
    'HIGH PRIORITY': 'text-red-500',
    'MEDIUM PRIORITY': 'text-orange-500',
    'LOW PRIORITY': 'text-green-500'
  }[ticket.priority] || 'text-gray-500';

  const statusBg = ticket.status === 'Open' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700';

  return (
    <div 
      onClick={() => onClick(ticket)}
      className="bg-white rounded-xl shadow-sm border border-gray-100 p-5 cursor-pointer hover:shadow-md transition-shadow flex flex-col h-full"
    >
      <div className="flex justify-between items-start mb-2">
        <h3 className="font-bold text-gray-900 text-sm md:text-base pr-2">{ticket.title}</h3>
        <span className={`px-3 py-1 rounded-full text-xs font-medium whitespace-nowrap flex items-center ${statusBg}`}>
          <span className={`inline-block w-2 h-2 rounded-full mr-1.5 ${ticket.status === 'Open' ? 'bg-green-500' : 'bg-yellow-500'}`}></span>
          {ticket.status}
        </span>
      </div>
      <p className="text-gray-500 text-sm mb-4 flex-grow line-clamp-2">{ticket.description}</p>
      
      <div className="flex items-center justify-between text-xs text-gray-500 mt-auto pt-4 border-t border-gray-50">
        <div className="flex items-center space-x-3">
          <span className="font-medium text-gray-400">{ticket.id}</span>
          <span className={`font-bold ${priorityColor}`}>{ticket.priority}</span>
        </div>
        <div className="flex items-center space-x-4">
          <span>{ticket.customer}</span>
          <span className="flex items-center">
            <Calendar className="w-3 h-3 mr-1" />
            {ticket.createdAt}
          </span>
        </div>
      </div>
    </div>
  );
}
