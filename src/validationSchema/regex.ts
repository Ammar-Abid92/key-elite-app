export const PASSWORD_VALIDATOR =
  /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*()_+:\\/,{}=\|`~<>\?€£¥•.-])[A-Za-z\d!@#$%^&*()_+:\\/,{}=\|`~<>\?€£¥•.-]{6,100}$/;
export const PASSWORD_CHECK = /^[^\[\]'";]*$/;
export const WEBSITE_VALIDATOR =
  /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)/;
export const PHONE_NUMBER = /^(\+\d{1,3}[-]?)?\d{7,12}$/;
export const ALPHABETS = /^[aA-zZ\s]+$/;
export const NUMBERS = /^[0-9\s]+$/;
export const ALPHANUMERIC = /^(?![0-9]*$)[a-zA-Z0-9" "]+$/;
export const EXCLUDE_EMOJI = /^[^\uD800-\uDBFF\uDC00-\uDFFF]+$/g;
