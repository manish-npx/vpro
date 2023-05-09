import axios from 'axios'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import Loading from '../components/Loading';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'


function Student() {

    const MySwal = withReactContent(Swal)
    const [loading, setLoading] = useState(true);
    const [students, setStudents] = useState([]);
    const [perPage, setPerPage] = useState(10)
    const pageLimit = 1000;
    const [currentPage, setCurrentPage] = useState(1)

    const numOfTotalPages = Math.ceil(students.length / perPage);
    const pages = [...Array(numOfTotalPages + 1).keys()].slice(1);

    const indexOfLastPage = currentPage * perPage;
    const indexOfFirstPage = indexOfLastPage - perPage;
    const visibleStudent = students.slice(indexOfFirstPage, indexOfLastPage);

    const prevPageHanderler = () => {
        if (currentPage !== 1) setCurrentPage(currentPage - 1)
    }
    const nextPageHanderler = () => {
        if (currentPage !== numOfTotalPages) setCurrentPage(currentPage + 1)
    }

    useEffect(() => {
        try {
            axios.get(`https://dummyjson.com/users?limit=${pageLimit}`).then(res => {
                setStudents(res.data.users)
                setLoading(false)
            });
        } catch (error) {
            console.log(error);
        }
    }, [])

    const handelUserDelete = (event) => {
        try {
            axios.delete(`https://dummyjson.com/users/${event.target.value}`, {
                method: 'DELETE',
            }).then(res => {
                console.log(res);
                if (res.status == 200) {
                    MySwal.fire({
                        title: <p>Success</p>,
                        text: 'Records deleted successfully.',
                    });
                }
            });
        } catch (error) {
            console.log('error', error);

        }
    }

    if (loading) return (<Loading />)


    let studentDetails = visibleStudent.length && visibleStudent.map((student, i) => {
        return (
            <tr key={student.id}>
                <td>{i + 1}</td>
                <td><img src={student.image} style={{ height: 50, width: 50 }} /></td>
                <td>{student.firstName + ' ' + student.lastName}</td>
                <td>{student.email}</td>
                <td>{student.phone}</td>
                <td>{student.address.address}</td>
                <td>{student.gender}</td>
                <td>
                    <div className="container">
                        <div className="btn-container">

                        </div>
                    </div>
                </td>
                <td><Link to={`/student/${student.id}/edit`} className='btn btn-xs btn-info'>Edit</Link></td>
                <td><button className='btn btn-xs btn-danger' value={student.id} onClick={handelUserDelete}>Delete</button></td>
            </tr>
        );
    });


    return (
        <>
            <div className="container mt-4">
                <div className="">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="card">
                                <div className="card-header">
                                    <h4>Student List
                                        <Link to='/student/create' className='btn btn-sm btn-primary float-end'>Add New</Link>
                                    </h4>
                                </div>
                                <div className="card-body">
                                    <table className='table table-stiped'>
                                        <thead>
                                            <tr>
                                                <td>#</td>
                                                <td>Image</td>
                                                <td>Name</td>
                                                <td>Email</td>
                                                <td>Phone</td>
                                                <td>Address</td>
                                                <td>Gender</td>
                                                <td>Subscribe</td>
                                                <td>Edit</td>
                                                <td>Delete</td>
                                            </tr>
                                        </thead>
                                        <tbody>

                                            {studentDetails}
                                        </tbody>
                                    </table>
                                    <div>
                                        <nav aria-label="Page navigation">
                                            <ul className="pagination pagination justify-content-left">
                                                <li className={`page-item ${indexOfFirstPage === currentPage ? "active" : ""}`}>
                                                    <Link className="page-link" to="#" aria-label="Previous" onClick={prevPageHanderler}>
                                                        <span aria-hidden="true">&laquo;</span>
                                                    </Link>
                                                </li>
                                                {
                                                    pages.map((page) => {
                                                        return (
                                                            <li className={`page-item ${page === currentPage ? "active" : ""}`} key={page} >
                                                                <Link className="page-link" to="#" onClick={() => setCurrentPage(page)}>{`${page}`}</Link>
                                                            </li>
                                                        )
                                                    })
                                                }
                                                <li className={`page-item ${indexOfLastPage === currentPage ? "active" : ""}`}>
                                                    <Link className="page-link" to="#" aria-label="Next" onClick={nextPageHanderler}>
                                                        <span aria-hidden="true">&raquo;</span>
                                                    </Link>
                                                </li>
                                            </ul>
                                        </nav>

                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                </div>
            </div >
        </>
    )
}

export default Student