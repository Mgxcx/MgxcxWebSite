import React from 'react';
import config from '../../config';
import ReCAPTCHA from 'react-google-recaptcha';

export default function Footer() {
  return (
    <section id="footer">
      <div className="inner">
        <h2 className="major">Contactez-moi !</h2>
        <p></p>
        <form
          name="contact"
          method="post"
          netlify-honeypot="bot-field"
          data-netlify="true"
          data-netlify-recaptcha="true"
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
              <ReCAPTCHA sitekey="{process.env.SITE_RECAPTCHA_KEY}" />
              <input type="submit" value="Envoyer mon message" />
            </li>
          </ul>
        </form>
        <ul className="contact">
          <li className="fa-home">{config.address}</li>

          <li className="fa-phone">{config.phone}</li>

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
          <li>&copy; Solid State. All rights reserved.</li>
          <li>
            Design: <a href="http://html5up.net">HTML5 UP</a>
          </li>
        </ul>
      </div>
    </section>
  );
}
