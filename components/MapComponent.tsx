import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";

const MapComponent = () => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_KEY as string,
  });

  if (!isLoaded) return <div>Loading...</div>;

  return (
    <GoogleMap
      options={{
        disableDefaultUI: true,
        zoomControl: true,
      }}
      zoom={14}
      mapContainerClassName="w-full mt-2 lg:w-[600px] h-[500px]"
      center={{ lat: 9.9932646, lng: 76.588282 }}
      mapTypeId="terrain"
      onLoad={() => console.log("Map Component Loaded...")}
    >
      <Marker position={{ lat: 9.9932646, lng: 76.588282 }} />
    </GoogleMap>
  );
};

export default MapComponent;
