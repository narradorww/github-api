import React from "react";
import Layout from "./Components/layout";
import NoSearch from "./Components/nosearch";
import Profile from "./Components/profile";
import Repositories from "./Components/repositories";


const App = () => {
  
  return (
    <Layout>
      
            
              <Profile />
              <Repositories />
            
         
       
      
        <NoSearch />
      )}
    </Layout>
  );
};

export default App;
