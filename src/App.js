import React from "react";
import './App.css'
import { HashRouter, Route } from 'react-router-dom';
import About from './routes/About';
import Home from './routes/Home';
import Navigation from "./components/Navigation";
import Detail from "./routes/Detail";

function App(){
  return (
    <HashRouter>
      <Navigation />
      <Route path="/" exact={true} component={Home} /> {/* 기본으로 보여줄 컴포넌트, path props가 정확히 / 인 경우에만 Home 컴포넌트 출력 */}
      <Route path="/about" component={About} />
      <Route path="/movie-detail" component={Detail} />
    </HashRouter>
  );
}

export default App;