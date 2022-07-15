import type { MetaFunction } from "@remix-run/node"; // or "@remix-run/cloudflare"

export const meta: MetaFunction = () => {
  return {
    title: "About me",
    description: "Here I introduce myself briefly.",
  };
};

export default function AboutMe() {
  return (
    <article>
      <img className="mb-4 h-[100px] w-full" src="" alt="my-portrait" />
      <p>I'm Sean, a father, husband and front-end developer.</p>
      <p>
        My chinese name is '孙凯'，the same first name with Goku, pronounced
        /swən kaɪ/.
      </p>
      <p>
        I'll regularly share my thought here, about React and general front-end
        stuff mostly. Hope some of them will be helpful for you guys.
      </p>
      <p>
        I'm definitely not a master of the all the topic I'll cover. welcome to
        discuss with me about your ideas. I'd love to hear from you.
      </p>
    </article>
  );
}
