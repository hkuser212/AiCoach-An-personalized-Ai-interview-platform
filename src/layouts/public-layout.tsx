import Footer from "@/components/footer"
import Header from "@/components/header"
import { Outlet } from "react-router-dom"
import  AuthHandler from "@/handlers/auth-handler"
const publiclayout = () => {
  return (
    <div className="w-full">
        <Header />
        <AuthHandler/>

        <Outlet/>


       <Footer/>
    </div>
  )
}

export default publiclayout