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

  const createHandler = async () => {
    try {
      await request("/api/recipe/create", "POST", { ...form });
      setRedirect(true);
      resetInput();
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
        value={form.name}
        handler={inputHandler}
      />
      <TextArea
        handler={inputHandler}
        name="description"
        value={form.description}
        placeholder="Write text about your recipe"
      />
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
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(CreatePage);
