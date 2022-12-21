import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import authReducer from 'state'
import { configureStore} from '@reduxjs/toolkit';
import { Provider } from 'react-redux';

import { persistStore,persistReducer,FLUSH,PURGE,PAUSE,REGISTER,REHYDRATE,PERSIST } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { PersistGate } from 'redux-persist/integration/react';

const persistConfigue = {key:"root",storage,version:1}
const persistReducer = persistReducer(persistConfigue,authReducer)
const store = configureStore({
  reducer:persistReducer,
  middleware:(getDefaultMiddleware)=>{
    return getDefaultMiddleware({
      serializableCheck:{
        ignoreActions:{FLUSH,PURGE,PAUSE,REGISTER,REHYDRATE,PERSIST}
      }
    })
  }
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistStore(store)}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>
);

