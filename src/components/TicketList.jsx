import React from 'react';
import TicketCard from './TicketCard';

export default function TicketList({ tickets, onTicketClick }) {
  return (
    <div>
      <h2 className="text-xl font-bold text-gray-800 mb-4">Customer Tickets</h2>
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-4">
        {tickets.map(ticket => (
          <TicketCard key={ticket.id} ticket={ticket} onClick={onTicketClick} />
        ))}
      </div>
    </div>
  );
}
