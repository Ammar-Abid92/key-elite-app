export enum API_MODES {
    GET = 'get',
    POST = 'post',
    PUT = 'put',
    PATCH = 'patch',
    DELETE = 'delete',
  }
  
  export enum HTTP_STATUS {
    OK = 200,
    CREATED = 201,
    BAD_REQUEST = 400,
    UNAUTHORIZED = 401,
    SERVER_ERROR = 500,
    PAYLOAD_TOO_LARGE = 413,
  }
  
  export enum CONTENT_TYPE {
    JSON = 'application/json',
    FORM_DATA = 'multipart/form-data',
  }

  export enum OtpRoutes {
    SIGNUP = 0,
    LOGIN = 1,
    FORGOT_PASSWORD = 2,
  }
  
  export enum DeviceType {
    Android = 1,
    iOS = 2,
  }
  
  export enum ProviderType {
    Google = 1,
    Apple = 2,
  }