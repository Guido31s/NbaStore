import Item from "../Item/Item";
import { Link } from "react-router-dom";

const ItemList = ({ data }) => {
  return (
    <div>
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
