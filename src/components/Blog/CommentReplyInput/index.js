import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import DirectionsIcon from "@material-ui/icons/Directions";
import { Button } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "9px 4px",
    display: "flex",
    alignItems: "center",
    marginTop: "1rem",
    marginBottom: (isTheLastOne) => {
        if(isTheLastOne === true){
            return ''
        }else{
            return ''
        }
    },
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    height: 28,
    margin: 4,
  },
}));

export default function CommentReplyInput({
  commentValue,
  handleCommentSave,
  handleCommentChange,
  isTheLastOne,
  id
}) {
  const classes = useStyles(isTheLastOne);

  return (
    <Paper component="form" className={classes.root} variant={'outlined'}>
      <InputBase
        id={id}
        value={commentValue}
        className={classes.input}
        placeholder="의견을 부탁합니다"
        onChange={handleCommentChange}
      />
      <Button
        type={"button"}
        variant="contained"
        size="small"
        style={{ background: "#1e1a1a", color: "#fff" }}
        onClick={handleCommentSave}
        disableElevation
      >
        댓글달기
      </Button>
    </Paper>
  );
}
