import React from 'react';
import BaseTopbar from 'layouts/components/BaseTopbar';

interface Props {
  children: React.ReactNode;
  themeMode: string;
}

const Minimal = ({ themeMode, children }: Props): JSX.Element => {
  return (
    <div>
      <BaseTopbar themeMode={themeMode} />
      <main>{children}</main>
    </div>
  );
};

export default Minimal;
