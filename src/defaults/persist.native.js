// @flow

// $FlowIgnore
import { persistStore } from 'redux-persist';
<<<<<<< HEAD
import AsyncStorage from '@react-native-community/async-storage'; // eslint-disable-line
=======
import AsyncStorage from '@react-native-community/async-storage';
>>>>>>> 7adef48... replace RN AsyncStorage with community package

export default (store: any, options: {}, callback: any) =>
  persistStore(store, { storage: AsyncStorage, ...options }, callback);
