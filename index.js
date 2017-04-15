import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './site/reducers'
import App from './site/App';
import StompClient from './site/client-subscribe'
import './site/style.scss';
 
const store = createStore(reducer);

StompClient.initClient();

StompClient.connect().then( 
  (response) => {
    if (response) {
        StompClient.getData("/fx/prices");
    }
    else{
      console.error("StompClient is not working");
    }
}); 

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
)

//const exampleSparkline = document.getElementById('example-sparkline')
//Sparkline.draw(exampleSparkline, [1, 2, 3, 6, 8, 20, 2, 2, 4, 2, 3])