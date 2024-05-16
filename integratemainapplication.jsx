import React from 'react';
import Sidebar from './Sidebar';
import HomePage from './HomePage';

const App = () => {
    // Define functions to handle CRUD operations
    const handleCreateScenario = () => {
        // Logic to create scenario
    };

    // Define other CRUD functions

    return (
        <div className="app">
            <Sidebar
                onCreateScenario={handleCreateScenario}
                // Pass other CRUD functions as props
            />
            <HomePage />
        </div>
    );
};

export default App;
