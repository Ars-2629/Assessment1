import { Header } from '../components/Header';
import {useState,useEffect} from 'react';

export function Jokes() {
const [urlState,setUrlState] = useState(true);
const [jokeData,setJokeData] = useState({});

const url = urlState ? 'https://api.chucknorris.io/jokes/random?category=food' : 'https://api.chucknorris.io/jokes/random?category=music';

const handleUrl = ()=>{
 if(urlState){
 setUrlState(false);
 } else {
 setUrlState(true);
 }
}

useEffect(()=>{
    const handleJoke = async ()=>{
        const response = await fetch(url);
        const data = await response.json();
        setJokeData(data);
    }
    handleJoke();
},[url])


  return (
    <div>
        <Header heading = "ChuckNorris Jokes" subheading = "Free JSON API for hand Curated Chuck Norris Facts" />
        <div className='mt-5 ml-[350px] w-[500px] h-[200px] border bg-blue-400 rounded px-10 py-2 font-serif'>
            {jokeData.value}
        </div>
        <button onClick={handleUrl} className='mt-5 ml-[350px] border px-5 py-1 bg-gray-800 text-white rounded'>Next</button>
    </div>
  )
}
