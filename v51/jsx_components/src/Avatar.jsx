export default function Avatar(props) {
  const { person, size } = props;
  const { name, imageId } = person;

  // const person = props.person;
  // const size = props.size;

  return (
    <div>
      <p>{name}</p>
      <img
        className="avatar"
        src={"https://i.imgur.com/" + imageId + ".jpg"}
        alt={name}
        width={size}
        height={size}
      />
    </div>
  );
}
