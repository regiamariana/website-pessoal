import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import reportWebVitals from './reportWebVitals';

import Home from './pages/home'
import Teste from './pages/teste'

// ReactDOM.render(
  //   <React.StrictMode>
  //     <App />
  //   </React.StrictMode>,
  //   document.getElementById('root')
  // );
  import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
  
  const routing =(
    <Router>
      <div>
        <Switch>
          <Route exact path='/' component={Home} />
          {/* <Route path='/galeria' component={Galeria} /> */}
          <Route path='/teste' component={Teste} />
        </Switch>
      </div>
    </Router>
  )
  
  ReactDOM.render(routing, document.getElementById('root'));

  // const routing =(
  //     <Router>
  //      <div>
  //         {/* <Switch> */}
  //            {/* <Router path='/' component={<Home />} /> */}
  //           {/* <Route path='/galeria' component={Galeria} /> */}
  //           {/* <Router path='/galeria' component={GaleriaCerta} /> */}
  //           <Router exact path='/'>
  //       <Teste />
  //     </Router>

  //     <Router path='/oi'>
  //       <Home />
  //     </Router>
  //       {/* </Switch> */}
  //     </div>
  //   </Router>
  
  // )
  // ReactDOM.render(routing, document.getElementById('root'));
  




  // ReactDOM.render(
  //   <React.StrictMode>
  //         <Router>
  //    <div>
  //       <Switch>
  //          <Route path='/' component={Home} />
  //         <Route path='/galeria' component={Galeria} />
  //         <Route path='/galeria' component={GaleriaCerta} />
  //       </Switch>
  //     </div>
  //   </Router>
  //   </React.StrictMode>,
  //   document.getElementById('root')
  // );
  
// ReactDOM.render(
//   <React.StrictMode>
//     <Home />
//   </React.StrictMode>,
//   document.getElementById('root')

// );







  // ReactDOM.render(
  //   <React.StrictMode>
  //     <Router>

  //       {/* <div> */}
  //           {/* <Routes> */}
              
              

  //             <Router path='/'>
  //             <Home />
  //             </Router>

  //             {/* <Router path='/teste'>
  //             <Teste />
  //             </Router> */}

  //           {/* </Routes> */}
  //       {/* </div> */}
        
  //     </Router>
  //   </React.StrictMode>,
  //   document.getElementById('root')
  // );




//   ReactDOM.render(
//     <React.StrictMode>
// {/*       
//       <Router exact path='/'>
//         <Teste />
//       </Router>

//       <Router path='/oi'>
//         <Home />
//       </Router> */}
//       <App />
//     </React.StrictMode>,
//     document.getElementById('root')
//   );















  


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();




// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';

// import Home from './pages/home';
// // import Galeria from './pages/galeria';
// import GaleriaCerta from './pages/galeriaCerta'

// import reportWebVitals from './reportWebVitals';


// import { Route, BrowserRouter as Router, Switch} from "react-router-dom";

// const routing =(
//   <Router>
//     <div>
//       <Switch>
//         <Route exact path='/' component={Home} />
//         {/* <Route path='/galeria' component={Galeria} /> */}
//         <Route path='/galeria' component={GaleriaCerta} />
//       </Switch>
//     </div>
//   </Router>
// )

// ReactDOM.render(routing, document.getElementById('root'));

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
