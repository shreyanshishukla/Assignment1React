export const addTodo = (payload) => ({
  type: "addTodo",
  payload,
});
export const delTodo = (payload) => ({ type: "delTodo", payload });
export const deleteAll = () => ({ type: "delAll" });
