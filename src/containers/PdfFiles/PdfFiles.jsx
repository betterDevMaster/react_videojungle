import React, { useState, useReducer } from "react";
import { PdfFiles } from "../../dummyData/Documents";
import FileCard from "./CategoriesCard/FileCard";
import PopularSearchList from "../../components/PopularSearch/PopularSearchList";

export default function PdfFilesContainer() {
  return (
    <div className="categories-main">
      <PopularSearchList />
      <div className="categories container d-flex flex-row flex-wrap pt-4">
        {PdfFiles.map((files) => {
          return (
            <div className="col-xl-2 col-md-3 col-sm-4 col-6 mb-4">
              <FileCard data={files} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
