import { FunctionalComponent, h } from "preact";
import style from './style.scss';

type TypeButton = 'default' | 'withIcon';

interface Props {
  type?: TypeButton;
  name?: string;
  customStyle?: string;
  action?(): void;
}

const Input: FunctionalComponent<Props> = ({name, customStyle, type, action}) => {
  return (
    <button class={`${style.button} ${customStyle ?? ''}`} onClick={action} >
      <label class={style.textBtn}>{name}</label>
      {type === 'withIcon' ? <img class={style.btnIcon} src="../../assets/img/icons/icon-arrow-right-mask.svg" /> : null}
    </button>
  )
}

export default Input;