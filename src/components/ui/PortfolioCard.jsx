// export const PortfolioCard = ({ item, isVideo, onClick }) => {
//   return (
//     <div className="portfolio-card" onClick={onClick}>
//       {isVideo ? (
//         <video className="portfolio-media" muted preload="metadata">
//           <source src={item.src} type="video/mp4" />
//         </video>
//       ) : (
//         <img
//           src={item.src}
//           alt={item.title}
//           className="portfolio-media"
//           loading="lazy"
//         />
//       )}
//     </div>
//   );
// };

export const PortfolioCard = ({ item, isVideo, onClick }) => {
  return (
    <div className="portfolio-card" onClick={onClick}>

      {/* ALWAYS SHOW IMAGE IN GRID */}
      <img
        src={isVideo ? item.thumbnail : item.src}
        alt={item.title}
        className="portfolio-media"
        loading="lazy"
      />

      {/* PLAY ICON ONLY FOR VIDEOS */}
      {isVideo && (
        <div className="play-overlay">
          ▶
        </div>
      )}

    </div>
  );
};
