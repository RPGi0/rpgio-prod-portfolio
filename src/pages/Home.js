import React from 'react';

export default function Home (props) {
//   <div className="res">
//     <a className=" res res__doc" title="Resume Download for Robert Giovinozzo"
//       target="_blank" rel="noopener noreferrer"
//       href="../assets/docs/R.Giovinozzo_resume_2020.06.17.pdf">Download my Resume</a>
//   </div>

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

        <div className="contact">
          <div className="contact__info">
            <span className="contact__info contact__info--phone">(707) 797-7610</span>

            <a href="mailto:gio@llnnll.com" className="contact__info contact__info--email">gio@llnnll.com</a>
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
