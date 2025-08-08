export class AxiosService {
    fetch = async <T>(action: () => Promise<T>) => {
        try{
            const response = await action();
            return response;
        } catch(err: any) {
            return {
                success: false,
                code: err.request?.status,
                data: null,
            }
        }
    }
}