import { List, ListItem } from "@material-ui/core";
import React from "react";
import { useAppState } from "./App";
import { Checkbox } from "./uiComponents";

type Props = {};
export const Documents: React.FC<Props> = (props) => {
  
  //@ts-ignore
  const [state, setState] = useAppState();

  console.log("state",state.application.docs)
  return (
    <List>
      <ListItem>
      <label>
        <Checkbox
          color="primary"
        />
        Proof of age and identity
      </label>
      </ListItem>
      <ListItem>
      <label>
        <Checkbox
          color="primary"
          onChange={(e) => {
            console.log("e", e.target.checked);
          }}
        />
        Proof of residence
      </label>
      </ListItem>
      <ListItem>
      <label>
        <Checkbox
          color="primary"
          onChange={(e) => {
            console.log("e", e.target.checked);
          }}
        />
        PAN Card
      </label>
      </ListItem>
      <ListItem>
      <label>
        <Checkbox
          color="primary"
          onChange={(e) => {
            console.log("e", e.target.checked);
          }}
        />
        Proof of Income
      </label>
      </ListItem>
     
    
     
      </List>
  );
};
