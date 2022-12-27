import Head from "next/head";
import { useEffect } from "react";
import {
  About,
  Main,
  Navbar,
  Sponsors,
  Tracks,
  Rules,
  Timeline,
  Footer,
  FAQ,
  DevfolioPrizes
} from "../components";

export default function Home() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://apply.devfolio.co/v2/sdk.js";
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <>
      <Head>
        <title>DevSprint 22 | Hackathon</title>
        <meta name="title" content="DevSprint 22" />
        <meta
          name="description"
          content="Our annual hackathon, DevSprint is back for the 2022 edition. It is an
          exciting learning opportunity for students who are passionate about
          technology and are interested in solving real-world problems with
          cutting-edge solutions."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://devsprint.dsckiit.in/" />
        <meta
          property="og:title"
          content="DevSprint 22 · 5th-6th November 2022"
        />
        <meta property="og:description" content="Define. Think. Build." />
        <meta
          property="og:image"
          content="https://devsprint.dsckiit.in/og-image.png"
        />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://devsprint.dsckiit.in/" />
        <meta
          property="twitter:title"
          content="DevSprint 22 · 5th-6th November 2022"
        />
        <meta property="twitter:description" content="Define. Think. Build." />
        <meta
          property="twitter:image"
          content="https://devsprint.dsckiit.in/og-image.png"
        />
        <link rel="shortcut icon" href="./favicon.ico" type="image/x-icon" />
        <script
          defer
          data-domain="devsprint.dsckiit.in"
          src="https://plausible.io/js/plausible.js"
        ></script>
      </Head>
      <div className="flex flex-col gap-20">
        <Navbar />
        <Main />
        <About />
        <Timeline />
        <DevfolioPrizes />
        <Rules />
        <Tracks />
        <Sponsors />
        <FAQ />
        <Footer />
      </div>
    </>
  );
}
