import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { FaMicroscope } from "react-icons/fa";
import { AiOutlineInteraction } from "react-icons/ai";
import { GrUserExpert } from "react-icons/gr";
import { IoShareSocialOutline } from "react-icons/io5";

const Feat = () => {
  const featArray = [
    {
      id: 1,
      title: "Discover, Explore the Product",
      icon: <FaMicroscope className="feat_icon " size="2.5em" />,
      desc: "Enamel pin salvia tilde, twee godard food truck butcher cloud bread retro activated charcoal.",
    },
    {
      id: 2,
      title: "Good Experience",
      icon: <GrUserExpert className="feat_icon " size="2.5em" />,
      desc: "Enamel pin salvia tilde, twee godard food truck butcher cloud bread retro activated charcoal.",
    },
    {
      id: 3,
      title: "Interactive Learning",
      icon: <AiOutlineInteraction className="feat_icon " size="2.5em" />,
      desc: "Enamel pin salvia tilde, twee godard food truck butcher cloud bread retro activated charcoal.",
    },
    {
      id: 4,
      title: "Connect with others",
      icon: <IoShareSocialOutline className="feat_icon " size="2.5em" />,
      desc: "Enamel pin salvia tilde, twee godard food truck butcher cloud bread retro activated charcoal.",
    },
  ];
  return (
    <section id="feature" className=" section">
      <Container>
        <h2>
          Get started <span className="bg-orange-400 px-1">frictionless</span>!
        </h2>
        <p className="lead">
          Enamel pin salvia tilde, twee godard food truck butcher cloud bread
          retro activated charcoal.
        </p>
        <Row className="gy-4">
          {featArray.map((feat) => {
            const { id, title, icon, desc } = feat;
            return (
              <Col key={id} lg={3} md={6}>
                <Card border="primary">
                  <Card.Header className="fw-bold">{title}</Card.Header>
                  <Card.Body className="bg-orange-200">
                    <div className="feat_icon_wrapper d-inline-block bg-orange-400 p-3">
                      {icon}
                    </div>
                    <Card.Text>{desc}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Container>
    </section>
  );
};

export default Feat;
