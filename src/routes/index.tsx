
import { useKeycloak } from '@react-keycloak/web';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Menu from '../components/Menu';
import HomePage from '../pages/HomePage';
import Profile from '../pages/Profile';

export const AppRouter = () => {
    const { initialized } = useKeycloak();
    if (!initialized) {
        return <h3>Loading ... !!!</h3>;
    }
    return (<>
        <Router>
        <Menu />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/profile" element={<Profile />} />
            </Routes>
        </Router>
    </>
    );
};