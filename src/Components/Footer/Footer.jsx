// Filename - components/Footer.js

import React from "react";
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
import logo from "./LogoJs.png"

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

const Footer = () => {
	return (
		  <Box>
        <div style={styles.content}>
		  	  <ContainerImage>
		  	  	<FooterImg src={logo} alt="Jss logo" className="imaLogoJS" />
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
	);
};
export default Footer;
