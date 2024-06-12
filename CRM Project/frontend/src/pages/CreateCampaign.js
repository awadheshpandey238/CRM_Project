import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import AudienceForm from '../components/AudienceForm';
import axios from 'axios';
import config from '../config';

const CreateCampaign = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const history = useHistory();

    const saveAudience = async (rules) => {
        setLoading(true);
        setError('');
        try {
            const audienceResponse = await axios.post(`${config.API_URL}/audiences`, { rules });
            await axios.post(`${config.API_URL}/campaigns`, {
                name: 'New Campaign',
                audienceId: audienceResponse.data._id,
            });
            history.push('/');
        } catch (error) {
            setError(error.response?.data?.message || 'Something went wrong');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <h1>Create Campaign</h1>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            {loading ? <p>Loading...</p> : <AudienceForm onSave={saveAudience} />}
        </div>
    );
};

export default CreateCampaign;
