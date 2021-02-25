import React from "react";
import "./paginationBar.scss";
import Button from "@material-ui/core/Button";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
export default function Paginationbar() {
  /* This is our pagination bar, we will handle content of buttons when we will add functionality */
  const buttons = [];
  Array.from({ length: 9 }, (_, i) => {
    if (i != 0 && i != 6 && i != 8 && i != 7) {
      console.log(i);
      buttons.push(<Button>{i}</Button>);
    } else if (i == 0) {
      buttons.push(
        <Button>
          <ArrowBackIcon />
        </Button>
      );
    } else if (i == 6) {
      buttons.push(<Button>...</Button>);
    } else if (i == 7) {
      buttons.push(<Button>10</Button>);
    } else {
      buttons.push(
        <Button>
          <ArrowForwardIcon />
        </Button>
      );
    }
  });
  const mobileButtons = [];
  Array.from({ length: 4 }, (_, i) => {
    if (i != 0 && i != 2 && i != 3) {
      console.log(i);
      mobileButtons.push(<Button>{i}</Button>);
    } else if (i == 0) {
      mobileButtons.push(
        <Button>
          <ArrowBackIcon />
        </Button>
      );
    } else if (i == 2) {
      mobileButtons.push(<Button>Skip 5 Pages</Button>);
    } else {
      mobileButtons.push(
        <Button>
          <ArrowForwardIcon />
        </Button>
      );
    }
  });
  console.log(buttons);
  return (
    <div id="paginationBar">
      <div className="pagination-main">
        <div className=" pagination d-flex flex-row justify-content-around flex-wrap pl-3">
          <div className="pagination-bar-main">
            {buttons.map((Button) => {
              return Button;
            })}
          </div>
        </div>
        <div className="  pagination-mobile d-flex flex-row justify-content-between flex-wrap pl-3">
          <div className="pagination-bar-main">
            {mobileButtons.map((Button) => {
              return Button;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
