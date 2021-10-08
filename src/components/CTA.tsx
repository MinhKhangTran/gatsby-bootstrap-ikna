import { GatsbyImage, getImage } from "gatsby-plugin-image";
import React, { useEffect, useState } from "react";
import { Container, Button, Row, Col } from "react-bootstrap";

interface IUsers {
  results: IPhotos[];
}
interface IPhotos {
  picture: {
    large: string;
    medium: string;
    thumbnail: string;
  };
}

const CTA = () => {
  // Fetch data from randomuser api
  const [users, setUsers] = useState<IPhotos[]>([]);
  useEffect(() => {
    const fetchUser = async () => {
      const data: IUsers = await (
        await fetch("https://randomuser.me/api/?results=9&inc=picture")
      ).json();
      setUsers(data.results);
    };
    fetchUser();
  }, []);

  return (
    <section id="cta" className="bg-orange-100">
      <Container>
        <h2 className="text-center display-4">
          Join thousands of other{" "}
          <span className="bg-orange-400 px-1">satisfied</span> students
        </h2>
        <div className="users_wrapper mt-5">
          {users.map((user, index) => {
            return (
              <div className="user">
                <img src={user.picture.thumbnail} alt={`user ${index}`} />
              </div>
            );
          })}
        </div>
        <div className="button_wrapper d-flex justify-content-center mt-4">
          <Button href="#" size="lg" className="text-white fw-bold mx-auto">
            Join Now
          </Button>
        </div>
      </Container>
    </section>
  );
};

export default CTA;
