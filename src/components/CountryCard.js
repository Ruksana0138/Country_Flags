import React from 'react';
import { Card } from 'react-bootstrap';

const CountryCard = ({ country }) => {
  return (
    <Card className="h-100 shadow-sm border-0 overflow-hidden">
      <div style={{ height: '160px', overflow: 'hidden' }}>
        <Card.Img 
          variant="top" 
          src={country.flag} 
          alt={country.name}
          style={{ objectFit: 'cover', height: '100%', width: '100%' }}
        />
      </div>
      <Card.Body>
        <Card.Title className="fw-bold">{country.name}</Card.Title>
        <Card.Text className="text-muted">
          {country.region}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default CountryCard;