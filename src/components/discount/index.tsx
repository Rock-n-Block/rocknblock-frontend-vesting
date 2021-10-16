import {Fragment, FunctionalComponent, h} from 'preact';
import style from './style.scss'
import {useCallback, useState} from "preact/hooks";
import {ThanksForRequestModal} from "../index";

interface SubmitI {
    address: string;
}

const Discount: FunctionalComponent = () => {
    const [walletAddress, setWalletAddress] = useState<string>('');
    const [isModal, setIsModal] = useState<string>('');

    const inputHandler = useCallback((e: any): void => {
        setWalletAddress(e.target.value)
    }, [])

    const pasteClipboard = (): void => {
        navigator.clipboard.readText().then(r => setWalletAddress(r))
    };

    const headers = {
        'Content-Type': 'application/json',
        Accept: 'application/json'
    };

    const handleSubmit = useCallback((): void => {
        if (walletAddress) {
            const obj: SubmitI = {
                address: walletAddress
            };
            fetch(`https://dubai.rocknblock.io/api/v1/payments/mint/`, {
                method: 'POST',
                headers,
                body: JSON.stringify(obj)
            }).then(response => {
                if (response.ok) {
                    setIsModal('Thanks for your request!')
                } else {
                    setIsModal('Request failed')
                }
            }).catch(() => {
                setIsModal('Request failed')
            });
        }
    }, [walletAddress])

    return (
        <Fragment>
            {isModal && <ThanksForRequestModal setIsModal={setIsModal} title={isModal} />}

            <div className={style.discount}>
                <img className={style['discount__bg_1']} src='../../assets/img/nftgift/header-background-1.svg' alt='bg' />
                <img className={style['discount__bg_2']} src='../../assets/img/nftgift/header-background-2.svg' alt='bg' />
                <h1>Get your <br /> <span>discount up to 10%</span></h1>
                <div className={style['discount__input']}>
                    <input value={walletAddress} onInput={(event): void => inputHandler(event)} placeholder='Enter your wallet address' />
                    {!walletAddress ? <button className={style['discount__input_desktop']} onClick={(): void => pasteClipboard()}>Paste</button> : null}
                    {!walletAddress ? <img src='../../assets/img/nftgift/icon-copy.svg' className={style['discount__input_mobile']} onClick={(): void => pasteClipboard()} alt='discount' /> : null}
                    <img className={style['discount__input_bg']} src='../../assets/img/nftgift/input-background.svg' alt= 'input bg' />
                </div>

                <a
                    rel="noreferrer"
                    onClick={(): void => handleSubmit()}
                    target="_blank"
                    className={`${style['about__buttons-contact']} ${style.btn} ${style['btn-orange-cl-solid']} ${style['btn.progress']} ${style['btn-rounded']}`}>
                    Get discount
                </a>
            </div>
        </Fragment>

    )
};

export default Discount;