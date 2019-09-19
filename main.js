{
  // https://www.codeproject.com/Tips/1215984/Update-State-of-a-Component-from-Another-in-React
}

class NavBar extends React.Component {
  constructor(props) {
    super(props)
  }

  logThis() {
    console.log(this);
    (() => console.log(this))()
    let test = function() {
      console.log(this)
    }
    test()
  }

  render() {
    return (
      <header className="nav-bar">
        <div className="logo">{this.props.siteName}</div>
        <div className="button-section">
          <button onClick={this.logThis}>B</button>
          <button className="button" onClick={() => {console.log(this)}}>Button</button>
          <button className="button" onClick={function() {console.log(this)}}>Button</button>

          {/* ------- */}

          <button onClick={(() => {
            {
              /*
            this.props.isClicked = true;
            console.log(this.props.isClicked)
            */
            this.state.isClicked = true;
            }
          }).bind(Main)}>Add recipe</button>

          {/* ------- */}
        </div>
      </header>
    );
  }
}

class SideMenu extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div class="side-menu">
        <ul>
          <li><a href="">Link 1</a></li>
          <li><a href="">Link 2</a></li>
          <li><a href="">Link 3</a></li>
          <li><a href="">Link 4</a></li>
        </ul>
      </div>
    )
  }

}

{
  /*
  function Main() {
    return (
      <div className="main">Main</div>
    )
  }
  */
}

class Main extends React.Component {
  constructor(props) {

  }
  render() {
    return (
      <div className="main">

        <Recipe />
        <Recipe />

      </div>
    )
  }
}


class Recipe extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div className="recipe">
        <div className="title-img">
          <div className="picture"><img src="#"></img></div>
          <h1>Recipe name</h1>
        </div>
        <div className="button-section">
          <button>TEST</button>
        </div>

      </div>
    )
  }
}

function Footer() {
  return (
    <footer className="footer">
      <div>placeholder</div>
      <ul>
        <li><a href="">Link 1</a></li>
        <li><a href="">Link 2</a></li>
        <li><a href="">Link 3</a></li>
      </ul>
    </footer>
  )
}

{
  /*
  class Recipe extends React.Component {
    constructor(props) {
      super(props)
    }
    render() {
      return (
        <div className="recipe">
          <div className="title-img">
            <div className="picture"><img src="#"></div>
            <h1>Recipe name</h1>
          </div>
          <div className="button-section">
            <button>TEST</button>
          </div>

        </div>
      )
    }
  }
  */
}

class Page extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div className="page">
        <NavBar siteName="Technimotores"/>
        <SideMenu/>
        <Main/>
        <Footer/>
      </div>
    )
  }
}

//render(<NavBar/>, document.querySelector("#root"))
render(<Page/>, document.querySelector("#root"))
