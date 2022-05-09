declare type Breadcrumb = {
    file?: string;
    displayName: string;
};
declare type BreadcrumbsProps = {
    breadcrumbs: Breadcrumb[];
};
export declare const Breadcrumbs: ({ breadcrumbs }: BreadcrumbsProps) => JSX.Element;
export {};
