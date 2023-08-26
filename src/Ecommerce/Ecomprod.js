import Ecomproddata from "./Ecomproddata";

export default ({ product, deleteData }) => {
  return (
    <div className="ecomdatalist">
      {product.map((p, indx) => {
        return <Ecomproddata p={p} indx={indx} deleteData={deleteData} />;
      })}
    </div>
  );
};
