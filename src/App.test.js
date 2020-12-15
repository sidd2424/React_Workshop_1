import React from 'react';
import render from '@testing-library/react';
import screen from '@testing-library/react';
import {BrowserRouter} from 'react-router-dom'
import Navigation from'./Components/Navigation';
describe('AppComponent', () => {​​​​​
  it('Should Display Navigation', () => {​​​​​
  render(
  <BrowserRouter>
  <Navigation/>
  </BrowserRouter>
    );
expect(screen.getByText('MyApp')).toBeInTheDocument();
expect(screen.getByText('Home')).toBeInTheDocument();
expect(screen.getByText('Login')).toBeInTheDocument();
  }​​​​​);
// it('Should Display Navigation', ()=>{​​​​​
//   render(<Navigation />);
//   expect(screen.getByText()).toBeInTheDocument();
// }​​​​​);
}​​​​​);
