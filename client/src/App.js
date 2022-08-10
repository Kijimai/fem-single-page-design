import Navigator from "./components/Navigator/Navigator"
import Main from "./components/Main/Main"
import "./styles/app.css"

function App() {
  return (
    <div className="App">
      <Navigator />
      <main>
        <Main />
      </main>
      <Navigator />
    </div>
  )
}

export default App
