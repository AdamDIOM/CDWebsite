import { Route, Switch } from "react-router";
import { BrowserRouter } from "react-router-dom";

import Home from './pages/home/home';
import Unknown from './pages/unknown/unknown';
import About from './pages/about/about';

import Doctor from './pages/doctor/doctor';
import DebtManagement from './pages/debtManagement/debtManagement';

import CaseStudies from './pages/caseStudies/caseStudies';
import Links from './pages/links/links';
import Contact from './pages/contact/contact';

const Content = () => {
  return(
    <BrowserRouter>
      <Switch>
        <Route exact path = '/' component = { Home } />

        <Route exact path = '/about' component = { About } />

        <Route exact path = '/doctor' component = { Doctor } />
        <Route exact path = '/debt-management' component = { DebtManagement } />


        <Route exact path = '/case-studies' component = { CaseStudies } />
        <Route exact path = '/links' component = { Links } />
        <Route exact path = '/contact' component = { Contact } />

        <Route exact path = '*' component = { Unknown } />
      </Switch>
    </BrowserRouter>
  )
}

export default Content;
