import * as fs from 'fs';
import * as child_process from 'child_process';

if (!process.env.MAKCORPS_API_KEY) console.warn('missing process.env.MAKCORPS_API_KEY!');

import * as request from 'request';

export interface Hotel {
    "vendor3-price": string,
    "vendor2": string,
    "Hotel": string,
    "vendor1": string,
    "vendor3": string,
    "vendor2-price": string,
    "Best-price": string,
    "vendor1-price": string
}

export function getHotels() {
    return new Promise<{ comparison: Hotel[] }>((resolve, reject) => {
        const options = {
            method: 'GET',
            url: 'https://api.makcorps.com/free/orlando',
            headers: {
                Authorization: `JWT ${process.env.MAKCORPS_API_KEY}`
            }
        };

        request(options, (error, response, body) => {
            if (error) {
                console.log(error);
                return resolve(cachedResponse);
            }
            console.log(body);
            try {
                const parsed = JSON.parse(body);
                if (parsed.message || !parsed.comparison) return resolve(cachedResponse);
                return resolve(cachedResponse);

            } catch (error) {
                return resolve(cachedResponse);
            }
        });
    });
}

const cachedResponse = {
    "comparison": [
        {
            "vendor3-price": "223",
            "vendor2": "Agoda.com",
            "Hotel": "SponsoredHomewood Suites by Hilton Orlando - UCF Area",
            "vendor1": "Booking.com",
            "vendor3": "Hotelpower.com",
            "vendor2-price": "177",
            "Best-price": "\u00a0223\u00a0177Homewood",
            "vendor1-price": "176"
        },
        {
            "vendor3-price": "214",
            "vendor2": "Expedia.com",
            "Hotel": "Comfort Suites",
            "vendor1": "ComfortSuites",
            "vendor3": "Hotelpower.com",
            "vendor2-price": "179",
            "Best-price": "\u00a0214\u00a0169Booking.com",
            "vendor1-price": "179"
        },
        {
            "vendor3-price": "230",
            "vendor2": "Agoda.com",
            "Hotel": "Hilton Garden Inn Orlando Airport",
            "vendor1": "Booking.com",
            "vendor3": "Hotelpower.com",
            "vendor2-price": "171",
            "Best-price": "\u00a0181GardenInn.com",
            "vendor1-price": "171"
        },
        {
            "vendor3-price": "316",
            "vendor2": "Cancelon",
            "Hotel": "Hyatt Regency Orlando",
            "vendor1": "Hyatt.com",
            "vendor3": "Otel.com",
            "vendor2-price": "217",
            "Best-price": "\u00a0255Booking.com",
            "vendor1-price": "255"
        },
        {
            "vendor3-price": "349",
            "vendor2": "Cancelon",
            "Hotel": "Rosen Centre Hotel",
            "vendor1": "Expedia.com",
            "vendor3": "Hotelpower.com",
            "vendor2-price": "277",
            "Best-price": "\u00a0280Booking.com",
            "vendor1-price": "308",
            "Bulk-Discount": true
        },
        {
            "vendor3-price": "177",
            "vendor2": "Agoda.com",
            "Hotel": "Marriott Orlando Downtown",
            "vendor1": "Marriott Hotels",
            "vendor3": "getaroom.com",
            "vendor2-price": "176",
            "Best-price": "\u00a0177\u00a0165Booking.com",
            "vendor1-price": "165",
            "Bulk-Discount": true
        },
        {
            "vendor3-price": "189",
            "vendor2": "Agoda.com",
            "Hotel": "SponsoredHome2 Suites by Hilton Orlando South Park",
            "vendor1": "Booking.com",
            "vendor3": "getaroom.com",
            "vendor2-price": "172",
            "Best-price": "\u00a0189\u00a0172Home2.com",
            "vendor1-price": "172"
        }
    ]
}