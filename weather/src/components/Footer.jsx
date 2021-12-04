import { Row } from "react-bootstrap";
const Footer = () => {
  return (
    <div className="bg-dark text-white container-fluid fixed-bottom bg-container pt-4 ">
      <Row>
        <div className="col-lg-10 offset-lg-2">
          Supplier of Achilles UVDB community © 2012 — 2021 OpenWeather ® All
          rights reserved
        </div>
      </Row>
    </div>
  );
};
export default Footer;
