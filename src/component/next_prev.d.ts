declare type NextPrevProps = {
    prev?: {
        link: string;
        title: string;
    };
    next?: {
        link: string;
        title: string;
    };
};
export declare const NextPrev: ({ prev, next }: NextPrevProps) => JSX.Element;
export {};
