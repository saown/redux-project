import './App.css'
import { CakeView } from './component/CakeView'
import { IcecreamView } from './component/IceCreamView'
import { UsersView } from './component/UsersView'


function App() {

  return (
   <div className='App'>
    <CakeView />
    <IcecreamView />
    <UsersView />
   </div>
  )
}

export default App
