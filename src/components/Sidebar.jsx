import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { CartState } from "../context/Context";
import Rating from "./Rating";

const Sidebar = () => {
  const {
    productState: { sort, byStock, byRating },
    productDispatch,
  } = CartState();
  return (
    <div className="sidebar text-white px-2 py-3 ">
      <h4 className="title">Filter Products</h4>
      <Form>
        <div className="mb-4 mt-3">
          <Form.Check
            className="title"
            inline
            type="radio"
            name="group1"
            id={`inline-1`}
            label="Ascending"
            onChange={() =>
              productDispatch({
                type: "FILTER_BY_PRICE",
                payload: "lowToHigh",
              })
            }
            checked={sort === "lowToHigh" ? true : false}
          />
        </div>
        <div className="mb-4">
          <Form.Check
            className="title"
            type="radio"
            name="group1"
            id={`inline-2`}
            label="Descending"
            onChange={() =>
              productDispatch({
                type: "FILTER_BY_PRICE",
                payload: "highToLow",
              })
            }
            checked={sort === "highToLow" ? true : false}
          />
        </div>
        <div className="mb-4">
          <Form.Check
            className="title"
            type="switch"
            name="group1"
            id={`inline-3`}
            label="Include Out of Stock"
            onChange={() =>
              productDispatch({
                type: "FILTER_BY_STOCK",
                payload: "highToLow",
              })
            }
            checked={byStock}
          />
        </div>
        <div className="mb-4">
          <span className="title">Rating </span>
          <Rating
            rating={byRating}
            handleClick={(i) =>
              productDispatch({
                type: "FILTER_BY_RATING",
                payload: i + 1,
              })
            }
            style={{ color: "white" }}
          />
        </div>
        <div className="mb-4">{/* Rating Component */}</div>
        <div className="d-grid gap-2">
          <Button
            variant="primary"
            size="md"
            onClick={() =>
              productDispatch({
                type: "CLEAR_FILTER",
              })
            }
          >
            Clear Filter
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default Sidebar;
