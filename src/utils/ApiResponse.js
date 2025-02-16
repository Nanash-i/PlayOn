class ApiResponse{
    constructor(data,message,statuscode){
        this.statuscode=statuscode
        this.message=message
        this.data=data
        this.success=statuscode<400
    }
}

export {ApiResponse}