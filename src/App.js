import logo from './logo.svg';
import './App.css';
import Content from "./components/content.jsx";
import Header from "./components/Header.jsx";
import Navbar from "./components/Nav.jsx";
function App() {
    return (
        <div className='app-wrapper'>
            <Header />
            <Navbar />
            <Content />
        </div>
    );
}

export default App;
