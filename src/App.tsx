import classes from './App.module.scss'
import { Content } from './components/Content/Content'
import { FullScreenNav } from './components/FullScreenNav/FullScreenNav'
import { MenuBar } from './components/Menu/MenuBar'
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
