import { FunctionalComponent, h } from "preact";
import { cardData } from "./mock";
import style from './style.module.scss';

interface CardProps {
  title: string;
  description: string;
  imgUrl: string;
}

const Card: FunctionalComponent<CardProps> = (data: CardProps) => {
  return (
    <div class={style.card}>
      <img class={style.cardImg} src={data.imgUrl} />
      <div class={style.cardTitle}>{data.title}</div>
      <div class={style.cardDescription}>{data.description}</div>
    </div>
  )
}


const TokenOptions: FunctionalComponent = () => {
  return (
    <div class={style.block}>
      <div class={style.ellipse} />
      <div class={style.title}>Token Vesting Options:</div>
      <div class={style.descriptions}>There are two primary token vesting options:</div>
      <div class={style.cardContainer}>
        {cardData.map((item: CardProps) => (
            <Card key={item.title} title={item.title} description={item.description} imgUrl={item.imgUrl} />
          )
        )}
      </div>
    </div>
  );
}

export default TokenOptions;