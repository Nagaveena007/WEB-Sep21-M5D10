import React from "react";
import { Row, Col } from "react-bootstrap";
import { useState, useEffect } from "react";
import { connect } from "react-redux";
import { setDefaultHome } from "../redux/actions";

const mapStateToProps = (state) => ({
  searchCity: state.search.content,
});
const mapDispatchToProps = (dispatch) => ({
  setFreshHome: (cityId) => {
    dispatch(setDefaultHome(cityId));
  },
});

const Home = ({ searchCity, setFreshHome }) => {
  const params = useParams();

  useEffect(() => {
    setFreshHome(params.id);
  }, [params.id]);
  return(
    
  )
};
export default connect(mapStateToProps, mapDispatchToProps)(Home);
