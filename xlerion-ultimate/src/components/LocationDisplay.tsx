"use client";

import React, { useEffect, useState } from 'react';
import { FaMapMarkerAlt } from 'react-icons/fa';
import MagneticEffect from './MagneticEffect';

const LocationDisplay: React.FC = () => {
  const [location, setLocation] = useState<string | null>(null);
  const [coords, setCoords] = useState<{ latitude: number; longitude: number } | null>(null);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const { latitude, longitude } = position.coords;
          setCoords({ latitude, longitude }); // Store coordinates
          try {
            // Using a reverse geocoding API (e.g., OpenStreetMap Nominatim)
            const response = await fetch(
              `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}&accept-language=es`
            );
            const data = await response.json();
            if (data.address) {
              const city = data.address.city || data.address.town || data.address.village || '';
              const country = data.address.country || '';
              setLocation(`${city}, ${country}`);
            } else {
              setLocation('Ubicación desconocida');
            }
          } catch (error) {
            console.error('Error fetching location data:', error);
            setLocation('No se pudo obtener la ubicación');
          }
        },
        (error) => {
          console.error('Error getting geolocation:', error);
          if (error.code === error.PERMISSION_DENIED) {
            setLocation('Permiso de ubicación denegado');
          } else {
            setLocation('Error al obtener la ubicación');
          }
        }
      );
    } else {
      setLocation('Geolocalización no soportada por el navegador');
    }
  }, []);

  const googleMapsUrl = coords
    ? `https://www.google.com/maps/search/?api=1&query=${coords.latitude},${coords.longitude}`
    : '#';

  return (
    <>
      {location && (
        <MagneticEffect>
          <a href={googleMapsUrl} target="_blank" rel="noopener noreferrer" className="text-white hover:text-primary no-underline">
            <span>Desde: {location} {coords && `(${coords.latitude.toFixed(2)}, ${coords.longitude.toFixed(2)})`}</span>
          </a>
        </MagneticEffect>
      )}
    </>
  );
};

export default LocationDisplay;
