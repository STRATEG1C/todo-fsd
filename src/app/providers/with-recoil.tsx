import { ReactNode, Suspense } from 'react';
import { RecoilRoot } from 'recoil';

export const withRecoil = (component: () => ReactNode) => () => (
    <RecoilRoot>
      <Suspense fallback={"Loading..."}>
        {component()}
      </Suspense>
    </RecoilRoot>
);
