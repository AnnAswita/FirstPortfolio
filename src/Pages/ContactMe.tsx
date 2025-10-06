import './ContactMe.css'
function ContactMe() {
  return (
<div id="contact" className="contact">
  <div className="pageHeading"><h2>Contact Me</h2></div>
  <div className="contactContainer container">
    <p>Email:<a href="mailto:ann.aswita@gmail.com?subject=Message form portfolio viewer" className="emailLink"> ann.aswita@gmail.com</a></p>
    <form action="mailto:ann.aswita@gmail.com?subject=Message form portfolio viewer" method="post" encType="text/plain">
    <label htmlFor="senderName"> Name: </label>
    <input type="text" name="senderName"/>
    <br/>
    <label htmlFor="message"> Message: </label>
    <textarea name="message" rows={5} cols={50}></textarea>
    <br/>
    <input id="reset" className="formButtons" type="reset" value="Reset"/>
    <input id="submit" className="formButtons" type="submit" value="Submit"/>
    </form>
  </div>
</div>
  );  
}

export default ContactMe;