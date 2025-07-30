import IconGitHub from "@/components/icons/github";
import IconInstagram from "@/components/icons/instagram";
import IconLinkedin from "@/components/icons/linkedin";
import IconTwitter from "@/components/icons/twitter";

const SocialMedia = () => {
  return (
    <div className="right-10 bottom-10 fixed flex justify-between gap-10">
      <a href="https://github.com/almamarie" target={"_blank"} rel="noreferrer">
        <IconGitHub className="" />
      </a>
      <a
        href="https://instagram.com/marieloumaar?igshid=ZDdkNTZiNTM="
        target={"_blank"}
        rel="noreferrer"
      >
        <IconInstagram />
      </a>
      <a
        href="https://twitter.com/MarieLoumar"
        target={"_blank"}
        rel="noreferrer"
      >
        <IconTwitter />
      </a>
      <a
        href="https://www.linkedin.com/in/marieloumar/"
        target={"_blank"}
        rel="noreferrer"
      >
        <IconLinkedin />
      </a>
    </div>
  );
};

export default SocialMedia;
