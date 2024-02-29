import { React, useEffect, useState } from "react";
import {
	Box,
	FooterContainer,
	Row,
	Column,
	FooterLink,
	Heading,
  FooterImg,
  ContainerName,
  ContainerDescription,
  ContainerImage
} from "./FooterStyles";
import endpoints from '../../Constants/endpoints';

const styles = {
  span: {
    marginLeft: '10px',
    color: 'white',
    fontSize: '12px'
  },
  content: {
    width: 'auto',
    display: 'inline-flex',
    borderBottom: '1px solid white'
  }
};


export default function Footer() {

	const [data, setData] = useState([])

	useEffect(() => {
		// Función para cargar los datos usando fetch
		async function fetchData() {
			try {
				const response = await fetch(endpoints.images); // Obtiene la ruta del archivo JSON desde endpoints.json
				if (!response.ok) {
					throw new Error('No se pudo cargar el archivo JSON.');
				}
				const jsonData = await response.json();
				setData(jsonData.images); // Establece los datos en el estado 'data'
			} catch (error) {
				console.error('Error al cargar los datos:', error);
			}
		}
		// Llama a la función para cargar los datos cuando el componente se monta
		fetchData();
	}, []);

	return (
		<>
			{data && (
				<Box>	
        <div style={styles.content}>
		  	  <ContainerImage>
		  	  	<FooterImg src={data.imageLogoJs} alt="Jss logo" className="imaLogoJS" />
		  	  </ContainerImage>
          <ContainerName >
            <Heading>Juan Segundo Sosa</Heading>
            <ContainerDescription>Especializado en React y Angular para crear interfaces web dinámicas y receptivas. Experiencia en Node.js para desarrollar aplicaciones web completas.
              Colaboro estrechamente con equipos de backend para integraciones fluidas y productos finales robustos.
            </ContainerDescription>
          </ContainerName>
		  	  	<Row>
		  	  		<Column>
		  	  			<Heading>Redes sociales</Heading>
		  	  			<FooterLink href="#">
		  	  				<i className="fab fa-facebook-f">
		  	  					<span
		  	  						style={styles.span}
		  	  					>
		  	  						Facebook
		  	  					</span>
		  	  				</i>
		  	  			</FooterLink>
		  	  			<FooterLink href="#">
		  	  				<i className="fab fa-instagram">
		  	  					<span
		  	  						style={styles.span}
		  	  					>
		  	  						Instagram
		  	  					</span>
		  	  				</i>
		  	  			</FooterLink>
		  	  			<FooterLink href="#">
		  	  				<i className="fab fa-twitter">
		  	  					<span
		  	  						style={styles.span}
		  	  					>
		  	  						Twitter
		  	  					</span>
		  	  				</i>
		  	  			</FooterLink>
		  	  		</Column>
            
		  	  	</Row>
        </div>
        <div style={{justifyContent: 'center', display: 'flex'}}>
          <ContainerDescription style={{color: 'white', fontSize: '12px'}}>
            Derechos de autor © 2024 Juan Segundo Sosa. Todos los derechos reservados. | Política de Privacidad | Términos y Condiciones.
          </ContainerDescription>
        </div>

		  </Box>

			)}
		</>
	);
};