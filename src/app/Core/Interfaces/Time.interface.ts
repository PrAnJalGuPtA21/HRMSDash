export interface checkIn{
    day: string,
    checkInTime : string[3],
    date :string ,
    flag ?: number
}

export interface checkOut{
    day : string,
    checkOutTime : string[3],
    date : string ,
    flag ?: number
}