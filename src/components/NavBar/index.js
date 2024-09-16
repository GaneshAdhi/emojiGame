import './index.css'

const NavBar = props => {
  const {gameOn, currentScore, topScore} = props

  return (
    <nav className="nav-bar-main-container">
      <div className="logo-and-title-card">
        <img
          className="img-logo"
          alt="emoji logo"
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
        />
        <h1 className="game-heading">Emoji Game</h1>
      </div>
      {gameOn && (
        <div className="score-card">
          <p className="scrore-style">Score: {currentScore}</p>
          <p className="scrore-style">Top Score: {topScore}</p>
        </div>
      )}
    </nav>
  )
}

export default NavBar
