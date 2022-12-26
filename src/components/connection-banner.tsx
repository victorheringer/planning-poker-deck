import { useEffect, useState } from "react";
import { useConnection } from "hooks";
import { Banner } from "components";

type ConnectionBannerProps = {
  text: string;
};

export default function ConnectionBanner({ text }: ConnectionBannerProps) {
  const { connected } = useConnection();
  const [hideBanner, setHideBanner] = useState(connected);

  useEffect(() => {
    setHideBanner(connected);
  }, [connected]);

  function handleCloseBanner() {
    setHideBanner(true);
  }

  if (hideBanner) {
    return <></>;
  }

  return <Banner text={text} onClose={handleCloseBanner} />;
}
