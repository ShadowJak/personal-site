import classes from './App.module.scss'
import { SlideNav } from './components/SlideNav/SlideNav'

function App() {
  return (
    <div className={classes.appContainer}>
      {/* <MenuBar />
      <Content /> */}
      {/* <FullScreenNav /> */}
      <SlideNav></SlideNav>
    </div>
  )
}

export default App
