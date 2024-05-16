import React, { useState, useEffect } from 'react';
import axios from 'axios';

const API_URL = 'http://localhost:3000'; // Replace with your backend server URL

const ScenarioComponent = () => {
    const [scenarios, setScenarios] = useState([]);

    // Function to fetch scenarios from the server
    const fetchScenarios = async () => {
        try {
            const response = await axios.get(`${API_URL}/scenarios`);
            setScenarios(response.data);
        } catch (error) {
            console.error('Error fetching scenarios:', error);
        }
    };

    // Function to create a new scenario
    const createScenario = async (scenarioData) => {
        try {
            await axios.post(`${API_URL}/scenarios`, scenarioData);
            fetchScenarios(); // Fetch scenarios again to update the list
        } catch (error) {
            console.error('Error creating scenario:', error);
        }
    };

    // Function to update an existing scenario
    const updateScenario = async (scenarioId, updatedData) => {
        try {
            await axios.put(`${API_URL}/scenarios/${scenarioId}`, updatedData);
            fetchScenarios(); // Fetch scenarios again to update the list
        } catch (error) {
            console.error('Error updating scenario:', error);
        }
    };

    // Function to delete a scenario
    const deleteScenario = async (scenarioId) => {
        try {
            await axios.delete(`${API_URL}/scenarios/${scenarioId}`);
            fetchScenarios(); // Fetch scenarios again to update the list
        } catch (error) {
            console.error('Error deleting scenario:', error);
        }
    };

    // Fetch scenarios when component mounts
    useEffect(() => {
        fetchScenarios();
    }, []);

    return (
        <div>
            {/* Render scenarios or scenario creation/update/delete form */}
        </div>
    );
};

export default ScenarioComponent;
