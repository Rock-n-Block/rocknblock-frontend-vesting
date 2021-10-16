import { FunctionalComponent, h } from 'preact';

import style from './style.scss';
import {useCallback} from "preact/hooks";

interface ThanksForRequestModalProps {
    setIsModal: any;
    title: string;
}

const ThanksForRequestModal: FunctionalComponent<ThanksForRequestModalProps> = ({setIsModal, title}) => {

    const handleClick = useCallback(() => {
        setIsModal('');
    }, [])

    return (
        <div className={style['thanks-modal']}>
            <div onClick={(): void => handleClick()} className={style['thanks-modal_close']}>
                <img src='../../assets/img/icons/icon-close.svg' alt='close' />
            </div>
            <h2>{title}</h2>
            <button onClick={(): void => handleClick()}>Close / ok</button>
            <img className={style['thanks-modal_bg-1']} src='../../assets/img/modal-bg-1.svg' alt='modal bg 1' />
            <img className={style['thanks-modal_bg-2']} src='../../assets/img/modal-bg-2.svg' alt='modal bg 2' />
        </div>
    )
}

export default ThanksForRequestModal;
