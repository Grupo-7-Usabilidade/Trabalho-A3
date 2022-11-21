import Home from './pages/Home/Home';
import './theme/Theme.css';
import * as Routers from "./routes/routes";
import { Route, Routes } from "react-router-dom";
import Wrapper from './components/wrapper/Wrapper';
import Header from './components/header/Header';

function App() {
    return <Routes>
        <Route path={Routers.HOME} element={
            <>
            <Header />
            <Wrapper content={<Home />}></Wrapper>
            </>
        } exact />
    </Routes>
}

export default App;