import { FunctionalComponent, h } from "preact";
import style from './style.module.scss';

interface ThingProps {
  imgUrl: string;
  label: string;
}

const ThingsData: ThingProps[] = [
  {label: 'project stability', imgUrl: '../../assets/img/vesting/stability.png'},
  {label: 'ecosystem viability ', imgUrl: '../../assets/img/vesting/viability.png'},
  {label: 'long-term perspective', imgUrl: '../../assets/img/vesting/perspective.png'},
  {label: 'secure future company', imgUrl: '../../assets/img/vesting/secure.png'},
  {label: 'investor advocacy', imgUrl: '../../assets/img/vesting/advocacy.png'},
]

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