import { useState, useEffect } from "react";
import { Container, Row, Col, Button, Card, Spinner } from "react-bootstrap";
import "./App.css";

function App() {
  const url = "https://dummyjson.com/quotes/random";

  const [quote, setQuote] = useState("...");
  const [author, setAuthor] = useState("...");
  const [err, setErr] = useState(null);
  const [loading, setLoading] = useState(true);

  const getData = async () => {
    setLoading(true);
    setErr(null);
    try {
      const response = await fetch(url);
      const qutoesData = await response.json();
      setQuote(qutoesData.quote);
      setAuthor(qutoesData.author);
    } catch (err) {
      setErr(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, [url]);

  return (
    <Container className="vh-100 d-flex flex-column justify-content-center align-items-center">
      <Card
        className="w-75 w-md-50 shadow-sm rounded-3"
        style={{ minHeight: "200px" }}
      >
        <Card.Body className="d-flex flex-column justify-content-center text-center">
          {loading ? (
            <div className="d-flex justify-content-center">
              <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
              </Spinner>
            </div>
          ) : (
            <>
              <Card.Text className="fs-5">"{quote}"</Card.Text>
              <Card.Subtitle className="text-muted mt-2">
                - {author}
              </Card.Subtitle>
            </>
          )}
        </Card.Body>

        <div className="d-flex justify-content-end p-3">
          <Button
            className="shadow-sm rounded-3"
            onClick={getData}
            disabled={loading}
          >
            {loading ? "Loading..." : "New Quote"}
          </Button>
        </div>
      </Card>
      {err && (
        <p className="text-danger mt-3">
          Something went wrong. Please try again.
        </p>
      )}
    </Container>
  );
}

export default App;
