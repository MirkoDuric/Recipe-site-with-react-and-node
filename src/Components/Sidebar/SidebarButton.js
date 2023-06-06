import "./Sidebar.css";
export default function MenuButton(props) {
  return <div className={props.className} onClick={props.activeTggle}></div>;
}
