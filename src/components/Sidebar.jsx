import React from 'react'
import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
const Sidebar = () => {
    return (
        <div className='sidebar text-white px-2 py-3'>
            <h4>Filter Products</h4>
            <Form>

                <div className="mb-4 mt-3">
                    <Form.Check
                        value="Ascending Order"
                        type="radio"
                        aria-label="radio 1"
                        label="Design"
                       
                    />
                   
                </div>
                <div className="mb-4">
                <Form.Check
                        value="Descending Order"
                        type="radio"
                        aria-label="radio 2"
                        label="Descending Order"
                    />
                </div>
                <div className="mb-4">

                    <Form.Check
                        type="switch"
                        id="custom-switch-1"
                        label="Include Out of Stock"
                    />
                </div>
                <div className="mb-4">

                    <Form.Check
                        type="switch"
                        id="custom-switch-2"
                        label="Fast Delivery Only"
                    />
                </div>
                <div className="mb-4">
                    {/* Rating Component */}
                </div>
                <div className="d-grid gap-2">
                    <Button variant="primary" size="md">
                        Clear Filter
                    </Button>

                </div>



            </Form>
        </div>
    )
}

export default Sidebar