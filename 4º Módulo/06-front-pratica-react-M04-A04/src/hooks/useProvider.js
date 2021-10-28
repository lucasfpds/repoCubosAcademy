import { useState } from "react";

export default function useUserProvider() {
  
  const [autenticado, setAutenticado] = useState(false);
  const [token, setToken] = useState();
  const [msg, setMsg] = useState();
  const [toast, setToast] = useState();
  const [contatos, setContatos] = useState(false);
  
  const [hidden, setHidden] = useState("hidden");

  async function obterContatos() {
    try {
      
      const response = await fetch(
        "https://cubos-api-contacts.herokuapp.com/contatos",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const data = await response.json();
      
        setContatos(data)


    } catch (error) {
      console.log(error);
    }
  }
  console.log(contatos);

  return {autenticado,setAutenticado,token, setToken, hidden, setHidden, msg, setMsg, toast, setToast, obterContatos, contatos, setContatos};
}