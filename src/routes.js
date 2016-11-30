import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App';
import PostsIndex from './components/PostIndex';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={PostsIndex} />
  </Route>

)
