import {
    FunctionComponent, h
} from 'preact';
import { useEffect, useState } from 'preact/hooks';
import styles from './PopupPreloader.module.scss';

interface Props {
    timeout: number;
}

const PopupPreloader: FunctionComponent<Props> = ({timeout}: Props) => {
    const [showPreloader, setShowPreloader] = useState(true);
    
    useEffect(() => {
        if (showPreloader) {
            setTimeout(() => {setShowPreloader(false)}, timeout)
        }
    }, []);

    const Preloader: FunctionComponent =  () => (
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

    return showPreloader ? <Preloader /> : null;
} 

export default PopupPreloader;
