import { Col, Row } from 'react-bootstrap'
import Main from './Main'
import Sidebar from './Sidebar'

const Home = () => {
  return (
    <div>
    
        <Row className='main-section '>
            <Col className='bg-dark sidebar-container my-4 ' md={3}>
            <Sidebar/>
            </Col>
            <Col className=' main-container my-2 px-3 ' md={9}>
            <Main/>
            </Col>
        </Row>
    </div>
  )
}

export default Home