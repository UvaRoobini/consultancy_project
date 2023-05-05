import React from "react";
import "../Styles/ContactUs.css";


function ContactUs() {
  return (
    <div>
        <section class="contact"> 
           <div class="content">
            <h2>Contact Us</h2>
            <h4>Enjoy Solar Energy Today, and Help People of Tomorrow</h4>
          </div>
          <div class="container">
            <div class="contactInfo">
                <div class="box">
                    <div class="icon"></div>
                    <div class="text">
                        <h3>Address</h3>
                        <p>No 15 Warrior House, <br></br>Bharathidhasan Street Teachers Colony,<br></br> Collectorate, Erode - 638011</p>
                    </div>
                </div>
                <div class="box">
                    <div class="icon"> </div>
                    <div class="text">
                        <h3>Phone</h3>
                        <p>0000000000</p>
                    </div>
                </div>
                <div class="box">
                    <div class="icon"> </div>
                    <div class="text">
                        <h3>E-Mail</h3>
                        <p>warriorspowersystem@gmail.com</p>
                    </div>
                </div>
            </div>
            <div class="contactForm">
                <form>
                    <h2>Send Message</h2>
                    <div class="inputBox">
                        <input type="text" name="" required="required"></input>
                        <span>Full Name</span>
                    </div>
                    <div class="inputBox">
                        <input type="text" name="" required="required"></input>
                        <span>Email</span>
                    </div>
                    <div class="inputBox">
                        <textarea required="required"></textarea>
                        <span>Type your Message...</span>
                    </div>
                    <div class="inputBox">
                        <input type="submit" name=""  value="send"></input>
                    </div>
                </form>
            </div>
          </div>
        </section>
        <iframe style={{marginTop:20,width:"100%",height:400}} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3623.27916853722!2d78.24288193240052!3d10.953774720148715!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baa3775f9fea4c7%3A0x367c7eb73d0c3159!2sKRM%20HOME!5e0!3m2!1sen!2sin!4v1679845954819!5m2!1sen!2sin" 
        allowfullscreen="" 
        loading="lazy" 
        referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>
    );
}

export default ContactUs;