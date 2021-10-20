import { FunctionalComponent, h } from "preact";
import style from './style.module.scss';

const Businesses: FunctionalComponent = () => {
  return (
    <div class={style.block}>
      <div class={style.ellipse} />
      <div class={style.background} />
      <div class={style.title}>Why do businesses need vesting</div>
      <div class={style.descriptions}>Following increased exit scams and rug pulls in the crypto space, crypto players have developed several ways of protecting crypto investors from such scams. One such means of protecting investors is using liquidity lockers integrating several features, including token vesting. Token vesting refers to locking up investors’ tokens for a specific period to maintain a stable long-term value of a particular digital asset. Token vesting essentially prevents token holders from selling their tokens at once following the listing of a crypto project's coin or token, causing the market price to tank quickly.</div>
      <div class={style.businessesImg} />
    </div>
  );
}

export default Businesses;