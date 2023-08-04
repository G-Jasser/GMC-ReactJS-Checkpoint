import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import NavbarReact from './components/NavbarReact'
import CardsCollection from './components/CardsCollection'
import ChildrenTest from './components/ChildrenTest'

const App = () =>{
    return(
        <>
            <NavbarReact/>
            <CardsCollection/>
            <ChildrenTest></ChildrenTest>
        </>
    )
}

export default App