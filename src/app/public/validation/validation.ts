import { FormControl, FormGroup } from '@angular/forms';

/*
功能： 两次输入密码是否一致
返回： 验证通过返回NULL | 验证不通过返回错误码passwordsame
 */
export const passwordSameValidator = (formGroup: FormGroup): { [key: string]: boolean } => {
    const password = formGroup.get('password') as FormControl;
    const checkPassword = formGroup.get('checkPassword') as FormControl;
    if (!password || !checkPassword) {
        return null;
    }
    return password.value === checkPassword.value ? null : { passwordsame: true };
};

/**
 * 功能： 电话号码验证
 * 返回： 验证通过返回NULL | 验证不通过返回错误信息码phoneNumber
 * @param {FormControl} formControl
 * @returns {{[p: string]: boolean}}
 */
export const phoneNumberValidator = (formControl: FormControl): { [key: string]: boolean } => {
    const MOBILE_REGEXP = /^1([358][0-9]|4[579]|66|7[0135678]|9[89])[0-9]{8}$/;
    if (!formControl) {
        return null;
    }
    return MOBILE_REGEXP.test(formControl.value) ? null : { phoneNumber: true };
};
