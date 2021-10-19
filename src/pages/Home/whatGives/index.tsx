import { FunctionalComponent, h } from "preact";
import { ThingsData } from "./mock";
import style from './style.module.scss';

interface ThingProps {
  imgUrl: string;
  label: string;
}

const Thing: FunctionalComponent<ThingProps> = (data: ThingProps) => {
  return (
    <div class={style.thing}>
      <img class={style.thingImg} src={data.imgUrl} />
      <div class={style.thingLabel}>{data.label}</div>
    </div>
  )
}

const WhatGives: FunctionalComponent = () => {
  return (
    <div class={style.block}>
      <div class={style.title}>What Vesting Gives</div>
      <div class={style.thingContainer}>
        {ThingsData.map((item: ThingProps) => <Thing key={item.label} imgUrl={item.imgUrl} label={item.label} />)}
      </div>
    </div>
  );
}

export default WhatGives;