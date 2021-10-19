
import UsersIcon from "../../assets/users.svg";
import Empty from "../Empty";
import UsersReport from "../UsersReport";
import "./styles.css";
import useUser from "../../hooks/useUser";

function UsersList() {
  const { usersData, setUserInEditing, handleDeleteUser } = useUser();

  const message = "Não existem usuários cadastrados...";
  const iconSize = "50";
  return (
    <div className="right">
      {usersData.length > 0 && (
        <div className="container-lines">
          {usersData.map((user) => (
            <ul key={user.id}>
              <li className="name">{user.name}</li>
              <li>{user.age}</li>
              <li>
                <button onClick={() => setUserInEditing(user)}>Editar</button>
                <button onClick={() => handleDeleteUser(user.id)}>
                  Deletar
                </button>
              </li>
            </ul>
          ))}
          <img src={UsersIcon} alt="" />
        </div>
      )}
      <Empty
        value={{ UsersIcon, message, iconSize, usersData }}
      >
        {!usersData.length && <Empty />}
        <UsersReport />
      </Empty>
    </div>
  );
}

export default UsersList;
