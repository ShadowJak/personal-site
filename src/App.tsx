import classes from './App.module.scss'
import { Content } from './components/Content/Content'
import { CircleNav } from './components/CircleNav/CircleNav'
import { Menu } from './components/Navigation/Menu'
import VertNav from './components/VertNav/VertNav'

function App() {
  return (
    <div className={classes.container}>
      {/* <MenuBar /> */}
      {/* <Menu /> */}
      <VertNav />
      {/* <Content /> */}
      {/* <CircleNav /> */}
    </div>
  )
}

export default App
