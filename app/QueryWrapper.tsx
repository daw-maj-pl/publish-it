'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from 'react-hot-toast';

interface Props {
  children?: React.ReactNode;
}

const queryClient = new QueryClient();

const QueryWrapper = ({ children }: Props) => (
  <QueryClientProvider client={queryClient}>
    {children}
    <Toaster />
  </QueryClientProvider>
);

export default QueryWrapper;