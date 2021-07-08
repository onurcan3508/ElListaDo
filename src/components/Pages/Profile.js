import React from 'react'
import { NavLink } from 'react-router-dom';
import "../scss/Profile.scss"

const Profile = ({User}) => {
    const Name = User.displayName.split(' ');
    const First_Name = Name[0];
    const Last_Name = Name[1];
    
    return (
        <section className="profile-page animate__animated animate__fadeIn">
            <h2>Üye Ayarları</h2>
            <div className="container">
                <div className="row">
                    <div className="col-4 profile-left-side">
                        <img src={User.photoURL} alt="" />
                        <p className="mt-3">{User.displayName}</p>
                        <p><i class="bi bi-person-fill"></i>Üyelik</p>
                        <p><i class="bi bi-key-fill"></i>Şifre</p>
                        <p><i class="bi bi-shield-fill-check"></i>Güvenlik</p>
                        <p><i class="bi bi-bell-fill"></i>Bildirimler</p>
                    </div>
                    <div className="col-4" style={{display:"flex",justifyContent:"center", flexDirection:"column"}}>
                        <label>Adınız</label>
                        <input className="form-control mb-5" type="text" placeholder={First_Name} />
                        <label>Email</label>
                        <input className="form-control mb-5" type="text" placeholder={User.email}/>
                    </div>
                    <div className="col-4" style={{display:"flex",justifyContent:"center", flexDirection:"column"}}>
                        <label>Soyadınız</label>
                        <input className="form-control mb-5" type="text" placeholder={Last_Name} />
                        <label>Telefon Numaranız</label>
                        <input className="form-control mb-5" type="text" placeholder="+90 555 123 45 67"/>    
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Profile
