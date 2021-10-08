import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

interface ITeam {
  allFile: {
    nodes: [
      {
        id: string;
        childImageSharp: any;
        name: string;
        position: string;
        desc: string;
      }
    ];
  };
}

const Team = () => {
  const {
    allFile: { nodes },
  }: ITeam = useStaticQuery(query);

  //add these values to photos
  const teamArray = [
    {
      id: 1,
      name: "John Smith",
      position: "CEO",
      desc: "Fixie lomo waistcoat kogi you probably haven't heard of them vice tattooed tacos actually, chartreuse palo santo shabby chic drinking vinegar raw denim prism. ",
    },
    {
      id: 2,
      name: "Jane Doe",
      position: "CTO",
      desc: "Fixie lomo waistcoat kogi you probably haven't heard of them vice tattooed tacos actually, chartreuse palo santo shabby chic drinking vinegar raw denim prism. ",
    },
    {
      id: 3,
      name: "Sarah Doakes",
      position: "Manager",
      desc: "Fixie lomo waistcoat kogi you probably haven't heard of them vice tattooed tacos actually, chartreuse palo santo shabby chic drinking vinegar raw denim prism. ",
    },
  ];

  const newTeam = [...nodes].map((member, index) => {
    const specificName = teamArray.find((item) => {
      return item.id === index + 1;
    }).name;
    const specificPos = teamArray.find((item) => {
      return item.id === index + 1;
    }).position;
    const specificDesc = teamArray.find((item) => {
      return item.id === index + 1;
    }).desc;

    member.name = specificName;
    member.position = specificPos;
    member.desc = specificDesc;
    return member;
  });

  return (
    <section id="team">
      <Container>
        <h2>
          <span className="bg-orange-400 px-1">Behind</span> the scenes
        </h2>
        <p className="lead">
          Enamel pin salvia tilde, twee godard food truck butcher cloud bread
          retro activated charcoal.
        </p>
        <Row>
          {newTeam.map((member) => {
            return (
              <Col key={member.id} lg={4}>
                <GatsbyImage
                  image={getImage(member.childImageSharp)}
                  alt={member.name}
                />
                <h3>{member.name}</h3>
                <p className="text-orange-400 lead">{member.position}</p>
                <p className="muted">{member.desc}</p>
              </Col>
            );
          })}
        </Row>
      </Container>
    </section>
  );
};
export const query = graphql`
  {
    allFile(filter: { relativeDirectory: { regex: "/team/" } }) {
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

export default Team;
