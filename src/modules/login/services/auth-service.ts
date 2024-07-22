import { AxiosService } from "@/services/axios/service";
import { AxiosProxy } from "@/services/axios/proxy";
import { AuthParams } from "@/modules/login/types/auth";
import { AuthInfo } from "@/types/auth";
import { Response } from "@/types/response";

class AuthProxy extends AxiosProxy {
    login = (params: any) => this.post({url: 'login', data: params})
}

const MasterAuthProxy = new AuthProxy();

class AuthService extends AxiosService {
    login = (params: AuthParams): Promise<Response<AuthInfo>> => this.fetch(() => MasterAuthProxy.login(params))
}

const MasterAuthService = new AuthService();

export default MasterAuthService;