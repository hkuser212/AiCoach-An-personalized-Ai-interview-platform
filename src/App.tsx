import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import PublicLayout from '@/layouts/public-layout'
import HomePage from '@/routes/home'
import AuthLayout from '@/layouts/auth-layout'
import SignInPage from '@/routes/signin'
import SignUpPage from '@/routes/signup'  
import ProtectedRoutes from '@/layouts/protected-routes'
import MainLayout from '@/routes/main-layout'
import { Generate } from '@/components/generate'
import Dashboard from '@/routes/dashboard'
import {CreateEditPage} from '@/routes/create-edit-page'
import {MockLoadPage} from '@/routes/mock-load-page'
import {MockInterviewPage} from '@/routes/mock-interview-page'
import { Feedback } from './routes/feedback'
const App = () => {
  return (
 <Router>
  <Routes>
   <Route element={<PublicLayout />}>
   <Route index element={<HomePage/>} />
   </Route>
  
   <Route element={<AuthLayout />}>
   <Route path='/signin/*' element={<SignInPage/>} />
   <Route path='/signup/*' element={<SignUpPage/>} />
    </Route>
  
  <Route element={<ProtectedRoutes><MainLayout/></ProtectedRoutes>}>
  <Route element={<Generate />}path="/generate">
  <Route index element={<Dashboard/> }/>
  <Route path =":interviewId" element={<CreateEditPage/>}/>
  <Route path="interview/:interviewId" element={<MockLoadPage />} />
  <Route
              path="interview/:interviewId/start"
              element={<MockInterviewPage />}
            />
   <Route path="feedback/:interviewId" element={<Feedback />} />
  </Route>
  
  </Route>
  </Routes>
 </Router>
  )
}

export default App