import './App.css'
import RefForm from './components/RefForm/RefForm'
import SimpleForm from './components/SimpleForm/SimpleForm'
import StateFullForm from './components/StateFullForm/StateFullForm'

function App() {

  return (
    <div className='container'>
      <h1 className='text-4xl font-semibold text-center mb-10'>React Form Master</h1>

      {/* <SimpleForm></SimpleForm> */}

      {/* <StateFullForm></StateFullForm> */}

      <RefForm></RefForm>
      
    </div>
  )
}

export default App
