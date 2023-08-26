import EcomDelete from "./EcomDelete";
export default ({ p, deleteData, indx }) => {
  return (
    <div className="ecomdata">
      <div>
        <h2>{p.prod}</h2>
        <h4>Price:{p.price}</h4>
        <p className="text">Currently available :{p.available}</p>
      </div>
      <EcomDelete deleteData={deleteData} indx={indx} />
    </div>
  );
};
