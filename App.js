import React from 'react';
import { Provider } from 'react-redux';
import Navigation from './Navigation/Navigation';
import { store } from './helpers/Store';

// store.subscribe(() => {
//   console.log('here',store.getState());
// });

export default function App() {
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
}

