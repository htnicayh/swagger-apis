import { HttpStatus } from "@nestjs/common"

export class Response {
    public status: number
    public message: string
    public data: any

    constructor(status?: number, message?: string, data?: any) {
        this.status = status || HttpStatus.OK
        this.message = message || 'Create request successfully.'
        this.data = data || null
    }
}