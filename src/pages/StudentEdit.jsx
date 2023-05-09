import axios from "axios";
import { useState, useEffect } from "react"
import { Link, useParams, } from "react-router-dom"
import Loading from '../components/Loading';
import Alerts from '../components/Alerts';



function StudentEdit() {

    const { id } = useParams();
    const [loading, setLoading] = useState(true);
    const [student, setStudent] = useState({});
    const [showAlert, setShowAlert] = useState(false)

    useEffect(() => {
        axios.get(`https://dummyjson.com/users/${id}`).then(res => {
            setStudent(res.data)
            setLoading(false)
        });
    }, [])

    if (loading) return <Loading />


    const handelInput = (e) => {
        e.persist();
        setStudent({ ...student, [e.target.name]: e.target.value })
    }

    const saveStudent = (e) => {
        e.preventDefault();

        const studentData = {
            firstName: student.firstName,
            lastName: student.lastName,
            phone: student.phone,
            email: student.email,
            gender: student.gender,
            address: student.address,
        }

        axios.put(`https://dummyjson.com/users/${id}`, {
            method: 'PUT', /* or PATCH */
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                studentData
            })
        }).then(res => {
            if (res.status === 200) {
                setShowAlert(true);
            }
        }).catch((error) => {
            if (error.res === 422) {
                console.log('error', error.res.errors);
            }
        });

    }

    return (
        <>
            {showAlert ? <Alerts redirectUrl={'/student'} /> : ''}

            <div className="container mt-4">
                <div className="row">
                    <div className="col-md-12">
                        <div className="card">
                            <div className="card-header">
                                <h4>Edit Student
                                    <Link to='/student' className='btn btn-sm btn-danger float-end'>Back</Link>
                                </h4>
                            </div>
                            <div className="card-body">
                                <form onSubmit={saveStudent}>
                                    <div className="mb-3">
                                        <div className="row">
                                            <div className="col-6">
                                                <label className="form-label">First Name</label>
                                                <input type="text" className="form-control" value={student.firstName} onChange={handelInput} id="firstName" name="firstName" aria-describedby="arial" />
                                            </div>
                                            <div className="col-6">
                                                <label className="form-label">Last Name</label>
                                                <input type="text" className="form-control" value={student.lastName} onChange={handelInput} id="lastName" name="lastName" aria-describedby="arial" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mb-3">
                                        <div className="row">
                                            <div className="col-6">
                                                <label className="form-label">Phone</label>
                                                <input type="text" className="form-control" value={student.phone} onChange={handelInput} id="phone" name="phone" aria-describedby="arial" />
                                            </div>
                                            <div className="col-6">
                                                <label className="form-label">Email</label>
                                                <input type="email" className="form-control" value={student.email} onChange={handelInput} id="email" name="email" aria-describedby="arial" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mb-3">
                                        <div className="row">
                                            <div className="col-6">
                                                <label className="form-label">Gender</label>
                                                <input type="text" className="form-control" value={student.gender} onChange={handelInput} id="gender" name="gender" aria-describedby="arial" />
                                            </div>
                                            <div className="col-6">
                                                <label className="form-label">Address</label>
                                                <input type="text" className="form-control" value={student.address.address} onChange={handelInput} id="address" name="address" aria-describedby="arial" />
                                            </div>
                                        </div>
                                    </div>

                                    <button type="submit" className="btn btn-primary">Submit</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default StudentEdit