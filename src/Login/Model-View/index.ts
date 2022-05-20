import { makeAutoObservable } from "mobx";
import Repo from "../Repo";
import { Input } from "../types";

interface Handler {
  handle: (i: any) => void;
}

class Login implements Handler {
  isLoggedIn = false;
  username: string = "";
  password: string = "";
  next: Handler | null = null;
  errorText = "";

  constructor() {
    makeAutoObservable(this);
  }

  handle() {
    let res = this.validate();

    if (res) {
      res = Repo.login({ username: this.username, password: this.password });
      if (res) {
        const status = { token: "abcd" };
        this.isLoggedIn = true;
        if (this.next) {
          this.next.handle(status);
        }
      }
    }
  }

  setUsername(u: string) {
    this.username = u;
  }

  setPassword(p: string) {
    this.password = p;
  }

  validate() {
    let count: number = 0;

    if (this.username.length == 0) {
      this.errorText = "Username cannot be empty";
      count++;
    }
    if (this.password.length == 0) {
      this.errorText = "Password cannot be empty";
      count++;
    }

    return count == 0;
  }

  addNext(n: any) {
    this.next = n;
    return n;
  }
}

class AppState implements Handler {
  token: string | null = null;

  constructor() {
    makeAutoObservable(this);
  }

  handle(input: any) {
    this.token = input.token;
  }
}

export { AppState, Login };
