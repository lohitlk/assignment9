import React, { useState } from 'react'
import { Modal, Button } from 'react-bootstrap'

function Adddata(props) {
    const [cerData, setcerData] = useState({
        name: "",
        from: "",
        completion: ""
    })

    let changedata = (event) => {
        setcerData({
            ...cerData,
            [event.target.name]: [event.target.value]
        })
    }
    let handleClose = () => {
        props.closeModal();
    }
    let sendData = () => {
        props.getData(cerData)
        setcerData({
            name: "",
            from: "",
            completion: ""
        })
        handleClose()
    }
    return (

        <Modal show={props.showmodal} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Modal title</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <label htmlFor="name">Certificate Name:</label>
                <input type="text" className="form-control" placeholder='enter certificate name' name='name' value={cerData.name} onChange={changedata} />
                <label htmlFor="from">Certificate from:</label>
                <input type="text" className="form-control" placeholder='certificate from' name='from' value={cerData.from} onChange={changedata} />
                <label htmlFor="completion">Certificate year:</label>
                <input type="text" className="form-control" placeholder='year of completion' name='completion' value={cerData.completion} onChange={changedata} />
            </Modal.Body>

            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>Close</Button>
                <Button variant="primary" onClick={sendData}>Save changes</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default Adddata
