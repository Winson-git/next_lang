import { useTranslations } from "next-intl";

// if use function async 
import { getTranslations } from "next-intl/server";

export default function Home() {

  const t = useTranslations("Homepage")

  // if use async function 
  // const t = await getTranslations("Homepage")

  return (
  <div>
    <h1>{t("title")}</h1>
    <p>{t("content")}</p>
  </div>
  );
}

// if use cleint 
// need to be clear ; if cant work need to pass from parent component 

// if use Link for navigation ; use nextLink from navigation.ts instead of nextLink

