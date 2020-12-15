import React from 'react'
import CreateForm from './CreateForm'
import Create from './CreateForm'
import cards from './data'

class CreateNew extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        showComponent: false,
      };
      this._onButtonClick = this._onButtonClick.bind(this);
      console.log(this.props.cardsarray)
    }
  
    _onButtonClick() {
      this.setState({
        showComponent: true,
      });
    }
  
    render() {
      return (
        <div>
          <button onClick={this._onButtonClick}>Create New</button>
          {this.state.showComponent ?
            //  <CreateForm /> :
            <Create cardsarray={this.props.cardsarray} /> :
             null
          }
        </div>
      );
    }
  }
    
  export default CreateNew