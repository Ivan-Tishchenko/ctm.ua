import React from "react";
import ProductСategory from "./ProductСategory";
import computerImage from "../../assets/image/computer.png";

export default function AdditionalCatalogs() {
  return (
    <>
      <ProductСategory link="" title="Тут уже другое" image={computerImage} />
      <ProductСategory link="" title="Тут уже другое" image={computerImage} />
      <ProductСategory link="" title="Тут уже другое" image={computerImage} />
    </>
  );
}
