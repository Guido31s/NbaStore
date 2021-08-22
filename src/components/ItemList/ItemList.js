import Item from "../Item/Item";
const ItemList = ({ data }) => {
  return (
    <div className="container-fluid row text-center  align-items-center justify-content-between m-auto">
      {data.map((data) => {
        return <Item key={data.id} data={data} />;
      })}
    </div>
  );
};
export default ItemList;
