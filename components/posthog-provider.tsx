"use client";

import { PostHogProvider } from "posthog-js/react";

import React from "react";

const posthogProvider = ({ children }: { children: React.ReactNode }) => {
  const options = {
    api_host: process.env.NEXT_POSTHOG_HOST,
  };
  return (
    <PostHogProvider apiKey={process.env.NEXT_POSTHOG_KEY} options={options}>
      {children}
    </PostHogProvider>
  );
};

export default posthogProvider;
