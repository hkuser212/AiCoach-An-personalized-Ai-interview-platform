import Footer from "@/components/footer"
import Header from "@/components/header"
import { Outlet } from "react-router-dom"
import { Container } from "@/components/container"
const publiclayout = () => {
  return (
    <div className="flex flex-col h-screen">
        <Header />

        <Container className="flex-grow">
            <main className="flex-grow">

            <Outlet/>
            </main>

        </Container>


       <Footer/>
    </div>
  )
}

export default publiclayout