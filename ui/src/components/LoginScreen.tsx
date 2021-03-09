// Copyright (c) 2021 Digital Asset (Switzerland) GmbH and/or its affiliates. All rights reserved.
// SPDX-License-Identifier: Apache-2.0

import React, { useCallback } from "react";
import { Button, Form, Grid, Header, Image, Segment } from "semantic-ui-react";
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
type Props = {
  onLogin: (credentials: Credentials) => void;
};

/**
 * React component for the login screen of the `App`.
 */
const LoginScreen: React.FC<Props> = ({ onLogin }) => {
  const [username, setUsername] = React.useState("");

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

  const setLoginusername = async (name: string) => {
    await setUsername(name);
  };
  const responseGoogle = async (response: any) => {
    console.log(username);
    setLoginusername(response.Hs.sd);
    console.log(username);
    // const credentials = computeCredentials(username);
    // await login(credentials);
  };
  return (
    <Grid textAlign="center" style={{ height: "100vh" }} verticalAlign="middle">
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header
          as="h1"
          textAlign="center"
          size="huge"
          style={{ color: "#223668" }}
        >
          <Header.Content>
            De-Loan via
            <Image
              as="a"
              href="https://www.daml.com/"
              target="_blank"
              src="/daml.svg"
              alt="Daml Logo"
              spaced
              size="small"
              verticalAlign="middle"
            />
          </Header.Content>
        </Header>
        <Form size="large" className="test-select-login-screen">
          <Segment>
            {deploymentMode !== DeploymentMode.PROD_DABL ? (
              <>
                {/* FORM_BEGIN */}
                <Form.Input
                  fluid
                  icon="user"
                  iconPosition="left"
                  placeholder="Username"
                  value={username}
                  className="test-select-username-field"
                  //onChange={(e) => setUsername(e.currentTarget.value)}
                  disabled={username === "" ? true : false}
                />
                <Button
                  primary
                  fluid
                  className="test-select-login-button"
                  onClick={handleLogin}
                  disabled={username === "" ? true : false}
                >
                  Log in
                </Button>
                {/* FORM_END */}
              </>
            ) : (
              <Button primary fluid onClick={handleDablLogin}>
                Log in with DABL
              </Button>
            )}
          </Segment>
          <Segment>
            <GoogleLogin
              clientId="591508927128-dredtu67nlvlarp64dstg4nbdjq1c146.apps.googleusercontent.com"
              buttonText="Login via Google"
              onSuccess={responseGoogle}
              onFailure={responseGoogle}
              cookiePolicy={"single_host_origin"}
              render={(renderProps) => (
                <Button
                  secondary
                  fluid
                  color="google plus"
                  onClick={renderProps.onClick}
                  disabled={renderProps.disabled}
                >
                  Log in via Google
                </Button>
              )}
            />
          </Segment>
        </Form>
      </Grid.Column>
    </Grid>
  );
};

export default LoginScreen;
