// Define role-based route configurations
import {
  AddProduct,
  AdminDashboard,
  Attendance,
  CheckResult,
  Classmates,
  Classrooms,
  Dashboard,
  ExamResult,
  ExamSchedule,
  GeneralResult,
  Inbox,
  LeaveRequests,
  NoticeBoard,
  Products,
  ProductCategories,
  RecordStudentResult,
  Reviews,
  SalesAnalytics,
  Settings,
  SingleCustomer,
  SingleProduct,
  StudentsTeachers,
  StudentLeave,
  StudentLeaveApply,
  Subjects,
  GeneralSettings,
  TakeAttendance,
  TeachersAddReview,
  TeachersReviews,
  Timetable,
  Transactions,
  UserDetails,
  ViewAttendance,  
  } from '../../pages';
  
export const roleRoutes = {
    Admin: [
      { id: "admin-dashboard", path: "/", element: <AdminDashboard /> },
      { id: "admin-products", path: "/products", element: <Products /> },
      { id: "admin-settings", path: "/settings", element: <Settings /> },
      { id: "admin-inbox", path: "/inbox", element: <Inbox /> },
      { id: "admin-results", path: "/results", element: <CheckResult /> },
      { id: "admin-results", path: "/general-settings", element: <GeneralSettings /> },
      // { id: "admin-subjects", path: "/subjects", element: <Subjects /> },
    ],
    Teacher: [
      { id: "teacher-dashboard", path: "/", element: <Dashboard /> },
      { id: "teacher-subjects", path: "/subjects", element: <Subjects /> },
      { id: "teacher-settings", path: "/settings", element: <Settings /> },
      { id: "teacher-notice-board", path: "/notice_board", element: <NoticeBoard /> },
      { id: "teacher-attendance", path: "/attendance", element: <Attendance /> },
      { id: "teacher-timetable", path: "/timetable", element: <Timetable /> },
      { id: "teacher-leave", path: "/leave", element: <StudentLeave /> },
      { id: "teacher-leave-apply", path: "/leave/apply", element: <StudentLeaveApply /> },
      { id: "teacher-inbox", path: "/inbox", element: <Inbox /> },
      { id: "teacher-students", path: "/students", element: <StudentsTeachers /> },
      { id: "teacher-classrooms", path: "/classrooms", element: <Classrooms /> },
      { id: "teacher-results", path: "/results", element: <CheckResult /> },
      { id: "teacher-results", path: "/record_result", element: <RecordStudentResult /> },
      { id: "teacher-exam-schedules", path: "/exam_schedules", element: <ExamSchedule /> },
      { id: "teacher-attendance", path: "/take_attendance", element: <TakeAttendance /> },
      { id: "teacher-view-attendance", path: "/view_attendance", element: <ViewAttendance /> },
      { id: "teacher-leave-requests", path: "/leave_requests", element: <LeaveRequests /> },
      { id: "teacher-single-student", path: "/student/:id", element: <UserDetails /> },
    ],
    
    Student: [
      { id: "student-dashboard", path: "/", element: <Dashboard /> },
      { id: "student-products", path: "/products", element: <Products /> },
      { id: "student-add-product", path: "/products/add", element: <AddProduct /> },
      { id: "student-single-product", path: "/products/:id", element: <SingleProduct /> },
      { id: "student-product-categories", path: "/products/categories", element: <ProductCategories /> },
      { id: "student-timetable", path: "/timetable", element: <Timetable /> },
      { id: "student-teachers", path: "/teachers", element: <StudentsTeachers /> },
      { id: "student-subjects", path: "/subjects", element: <Subjects /> },
      { id: "student-classmates", path: "/classmates", element: <Classmates /> },
      { id: "student-single-customer", path: "/customers/:id", element: <SingleCustomer /> },
      { id: "student-single-teacher", path: "/teacher/:id", element: <UserDetails /> },
      { id: "student-sales-analytics", path: "/sales/analysis", element: <SalesAnalytics /> },
      { id: "student-exam-result", path: "/exam_result", element: <ExamResult /> },
      { id: "student-attendance", path: "/attendance", element: <Attendance /> },
      { id: "student-transactions", path: "/transactions", element: <Transactions /> },
      { id: "student-leave", path: "/leave", element: <StudentLeave /> },
      { id: "student-leave-apply", path: "/leave/apply", element: <StudentLeaveApply /> },
      { id: "student-reviews", path: "/reviews", element: <Reviews /> },
      { id: "student-settings", path: "/settings", element: <Settings /> },
      { id: "student-inbox", path: "/inbox", element: <Inbox /> },
      { id: "student-exam-schedules", path: "/exam_schedules", element: <ExamSchedule /> },
      { id: "student-results", path: "/results", element: <GeneralResult /> },
      { id: "student-notice-board", path: "/notice_board", element: <NoticeBoard /> },
      { id: "student-teachers-reviews", path: "/teachers_reviews", element: <TeachersReviews /> },
      { id: "student-review-teacher", path: "/review_teacher", element: <TeachersAddReview /> },
    ],
  };
