// Copyright (c) 2021 Digital Asset (Switzerland) GmbH and/or its affiliates. All rights reserved.
// SPDX-License-Identifier: Apache-2.0

import React from "react";
import LoginScreen from "./LoginScreen";
import MainScreen from "./MainScreen";
import DamlLedger from "@daml/react";
import Credentials from "../Credentials";
import { httpBaseUrl } from "../config";
import { ThemeProviderContainer as Theme } from "../theme";
import { Snackbar } from "./uiComponents";

export const initialState = {
  applicant: {
    firstName: "aa",
  },
  loanDetails: {
    purpose: "Personal",
    loanAmount: "",
    loanTerm: "",
  },
  employerInformation: {
    presentEmployer: "Yes",
    occupation: "Private",
    employmentPeriod: "0-1",
    grossMonthlyIncome: "",
  },
};
const StateContext = React.createContext({});

export const useAppState = () => {
  const context = React.useContext(StateContext);
  if (!context) {
    throw new Error(`useState must be used within a StateProvider`);
  }

  return context;
};
export const StateProvider = (props: any) => {
  const [state, setState] = React.useState(initialState);
  const value = React.useMemo(() => [state, setState], [state]);

  return (
    <StateContext.Provider value={value}>
      {props.children}
    </StateContext.Provider>
  );
};

/**
 * React component for the entry point into the application.
 */
// APP_BEGIN
const App: React.FC = () => {
  const [credentials, setCredentials] = React.useState<
    Credentials | undefined
  >();

  const getLendingPage = () => {
    return (
      <Theme>
        <Snackbar maxSnack={6}>
          {credentials ? (
            <DamlLedger
              token={credentials.token}
              party={credentials.party}
              httpBaseUrl={httpBaseUrl}
            >
              <MainScreen onLogout={() => setCredentials(undefined)} />
            </DamlLedger>
          ) : (
            <LoginScreen onLogin={setCredentials} />
          )}
        </Snackbar>
      </Theme>
    );
  };
  return <StateProvider>{getLendingPage()}</StateProvider>;
};

// APP_END

export default App;
