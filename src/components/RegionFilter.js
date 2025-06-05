import React from 'react';
import { Form } from 'react-bootstrap';

const RegionFilter = ({ regions, onFilterChange }) => {
  return (
    <div className="d-flex justify-content-center my-4">
      <Form.Select 
        style={{ width: '250px' }}
        onChange={(e) => onFilterChange(e.target.value)}
        aria-label="Filter by region"
        className="shadow-sm"
      >
        {regions.map(region => (
          <option key={region} value={region}>
            {region || 'Unknown Region'}
          </option>
        ))}
      </Form.Select>
    </div>
  );
};

export default RegionFilter;