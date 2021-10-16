import { FunctionalComponent, h } from "preact";
import { useEffect } from "preact/hooks";
import { Button } from "../../../components";
import style from './style.module.scss';

interface SlideProps {
  name: string;
  imgUrl: string;
}

const sliderData: SlideProps[] = [
  {name: 'Polygon', imgUrl: '../../assets/img/vesting/pologon.png'},
  {name: 'Ethereum', imgUrl: '../../assets/img/vesting/ethereum.png'},
  {name: 'Binance Smart Chain', imgUrl: '../../assets/img/vesting/union.png'},
  {name: 'NEO', imgUrl: '../../assets/img/vesting/neo.png'},
]

const Slide: FunctionalComponent<SlideProps> = (data: SlideProps) => {
  return (
    <div class={style.slide}>
      <img className={style.slideImg} src={data.imgUrl} />
      <div className={style.slideName} >{data.name}</div>
    </div>
  )
}

const CustomSmartContract: FunctionalComponent = () => {

  useEffect(() => {
    if (window.screen.width <= 425) {
      sliderData.map(item => {
        if (item.name.length > 12) 
          item.name = item.name.slice(0, 12).concat('...')
      });
    }
  }, [])

  return (
    <div class={style.block}>
      <div class={style.ellipse} />
      <div class={style.title}>Сreate a custom vesting smart contract</div>
      <div class={style.sliderContainerWrapper}>
        <div class={style.sliderContainer}>
          {sliderData.map((item: SlideProps, i) => <Slide key={i} imgUrl={item.imgUrl} name={item.name} />)}
        </div>
      </div>
      <div class={style.descriptions}>
        Token vesting is necessary to prevent such occurrences and boost confidence in the potential participants of a token sale. The process involves locking up certain amounts/percentage of tokens for a particular period, usually one or two years. For instance, if a startup creates a cryptocurrency project and launches it through an ICO or crowdfunding event, they may set up a lockup period. 
        <br /><br />

      Rock'n'Block is set to launch a token vesting service following the completion of its new webpage. Token vesting service will be made available on all chains the platform is currently deployed, i.e. Ethereum, Binance Smart Chain, Polygon, and others. 
      </div>
      <Button
        customStyle={style.button}
        name={"ORDER VESTING"}
        type="withIcon"
        action={(): void => {window.open('/#contact-us', '_self')}}
      />
    </div>
  );
}

export default CustomSmartContract;
