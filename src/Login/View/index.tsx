import { observer } from "mobx-react-lite";

interface Stores {
  loginStore: any;
  appStore: any;
}

const Login = observer(({ loginStore, appStore }: Stores) => {
    return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <p>{loginStore.errorText}</p>
      <div style={{ display: "flex", flexDirection: "column", maxWidth: 400 }}>
        <input
          placeholder="usernane"
          value={loginStore.username}
          onChange={(x) => loginStore.setUsername(x.target.value)}
        />
        <input
          placeholder="password"
          value={loginStore.password}
          onChange={(x) => loginStore.setPassword(x.target.value)}
        />
        <button onClick={() => loginStore.handle()}>{"Submit"}</button>
      </div>
    </div>
  );
});

export default Login;
