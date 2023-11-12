import { Header } from "../components/Header";
import { useRef,useState } from "react";
export function WordCount() {
    const reference = useRef();
    const [inputValue,setInputValue] = useState('')
    const [count,setCount] = useState(0);

    const handleClear = ()=>{

        reference.current.value="";
        setInputValue('');
        setCount(0);
        
    };

    const handleChange = ()=>{

        setInputValue(reference.current.value);
        const plainInput = inputValue.replace(/\./g," ");
        const splitInput = plainInput.split(" ");
        const wordCount = splitInput.filter(input=>input.length !== 0).length;
        setCount(wordCount);
       
        if(reference.current.value === ""){
            setCount(0);
        }
    };

     return (
    <div>
        <Header heading = "Word Counter" subheading = "Free online character and word count tool."/>
        <textarea type='text' onChange={handleChange} ref={reference} placeholder="Type or Paste Your Text Here" className="mt-5 sm:ml-[350px] ml-[70px] border-[1.5px] sm:w-[500px] w-[330px] h-48 rounded"></textarea>

        <div>
        <button onClick={handleClear} className={count ? "mt-2 sm:ml-[550px] ml-[200px] border-0 rounded-sm px-8 py-1 bg-red-600 text-white text-sm" : "mt-2 sm:ml-[550px] ml-[200px] border-0 rounded-sm px-8 py-1 bg-gray-600 text-white text-sm cursor-not-allowed" }>Clear</button>
        </div>

        <div className="sm:mt-5 mt-3 box-border">
            <span className="border-0 sm:w-28 px-2 py-1 rounded bg-blue-700 sm:ml-[350px] ml-[70px] text-white box-border">Characters: {inputValue.length}</span>
            <span className="border-0 w-28 px-5 py-1 rounded bg-blue-700 sm:ml-[290px] ml-[120px] text-white box-border">Words: {count}</span>
        </div>
        
        

    </div>
  )
}
 