export type ReasonsKeys = 'dont-know' | 'extra-work' | 'lol';

export type ReasonType = {
    [reason in ReasonsKeys]: string;
}