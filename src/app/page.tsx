"use client"
import { Square, Circle } from "./components/Geo";
import { Person } from "./components/Person";
import { Card } from "./components/Card";
import { NewCard } from "./components/NewCard";
import { peopleList } from "./data/peopleList";
import { Rating } from "./components/Rating";
import { Rating2 } from "./components/Rating2";
import { TableList } from "./components/TableList";
import { students } from "./data/students";
import { CustomButton } from "./components/CustomButton";
import { FormEvent, useState } from "react";
import { TodoItem } from "./types/TodoItem";
import { photoList } from "./data/PhotoList";
import { PhotoItem } from "./components/PhotoItem";
import { Modal } from "./components/Modal";
import { Quiz } from "./components/Quiz";


export const getWeekDay = (today: Date) => {
  return new Intl.DateTimeFormat("pt-BR", {weekday: "long" }).format(new Date(today));
}

const Page = () => {
  let inputIdade:number = 20;
  const today: Date = new Date();
  const maiorQue = peopleList.filter(people => people.idade > inputIdade);
  
  return (

    <div>
      <div className="flex">

        <div className="mr-3">
          <h2 className="m-3">Dia da semana: {getWeekDay(today)}</h2>

            <Person nome="Riuan Maia" idade={21} pro="Desenvolvedor Front-End"/>

            <Person nome="Gisele Lídia" idade={20} pro="Web Designer"/>

            <Person nome="Arthur Falcão" idade={16}/>

        </div>

          <div>
          <Card>
            Nesse caso, nosso amigo soube utilizar o Children.
          </Card>

          <Card>
            <>
              <h1>Máxima do author.</h1>
              <h2 className="text-sm text-right">- Author desconhecido</h2>
            </>
          </Card>
          <NewCard frase="essa não é uma frase padrão." autor="Riuanzin"/>
          <NewCard/>
          <NewCard autor="Gisele Lídia"/>
          </div>
          <div>

            {peopleList.length > 0 &&
            <ul className="m-3">
              {peopleList.map(people => 
              <li key={people.id}>{people.nome}, {people.idade} de idade.</li>
              )}
            </ul>
            }

            {maiorQue.length > 0 &&
            <ul className="m-3">
              <h1 className="text-2xl font-bold">Maiores de 20 anos:</h1>
              {maiorQue.map(people => 
              <li key={people.id}>{people.nome}, {people.idade} de idade.</li>
              )}
            </ul>
            }
            
          </div>
        

      </div>
      <div className="flex m-3">
        
      </div>
    </div>
  );
}


//export default Page;
const pageGreeting = () => {

  const fullTime = new Intl.DateTimeFormat("pt-BR", {
    timeStyle: "short",
    hour12: false
  }).format();
  const dtHour = new Date().getHours();
  //let dateToday: Date = new Date();
  //let dtHour = dateToday.getHours();
  //let dtMinute = dateToday.getMinutes();
  //let dtSecond = dateToday.getSeconds();  
  let greeting = "";
  // if(dtHour >= 0 && dtHour < 12) {
  //   greeting = "Bom dia meu love.";
  // } else if(dtHour >= 12 && dtHour < 18) {
  //   greeting = "Boa tarde meu jovem."
  // } else if(dtHour >= 18 && dtHour <= 23) {
  //   greeting = "Boa noite, é hora da maldade."
  // }



  return (
      <div className="flex flex-col justify-center items-center w-screen h-screen bg-gradient-to-r from-cyan-500 to-blue-500">
        <div>
          <h1 className="text-8xl">
            {fullTime}
            {/* {dtHour < 10 ? "0" + dtHour : dtHour}:{10 > dtMinute ? "0" + dtMinute : dtMinute}:{ dtSecond < 10 ? "0" + dtSecond : dtSecond}*/}</h1> 
        </div>
        <div className="text-5xl">
          {/* {greeting} */}
          {dtHour < 12 && dtHour >= 0 ? "Bom dia meu love." : 23 >= dtHour && dtHour >= 18 ? "Boa noite, é hora da maldade." : "Boa tarde meu jovem."}
        </div>
      </div>
  );
}

//export default pageGreeting;

const pageRating = () => {

  return (
    <div className="flex justify-center items-center w-screen h-screen bg-gradient-to-r from-sky-500 to-indigo-500">
      <Rating rate={3.9}/>
    </div>
  );
}
//export default pageRating;

const pageRating2 = () => {
  return (
    <div className="flex justify-center items-center w-screen h-screen bg-gradient-to-r from-sky-500 to-indigo-500">
      <Rating2 rate={4.5}/>
    </div>
  )
}
//export default pageRating2;

const pageTable = () => {
  return (
    <div className="container mx-auto">
      <h1 className="text-5xl">Lista de estudantes</h1>
      <TableList students = {students}/>
      
    </div>
  );
}

//export default pageTable;

//events

const pageClick = () => {
  // function handleClick() {
  //   alert("funcionou.")
  // }
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <button onClick={() => {
        alert("funcionou")
      }} className="p-3 bg-blue-700 text-white rounded-md">Clique aqui</button>
    </div>
  );
}

//export default pageClick;

const pageEventProp = () => {

  const handleClick1 = () => {
    alert("HandleClick1");
  }
  const handleClick2 = () => {
    alert("HandleClick2");
  }
  const handleClick3 = () => {
    alert("HandleClick3");
  }
  return (
    <div className="flex w-screen h-screen justify-center items-center">   
      <CustomButton label="Clique 1" onClick={handleClick1}/>
      <CustomButton label="Clique 2" onClick={handleClick2}/>
      <CustomButton label="Clique 3" onClick={handleClick3}/>
    </div>
  );
}
//export default pageEventProp;

const pageForm = () => {

  const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert("opa, mandando!");

  }
  return (
    <div className="flex flex-col h-screen w-screen justify-center items-center bg-gray-500">
      <h1>Form de login</h1>
      <form onSubmit={handleFormSubmit} className="flex flex-col">
        <input type="text"></input>
        <input type="submit" value="enviar"></input>

      </form>
    </div>
  );
}
//export default pageForm;

const State = () => {
  const [count, setCount] = useState<number>(0);
  const handleClickButton = () => {
    setCount(count + 1);
  }
  const handleClickButton2 = () => {
    setCount(count - 1);
  }
  return(
    <div className="h-screen w-screen flex flex-col justify-center items-center">
      <p>{count}</p>
      <button onClick={handleClickButton} className="p-3 bg-blue-400 border border-gray-400 rounded">+ 1</button>
      <button onClick={handleClickButton2} className="p-3 bg-blue-400 border border-gray-400 rounded">- 1</button>
    </div>
  );
}
//export default State;

const State2 = () => {

  const [showSecret, setShowSecret] = useState<boolean>(false);
  const handleClickButton = () => {
    // if(showSecret) setShowSecret(false);
    // else if(!showSecret) setShowSecret(true);
    setShowSecret(!showSecret);
  }
  
  return(
    <div className="h-screen w-screen flex flex-col justify-center items-center">
    
      <button onClick={handleClickButton} className="p-3 bg-blue-400 border border-gray-400 rounded">{!showSecret ? "Mostrar" : "Ocultar"} área secreta</button>

      {showSecret && 
      <div className="p-3 bg-blue-300 rounded-md mt-3">Área Secreta</div>
      } 
     
    </div>
  );
}

//export default State2;

const State3 = () => {
  const [name, setName ] = useState<string>("");
  const handleBtnClick = () => {
    alert(name);
  }
  return (
    <div className="flex flex-col h-screen w-screen justify-center items-center">
      <input type="text" className="border border-black p-3 text-xl text-black rounded-full" placeholder="digite seu nome" value={name} onChange={e => setName(e.target.value)} />
      <button onClick={handleBtnClick} className="p-3 border border-gray-400 bg-blue-400 rounded-full mt-3 font-bold">Mostrar valor do campo</button>
      <p>seu nome é: {name}</p>
    </div>
  );
}

//export default State3;

const State4 = () => {
  const [count, setCount] = useState<number>(0);

  const handleBtnClick = () => {
    setCount(count + 2);
  }

  return (
    <div className="flex flex-col h-screen w-screen justify-center items-center">
      <p>{count}</p>
      <button onClick={handleBtnClick} className="p-3 rounded-md bg-blue-700">+2</button>
    </div>
  );
}
//export default State4;

//state updater, fluxo, saber quando ela vai ser modificada realmente.



const State5 = () => {
  const [count, setCount] = useState(0);

  const handleBtnClick = () => {
    setCount(count + 2);
    setCount(c => c + 2);
    setCount(c => c + 2);
  }
  return (
    <div className="flex flex-col h-screen w-screen justify-center items-center">
      <p>{count}</p>
      <button onClick={handleBtnClick} className="bg-blue-700 text-white p-3 rounded-md">+2</button>
    </div>
  );
}

//export default State5;

const State6 = () => {

  type Person = {
    name: string,
    lastName: string
  }

  const [fullName, setFullName] = useState<Person>( {name: "Riuan", lastName: "Maia" } );
  return (
    <div className="flex flex-col w-screen h-screen justify-center items-center">
      <input className="text-black rounded-md p-3 text-3xl mb-3" placeholder="digite seu nome" value = {fullName.name} onChange={e => setFullName({...fullName, name: e.target.value})}>

      </input>

      <input type="text" className="text-black rounded-md p-3 text-3xl" placeholder="digite seu sobrenome" value = {fullName.lastName} onChange={e => setFullName({...fullName, lastName: e.target.value})}>
      
      </input>
      <p>Seu nome completo é: {fullName.name} {fullName.lastName}</p>
    </div>
  );
}

//export default State6;

/*
//está foi uma experiência para desenvolvimento de minha lógica, no começo estava tudo dando certo, porém, eu acabei me esquecendo do
//checked, e isso depois que já tinha estruturado todo o código. Mudando assim minha visão e distorcendo a resolução.
//vou deixar este código comentado e irei seguir o video do professor e refletir onde eu errei.
const StateArray7 = () => {

  const [TodoItem, setTodoItem] = useState<TodoItem>({TodoItem: "", checked: false});
  const [TodoList, setTodoList] = useState<TodoItem[]>([{TodoItem: "", checked: false}]);
  let index = 0;

  const handleDltButtonClick = () => {
    index--;
  }
  const handleBtnClick = () => {
    index++;
    const newItem = TodoItem;
    const newTodoList: TodoItem[] = [TodoItem];
    setTodoList(newTodoList);
    setTodoItem({TodoItem: "", checked: false});
    
  }
  return (
    <>
    
    <div className="grid grid-cols-3 gap-2">  
      <div></div>
      <div className="flex flex-col mr-3">
      <h1 className="text-4xl">ToDo List</h1>
        <div className="flex mr-3">
          <input className="text-black p-3 mt-2 border border-gray-800 rounded-md text-xl" placeholder="digite sua meta" value={TodoList[index].TodoItem} onChange={e => setTodoItem({TodoItem: e.target.value, checked: false})} >
          
          </input>
          <button className="bg-blue-400 rounded-md text-white text-md px-2 py-1 ml-2" onClick={handleBtnClick}>Adicionar</button>
        </div>
        <ul className="flex flex-col content-start mt-3">
          {TodoList.map((item, index) => 
            <li>- {TodoList[index].TodoItem}. <button onClick={handleDltButtonClick}> [delete] </button></li>
          )}
        </ul>
      </div>
      <div></div>
      

    </div>
    </>
  );
}

export default StateArray7;
*/

const StateArray8 = () => {

  const [TodoList, setTodoList] = useState<TodoItem[]>([
    
  ]);

  const [TodoItem, setTodoItem] = useState("");

  

  const handleDltButtonClick = () => {
  }
  const handleAddBtn = () => { 
    //const newItem: TodoItem = TodoItem;
    //const newTodoList: TodoItem[] = [...TodoList, newItem];
    //setTodoList(newTodoList);
    if(TodoItem.trim() !== "") {
    setTodoList([...TodoList, {label:TodoItem, checked:false}]);
    setTodoItem("");
    }  
  }

  const handleDelBtn = (index:number)=> {
    setTodoList(TodoList.filter((item, key) => key !== index));
    //não entendi o todo dessa lógica, mas vou seguir
  }
  const toogleCheck = (index: number) => {
    let newTodoList = [...TodoList];
    newTodoList[index].checked = !newTodoList[index].checked;
    setTodoList(newTodoList)
    
  }

  return (
    <div className="grid grid-cols-3 gap-1 bg-">
      <div></div>
      <div>
        <h1 className="text-4xl mt-3">Todo List</h1>
        <div className="flex mr-3"> 
          <input className="text-black p-3 mt-2 border border-gray-800 rounded-md text-xl" placeholder="digite sua meta" value={TodoItem} onChange={e => setTodoItem(e.target.value)} >
          </input>
          <button className="bg-blue-400 rounded-md text-white px-3 ml-2" onClick={handleAddBtn}>Adicionar</button>
        </div>
        <p className="border border-gray-400 bg-blue-300 rounded-md p-2 mt-2 inline-block">{TodoList.length} item na lista</p>
        <ul className="flex flex-col mt-3">
          {TodoList.map((item, index)=>
          
            <li className="flex items-center content-start mt-2" key={index}> <input onClick={() => toogleCheck(index)}type="checkbox" checked= {item.checked} className="w-6 h-6 rounded-full mr-2"></input> - {item.label} <button className="rounded-md bg-red-300 px-3 ml-2" onClick={() => handleDelBtn(index)}>  delete  </button></li>
          )}
        </ul>

      </div>
      <div></div>
    </div>
  );
}


//export default StateArray8;

const StateGallery = () => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [imageOfModal, setImageOfModal] = useState("");

  const openModal = (id: number) => {
    const photo = photoList.find(item => item.id === id);
    if(photo) {
      setImageOfModal(photo.url);
      setShowModal(true);
    }
  }
  const closeModal = () => {
    setShowModal(false);
  }
    return (
    <div className="mx-2">
      <h1 className="text-center text-3xl font-bold my-10">Fotos Intergalacticas</h1>
      <section className="container max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {photoList.map(item => (
          <PhotoItem
          key={item.id}
          photo={item}
          onClick={() => openModal(item.id)}

          />
        ))}
      </section>

      {showModal &&
        <Modal image={imageOfModal} closeModal={closeModal}/>
      }
    </div>
  );
}

//export default StateGallery;

const StateQuiz = () => {
  return(
    <div className="h-screen w-screen flex justify-center items-center bg-blue-300">
      <Quiz />
    </div>
  );
  //desafio 04/09/2023: não assista a aula quiz 1, e repita o que estudou em 03/09/2023. 
  //ele montou a estrutura, criou o type e inseriu os dados. 
}
export default StateQuiz;