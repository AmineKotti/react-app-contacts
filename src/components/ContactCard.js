import React from "react";


const ContactCard = (props) => {
    const { name, email } =  props.contact;
    return (
        <div className="item">
           <div className="content">
               <div className="header">{ name }</div>
               <div>{ email }</div>
           </div>
           <i style={{color:"red", marginTop :"5px"}} className="trash alternate outline icon"></i>
        </div>
      );
}



export default ContactCard;