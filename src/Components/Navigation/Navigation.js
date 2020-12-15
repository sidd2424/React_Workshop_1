import React, { Component, useContext } from 'react'
import { Link, useHistory } from 'react-router-dom'
import './Navigation.css'
import withLogin from '../withLogin'
import LoginContext from '../LoginContext';
import { connect } from 'react-redux'

function Navigation(props) {
    const history = useHistory();
    const loginContext= useContext(LoginContext)
    const setLog=false
    const flag=true

    console.log('context '+loginContext)
    console.log('Login '+props.login)
    console.log('Logout '+props.logout)

    // let handleLogout = () => {
    //     console.log('inside logout');
    //     loginContext.onLogout();
    // }

    // With Redux
    const location = {
        pathname: '/home'
      }
    
    let handleLogout = () => {
        props.dispatch({
            type: 'LogOut',
        });
        console.log(props)
        if(props.navigate===false)
    {
        loginContext.onLogout();
    }
    }

    return (
        <div>
            <nav>
                <ul class="topnav">
                    <li><h2>MyApp</h2></li>
                    <Link to='/home'>
                        <li>Home</li>
                    </Link>
                    {props.login === false?(
                        <Link to='/login'>
                        <li>Login</li>
                        </Link>
                    ) : (
                        <> 
                        <Link to='/CreateForm'>
                            <li>Create</li>
                        </Link>
                        <Link to='/home' onClick={handleLogout} >
                            <li>Logout</li>
                        </Link>
                        </>
                    )}
                </ul>
            </nav>
        </div>
    )
}
            
// export default withLogin(Navigation);

const mapStateToProps = (state) => {   
    return {
        navigate: state.navigate,
    };
};

export default connect(mapStateToProps)(Navigation);
