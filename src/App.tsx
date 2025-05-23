import classes from './App.module.scss'
import { Content } from './components/Content/Content'
import { MenuBar } from './components/Menu/MenuBar'

function App() {
  return (
    <div className={classes.container}>
      <MenuBar />
      <Content />
    </div>
  )
}

export default App
