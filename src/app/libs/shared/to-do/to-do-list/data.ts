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
        item:'This is example data. please add you own data',
        statusid:1
    },
    {
        item:'This is example data. please add you own data',
        statusid:2
    }

]