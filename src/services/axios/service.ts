export class AxiosService {
    fetch = async(action: () => Promise<any>) => {
        try{
            const response = await action();
            return response.data;
        } catch(err: any) {
            return {
                success: false,
                code: err.request.status,
                data: null,
            }
        }
    }
}