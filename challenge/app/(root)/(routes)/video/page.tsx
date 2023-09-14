
const VideoPage = () => {
  return (
    <div className="flex justify-center items-center mt-20 mb-12">
      <iframe
        className="rounded-lg" 
        width="1080" 
        height="607.5" 
        src="https://www.youtube.com/embed/ydmChookrbQ?si=BEBhkNchGAcpwHrv" 
        title="YouTube video player" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        ></iframe>
    </div>
  );
}
 
export default VideoPage;