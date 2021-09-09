import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { Provider as ReduxProvider } from 'react-redux';
import { store } from 'store';
import './index.css';
import App from './App';

const client = new ApolloClient({
  uri: 'https://graphql.us.fauna.com/graphql',
  cache: new InMemoryCache(),
  headers: {
    authorization: `Bearer ${import.meta.env.VITE_FAUNA_ADMIN_KEY}`,
  },
});

ReactDOM.render(
  <ReduxProvider store={store}>
    <ApolloProvider client={client}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </ApolloProvider>
  </ReduxProvider>,
  document.getElementById('root')
);
