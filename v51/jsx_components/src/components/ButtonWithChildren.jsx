export default function ButtonWithChildren(props) {
  const { children } = props;
  // const children = props.children;

  return <button>{children}</button>;
}
