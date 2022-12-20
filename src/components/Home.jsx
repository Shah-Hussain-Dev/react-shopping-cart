import React from 'react'
import { Col, Row } from 'react-bootstrap'
import Header from './Header'
import Main from './Main'
import Sidebar from './Sidebar'

const Home = () => {
  return (
    <div>
        <Header/>
        <Row className='main-section'>
            <Col className='bg-dark sidebar-container my-2 ' md={2}>
            <Sidebar/>
            </Col>
            <Col className=' main-container my-2 px-3 ' md={10}>
            <Main/>
            </Col>
        </Row>
    </div>
  )
}

export default Home