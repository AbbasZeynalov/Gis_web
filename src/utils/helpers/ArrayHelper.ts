export function removeValueArray(arr: any, value: any) {
    const array = [...arr];
    const index = array.indexOf(value);

    if (index > -1) {
        // console.log('spliceeee ', index)
        // console.log('before ', array)
        array.splice(index, 1);
    }

    // console.log('after ', array)
    return array;
}
