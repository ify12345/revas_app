import Index from "./Index";
import { Provider } from "react-redux";
import { store } from "./store";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";

// Wrap your root component with PersistGate
const persistor = persistStore(store);

const App = () => {
  return (
    <Provider store={store}>
      {/* <PersistGate loading={null} persistor={persistor}>
      </PersistGate> */}
        <Index />
    </Provider>
  );
};

export default App;
