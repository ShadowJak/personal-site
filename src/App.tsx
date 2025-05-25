import classes from './App.module.scss'
import { Content } from './components/Content/Content'
import { MenuBar } from './components/Menu/MenuBar'
import { Menu } from './components/Navigation/Menu'

function App() {
  return (
    <div className={classes.container}>
      <MenuBar />
      <Menu />
      <Content />
    </div>
  )
}

export default App
