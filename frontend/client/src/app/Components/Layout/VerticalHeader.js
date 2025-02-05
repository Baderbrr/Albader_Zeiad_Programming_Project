import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { BsDot } from "react-icons/bs";
import { Link } from "react-router-dom";
import { logout } from "../../../features/loginSlice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

function VerticalHeader() {
  const dispatch = useDispatch();
  const { id } = useSelector((state) => state.authUserData.userData);

  const logoutHandle = () => {
    dispatch(logout());
    window.location.reload();
  };

  return (
    <Col className="VerticalHeader">
      <Row className="mb-5 Logo" style={{ color: "#2c3e50" }}>Chatter</Row>
      <Row>
        <p>
          <BsDot size={32} color="#5a6d8a" />
          <Link
            to="/"
            style={{ textDecoration: "none", color: "#2c3e50" }}
            onMouseOver={(e) => (e.target.style.color = "#1d3557")}
            onMouseOut={(e) => (e.target.style.color = "#2c3e50")}
          >
            Home
          </Link>
        </p>
        <p>
          <BsDot size={32} color="#5a6d8a" />
          <Link
            to="/chat"
            style={{ textDecoration: "none", color: "#2c3e50" }}
            onMouseOver={(e) => (e.target.style.color = "#1d3557")}
            onMouseOut={(e) => (e.target.style.color = "#2c3e50")}
          >
            Chat
          </Link>
        </p>
        <p>
          <BsDot size={32} color="#5a6d8a" />
          <Link
            to={`/profile/${id}`}
            style={{ textDecoration: "none", color: "#2c3e50" }}
            onMouseOver={(e) => (e.target.style.color = "#1d3557")}
            onMouseOut={(e) => (e.target.style.color = "#2c3e50")}
          >
            Profile
          </Link>
        </p>
        <p>
          <BsDot size={32} color="#5a6d8a" />
          <Link
            to={`/friend_requests`}
            style={{ textDecoration: "none", color: "#2c3e50" }}
            onMouseOver={(e) => (e.target.style.color = "#1d3557")}
            onMouseOut={(e) => (e.target.style.color = "#2c3e50")}
          >
            Requests
          </Link>
        </p>
        <p>
          <BsDot size={32} color="#5a6d8a" />
          <Link
            onClick={logoutHandle}
            style={{ textDecoration: "none", color: "#2c3e50", cursor: "pointer" }}
            onMouseOver={(e) => (e.target.style.color = "#1d3557")}
            onMouseOut={(e) => (e.target.style.color = "#2c3e50")}
          >
            Logout
          </Link>
        </p>
      </Row>
    </Col>
  );
}

export default VerticalHeader;
