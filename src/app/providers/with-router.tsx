import { Suspense, ReactNode } from 'react';
import { BrowserRouter} from 'react-router-dom';

export const withRouter = (component: () => ReactNode) => () => (
    <Suspense fallback="Loading...">
        <BrowserRouter>{component()}</BrowserRouter>
    </Suspense>
);
