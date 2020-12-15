import React, { useState } from "react";
import { useHistory } from 'react-router-dom'
import withLogin from './withLogin'
import { connect } from 'react-redux'

// class Controlled extends React.Component {
    function Login(props){
        const [ formData, setFormdata ] = useState({
            userName:"",
            password:"",
        });

        const history = useHistory();

        console.log(props);

        let handleChange = ({ target }) => {
            setFormdata({
                [target.name]:target.value
            });
        };

        let handleSubmit = (event) => {
          props.dispatch({
            type: 'HandleLogin',
        });
            console.log(props.login)
            event.preventDefault();
            props.onSubmit();
            history.push('/home')
        };

        return(
            <form onSubmit={handleSubmit}>
                <h1>Login</h1>
              
              <label>
                Username:
                <input
                  type="text"
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                />
              </label>
    
              <br />
    
              <label>
                Password:
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                />
              </label>
              <br />
              <button type="submit">Submit</button>
            </form>
        )
    }
// export default withLogin(Login);

const mapStateToProps = (state) => {   
  return {
      login: state.login,
  };
};

export default connect(mapStateToProps)(Login);
