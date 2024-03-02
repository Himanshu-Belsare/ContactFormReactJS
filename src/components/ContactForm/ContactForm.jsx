import Button from "../Button/Button"
import styles from "./ContactForm.module.css"
import { MdMessage } from "react-icons/md";
import { FiPhone } from "react-icons/fi";
import { HiArrowCircleRight, HiMail } from "react-icons/hi"
import { useState } from "react";
import Swal from 'sweetalert2'
const ContactForm = () => {
    const [name, setName] = useState('Himanshu');
    const [email, setEmail] = useState('himanshubelsare9@gmail.com');
    const [text, setText] = useState('I Need Help !!');
    
    const onsubmit = (event) => {
        event.preventDefault();
        setName(event.target[0].value);
        setEmail(event.target[1].value);
        setText(event.target[2].value);
      Swal.fire({
        icon: "success",
        title:"ThankYou, " + event.target[0].value + " for Contacting us.",
        showConfirmButton: false,
        timer: 1700
        });
                

  }  
  return (
      <section className={styles.container}>
          <div className={styles.contact_form}>
              <div className={styles.top_btn}>
                  <Button text="VIA SUPPORT CHAT" icon={<MdMessage fontSize="24px"/>}/>
                    <Button text="VIA CALL"  icon={<FiPhone fontSize="24px"/>}/>
                </div>
            
                <Button
                    isoutline={true}
                    text="VIA EMAIL FORM"
                    icon={<HiMail fontSize="24px" />}
              />
              <form onSubmit={onsubmit}>
                  <div className={styles.form_control}>
                      <label htmlFor="name">Name</label>
                      <input type="text" name="name"/>
                  </div>       
                  <div className={styles.form_control}>
                      <label htmlFor="email">Email</label>
                      <input type="email" name="email"/>
                  </div>
                  <div className={styles.form_control}>
                      <label htmlFor="text">Text</label>
                      <textarea name="text" rows="8"></textarea>
                  </div>
                  <div style={{display:"flex", justifyContent:"end"}}>
                      <Button text="SUBMIT"/>
                  </div>
              </form>
              <div>
                  <h2>{"I am " + name + " and my email is " + email + ". " + text}</h2></div>
          </div>
          <div>
              <img className={styles.img_control} src="images/contact.svg" alt="contact us" />
          </div>
    </section>
  )
}

export default ContactForm