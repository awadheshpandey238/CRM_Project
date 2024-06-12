import React from 'react';
import CampaignList from '../components/CampaignList';
import CustomerList from '../components/CustomerList';

const Home = () => (
    <div>
        <h1>Welcome to the Mini CRM</h1>
        <CampaignList />
        <CustomerList />
    </div>
);

export default Home;
