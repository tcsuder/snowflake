import CompanionQuizApp from '../components/CompanionQuizApp'

export default ({url: { pathname }}) => {
  return (
    <div>
      <CompanionQuizApp pathname={pathname} />
    </div>
  )
}
