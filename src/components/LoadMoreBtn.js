import React from 'react';
import { Button, Spinner } from 'react-bootstrap';

const LoadMoreBtn = ({ isLoading, onClick }) => {
  return (
    <div className="text-center my-5">
      <Button 
        variant="outline-primary" 
        onClick={onClick}
        disabled={isLoading}
        className="px-5 py-2"
      >
        {isLoading ? (
          <>
            <Spinner
              as="span"
              animation="border"
              size="sm"
              role="status"
              aria-hidden="true"
              className="me-2"
            />
            Loading...
          </>
        ) : 'Load More'}
      </Button>
    </div>
  );
};

export default LoadMoreBtn;