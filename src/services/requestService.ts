import {_hideSpinner, _showSpinner} from '@Components/Loader/Spinner';
import {API_MODES, HTTP_STATUS} from '@Constants/api';
import {showToast as showErrorToast} from 'rn-animated-toast';
import apiService from './apiService';

type TRequestProps = {
  url: string;
  method: API_MODES;
  params?: object;
  config?: any;
  showLoader?: boolean;
  showToast?: boolean;
};

export async function request({
  url, //Service url
  method, //Web Service type 'post,get,put,delete....'
  params, //Paramter for request
  config, //APIrequest Configuration
  showLoader = false, //Show spinner
  showToast = true,
}: TRequestProps) {
  showLoader && _showSpinner();
  const response = (await apiService[method]?.(url, params, config)) || {};

  if (response.ok) {
    showLoader && _hideSpinner();
    return response;
  } else {
    const error = response?.data?.metadata;
    console.log('response :>> ', JSON.stringify(error), url);
    showLoader && _hideSpinner();
    showToast && showErrorToast(error?.message, 'error');

    // @ts-ignore
    throw new Error(error.message, {
      cause: url == 'tokens' ? HTTP_STATUS.BAD_REQUEST : response.status,
    });
  }
}
