
export class ApiResponse {
    statusCode: number;   
    message: string;
    data?: any;
    token?: string;

    constructor(
        statusCode: number,
        message: string,
        data?: any,
        token?: string,
    )
    {
        this.statusCode = statusCode;
        this.message = message;
        this.data = data;
        this.token = token;
    }
}