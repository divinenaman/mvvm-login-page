import "./App.css";
import LoginPage from "./Login/View";

import { Login, AppState } from "./Login/Model-View";
import { observer } from "mobx-react-lite";

interface Stores {
  loginStore: any;
  appStore: any;
}

const Router = observer(({ loginStore, appStore }: Stores) => {
  return (
    <>
      {loginStore.isLoggedIn ? (
        <>
          <p>Logged In</p>
          <p>{"token: " + appStore.token}</p>
        </>
      ) : (
        <LoginPage loginStore={loginStore} appStore={appStore} />
      )}
    </>
  );
});

function App() {
  const login = new Login();
  const appState = new AppState();

  login.addNext(appState);

  return (
    <div className="App">
      <Router loginStore={login} appStore={appState} />
    </div>
  );
}

export default App;
