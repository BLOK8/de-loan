// Copyright (c) 2021 Digital Asset (Switzerland) GmbH and/or its affiliates. All rights reserved.
// SPDX-License-Identifier: Apache-2.0

import React from "react";
import MainView from "./MainView";
import { DashboardContainer } from './layouts/DashboardContainer';

import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

type Props = {
  onLogout: () => void;
};

/**
 * React component for the main screen of the `App`.
 */
const MainScreen: React.FC<Props> = ({ onLogout }) => {
  return (
    <DashboardContainer onLogout={onLogout}>
      <MainView/>
    </DashboardContainer>
  );
};

export default MainScreen;
