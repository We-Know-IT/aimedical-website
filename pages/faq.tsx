import Head from "next/head";
import Header from "../components/general/Header";
import MetaTags from "../components/general/seo/MetaTags";
import Typography from "../components/common/Typography";
import TwoColText from "../components/general/start/TwoColText";
import FAQBody from "../components/general/FAQBody";
import BookDemo from "../components/general/BookDemo";

interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    id: 1,
    question: "Title on question 1 goes here",
    answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
  },
  {
    id: 2,
    question: "Title on question 2 goes here",
    answer: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  },
  {
    id: 3,
    question: "Title on question 3 goes here",
    answer: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo."
  },
  {
    id: 4,
    question: "Title on question 4 goes here",
    answer: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet."
  },
  {
    id: 5,
    question: "Title on question 5 goes here",
    answer: "Consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam."
  },
  {
    id: 6,
    question: "Title on question 6 goes here",
    answer: "Nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur."
  },
  {
    id: 7,
    question: "Title on question 7 goes here",
    answer: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa."
  },
  {
    id: 8,
    question: "Title on question 8 goes here",
    answer: "Qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat."
  },
  {
    id: 9,
    question: "Title on question 9 goes here",
    answer: "Qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat."
  }
];

export default function FAQ() {
  return (
    <>
      <Head>
        <title>FAQ - AI Medical</title>
        <meta name="description" content="Frequently asked questions about Dermalyser, our AI-powered skin cancer detection device." />
      </Head>
      <MetaTags />
      
      <main className="pt-28">
        {/* Header Section with TwoColText */}
        <TwoColText
          text="Frequently asked questions"
          textClassName="!mb-4 mt-10 lg:mt-60 lg:pr-24 text-darkblue font-robotoFlex font-normal text-[32px] lg:text-[40px] leading-[34px] lg:leading-[42px]"

          mobileOrder="right-first"
          video={{
            src: "https://www.w3schools.com/html/mov_bbb.mp4",
            title: "AI Medical Dermalyser Demo",
            controls: false,
            autoPlay: false,
            muted: true,
            poster: "/images/home/header.png"
          }}>
        </TwoColText>

        {/* FAQ Body Section */}
        <FAQBody faqData={faqData} />

        {/* Book Demo Section */}
      </main>
    </>
  );
}
