import styles from './card-balance.module.scss';
import classNames from 'classnames';
import { CreditCardSvg } from '../credit-card-svg/credit-card-svg';
import { Balance } from '../balance/balance';

export interface CardBalanceProps {
    className?: string;
    children?: React.ReactNode;
    title?: string;
}

export const CardBalance = ({
    className,
    title = 'Title',
    children = 'CardBalance',
}: CardBalanceProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <h4>{title}</h4>
            <div className={styles.contentLayout}>
                <CreditCardSvg
                    logo="Cloudcash"
                    cardNumberStartsWith="5789"
                    cardNumberEndsWith="2847"
                    cardHolderName="Mike Smith"
                    expireDateMonth="06"
                    expireDateYear="22"
                />
                <Balance />
            </div>
        </div>
    );
};
