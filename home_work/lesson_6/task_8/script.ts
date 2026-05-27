type Course = {
    title: string,
    monthDuration: number,
    id?: number
};

let coursesAndDurationArray: Course[] = [
    {title: `JavaScript Complex`, monthDuration: 5},
    {title: `Java Complex`, monthDuration: 6},
    {title: `Python Complex`, monthDuration: 6},
    {title: `QA Complex`, monthDuration: 4},
    {title: `FullStack`, monthDuration: 7},
    {title: `Frontend`, monthDuration: 4}
];

let sort: Course[] = coursesAndDurationArray.sort((a: Course, b: Course): number => a.monthDuration - b.monthDuration);

let filter: Course[] = sort.filter(item => item.monthDuration > 5);

let map: Course[] = filter.map((value: Course, index: number): Course => {
    value.id = index + 1;
    return value;
});


console.log(map);
