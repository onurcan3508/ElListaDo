import axios from 'axios'
import React,{useState,useEffect} from 'react'
import "../scss/PopularMovies.scss"

const PopularMovies = () => {
    const [Popular, setPopular] = useState([]);
    useEffect(() => {
        const URL = "https://api.themoviedb.org/3/movie/popular?api_key=aa7ae602c0b7e0c89de15b78fa599136";
        axios.get(URL)
        .then(response => {
            const data = response.data.results;
            setPopular(data);
        })
    }, [])
    return (
        <section className="popular-movie">
            <h1>En Popüler Filmler</h1>
            <div className="movie-card">
                {
                    Popular.map((item,key) => {
                        let IMG_PATH = `https://image.tmdb.org/t/p/w500${item.poster_path}`
                        return (
                            <>
                                <div key={key} className="card animate__animated animate__fadeIn">
                                    <img src={IMG_PATH} className="card-image-top w-100"/>
                                    <div className="card-body">
                                        <h5 className="card-title" style={{textAlign:"center"}}>{item.title}</h5>
                                        <h5>{item.release_date && item.release_date.substring(0,4)}</h5>
                                        <p>{item.overview && item.overview.substring(0,150)} ... </p>
                                        <button className="btn btn-primary">Devamı için tıklayınız</button>
                                        <div className="mt-2 btn btn-primary">{item.vote_average === 0 ? "Veri bulunamadı" : item.vote_average}</div>
                                    </div>
                                </div>
              
                            </>
                        )
                    })
                }
            </div>
        </section>
    )
}

export default PopularMovies
