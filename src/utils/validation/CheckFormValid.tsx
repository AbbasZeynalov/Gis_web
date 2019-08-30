import {FormEvent} from "react";

export const CheckFormValid = (event: any, inputs: string[], errMessage: any) => {

    let errorsArr: string[] = [];
    let queryArr: any = [];

    inputs.map((input: string) => {
        let value = event.target.querySelector(`input[name=${input}]`).value;

        queryArr[input] = value;

        if (value === '') {
            // @ts-ignore
            errorsArr[input] = {
                error: true,
                errorMessage: errMessage[input],
                value: ''
            }
        }
    });

    if (Object.keys(errorsArr).length) {
        return errorsArr;
    } else {
        return true;
    }
}

