"use client";

import MessagesHero from "@/components/messages/MessagesHero";
import MessagesHeroTwo from "@/components/messages/MessagesHeroTwo";
import React from "react";

function Messages() {
  return (
    <div className="h-full overflow-hidden">
      {/* <MessagesHero /> */}
      <MessagesHeroTwo />
    </div>
  );
}

export default Messages;
