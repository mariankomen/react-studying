import logo from './logo.svg';
import './App.css';
import Content from "./components/Content_folder/content.jsx";
import Header from "./components/Header_folder/Header.jsx";
import Navbar from "./components/Nav_folder/Nav.jsx";
import Dialogs from "./components/Dialogs/Dialogs";
import Music from "./components/Music_folder/Music";
import News from "./components/News_folde/News";
import Settings from "./components/Settings_folder/Settings"
import {BrowserRouter, Route} from "react-router-dom";

function App() {
    return (
        <BrowserRouter>
        <div className='app-wrapper'>
            <Header/>
            <Navbar/>
            {/*       <Content />*/}
            <div class='app-wrapper-content'>
                <Route path='/dialogs' component={Dialogs}/>
                <Route path='/content' component={Content}/>
                <Route path='/music' component={Music}/>
                <Route path='/news' component={News}/>
                <Route path='/settings' component={Settings}/>

            </div>
        </div>
        </BrowserRouter>
    );

}

export default App;
