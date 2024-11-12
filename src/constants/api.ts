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

export const BASE_URLS = {
  PROD: '',
  QA: '',
  DEV: 'https://api.examplefodev.shop/api',
  TEST: 'https://8a42-206-42-123-162.ngrok-free.app/api/',
};

export const PAGE_SIZE = 20;

export const STALE_TIME = 60 * 1000;

export const CACHE_TIME = 1000 * 60 * 60 * 24;
