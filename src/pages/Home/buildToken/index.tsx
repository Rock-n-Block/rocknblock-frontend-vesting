import { FunctionalComponent, h } from "preact";
import { Button } from "../../../components";
import style from './style.module.scss';

const BuildToken: FunctionalComponent = () => {
  return (
    <div class={style.block}>
      <div class={style.backgroundTop} />
      <div class={style.background} />
      <div class={style.container}>
        <div class={style.title}>VESTING</div>
        <div class={style.description}>Build a Token Vesting Contract</div>
        <Button type='withIcon'
          customStyle={style.button}
          name={'Try Vesting'}
          action={(): void => {window.open('/#contact-us', '_self')}}
        />
      </div>
    </div>
  );
}

export default BuildToken;