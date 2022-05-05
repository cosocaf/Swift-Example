import React, { useMemo } from "react";
import { PublicBasedLink } from "./public_based_link";

import styles from "../sass/component/breadcrumbs.scss";

type Breadcrumb = {
  file?: string;
  displayName: string;
};
type BreadcrumbsProps = {
  breadcrumbs: Breadcrumb[];
};
export const Breadcrumbs = ({ breadcrumbs }: BreadcrumbsProps) => {
  const paths = useMemo(() => {
    let path = "";
    return breadcrumbs.map((breadcrumb) => {
      if (path !== "") path += "/";
      path += breadcrumb.file ?? "";
      return { file: path, displayName: breadcrumb.displayName };
    });
  }, [breadcrumbs]);
  return (
    <ol className={styles.breadcrumbs}>
      {paths.map((breadcrumb) => {
        return (
          <li key={breadcrumb.file}>
            <PublicBasedLink to={breadcrumb.file}>
              {breadcrumb.displayName}
            </PublicBasedLink>
          </li>
        );
      })}
    </ol>
  );
};
