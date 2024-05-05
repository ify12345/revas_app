import React from 'react'
import { SafeAreaView } from 'react-native'
import Index from './Index'
import { Provider } from 'react-redux'
import { store } from './store'



const App = () => {
  return (
    <>
     <Provider store={store}>
      <Index/>
     </Provider>
    </>
       
  )
}

export default App;
