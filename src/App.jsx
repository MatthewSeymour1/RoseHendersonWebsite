import { BrowserRouter as Router, Routes, Route } from "react-router";
import Navbar from '@/components/Navbar';
import Home from '@/pages/Home';
import AboutUs from '@/pages/AboutUs';
import ContactUs from '@/pages/ContactUs';

export default function App() {

    return (
        <>
            <Router>
                <div className="flex min-h-screen flex-col">
                    <Navbar />
                    <Routes>
                        <Route path='/' element={<Home />} />
                        <Route path='/about-us' element={<AboutUs />} />
                        <Route path='/contact-us' element={<ContactUs />} />
                    </Routes>
                </div>
                

            </Router>
        </>
    )
}