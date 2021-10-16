import {Fragment, FunctionalComponent, h} from 'preact';
import {Discount, HowDiscountWorks} from "../../components";

const NftGiftPage: FunctionalComponent = () => {
    return (
        <Fragment>
            <Discount />
            <HowDiscountWorks />
        </Fragment>
    );
};

export default NftGiftPage;