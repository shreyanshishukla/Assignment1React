import Button from "@mui/material/Button";
export default ({ clearAll, product }) => {
  return (
    <>
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
    </>
  );
};
