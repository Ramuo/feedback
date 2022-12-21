import { BrowserRouter, Routes, Route} from "react-router-dom";
import Header from './components/Header';
import FeedbackList from './components/FeedbackList';
import FeedbackStats from './components/FeedbackStats';
import FeedbackForm from './components/FeedbackForm';
import AboutPage from './pages/AboutPage';
import AboutIconLink from './components/AboutIconLink';
import {FeedbackProvider} from './context/FeedbackContext';


function App(){
   
    return(
        <FeedbackProvider>
            <BrowserRouter>
                <Header/>
                <div className="container">
                <Routes>
                    <Route path='/' element={
                        <>
                            <FeedbackForm/>
                            <FeedbackStats/>
                            <FeedbackList/>
                        </>
                        }  
                    ></Route>
                    <Route path='/about' element={<AboutPage/>}></Route>
                </Routes>
                <AboutIconLink/>
                </div>
            </BrowserRouter>
         </FeedbackProvider>
    )
}
export default App