import express from "express";
import ReactDOM from "react-dom/server";
import { App } from "../App";
import { indexTemplate } from "./indexTemplate";
import axios from "axios";

const app = express();

let prevToken = '';

app.use("/static", express.static("./dist/client"));

app.get("/auth", (req, res) => {
    axios
    .post(
      "https://www.reddit.com/api/v1/access_token",
      `grant_type=authorization_code&code=${req.query.code}&redirect_uri=http://localhost:3000/auth`,
      {
        auth: {
          username: process.env.CLIENT_ID,
          password: "ecWzmyvQKzDnXicEIX5dCD9_A_gqYg",//secret
        },
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
      }
    )
    .then(({data}) => {
      // console.log('SERVER:',data);
      res.send(indexTemplate(ReactDOM.renderToString(App()), data['access_token']));
      prevToken = data["access_token"];
    })
    .catch(error => {
      res.send(indexTemplate(ReactDOM.renderToString(App()), prevToken));
      console.log(error);
    });
  });

  // app.get("/", (req, res) => {
  //   res.send(indexTemplate(ReactDOM.renderToString(App())));
  // });

  app.get("*", (req, res) => {
    res.send(indexTemplate(ReactDOM.renderToString(App()), prevToken));
  })

app.listen(3000, () => {
  console.log("server started on port http://localhost:3000");
});
