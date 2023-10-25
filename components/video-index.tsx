import { SectionHeader, SectionTitle } from "./ui/section";
import Image from "next/image";

const VideoIndex = () => {
  return (
    <div className="flex-col">
      <SectionHeader variant={"center"}>
        <SectionTitle>Eventos em Destaque!</SectionTitle>
      </SectionHeader>
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/o1tj2zJ2Wvg?si=o1qW2foF9-1hXjtn"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        className="rounded-lg"
      >
      </iframe>
    </div>
  );
}

export default VideoIndex;