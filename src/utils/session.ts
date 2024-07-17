export const store = (key: string, value: any) => sessionStorage.setItem(key, value);

export const get = (key: string) => sessionStorage.getItem(key);

export const storeAuthSession = (value: boolean) => sessionStorage.setItem('auth', JSON.stringify(value));

export const getAuthSession = () => sessionStorage.getItem('auth') === 'true';