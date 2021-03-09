// Copyright (c) 2021 Digital Asset (Switzerland) GmbH and/or its affiliates. All rights reserved.
// SPDX-License-Identifier: Apache-2.0

import React, { useCallback } from "react";
import Credentials, { computeCredentials } from "../Credentials";
import Ledger from "@daml/ledger";
import { User } from "@daml.js/create-daml-app";
import {
  DeploymentMode,
  deploymentMode,
  ledgerId,
  httpBaseUrl,
} from "../config";
import { useEffect } from "react";
import GoogleLogin from "react-google-login";
import { useAppState } from "./App";
import { TextField, Button } from "./uiComponents";
import { InputAdornment, styled } from "@material-ui/core";
import { AccountCircle } from "@material-ui/icons";

type Props = {
  onLogin: (credentials: Credentials) => void;
};

/**
 * React component for the login screen of the `App`.
 */
const LoginScreen: React.FC<Props> = ({ onLogin }) => {
  const [username, setUsername] = React.useState("");
  //@ts-ignore
  const [state, setState] = useAppState();

  console.log("hh", state);

  const login = useCallback(
    async (credentials: Credentials) => {
      try {
        const ledger = new Ledger({ token: credentials.token, httpBaseUrl });
        let userContract = await ledger.fetchByKey(
          User.User,
          credentials.party
        );
        if (userContract === null) {
          const user = { username: credentials.party, following: [] };
          userContract = await ledger.create(User.User, user);
        }
        onLogin(credentials);
      } catch (error) {
        alert(`Unknown error:\n${error}`);
      }
    },
    [onLogin]
  );

  const handleLogin = async (event: React.FormEvent) => {
    setState({
      applicant: {
        firstName: username,
      },
    });
    event.preventDefault();
    const credentials = computeCredentials(username);
    await login(credentials);
  };

  const handleDablLogin = () => {
    window.location.assign(
      `https://login.projectdabl.com/auth/login?ledgerId=${ledgerId}`
    );
  };

  useEffect(() => {
    const url = new URL(window.location.toString());
    const token = url.searchParams.get("token");
    if (token === null) {
      return;
    }
    const party = url.searchParams.get("party");
    if (party === null) {
      throw Error(
        "When 'token' is passed via URL, 'party' must be passed too."
      );
    }
    url.search = "";
    window.history.replaceState(window.history.state, "", url.toString());
    login({ token, party, ledgerId });
  }, [login]);

  const responseGoogle = async (response: any) => {
    setUsername(response.Hs.sd);
  };
  return (
    <LoginWrap>
      <LoginContainer>
        
        <LoginForm>
        <h1>
          {" "}
          De-Loan via <img width="100" src="/daml.svg" alt="daml" />
        </h1>
          {deploymentMode !== DeploymentMode.PROD_DABL ? (
            <>
              {/* FORM_BEGIN */}
              <TextField
                themeType="light"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <AccountCircle />
                    </InputAdornment>
                  ),
                }}
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.currentTarget.value)} // enabled for initial login
                // disabled={username === "" ? true : false}
              />
              <Button
                fullWidth
                onClick={handleLogin}
                disabled={username === "" ? true : false}
              >
                Log in
              </Button>
              {/* FORM_END */}
            </>
          ) : (
            <Button fullWidth onClick={handleDablLogin}>
              Log in with DABL
            </Button>
          )}
          <GoogleLogin
            clientId="591508927128-dredtu67nlvlarp64dstg4nbdjq1c146.apps.googleusercontent.com"
            buttonText="Login via Google"
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            cookiePolicy={"single_host_origin"}
            render={(renderProps) => (
              <Button
                fullWidth
                color="secondary"
                onClick={renderProps.onClick}
                // disabled={true}
              >
                Log in via Google
              </Button>
            )}
            isSignedIn={true}
          />
        </LoginForm>
      </LoginContainer>
    </LoginWrap>
  );
};

export default LoginScreen;

const LoginWrap = styled("div")({
  display: "flex",
  alignItems: "center",
  minHeight: "100vh",
  padding: "50px 0",
  justifyContent: "center",
});

const LoginContainer = styled("div")({
  maxWidth: 500,
  width: "100%",
  textAlign: "center"
});
const LoginForm = styled("div")(({ theme }) => ({
  padding: "22px 24px",
  marginBottom: 12,
  background: "#fff",
  border: `1px solid ${theme.palette.grey[500]}`,
  borderRadius: 6,
  boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
  "& .MuiButton-sizeSmall": {
    fontSize: 14,
  },
  "& button + button": {
    marginTop: 23
  }
}));
