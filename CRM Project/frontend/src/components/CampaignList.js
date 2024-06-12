import React, { useState } from 'react';

const AudienceForm = ({ onSave }) => {
    const [rules, setRules] = useState(['']);

    const handleRuleChange = (index, event) => {
        const newRules = rules.slice();
        newRules[index] = event.target.value;
        setRules(newRules);
    };

    const handleAddRule = () => {
        setRules([...rules, '']);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        onSave(rules);
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Create Audience</h2>
            {rules.map((rule, index) => (
                <input
                    key={index}
                    type="text"
                    value={rule}
                    onChange={(event) => handleRuleChange(index, event)}
                    placeholder={`Rule ${index + 1}`}
                    required
                />
            ))}
            <button type="button" onClick={handleAddRule}>Add Rule</button>
            <button type="submit">Save Audience</button>
        </form>
    );
};

export default AudienceForm;
