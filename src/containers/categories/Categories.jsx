import React, { useState, useReducer } from "react";
import CategoriesBar from "./CategoriesBar/categoriesBar";
import CategoryCard from "./CategoriesCard/categoryCard";
import categories from "../../dummyData/categories";
import PopularSearchList from "../../components/PopularSearch/PopularSearchList";
import { Link } from "react-router-dom";

export default function Categories() {
  const [filteredcategories, setCategories] = useState([]);
  const [ignored, forceUpdate] = useReducer((x) => x + 1, 0);
  const handlefilteredCategories = async (categories) => {
    setCategories(categories);
    forceUpdate();
  };

  return (
    <div className="categories-main">
      <PopularSearchList />
      <CategoriesBar
        categories={categories}
        handlefilteredCategories={handlefilteredCategories.bind(this)}
      />

      <div className="categories container d-flex flex-row flex-wrap pt-4">
        {filteredcategories.map((category) => {
          return (
            <div className="col-xl-3 col-md-3 col-sm-4 col-6 mb-4">
              <Link
                style={{ textDecoration: "none", color: "black" }}
                to="/file-details"
              >
                <CategoryCard data={category} />
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}
