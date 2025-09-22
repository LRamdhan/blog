const apiResponse = {
  success: (message: string = "Success", data: Array<any> | Object = {}, status: number = 200) => {
    return Response.json({
      success: true,
      message,
      data
    }, {
      status
    })
  },

  badRequest: (message: string = "Bad Request", data: Array<any> | Object = {}, status: number = 400) => {
    return Response.json({
      success: false,
      message,
      data
    }, {
      status
    })
  },

  notFound: (message: string = "Not Found", data: Array<any> | Object = {}, status: number = 404) => {
    return Response.json({
      success: false,
      message,
      data
    }, {
      status
    })
  },

  unauthorized: (message: string = "Unauthorized", data: Array<any> | Object = {}, status: number = 401) => {
    return Response.json({
      success: false,
      message,
      data
    }, {
      status
    })
  },

  error: (message: string = "Error", data: Array<any> | Object = {}, status: number = 500) => {
    return Response.json({
      success: false,
      message,
      data
    }, {
      status
    })
  }
}

export default apiResponse