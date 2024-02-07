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
                allowDynamicUpdate
                useReadMore={false}
                items={data.education}
                cardHeight={250}
                mode={mode}
                className="my-timeline"
                theme={{
                  primary: '#3D84C6',
                  secondary: 'white',
                  cardForeColor: 'black',
                  titleColor: 'white',
                  cardBgColor: 'rgba(118, 84, 255, 0.09)',
                  titleColor: 'white',
                  titleColorActive: 'red',
                }}
                fontSizes={{
                  cardSubtitle: '1rem',
                  cardDescription: '1rem',
                  cardText: '1.02rem',
                  cardTitle: '1.3rem',
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
      ) : <FallbackSpinner /> }
    </>
  );
}

export default EducationTwo;