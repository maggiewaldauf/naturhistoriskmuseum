import { useState } from 'react';
import styles from '../styles/InstaGallery.module.css';
import forward from '../assets/icons/forward.svg';
import back from '../assets/icons/back.svg';
import arter from '../assets/images/instagallery/arter.png';
import aarskort from '../assets/images/instagallery/aarskort.png';
import experiment from '../assets/images/instagallery/experiment.png';
import expo from '../assets/images/instagallery/expo.png';
import history from '../assets/images/instagallery/history.png';
import kapsejladsen from '../assets/images/instagallery/kapsejladsen.png';
import school from '../assets/images/instagallery/school.png';
import storyboard from '../assets/images/instagallery/storyboard.png';

const images = [
  { src: arter, caption: 'Vi er stadig hell oppe at køre over den nye udgave af 99 arter-plakaten.' },
  { src: aarskort, caption: 'FÅ 100 KR. I RABAT PÅ DIT NYE ÅRSORT 👏.' },
  { src: school, caption: 'Tak til Skrivekunsyskolen for de fine oplæsninger 💚📝.' },
  { src: kapsejladsen, caption: 'HVORDAN SYNES DU, AT KAPSEJLADSEN KLARER SIG I FORHOLD TIL BÆREDYGTIGHED?' },
  { src: experiment, caption: 'SIDSTE CHANCE FOR AT OPLEVE FRETIDSMENNESKET PÅ EXPERIMENTARIUM 🧠.' },
  { src: storyboard, caption: 'Nu er det ved at være sidste chance for at opleve vores særudstilling "OOPS! - Tilfældigt, Heldigt".' },
  { src: history, caption: 'Vær med til at bevare magien på Naturhistorisk Museum til fremtidige generationer 🌍✨.' },
  { src: expo, caption: 'Hvordan skaber man meningsfulde ungefællesskaber på et naturhistorisk museum? 🌱.' },
];

export default function InstaGallery() {
  const [startIndex, setStartIndex] = useState(0);
  const visibleCount = 4;

  const handlePrev = () => {
    setStartIndex((prevIndex) =>
      prevIndex === 0 ? images.length - visibleCount : prevIndex - visibleCount
    );
  };

  const handleNext = () => {
    setStartIndex((prevIndex) =>
      (prevIndex + visibleCount) % images.length
    );
  };

  const visibleImages = images.slice(startIndex, startIndex + visibleCount).length === visibleCount
    ? images.slice(startIndex, startIndex + visibleCount)
    : [...images.slice(startIndex), ...images.slice(0, visibleCount - (images.length - startIndex))];

  return (
    <div className={styles.galleryContainer}>
      <button onClick={handlePrev} className={styles.arrow}>
        <img src={back} alt="Previous" />
      </button>

      <div className={styles.gridWrapper}>
        {visibleImages.map(({ src, caption }, index) => (
            <div key={index} className={styles.imageWrapper}>
                <img src={src} alt={caption} className={styles.image} />
                <div className={styles.overlay}>
                <p>{caption}</p>
                </div>
            </div>
            ))}
      </div>

      <button onClick={handleNext} className={styles.arrow}>
        <img src={forward} alt="Next" />
      </button>
    </div>
  );
}