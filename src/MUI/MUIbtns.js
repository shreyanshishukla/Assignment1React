import Button from "@mui/material/Button";

export default ({ getData, clearAll }) => {
  return (
    <div>
      <br />
      <br />
      <Button onClick={getData} variant="contained" className="BTN">
        Get-Data
      </Button>
      <br />
      <br />

      <Button onClick={clearAll} variant="contained" className="BTN">
        Clear All
      </Button>
      <br />
      <br />
    </div>
  );
};
