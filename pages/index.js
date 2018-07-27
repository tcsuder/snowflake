import AppWelcome from '../components/AppWelcome'

export default ({url: { pathname }}) => {
  return (
    <div>
      <AppWelcome pathname={pathname} />
    </div>
  )
}
