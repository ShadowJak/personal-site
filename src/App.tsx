import classes from './App.module.scss'
import { Content } from './components/Content/Content'
import { MenuBar } from './components/Menu/MenuBar'
import { NavBar } from './components/NavBar/NavBar'

function App() {
  return (
    <div className={classes.container}>
      {/* <MenuBar /> */}
      <NavBar />
      <Content />
    </div>
  )
}

export default App
