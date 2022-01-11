import React, { useState } from 'react'
import { Modal, Button } from 'react-bootstrap'
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as yup from 'yup';

function Adddata(props) {
    const [nameerror, setnameerror] = useState("")
    const [dateerror, setdateerror] = useState("")
    const [fromerror, setfromerror] = useState("")
    let initialValues = {
        name: "",
        from: "",
        completion: ""
    }
    let validationSchema = yup.object().shape({
        name: yup.string().required("please enter certificate name"),
        from: yup.string().required("required"),
        completion: yup.number().min(1965).max(2022).required("enter year of completion")
    })
    let onSubmit = (values, props) => {
        console.log(values)
        props.resetForm();

    }
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
    let username =()=>{
        let name = document.getElementById("username").value;
        console.log(name)
        if(name){
            return true
        }
        else{
            setnameerror("name is required")
            return false
        }
    }
    let date =()=>{
        let name = document.getElementById("date").value;
        if(name){
            if(name>1999 && name<2022){
                return true
            }
            else{
                setdateerror("date must between 1999 and 2022")
                return false
            }
        }
        else{
            setdateerror("date is required")
            return false
        }
        
    }
    let from =()=>{
        let name = document.getElementById("from").value;
        console.log(name)
        if(name){
            return true
        }
        else{
            setnameerror("from is required")
            return false
        }
    }
    let sendData = () => {
        let name = username()
        console.log(name)
        if(username() && from() && date()){
            props.getData(cerData)
            setcerData({
                name: "",
                from: "",
                completion: ""
            })
            handleClose()
        }
        
    }
    return (
        <Formik
            initialValues={cerData}
            onSubmit={onSubmit}
            validationSchema={validationSchema}
        >
            <Form>
                <Modal show={props.showmodal} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Modal title</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        <label htmlFor="name">Certificate Name:</label>
                        <Field type="text" id="username" className="form-control" placeholder='enter certificate name' name='name' value={cerData.name} onChange={changedata} />
                        <p style={{ color: "red", float: "left" }}>{/*<ErrorMessage name="name" />*/}{nameerror}</p><br/>
                        <label htmlFor="from">Certificate from:</label>
                        <Field type="text" id="from" className="form-control" placeholder='certificate from' name='from' value={cerData.from} onChange={changedata} />
                        <p style={{ color: "red", float: "left" }}>{/*<ErrorMessage name="from" />*/}{fromerror}</p><br/>
                        <label htmlFor="completion">Certificate year:</label>
                        <Field type="number" id="date" className="form-control" placeholder='year of completion' name='completion' value={cerData.completion} onChange={changedata} />
                        <p style={{ color: "red", float: "left" }}>{/*<ErrorMessage name="completion" />*/}{dateerror}</p>
                    </Modal.Body>

                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>Close</Button>
                        <Button variant="primary" type="submit" onClick={sendData}>Save changes</Button>
                    </Modal.Footer>
                </Modal>
            </Form>
        </Formik>
    );
}

export default Adddata
