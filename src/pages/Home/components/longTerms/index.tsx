import { FunctionalComponent, h } from "preact";
import { Button } from "../../../../components";
import style from './style.module.scss';

const LongTerms: FunctionalComponent = () => {
  return (
    <div class={style.block}>
      <div class={style.title}>Enable long-term relationships with members of a token ecosystem</div>
      <div class={style.descriptions}>Vesting is a term used to describe the fact that an asset is fully under the ownership of an investor. Crypto projects often use long-term token release vesting schedules for token sale investors. This effectively locks an investor into their given tokens for a lengthy period of time.</div>
      <Button
        name="Contact blockchain experts"
        type="withIcon"
        customStyle={style.button}
        action={(): void => {window.open('/#contact-us', '_self')}}
      />
    </div>
  );
}

export default LongTerms;