interface CardProps {
  title: string;
  description: string;
  imgUrl: string;
}

export const cardData: CardProps[] = [
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