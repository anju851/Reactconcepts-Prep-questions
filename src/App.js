import MapFilterUse from "./questions/MapFilterUse";
import ParentComponent from "./questions/PassingDataBetweenChildParent/ParentComp";
import EventComponent from "./questions/eventHandlerWithArgumentsToPass";
import Form from "./questions/FormsInReact";
import Parent from "./interviewQstns/PassDataFromChildToParent/Parent";
import BugFix1 from "./interviewQstns/fixBugs/BugFix1";
import BugFix2 from "./interviewQstns/fixBugs/BugFix2";

function App() {
  return (
    <div className="App">
      <Parent />
      <BugFix1 />
      <BugFix2/>
      {/* <MapFilterUse />
      <ParentComponent />
      <EventComponent />
      <Form /> */}
    </div>
  );
}

export default App;
