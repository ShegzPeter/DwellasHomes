// import React, { useState  } from 'react'

// const Fetching = () => {

// const [input, setInput] = useState("");
// const [movies, setMovie] = useState([]);


// const fetchMovie = () =>{
//     if(!input.trim()){
//         return;
//     }

 
// const options = {method: 'GET',
//     headers: {accept: 'application/json'}};

// fetch(`https://api.themoviedb.org/3/search/movie?query=${input}&include_adult=false&language=en-US&page=1`, options)
//  .then(response => response.json())
//  .then((data) => {
//    setMovie(data)
//    console.log(data)

//  }
// )
    
//  .catch(err => console.error(err));
// }


  
// const handlesubmit = (e) =>{
//     e.preventDefault();
//     fetchMovie();
//   }
//   return (
//     <div className='mt-10'>
//         <form  onSubmit={handlesubmit}action="">
//         <input type="text" 
//         value={input} 
//         placeholder='Enter a movie' 
//         onChange={(e)=>setInput(e.target.value)}
//         />




//     <button className='bg-green-600 ml-4 ' type='submit'>Search</button>
//         </form>







//     </div>
//   )
// }

// export default Fetching