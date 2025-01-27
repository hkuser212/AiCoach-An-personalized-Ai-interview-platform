import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import PublicLayout from '@/layouts/public-layout'
import HomePage from '@/routes/home'
import AuthLayout from '@/layouts/auth-layout'
import SignInPage from '@/routes/signin'
import SignUpPage from '@/routes/signup'  
import ProtectedRoutes from '@/layouts/protected-routes'
import MainLayout from '@/routes/main-layout'
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
  
  <Route element={<ProtectedRoutes><MainLayout/></ProtectedRoutes>}></Route>
  </Routes>
 </Router>
  )
}

export default App