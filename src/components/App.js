

import { Provider } from 'react-redux';
import MyStore from './MyStore';
import hyperMarketStore from '../redux/store/HyperMarketStore';

function App() {
  return (
    <div>

      <Provider store={hyperMarketStore}>
      <MyStore/>
      </Provider>
     
    </div>
  );
}

export default App;
