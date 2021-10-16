import {FunctionalComponent, h} from 'preact';
import BlockHeader from '../block-header';

import style from './style.scss';
import {useState} from "preact/hooks";
import {overview, team, tabs} from "./mock";

const Team: FunctionalComponent = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleClick = (index: number): void => {
    setActiveTab(index);
  }

  return (
    <div className={`${style.team} ${style.container}`} id="team">
      <div className={style['background-img']}>
        <img src="../../assets/img/background-team.png" alt="background-img" />
      </div>
      <BlockHeader
        style={style}
        primary="Team"
        secondary="A team of highly qualified specialists:"
      />
      <div className={style.team__tabs}>
        <div className={`${style.tabs__tablinks} ${style.tablinks}`}>
          {tabs.map((tab, index) => (
            <button
              key={tab}
              type="button"
              className={`${style.team__tablinks__link} ${style.tablinks__link} ${activeTab === index ? style['link-active'] : null}`}
              onClick={(): void => handleClick(index)}
            >{tab}</button>
          ))}
        </div>
        <div className={style.scroll}>
          <div id="team__development-tab" className={style.team__content}>
            {activeTab === 0 ? team.dev.map((item) => (
              <div key={`${item.name}_-_`} className={style.content__card}>
                <picture>
                  <source type="image/webp" srcSet={`../../assets/img/team-${item.img}-min.webp`} />
                  <img src={`../../assets/img/team-${item.img}-min.png`} alt={item.name} />
                </picture>

                <h3 className={style.content__card__post}>{item.post}</h3>
                <h4 className={style.content__card__name}>{item.name}</h4>
                <div className={style.content__card__exp}>
                  <div>
                    <h5 className={style.content__card__exp__title}>Experience:</h5>
                    <ul className={style.content__card__exp__list}>
                      {item.skills.map((skill: string) => (
                        <li key={skill} className={style.content__card__exp__list__item}>{skill}</li>
                      ))}
                    </ul>
                  </div>
                  <div className={style.content__card__exp__stacks}>
                    <h5 className={style.stacks__title}>Stack:</h5>
                    <ul className={style['gray-list']}>
                      {item.stacks.map((stack: string) => (
                        <li className={`${style['stacks__item']} ${style['gray-list__item']}`}
                            key={stack}>{stack}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            )) : team.mng.map((item) => (
              <div key={item.name} className={style.content__card__mng}>
                <picture>
                  <source type="image/webp" srcSet={`../../assets/img/team-${item.img}-min.webp`} />
                  <img src={`../../assets/img/team-${item.img}-min.png`} alt="image of manager" />
                </picture>

                <div className={style.description}>
                  <div className={style.description__name}>{item.name}</div>
                  <div className={style.description__post}>{item.post}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <ul className={style.team__overview}>
        {overview.map(item => (
          <li className={style.team__overview__item} key={item.primary}>
            <div className={style.team__overview__item__number}>{item.number}</div>
            <div className={`${style['team__overview__item__primary-text']} ${style.text}`}>{item.primary}</div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Team;
