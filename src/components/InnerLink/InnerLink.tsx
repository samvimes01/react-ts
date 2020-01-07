import React, { FC } from 'react';
import { Link } from '@reach/router';

import './InnerLink.css';

export interface LinkProps {
  to: string;
  children: string | JSX.Element | JSX.Element[];
}

const InnerLink: FC<LinkProps> = ({ to, children }: LinkProps) => (
  <Link to={to} className="inner-link">
    {children}
  </Link>
);

export default InnerLink;
