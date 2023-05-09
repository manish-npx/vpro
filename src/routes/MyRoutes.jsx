import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Student from '../pages/Student'
import About from '../pages/About'
import Contact from '../pages/Contact'
import StudentCreate from '../pages/StudentCreate'
import StudentEdit from '../pages/StudentEdit'



function MyRoutes() {
    return (
        <>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about-us' element={<About />} />
                <Route path='/contact-us' element={<Contact />} />
                <Route path='/student' element={<Student />} />
                <Route path={`/student/:id/edit`} element={<StudentEdit />} />
                <Route path='/student/create' element={<StudentCreate />} />
            </Routes>
        </>
    )
}

export default MyRoutes