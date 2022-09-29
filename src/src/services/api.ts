import useSWR, { SWRConfiguration } from "swr";
import { ENDPOINT } from "@configs";
import { omitEmpty } from "@helpers";

const createSearchParams = (add_params: Record<string, any>) => {
    return new URLSearchParams([...Object.entries(add_params)]).toString();
};

export const fetcher = async <T>({ path = "", params = {}, options = {} as RequestInit }): Promise<T> => {
    let url = ENDPOINT + path;
    const method = options.method || "GET";
    const headers = new Headers(options.headers);
    let body;
    if (method === "POST" || method === "PUT") {
        if (params) {
            if (params instanceof FormData) {
                body = params;
            } else {
                body = JSON.stringify(params);
                headers.set("Content-Type", "application/json");
            }
        }
    } else if (params) {
        url += "?" + createSearchParams(omitEmpty(params));
    }

    const res = await fetch(url, { ...options, headers, body, method });
    const data = await res.json();
    if (!res.ok) {
        const err: Error & { code?: number } = new Error(data?.message || data?.error);
        err.code = data?.code;
        throw err;
    }

    return data;
};

export function useAPI<T>(
    path?: string | null | false,
    params?: object,
    options?: RequestInit,
    swrOptions?: SWRConfiguration,
) {
    const { data, isLoading, error, mutate } = useSWR<T>(
        path ? [{ path, params, options }, "useAPI"] : null,
        ([params]) => fetcher(params),
        swrOptions || {
            revalidateOnFocus: false,
            revalidateIfStale: false,
            shouldRetryOnError: false,
        },
    );

    return { data, error, loading: isLoading, mutate };
}

const api = {
    GET<T>(path = "", params = {}, options = {} as RequestInit) {
        return fetcher<T>({ path, params, options: { ...options, method: "GET" } });
    },
    POST<T>(path = "", params = {}, options = {} as RequestInit) {
        return fetcher<T>({ path, params, options: { ...options, method: "POST" } });
    },
    PUT<T>(path = "", params = {}, options = {} as RequestInit) {
        return fetcher<T>({ path, params, options: { ...options, method: "PUT" } });
    },
    DELETE<T>(path = "", params = {}, options = {} as RequestInit) {
        return fetcher<T>({ path, params, options: { ...options, method: "DELETE" } });
    },
};

export default api;
