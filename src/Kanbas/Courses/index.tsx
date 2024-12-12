import { Navigate, Route, Routes, useParams, useLocation } from "react-router";
import CoursesNavigation from "./Navigation";
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/Editor";
import { FaAlignJustify } from "react-icons/fa";
import PeopleTable from "./People/Table";
import Quizzes from "./Quizzes";
import QuizEditor from "./Quizzes/QuizEditor";
import QuestionsEditor from "./Quizzes/QuestionsEditor";
import QuizDetails from "./Quizzes/QuizDetails";
import QuizPreviewScreen from "./Quizzes/QuizPreviewScreen";


export default function Courses({ courses }: { courses: any[]; }) {
    const { cid } = useParams();
    const course = courses.find((course) => course._id === cid);
    const { pathname } = useLocation();
    return (
      <div id="wd-courses">
      <h2 className="text-danger">
      <FaAlignJustify className="me-4 fs-4 mb-1" />
      {course && course.name} &gt; {pathname.split("/")[4]}
      </h2> <hr />
      <div className="d-flex">
      <div className="d-none d-md-block">

            <CoursesNavigation />
            </div>
    <div className="flex-fill">

            <Routes>
              <Route path="/" element={<Navigate to="Home" />} />
              <Route path="Home" element={<Home />} />
              <Route path="Modules" element={<Modules />} />
              <Route path="Assignments" element={<Assignments />} />
              <Route path="Assignments/:aid" element={<AssignmentEditor />} />
              <Route path="Assignments/new" element={<AssignmentEditor />} />
              
              <Route path="Quizzes" element={<Quizzes />} />
            <Route path="Quizzes/:qid" element={<QuizEditor />} />
            <Route
              path="Quizzes/:qid/Questions"
              element={<QuestionsEditor />}
            />
            <Route path="Quizzes/new" element={<QuizEditor />} />
            <Route path="Quizzes/new/Questions" element={<QuestionsEditor />} />
            <Route path="QuizDetails/:qid" element={<QuizDetails />} />

            <Route path="Quizzes/:qid/Preview" element={<QuizPreviewScreen />} />

              <Route path="People" element={<PeopleTable />} />
              </Routes>
            </div></div>
    </div>
  );}
  
  