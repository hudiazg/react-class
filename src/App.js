import React from "react";
import { Route, Switch, Link } from "wouter";
import "./App.css";
import Home from "./pages/home/Index";
import SearchResults from "./pages/search-results/Index";
import Detail from "./pages/detail/Index";
import LoginPage from "./pages/login/Index";
import { GifsContextProvider } from "./context/GifContextProvider";
import { UserContextProvider } from "./context/UserContext";
import { Container, Header, Content } from "rsuite";
import HeaderApp from "./components/header-app/Index";
import "rsuite/dist/rsuite.min.css";

function App() {
  return (
    <div className="App">
      <Container>
        <UserContextProvider>
          <Header>
            <HeaderApp />
          </Header>
          <Content>
            <GifsContextProvider>
              <Switch>
                <Route path="/" component={Home} />
                <Route path="/Login" component={LoginPage} />
                <Route
                  path="/SearchResults/:keyword"
                  component={SearchResults}
                />
                <Route path="/Detail/:id" component={Detail} />
                <Route path="/:anything*">
                  <div>
                    <center>
                      <h1>Page not found :(</h1>
                    </center>
                  </div>
                </Route>
              </Switch>
            </GifsContextProvider>
          </Content>
        </UserContextProvider>
      </Container>
    </div>
  );
}

export default App;
