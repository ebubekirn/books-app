import React from 'react'

export default function Logout() {
  localStorage.removeItem("user");
  localStorage.removeItem("loggedin");
  return (
    <div>Logout</div>
  )
}
