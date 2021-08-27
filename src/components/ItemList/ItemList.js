import Item from "../Item/Item";
import { Link } from "react-router-dom";

const ItemList = ({ data }) => {
  return (
    <div className="container-fluid row text-center justify-content-between m-auto">
      {data.map((data) => {
        return (
          <div key={data.id}>
            <Link to={`/item/${data.id}`}>
              <Item data={data} />
            </Link>
          </div>
        );
      })}
    </div>
  );
};
export default ItemList;
