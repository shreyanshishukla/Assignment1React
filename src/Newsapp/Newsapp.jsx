import { useDispatch, useSelector } from "react-redux";
import {
  add,
  clearallnewsforcity,
  deleteallnews,
  deletenews,
  updatenews,
} from "../actions/NewsActions";
import { useState } from "react";
import Button from "@mui/material/Button";
import { NavLink, Outlet } from "react-router-dom";
import TextField from "@mui/material/TextField";
import AddIcon from "@mui/icons-material/Add";
import IconButton from "@mui/material/IconButton";

export default function Newsapp() {
  const newsappdata = useSelector((action) => action.newsapp);
  const dispatcher = useDispatch();
  const addnewsbtn = (event) => {
    event.preventDefault();
    dispatcher(
      add({
        body: {
          news: event.target.news.value,
          description: event.target.description.value,
          showoutlet: false,
        },
        city: event.target.name.value,
      })
    );
  };

  const deletenewsbtn = (city, indx) => {
    const payload = { city, indx };

    dispatcher(deletenews(payload));
  };
  const deletecityallnews = (city) => {
    dispatcher(clearallnewsforcity(city));
  };
  const deleteallnewsbtn = () => {
    dispatcher(deleteallnews());
  };

  const url = "/NewsApp/update/";
  return (
    <div className="newapp">
      <h1>NewsApp</h1>
      <div>
        <form onSubmit={addnewsbtn}>
          <TextField
            id="standard-textarea"
            label="city"
            placeholder="name of city?"
            multiline
            variant="standard"
            name="name"
            required
          />{" "}
          <TextField
            id="standard-textarea"
            label="news"
            placeholder="news?"
            multiline
            variant="standard"
            name="news"
            required
          />
          <TextField
            id="standard-textarea"
            label="description"
            placeholder="description?"
            multiline
            variant="standard"
            required
            name="description"
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
        <br />
        <br />
        <Button
          onClick={deleteallnewsbtn}
          variant="contained"
          className="BTN"
          id="clear-btn"
          disabled={Object.keys(newsappdata).length == 0}
        >
          Clear All
        </Button>
      </div>
      <br />
      <br />

      <div>
        {Object.keys(newsappdata).map((news, indx) => {
          return (
            <NavLink
              exact
              activeClassName="active"
              to={"/NewsApp/" + newsappdata[news].index}
            >
              {news}
            </NavLink>
          );
        })}
        <Outlet context={[deletenewsbtn, newsappdata, deletecityallnews]} />
      </div>
    </div>
  );
}
