import React, { useEffect, useState, useContext } from 'react';
import { Chrono } from 'react-chrono';
import { Container } from 'react-bootstrap';
import Fade from 'react-reveal';
import { ThemeContext } from 'styled-components';
import endpoints from '../../Constants/endpoints';
import FallbackSpinner from '../Experience/FallbackSpinner';
import './EducationTwo.css';

function EducationTwo(props) {
  const theme = useContext(ThemeContext);
  const [data, setData] = useState(null);
  const [width, setWidth] = useState('50vw');
  const [mode, setMode] = useState('VERTICAL_ALTERNATING');

  useEffect(() => {
    fetch(endpoints.education, {
      method: 'GET',
    })
      .then((res) => res.json())
      .then((res) => setData(res))
      .catch((err) => err);

    if (window?.innerWidth < 576) {
      setMode('VERTICAL');
    }

    if (window?.innerWidth < 576) {
      setWidth('90vw');
    } else if (window?.innerWidth >= 576 && window?.innerWidth < 768) {
      setWidth('90vw');
    } else if (window?.innerWidth >= 768 && window?.innerWidth < 1024) {
      setWidth('75vw');
    } else {
      setWidth('50vw');
    }
  }, []);

  return (
    <>
      {data ? (
        <Fade>
          <div className="contentTitle" id="educationTwo">
              <h3 className="titleExperience">
                Educación
              </h3>
            </div>
          <div style={{ width }} className="section-content-container">
            <Container>
              <Chrono
                hideControls
                allowDynamicUpdate
                useReadMore={false}
                items={data.education}
                cardHeight={250}
                mode={mode}
                theme={{
                  primary: '#3D84C6',
                  secondary: '#3D84C6',
                  cardForeColor: 'black',
                  titleColor: 'white'
                }}
              >
                <div className="chrono-icons">
                  {data.education.map((education) => (education.icon ? (
                    <img
                      key={education.icon.src}
                      src={education.icon.src}
                      alt={education.icon.alt}
                    />
                  ) : null))}
                </div>
              </Chrono>
            </Container>
          </div>
        </Fade>
      ) : <FallbackSpinner /> }
    </>
  );
}

export default EducationTwo;