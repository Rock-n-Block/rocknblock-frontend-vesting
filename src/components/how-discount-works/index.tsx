import { FunctionalComponent, h } from 'preact';
import style from './style.scss';

const HowDiscountWorks: FunctionalComponent = () => {

    return (
        <div className={style['how_discount']}>
            <h2>How it works</h2>
            <img className={style['how_discount__roadmap']} src='../../assets/img/nftgift/roadmap.svg' alt='roadmap' />
            <div>
                <div className={`${style['how_discount_item']}`}>
                    <div>1.</div>
                    <h3><span>Scan our unique QR</span> code on banners or the Internet</h3>
                </div>
                <div className={`${style['how_discount_item']}`}>
                    <div>2.</div>
                    <h3><span>Enter your wallet address</span> and get a discount</h3>
                </div>
                <div className={`${style['how_discount_item']}`}>
                    <div>3.</div>
                    <h3>The discount will be automatically added to your <span>OpenSea profile</span></h3>
                </div>
                <div className={`${style['how_discount_item']}`}>
                    <div>4.</div>
                    <h3>Contact us in any social network or <span>leave a request</span> on our site</h3>
                </div>
                <div className={`${style['how_discount_item']}`}>
                    <div>5.</div>
                    <h3><span>Get a discount</span> on any development project</h3>
                </div>
                <div className={`${style['how_discount_item']}`}>
                    <div>6.</div>
                    <h3><span>Experience a quality</span> and innovative approach, to you personally</h3>
                </div>
            </div>

            <img className={style['how_discount__bg_1']} src='../../assets/img/nftgift/footer-background.svg' alt='bg' />
            <img className={style['how_discount__bg_2']} src='../../assets/img/nftgift/footer-background-2.svg' alt='bg' />
        </div>
    )
};

export default HowDiscountWorks;