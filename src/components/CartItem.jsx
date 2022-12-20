import { Badge } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {BsFillCartPlusFill} from "react-icons/bs"

function CartItem({data}) {
  return (
    <Card style={{ width: '18rem' }} className="my-3 box-shadow card-item">
      <Card.Img variant="top" src={data.thumbnail} className="pt-2 rounded" />
      <Card.Body>
        <Card.Title>{data.title}</Card.Title>
        <Card.Text>
         {data.description}
        </Card.Text>
        <Card.Text className='d-flex  align-items-center justify-content-between'>
        <span className=''> <del className='text-danger me-2'>₹1999</del><span className='text-success'>₹{data.price}</span></span>
        <Button variant="primary ms">Add <BsFillCartPlusFill size={20}  className="pb-1"/></Button>
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default CartItem;