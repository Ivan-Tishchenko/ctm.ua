import React from "react";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom/dist";
import { selectCatalog } from "../../selectors";
// import "./_category.scss";

import apple from "../../assets/image/apple.png";

const Category = () => {
  const params = useParams();

  const catalog = useSelector(selectCatalog);

  const uniqueBrand = catalog.reduce((unique, obj) => {
    if (
      !unique.some(
        (item) =>
          item.manufacturer_id === obj.manufacturer_id
      )
    ) {
      unique.push(obj);
    }
    return unique;
  }, []);

  return (
    <section>
      <div>
        <Link to={"/"} className="categoryNavigationLink">
          Главная
        </Link>
        <p className="categoryNavigationLink">/</p>
        <Link
          to={`/category/${params.categoryName}`}
          className="categoryNavigationLink"
        >
          {params.categoryName.split("-").join(" ")}
        </Link>
      </div>
      <h1>{params.categoryName.split("-").join(" ")}</h1>
      <div
        style={{ display: "flex", flexDirection: "row" }}
      >
        <button> {"<"} </button>
        <ul
          style={{ display: "flex", flexDirection: "row" }}
        >
          {uniqueBrand.map((obj) => (
            <li
              key={obj.manufacturer_id}
              style={{
                width: "208px",
              }}
            >
              <button
                style={{
                  width: "208px",
                }}
              >
                <img
                  width={208}
                  src={apple}
                  alt={`${obj.manufacturer_id}`}
                />
              </button>
            </li>
          ))}
        </ul>
        <button> {">"} </button>
      </div>

      <div>
        <div className="filter">any filters</div>
        <div>products</div>
      </div>
    </section>
  );
};

export default Category;
