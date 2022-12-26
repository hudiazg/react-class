import { Grid, Row, Col } from "rsuite";
import { Link } from "wouter";
import useUser from "../../hook/useUser";

export default function HeaderApp() {
  const { isLogged, logout } = useUser();

  const handleCLick = (e) => {
    e.preventDefault();
    logout();
  };

  return (
    <Grid fluid>
      <Row className="show-grid">
        <Col xs={6}>
          <Link to="/">
            <h2>My firts app</h2>
          </Link>
        </Col>
        <Col xs={6} xsPush={16}>
          {isLogged ? (
            <Link onClick={handleCLick} href="#">
              Logout
            </Link>
          ) : (
            <Link to="/login">Login</Link>
          )}
        </Col>
      </Row>
    </Grid>
  );
}
