import React, { useState } from 'react'
import { Table } from 'react-bootstrap'
import Adddata from './Adddata';
import Editdata from './Editdata';

function Home() {
    const [showmodal, setshowmodal] = useState(false);
    const [editData, seteditData] = useState(false);
    const [singleData, setsingleData] = useState([])
    const [cerdata, setcerdata] = useState([]);
    const [id, setid] = useState()
    let Add = () => {
        setshowmodal(true)
    }
    let closeModal = () => {
        setshowmodal(false)
    }
    let getData = (data) => {
        let copyData = [...cerdata];
        copyData.push(data);
        setcerdata(copyData);
    }
    let showeditData = (value, id) => {
        setid(id)
        setsingleData(value);
        seteditData(true)
    }
    let update = (data) => {
        cerdata.splice(id, 1)
        setcerdata([...cerdata])
        let copyData = [...cerdata]
        copyData.push(data)
        setcerdata(copyData)

    }
    let closeEdit = () => {
        seteditData(false)
    }
    let deleteData = (id) => {
        let index = id;
        cerdata.splice(index, 1)
        setcerdata([...cerdata])
    }
    return (
        <div className='container'>
            <h1>Achivements</h1>
            <Table hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Certification Name</th>
                        <th>Certified From</th>
                        <th>Year of Completion</th>
                        <th><button style={{ font: "bold", border: "0px" }} onClick={Add} >+</button></th>
                    </tr>
                </thead>
                <tbody>

                    {
                        cerdata.map((val, idx) => {
                            return <tr key={val + idx}>
                                <td>{idx}</td>
                                <td>{val.name}</td>
                                <td>{val.from}</td>
                                <td>{val.completion}</td>
                                <td><button onClick={() => { showeditData(val,idx) }}>Edit</button><button onClick={() => { deleteData(idx) }}>Delete</button></td></tr>
                        })
                    }

                </tbody>
            </Table>
            <Adddata
                showmodal={showmodal}
                closeModal={closeModal}
                getData={getData}
            />
            <Editdata
                data={singleData}
                showmodal={editData}
                closeModal={closeEdit}
                getData={update}
            />
        </div>


    )
}

export default Home