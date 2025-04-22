import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import Home from './screens/Home/Home';
import Insights from './screens/Insights/Insights';
import AboutUs from './screens/AboutUs/AboutUs';
import { Routes as AppRoutes } from './constants/routes';
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
import Overview from './screens/Solutions/screens/Overview/Overview';
import Employee from './screens/Solutions/screens/Employee/Employee';
import Payroll from './screens/Solutions/screens/Payroll/Payroll';
import Company from './screens/Solutions/screens/Company/Company';
import Business from './screens/Solutions/screens/Business/Business';
import Mobile from './screens/Solutions/screens/Mobile/Mobile';
import IvySupport from './screens/Solutions/screens/IvySupport/IvySupport';
import SignIn from './screens/SignIn/SignIn'; // Import your SignIn component

export default (
  <Layout>
    <Helmet>
      <title>IVY</title>
    </Helmet>
    <Routes>
      <Route path={AppRoutes.Home} element={<Home />} />
      <Route path={AppRoutes.AboutUs} element={<AboutUs />} />
      <Route path={AppRoutes.GetInTouch} element={<Pricing />} />
      <Route path={AppRoutes.Plans} element={<Plans />} />
      <Route path={AppRoutes.PartnerProgram} element={<PartnerProgram />} />
      <Route path={AppRoutes.DemoRequest} element={<DemoRequest />} />
      <Route path={AppRoutes.ServiceRequest} element={<ServiceRequest />} />
      <Route path={AppRoutes.Insights} element={<Insights />} />
      <Route path={AppRoutes.Careers} element={<Careers />} />
      <Route path={AppRoutes.JobDescription} element={<JobDescription />} />
      <Route path={AppRoutes.Security} element={<Security />} />
      <Route path={AppRoutes.Article} element={<Article />} />
      <Route path="/insights/insight/:title" element={<Article />} />
      {/* Nested Routing for Solutions */}
      <Route path={AppRoutes.Solutions.Root} element={<Solutions />}>
        <Route index element={<Navigate to="overview" />} />
        <Route path={AppRoutes.Solutions.Overview} element={<Overview />} />
        <Route path={AppRoutes.Solutions.Employee} element={<Employee />} />
        <Route path={AppRoutes.Solutions.Payroll} element={<Payroll />} />
        <Route path={AppRoutes.Solutions.Company} element={<Company />} />
        <Route path={AppRoutes.Solutions.Business} element={<Business />} />
        <Route path={AppRoutes.Solutions.Mobile} element={<Mobile />} />
        <Route path={AppRoutes.Solutions.IvySupport} element={<IvySupport />} />
      </Route>
      {/* Add SignIn route here */}
      <Route path={AppRoutes.SignIn} element={<SignIn />} /> {/* SignIn route */}
      <Route path="*" element={<Navigate to={AppRoutes.Home} />} />
    </Routes>
  </Layout>
);
