import axios from 'axios'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import Loading from '../components/Loading';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
//import { BsHeartFill, BsHeart } from 'react-icons/bs';



const Student = () => {

    const MySwal = withReactContent(Swal)
    const [loading, setLoading] = useState(true);
    const [students, setStudents] = useState([]);
    const [perPage, setPerPage] = useState(10)
    const pageLimit = 500;
    const [currentPage, setCurrentPage] = useState(1)
    const numOfTotalPages = Math.ceil(students.length / perPage);
    const pages = [...Array(numOfTotalPages + 1).keys()].slice(1);   //Calulating No. of Page
    const indexOfLastPage = currentPage * perPage;
    const indexOfFirstPage = indexOfLastPage - perPage;
    const visibleStudent = students.slice(indexOfFirstPage, indexOfLastPage);
    const [count, setCount] = useState(0);


    const prevPageHanderler = () => {
        if (currentPage !== 1) setCurrentPage(currentPage - 1)
    }
    const nextPageHanderler = () => {
        if (currentPage !== numOfTotalPages) setCurrentPage(currentPage + 1)
    }

    const handelPaginationCount = (event) => {
        setPerPage(event.target.value);
    }

    const handelLike = (e) => {
        if (count === 1) { setCount(0) } else {

            let clickStudentLike = e.target.value;
            console.log('clickStudentLike', clickStudentLike);
            setCount(1)
        }
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

            axios.delete(`https://dummyjson.com/users/${event.target.value}`)
                .then(res => {
                    console.log('Records ', res.data.isDeleted);
                    if (res.data.isDeleted) {
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
                <th scope='row'>{i + 1}</th>
                <td><img src={student.image} style={{ height: 50, width: 50 }} /></td>
                <td>{student.firstName + ' ' + student.lastName}</td>
                <td>{student.email}</td>
                <td>{student.phone}</td>
                <td>{student.address.address}</td>
                <td>{student.gender}</td>
                <td>
                    <div className="container">
                        {count}

                        <button className='btn btn-sm btn-pills btn-soft-secondary' value={student.id} onClick={handelLike}> Click</button>

                    </div>
                </td>
                <td><Link to={`/student/${student.id}/edit`} className='btn btn-sm btn-info'>Edit</Link></td>
                <td><button className='btn btn-sm btn-danger' value={student.id} onClick={handelUserDelete}>Delete</button></td>
            </tr>
        );
    });


    return (
        <>
            <section className='section'>
                <div className="container mt-4">
                    <div className="">
                        <div className="row">
                            <div className="col-md-12">
                                <div className=" border rounded shadow">
                                    <div className="col-12">
                                        <div className="component-wrapper rounded">
                                            <div className="p-4 border-bottom">
                                                <div className="row">
                                                    <div className="col-9">
                                                        <h4 className="title mb-0">Student List
                                                        </h4>
                                                    </div>
                                                    <div className="col-1">
                                                        {/* <select className='form-control' onChange={handelPaginationCount}>
                                                        <option value="10" >10</option>
                                                        <option value="20">20</option>
                                                        <option value="30">30</option>
                                                    </select> */}
                                                    </div>
                                                    <div className="col-2">
                                                        <Link to='/student/create' className='btn btn-sm btn-primary float-end'>Add New</Link>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="p-4">
                                                <div className="table table-responsive bg-white rounded">
                                                    <table className="table mb-0 table-center">
                                                        <thead>
                                                            <tr>
                                                                <th scope="col" className="border-bottom">#</th>
                                                                <th scope="col" className="border-bottom">Image</th>
                                                                <th scope="col" className="border-bottom">Name</th>
                                                                <th scope="col" className="border-bottom">Email</th>
                                                                <th scope="col" className="border-bottom">Phone</th>
                                                                <th scope="col" className="border-bottom">Address</th>
                                                                <th scope="col" className="border-bottom">Gender</th>
                                                                <th scope="col" className="border-bottom">Subscribe</th>
                                                                <th scope="col" className="border-bottom">Edit</th>
                                                                <th scope="col" className="border-bottom">Delete</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            {studentDetails}
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="justify-content-center">
                                        <div className='col-12'>
                                            <div aria-label="pagination justify-content-center mb-0">
                                                <ul className="pagination pagination justify-content-left">
                                                    <li className={`page-item ${indexOfFirstPage === currentPage ? "active" : ""}`}>
                                                        <Link className="page-link" to="#" aria-label="Previous" onClick={prevPageHanderler}>
                                                            <span aria-hidden="true">Pre</span>
                                                        </Link>
                                                    </li>
                                                    {pages &&
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
                                                            <span aria-hidden="true">Next</span>
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </div>

                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}

export default Student