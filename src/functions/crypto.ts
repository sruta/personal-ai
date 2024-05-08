import {IFunction} from "./type";
import {IRequest} from "../chat";

const BASE_URL = "https://cryptoprices.cc/";

export const getPrices = async (ticker: string): Promise<string> => {
    const url = `${BASE_URL}`;
    try {
        const response = await fetch(url + ticker);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        return JSON.stringify(data);
    } catch (error) {
        console.error("Failed to fetch crypto prices:", error);
        return JSON.stringify({error: "Failed to fetch crypto prices"});
    }
};

export const crypto: IFunction = {
    type: "function",
    function: {
        name: "get_crypto_prices",
        description: "Get the current crypto prices",
        parameters: {
            type: "object",
            properties: {
                ticker: {
                    type: "string",
                    description: "The ticker to get the price for",
                }
            },
        },
    },
    async execute(args: any, req: IRequest) {
        return await getPrices(args.ticker);
    },
};
