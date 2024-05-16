import React, { useState, useEffect } from 'react';

const SimulationComponent = () => {
    // Initial vehicle position and parameters
    const initialPosition = { x: 0, y: 0 };
    const initialSpeed = 1; // Units per second
    const initialDirection = 'right'; // Initial direction of movement

    // State to track vehicle position
    const [vehiclePosition, setVehiclePosition] = useState(initialPosition);

    // Function to simulate vehicle movement
    const simulateMovement = () => {
        // Set interval to update vehicle position based on speed and direction
        const interval = setInterval(() => {
            setVehiclePosition(prevPosition => {
                // Calculate new position based on speed and direction
                let newPosition = { ...prevPosition };
                switch (initialDirection) {
                    case 'up':
                        newPosition.y -= initialSpeed;
                        break;
                    case 'down':
                        newPosition.y += initialSpeed;
                        break;
                    case 'left':
                        newPosition.x -= initialSpeed;
                        break;
                    case 'right':
                        newPosition.x += initialSpeed;
                        break;
                    default:
                        break;
                }
                return newPosition;
            });
        }, 1000); // Update every second (adjust as needed)

        // Clear interval on component unmount
        return () => clearInterval(interval);
    };

    // Start simulation on component mount
    useEffect(() => {
        simulateMovement();
    }, []);

    return (
        <div>
            <h2>Simulation Area</h2>
            <div style={{ position: 'relative', width: '500px', height: '500px', border: '1px solid black' }}>
                {/* Render vehicle at its position */}
                <div style={{ position: 'absolute', left: `${vehiclePosition.x}px`, top: `${vehiclePosition.y}px`, width: '20px', height: '20px', backgroundColor: 'red' }}></div>
            </div>
        </div>
    );
};

export default SimulationComponent;
