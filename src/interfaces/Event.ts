interface Event {
    id: number;
    eventName: string;
    description: string;
    date: string;
    time_from: string;
    time_to: string;
    userId: number;
    cancelled: boolean;
    user: {
        id: number;
        username: string;
        description: string;
    }
    persons: PersonEvent[];
}