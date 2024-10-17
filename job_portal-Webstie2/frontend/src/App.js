import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { theme } from './theme';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ProSidebarProvider } from 'react-pro-sidebar';
import LogIn from './pages/LogIn';
import UserDashboard from './pages/user/UserDashboard';
import UserRoute from './component/UserRoute';
import AdminRoute from './component/AdminRoute';
import Layout from './pages/global/Layout';
import UserJobsHistory from './pages/user/UserJobsHistory';
import UserInfoDashboard from './pages/user/UserInfoDashboard';
import AdminDashboard from './pages/admin/AdminDashboard';
import SingleJob from './pages/SingleJob';
import DashUsers from './pages/admin/DashUsers';
import DashJobs from './pages/admin/DashJobs';
import Register from './pages/Register';
import DashCategory from './pages/admin/DashCategory';
import DashCreateJob from './pages/admin/DashCreateJob';
import DashCreateCategory from './pages/admin/DashCreateCategory';
import DashEditJob from './pages/admin/DashEditJob';
import EditUser from './pages/admin/Dashedituser';  // Import EditUser component




//HOC
const UserDashboardHOC = Layout(UserDashboard);
const UserJobsHistoryHOC= Layout(UserJobsHistory);
const UserInfoDashboardHOC = Layout(UserInfoDashboard);
const AdminDashboardHOC = Layout(AdminDashboard);
const DashUsersHOC = Layout(DashUsers);
const DashJobsHOC = Layout(DashJobs);
const DashCategoryHOC = Layout(DashCategory)
const DashCreateJobHOC = Layout(DashCreateJob)
const DashCreateCategoryHOC = Layout(DashCreateCategory)
const DashAdminEditJobHOC = Layout(DashEditJob);
const EditUserHOC=Layout(EditUser);


const App = () => {

    return (
        <>
            <ToastContainer />
            <ThemeProvider theme={theme}>
                <CssBaseline />
                    <ProSidebarProvider>
                        <BrowserRouter>
                            <Routes>
                                <Route path='https://imroz-job-portal-9.onrender.com/' element={<Home />} />
                                <Route path='https://imroz-job-portal-9.onrender.com/search/location/:location' element={<Home />} />
                                <Route path='https://imroz-job-portal-9.onrender.com/search/:keyword' element={<Home />} />
                                <Route path='https://imroz-job-portal-9.onrender.com/login' element={<LogIn />} />
                                <Route path='https://imroz-job-portal-9.onrender.com/register' element={<Register />} />
                                <Route path='https://imroz-job-portal-9.onrender.com/job/:id' element={<SingleJob />} />
                                <Route path='https://imroz-job-portal-9.onrender.com/admin/dashboard' element={<AdminRoute><AdminDashboardHOC /></AdminRoute>} />
                                <Route path='https://imroz-job-portal-9.onrender.com/admin/users' element={<AdminRoute><DashUsersHOC /></AdminRoute>} />
                                <Route path="https://imroz-job-portal-9.onrender.com/admin/user/edit/:id" element= {<AdminRoute><EditUserHOC /></AdminRoute>}/>  {/* Edit user page */}
                                <Route path='https://imroz-job-portal-9.onrender.com/admin/jobs' element={<AdminRoute><DashJobsHOC /></AdminRoute>} />
                                <Route path='https://imroz-job-portal-9.onrender.com/admin/category' element={<AdminRoute><DashCategoryHOC /></AdminRoute>} />
                                <Route path='https://imroz-job-portal-9.onrender.com/admin/job/create' element={<AdminRoute><DashCreateJobHOC /></AdminRoute>} />
                                <Route path='https://imroz-job-portal-9.onrender.com/admin/edit/job/:id' element={<AdminRoute><DashAdminEditJobHOC /></AdminRoute>} />
                                <Route path='https://imroz-job-portal-9.onrender.com/admin/category/create' element={<AdminRoute><DashCreateCategoryHOC /></AdminRoute>} />
                                <Route path='https://imroz-job-portal-9.onrender.com/user/dashboard' element={<UserRoute>< UserDashboardHOC /></UserRoute>} />
                                <Route path='https://imroz-job-portal-9.onrender.com/user/jobs' element={<UserRoute>< UserJobsHistoryHOC /></UserRoute>} />
                                <Route path='https://imroz-job-portal-9.onrender.com/user/info' element={<UserRoute>< UserInfoDashboardHOC /></UserRoute>} />
                                <Route path='*' element={<NotFound />} />
                            </Routes>
                         </BrowserRouter>
                    </ProSidebarProvider>
            </ThemeProvider>
        </>
    )
}

export default App
