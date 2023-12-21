import Avatar from "./Avatar";
import Heading from "./components/Heading";
import Button from "./components/Button";
import ButtonWithChildren from "./components/ButtonWithChildren";

function TodoList() {
  // const myStyle = {
  //   backgroundColor: "green",
  //   color: "pink",
  // };

  const person = {
    name: "Gregorio Y. Zara",
    theme: {
      backgroundColor: "black",
      color: "red",
    },
  };

  return (
    <div style={person.theme}>
      <h1>{person.name}&apos; Todos</h1>
      <img
        className="avatar"
        src="https://i.imgur.com/7vQD0fPs.jpg"
        alt="Gregorio Y. Zara"
      />
      <ul>
        <li>Improve the videophone</li>
        <li>Prepare aeronautics lectures</li>
        <li>Work on the alcohol-fuelled engine</li>
      </ul>
    </div>
  );
}

export default function App() {
  // const name = "Fred";

  // Avatar(name)

  const props = {
    person: { name: "Lin Lanying", imageId: "1bX5QH6" },
    size: 100,
  };

  const buttonTitle = "Click";
  const buttonTitle2 = "Add";

  return (
    <>
      <Avatar person={{ name: "Lin Lanying", imageId: "1bX5QH6" }} size={100} />
      <Heading />
      <TodoList />
      <Button title={buttonTitle} />
      <Button title={buttonTitle2} />
      <ButtonWithChildren>
        {" "}
        <p>hej</p> <p>då</p>{" "}
      </ButtonWithChildren>
    </>
  );
}
