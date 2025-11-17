import './ContactMe.css'
function ContactMe() {
  return (
<div id="contact" className="contact">
  <div className="pageHeading"><h2>Contact Me</h2></div>
  <div className="contactContainer container">
    <form action="https://api.web3forms.com/submit" method="post"> {/* uses api web3forms to get the submitted form details*/}
    <input type="hidden" name="access_key" value="38286601-6d4d-4d24-aa3a-acdd1a08da15"></input>
    <label htmlFor="senderName"> Name: </label>
    <input type="text" name="senderName" required/>
    <br/>
    <label htmlFor="senderEmail"> Email: </label>
    <input type="text" name="senderEmail" required/>
    <br/>
    <label htmlFor="message"> Message: </label>
    <textarea name="message" rows={5} cols={50} required></textarea>
    <br/>
    <input id="reset" className="formButtons smallButton" type="reset" value="Reset"/>
    <input id="submit" className="formButtons smallButton" type="submit" value="Submit"/>
    </form>
    
  </div>
</div>
  );  
}

export default ContactMe;
