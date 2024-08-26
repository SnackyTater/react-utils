import axios, { CancelTokenSource } from 'axios';

class CancelTokenController {
    sources: Record<string, CancelTokenSource[]> = {}

    register(name: string) {
        const token = axios.CancelToken.source();
        this.add(token, name);
        return token;
    }

    add(token: CancelTokenSource, name: string) {
        if(this.sources[name]){
            this.sources[name].push(token)
        } else {
            this.sources[name] = [token]
        }
    }

    delete(name: string) {
        if(this.sources[name]) {
            this.sources[name].forEach((token: CancelTokenSource) => token.cancel())
            delete this.sources[name];
        }
    }
}

const cancelTokenController = new CancelTokenController();

export default cancelTokenController;