function App() {
  return (
    <div>
      <Header />
      <Body author={ author } />
      <Footer text={ footerText } />
    </div>
  )
}

function Header() {
  const title = "Here is the title you told me to make"
  return (
    <h3>{title}</h3>
  )
}

function Body(props) {
  return (
    <div>
      <p>{props.author.name}</p>
      <p>{props.author.phone}</p>
      <p>{props.author.email}</p>
    </div>
  )
}

var footerText = "Footer Text Whaaaaaat??"
var author = {
  name: "John Doe",
  phone: "111-111-1111",
  email: "email@email.com"
}

function Footer(props) {
  return (
    <div>
      <h4>{props.text}</h4>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('react-container'))
