import { ConnectedRouter } from "connected-react-router";
import React from "react";
import { Route } from "react-router";
import ContextAPI from "./pages/ContextAPI";
import HtmlTest from "./pages/HtmlTest";
import Main from "./pages/Main";
import Maps from "./pages/Maps";
import TextEditor from "./pages/TextEditor";
import { history } from "./redux/store.js";

function App() {
  return (
    <ConnectedRouter history={history}>
      <Route path="/" component={Main} />
      <Route path="/maps" component={Maps} />
      <Route path="/contextapi" component={ContextAPI} />
      <Route path="/texteditor" component={TextEditor} />
      <Route path="/htmltest" component={HtmlTest} />
    </ConnectedRouter>
  );
}

export default App;
