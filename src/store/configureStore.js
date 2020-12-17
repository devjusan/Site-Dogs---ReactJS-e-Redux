import { combineReducers, configureStore } from '@reduxjs/toolkit';

import photo from './photo';
import token from './token';
import user from './user';
import feed from './feed';
import ui from './ui';

const reducer = combineReducers({ photo, token, user, feed, ui });
const store = configureStore({ reducer });

export default store;
