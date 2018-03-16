import SnowflakeApp from '../components/SnowflakeApp'

export default ({ url: { query: { name, answerValues} } }) => {
  return (
    <div>
      <head>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/jspdf/1.3.2/jspdf.min.js"></script>
      </head>
      <SnowflakeApp
        name={name}
        answerValues={answerValues} />
    </div>
  )
}
