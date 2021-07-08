import React from 'react'
import "../scss/Homepage.scss"
import KaydolPhoto from "../İmages/c3.png"
import SeçPhoto from "../İmages/c2.png"
import ListelePhoto from "../İmages/c1.png"
import sec1SVG from "../İmages/select.svg"

const Home = () => {
    return (
        <>
        <section className="sec1">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                    <p className="animate__animated animate__fadeInDown">SEÇ, KAYDET,</p>
                    <p className="animate__animated animate__fadeInDown">LİSTELE</p>
                    </div>
                    <div className="col-lg-6">
                        <img className="sec1svg animate__animated animate__fadeInDown" src={sec1SVG} alt="" />
                    </div>
                    <div className="row mt-5" style={{textAlign:"center"}}>
                        <p style={{fontSize:"30px"}}>Your List your World</p>
                    </div>
                </div>
            </div>
        </section>

        <section className="sec2">
            <div className="container">
                <h1 className="animate__animated animate__fadeInDown">BAŞLARKEN</h1>
                <div className="row">
                    <div className="col-lg-4">
                        <img src={KaydolPhoto} alt="" />
                        <h5>KAYDOL</h5>
                        <p>E-mail ve şifre ile kaydol</p>
                    </div>
                    <div className="col-lg-4">
                        <img src={SeçPhoto} alt="" />
                        <h5>SEÇ</h5> 
                        <p>Beğendiğin film ve dizileri seç</p>
                    </div>
                    <div className="col-lg-4">
                        <img src={ListelePhoto} alt="" />
                        <h5 className="mt-5">LİSTELE</h5>
                        <p>Kişisel film ve dizi listeni oluştur </p>
                    </div>
                </div>
            </div>
        </section>

        <section className="sec3">
            <div className="container">
                <div className="row">

                </div>

            </div>
        </section>
        </>
    )
}

export default Home
