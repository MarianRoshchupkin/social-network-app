import ReactDOM from "react-dom/server";
import { App } from "../App";
import { generateRandomString } from "../utils/react/generateRandomIndex";
import { indexTemplate } from "./indexTemplate";
import { database } from "./server";
import crypto from "crypto";

export const auth = () => async (req, res, next) => {
  if (!req.cookies['sessionId'])
    return next();

  req.user = await findUserBySessionId(req.cookies['sessionId']);
  req.sessionId = req.cookies["sessionId"];
  next();
};

export const findUserByUsername = async (username) =>
  database('users')
    .select()
    .where({ username })
    .first()

export const findUserBySessionId = async (sessionId) => {
  const session = await database('sessions')
    .select('userId')
    .where({ sessionId: sessionId })
    .first()

  if (!session) return;

  return database('users')
    .select()
    .where({ id: session.userId })
    .first()
};

export const createSession = async (userId) => {
  const sessionId = generateRandomString();

  await database('sessions').insert({
    userId: userId,
    sessionId: sessionId,
  })

  return sessionId;
};

export const deleteSession = async (sessionId) => {
  await database('sessions').where({ sessionId: sessionId }).delete();
};

export const createHash = (password) => {
  const hash = crypto.createHash("sha256");
  return hash.update(password).digest("hex");
};
