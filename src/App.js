import Home from './pages/Home/Home';
import './theme/Theme.css';
import * as Routers from "./routes/routes";
import { Route, Routes } from "react-router-dom";
import Wrapper from './components/wrapper/Wrapper';
import Header from './components/header/Header';
import Books from './pages/Books/Books';
import { UseSearchContext } from "./context/context";
import Cart from './pages/Cart/Cart';
import Eletronics from './pages/Eletronics/Eletronics';
import Home_Appliances from './pages/Home_Appliances/Home_Appliances';
import Peripherals from './pages/Peripherals/Peripherals';
import Movies from './pages/Movies/Movies';

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
                <Header search={search} handleSearch={setSearch} />
                <Wrapper content={<Books search={search} />}></Wrapper>
            </>
        } />
        <Route path={Routers.ELETRONICS} element={
            <>
                <Header search={search} handleSearch={setSearch} />
                <Wrapper content={<Eletronics search={search} />}></Wrapper>
            </>
        } />
        <Route path={Routers.HOME_APPLIANCES} element={
            <>
                <Header search={search} handleSearch={setSearch} />
                <Wrapper content={<Home_Appliances search={search} />}></Wrapper>
            </>
        } />
        <Route path={Routers.PERIPHERALS} element={
            <>
                <Header search={search} handleSearch={setSearch} />
                <Wrapper content={<Peripherals search={search} />}></Wrapper>
            </>
        } />
        <Route path={Routers.MOVIES} element={
            <>
                <Header search={search} handleSearch={setSearch} />
                <Wrapper content={<Movies search={search} />}></Wrapper>
            </>
        } />
        <Route path={Routers.CART} element={
            <>
                <Header search={search} handleSearch={setSearch} />
                <Wrapper content={<Cart search={search} />}></Wrapper>
            </>
        } />
    </Routes>
}

export default App;