import React, { useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import useMenuCard from "../../hooks/useMenuCard";

const ItemPage = () => {
  const { category, id } = useParams();
  const menu = useMenuCard();

  if (!menu) return;

  const items = menu.filter((item) => item.id === category);

  const products = items[0].children?.filter((item) => item.id === id);
  const product = products[0];

  // console.log(category , id)
  // console.log(items)
  // console.log("product====>", product);
  return (
    <div className="ml-24">
      <p className="mt-14 font-semibold text-slate-400">
        Menu / <span className="text-slate-600">{product.name}</span>
      </p>
      <h1 className="text-4xl mt-6 mb-12 font-bold text-[rgba(0,0,0,.9)]">
        {product.name}
      </h1>
      {product?.children.map((pro) => (
        <div key={pro.id} className="border-b-[1px] w-4/5">
          <h1 className="text-2xl text-[rgba(0,0,0,.9)] font-bold mt-6">
            {pro.name}
          </h1>
          <div className="grid grid-cols-4 pb-10">
            {pro.products.map((prod) => (
              <div
                key={prod.productNumber}
                className="m-4 flex flex-col items-center justify-start"
              >
                <img
                  src={prod?.assets?.masterImage?.uri}
                  alt=""
                  className="w-32 rounded-full mb-4"
                />
                <p className="text-md text-center font-semibold text-[rgba(0,0,0,.9)]">
                  {prod.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      ))}

      <div className="grid grid-cols-4 w-4/5">
        {product?.products.map((prod) => (
          <div
            key={prod.productNumber}
            className="m-4 flex flex-col items-center justify-start"
          >
            <img
              src={prod?.assets?.masterImage?.uri}
              alt="photo"
              className="w-32 rounded-full mb-4"
            />
            <p className="text-md text-center font-semibold text-[rgba(0,0,0,.9)]">
              {prod.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ItemPage;
