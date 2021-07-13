import axios from "axios";
import config from "../config.js";
/**
 * Given an Authorization Bearer token and the current context, returns the user document
 * for that token after performing token checks.
 *
 * If the provided token is not associated with any user or is associated but is
 * expired, this function throws an "access-denied" ReactionError.
 *
 * @name getUserFromAuthToken
 * @method
 * @summary Looks up a user by token
 * @param {String} loginToken Auth token
 * @returns {Object} The user associated with the token
 */
async function getUserFromAuthToken(loginToken) {
  const { GET_IDENTITY_FROM_TOKEN_URL } = config;
  const resp = await axios.get(GET_IDENTITY_FROM_TOKEN_URL, {
    headers: { Authorization: loginToken }
  });

  return resp.data;
}

export default getUserFromAuthToken;
