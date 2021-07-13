import envalid from "envalid";

const { str } = envalid;

export default envalid.cleanEnv(process.env, {
  GET_IDENTITY_FROM_TOKEN_URL: str({ devDefault: "http://localhost:3001/users/me" })
}, {
  dotEnvPath: null
});
