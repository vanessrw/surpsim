import Link from 'next/link';
import Image from 'next/image';

import SubHeader from 'components/atoms/SubHeader';

export default function EventHs() {

  return (
    <div className="eventgz">
      <div className="vidgz">
        <div className="vid1gz">
          <Link href="https://youtu.be/G8f52Zk4cMA" passHref>
            <Image
              data-aos="fade-up"
              className="thumbnail"
              src="/foto/gz1.jpg"
              alt="vid thumbnail"
              width={300}
              height={300}
            ></Image>
          </Link>
        </div>
        <div className="event-content">
          <div className="content">
            <SubHeader title="VANES" subtitle="" left fade="fade-up" />
            <p data-aos="fade-up">{"wishnya dari vid aja ya mwehehe"}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
