import React, { useState } from 'react';

const SimulationComponent = () => {
    // Define scenario parameters (can be passed as props or fetched from backend)
    const scenarioParams = {
        direction: 'right',
        speed: 2,
        // Add more parameters as needed
    };

    // Define simulation area boundaries
    const simulationAreaBoundaries = {
        minX: 0,
        minY: 0,
        maxX: 500, // Example boundary values (adjust as needed)
        maxY: 500,
    };

    // State to track vehicle position
    const [vehiclePosition, setVehiclePosition] = useState({ x: 0, y: 0 });

    // Function to start simulation
    const startSimulation = () => {
        // Set interval to update vehicle position based on speed and direction
        const interval = setInterval(() => {
            setVehiclePosition(prevPosition => {
                // Calculate new position based on speed and direction
                let newPosition = { ...prevPosition };
                switch (scenarioParams.direction) {
                    case 'up':
                        newPosition.y -= scenarioParams.speed;
                        break;
                    case 'down':
                        newPosition.y += scenarioParams.speed;
                        break;
                    case 'left':
                        newPosition.x -= scenarioParams.speed;
                        break;
                    case 'right':
                        newPosition.x += scenarioParams.speed;
                        break;
                    default:
                        break;
                }
                return newPosition;
            });
        }, 1000); // Update every second (adjust as needed)

        // Clear interval if vehicle goes outside simulation area
        const checkBoundariesInterval = setInterval(() => {
            if (
                vehiclePosition.x < simulationAreaBoundaries.minX ||
                vehiclePosition.x > simulationAreaBoundaries.maxX ||
                vehiclePosition.y < simulationAreaBoundaries.minY ||
                vehiclePosition.y > simulationAreaBoundaries.maxY
            ) {
                clearInterval(interval);
                clearInterval(checkBoundariesInterval);
            }
        }, 100); // Check boundaries every 100 milliseconds
    };

    return (
        <div>
            <h2>Simulation Area</h2>
            <div style={{ position: 'relative', width: '500px', height: '500px', border: '1px solid black' }}>
                {/* Render vehicle at its position */}
                <div style={{ position: 'absolute', left: `${vehiclePosition.x}px`, top: `${vehiclePosition.y}px`, width: '20px', height: '20px', backgroundColor: 'red' }}></div>
            </div>
            <button onClick={startSimulation}>Start Simulation</button>
        </div>
    );
};

export default SimulationComponent;
