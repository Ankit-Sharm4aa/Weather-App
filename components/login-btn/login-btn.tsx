import { useSession, signIn } from "next-auth/react";

export default function Component() {
  const { data: session } = useSession();
  return (
    <>
      <button onClick={() => signIn()}>Sign in</button>
    </>
  );
}
