import React, { useEffect, useState } from 'react';
import { FiArrowRight, FiPlus } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import {Map, TileLayer, Marker, Popup} from 'react-leaflet';

import mapMakerImg from '../images/map-marker.svg';

import '../styles/pages/orphanage-map.css';
import api from '../services/api';
import mapIcon from '../util/mapIcon';


interface Orphanage{
    id: number;
    latitude: number;
    longitude: number;
    name: string;
   
}

function OrphanageMap() {
    const [orphanages, setOrphanage] = useState<Orphanage[]>([]);

    useEffect(() => {
        api.get('orphanages').then(response => {
            
            setOrphanage(response.data);            
        });
    }, []);

    return(
        <div id="page-map">
            <aside>
                <header>
                    <img src={mapMakerImg} alt="Happy"/>
                    <h2>Escolha um orfanayo no mapa</h2>
                    <p>Muitas crianças estão esperando a sua visita :)</p>
                </header>

                <footer>
                    <strong>Guaiçara</strong>
                    <span>São Paulo</span>
                </footer>
            </aside>

            
            <Map 
                center={[-21.6228884,-49.7987215]}
                zoom={17}
                style={{width:'100%', height:'100%'}}
            >
                {/* <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" /> */}
                <TileLayer url={`https://api.mapbox.com/styles/v1/mapbox/satellite-v9/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`} /> 
                
                {orphanages.map(orphanage => {
                    return (
                        <Marker 
                        key={orphanage.id}    
                        icon={mapIcon}
                        position={[orphanage.latitude,orphanage.longitude]}
                >
                    <Popup closeButton={false} minWidth={240} maxWidth={240} className="map-popup">
                        {orphanage.name}
                        <Link to={`/orphanages/${orphanage.id}`}>
                            <FiArrowRight size={20} color="#fff"/>
                        </Link>
                            
                        
                    </Popup>
                </Marker>
                    )
                })}
            </Map>
    
            <Link to="/orphanages/create" className="create-orphanage">
                <FiPlus size={32} color="#FFF"/>
            </Link>
        </div>
    );
}

export default OrphanageMap;