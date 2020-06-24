import React from 'react';
import * as resPDF from '../assets/docs/R.Giovinozzo_resume_2020.06.17.pdf';

export default function Home (props) {
  return (
    <div className='home'>
      {!props.loading && 
      <header className="home__heading">
        <h1 className="heading-primary">
          <span className="heading-primary--main">Robert Giovinozzo</span>
          <span className="heading-primary--sub">Frontend UI/UX Design &amp; Development</span>
        </h1>
        <h3 className="heading-secondary">
          <span>Creative solutions</span>
          <span>Elegant Design</span>
        </h3>

        <a className="btn btn__res"
          title="Resume Download for Robert Giovinozzo"
          target="_blank"
          rel="noopener noreferrer"
          href={resPDF}>View my Resume</a>

        <div className="contact">
          <div className="contact__info">
            <span className="contact__info contact__info--phone">(707) 797-7610</span>

            <a href="mailto:contact@rp-g.io" className="contact__info contact__info--email">contact@rp-g.io</a>
          </div>

          <div className="contact__soc-links">
            <a href="https://www.linkedin.com/in/rpgio/" className="contact__soc-links contact__soc-links--linkedin">
              <span className="link">LinkedIn</span>
            </a>

            <a href="https://github.com/RPGi0" className="contact__soc-links contact__soc-links--github">
              <span className="link">GitHub</span>
            </a>
          </div>

        </div>
      </header>
      }
    </div>
  );
}
