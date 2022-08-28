import HelloWorld from "./HelloWorld";
import Message from "./Message";
import HelloAsClass from "./HelloAsClass";
import HelloPeople from "./HelloPeople";

function App() {
  return (
    <div>
      <HelloWorld who="Amaw" />
      <Message greet="welcome" who="Alienss" />
      <HelloAsClass who="Earth" />
      <HelloPeople persons={["joker", "batman"]} />
    </div>
  );
}

export default App;
