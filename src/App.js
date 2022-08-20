//import logo from './logo.svg';
import './App.css';
import Header, { About } from './components/fnFunctions';
import { Menu } from './components/fnFunctions';
import { Feature } from './components/fnFunctions';
import { TopSkills } from './components/fnFunctions';
import { OurTeam } from './components/fnFunctions';
import { Statistics } from './components/fnFunctions';
import { Service } from './components/fnFunctions';
import { CoreFeatu } from './components/fnFunctions';
import { Portfolio } from './components/fnFunctions';
import { ChoosePlan } from './components/fnFunctions';
import { OurBlog } from './components/fnFunctions';
import { LastTweet } from './components/fnFunctions';
import { YouTube } from './components/fnFunctions';
import { Contacting } from './components/fnFunctions';
import { GetInTch } from './components/fnFunctions';
import { Footer } from './components/fnFunctions';
function App() {
  return (
    <div className="App">
      <Header/>
      <Menu/>
      <Feature/>
      <About/>
      <TopSkills/>
      <OurTeam/>
      <Statistics/>
      <Service/>
      <CoreFeatu/>
      <Portfolio/>
      <ChoosePlan/>
      <OurBlog/>
      <LastTweet/>
      <YouTube/>
      <Contacting/>
      <GetInTch/>
      <Footer/>
    </div>
  );
}

export default App;
