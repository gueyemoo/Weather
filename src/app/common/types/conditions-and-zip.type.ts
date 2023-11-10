import { CurrentConditions } from '../../components/main-page/current-conditions/current-conditions.type';

export interface ConditionsAndZip {
    zip: string;
    data: CurrentConditions | CurrentConditionsWithTimestamp;
}

export interface CurrentConditionsWithTimestamp {
    data: CurrentConditions;
    timestamp: number;
}