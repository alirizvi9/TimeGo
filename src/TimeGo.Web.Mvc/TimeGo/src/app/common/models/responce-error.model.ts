import {ErrorCodes} from '../enums/error-codes.enum';

export interface ResponceError {
    isSuccess:boolean;
    message :string;
    innerError: string;
    errorCodes: ErrorCodes;
}