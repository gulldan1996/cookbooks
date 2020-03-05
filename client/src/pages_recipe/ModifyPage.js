import React, { useState } from "react";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import { Redirect } from "react-router-dom";
import { useHttp } from "../hooks/http.hook";
import { historyInputHandler, resetInput } from "../redux/actions";
import { getFormUpdate } from "../redux/selectors";
import TextArea from "../Components/TextArea";
import Input from "../Components/Input";
import ButtonView from "../Components/Button/ButtonView";

const ModifyPage = ({ formUpdate, historyInputHandler, resetInput }) => {
  const classes = useStyles();
  const { loading, request } = useHttp();
  const [redirect, setRedirect] = useState(false);

  const { name, description, _id } = formUpdate;

  const modifyRecipe = async () => {
    try {
      console.log("modify");
      await request(`/api/recipe/modify/${_id}`, "PUT", { ...formUpdate });
      setRedirect(true);
      resetInput();
    } catch (e) {}
  };

  if (redirect || name === "") {
    return <Redirect to="/" />;
  }

  return (
    <div className={classes.root}>
      <Input name="name" value={name} handler={historyInputHandler} />
      <TextArea
        name="description"
        value={description}
        handler={historyInputHandler}
      />
      <ButtonView func={modifyRecipe} loading={loading} text="Modify" />
    </div>
  );
};

const mapStateToProps = state => ({
  formUpdate: getFormUpdate(state),
});

const mapDispatchToProps = dispatch => ({
  historyInputHandler: e => dispatch(historyInputHandler(e)),
  resetInput: () => dispatch(resetInput()),
});

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: 50
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(ModifyPage);
