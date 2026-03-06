import React, { useState } from 'react';
import { toast } from 'react-toastify';
import Navbar from '../components/Navbar';
import StatsCards from '../components/StatsCards';
import TicketList from '../components/TicketList';
import TaskStatus from '../components/TaskStatus';
import Footer from '../components/Footer';
import { initialTickets } from '../data/tickets';

export default function Home() {
  const [availableTickets, setAvailableTickets] = useState(initialTickets);
  const [taskStatusTickets, setTaskStatusTickets] = useState([]);
  const [resolvedTickets, setResolvedTickets] = useState([]);

  const handleTicketClick = (ticket) => {
    // Check if already in task status
    if (taskStatusTickets.find(t => t.id === ticket.id)) {
      toast.info('Ticket is already in Task Status');
      return;
    }
    
    setTaskStatusTickets([...taskStatusTickets, ticket]);
    toast.success('Ticket added to Task Status');
  };

  const handleCompleteTask = (ticket) => {
    // Remove from task status
    setTaskStatusTickets(taskStatusTickets.filter(t => t.id !== ticket.id));
    
    // Add to resolved
    setResolvedTickets([...resolvedTickets, ticket]);
    
    // Remove from available tickets
    setAvailableTickets(availableTickets.filter(t => t.id !== ticket.id));
    
    toast.success('Ticket marked as completed');
  };

  return (
    <div className="min-h-screen bg-[#F8F9FA] font-sans flex flex-col">
      <Navbar />
      
      <main className="flex-grow max-w-7xl mx-auto px-6 w-full">
        <StatsCards 
          inProgressCount={taskStatusTickets.length} 
          resolvedCount={resolvedTickets.length} 
        />
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 pb-16">
          <div className="lg:col-span-2">
            <TicketList 
              tickets={availableTickets} 
              onTicketClick={handleTicketClick} 
            />
          </div>
          <div className="lg:col-span-1">
            <TaskStatus 
              taskStatusTickets={taskStatusTickets}
              resolvedTickets={resolvedTickets}
              onComplete={handleCompleteTask}
            />
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
