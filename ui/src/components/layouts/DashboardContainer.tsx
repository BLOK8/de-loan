/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { styled } from "@material-ui/core";
import { Sidebar } from "../sidebar";
import { SidebarContext } from "./UseSidebarContext";
import DashboardBg from "../../images/BLVD-background.jpg";
import { useParty } from '@daml/react';
import { LoginHeader } from "./LoginHeader";

interface Props {
  children: React.ReactNode;
  onLogout: () => void;
}



export const DashboardContainer: React.FC<Props> = ({
  children,
  onLogout
}) => {
  const [sideMenuOpen, setSideMenuOpen] = React.useState(true);

  return (
    <SidebarContext.Provider
      value={{
        open: sideMenuOpen,
        setSidebarExpand: () => setSideMenuOpen(!sideMenuOpen),
      }}
    >
      <LoginHeader onLogout={onLogout} />
      <MainWrap
        className={`side-bar sidebar-${sideMenuOpen}`}
      >
         <Sidebar />
        <Main>
          <FullHeight>{children}</FullHeight>
        </Main>
      </MainWrap>
    </SidebarContext.Provider>
  );
};

const MainWrap = styled("div")({
  "&:not(.side-bar) > div": {
    height: "auto",
    overflow: "visible",
    paddingTop: 0,
    background: "transparent",
  },
  "&.side-bar": {
    transition: "all .3s ease-in-out",
    paddingLeft: 256,
    background: `url(${DashboardBg})`,
    backgroundSize: "100% 100%",
    backgroundPosition: "top left",
    "&.sidebar-false": {
      paddingLeft: 68,
      background: "transparent",
    },
  },
});
const Main = styled("div")({
  padding: "0px 40px 20px",
  width: "100%",
  background: "#fff",
  height: "calc(100vh - 56px)",
  overflow: "auto",
});
const FullHeight = styled("div")({
  minHeight: "calc(100vh - 240px)",
});
