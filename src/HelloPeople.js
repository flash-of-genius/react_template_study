import Hello from "./Hello";
function HelloPeople({ persons }) {
  return (
    <div>
      {persons.map((person, index) => {
        return <Hello who={person} key={index} />;
      })}
    </div>
  );
}

export default HelloPeople;
