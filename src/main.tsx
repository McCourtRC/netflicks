import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { Provider as ReduxProvider } from 'react-redux';
import { store } from 'store';
import './styles/index.css';
import App from './App';

const client = new ApolloClient({
  uri: 'https://graphql.us.fauna.com/graphql',
  cache: new InMemoryCache(),
  headers: {
    authorization: `Bearer ${import.meta.env.VITE_FAUNA_ADMIN_KEY}`,
  },
});

ReactDOM.render(
  <React.StrictMode>
    <ReduxProvider store={store}>
      <ApolloProvider client={client}>
        <App />
      </ApolloProvider>
    </ReduxProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
