import classes from './App.module.scss'
import { Content } from './components/Content/Content'
import { ExpandNav } from './components/ExpandNav/ExpandNav'
import { Menu } from './components/Navigation/Menu'

function App() {
  return (
    <div className={classes.container}>
      {/* <MenuBar /> */}
      {/* <Menu /> */}
      <Content />
      <ExpandNav />
    </div>
  )
}

export default App
