import logo from './logo.svg';
import './App.css';

import { HashRouter, BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './pages/layout';
import Main from './pages/main';
import Contact from './pages/contact';
import About from './pages/about';

function App() {
  return (
    <>
    {/* basename='https://github.io/repo/' */}
      <HashRouter > 
        <Routes>
          
            <Route path='/main' element={<Main />}></Route>
            <Route exact path='/about' element={<About />}></Route>
            <Route exact path='/contact' element={<Contact />}></Route>
          
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;



// import { Admin, ListGuesser, Resource } from "react-admin";
// import jsonServerProvider from "ra-data-json-server";

// const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');

// const App = () => (
//   <Admin dataProvider={dataProvider}>
//     <Resource name="posts" list={ListGuesser} />
//     <Resource name="comments" list={ListGuesser} />
//   </Admin>
// );

// export default App;