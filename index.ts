import { Hooks } from "@yarnpkg/core";
import Dotenv from "dotenv-mono";

const env = new Dotenv().load();

export const hooks: Hooks = {
  async setupScriptEnvironment(_project, scriptEnv) {
    Object.entries(env).forEach(([k, v]) => {
      if(!scriptEnv[k]) {
        scriptEnv[k] = v;
      }
    })
  },
};
