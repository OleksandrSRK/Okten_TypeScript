function sortNums(array: number[],direction: string): number[] | string{
    if(direction === 'ascending'){
        return array.sort((a,b) => a - b);
    }else if(direction === 'descending'){
        return array.sort((a,b) => a + b);
    }
    return '!!!ERROR!!!';
}

let arr: number[] = [10,8,-7,55,987,-1011,0,1050,0];

console.log(sortNums(arr, `descending`));
