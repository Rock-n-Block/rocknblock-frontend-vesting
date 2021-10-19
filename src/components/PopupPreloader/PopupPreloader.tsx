import {
    FunctionComponent, h
} from 'preact';
import { useEffect } from 'preact/hooks';
import styles from './PopupPreloader.module.scss';

interface Props {
    showPreloader: boolean;
    setShowPreloader(isSet: boolean): void;
}

const PopupPreloader: FunctionComponent<Props> = ({showPreloader, setShowPreloader}: Props) => {
    
    useEffect(() => {
        if (showPreloader) {
            setTimeout(() => {setShowPreloader(false)}, 2000)
        }
    }, []);

    return (
        <div className={styles.preloader}>
            <div className={styles.preloader__iconWrapper}>
                <img
                    src={'../../assets/img/farming/icon-loader.svg'}
                    alt='loading'
                    className={styles.preloader__icon}
                />
            </div>
        </div>
    );
} 

export default PopupPreloader;
