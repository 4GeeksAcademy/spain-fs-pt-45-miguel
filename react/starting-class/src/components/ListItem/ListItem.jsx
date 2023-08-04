export default function ListItem({ name, url, uid, onDeleteCharacter }) {
    return (
      <li className="list-group-item">
        <p
          onClick={() => {
            onDeleteCharacter(uid);
          }}
        >
          {name}
        </p>
        <input type="text"></input>
      </li>
    );
}