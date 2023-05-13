import express from "express";
import ReactDOM from "react-dom/server";
import { App } from "../App.tsx";
import { indexTemplate } from './indexTemplate';
import { generateRandomString } from "../utils/react/generateRandomIndex";
import { auth, createHash, createSession, deleteSession, findUserByUsername } from "./apiMethods";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import knex from "knex";

export const database = knex({
  client: "sqlite3",
  useNullAsDefault: true,
  connection: {
    filename: './data/db.sqlite3'
  },
})

const app = express();

app.use(express.json());
app.use("/static", express.static("./dist/client"));
app.use(cookieParser());

app.get("/", auth(), (req, res) => {
  res.send(indexTemplate(ReactDOM.renderToString(App()), JSON.stringify(req.user ? req.user : {})));
});

app.post("/login", bodyParser.urlencoded({ extended: false }), async (req, res) => {
  const { username, password } = req.body;
  const user = await findUserByUsername(username);

  if (!user || user.password !== createHash(password))
    return res.send(indexTemplate(ReactDOM.renderToString(App()), {}));

  const sessionId = await createSession(user.id);
  res
    .cookie("sessionId", sessionId, { httpOnly: true })
    .send(indexTemplate(ReactDOM.renderToString(App()), JSON.stringify(user)));
});

app.get("/logout", auth(), async (req, res) => {
  await deleteSession(req.sessionId);
  res.clearCookie("sessionId").send(indexTemplate(ReactDOM.renderToString(App()), {}));
});

app.post("/signup", bodyParser.urlencoded({ extended: false }), async (req, res) => {
  const { username, password } = req.body;

  if (username.length === 0 || password.length === 0)
    return res.send(indexTemplate(ReactDOM.renderToString(App()), {}));

  if ((await findUserByUsername(username)) && username === (await findUserByUsername(username)).username)
    return res.send(indexTemplate(ReactDOM.renderToString(App()), {}));

  await database('users').insert({
    id: generateRandomString(),
    username: username,
    password: createHash(password)
  })

  res.send(indexTemplate(ReactDOM.renderToString(App()),JSON.stringify({})));
});

app.post("/user/:username", auth(), async (req, res) => {
  const user = await database('users')
    .select()
    .where({ username: req.params.username })
    .first()

  res.send(indexTemplate(ReactDOM.renderToString(App()), JSON.stringify(user)));
});

app.post("/updateUserData", auth(), bodyParser.urlencoded({ extended: false }), async (req, res) => {
  const { city, university, age } = req.body

  await database('users')
    .where({ id: req.user.id })
    .update({
      city: city,
      university: university,
      age: age
    })

  res.send(indexTemplate(ReactDOM.renderToString(App()), JSON.stringify(req.user)));
});

app.get("*", auth(), (req, res) => {
  res.send(indexTemplate(ReactDOM.renderToString(App()), JSON.stringify(req.user ? req.user : {})));
});

app.listen(3000, () => {
  console.log("server started on port http://localhost:3000");
});
