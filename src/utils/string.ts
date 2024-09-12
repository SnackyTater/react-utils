export const cn = (...args: (string | undefined)[]) => args
    .filter(_ => _)
    .reduce((prev, cur, index) => {
        if(!index) return cur;
        return prev + ' ' + cur;
    }) as string;
