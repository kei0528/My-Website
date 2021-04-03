import React from "react";

interface Prop {
  className: string;
  src: string;
  alt: string;
  link: string;
  title: string;
  description: string;
  usedTech: string[];
}

const Description: React.FC<Prop> = ({
  className,
  src,
  alt,
  link,
  title,
  description,
  usedTech,
}) => {
  const UsedTech = () => {
    return usedTech.map((tech) => {
      return <li key={Math.random()}>{tech}</li>;
    });
  };
  return (
    <section className={"my-works-window" + " " + className}>
      <a href={link}>
        <div className="my-works-window-img-container">
          <img src={src} alt={alt} />
        </div>
        <h3>{title}</h3>
        <p>{description}</p>
        <ul>{UsedTech()}</ul>
      </a>
    </section>
  );
};

export default Description;
