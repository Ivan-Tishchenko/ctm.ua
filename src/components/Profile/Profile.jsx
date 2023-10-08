import React from 'react'
const firstname = "slava";
const lastname = "prilipko";
const phone = "+38(000)00-000-00";
const address =  "address"

const Profile = () => {
  return (
    <section>
      <h2>имя</h2>
      <p>{firstname} {lastname}</p>

      <h2>номер</h2>
      <p>{phone}</p>

      <h2>адрес</h2>
      <p>{address}</p>
      
    </section>
  )
}

export default Profile
