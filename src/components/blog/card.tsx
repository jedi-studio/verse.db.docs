import React from "react";
import Markdown from "./markdown";

interface CardProps {
  username: string;
  coverImage?: string | null | undefined;
  date: string;
  title: string;
  body_markdown: string;
  key: number;
}

const Card: React.FC<CardProps> = ({ username, coverImage, date, title, body_markdown, key }) => {
  return (
    <div className="min-w-full rounded-xl shadow-xl card-bg w-full" key={key}>
      {coverImage ? 
          (<div className="card-image min-w-full rounded-t-xl">
            <img src={coverImage} alt="Card image" className="min-w-full rounded-t-xl" />
          </div>) 
      : <></>}
      <div className="card-content p-5">
        <div className="user flex flex-row text-start justify-start">
          <div className="avatar">
            <div className="w-14 mr-3 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img src="https://marco5dev.site/assets/mark-img1-f8981f4a.jpg" alt="Avatar" />
            </div>
          </div>
          <div className="flex flex-col text-start">
            <p className="font-bold">{username}</p>
            <p className="opacity-50">Posted on {date}</p>
          </div>
        </div>
        <div className="pl-16">
          <div className="collapse collapse-arrow blog-card-content">
            <input type="checkbox" />
            <div className="collapse-title text-xl font-medium">
              <div className="title">
                <h3 className="font-extrabold text-4xl">
                  {title}
                </h3>
                <div className="py-5">
                  <hr className="border-t-2 border-primary/50" />
                </div>
              </div>
            </div>
            <div className="collapse-content">
              <Markdown content={body_markdown} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
