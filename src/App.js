import GeneralView from './pages/GeneralView/GeneralView'
import PodcastDetail from './pages/PodcastDetail/PodcastDetail'
import EpisodeDetail from './pages/EpisodeDetail/EpisodeDetail'
import { QueryClient, QueryClientProvider } from 'react-query'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <div className="App">
        <Routes>
          <Route exact path='/' element={<GeneralView/>} />
          <Route exact path='/podcast/:id' element={<PodcastDetail/>} />
          <Route path='/podcast/:id/episode/id' element={<EpisodeDetail/>} />
        </Routes>
        </div>
      </Router> 
    </QueryClientProvider>
  );
}

export default App;
