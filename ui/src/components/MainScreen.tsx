// Copyright (c) 2021 Digital Asset (Switzerland) GmbH and/or its affiliates. All rights reserved.
// SPDX-License-Identifier: Apache-2.0

import React from "react";
import MainView from "./MainView";
import { DashboardContainer } from './layouts/DashboardContainer';
import { Documents } from './Documents';

import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { ApproverDashboard } from "./approver/Dashboard";
import { ContactInfoScreen } from "./ContactInfoScreen";
import EmployerInformation from "./EmployerInformation";
import LoanDetails from "./LoanDetails";

type Props = {
  onLogout: () => void;
};

/**
 * React component for the main screen of the `App`.
 */
const MainScreen: React.FC<Props> = ({ onLogout }) => {
  return (
    <DashboardContainer onLogout={onLogout}>
       <Switch>
          <Route
            path="/documents"
          >
            <Documents/>
          </Route>
         
          <Route
            path="/contract-info"
          >
            <ContactInfoScreen />
          </Route>
          <Route
            path="/employer-information"
          >
            <EmployerInformation/>
          </Route>
          <Route
            path="/loan-details"
          >
            <LoanDetails/>
          </Route>
          <Route
            path="/"
          >
            <ApproverDashboard/>
          </Route>
          <Redirect to="/" />
        </Switch>
    </DashboardContainer>
  );
};

export default MainScreen;
