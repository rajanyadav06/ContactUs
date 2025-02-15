import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const MapComponent = () => {
    const position = [28.5893577,77.3120101]; // Loaction 91Springboard Sector 1, Noida

    return (
        <div className="w-full flex justify-center items-center">    
            <MapContainer
                center={position}
                zoom={13}
                className="w-full h-[150px] sm:h-[250px] md:h-[250px] lg:h-[400px] rounded-lg shadow-lg"
            >
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    
                />
                <Marker  position={position}>
                    <Popup>91Springboard Sector 1, Noida</Popup>
                </Marker>
            </MapContainer>
        </div>
    );
};

export default MapComponent;