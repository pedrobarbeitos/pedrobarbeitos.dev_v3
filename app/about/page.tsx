import Footer from "@/components/Footer";

export default function About() {
  return (
    <main className=" grow flex w-full flex-col items-center">
      <section className="flex grow flex-col items-center max-w-3xl">
        <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight mt-6">
          Terms and Conditions
        </h3>
        <p className="leading-7 text-sm [&:not(:first-child)]:mt-6 text-justify">
          These terms and conditions outline the rules and regulations for the
          use of Alex Rabin&aposs Website, located at alexrabin.com. By
          accessing this website we assume you accept these terms and
          conditions. Do not continue to use Alex Rabin if you do not agree to
          take all of the terms and conditions stated on this page. The
          following terminology applies to these Terms and Conditions, Privacy
          Statement and Disclaimer Notice and all Agreements: Client, You and
          Your refers to you, the person log on this website and compliant to
          the Company&aposs terms and conditions. The Company, Ourselves, We,
          Our and Us , refers to our Company. Party , Parties , or Us , refers
          to both the Client and ourselves. All terms refer to the offer,
          acceptance and consideration of payment necessary to undertake the
          process of our assistance to the Client in the most appropriate manner
          for the express purpose of meeting the Client&aposs needs in respect
          of provision of the Company&aposs stated services, in accordance with
          and subject to, prevailing law of Netherlands. Any use of the above
          terminology or other words in the singular, plural, capitalization
          and/or he/she or they, are taken as interchangeable and therefore as
          referring to same.
        </p>
        <h4 className="scroll-m-20 text-2xl font-semibold tracking-tight mt-6">
          Cookies
        </h4>
        <p className="leading-7 text-sm [&:not(:first-child)]:mt-6 text-justify">
          We employ the use of cookies. By accessing Pedro Barbeitos, you agreed
          to use cookies in agreement with the Alex Rabin&aposs Privacy Policy.
          Most interactive websites use cookies to let us retrieve the
          user&aposs details for each visit. Cookies are used by our website to
          enable the functionality of certain areas to make it easier for people
          visiting our website. Some of our affiliate/advertising partners may
          also use cookies.
        </p>
      </section>
      <Footer />
    </main>
  );
}
