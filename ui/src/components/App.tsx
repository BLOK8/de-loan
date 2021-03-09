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
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

const initialState = {
  application: {
    firstName: "Inital",
    title: "Mr",
    lastName: "Data",
    birthDate: "",
    maritalStatus: "",
    email: "",
    phoneNumber: "",
    city: "",
    state: "",
    streetAddress: "",
    pincode: "",
    typeOfId: "",
    idNumber: "",
    docs:{
       "Proof of age and identity":false,
       "Proof of residence":false,
       "PAN Card":false,
      "Proof of Income":false
    }
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

  return (
    <Theme>
      <Snackbar maxSnack={6}>
        <BrowserRouter>
          <StateProvider>
            <Switch>
              <Route
                path="/login"
                render={(props) =>
                  !credentials ? (
                    <LoginScreen {...props} onLogin={setCredentials} />
                  ) : (
                    <Redirect {...props} to="/" />
                  )
                }
              />
              <Route
                path="/"
                render={(props) =>
                  credentials ? (
                    <DamlLedger
                      token={credentials.token}
                      party={credentials.party}
                      httpBaseUrl={httpBaseUrl}
                    >
                      <MainScreen
                        {...props}
                        onLogout={() => setCredentials(undefined)}
                      />
                    </DamlLedger>
                  ) : (
                    <Redirect {...props} to="/login" />
                  )
                }
              />
            </Switch>
          </StateProvider>
        </BrowserRouter>
      </Snackbar>
    </Theme>
  );
};

// APP_END

export default App;
