import React from "react";
import Image from "next/image";

type Props = {
  lang: any;
};

const Index = ({ lang }: Props) => {
  return (
    <footer>
      <div className="container">
        <h1>footer</h1>
      </div>
    </footer>
  );
};

export default Index;
