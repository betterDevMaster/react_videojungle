import React, { useEffect } from "react";
import "./categorySelection.scss";
import categories from "../../../dummyData/categories";
import { makeStyles } from "@material-ui/core/styles";
import FormLabel from "@material-ui/core/FormLabel";
import FormControl from "@material-ui/core/FormControl";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormHelperText from "@material-ui/core/FormHelperText";
import Checkbox from "@material-ui/core/Checkbox";
import Mobilecategory from "../MobileCategory/mobileCategory";
import { Grid } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },

  formControl: {
    margin: theme.spacing(3),
  },
}));

export default function CategorySelection({
  options,
  onChange,
  selecteds,
  maxSelect,
}) {
  const classes = useStyles();
  let isError = selecteds.length > maxSelect
  return (
    <div className="container">
      <div className="desktop-categories">
        <FormControl
          required
          error={isError}
          component="fieldset"
          className={classes.formControl}
        >
          <FormLabel component="legend">
            Category (You can select up to 6 categories)
          </FormLabel>
          <FormGroup>
            <Grid container>
              {options.map((category) => {
                return (
                  <Grid item xs={12} sm={12} md={6} lg={4} key={category.id}>
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={selecteds.includes(category.id)}
                          onChange={(event) => {
                            onChange(event);
                          }}
                          name={category.id}
                        />
                      }
                      label={category.name}
                    />
                  </Grid>
                );
              })}
            </Grid>
          </FormGroup>
          {isError && (
            <FormHelperText style={{ fontSize: "14px" }}>
              You can select upto 6
            </FormHelperText>
          )}
        </FormControl>
      </div>
      <div className="mobile-categories">
        {" "}
        {/* <Mobilecategory names={CategoriesNames} /> */}
      </div>
    </div>
  );
  // const [state, setState] = React.useState({
  //   stateObject: {},
  // });

  // const error =
  //   Object.values(state.stateObject).filter((data) => {
  //     return data;
  //   }).length > 6;

  // const handleChange = (event) => {
  //   for (let prop in state.stateObject) {
  //     if (prop === event.target.name && (!error || !event.target.checked)) {
  //       state.stateObject[prop] = !state.stateObject[prop];
  //       setState({ ...state, stateObject: state.stateObject });
  //     }
  //   }
  // };

  // let CategoriesNames = categories.map(({ name }) => name);
  // const stateObject = {};
  // CategoriesNames.map((category) => {
  //   stateObject[category] = false;
  // });

  // useEffect(() => {
  //   setState({ ...state, stateObject });
  // }, []);

  // return (
  //   <div className="container">
  //     <div className="desktop-categories">
  //       <FormControl
  //         required
  //         error={error}
  //         component="fieldset"
  //         className={classes.formControl}
  //       >
  //         <FormLabel component="legend">
  //           Category (You can select up to 6 categories)
  //         </FormLabel>
  //         <FormGroup>
  //           {CategoriesNames.map((category, index) => {
  //             return (
  //               <div
  //                 key={index}
  //                 className="col-xl-2 col-md-6 p-0 d-flex align-items-baseline"
  //               >
  //                 <FormControlLabel
  //                   control={
  //                     <Checkbox
  //                       checked={state.stateObject[category]}
  //                       onChange={(event) => {
  //                         handleChange(event);
  //                       }}
  //                       name={category}
  //                     />
  //                   }
  //                   label={category}
  //                 />
  //               </div>
  //             );
  //           })}
  //         </FormGroup>
  //         {error && <FormHelperText style={{fontSize:"14px"}}>You can select upto 6</FormHelperText>}
  //       </FormControl>
  //     </div>
  //     <div className="mobile-categories">
  //       {" "}
  //       <Mobilecategory names={CategoriesNames} />
  //     </div>
  //   </div>
  // );
}
