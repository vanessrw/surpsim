import Link from 'next/link';
import Image from 'next/image';

import SubHeader from 'components/atoms/SubHeader';

export default function EventHs() {

  return (
    <div className="evenths">
      <div className="vids">
        <div className="vid1">
          <Link href="https://youtu.be/QLDEl6m70Rs" passHref>
            <Image
              data-aos="fade-up"
              className="thumbnail"
              src="/foto/uni1.jpg"
              alt="vid thumbnail"
              width={500}
              height={500}
            ></Image>
          </Link>
        </div>
      </div>
    </div>
  );
}
