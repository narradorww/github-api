import Layout from '../src/Components/layout/index'
import Profile from '../src/Components/profile/index'
import { ResetCSS } from './Components/global/resetcss';


function App() {
  return (
    <main>
      <ResetCSS />

      <Layout>
       <Profile />
        


      </Layout>

    </main>

  );
}

export default App;
