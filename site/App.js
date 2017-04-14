import React, { PropTypes } from 'react';
import Header from './components/header/index'
import CurrencyPage from './containers/CurrencyPage'

// This is a class-based component because the current
// version of hot reloading won't hot reload a stateless
// component at the top-level.
class App extends React.Component {
  render() {
    return (
      <div>
         <Header></Header>
         <main className = "mh-layout__content">
           <CurrencyPage></CurrencyPage>
         </main>
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.element
};

export default App;
