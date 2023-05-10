import { Route, Routes as ReactRoutes } from 'react-router-dom';
import { Home } from '../pages/Home';

export function Routes(){
    return(
        <ReactRoutes>
            <Route path='/' element={<Home/>}/>
        </ReactRoutes>
    );
}