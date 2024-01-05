import './App.css'
import HookForm from './components/HookForm/HookForm'
import RefForm from './components/RefForm/RefForm'
import ReusableForm from './components/ReusableForm/ReusableForm'
import SimpleForm from './components/SimpleForm/SimpleForm'
import StateFullForm from './components/StateFullForm/StateFullForm'

function App() {


  const handleSingUpSubmit = data => {
    console.log("Sign Up Form - ", data);
  }

  const handleUpdateSubmit = data => {
    console.log("Profile Update Form - ", data);
  }

  return (
    <div className='container'>
      <h1 className='text-4xl font-semibold text-center mb-10'>React Form Master</h1>

      {/* <SimpleForm></SimpleForm> */}

      {/* <StateFullForm></StateFullForm> */}

      {/* <RefForm></RefForm> */}

      {/* <HookForm></HookForm> */}

      <ReusableForm
        formTitle={'Sign Up'}
        handleSubmit={handleSingUpSubmit}></ReusableForm>
      <ReusableForm
        formTitle={'Profile Update'}
        submitBnt={'Update'}
        handleSubmit={handleUpdateSubmit}></ReusableForm>
      
    </div>
  )
}

export default App
