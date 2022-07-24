import React,{useEffect, useState} from "react";
import axios from './axios';
import './Row.css';

const baseURL="https://image.tmdb.org/t/p/original/";

 function Row({title,fetchURL,isLargeRow}){
     const [movies,setMovies]=useState([]); //empty array of movies
     useEffect(() =>{
        //if [], then it will only run once when row loads
        async function fetchData(){
            const request=await axios.get(fetchURL); //baseaddress+ particular fetchURL sse url uthaega aur upload krega
            setMovies(request.data.results);
            return request;

        }
        fetchData();
     },[fetchURL]);
     return(
         <div className="row">
             <h2>{title}</h2>
             <div className="row__posters">
                 {movies.map(movie =>(
                    <img 
                    key={movie.id}
                    className={`row__poster ${isLargeRow && "row__posterLarge"}`}
                    src={`${baseURL}${isLargeRow ? movie.poster_path: movie.backdrop_path}`} alt={movie.name}/>
                 ))}

             </div>

         </div>
     )

        
    
     
 }
 export default Row