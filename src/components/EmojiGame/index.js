import './index.css'

import {Component} from 'react'

import NavBar from '../NavBar'

import EmojiCard from '../EmojiCard'

import WinOrLoseCard from '../WinOrLoseCard'

/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

*/

class EmojiGame extends Component {
  state = {gameOn: true, clickEmojiList: [], topScore: 0}

  getScoreAndSetTop = currentScore => {
    const {topScore} = this.state
    let newScore = topScore
    if (currentScore > topScore) {
      newScore = currentScore
    }
    this.setState({topScore: newScore, gameOn: false})
  }

  resetGame = () => {
    this.setState({clickEmojiList: [], gameOn: true})
  }

  clickEmoji = id => {
    const {emojisList} = this.props
    const {clickEmojiList} = this.state
    const conditionOver = clickEmojiList.includes(id)
    if (conditionOver) {
      this.getScoreAndSetTop(clickEmojiList.length)
    } else {
      if (clickEmojiList.length === emojisList.length - 1) {
        this.getScoreAndSetTop(emojisList.length)
      }
      this.setState(prevState => ({
        clickEmojiList: [...prevState.clickEmojiList, id],
      }))
    }
  }

  getShuffledEmojisList = () => {
    const {emojisList} = this.props
    return emojisList.sort(() => Math.random() - 0.5)
  }

  rederEmojiView = () => {
    const newRandomEmojiList = this.getShuffledEmojisList()

    return (
      <ul className="emoji-list-container">
        {newRandomEmojiList.map(eachEmoji => (
          <EmojiCard
            clickedEmojiAction={this.clickEmoji}
            key={eachEmoji.id}
            emojiDetail={eachEmoji}
          />
        ))}
      </ul>
    )
  }

  scoreCardView = () => {
    const {emojisList} = this.props
    const {clickEmojiList} = this.state
    const isWon = emojisList.length === clickEmojiList.length
    return (
      <WinOrLoseCard
        onReset={this.resetGame}
        isWon={isWon}
        score={clickEmojiList.length}
      />
    )
  }

  render() {
    const {gameOn, topScore, clickEmojiList} = this.state

    return (
      <div className="main-container">
        <NavBar
          gameOn={gameOn}
          currentScore={clickEmojiList.length}
          topScore={topScore}
        />
        {gameOn ? this.rederEmojiView() : this.scoreCardView()}
      </div>
    )
  }
}

export default EmojiGame
