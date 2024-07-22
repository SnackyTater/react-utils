export class AxiosService {
    fetch = async(action: Function) => {
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