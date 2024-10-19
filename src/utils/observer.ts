import { GenericFunction } from "@/types/common";

class Observable {
    observers: Record<string, any[]> = {}
  
    subscribe(key: string, callback: GenericFunction<any>) {
      if(!this.observers[key]) this.observers[key] = []
      this.observers[key].push(callback)
    }
  
    unsubscribe(key: string, callback: GenericFunction<any>) {
        if(!this.observers[key]) this.observers[key] = []
        this.observers[key] = this.observers[key].filter((observer) => observer !== callback);
    }
  
    notify(key: string, data: any) {
      this.observers[key].forEach((observer) => observer(data));
    }
}

export const observer = new Observable();