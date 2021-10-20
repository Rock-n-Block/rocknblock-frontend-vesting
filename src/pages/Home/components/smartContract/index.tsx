import { FunctionalComponent, h } from "preact";
import style from './style.module.scss';

const SmartContract: FunctionalComponent = () => {
  return (
    <div class={style.block}>
      <div class={style.background} />
      <div class={style.ellipse} />
      <div class={style.blockInfo}>
        <div class={style.title}>ROCK'NBLOCK DEVELOPS Vesting Smart Contract</div>
        <div class={style.descriptions}>
        A smart contract allowing to be time-vested on a continuous schedule.
        <br />
        <br />
        There are several publicly available smart contracts allowing for tokens (for example those given to founders during a crowdsale) to be vested over time.
        </div>
      </div>
    </div>
  );
}

export default SmartContract;