import { useOutletContext, useParams } from "react-router-dom";

export default () => {
  const description = useOutletContext();
  const { index, id } = useParams();
  const v = description[Object.keys(description)[index]].data;
  return (
    <div className="description">{id < v.length && v[id].description}</div>
  );
};
