import { useState } from "react";
import Button from "@mui/material/Button";

import Card from "@mui/material/Card";
import Icon from "@mui/material/Icon";
import EcomForm from "./EcomForm";
import EcomClearAll from "./EcomClearAll";
import Ecomprod from "./Ecomprod";

export default () => {
  const [Promptdiv, setPromptdiv] = useState(false);

  const [product, setProduct] = useState([
    {
      available: "yes",
      prod: "t-shirt",
      price: "$23",
    },
    {
      available: "no",
      prod: "shamppoo",
      price: "$25",
    },

    {
      available: "yes",
      prod: "book",
      price: "$13",
    },

    {
      available: "yes",
      prod: "pants",
      price: "$43",
    },

    {
      available: "yes",
      prod: "watch",
      price: "$45",
    },
  ]);

  const addProd = (event) => {
    event.preventDefault();
    const newprod = [
      ...product,
      {
        available: event.target.availability.value,
        prod: event.target.prod.value,
        price: event.target.price.value,
      },
    ];
    setProduct(newprod);
  };
  const deleteData = (indx) => {
    setProduct(product.filter((p, i) => i != indx));
  };
  const clearAll = () => {
    {
      setProduct([]);
    }
  };
  return (
    <div className="ecom">
      <EcomForm addProd={addProd} />
      <EcomClearAll clearAll={clearAll} product={product} />
      <Ecomprod deleteData={deleteData} product={product} />
    </div>
  );
};
