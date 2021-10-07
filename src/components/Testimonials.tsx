import React from "react";
import { Container } from "react-bootstrap";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaQuoteLeft, FaStar } from "react-icons/fa";
import { useMediaQuery } from "../helper/useMediaQuery";

const Testimonials = () => {
  let isPageWide = useMediaQuery("(min-width: 992px)");
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: isPageWide ? 2 : 1,
    slidesToScroll: isPageWide ? 2 : 1,
    initialSlide: 0,
  };
  const testiArray = [
    {
      id: 1,
      company: "Firma",
      quote:
        "Banjo single-origin coffee hashtag, live-edge tumblr yr keffiyeh synth PBR&B kitsch lomo poke. Meggings fingerstache hexagon four dollar toast. Chia humblebrag green juice blue bottle retro chillwave pok pok wayfarers butcher offal echo park subway tile ugh poutine. Helvetica live-edge organic, actually subway tile crucifix pitchfork vexillologist marfa mustache narwhal pinterest freegan trust fund.",
      client: "john doe",
    },
    {
      id: 2,
      company: "Company",
      quote:
        "Banjo single-origin coffee hashtag, live-edge tumblr yr keffiyeh synth PBR&B kitsch lomo poke. Meggings fingerstache hexagon four dollar toast. Chia humblebrag green juice blue bottle retro chillwave pok pok wayfarers butcher offal echo park subway tile ugh poutine. Helvetica live-edge organic, actually subway tile crucifix pitchfork vexillologist marfa mustache narwhal pinterest freegan trust fund.",
      client: "matt brad",
    },
    {
      id: 3,
      company: "Unternehmen",
      quote:
        "Banjo single-origin coffee hashtag, live-edge tumblr yr keffiyeh synth PBR&B kitsch lomo poke. Meggings fingerstache hexagon four dollar toast. Chia humblebrag green juice blue bottle retro chillwave pok pok wayfarers butcher offal echo park subway tile ugh poutine. Helvetica live-edge organic, actually subway tile crucifix pitchfork vexillologist marfa mustache narwhal pinterest freegan trust fund.",
      client: "kevin dev",
    },
    {
      id: 4,
      company: "Enterprise",
      quote:
        "Banjo single-origin coffee hashtag, live-edge tumblr yr keffiyeh synth PBR&B kitsch lomo poke. Meggings fingerstache hexagon four dollar toast. Chia humblebrag green juice blue bottle retro chillwave pok pok wayfarers butcher offal echo park subway tile ugh poutine. Helvetica live-edge organic, actually subway tile crucifix pitchfork vexillologist marfa mustache narwhal pinterest freegan trust fund.",
      client: "maria doe",
    },
  ];
  return (
    <section id="testimonials" className="bg-orange-100">
      <Container>
        <h2>
          <span className="bg-orange-400 px-1">Happy</span> clients quotes
        </h2>
        <p className="lead">
          Enamel pin salvia tilde, twee godard food truck butcher cloud bread
          retro activated charcoal.
        </p>
        <Slider className="mt-5" {...settings}>
          {testiArray.map((testimonial) => {
            const { id, company, quote, client } = testimonial;
            return (
              <div key={id} className="company ps-5">
                <h3 className="d-flex align-items-center">
                  {company}{" "}
                  {Array.from({ length: 5 }, (_, index) => {
                    return (
                      <FaStar
                        className="testi_icon text-orange-400"
                        key={index}
                      />
                    );
                  })}
                </h3>
                <p className="muted">{quote}</p>
                <FaQuoteLeft
                  size="1.5em"
                  className="text-orange-400 testi_quote"
                />
                <p className="lead">- {client}</p>
              </div>
            );
          })}
        </Slider>
      </Container>
    </section>
  );
};

export default Testimonials;
