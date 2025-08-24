import { useState, useEffect } from "react";
import {
  Container,
  Card,
  Button,
  Spinner,
  Alert,
  CardBody,
  CardText,
  CardSubtitle,
} from "react-bootstrap";

function App() {
  const [state, setState] = useState({
    data: null,
    loading: true,
    error: null,
  });

  const url = "https://dummyjson.com/quotes/random";

  const getQuote = async () => {
    setState({
      data: null,
      loading: true,
      error: null,
    });

    try {
      const response = await fetch(url);
      const gotQuote = await response.json();
      setState({
        data: gotQuote,
        loading: false,
        error: null,
      });
    } catch (err) {
      setState({
        data: null,
        loading: false,
        error: "Failed to fetch the data",
      });
    }
  };

  useEffect(() => {
    getQuote();
  }, [url]);

  return (
    <Container className="d-flex flex-column align-items-center mt-5">
      {state.loading && <Spinner animation="border" />}
      {state.error && <Alert variant="danger">{state.error}</Alert>}

      {state.data && (
        <Card style={{ width: "30rem" }} className="text-center mb-3">
          <CardBody>
            <CardText>"{state.data.quote}"</CardText>
            <CardSubtitle className="mt-2 text-muted">
              - {state.data.author}
            </CardSubtitle>
          </CardBody>
        </Card>
      )}
      <Button variant="primary" onClick={getQuote} disabled={state.loading}>
        {state.loading ? "Fetching..." : "Getting Another Quote"}
      </Button>
    </Container>
  );
}

export default App;
