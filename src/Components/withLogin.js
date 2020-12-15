import React from 'react'
import LoginContext from './LoginContext'

const withTheme = (ChildComponent) => (props) => {
    return(
        <LoginContext.Consumer>
            {(value)=><ChildComponent login={value} {...props} />}
        </LoginContext.Consumer>
    );
};

export default withTheme;