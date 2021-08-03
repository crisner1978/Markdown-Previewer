import "./App.css";
import { FormGroup, FormLabel } from "react-bootstrap";
import { useState, useEffect } from "react";

const initialText = `# Header H1

Roses are red,   
violets are blue.

## Sub Header H2
![Alt text](https://images.unsplash.com/photo-1491604612772-6853927639ef?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXw0OTI3NDQ3fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=300&q=60)

>This is a blockquote

[Google](http://google.com)

**Bold**

### List Items
- HTML
- CSS
- Javascript

\`\`\`
function(number) {
  return number + 2;}
\`\`\`

\`functionFcc()\` 
`;

const App = () => {
  let marked = require("marked");
  const [text, setText] = useState("");

  useEffect(() => {
    setText(initialText);
  }, []);

  return (
    <div className="App container-fluid row">
      <div className="col-sm-12 col-md-6 pt-5 text-center">
        <FormGroup id="formTextArea">
          <h1>Markdown Input</h1>
          <textarea
            id="editor"
            className="form-control mt-3"
            placeholder="Enter Your Markdown"
            value={text}
            onChange={(e) => setText(e.target.value)}
            rows="10">
            `${initialText}`
          </textarea>
          <FormLabel>Leave your mark</FormLabel>
        </FormGroup>
      </div>
      <div className="col-sm-12 col-md-6 pt-5 text-center">
        <h1>Markdown Output</h1>
        <div
          id="preview"
          dangerouslySetInnerHTML={{ __html: marked(text, { breaks: true }) }}
          className="mt-3 bg-light text-dark"></div>
      </div>
    </div>
  );
};

export default App;
