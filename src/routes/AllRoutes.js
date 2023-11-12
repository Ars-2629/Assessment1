import { Routes,Route } from 'react-router-dom';
import { WordCount,Jokes,PageNotFound } from "../pages";

export function AllRoutes() {
  return (
    <div>
    <Routes>
    <Route path='/' element={<WordCount/>} />
    <Route path='/jokes' element={<Jokes/>} />
    <Route path='/*' element={<PageNotFound/>} />
    </Routes>
   
    </div>
  )
}