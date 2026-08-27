import { Outlet } from "react-router";
import Cabecalho from "./components/Cabecalho"
import Rodape from "./components/Rodape"

function App() {
    return (
        <>
        <Cabecalho/>
        <Outlet/>
        <Rodape/>
        </>
    )
}

export default App
