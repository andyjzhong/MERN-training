var footerText = "Footer Text Whaaaaaat??"
var author = {
  name: "John Doe",
  phone: "111-111-1111",
  email: "email@email.com"
}

const divStyle = {
    backgroundColor: 'lightgrey',
    margin: '0px',
    padding: '5px',
    textAlign: 'center',
};

function App() {
  return (
    <div className={'boxed'}>
      <Header />
      <Body author={ author } />
      <FragTest />
      <Footer text={ footerText } />
    </div>
  )
}

function Header() {
  const title = "Here is the title you told me to make"
  return (
    <h3 style={divStyle} >{title}</h3>
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

function Footer(props) {
  return (
    <div>
      <h4 style={divStyle} >{props.text}</h4>
    </div>
  )
}

function FragTest(props){
   return <ul><ColorList /></ul>
}

function ColorList(props){
    return (
      <div>
        <li>Red</li>
        <li>Yellow</li>
        <li>Blue</li>
      </div>
    )
}

ReactDOM.render(<App />, document.getElementById('react-container'))
