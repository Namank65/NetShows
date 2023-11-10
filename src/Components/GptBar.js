import React from 'react';
import lang from '../Utils/LangConstant';
import { useSelector } from 'react-redux';

const GptBar = () => {

    const LangKey = useSelector(store => store.Config.lang);

    return (
        <div className='flex justify-center pt-[20%]'>
            {/* <div  className='text-black flex justify-center'>
                <h1>GPT Search</h1>
                </div> */}
            <form className='w-1/2 p-2 rounded-lg bg-black flex justify-center' onSubmit={(e) => e.preventDefault()}>
                <input className='px-8 py-3 w-1/2 rounded-l-full bg-purple-200' type='text' placeholder={lang[LangKey].GptPlaceHolder} />
                <button className='px-8 py-3  bg-purple-700 text-white rounded-r-full hover:bg-purple-800'>{lang[LangKey].search}</button>
            </form>
        </div>
    )
};

export default GptBar;