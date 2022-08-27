import HelloWorld from "./HelloWorld";
import Message from "./Message";
import HelloAsClass from "./HelloAsClass";

function App() {
  return (
    <div>
      <HelloWorld who="Amaw" />
      <Message greet="welcome" who="Alienss" />
      <HelloAsClass who="Earth" />
    </div>
  );
}

export default App;
