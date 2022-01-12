import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import phoneBookReducer from './reducer';

const persistConfig = {
  key: 'contacts',
  storage,
  blacklist: ['filter'],
};

const store = configureStore({
  reducer: {
    phoneBook: persistReducer(persistConfig, phoneBookReducer),
  },
});

const persistor = persistStore(store);

export default { store, persistor };
