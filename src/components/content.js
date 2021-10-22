import { Route, Switch } from "react-router";
import { BrowserRouter } from "react-router-dom";

import Home from './pages/home';
import Unknown from './pages/unknown';

const Content = () => {
  return(
    <BrowserRouter>
      <Switch>
        <Route exact path = '/' component = { Home }></Route>

        <Route exact path = '*' component = { Unknown }></Route>
      </Switch>
    </BrowserRouter>
  )
}

export default Content;
