import './Photos.css';
import Menu from '../Menu/Menu';

export default function Photos(){
    return(
        
        <div className="photos">
            <div className="photo">
                <img src="assets/DSC05013.webp" alt="cristmas" />
            </div>
            <div className="photo">
                <img src="assets/DSC03752.webp" alt="bakota" />
            </div>
            <div className="photo">
                <img src="assets/DSC04367.webp" alt="canyon" />
            </div>
            <div className="photo">
                <img src="assets/P2180022.webp" alt="snowdrops" />
            </div>
            <div className="photo">
                <img src="assets/IMG_20190628_205656.webp" alt="sunset" />
            </div>
            <div className="photo">
                <img src="assets/WP_20190628_16_50_31_Pro.webp" alt="fire" />
            </div>
        </div>
    
    );
}