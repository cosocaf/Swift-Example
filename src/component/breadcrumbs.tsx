import React, { useMemo } from "react";
import { Link } from "react-router-dom";

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
    return breadcrumbs.map((breadcrumb, index) => {
      if (index !== 0) path += "/";
      path += breadcrumb.file ?? "";
      return { file: path, displayName: breadcrumb.displayName };
    });
  }, [breadcrumbs]);
  return (
    <ol className={styles.breadcrumbs}>
      {paths.map((breadcrumb) => {
        return (
          <li key={breadcrumb.file}>
            <Link to={breadcrumb.file === "" ? "/" : breadcrumb.file}>
              {breadcrumb.displayName}
            </Link>
          </li>
        );
      })}
    </ol>
  );
};
