import React from "react";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom/dist";
import { selectCatalog } from "../../selectors";

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
      <div>
        <button> {"<"} </button>
        <ul>
          {uniqueBrand.map((obj) => (
            <li key={obj.manufacturer_id}>
              <button>
                <img
                  src="#"
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
