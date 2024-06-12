import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import CreateCampaign from './pages/CreateCampaign';
import { auth } from './firebase';

function App() {
    const [user, setUser] = React.useState(null);

    React.useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
            setUser(user);
        });
        return () => unsubscribe();
    }, []);

    return (
        <Router>
            <Switch>
                <Route path="/login">
                    <Login />
                </Route>
                <Route path="/create-campaign">
                    <CreateCampaign />
                </Route>
                <Route path="/">
                    {user ? <Home /> : <Login />}
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
