import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { useHttp } from "../hooks/http.hook";
import { inputHandler, resetInput } from "../redux/actions";
import { getFormState } from "../redux/selectors";
import Input from "../Components/Input";
import TextArea from "../Components/TextArea";
import ButtonView from "../Components/Button/ButtonView";

const CreatePage = ({ inputHandler, form, resetInput }) => {
  const classes = useStyles();
  const { loading, request } = useHttp();
  const [redirect, setRedirect] = useState(false);
  const [messageName, setMessageName] = useState('');
  const [messageDesc, setMessageDesc] = useState('');
  const { name, description } = form;

  const createHandler = async () => {
    try {
      if (name === '') {
        setMessageName("Fill in the field with the name")
      } else {
        setMessageName('')
      }
      if (description === '') {
        setMessageDesc("Fill in the description field")
      } else {
        setMessageDesc('')
      }
      if (name !== '' && description !== '') {
        await request("/api/recipe/create", "POST", { ...form });
        setRedirect(true);
        resetInput();
      }
    } catch (e) {}
  };

  if (redirect) {
    return <Redirect to="/" />;
  }

  return (
    <div className={classes.root}>
      <Input
        placeholder="Name your recipe"
        name="name"
        value={name}
        handler={inputHandler}
      />
      <div className={classes.error}>{messageName}</div>
      <TextArea
        handler={inputHandler}
        name="description"
        value={description}
        placeholder="Write text about your recipe"
      />
      <div className={classes.error}>{messageDesc}</div>
      <ButtonView func={createHandler} loading={loading} text="Create" />
    </div>
  );
};

const mapStateToProps = state => ({
  form: getFormState(state)
});

const mapDispatchToProps = dispatch => ({
  inputHandler: e => dispatch(inputHandler(e)),
  resetInput: () => dispatch(resetInput())
});

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: 50
  },
  error: {
    color: 'red',
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(CreatePage);
