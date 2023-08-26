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
import { FormEvent } from "react";

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
export default pageForm;