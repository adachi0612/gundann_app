
import './YouTube.css'

function YouTube() {
  return (
    <div className='Content'>
        <iframe
            title="YouTube Video"
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/CSs1CBlisYs?si=MfScWhCX_rO5LE6t" // Replace VIDEO_ID with the actual YouTube video ID
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
        ></iframe>
    </div>
  )
}

export default YouTube