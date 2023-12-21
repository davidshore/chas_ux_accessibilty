export default function Heading() {
  const name = "Hedy Lamarr";

  function addFive(num) {
    return num + 5;
  }

  const today = new Date();

  function formatDate(date) {
    return new Intl.DateTimeFormat("en-US", { weekday: "long" }).format(date);
  }

  return (
    <h1>
      {name}&apos;s To Do List {addFive(7)} {formatDate(today)}
    </h1>
  );
}
