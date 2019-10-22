export const InputStateObj = (error: boolean = false, errorMessage: string = '', value: string | Date = '') => {
    return {
        error: error,
        errorMessage: errorMessage,
        value: value
    }
}

