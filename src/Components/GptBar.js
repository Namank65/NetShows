import React, { useRef } from 'react';
import lang from '../Utils/LangConstant';
import { useDispatch, useSelector } from 'react-redux';
import openai from '../Utils/Openai';
import { API_OPTIONS } from '../Utils/Constants';
import { AddGptSearchResults } from '../Utils/GptSlice';

const GptBar = () => {

    const LangKey = useSelector(store => store.Config.lang);
    const Dispatch = useDispatch();
    const searchText = useRef(null)

    const searchMovieTmdb = async (movie) => {
        const data = await fetch('https://api.themoviedb.org/3/search/movie?query=' + movie + '&include_adult=false&language=en-US&page=2', API_OPTIONS);
        const json = await data.json();
        console.log(json)

        return json.results;
    }

    const HandelclickedGptSearch = async () => {

        const getQuery = "Act as a movie recommendation system and suggest some movies for the query : " + searchText.current.value + "only give me name of 5 movies, comma seperated like the example result given ahead. Example results: Gadar, Don, Koi mil gaya, Kuch kuch hota hai, Golmaal"

        const gptResults = await openai.chat.completions.create({
            messages: [{ role: 'user', content: getQuery }],
            model: 'gpt-3.5-turbo',
        });

        const gptMovies = gptResults.choices?.[0]?.message?.content.split(",");
        console.log(gptMovies)

        const PromiseArray = gptMovies.map(movie =>  searchMovieTmdb(movie));
        const TmdbResults = await Promise.all(PromiseArray);

        Dispatch(AddGptSearchResults({MovieNames:gptMovies, MovieResults:TmdbResults}));

    };

    return (
        <div className='flex justify-center md:flex-row flex-col items-center h-96'>

            <form className='md:w-1/2 p-2 rounded-lg bg-black flex justify-center' onSubmit={(e) => e.preventDefault()}>
                <input className='px-8 py-3 md:w-2/3 w-full rounded-l-full bg-purple-200' type='text' placeholder={lang[LangKey].GptPlaceHolder} ref={searchText} />
                <button className='px-8 py-3  bg-purple-700 text-white rounded-r-full hover:bg-purple-800' onClick={HandelclickedGptSearch}>{lang[LangKey].search}</button>
            </form>
        </div>
    )
};

export default GptBar;