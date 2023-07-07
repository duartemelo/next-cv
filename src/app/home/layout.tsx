export default function Layout(props: {
  children: React.ReactNode;
  profile: React.ReactNode;
}) {
  return (
    <div className="w-full min-h-screen flex flex-col justify-center bg-fixed bg-gradient-to-tr from-gray-700 via-gray-900 to-black">
      {props.children}
      {props.profile}
    </div>
  );
}
