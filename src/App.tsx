import classes from './App.module.scss'
import { Content } from './components/Content/Content'
import { CircleNav } from './components/CircleNav/CircleNav'
import { Menu } from './components/Navigation/Menu'

function App() {
  return (
    <div className={classes.container}>
      {/* <MenuBar /> */}
      {/* <Menu /> */}
      <Content />
      <CircleNav />
    </div>
  )
}

export default App
