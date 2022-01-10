import React, { useState, useEffect } from 'react'
import { Modal, Button } from 'react-bootstrap'

function Editdata(props) {
    const [singledata, setsingledata] = useState([])
    useEffect(() => {
        setsingledata({ ...props.data});
      }, [props.data]);
    let handleClose=()=>{
        props.closeModal();
    }
    let changedata=(event)=>{
        setsingledata({
            ...singledata,
            [event.target.name] : [event.target.value]
        })
    }
    let sendData=()=>{
        props.getData(singledata)
        handleClose()
    }
    return (
        <div>
            <Modal show={props.showmodal} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Modal title</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <label htmlFor="name">Certificate Name:</label>
                <input type="text" className="form-control" placeholder='enter certificate name' name='name' value={singledata.name} onChange={changedata} />
                <label htmlFor="from">Certificate from:</label>
                <input type="text" className="form-control" placeholder='certificate from' name='from' value={singledata.from} onChange={changedata} />
                <label htmlFor="completion">Certificate year:</label>
                <input type="text" className="form-control" placeholder='year of completion' name='completion' value={singledata.completion} onChange={changedata} />
            </Modal.Body>

            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>Close</Button>
                <Button variant="primary" onClick={sendData}>Save changes</Button>
            </Modal.Footer>
        </Modal>
        </div>
    )
}

export default Editdata
