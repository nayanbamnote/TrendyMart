import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className=" h-screen centerDiv bg-slate-100">
      <SignIn />
    </div>
  );
}