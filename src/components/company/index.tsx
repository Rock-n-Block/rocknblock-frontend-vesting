import {FunctionalComponent, h} from 'preact';

import style from './style.scss';
import {contacts, info} from "./mock";
import {ContactsI, InfoI} from "../../types";

const Company: FunctionalComponent = () => (
  <div className={style.container}>
    <img className={style.bg__2} src="../../assets/img/background-about-3.png" alt="bg img" />
    <div className={style.blocks}>
      <div className={style.company}>
        <h2>Rock'n'Block</h2>
        <div className={style.company__info}>
          {info.map((item: InfoI) => (
            <div key={item.title} className={style.company__info__item}>
              <div className={style.company__info__item__title}>{item.title}</div>
              <img src="../../assets/img/line-orange.svg" alt="orange line" />
              <div className={style.company__info__item__text}>{item.text}</div>
            </div>
          ))}
        </div>
      </div>
      <div className={style.contacts}>
        <h2>Contacts</h2>
        <div className={style.contacts__info}>
          {contacts.map((item: ContactsI) => (
            <div key={item.name} className={style.contacts__info__item}>
              <div className={style.contacts__info__item__img}>
                <img src={`../../assets/img/icons/icon-footer-${item.name}-mask.svg`} alt={`${item.name} icon`} />
              </div>
              <div className={style.contacts__info__item__content}>{item.content}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
    <img className={style.bg__3} src="../../assets/img/background-partners.png" alt="bg img" />
  </div>
)

export default Company;
