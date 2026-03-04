import React, { useState, useContext } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { AppContext } from '../context/AppContext';

export default function MapView() {
    const { theme } = useContext(AppContext);
    const [pos, setPos] = useState([6.8410, 79.9655]);

    return (
        <div style={{ position: 'relative', height: '90vh', overflow: 'hidden' }}>
            {/* AI Assistant - Floating Card */}
            <div className="ai-widget-right liquid-glass">
                <h4 style={{margin: '0 0 15px 0'}}>🤖 AI Assistant</h4>
                <div style={{display: 'flex', gap: '5px', marginBottom: '15px'}}>
                    <button className="pill active">All</button>
                    <button className="pill">Garage</button>
                </div>
                <p style={{fontSize: '13px', opacity: 0.8}}>ඔබට ආසන්නව ස්ථාන 5ක් ඇත.</p>
            </div>

            <MapContainer center={pos} zoom={14} style={{ height: '100%', width: '100%' }}>
                <TileLayer url={theme === 'dark' ? "https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png" : "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"} />
                <Marker position={pos} />
            </MapContainer>
        </div>
    );
}