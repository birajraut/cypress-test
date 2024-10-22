import axios from 'axios';

const AIM_BASEURL = Cypress.env('AIM_BASEURL');

// Define types
interface CredentialData {
    token: string;
    school: string;
}

export async function signIn(loginSecret: string): Promise<{ token: string; school: string[] }> {

    return axios.post(`${AIM_BASEURL}/api/v1/auth/`)
        .then((response) => {
            return {
                token: response.data.jwt,
                school: response.data.schools,
            };
        })
        .catch((error) => {
            console.error('Unable to login', error);
            throw new Error(error);
        });
}

export async function getSiteConfig(credentials: CredentialData): Promise<any> {
    const headers = {
        'Content-Type': 'application/json',
        Authorization: `JWT ${credentials.token}`,
    };

    return axios.get(`${AIM_BASEURL}/api/v2/school/${credentials.school}/?is_announce=true`,
        {
            headers
        })
        .then((response) => {
            return response.data;
        })
        .catch((error) => {
            console.error('Unable to get site config', error);
            throw new Error(error);
        });
}

export async function checkVendorExists(credentials: CredentialData, vendorName: string): Promise<any> {
    console.debug(`${process.env.base_url_dirs}/api/v2/vendors/?name=${vendorName}`);

    return axios.get(`${process.env.base_url_dirs}/api/v2/vendors/?name=${vendorName}`, {
        headers: {
            Authorization: `JWT ${credentials.token}`,
        },
    })
        .then((response) => {
            return response.data;
        })
        .catch((error) => {
            console.error('Unable to get vendor detail', error);
            throw new Error(error);
        });
}
