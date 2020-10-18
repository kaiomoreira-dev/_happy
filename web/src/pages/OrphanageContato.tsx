import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import api from '../services/api';
import '../styles/pages/contato-orphanage.css';
interface Orphanage{
  name: string;
  whatsapp:string; 
}

interface OrphanageParams{
  id: string;
}
  
export default function OrphanageContato() {
const params = useParams<OrphanageParams>();
const [orphanage, setOrphanage] = useState<Orphanage>();

    useEffect(() => {
        api.get(`orphanages/${params.id}`).then(response => {
         
          setOrphanage(response.data);   
          console.log(response.data);
               
      });
    }, [params.id]);        

    if(!orphanage){
      return <p>Carregando...</p>;
    }

    return (
        <div id="page-contato">
          <Sidebar />
            <main>
                <div className="orphanato-contato">
                    <h1>{orphanage.name}</h1>
                    <span>Whatsapp: {orphanage.whatsapp}</span>                                  
                </div>
            </main>
        </div>
    );  

}