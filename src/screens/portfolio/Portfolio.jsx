import React, { useState } from 'react';
import './portfolio.css'
import portfolioData from '../../helpers/portfolioData'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Card from 'react-bootstrap/Card'
import Image from 'react-bootstrap/Image'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'

function Portfolio() {
    const [modalShow, setModalShow] = useState(false);
    const [tempData, setTempData] = useState({});

    function createModal(data) {
        return (
            <Modal style={{ fontSize: '1rem'}}
                show={modalShow}
                onHide={() => setModalShow(false)}
                size='lg'
                arial-labelledby='contained-modal-title-vcenter'
                centered
            >
                <Modal.Header>
                    <Modal.Title style={{ fontWeight: 'bold' }} id='contained-modal-title-vcenter'>
                        {data.title}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>{data.summary}</p>
                    <Image src={data.Image} style={{ width: '200px' }} />
                </Modal.Body>
                <a id='portfolio_modal_link' href={data.link} target='_blank' rel='noreferrer'>Go to site</a>
                <modal-Footer>
                    <p style={{ padding:'1rem'}}>{data.tech}</p>
                    <Button style={{ margin:'1rem'}} onClick={()=> setModalShow(false)}>Close</Button>
                </modal-Footer>
            </Modal>
        )
    }

    const mapped = portfolioData.map((e, idx) => {
        return (
            <Card key={idx} id='portfolio_card_container' >
                <Image className='portfolio_image'
                    onClick={() => {
                        setTempData({
                            Image: e.image,
                            link: e.link,
                            title: e.title,
                            summary: e.summary,
                            tech: e.tech
                        })
                        setModalShow(true)
                    }}
                    src={e.image} />
                
                {createModal(tempData)}
            </Card>
        )
    })

    return (
        <div className='portfolio_main-container' id='portfolio'>
            <h1 className='portfolio_text'>portfolio.</h1>
            <Container fluid='lg' style={{ padding: '2rem 0' }}>
                <Row>
                    {mapped}
                </Row>

            </Container>
        </div>
    )
}

export default Portfolio
