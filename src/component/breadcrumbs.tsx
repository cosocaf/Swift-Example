import React from "react";
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
  return (
    <ol className={styles.breadcrumbs}>
      {breadcrumbs.map(
        function (this: { path: string }, breadcrumb, index) {
          if (index != 0) this.path += "/";
          this.path += breadcrumb.file ?? "";
          return (
            <li key={this.path}>
              <PublicBasedLink to={this.path}>
                {breadcrumb.displayName}
              </PublicBasedLink>
            </li>
          );
        },
        { path: "" },
      )}
    </ol>
  );
};
