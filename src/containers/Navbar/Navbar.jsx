import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { getGnomesSearchRequest } from "./../../redux/actions/gnomes.actions";
import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";

export default () => {
  const { actualGnomes, search, professions } = useSelector(
    (state) => state.gnomes
  );
  const dispatch = useDispatch();
  const history = useHistory();

  const handleProfession = (profession) => {
    if (search !== profession) dispatch(getGnomesSearchRequest(profession));
    if (history.location.pathname !== "/") history.push("/");
  };

  const dispatchSearch = (event) => {
    event.preventDefault();
    if (history.location.pathname !== "/") history.push("/");
  };

  return (
    <Navbar sticky="top" bg="light" expand="lg">
      <Navbar.Brand onClick={() => history.push("/")} className="btn">
        BrastleWark
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <NavDropdown title="Professions" id="basic-nav-dropdown">
            {professions?.map((e) => (
              <NavDropdown.Item key={e} onClick={() => handleProfession(e)}>
                {e}
              </NavDropdown.Item>
            ))}
          </NavDropdown>
        </Nav>
        <div className="mr-2 mb-1">
          {actualGnomes?.length > 0 && `${actualGnomes.length} Results`}
        </div>
        <Form onSubmit={dispatchSearch} inline>
          <FormControl
            value={search}
            onChange={(e) => dispatch(getGnomesSearchRequest(e.target.value))}
            type="text"
            placeholder="Search..."
            className="mr-sm-2"
          />
          <Button type="submit" variant="outline-secondary">
            Search
          </Button>
        </Form>
      </Navbar.Collapse>
    </Navbar>
  );
};
