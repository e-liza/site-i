import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import Home from './screens/Home/Home';
import Insights from './screens/Insights/Insights';
import AboutUs from './screens/AboutUs/AboutUs';
import { Routes } from './constants/routes';
import Layout from './components/Layout/Layout';
import Pricing from './screens/Pricing/Pricing';
import DemoRequest from './screens/DemoRequest/DemoRequest';
import ServiceRequest from './screens/ServiceRequest/ServiceRequest';
import Article from './screens/Article/Article';
import Careers from './screens/Careers/Careers';
import JobDescription from './screens/JobDescription/JobDescription';
import Solutions from './screens/Solutions/Solutions';
import Security from './screens/Security/Security';
import PartnerProgram from './screens/PartnerProgram/PartnerProgram';
import Plans from './screens/Plans/Plans';

export default (
  <Layout>
    <Helmet>
      <title>IVY</title>
    </Helmet>
    <Switch>
      <Route path={Routes.Home} exact component={Home} />
      <Route path={Routes.AboutUs} component={AboutUs} />
      <Route path={Routes.GetInTouch} component={Pricing} />
      <Route path={Routes.Plans} component={Plans} />
      <Route path={Routes.PartnerProgram} component={PartnerProgram} />
      <Route path={Routes.DemoRequest} component={DemoRequest} />
      <Route path={Routes.ServiceRequest} component={ServiceRequest} />
      <Route path={Routes.Insights} component={Insights} />
      <Route path={Routes.Solutions.Root} component={Solutions} />
      <Route path={Routes.Careers} component={Careers} />
      <Route path={Routes.JobDescription} component={JobDescription} />
      <Route path={Routes.Security} component={Security} />
      <Route path={Routes.Article} component={Article} />
      <Redirect to={Routes.Home} />
    </Switch>
  </Layout>
);
