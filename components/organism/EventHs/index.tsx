import Link from 'next/link';
import Image from 'next/image';

import SubHeader from 'components/atoms/SubHeader';

export default function EventHs() {

  return (
    <div className="evenths">
      <div className="vids">
        <div className="vid1">
          <Link href="https://youtu.be/9IyVjZEbepo" passHref>
            <Image
              data-aos="fade-up"
              className="thumbnail"
              src="/foto/hs1.jpg"
              alt="vid thumbnail"
              width={300}
              height={300}
            ></Image>
          </Link>
        </div>
        <div className="vid2">
          <Link href="https://youtu.be/ku3R0hWqYZA" passHref>
            <Image
              data-aos="fade-up"
              className="thumbnail"
              src="/foto/hs2.jpg"
              alt="vid thumbnail"
              width={300}
              height={300}
            ></Image>
          </Link>
        </div>
        <div className="vid3">
          <Link href="https://youtu.be/iOJctX7FFlU" passHref>
            <Image
              data-aos="fade-up"
              className="thumbnail"
              src="/foto/hs3.jpg"
              alt="vid thumbnail"
              width={300}
              height={300}
            ></Image>
          </Link>
        </div>
      </div>
    </div>
  );
}
