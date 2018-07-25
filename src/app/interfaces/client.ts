export interface IClient {
    general: {
        firstName: string,
        lastName: string,
        avatar: string,
        fullName: string
    };
    job: {
        company: string,
        title: string
    };
    contact: {
        email: string,
        phone: string
    };
    address: {
        street: string,
        city: string,
        zipCode: string,
        country: string
    };
}
