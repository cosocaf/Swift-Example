import React from "react";
declare type MessageProps = {
    level: "info" | "warning" | "error";
    children?: React.ReactNode;
};
export declare const Message: ({ level, children }: MessageProps) => JSX.Element;
export {};
