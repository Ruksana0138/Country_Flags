import React, { useState } from 'react';
import { Carousel, Card } from 'react-bootstrap';
import { ChevronLeft, ChevronRight } from 'react-bootstrap-icons';

const CountrySlider = ({ countries }) => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  if (!countries.length) return null;

  return (
    <div className="position-relative mb-5">
      <Carousel 
        activeIndex={index} 
        onSelect={handleSelect}
        indicators={false}
        prevIcon={<ChevronLeft className="text-dark" size={24} />}
        nextIcon={<ChevronRight className="text-dark" size={24} />}
        interval={null}
      >
        {countries.map(country => (
          <Carousel.Item key={country.name}>
            <Card className="border-0 shadow">
              <div className="d-md-flex">
                <div className="col-md-6 p-0">
                  <Card.Img 
                    variant="top" 
                    src={country.flag} 
                    alt={country.name}
                    className="slider-img"
                  />
                </div>
                <div className="col-md-6 p-4 d-flex flex-column justify-content-center bg-light">
                  <Card.Title className="fs-2 fw-bold">{country.name}</Card.Title>
                  <Card.Text className="text-muted">
                    {country.region}
                  </Card.Text>
                </div>
              </div>
            </Card>
          </Carousel.Item>
        ))}
      </Carousel>
      
      <div className="d-flex justify-content-center mt-3">
        {countries.map((_, i) => (
          <button
            key={i}
            className={`mx-1 p-2 rounded-circle ${i === index ? 'bg-primary' : 'bg-secondary'}`}
            style={{
              width: '12px',
              height: '12px',
              border: 'none'
            }}
            onClick={() => handleSelect(i)}
            aria-label={`Slide ${i+1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default CountrySlider;