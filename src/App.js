import logo from './logo.svg';
import './App.css';
import axios from 'axios';

import Service from './component/service';
import 'bootstrap/dist/css/bootstrap.min.css'
import "bootstrap/dist/js/bootstrap.bundle.min.js"
import Contect from './component/contect';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Futer from './component/fouter';
import About from './component/about';
import Story from './component/story';
import Web from './component/all-service/web';
import Social from './component/all-service/socialm';
import Seo from './component/all-service/seo';
import Ppc from './component/all-service/ppc';
import Mhend from './component/all-service/mhend';
import Media from './component/all-service/media';
import Lead from './component/all-service/lead';
import Grapic from './component/all-service/grapic';
import Email from './component/all-service/email';
import Contactm from './component/all-service/contectm';
import Proudect from './component/proudect';
import 'react-toastify/dist/ReactToastify.css';
import Bgc from './component/bgc';
import Epm from './component/epm';
import Pba from './component/pba';
import Home1 from './component/home1';
import Header from './component/header';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
function App() {
  return (<>
  
    <BrowserRouter>
    <Routes>
      <Route path='/header' Component={Header}></Route>
      <Route path="/" Component={Home1}></Route>
      <Route path='/contect'Component={Contect}></Route>
      <Route path='/service' Component={Service}></Route>
      <Route path='/futer' Component={Futer}></Route>
      <Route path='/about'Component={About}></Route>
      <Route path="story" Component={Story}></Route>
      <Route path='/web' Component={Web}></Route>
      <Route path='/socialm' Component={Social}></Route>
      <Route path='/seo' Component={Seo}></Route>
      <Route path='/ppc' Component={Ppc}></Route>
      <Route path='/mhend' Component={Mhend}></Route>
      <Route path='/media' Component={Media}></Route>
      <Route path='/lead' Component={Lead}></Route>
      <Route path='/grapic' Component={Grapic}></Route>
      <Route path='/email' Component={Email}></Route>
      <Route path='/contectm' Component={Contactm}></Route>
      <Route path='/proudect' Component={Proudect}></Route>
      <Route path='/bgc' Component={Bgc} ></Route>
      <Route path='/epm' Component={Epm}></Route>
      <Route path ="/pba" Component={Pba}></Route>

    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App;
