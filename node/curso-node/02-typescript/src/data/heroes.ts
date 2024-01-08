interface Hero {
    id: number;
    name: string;
    owner: 'Marvel' | 'DC';
}

export const heroes: Hero[] = [
    {
        id: 1,
        name: 'irom-man',
        owner: 'Marvel',
    },
    {
        id: 2,
        name: 'spider-man',
        owner: 'Marvel',
    },
    {
        id: 3,
        name: 'superman',
        owner: 'DC',
    }
]