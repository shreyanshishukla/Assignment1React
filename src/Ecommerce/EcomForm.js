import TextField from "@mui/material/TextField";
import AddIcon from "@mui/icons-material/Add";
import IconButton from "@mui/material/IconButton";
export default ({ addProd }) => {
  return (
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
  );
};
