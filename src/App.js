import GeneralView from './pages/GeneralView/GeneralView'
import { QueryClient, QueryClientProvider, useQuery } from 'react-query'

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <GeneralView/>
      </div>
    </QueryClientProvider>
  );
}

export default App;
