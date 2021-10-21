export const allDares = [
    {
        id:1,
        title: "Project One",
        description: "The first project.",
        goal: 150,
        image: "https://placekitten.com/200/300",
        is_open: false, 
        date_created:"2020-03-20T14:22:23.382748Z",
        owner: 1,
    },
]

export const oneDare = {
    id: 1,
    title: "Project One",
    description: "The first project.",
    goal: 150,
    image: "https://placekitten.com/200/300",
    is_open: false, 
    date_created:"2020-03-20T14:22:23.382748Z",
    owner: 1,
    dollars: [
        {
            id: 1,
            amount: 100, 
            comment: "A comment for the first pledge",
            anonymous: false, 
            supporter: 3, 
            dare_id: 1, 
        },
    ]

};