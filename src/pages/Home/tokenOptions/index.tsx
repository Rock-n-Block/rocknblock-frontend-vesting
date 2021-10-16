import { FunctionalComponent, h } from "preact";
import style from './style.module.scss';

interface CardProps {
  title: string;
  description: string;
  imgUrl: string;
}

const cardData: CardProps[] = [
  {
    title: 'Reverse Vesting',
    description: 'primarily concerned with limiting the speed or quickness with which project founders, teams and large investors can liquidate (sell) tokens. In this token vesting option, projects can shorten the vesting period to two years but increase the selling schedule to up to 4 years.',
    imgUrl: '../../assets/img/vesting/optionCard1.png'
  },
  {
    title: 'Normal Vesting',
    description: "the tokens are locked up in a smart contract for a predetermined period. A project's founder(s) can decide to lock up a particular percentage of the tokens and release them periodically, say 20% after 6 months, 50% after 1 year, and the other 50% in the 2nd year.",
    imgUrl: '../../assets/img/vesting/optionCard2.png'
  }
]


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
        {cardData.map((item: CardProps, i) => (
            <Card key={i} title={item.title} description={item.description} imgUrl={item.imgUrl} />
          )
        )}
      </div>
    </div>
  );
}

export default TokenOptions;