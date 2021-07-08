import axios from 'axios'
import React,{useState,useEffect} from 'react'
import "../scss/PopularTv.scss"


const PopularTv = () => {
    const [Popular, setPopular] = useState([]);
    useEffect(() => {
        const URL = "https://api.themoviedb.org/3/tv/popular?api_key=aa7ae602c0b7e0c89de15b78fa599136";
        axios.get(URL)
        .then(response => {
            const data = response.data.results;
            setPopular(data);
        })
    }, [])
    return (
        <section className="popular-tv">
            <h1>En Popüler Diziler</h1>
            <div className="tv-card">
                {
                    Popular.map((item,key) => {
                        let IMG_PATH = `https://image.tmdb.org/t/p/w500${item.poster_path}`
                        return (
                            <div key={key} className="card animate__animated animate__fadeIn">
                                <img src={IMG_PATH} className="card-image-top w-100"/>
                                <div className="card-body">
                                    <h5 className="card-title" style={{textAlign:"center"}}>{item.original_name}</h5>
                                    <h5>{item.first_air_date.substring(0,4)}</h5>
                                    <p>{item.overview.substring(0,150)} ... </p>
                                    <button className="btn btn-primary">Devamı için tıklayınız</button>
                                    <div className="mt-2 btn btn-primary">{item.vote_average === 0 || null || undefined  ? "Veri bulunamadı" : item.vote_average}</div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </section>
    )
}

export default PopularTv
