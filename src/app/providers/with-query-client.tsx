import React, { ReactNode } from 'react';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';

const queryClient = new QueryClient();

export const withQueryClient = (component: () => ReactNode) => () => {
    return (
        <QueryClientProvider client={queryClient}>
            {component()}
        </QueryClientProvider>
    )
}
