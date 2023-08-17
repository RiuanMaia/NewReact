import { Square, Circle } from "./components/Geo";
import {Person} from "./components/Person";
import { Card } from "./components/Card";
import { NewCard } from "./components/NewCard";

export const getWeekDay = (today: Date) => {
  return new Intl.DateTimeFormat("pt-BR", {weekday: "long" }).format(new Date(today));
}
const Page = () => {
  const today: Date = new Date();
  return (
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
      

    </div>
  );
}
export default Page;