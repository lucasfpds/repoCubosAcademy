
import UsersList from "../../components/UsersList";
import UsersRegister from "../../components/UsersRegister";
import "./styles.css";
import { UserProvider } from "../../context/UserContext";

export default function Main() {


  return (
    <div className="container-main">
    <UserProvider>
      <UsersRegister />
       <UsersList />
    </UserProvider>
    </div>
  );
}
