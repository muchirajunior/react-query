import { BrowserRouter as Router, Routes, Route  } from "react-router-dom";
import { Home } from "./views/home";
import { TanstackExample } from "./views/tanstack_example";
import { Layout } from "./layout";
function App() {

  return (
    <>

      <Router>
        <Routes>
          <Route path="/" element={ <Layout component={ <Home />} />} />
          <Route path="/example" element={<Layout component={ <TanstackExample />} />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
