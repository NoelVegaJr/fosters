import Navbar from "./Layout/Navbar"
import { Outlet } from "react-router-dom"
import Footer from "./Layout/Footer"
import { ChakraProvider } from '@chakra-ui/react';

export default function App() {
  console.log("App Rendering")
  return (
    <>
    <ChakraProvider>
      <div className="flex flex-col min-h-screen">
          <Navbar />
            <Outlet />
          <Footer />
      </div>
    </ChakraProvider>

    </>

  )
}