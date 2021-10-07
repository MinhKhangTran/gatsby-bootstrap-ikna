import { GatsbyImage, getImage } from "gatsby-plugin-image";
import React from "react";
import { Col, Container, Form, Row, Button } from "react-bootstrap";
import { useStaticQuery, graphql } from "gatsby";
import {
  SiBootstrap,
  SiChakraui,
  SiMaterialui,
  SiTailwindcss,
} from "react-icons/si";

const Hero = () => {
  const data = useStaticQuery(query);

  return (
    <section
      id="hero"
      className="section d-flex align-items-center justify-content-center"
    >
      <Container>
        <Row className="justify-content-between gx-0 gx-lg-5">
          <Col lg={6} className="d-flex flex-column justify-content-center">
            <h1>
              Learning can be so{" "}
              <span className="bg-orange-400 px-1">easy</span>!
            </h1>
            <p className="lead">
              Enamel pin salvia tilde, twee godard food truck butcher cloud
              bread retro activated charcoal. 90's photo booth shaman art party
              keffiyeh freegan retro tattooed tofu narwhal ramps cornhole
              semiotics.
            </p>
            <Form className="d-flex mt-3">
              <Form.Label htmlFor="letslearn" visuallyHidden>
                Email
              </Form.Label>
              <Form.Control
                className=""
                placeholder="Email Address"
              ></Form.Control>
              <Button className="cta_btn ms-2 text-white fw-bold">
                Let's Learn
              </Button>
            </Form>
          </Col>
          <Col lg={6} className="text-center">
            <div className="hero_img_wrapper">
              <GatsbyImage
                className="hero_img"
                image={getImage(data.allFile.nodes[0].childImageSharp)}
                alt="learning girl"
                objectFit="contain"
              />
            </div>
          </Col>
        </Row>
        <Row className="text-muted hero_social align-items-center">
          <Col lg={4} xs={12} className="">
            <h3 className="hero_social_title">Trusted by</h3>
          </Col>
          <Col lg={2} xs={3}>
            <p className="hero_social_icon bootstrap">
              <SiBootstrap className="" />
              <span className="d-none d-lg-inline-block ms-2">Bootstrap</span>
            </p>
          </Col>
          <Col lg={2} xs={3}>
            <p className="hero_social_icon tailwind">
              <SiTailwindcss className="" />
              <span className="d-none d-lg-inline-block ms-2">TailwindCSS</span>
            </p>
          </Col>
          <Col lg={2} xs={3}>
            <p className="hero_social_icon chakra">
              <SiChakraui className="" />
              <span className="d-none d-lg-inline-block ms-2">ChakraUI</span>
            </p>
          </Col>
          <Col lg={2} xs={3}>
            <p className="hero_social_icon material">
              <SiMaterialui className="" />
              <span className="d-none d-lg-inline-block ms-2">MaterialUI</span>
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export const query = graphql`
  {
    allFile(filter: { name: { regex: "/Hero/" } }) {
      totalCount
      nodes {
        id
        childImageSharp {
          gatsbyImageData(placeholder: TRACED_SVG)
        }
      }
    }
  }
`;

export default Hero;
