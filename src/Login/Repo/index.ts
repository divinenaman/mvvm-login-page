import db from "./db";
import { Input } from "../types";

const repo = {
  login(input: Input) {
    return (
      db.filter(
        (x) => x.username == input.username && x.password == input.password
      ).length != 0
    );
  },
};

export default repo;
