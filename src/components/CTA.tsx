import React from "react";
import { Container, Button } from "react-bootstrap";

const CTA = () => {
  return (
    <section id="cta" className="bg-orange-100">
      <Container>
        <h2 className="text-center display-4">
          Join thousands of other{" "}
          <span className="bg-orange-400 px-1">satisfied</span> students
        </h2>
        <Button size="lg">Join Now</Button>
      </Container>
    </section>
  );
};

export default CTA;
