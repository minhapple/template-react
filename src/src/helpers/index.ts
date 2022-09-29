export function truncateAddress(addr: string, max = 9) {
    max = Math.max(max, 8);
    const head = Math.floor((max - 3) / 2);
    const tail = Math.ceil((max - 3) / 2);

    return addr.substring(0, head) + "..." + addr.substring(addr.length - tail);
}

export const omitEmpty = (params: { [key: string]: string }) =>
    Object.keys(params)
        .filter(k => params[k] !== undefined)
        .reduce((c, v) => ({ ...c, [v]: params[v] }), {});
