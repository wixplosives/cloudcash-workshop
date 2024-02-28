import classNames from 'classnames';
import { Sidebar } from '../sidebar/sidebar';
import { GetLoanBanner } from '../get-loan-banner/get-loan-banner';
import { Goals } from '../goals/goals';
import { NewTransaction } from '../new-transaction/new-transaction';
import { OutcomeStatistics } from '../outcome-statistics/outcome-statistics';
import PageHeader from '../page-header/page-header';
import { TransactionHistory } from '../transaction-history/transaction-history';
import styles from './dashboard-layout.module.scss';
import { CardBalance } from '../card-balance/card-balance';

interface DashboardLayoutProps {
    className?: string;
}

export const DashboardLayout = ({ className }: DashboardLayoutProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <Sidebar className={styles.sidebar} />
            <div className={styles.pageContent}>
                <div className={styles.section}>
                    <div className={styles.sectionContent}>
                        <PageHeader className={styles.header}>
                            <PageHeader.Title>Weekly Summary</PageHeader.Title>
                        </PageHeader>
                    </div>
                </div>

                <div className={styles.section}>
                    <div
                        className={classNames(
                            styles.sectionContent,
                            styles.dashboardGrid
                        )}
                    >
                        <div className={styles.mainColumn}>
                            <CardBalance title="Card Balance" />
                            <TransactionHistory />
                        </div>
                        <div className={styles.secondaryColumn}>
                            <Goals />
                            <OutcomeStatistics />
                            <div className={styles.userActionsSection}>
                                <NewTransaction />
                                <GetLoanBanner />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
