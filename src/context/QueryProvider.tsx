// app/providers.jsx
"use client";

import { QueryClient, QueryErrorResetBoundary } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import * as React from "react";
import { ReactQueryStreamedHydration } from "@tanstack/react-query-next-experimental";
import { ErrorBoundary } from "react-error-boundary";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { createAsyncStoragePersister } from "@tanstack/query-async-storage-persister";
import { PersistQueryClientProvider } from "@tanstack/react-query-persist-client";
import { deserialize, serialize } from "wagmi";
import { hashFn } from "@wagmi/core/query";

export function QueryProvider(props: { children: React.ReactNode }) {
  const [queryClient] = React.useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            queryKeyHashFn: hashFn,
            staleTime: 5 * 1000,
            gcTime: 1_000 * 60 * 60 * 24,
          },
        },
      }),
  );

  // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-assignment
  const persister = createAsyncStoragePersister({
    serialize,
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    storage: AsyncStorage,
    deserialize,
  });

  return (
    <QueryErrorResetBoundary>
      {({ reset }) => (
        <ErrorBoundary
          onReset={reset}
          fallbackRender={({ resetErrorBoundary }) => (
            <div>
              There was an error!
              {/* eslint-disable-next-line @typescript-eslint/no-unsafe-return, @typescript-eslint/no-unsafe-call */}
              <button onClick={() => resetErrorBoundary()}>Try again</button>
            </div>
          )}
        >
          <PersistQueryClientProvider
            client={queryClient}
            // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
            persistOptions={{ persister }}
          >
            <ReactQueryStreamedHydration>
              {props.children}
            </ReactQueryStreamedHydration>
            <ReactQueryDevtools initialIsOpen={false} />
          </PersistQueryClientProvider>
        </ErrorBoundary>
      )}
    </QueryErrorResetBoundary>
  );
}
