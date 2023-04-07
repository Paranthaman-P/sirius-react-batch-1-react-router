import logo from './logo.svg';
import './App.css';
import React, { lazy, Suspense, useState } from 'react';

import { HashRouter, BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './pages/main';
import Contact from './pages/contact';
import About from './pages/about';
// import Layout from './pages/layout';
import Protected from './protected';
const Layout = React.lazy(() => {
    return new Promise(resolve => setTimeout(resolve, 5000)).then(
 			() => import("./pages/layout")
 		);
});

function App() {
  const [isLoggedIn, setisLoggedIn] = useState(null);
  const Login = () => {
    setisLoggedIn(true);
  }
  const Logout = () => {
    setisLoggedIn(false);
  }
  return (
    <>
    {/* basename='https://github.io/repo/' */}
    <Suspense fallback={<div>Loading the container...</div>}>
      <BrowserRouter > 
        {
          isLoggedIn ? <button onClick={Logout}>Logout</button> : <button onClick={Login}>Login</button>
        }
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Main />}></Route>
            <Route exact path='/about' element={
              <Protected isLoggedIn={isLoggedIn}>
                <About />
              </Protected>
              
            }></Route>
            <Route exact path='/contact' element={<Contact />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
      </Suspense>
    </>
  );
}

// function App() {
//   // const [isLoggedIn, setisLoggedIn] = useState(null);
//   // const logIn = () => {
//   //   setisLoggedIn(true);
//   // };
//   // const logOut = () => {
//   //   setisLoggedIn(false);
//   // };

//   return (
//     <>
//     {/* basename='https://github.io/repo/' */}
//       <HashRouter > 
//       {/* {isLoggedIn ? (
//         <button onClick={logOut}>Logout</button>
//       ) : (
//         <button onClick={logIn}>Login</button>
//       )} */}
//         <Routes>
//           <Route path="/" element={<Layout />}>
//             <Route index element={<Main />}></Route>
//             <Route exact path='/about' element={
//               <Protected isLoggedIn={isLoggedIn}>
//                 <About />
//               </Protected>
              
//             }></Route>
//             <Route exact path='/contact' element={<Contact />}></Route>
//           </Route>
//         </Routes>
//       </HashRouter>
//     </>
//   );
// }

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