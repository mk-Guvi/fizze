import { useRouter } from "next/router";
import React, { useEffect } from "react";

type Props = {};

function EditorHomepage({}: Props) {
  const router = useRouter();
  useEffect(() => {
    router.push("/workflows");
  }, []);
  return null
}

export default EditorHomepage;
