import { FunctionalComponent, h } from "preact";
import style from './style.module.scss';

const WhatMean: FunctionalComponent = () => {
  return (
    <div class={style.block}>
      <div class={style.title}>What Does Vesting Mean?</div>
      <div class={style.content}>
        <div class={style.description}>
          Essentially, vesting is the process of delaying an owner’s access to an asset.
          <br />
          <br />
          Vesting in crypto is similar although it is implemented in a broader fashion. 
        </div>
        <img class={style.img} src={`../../assets/img/vesting/Group1000001985.png`} />
        <div class={style.info}>
          <img class={style.rectangle} src={`../../assets/img/vesting/Rectangle770.png`} />
          Usually vested tokens belong to team members, advisors, partners, others who contributed to the development of the project, but also investors who purchased tokens before they went on general sale. It is very common for tokens to be released gradually over the vesting period, sometimes once a month, once a week, or even daily as the project progresses.
        </div>
      </div>
    </div>
  );
}

export default WhatMean;