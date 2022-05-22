import InfoPageWrap from "~/components/InfoPageWrap";
import Nav from "~/components/Nav";

export default function Projects() {
  return (
    <InfoPageWrap>
      <Nav activePage={"Now"} />
      <p>
        <a href="../projects">Building ideas</a> &amp; completing my{" "}
        <a href="https://wiki.nikiv.dev/focusing/goals">goals</a> to live a{" "}
        <a href="https://wiki.nikiv.dev/future/">better future</a>.
      </p>
      <p>
        Writing monthly{" "}
        <a href="https://wiki.nikiv.dev/looking-back/">look backs</a> reflecting
        on what I worked &amp; thought about.
      </p>
      <p>
        In Eindhoven. <a href="https://twitter.com/nikitavoloboev">Say 👋</a>.
      </p>
    </InfoPageWrap>
  );
}
