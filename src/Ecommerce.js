import { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import Card from "@mui/material/Card";
import Icon from "@mui/material/Icon";

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
      <div className="ecom-form">
        <br />
        <form onSubmit={addProd}>
          <TextField
            id="standard-textarea"
            label="Product"
            placeholder="name of product?"
            multiline
            variant="standard"
            name="prod"
            required
          />{" "}
          <TextField
            id="standard-textarea"
            label="Price"
            placeholder="price?"
            multiline
            variant="standard"
            name="price"
            required
          />
          <TextField
            id="standard-textarea"
            label="Availaible"
            placeholder="Availaible?"
            multiline
            variant="standard"
            required
            name="availability"
          />
          <IconButton
            aria-label="delete"
            size="large"
            className="BTN"
            type="submit"
          >
            <AddIcon color="primary" />
          </IconButton>
        </form>
      </div>
      <br />

      <Button
        onClick={clearAll}
        variant="contained"
        className="BTN"
        id="clear-btn"
        disabled={product.length == 0}
      >
        Clear All
      </Button>
      <br />
      <div className="ecomdatalist">
        {product.map((p, indx) => {
          return (
            <div className="ecomdata">
              <div>
                <h2>{p.prod}</h2>
                <h4>Price:{p.price}</h4>
                <p className="text">Currently available :{p.available}</p>
              </div>

              <IconButton
                aria-label="delete"
                size="large"
                onClick={() => {
                  deleteData(indx);
                }}
                className="BTN"
              >
                <DeleteIcon color="primary" />
              </IconButton>
            </div>
          );
        })}
      </div>
    </div>
  );
};
