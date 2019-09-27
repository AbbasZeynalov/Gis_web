export const CheckFormValid = (event: any, inputs: string[], errMessage: any) => {
    let errorsArr: any = {};

    inputs.map((input: string) => {
        let value = event.target.querySelector(`input[name=${input}]`).value;

        if (value === '')
            errorsArr[input] = {
                value: '',
                error: errMessage[input]
            }
    });

    if (Object.keys(errorsArr).length) {
        return errorsArr;
    } else {
        return true;
    }
};

