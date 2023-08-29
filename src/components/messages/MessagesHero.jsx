"use client";

import React from "react";
import ChatInterface from "./ChatInterface";

function MessagesHero() {
  return (
    <ChatInterface>
      <div className="w-[90%] py-6 mt-10 bg-gray-600 rounded-md px-6">
        <h2 className="text-3xl font-bold">Welecome User,</h2>
        <p className=" mt-5 text-2xl">
          As per the questions you answered at the beginning, your learning{" "}
          <strong>PATH</strong> has been determined.
        </p>
        <p className=" mt-5 text-2xl">
          Congratulations, per the questions asked and answers given you have
          been noted as a <strong>VISUAL LEARNER</strong>.
        </p>
        <p className=" mt-5 text-2xl">
          Click on lesson plan on the left side of the page to receive your
          lesson plan as per your mode of learning.
        </p>
        <p className="mt-5 text-2xl">
          Remember, if you need any help ,you can always come back to chat me
          for assistance.
        </p>
      </div>
    </ChatInterface>
  );
}

export default MessagesHero;
