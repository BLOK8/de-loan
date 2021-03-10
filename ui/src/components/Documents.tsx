import { List, ListItem } from "@material-ui/core";
import React from "react";
import { useAppState } from "./App";
import { Checkbox, Button } from "./uiComponents";
import { useSnackbar } from "notistack";
import { useHistory } from "react-router";

type Props = {};
export const Documents: React.FC<Props> = (props) => {
  
  const history = useHistory();
  //@ts-ignore
  const [state, setState] = useAppState();
  const { enqueueSnackbar } = useSnackbar();
  
  const [formState, setFormState] = React.useState({
    proofOfAgeAndIdentity: false,
    proofOfResidence: false,
    panCard: false,
    proofOfIncome: false
  })
  const handleDocumentSubmit =()=>{
    setState({
      ...state, application: formState
    });
    enqueueSnackbar("Details updated successfully",{ variant: "success" });
    history.push("/contract-info");
  }
  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const {name, value} = event.target;
    
    setFormState({
      ...formState,
      [name]: value
    })
    
  }
console.log("DOC STATE", formState);
  return (
    <>
    <h2>Documents</h2>
    <List>
      <ListItem>
      <label>
        <Checkbox
          color="secondary"
        />
        Proof of age and identity
      </label>
      </ListItem>
      <ListItem>
      <label>
        <Checkbox
          color="secondary"
          onChange={onChangeHandler}
        />
        Proof of residence
      </label>
      </ListItem>
      <ListItem>
      <label>
        <Checkbox
          color="secondary"
          onChange={onChangeHandler}
        />
        PAN Card
      </label>
      </ListItem>
      <ListItem>
      <label>
        <Checkbox
          color="secondary"
          onChange={onChangeHandler}
        />
        Proof of Income
      </label>
      </ListItem>
      </List>
      <Button onClick={handleDocumentSubmit}>Next</Button>
      </>
  );
};
