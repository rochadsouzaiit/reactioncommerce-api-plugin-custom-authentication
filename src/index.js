import pkg from "../package.json";
import tokenMiddleware from "./util/tokenMiddleware.js";

/**
 * @summary Registers the authentication plugin
 * @param {ReactionAPI} app The ReactionAPI instance
 * @returns {undefined}
 */
export default async function register(app) {
  await app.registerPlugin({
    label: "Authentication",
    name: "authentication",
    autoEnable: true,
    version: pkg.version,
    // collections: {
    //   users: {
    //     name: "users"
    //   }
    // },
    expressMiddleware: [
      {
        route: "graphql",
        stage: "authenticate",
        fn: tokenMiddleware
      }
    ]
  });
}
