import React from 'react'
import './newsletter.css';
import { Container,Row,Col } from 'reactstrap';
import maleTourist from '../assets/images/male-tourist.png';


const Newsletter = () => {
  return (
    <>
        <section className='newsletter'>
            <Container>
                <Row>
                    <Col lg='6'>
                        <div className='newsletter_content'>
                            <h2>Subscribe now to get useful travelling information.</h2>
                            <div className='newsletter_input'>
                                <input type='email'placeholder='Enter your email id'/>
                                <button className='btn newsletter_btn'>Subscribe</button>
                            </div>
                            <p>The board of the Federation of Associations in Indian Tourism & Hospitality (FAITH) — an umbrella body representing the hospitality and travel industry — has appealed to the government to withdraw the increase in the tax collection at source (TCS) on overseas tour packages announced in the Finance Bill 2023.

“Such a move has put domestic tour operators at a disadvantage as the bookings are moving to foreign tour operators,” the board said</p>
                        </div>
                    </Col>
                    <Col lg='6'>
                        <div className='newsletter_img'>
                            <img src={maleTourist} alt=''/>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    </>
  )
}

export default Newsletter