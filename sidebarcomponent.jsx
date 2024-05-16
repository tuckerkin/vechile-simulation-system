import React from 'react';

const Sidebar = ({ onCreateScenario, onSelectScenario, onUpdateScenario, onDeleteScenario, onCreateVehicle, onSelectVehicle, onUpdateVehicle, onDeleteVehicle }) => {
    return (
        <div className="sidebar">
            <h2>Options</h2>
            <button onClick={onCreateScenario}>Create Scenario</button>
            <button onClick={onSelectScenario}>Select Scenario</button>
            <button onClick={onUpdateScenario}>Update Scenario</button>
            <button onClick={onDeleteScenario}>Delete Scenario</button>
            <button onClick={onCreateVehicle}>Create Vehicle</button>
            <button onClick={onSelectVehicle}>Select Vehicle</button>
            <button onClick={onUpdateVehicle}>Update Vehicle</button>
            <button onClick={onDeleteVehicle}>Delete Vehicle</button>
        </div>
    );
};

export default Sidebar;
