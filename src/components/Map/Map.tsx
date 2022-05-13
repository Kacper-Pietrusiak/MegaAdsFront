import React from 'react';
import './Map.css';
import 'leaflet/dist/leaflet.css'
import '../../utils/fix-map-icon'
import {MapContainer, Marker, Popup, TileLayer} from "react-leaflet";

export const Map = () => {
    return (
        <div className='map'>
            <MapContainer center={[53.4107859,-2.2796507]} zoom={14}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={[53.4107859,-2.2796507]}>
                    <Popup>
                        <h2>Shrek's pizza</h2>
                        <p>best pizza ever</p>
                    </Popup>
                </Marker>
            </MapContainer>
        </div>
    );
};

