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
  const getIcon = () => {
    return type === 'withIcon' ? <img class={style.btnIcon} src="../../assets/img/icons/icon-arrow-right-mask.svg" /> : null;
  }
  return (
    <button class={`${style.button} ${customStyle ?? ''}`} onClick={action} >
      <label class={style.textBtn}>{name}</label>
      {getIcon()}
    </button>
  )
}

export default Input;