import { Outlet, NavLink, useOutletContext, useParams } from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import Button from "@mui/material/Button";

export default () => {
  const [deletenewsbtn, news, clearall] = useOutletContext();
  const { index } = useParams();
  const city = Object.keys(news)[index];

  return (
    <div>
      <br />
      <br />
      {news && news[city] && news[city].data && (
        <Button
          onClick={() => clearall(city)}
          variant="contained"
          className="BTN"
          id="clear-btn"
          disabled={!news[city].data.length}
        >
          Clear City news
        </Button>
      )}
      <br />
      <br />

      {news &&
        news[city] &&
        news[city].data &&
        news[city].data.map((citynews, indx) => {
          return (
            <div>
              News : {citynews.news}
              <br />
              <br />
              <br />
              <NavLink
                exact
                activeClassName="active"
                to={"description/" + indx}
              >
                Description
              </NavLink>
              <br />
              <br />
              <br />
              <IconButton
                aria-label="delete"
                size="large"
                onClick={() => {
                  deletenewsbtn(city, indx);
                }}
                className="BTN"
              >
                <DeleteIcon color="primary" />
              </IconButton>
            </div>
          );
        })}
      <Outlet context={news} />
    </div>
  );
};
