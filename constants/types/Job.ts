

export enum Status {
    ACTIVE = "Active",
    INACTIVE = "Inactive"
}

export interface Job{
    id: string;
    title: string;
    description: string;
    salary: string;
    location: string;
    companyId: string;
    status: Status;

}


