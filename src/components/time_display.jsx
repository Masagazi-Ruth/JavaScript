import React, { useState, useEffect } from 'react';

const TimeDisplay = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="mt-4 text-center">
      <div className="inline-block px-4 py-2 bg-gray-100 rounded-lg shadow">
        <p className="text-gray-700">Current time: {time.toLocaleTimeString()}</p>
      </div>
    </div>
  );
};

export default TimeDisplay;