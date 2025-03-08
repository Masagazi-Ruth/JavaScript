import { useState } from 'react'
import './App.css'
import Greeting from './components/Greeting'
import Button from './components/button' 
import TimeDisplay from './components/time_display';

function App() {
  const [name, setName] = useState('');
  const [showGreeting, setShowGreeting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim()) {
      setShowGreeting(true);
    }
  };

  const resetForm = () => {
    setShowGreeting(false);
    setName('');
  };

  return (
    <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-sky-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
        <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
          <div className="max-w-md mx-auto">
            <div className="divide-y divide-gray-200">
              <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                <h1 className="text-2xl font-bold text-center text-gray-900">React Greeting App</h1>
                <TimeDisplay />
                
                {!showGreeting ? (
                  <form onSubmit={handleSubmit} className="mt-5">
                    <div className="mt-2">
                      <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Enter your name"
                        className="px-4 py-2 mt-2 border rounded-md w-full focus:outline-none focus:ring-2 focus:ring-cyan-500"
                        required
                      />
                    </div>
                    <div className="flex items-center justify-center mt-4">
                      <Button color="green" onClick={handleSubmit}>
                        Show Greeting
                      </Button>
                    </div>
                  </form>
                ) : (
                  <div className="mt-5">
                    <Greeting name={name} />
                    <div className="flex items-center justify-center mt-4">
                      <Button color="gray" onClick={resetForm}>
                        Reset
                      </Button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;