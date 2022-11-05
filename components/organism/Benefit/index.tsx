import BenefitCard from "./BenefitCard";

export default function Benefit() {
  return (
    <div className="benefit">
        <div className="benefit-wrapper" >
          
            <BenefitCard 
            title="UNI" 
            description="life at uni" 
            iconPath="/foto/uni.jpg" 
            buttonDestination="/uni" 
            buttonText="go to messages" />

            <BenefitCard 
            title="HS" 
            description="throwback hs" 
            iconPath="/image/image_icon.png" 
            buttonDestination="/hs" 
            buttonText="go to messages" />

            <BenefitCard title="GZ" 
            description="summercamp" 
            iconPath="/foto/gzkotak.jpg" 
            buttonDestination="/gz" 
            buttonText="go to messages" />
        </div>
    </div>
  )
}
