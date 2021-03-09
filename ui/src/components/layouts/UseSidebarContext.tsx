import React from "react";

interface SidebarContextType {
  setSidebarExpand: () => void;
  open: boolean;
}

export const SidebarContext = React.createContext<
  SidebarContextType | undefined
>(undefined);

// update SidebarContext function
export const useSidebarContext = () => React.useContext(SidebarContext);
