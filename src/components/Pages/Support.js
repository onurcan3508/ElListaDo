import React from 'react'
import SUPPORT_SVG from "../İmages/team.svg"

const Support = () => {
    return (
        <section style={{display:"flex", justifyContent:"center",alignItems:"center",flexDirection:"column",height:"85vh"}}>
            <img src={SUPPORT_SVG} style={{width:"40%"}} />
            <div className="container mt-5">
                <div className="row" style={{textAlign:"center"}}>
                    <div className="col-3">
                        d
                    </div>
                    <div className="col-3">
                        d
                    </div>
                    <div className="col-3">
                        d
                    </div>
                    <div className="col-3">
                        d
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Support
