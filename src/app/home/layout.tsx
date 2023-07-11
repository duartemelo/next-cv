export default function Layout(props: {
  children: React.ReactNode;
  profile: React.ReactNode;
  summary: React.ReactNode;
  work_experience: React.ReactNode;
}) {
  return (
    <div className="w-full min-h-screen flex flex-col justify-center bg-fixed bg-gradient-to-tr from-gray-700 via-gray-900 to-black">
      {props.children}
      {props.profile}
      {props.summary}
      {props.work_experience}
    </div>
  );
}
