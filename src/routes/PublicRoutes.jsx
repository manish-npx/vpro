import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Login from "../pages/Login";
import Contact from "../pages/Contact";
import PrivateRoutes from "./PrivateRoutes";
import Student from "../pages/Student";
import StudentCreate from "../pages/StudentCreate";
import StudentEdit from "../pages/StudentEdit";
import ToDo from "../pages/ToDo";
import StarRating from "../pages/StarRating";
import Profile from "../pages/Profile";

function publicRoutes() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} exact />
                <Route path="/home" element={<Home />} exact />
                <Route path="/about-us" element={<About />} />
                <Route path="/login" element={<Login />} />
                <Route path="/contact-us" element={<Contact />} />

                {/** Protected Routes */}
                {/** Wrap all Route under ProtectedRoutes element */}

                <Route path="/" element={<PrivateRoutes />}>
                    <Route path="todo" element={<ToDo />} />
                    <Route path="profile" element={<Profile />} />
                    <Route path="rating" element={<StarRating />} />
                    <Route path="student" element={<Student />} />
                    <Route path={`student/:id/edit`} element={<StudentEdit />} />
                    <Route path="student/create" element={<StudentCreate />} />
                </Route>
            </Routes>
        </>
    );
}

export default publicRoutes;
