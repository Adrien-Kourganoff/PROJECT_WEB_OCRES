import {React , Redirect} from 'react';

const Home = () => {
    return (
        <div>
            <Redirect to="./Map" push />
        </div>
    );
};

export default Home;