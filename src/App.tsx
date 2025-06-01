import classes from './App.module.scss'
import { Content } from './components/Content/Content'
import { FullScreenNav } from './components/FullScreenNav/FullScreenNav'
import { MenuBar } from './components/Menu/MenuBar'

function App() {
  return (
    <div className={classes.appContainer}>
      {/* <MenuBar />
      <Content /> */}
      <FullScreenNav />
    </div>
  )
}

export default App
