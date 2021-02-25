import React, { useState, useEffect } from "react";
import { Button, Tab } from "@material-ui/core";
import "./categoriesbar.scss";
export default function CategoriesBar(props) {
  const categoriesTabs = [
    "All Categories",
    "Most Popular",
    "Trending",
    "Most Recent",
    "A - Z",
  ];
  const [currentTab, setTab] = useState(0);
  const { categories } = props;
  var filteredCategories = [];
  switch (currentTab) {
    case 0:
      filteredCategories = categories;
      break;
    case 1:
      filteredCategories = categories.filter((category) => {
        return category.isPopular;
      });
      break;
    case 2:
      filteredCategories = categories.filter((category) => {
        return category.isTrending;
      });
      break;
    case 3:
      filteredCategories = categories.sort(function (a, b) {
        return a.uploadedOn - b.uploadedOn;
      });
      break;
    case 4:
      filteredCategories = categories.sort(function (a, b) {
        var name1 = a.name.toUpperCase();
        var name2 = b.name.toUpperCase();
        return name1 < name2 ? -1 : name1 > name2 ? 1 : 0;
      });
      console.log(filteredCategories);
      break;
  }
  useEffect(() => {
    console.log(currentTab);
    props.handlefilteredCategories(filteredCategories);
  }, [currentTab]);
  return (
    <div className="categories-bar">
      <div className="container pt-3 pb-3">
        <div>
          {categoriesTabs.map((button, index) => {
            return (
              <Button
                onClick={async () => {
                  await setTab(index);
                }}
                className="pl-0 mr-2"
              >
                {button}
              </Button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
