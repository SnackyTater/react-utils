export type Response<T> = {
    success: boolean;
    code: number;
    data: T;
}