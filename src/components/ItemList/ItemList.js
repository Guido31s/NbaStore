import Item from "../Item/Item";
import { Link } from "react-router-dom";

const ItemList = ({ data }) => {
  return (
    <div className="d-flex row">
      {data.map((data) => {
        return (
          <div className="col-12 col-md-6 col-lg-3" key={data.id}>
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
