import { BrowserRouter as Router, Routes, Route  } from "react-router-dom";
import { Home } from "./views/home";
import { TanstackExample } from "./views/tanstack_example";
import { Layout } from "./layout";
import { Todos } from "./views/todos";

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="*" element={ <Layout component={ <Home />} />} />
          <Route path="/example" element={<Layout component={ <TanstackExample />} />} />
          <Route path="/todos" element={<Layout component={ <Todos />} />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
