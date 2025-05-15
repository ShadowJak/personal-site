import classes from './App.module.scss'
import { MenuBar } from './components/Menu/MenuBar'

function App() {
  return (
    <div className={classes.container}>
      <MenuBar />
      <div className={classes.content}></div>
    </div>
  )
}

export default App
