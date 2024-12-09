import { QueryClient } from "@tanstack/query-core";
import { cache } from "react";

// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call
const getQueryClient = cache(() => new QueryClient());

export default getQueryClient;
