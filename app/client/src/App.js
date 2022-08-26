import Navbar from "./Layout/Navbar"
import Header from './Layout/Header'
import CatList from "./components/Cat/CatList"

export default function App() {
  console.log("App Rendering")
  return (
    <>
    <Navbar />
    <main id="main">
      <Header />
      <CatList />
    </main>

    </>

  )
}