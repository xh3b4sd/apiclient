import logo from './logo.svg';
import './App.css';
import * as grpcWeb from "grpc-web";
import * as proto from "xh3b4sd/tscode/pkg/pbf/post";

function App() {
  // What is going on here?
  const client = new proto.post.APIClient("http://0.0.0.0:7777");

  const request = new CreateI();
  request.setName("create input");

  client.create(request, {}, (err, response) => {
    if (err) {
      console.error(err);
    } else {
      console.log(response);
    }
  });

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
