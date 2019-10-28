import React from 'react';
import Head from 'next/head';
import dynamic from 'next/dynamic';
import withRedux from 'next-redux-wrapper';
import withReduxSaga from 'next-redux-saga';
import { applyMiddleware, compose, createStore } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';

import rootSaga from '../sagas';
import reducer from '../reducers';
import '../public/static/empty.css';

const UseEffectApp = dynamic(import('../components/useEffectApp'), {
  ssr: false,
});
import Header from '../components/header';
import { createGlobalStyle } from 'styled-components';
import ResetStyle from '../styled-components/resetStyle';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    background-color: #ddd;
    color: #333;
    font-family: 'Noto Sans KR', sans-serif;
    font-weight: normal;
  }
`;

const App = ({ Component, store, pageProps }) => {
  return (
    <>
      <Provider store={store}>
        <GlobalStyle></GlobalStyle>
        <ResetStyle></ResetStyle>
        <Head>
          <title>bmazon</title>
          <link href="https://fonts.googleapis.com/css?family=Noto+Sans+KR:400,700&display=swap"></link>
        </Head>
        <div
          style={{
            maxWidth: '500px',
            margin: 'auto',
            minHeight: '100vh',
            backgroundColor: '#eee',
            boxShadow: '0 3px 6px rgba(0,0,0,0.1)',
          }}
        >
          <Header pageProps={pageProps}></Header>
          <UseEffectApp>
            <Component {...pageProps}></Component>
          </UseEffectApp>
        </div>
      </Provider>
    </>
  );
};

App.getInitialProps = async context => {
  const { ctx, Component } = context;
  let pageProps = {};
  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx);
  }
  return { pageProps };
};

const configureStore = (initialState, options) => {
  const sagaMiddleware = createSagaMiddleware();
  const middlewares = [sagaMiddleware];
  const enhancer =
    process.env.NODE_ENV === 'production'
      ? compose(applyMiddleware(...middlewares))
      : compose(
          applyMiddleware(...middlewares),
          !options.isServer &&
            typeof window.__REDUX_DEVTOOLS_EXTENSION__ !== 'undefined'
            ? window.__REDUX_DEVTOOLS_EXTENSION__()
            : f => f,
        );
  const store = createStore(reducer, initialState, enhancer);
  store.sagaTask = sagaMiddleware.run(rootSaga);
  return store;
};

export default withRedux(configureStore)(withReduxSaga(App));
