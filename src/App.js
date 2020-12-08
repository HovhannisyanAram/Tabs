import Tabs from 'components/tabs';
import { Provider } from 'react-redux';

import { store } from 'store';

function App() {
  return (
    <Provider store={store}>
      <Tabs/>
    </Provider>
  );
}

export default App;
