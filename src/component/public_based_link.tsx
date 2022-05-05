import React from "react";
import { Link } from "react-router-dom";

type PublicBasedLinkProps = {
  children?: React.ReactNode;
  className?: string;
  to: string;
};
export const PublicBasedLink = ({
  children,
  className,
  to,
}: PublicBasedLinkProps) => {
  return (
    <Link to={`${process.env.PUBLIC_URL ?? ""}${to}`} className={className}>
      {children}
    </Link>
  );
};
