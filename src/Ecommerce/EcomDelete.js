import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
export default ({ deleteData, indx }) => {
  return (
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
  );
};
