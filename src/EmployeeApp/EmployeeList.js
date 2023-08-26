import EmployeeData from "./EmployeeData";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";

export default ({ delEmp, empData }) => {
  return (
    // className="todo"
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        alignItems: "center",
        justifyContent: "space-around",
        marginBottom: "200px",
        marginTop: "50px",
      }}
    >
      {empData.map((t, indx) => (
        <Paper elevation={5} sx={{ margin: "10px" }}>
          <EmployeeData delEmp={delEmp} t={t} indx={indx} />
        </Paper>
      ))}
    </Box>
  );
};
