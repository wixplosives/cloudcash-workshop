import { createBoard } from '@wixc3/react-board';
import { CardBalance } from '../../../components/card-balance/card-balance';

export default createBoard({
    name: 'CardBalance',
    Board: () => <CardBalance title="Card Balance" />,
    isSnippet: true,
    environmentProps: {
    },
});
