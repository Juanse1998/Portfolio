import React, { useEffect, useState, useContext } from 'react';
import { Chrono } from 'react-chrono';
import { Container } from 'react-bootstrap';
import Fade from 'react-reveal';
import { ThemeContext } from 'styled-components';
import endpoints from '../../Constants/endpoints';
import FallbackSpinner from '../Experience/FallbackSpinner';
import './Education.css';

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
          <div className='containerEducation'>
            <div className="contentTitleEducation" id="educationTwo">
              <h3 className="titleEducation">
                Educación
              </h3>
            </div>
            <Fade>
              <div style={{ width }} className="section-content-container">
                <Container>
                  <Chrono
                    allowDynamicUpdate
                    useReadMore={false}
                    items={data.education}
                    cardHeight={250}
                    mode={mode}
                    className="my-timeline"
                    theme={{
                      primary: '#3D84C6',
                      secondary: 'black',
                      cardForeColor: 'black',
                      titleColor: 'white',
                      cardBgColor: 'rgba(118, 84, 255, 0.09)',
                      titleColorActive: 'red',
                    }}
                    fontSizes={{
                      cardSubtitle: '0.9rem',
                      cardDescription: '0.8rem',
                      cardText: '0.8rem',
                      cardTitle: '1.1rem',
                      title: '1rem',
                    }}
                    classNames={{
                      card: 'my-card',
                      cardMedia: 'my-card-media',
                      cardSubTitle: 'my-card-subtitle',
                      cardText: 'my-card-text',
                      cardTitle: 'my-card-title',
                      controls: 'my-controls',
                      title: 'my-title',
                    }}
                  >
                  </Chrono>
                </Container>
              </div>
            </Fade>
          </div>
      ) : <FallbackSpinner /> }
    </>
  );
}

export default EducationTwo;