import logo from './logo.svg';
import {useState, useEffect} from 'react'
import './App.css';
import Navigation from './Components/Navigation/Navigation'
import CreateForm from './Components/CreateNew'
import Filter from './Components/Filter'
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'
import Login from './Components/Login'
import LoginContext from './Components/LoginContext'
import ErrorBoundary from './Components/WebErrorBoundary'
import {Provider } from 'react-redux'
import store from './Components/store'

const PageNotFound = (props) =>{
  return(
    <h1>Page Not Found</h1>
  )
}


function App() {
  const [data, setData] = useState([]);
  const [isLoggedIn, setIsLoggedIn]=useState(false);
  const [log, setLog]= useState(false)

console.log('App')
console.log(store)

  useEffect(() => {
    fetch('/data.json')
    .then((response)=>response.json())
    .then((data)=>setData(data));
    return ()=>{
      console.log('*****************************')
    };
}, []);
  
  return (
    <div className="App">
      <Provider store={store}>
      <ErrorBoundary>
      <BrowserRouter>
      <LoginContext.Provider 
      value={{
        login:log,
        onLogout:()=> setLog(false),
      }}
      >
      {/* <Navigation login={isLoggedIn} /> */}
      <Navigation login={log} logout={log} /> 
      <Switch>
          <Route exact path='/' component={Filter} >
            <Filter cardsarray={data} />
          </Route>
          <Route path='/home' component={Filter} >
            <Filter cardsarray={data} />
          </Route>
          <Route path='/login'>
            {/* <Login onSubmit={()=> setIsLoggedIn(true)} /> */}
            <Login onSubmit={()=> setLog(true)}  />
          </Route>
          {/* <Route path='/CreateForm' login={isLoggedIn} cardsarray={data} > */}
          <Route path='/CreateForm' login={log} logout={log} cardsarray={data} >
            <CreateForm cardsarray={data} />
          </Route>
          <Route component={PageNotFound} />
        </Switch>
      </LoginContext.Provider>
      </BrowserRouter>
      </ErrorBoundary>
      </Provider>
    </div>
  );
}

export default App;
