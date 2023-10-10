import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { selectCatalog } from "../../selectors";

const Catigories = () => {
  const catalog = useSelector(selectCatalog);

  const uniqueCategories = catalog.reduce(
    (unique, category) => {
      if (
        !unique.some(
          (item) =>
            item.category_name === category.category_name
        )
      ) {
        unique.push(category);
      }
      return unique;
    },
    []
  );
  return (
    <section>
      <ul>
        {uniqueCategories.map((obj) => (
          <li key={obj.category_id}>
            <Link
              to={`/${obj.category_name
                .split(" ")
                .join("-")}`}
            >
              {obj.category_name}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Catigories;
