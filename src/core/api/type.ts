export interface ServerResponse<T = any> {
    data: T | any;
    msg: string;
    code: string;
    success: boolean;
}

export interface ServerError {
    msg: string;
    code: string;
    success: boolean;
}
