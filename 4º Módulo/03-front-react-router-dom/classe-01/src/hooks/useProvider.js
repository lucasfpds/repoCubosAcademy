import { useState } from "react";

export default function useUserProvider() {
  
  const [autenticado, setAutenticado] = useState(true);
  const [dataUser, setDataUser]=useState('teste')
  async function authGitHub(login) {
    try {
      // const api = await fetch(`https://api.github.com/users/${login}`, {
      //   method: "GET",
      // });
      // api.status === 200 ? setAutenticado(true) : setAutenticado(false);
      // const data = await api.json();
      // setDataUser(data);

      // console.log(api.status)
      // console.log(data)
      console.log(autenticado)

    } catch (error) {
      console.log(error);
    }
  }
  

  return {autenticado,authGitHub,dataUser};
}