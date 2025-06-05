
import React, { useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCountries, setRegionFilter, loadMore } from '../features/countriesSlice';
import CountrySlider from '../components/CountrySlider';
import CountryCard from '../components/CountryCard';
import LoadMoreBtn from '../components/LoadMoreBtn';
import { FaGoogle, FaLinkedin, FaFacebook } from 'react-icons/fa';

const Home = () => {
  const dispatch = useDispatch();
  const {
    filteredData,
    currentPage,
    itemsPerPage,
    status,
    regionFilter // ✅ added
  } = useSelector(state => state.countries);

  useEffect(() => {
    dispatch(fetchCountries());
  }, [dispatch]);

  const visibleCountries = filteredData.slice(0, currentPage * itemsPerPage);

  return (
    <Container className="py-4">
      {/* Header Section */}
      <Row className="align-items-center mb-4">
        <Col xs={6}>
          <h4 className="fw-bold">Countries</h4>
        </Col>
        <Col xs={6} className="d-flex justify-content-end gap-4">
          {['All', 'Asia', 'Europe'].map(region => (
            <span
              key={region}
              onClick={() => dispatch(setRegionFilter(region))}
              style={{
                cursor: 'pointer',
                borderBottom: regionFilter === region ? '2px solid black' : 'none',
                color: regionFilter === region ? 'black' : '#6c757d',
                fontWeight: regionFilter === region ? 'bold' : 'normal',
                paddingBottom: '2px'
              }}
            >
              {region}
            </span>
          ))}
        </Col>
      </Row>

      {/* Welcome Divider */}
      <div className="d-flex align-items-center justify-content-center mb-4 position-relative" style={{ height: '3rem' }}>
        <div
          style={{
            position: 'absolute',
            left: 0,
            top: '0',
            width: '30%',
            border: '1px solid black',
            margin: 0
          }}
        />
        <h1 className="mx-3 fw-bold mb-0" style={{ lineHeight: '3rem', position: 'relative', zIndex: 1 }}>
          WELCOME
        </h1>
        <div
          style={{
            position: 'absolute',
            right: 0,
            bottom: '0',
            width: '30%',
            border: '1px solid black',
            margin: 0
          }}
        />
      </div>

      <CountrySlider countries={visibleCountries.slice(0, 4)} />

      <Row xs={1} md={2} lg={3} className="g-4 mt-4">
        {visibleCountries.map(country => (
          <Col key={country.name}>
            <CountryCard country={country} />
          </Col>
        ))}
      </Row>

      {currentPage * itemsPerPage < filteredData.length && (
        <LoadMoreBtn
          isLoading={status === 'loading'}
          onClick={() => dispatch(loadMore())}
        />
      )}

      {/* Footer */}
      <footer className="text-center mt-5 pt-4 border-top">
        <div className="d-flex justify-content-center gap-4 mb-3">
          <FaGoogle size={24} style={{ cursor: 'pointer' }} />
          <FaLinkedin size={24} style={{ cursor: 'pointer' }} />
          <FaFacebook size={24} style={{ cursor: 'pointer' }} />
        </div>
        <p className="mb-1 text-muted">example@email.com</p>
        <p className="text-muted">Copyright &copy; 2020 Name. All Rights Reserved</p>
      </footer>
    </Container>
  );
};

export default Home;


