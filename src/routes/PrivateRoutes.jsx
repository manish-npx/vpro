import { Navigate, Route, Routes } from 'react-router-dom'
import Student from '../pages/Student'
import StudentCreate from '../pages/StudentCreate'
import StudentEdit from '../pages/StudentEdit'
import ToDo from '../pages/ToDo'
import StarRating from '../pages/StarRating'
import Profile from '../pages/Profile'
import Home from '../pages/Home';
import About from '../pages/About';
import Contact from '../pages/Contact';


const PrivateRoutes = () => {

    //get token from auth
    return (
        <>
            {/** Protected Routes */}
            {/** Wrap all Route under ProtectedRoutes element */}
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='todo' element={<ToDo />} />
                <Route path='profile' element={<Profile />} />
                <Route path='rating' element={<StarRating />} />
                <Route path='student' element={<Student />} />
                <Route path='/about-us' element={<About />} />
                <Route path='/contact-us' element={<Contact />} />
                <Route path={`student/:id/edit`} element={<StudentEdit />} />
                <Route path='student/create' element={<StudentCreate />} />
                <Route path="*" element={<Navigate to="/profile" />} />
            </Routes>
        </>

    )
}

export default PrivateRoutes