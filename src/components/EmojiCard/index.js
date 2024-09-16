import './index.css'

const EmojiCard = props => {
  const {emojiDetail, clickedEmojiAction} = props
  const {id, emojiName, emojiUrl} = emojiDetail

  const onClickEmoji = () => {
    clickedEmojiAction(id)
  }

  return (
    <li className="emoji-card">
      <button onClick={onClickEmoji} className="emoji-btn" type="button">
        <img className="emoji-logo" alt={emojiName} src={emojiUrl} />
      </button>
    </li>
  )
}

export default EmojiCard
