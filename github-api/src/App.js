import Layout from '../src/Components/layout/index'
import Profile from '../src/Components/profile/index'
import { ResetCSS } from './Components/global/resetcss';
import Repositories from './Components/repositories';


function App() {
  return (
    <main>
      <ResetCSS />

      <Layout>
       <Profile />
        
        <Repositories />
        


      </Layout>

    </main>

  );
};

export default App;
