import React from "react";
import { Button, Card, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

export const Hero = () => {
  return (
    <div className="py-5">
      <Container className="d-flex justify-content-center">
        <Card className="p-5 d-flex flex-column align-items-center hero-card bg-light w-75">
          <h1 className="text-center mb-4">MERN Authentication</h1>
          <p className="text-center mb-4">
            This is a boilerplate for MERN Authentication that stores a JWT in
            an Http-Only cookie. It also uses Redux toolkit and React bootstrap
            library
          </p>
          <div className="d-flex">
            <Link to="/login">
              <Button className="me-3" variant="primary">
                Sign In
              </Button>
            </Link>
            <Link to="/register">
              <Button className="me-3" variant="secondary">
                Sign Up
              </Button>
            </Link>
          </div>
        </Card>
      </Container>
    </div>
  );
};
