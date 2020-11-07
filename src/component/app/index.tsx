import React from "react";

import logo from "asset/logo.svg";

import tscode from "@xh3b4sd/tscode";

import "./index.css";

type Props = {};

export function Component(props: Props) {
  {
    const client = new tscode.Post.Client("http://127.0.0.1:7777");

    const req = new tscode.Post.Create.I();
    req.setName("create input");

    client.create(req, {}, function (err, response) {
      if (err) {
        console.log(err.code);
        console.log(err.message);
      } else {
        console.log(response.getMessage());
      }
    });
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
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
