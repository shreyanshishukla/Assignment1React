export const add = (payload) => ({ type: "addnews", payload });
export const deletenews = (payload) => ({ type: "deletenews", payload });
export const deleteallnews = () => ({ type: "clearallnews" });
export const updatenews = (payload) => ({ type: "updatenews", payload });
export const clearallnewsforcity = (payload) => ({
  type: "clearnewsforcity",
  payload,
});
