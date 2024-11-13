import React from 'react';
import config from '../../config';

export default function Footer() {
  return (
    <section id="footer">
      <div className="inner">
        <h2 className="major">Contactez-moi !</h2>

        <form
          name="contact"
          method="post"
          netlify-honeypot="bot-field"
          data-netlify="true"
        >
          <input type="hidden" name="bot-field" />
          <input type="hidden" name="form-name" value="contact" />
          <div className="fields">
            <div className="field">
              <label htmlFor="name">Nom</label>
              <input type="text" name="name" id="name" />
            </div>
            <div className="field">
              <label htmlFor="email">Email</label>
              <input type="email" name="email" id="email" />
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" rows="4"></textarea>
            </div>
          </div>
          <ul className="actions">
            <li>
              <input
                type="submit"
                value="Envoyer mon message"
                className="sendbutton"
              />
            </li>
          </ul>
        </form>
        <ul className="contact">
          {/* <li className="fa-phone">{config.phone}</li> */}

          {config.socialLinks.map((social) => {
            const { icon, name, url } = social;
            return (
              <li className={`${icon}`} key={url}>
                <a href={url}>{name}</a>
              </li>
            );
          })}
        </ul>
        <ul className="copyright">
          <li>&copy; Margaux Chevreux.</li>
        </ul>
      </div>
    </section>
  );
}
