import React from 'react'

class ErrorBoundary extends React.Component {
    state={
        error: null,
    };

    static getDerivedStateFromError(error){
        return{
            error,
        };
    }

    render(){
        const hasError = !!this.state.error;

        return hasError ? (
            <>
                <h1>Something Went Wrong</h1>
                <p>{this.state.error.message}</p>
            </>
        ) : (
            this.props.children
        );
    }
}

export default ErrorBoundary;      