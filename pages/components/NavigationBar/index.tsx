import React, { useEffect, useState } from 'react';
import './styles.scss';
import { faBars, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Select from '../Select';
import { locations } from '../../../constant/data';
import Search from '../Search';
import { Col, Container, Row } from 'react-bootstrap';
// import { useViewport } from '../../../Ultils/CustomHooks';

const SearchNavigationBar: React.FC = () => {

  // const { width } = useViewport();

  const [isOverlay, setOverlay] = useState<boolean>(false);

  const responsiveNav = <div className="mobile-navbar">
    <Container>
      <Row>
        <Col lg={12} className="d-flex justify-content-between">
          <FontAwesomeIcon icon={faBars}></FontAwesomeIcon>
          <i className="cellphones-logo"></i>
          <i className="cart-icon"></i>
        </Col>
      </Row>
      <Row>
        <Col lg={12} className="d-flex justify-content-between">
          <Search />
        </Col>
      </Row>
    </Container>
  </div>

  return <>
    {<div className="navbar d-flex justify-content-center">
      <FontAwesomeIcon icon={faBars}></FontAwesomeIcon>
      <i className="cellphones-logo">

      </i>
      <Select
        options={locations}
        onSelected={() => { }}
        setOverlay={() => {
          console.log('click');
        }}
      />
      <Search />
      <div className="right-nav-infor ml-4">

        <div className="contact-wrapper">
          <FontAwesomeIcon icon={faPhone}></FontAwesomeIcon>
          <div className="contact-content">
            <p>Gọi mua hàng</p>
            <strong>1800.2097</strong>
          </div>
        </div>

        <div className="location-wrapper">
          <i className="location-icon"></i>
          <p>Tìm cửa hàng</p>
        </div>

        <div className="cart-wrapper">
          <i className="cart-icon"></i>
          <p>Giỏ hàng</p>
        </div>
      </div>
      <div className={isOverlay ? "page-overlay active" : "page-overlay"}></div>
    </div >}
  </>
}

export default SearchNavigationBar;