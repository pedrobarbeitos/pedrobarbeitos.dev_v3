"use client";

import React, { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

export default function Terms() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView]);

  return (
    <main className=" grow flex w-full flex-col items-center">
      <motion.section
        ref={ref}
        className="flex grow flex-col items-center max-w-2xl"
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.75, delay: 0.1 }}
      >
        <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight mt-6">
          Terms and Conditions
        </h3>
        <p className="leading-6 text-sm [&:not(:first-child)]:mt-6 ">
          These terms and conditions outline the rules and regulations for the
          use of Alex Rabin&apos;s Website, located at alexrabin.com. By
          accessing this website we assume you accept these terms and
          conditions. Do not continue to use Alex Rabin if you do not agree to
          take all of the terms and conditions stated on this page. The
          following terminology applies to these Terms and Conditions, Privacy
          Statement and Disclaimer Notice and all Agreements: Client , You and
          Your refers to you, the person log on this website and compliant to
          the Company&apos;s terms and conditions. The Company , Ourselves , We
          , Our and Us , refers to our Company. Party , Parties , or Us , refers
          to both the Client and ourselves. All terms refer to the offer,
          acceptance and consideration of payment necessary to undertake the
          process of our assistance to the Client in the most appropriate manner
          for the express purpose of meeting the Client&apos;s needs in respect
          of provision of the Company&apos;s stated services, in accordance with
          and subject to, prevailing law of Netherlands. Any use of the above
          terminology or other words in the singular, plural, capitalization
          and/or he/she or they, are taken as interchangeable and therefore as
          referring to same.
        </p>
        <h4 className="scroll-m-20 text-2xl font-semibold tracking-tight mt-6">
          License
        </h4>
        <p className="leading-6 text-sm [&:not(:first-child)]:mt-6  whitespace-pre-line">
          Unless otherwise stated, Alex Rabin and/or its licensors own the
          intellectual property rights for all material on Alex Rabin. All
          intellectual property rights are reserved. You may access this from
          Alex Rabin for your own personal use subjected to restrictions set in
          these terms and conditions. You must not: Republish material from Alex
          Rabin Sell, rent or sub-license material from Alex Rabin Reproduce,
          duplicate or copy material from Alex Rabin Redistribute content from
          Alex Rabin This Agreement shall begin on the date hereof. Our Terms
          and Conditions were created with the help of the Free Terms and
          Conditions Generator. Parts of this website offer an opportunity for
          users to post and exchange opinions and information in certain areas
          of the website. Alex Rabin does not filter, edit, publish or review
          Comments prior to their presence on the website. Comments do not
          reflect the views and opinions of Alex Rabin,its agents and/or
          affiliates. Comments reflect the views and opinions of the person who
          post their views and opinions. To the extent permitted by applicable
          laws, Alex Rabin shall not be liable for the Comments or for any
          liability, damages or expenses caused and/or suffered as a result of
          any use of and/or posting of and/or appearance of the Comments on this
          website. Alex Rabin reserves the right to monitor all Comments and to
          remove any Comments which can be considered inappropriate, offensive
          or causes breach of these Terms and Conditions. You warrant and
          represent that: You are entitled to post the Comments on our website
          and have all necessary licenses and consents to do so; The Comments do
          not invade any intellectual property right, including without
          limitation copyright, patent or trademark of any third party; The
          Comments do not contain any defamatory, libelous, offensive, indecent
          or otherwise unlawful material which is an invasion of privacy The
          Comments will not be used to solicit or promote business or custom or
          present commercial activities or unlawful activity. You hereby grant
          Alex Rabin a non-exclusive license to use, reproduce, edit and
          authorize others to use, reproduce and edit any of your Comments in
          any and all forms, formats or media.
        </p>
      </motion.section>
    </main>
  );
}
