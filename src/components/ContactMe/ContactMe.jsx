import "./ContactMe.css";
import ContactInfoCard from "./ContactInfoCard/ContactInfoCard";

const ContactMe = () => {
  return (
    <section id="contact-me" className="contact-container">
      <h5>Contact Me</h5>

      <div className="contact-content">
        <ContactInfoCard
          iconUrl="./assets/images/email-icon.svg"
          text="num74eng@gmail.com"
        />
        <a
          href="https://github.com/num74"
          target="_blank"
          rel="noopener noreferrer"
        >
          <ContactInfoCard
            iconUrl="./assets/images/github-icon.svg"
            text="https://github.com/num74"
          />
        </a>
      </div>
    </section>
  );
};

export default ContactMe;
