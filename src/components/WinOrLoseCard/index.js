import './index.css'

const WinOrLoseCard = props => {
  const {score, isWon, onReset} = props

  const winIngUrl = 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'

  const loseImgUrl =
    'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'

  const imgUrl = isWon ? winIngUrl : loseImgUrl

  const scoreContent = isWon ? 'You Won' : 'You Lose'

  const scoreNewContent = isWon ? 'Best Score' : 'Score'

  return (
    <div className="score-main-card">
      <img alt="Win Or Lose" className="win-or-lose-logo" src={imgUrl} />
      <div className="score-card-content">
        <h1 className="win-or-lose-heading">{scoreContent}</h1>
        <p className="score-best-score-para">{scoreNewContent}</p>
        <p className="score-number">{score}/12</p>
        <button
          onClick={() => {
            onReset()
          }}
          type="button"
          className="play-btn"
        >
          Play Again
        </button>
      </div>
    </div>
  )
}

export default WinOrLoseCard
