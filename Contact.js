import React from 'react';
import "./contact.css";
import { useState } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion'


function Contact() {
  const [input, setInput] = useState({ mail: "admin@snotat.com", phone: "+2349129285031" })
  const [number, setNumber] = useState('')
  const [email, setEmail] = useState('')
  const [desc, setDesc] = useState('');
 
    
  
  const register = async (e) => {
    e.preventDefault();
    const  registered =  {
         number,
         email,
        desc
      } 
  
  
    const res = await fetch('https://snotat.herokuapp.com/app/contact', {
      method: "POST",
      headers: {
        "Content-Type":"application/json"
      },
      body: JSON.stringify({registered})
    })

    const data = await res;
    if (!data) {
      alert(`Error, Message not sent ${data}`)
    }
    else {
      alert(`Thanks for contacting us!!! ${data.json()}`)
      setDesc("");
     setEmail("");
    setNumber("");
   
    
    }
    console.log(data)
    }
        
  
   
    
  
  
  return (
    <motion.div className='contact'  initial={{width:0}} animate={{width:"100%"}} exit={{x:window.innerWidth, transition:{duration:0.2}}}>
      <div className="desc">
      Contact us for web design, development and management, graphic design, software design, development and management, and other related jobs.
      </div>
      <form method='POST' action="http://snotat.herokuapp.com/app/contact" onSubmit={register} className="info">
       
        <p className='direct'>Direct Contact</p>
       <label htmlFor="tel">Mobile number</label> <input type="tel" name="tel" id="tel" value={number} placeholder="Mobile Number here..." onChange={e=>setNumber(e.target.value)}/>
       <label htmlFor="mail" require={true}>Email Address</label>
        <input type="email" name="mail" id="mail" placeholder="Email Address here..." value={email} onChange={ e=>setEmail(e.target.value)}/>
      <div className="topic">
          <input type="checkbox" className='type' id="type" value="Website"  /> 
          <label htmlFor="type">Website</label><br />
           <input type="checkbox" className='type1' id="type1" value='graphics' /> 
          <label htmlFor="type1">Graphics</label><br />
           <input type="checkbox" className='type2' id="type2" value='app' /> 
          <label htmlFor="type2">App</label><br />
           <input type="checkbox" className='type3' id="type3" value='others' /> 
          <label htmlFor="type3">Others</label><br />
        </div>
         <label htmlFor="textarea" className='contactdesc'>Description</label>
        <div className="textarea"><textarea name="description" id="textarea" cols="30" rows="10" placeholder="Describe Your Need Here, we will contact you..." value={desc} onChange={e=>setDesc(e.target.value)} require={true}></textarea>
        {/* <input type="file" name="otherdetails" id="otherdetails" />
        <input type="file" name="otherdetails2" id="otherdetails2" />
          <input type="file" name="otherdetails3" id="otherdetails3" /> */}
          <button type='submit' className="submit">Submit</button>
        </div>
      
      </form>
      <div className="other"><p className="others">You can also contact us through;</p>
        <p className="mymail">    Our official Gmail Address</p>
        <div className="sitemail">
         
      <input type="email" readOnly={true} value={input.mail}/><button className='copy'><a href="mailto:snotat@admin.com?body=HI, please leave your message, we will reply within 24 hours">Go</a></button>
        </div>
        <p className='phonenumber'>Or through whatsapp</p>
        <div className="whatsapp" readOnly={true}><input type="tel"  value={input.phone}/><button><a href="tel:+2349129285031">Go</a></button></div>
      </div>

    </motion.div>
  )
}

export default Contact