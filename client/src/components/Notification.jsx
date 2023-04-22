import React from 'react'


export default function Notification({message}) {
   
        const notificationWrap = document.querySelector(".notification");
        const notificationParagraph = document.querySelector(".notification p");
        notificationParagraph.innerText = message;
        notificationWrap.style.visibility = "visible";
        notificationWrap.style.opacity = "1";
        setTimeout(function () {
          notificationWrap.style.visibility = "hidden";
          notificationWrap.style.opacity = "0";
        }, 3500);
      
  return (
    <div className="notification">
        <p></p>
    </div>
  )
}
