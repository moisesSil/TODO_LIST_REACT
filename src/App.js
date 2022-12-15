import React,{useState} from 'react';
import './App.css';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';


function App() {

  // criaçao dos estado do useState
  const [newItem, setNewItem] = useState("");
  //Array onde irar conter todos os item
  const [items, setItems] = useState([]);
  //criaçao para add o item
  function addItem(){
      //colocamos uma condição, para validar o item no compo
      if(!newItem){
        alert("O campo esra vazio")
        return;
      }
      //criaçao de um novo objeto
      const item ={
        id: Math.floor(Math.random() *1000),
        value:newItem
      }
      // vamos chamar um lista antiga e uma nova
       setItems(oldList =>[...oldList,item])
       setNewItem("")
       alert("item adicionado com suceesso")
      console.log(items)
  }
    //criaremos uma função que irar deletar
    function  deleteItem(id){
      const newArray = items.filter(item =>item.id !== id);
      setItems(newArray)
      alert("item deletado com suceesso")
    }
  return (
    <div className="App">

      {/*header */}
      <h1> Todo List App</h1>
      {/*entradas dos inputs e botão */}
      <TextField
      type ="text"
      variant="standard"
      label="Adicione uma atividade"
      id="standard-basic"
      value = {newItem}
      onChange = {(e) => setNewItem(e.target.value) }
      />
      <div className='btn'>
      <Button variant="contained" onClick={()=> addItem()}>Adicionar</Button>
      </div>
      {/*Nesse caso vamos usar uma lista oderna para lista os item*/}
      <ul >
        {/* <li>fazer Atividade de Matematica </li>
        <li>estudar </li>
        <li>Academia </li>
        <li>curso</li> */}
        {/* agora vamos chammar uma açao map para adicionar os items  */}
          {
            items.map(item => {
              return (
              <li key={item.id}>{item.value}<button className='delete-button' onClick={(() => deleteItem(item.id))}>❌</button> </li>
              )
            })
          }
      </ul>
    </div>
  );
}
export default App;
