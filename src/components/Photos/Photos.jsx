import './Photos.css';
import image1 from "../../assets/images/post-images/960x540.jpg"
import image2 from "../../assets/images/post-images/2017-12-28-17-00-18.jpg"
import image3 from "../../assets/images/post-images/1577923864_0_0_1878_1878_1920x0_80_0_0_6afbaa3b920f30d7d4a2f8333d523d8b.jpg"
import image4 from "../../assets/images/post-images/main.jpg"
import image5 from "../../assets/images/post-images/Pulp-Fiction.jpg"
import image6 from "../../assets/images/post-images/regular_detail_picture-ab15d73582f1eea00b0c3e8bd030ecaa.jpg"


export default function Photos(){
    return(
        
        <div className="photos">
            <div className="photo">
                <img src={image1} alt="tar" />
            </div>
            <div className="photo">
                <img src={image2}  alt="ra" />
            </div>
            <div className="photo">
                <img src={image3}  alt="canyon" />
            </div>
            <div className="photo">
                <img src={image4}  alt="snowdrops" />
            </div>
            <div className="photo">
                <img src={image5}  alt="sunset" />
            </div>
            <div className="photo">
                 <img src={image6} alt="fire" /> *
            </div>
            </div>
         
    
    );
}