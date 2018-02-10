import type { QuestionsList } from '../constants'

type Props = {
  questionIndex: Number,
  lineIndex: Number,
  trackIndex: Number
}

function RadioInputLine({questionIndex, lineIndex, trackIndex}) {
  const lineId = `input-${questionIndex}-${lineIndex}`
  const questionId = `radioGroup${questionIndex}`
  // console.log(lineIndex);
  // console.log(lineIndex);
  console.log(`input-${trackIndex}${questionIndex}`);
  return (
    <div className='box radio-input'>
      <label htmlFor={`input-${trackIndex}${questionIndex}${lineIndex}`}>
        <input
          id={`input-${trackIndex}${questionIndex}${lineIndex}`}
          type="radio"
          className="radio-button"
          name={`radioGroup-${trackIndex}${questionIndex}`}/>
        <div className="check"></div>
      </label>
    </div>
  )
}

export default RadioInputLine
