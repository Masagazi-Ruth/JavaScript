import React from 'react';

const Greeting = ({ name }) => {
  const getTimeBasedGreeting = () => {
    const hour = new Date().getHours();
    
    if (hour < 12) {
      return "Good morning";
    } else if (hour < 18) {
      return "Good afternoon";
    } else {
      return "Good evening";
    }
  };

  return (
    <div className="p-6 max-w-md mx-auto bg-white rounded-xl shadow-md flex items-center space-x-4">
      <div className="text-xl font-medium text-black">
        {getTimeBasedGreeting()}, {name}!
      </div>
    </div>
  );
};

export default Greeting;