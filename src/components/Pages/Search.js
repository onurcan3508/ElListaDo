import React,{useState} from 'react'
import axios from "axios"
import NULLJPG from "../İmages/null.jpg"
import "../scss/Search.scss"

const Search = () => {

      const [Query, setQuery] = useState("");
      const [Data, setData] = useState([]);

      const Search = (e) => {
            if (e.key === "Enter")  {
                if (Query === "" || Query == []) {
                    alert("Boş bir arama yaptınız boş derken arama çubuğu boş demek istiyorum ya da ben bir şey bulamıyorum. :)")
                }
                const URL = `https://api.themoviedb.org/3/search/multi?api_key=aa7ae602c0b7e0c89de15b78fa599136&language=en-US&query=${Query}&page=1&include_adult=false`;
                  axios.get(URL)
                  .then(response => {
                      const data = response.data.results;
                      console.log(data);
                      setData(data)
                      setQuery("")
                  })
            }
      }

    return (
        <section className="search-box">
           <input className="form-control mt-4" type="text" placeholder="Hadi bir film ya da dizi arayalım." onChange={(e) => setQuery(e.target.value)} onKeyPress={Search} />
           <div className="movie-card">
                {
                    Data.map((item,key) => {
                        let IMG_PATH = `https://image.tmdb.org/t/p/w500${item.poster_path}`
                        return (
                            <div key={key} className="card animate__animated animate__fadeIn">
                                <img src={item.poster_path == null || undefined ? NULLJPG : IMG_PATH} className="card-image-top w-100"/>
                                <div className="card-body">
                                    <h5 className="card-title"></h5>
                                    <h5>{item.title}</h5>
                                    <h5>{item.release_date && item.release_date.substring(0,4)}</h5>
                                    <p style={{textAlign: "center"}}>{item.overview && item.overview.substring(0,150)}</p>
                                    <button className="btn btn-primary">Devamı için tıklayınız</button>
                                    <div className="mt-2 btn btn-primary">{item.vote_average === 0 ? "Veri bulunamadı" : item.vote_average}</div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </section>
    )
}

export default Search
    