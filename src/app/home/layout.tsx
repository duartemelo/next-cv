"use client";

import { Provider } from "react-redux";
import { store } from "@/store/store";

export default function Layout(props: {
  children: React.ReactNode;
  profile: React.ReactNode;
  summary: React.ReactNode;
  work_experience: React.ReactNode;
  academic_background: React.ReactNode;
}) {
  return (
    <Provider store={store}>
      <div className="w-full min-h-screen flex flex-col justify-center bg-fixed bg-gradient-to-tr from-gray-700 via-gray-900 to-black">
        {props.children}
        {props.profile}
        {props.summary}
        {props.work_experience}
        {props.academic_background}
      </div>
    </Provider>
  );
}
