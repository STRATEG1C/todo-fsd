import compose from 'compose-function';
import { withRouter } from './with-router';
import { withQueryClient} from './with-query-client';
import { withRecoil } from './with-recoil';

export const withProviders = compose(withRecoil, withQueryClient, withRouter);
