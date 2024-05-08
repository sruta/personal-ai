import {weather} from "./weather";
import {crypto} from "./crypto";
import {IFunction} from "./type";
import {IRequest} from "../chat";

const functions: IFunction[] = [weather, crypto];

const handle = async (
    name: string,
    args: any,
    req: IRequest
): Promise<string> => {
    const func = functions.find((f) => f.function.name === name);
    if (!func) return "";
    return func.execute(args, req);
};

export const FunctionHandler = {
    handle,
    functions,
};
