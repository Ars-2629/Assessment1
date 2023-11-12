import { useNavigate } from "react-router-dom";

export function PageNotFound() {
    const navigate = useNavigate();
    const handleBack = ()=>{
        navigate('/');
    }
  return (
    <div>
        <h1 className="text-5xl ml-[350px] mt-20">404 - Page Not Found</h1>
        <button onClick = {handleBack} className="border px-2 py-1 ml-[500px] mt-8 bg-blue-700 rounded font-bold text-white">Back To Home</button>
    </div>
  )
}
