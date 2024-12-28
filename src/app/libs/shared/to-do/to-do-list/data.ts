export interface ToDO{
    item:string,
    statusid:number
}

export interface Status{
    status:string,
    id:number
}

export const statuses:Status[] = [
    {
        status:'In Progress',
        id:1
    },
    {
        status:'Finished',
        id:2
    }
]

export const data : ToDO[]= [
    {
        item:'Need to finish the report within today.',
        statusid:1
    },
    {
        item:'Visit Ram home for dinner.',
        statusid:2
    }

]
