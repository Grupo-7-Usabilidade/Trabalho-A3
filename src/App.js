import Home from './pages/Home/Home';
import './theme/Theme.css';
import * as Routers from "./routes/routes";
import { Route, Routes } from "react-router-dom";
import Wrapper from './components/wrapper/Wrapper';
import Header from './components/header/Header';
import Books from './pages/Books/Books';
import { UseSearchContext } from "./context/context";

function App() {
    const { search, setSearch } = UseSearchContext("");
    return <Routes>
        <Route path={Routers.HOME} element={
            <>
                <Header search={search} handleSearch={setSearch} />
                <Wrapper content={<Home search={search} />}></Wrapper>
            </>
        } exact />
        <Route path={Routers.BOOKS} element={
            <>
                <Header />
                <Wrapper content={<Books />}></Wrapper>
            </>
        } exact />
    </Routes>
}

export default App;