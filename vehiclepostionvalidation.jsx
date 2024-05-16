import React, { useState } from 'react';

const ScenarioForm = () => {
    const [formData, setFormData] = useState({
        // Define form fields and their initial values
        name: '',
        description: '',
        // Add more fields if needed
    });

    const [errors, setErrors] = useState({});

    // Function to handle form submission
    const handleSubmit = (event) => {
        event.preventDefault();
        // Validate form fields
        if (!formData.name.trim()) {
            setErrors({ name: 'Name is required' });
            return;
        }
        // Additional validation logic for other fields
        // If validation passes, proceed with form submission
        // Example: submitFormData(formData);
    };

    // Function to handle form field changes
    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }));
        // Clear error message when user starts typing
        if (errors[name]) {
            setErrors(prevErrors => ({
                ...prevErrors,
                [name]: ''
            }));
        }
    };

    return (
        <div>
            <h2>Create Scenario</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} />
                    {errors.name && <p className="error">{errors.name}</p>}
                </div>
                {/* Add more form fields */}
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default ScenarioForm;
