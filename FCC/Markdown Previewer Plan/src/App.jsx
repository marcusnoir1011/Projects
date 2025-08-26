import { useState } from "react";
import { marked } from "marked";
import { Container, Row, Col, Button } from "react-bootstrap";
import "./App.css";

function App() {
  const [input, setInput] = useState(`# H1 Heading
## H2 Heading
Here is some **bold text** and a [link](https://example.com).
- List item 1
> Blockquote
\`inline code\`
\`\`\`
console.log('code block');
\`\`\`
![Alt text](https://via.placeholder.com/150)`);

  const handleChange = (event) => {
    setInput(event.target.value);
  };

  const clearText = () => {
    setInput("");
  };

  const markedText = marked(input);

  return (
    <Container className="vh-100 d-flex flex-column justify-content-center">
      <Row className="mb-4">
        <h2 className="text-center text-primary fw-bold">
          Markdown Previewer Plan
        </h2>
      </Row>
      <Row className="g-4">
        <Col md={6}>
          <textarea
            id="editor"
            className="form-control shadow-sm rounded-3"
            rows={15}
            value={input}
            onChange={handleChange}
          ></textarea>
        </Col>
        <Col md={6}>
          <div
            id="preview"
            className="border p-3 bg-light shadow-sm rounded-3"
            dangerouslySetInnerHTML={{ __html: markedText }}
          />
        </Col>
      </Row>
      <Row className="mt-3">
        <Col className="text-end">
          <Button variant="danger" className="shadow-sm" onClick={clearText}>
            Clear
          </Button>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
