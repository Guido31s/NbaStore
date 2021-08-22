import ItemDetail from "../ItemDetail/ItemDetail";
const ItemDetailList = ({ data }) => {
  return (
    <div className="container-fluid row text-center  align-items-center justify-content-between m-auto">
      {data.map((detail) => {
        return <ItemDetail key={detail.id} data={detail} />;
      })}
    </div>
  );
};
export default ItemDetailList;
