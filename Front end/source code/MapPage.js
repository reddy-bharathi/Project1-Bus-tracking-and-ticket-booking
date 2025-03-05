/*import React, { useEffect, useRef } from 'react';

// Add your Google Maps API Key below
const GOOGLE_MAPS_API_KEY = 'AIzaSyCyVqtXkYnSWTWw8SoYFZho-mBSPNQclhs';

function MapPage({ source, destination }) {
    const mapRef = useRef(null);

    useEffect(() => {
        // Initialize the Google Map
        const loadGoogleMaps = async () => {
            const script = document.createElement('script');
            script.src = `https://maps.googleapis.com/maps/api/js?key=${GOOGLE_MAPS_API_KEY}&libraries=places`;
            script.async = true;
            script.onload = initMap;
            document.body.appendChild(script);
        };

        const initMap = () => {
            const geocoder = new window.google.maps.Geocoder();

            // Get coordinates for source and destination
            geocoder.geocode({ address: source }, (results, status) => {
                if (status === 'OK') {
                    const sourceLocation = results[0].geometry.location;

                    geocoder.geocode({ address: destination }, (results, status) => {
                        if (status === 'OK') {
                            const destinationLocation = results[0].geometry.location;

                            // Create the map
                            const map = new window.google.maps.Map(mapRef.current, {
                                center: sourceLocation,
                                zoom: 10,
                            });

                            // Add markers for source and destination
                            new window.google.maps.Marker({
                                position: sourceLocation,
                                map,
                                title: 'Source',
                            });

                            new window.google.maps.Marker({
                                position: destinationLocation,
                                map,
                                title: 'Destination',
                            });

                            // Draw route between source and destination
                            const directionsService = new window.google.maps.DirectionsService();
                            const directionsRenderer = new window.google.maps.DirectionsRenderer({ map });

                            directionsService.route(
                                {
                                    origin: sourceLocation,
                                    destination: destinationLocation,
                                    travelMode: window.google.maps.TravelMode.DRIVING,
                                },
                                (response, status) => {
                                    if (status === 'OK') {
                                        directionsRenderer.setDirections(response);

                                        // Animate bus icon along the route
                                        const route = response.routes[0].overview_path;
                                        animateBus(route, map);
                                    }
                                }
                            );
                        }
                    });
                }
            });
        };

        const animateBus = (route, map) => {
            let step = 0;
            const busIcon = {
                url: '/images/bus-icon.png', // Add your bus icon image file in the public folder
                scaledSize: new window.google.maps.Size(40, 40), // Scale the icon
            };

            const busMarker = new window.google.maps.Marker({
                position: route[0],
                map,
                icon: busIcon,
            });

            const animate = () => {
                if (step < route.length) {
                    busMarker.setPosition(route[step]);
                    step += 1;
                    setTimeout(animate, 100); // Adjust speed by changing the timeout value
                }
            };

            animate();
        };

        loadGoogleMaps();
    }, [source, destination]);

    return <div ref={mapRef} style={{ width: '100%', height: '100vh' }} />;
}

export default MapPage;
*/
/*
import React, { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

// Add your Google Maps API Key below
const GOOGLE_MAPS_API_KEY = 'AIzaSyCyVqtXkYnSWTWw8SoYFZho-mBSPNQclhs';

function MapPage() {
    const location = useLocation();
    const { source, destination, busName } = location.state || {};
    const mapRef = useRef(null);

    useEffect(() => {
        if (!source || !destination) return;

        const loadGoogleMaps = () => {
            if (!window.google || !window.google.maps) {
                const script = document.createElement('script');
                script.src = `https://maps.googleapis.com/maps/api/js?key=${GOOGLE_MAPS_API_KEY}&libraries=places`;
                script.async = true;
                script.onerror = () => {
                    console.error('Google Maps script failed to load.');
                };
                script.onload = initMap;
                document.head.appendChild(script);
            } else {
                initMap();
            }
        };

        const initMap = () => {
            const geocoder = new window.google.maps.Geocoder();

            geocoder.geocode({ address: source }, (sourceResults, sourceStatus) => {
                if (sourceStatus === 'OK') {
                    const sourceLocation = sourceResults[0].geometry.location;

                    geocoder.geocode({ address: destination }, (destResults, destStatus) => {
                        if (destStatus === 'OK') {
                            const destinationLocation = destResults[0].geometry.location;

                            const map = new window.google.maps.Map(mapRef.current, {
                                center: sourceLocation,
                                zoom: 7,
                            });

                            // Add markers for source and destination
                            new window.google.maps.Marker({
                                position: sourceLocation,
                                map,
                                title: `Source: ${source}`,
                            });

                            new window.google.maps.Marker({
                                position: destinationLocation,
                                map,
                                title: `Destination: ${destination}`,
                            });

                            const directionsService = new window.google.maps.DirectionsService();
                            const directionsRenderer = new window.google.maps.DirectionsRenderer({ map });

                            directionsService.route(
                                {
                                    origin: sourceLocation,
                                    destination: destinationLocation,
                                    travelMode: window.google.maps.TravelMode.DRIVING,
                                },
                                (response, routeStatus) => {
                                    if (routeStatus === 'OK') {
                                        directionsRenderer.setDirections(response);

                                        // Animate bus along the route
                                        const route = response.routes[0].overview_path;
                                        animateBus(route, map);
                                    } else {
                                        console.error('Directions request failed:', routeStatus);
                                    }
                                }
                            );
                        } else {
                            console.error('Destination geocode failed:', destStatus);
                        }
                    });
                } else {
                    console.error('Source geocode failed:', sourceStatus);
                }
            });
        };

        const animateBus = (route, map) => {
            let step = 0;
            const busIcon = {
                url: '/images/bus-icon.jpg', // Ensure the bus icon file is in the public/images folder
                scaledSize: new window.google.maps.Size(40, 40), // Adjust size
            };

            const busMarker = new window.google.maps.Marker({
                position: route[0],
                map,
                icon: busIcon,
                title: busName,
            });

            const animate = () => {
                if (step < route.length) {
                    busMarker.setPosition(route[step]);
                    step++;
                    setTimeout(animate, 200); // Adjust speed here
                }
            };

            animate();
        };

        loadGoogleMaps();
    }, [source, destination, busName]);

    return <div ref={mapRef} style={{ width: '100%', height: '100vh' }} />;
}

export default MapPage;

*/

/*
import React, { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

// Add your Google Maps API Key below
const GOOGLE_MAPS_API_KEY = 'YOUR_GOOGLE_MAPS_API_KEY';

function MapPage() {
    const location = useLocation();
    const { source, destination, busName } = location.state || {};
    const mapRef = useRef(null);

    useEffect(() => {
        if (!source || !destination) return;

        const loadGoogleMaps = () => {
            if (!window.google || !window.google.maps) {
                const script = document.createElement('script');
                script.src = `https://maps.googleapis.com/maps/api/js?key=${GOOGLE_MAPS_API_KEY}&libraries=places`;
                script.async = true;
                script.onload = initMap;
                document.head.appendChild(script);
            } else {
                initMap();
            }
        };

        const initMap = () => {
            const geocoder = new window.google.maps.Geocoder();

            geocoder.geocode({ address: source }, (sourceResults, sourceStatus) => {
                if (sourceStatus === 'OK') {
                    const sourceLocation = sourceResults[0].geometry.location;

                    geocoder.geocode({ address: destination }, (destResults, destStatus) => {
                        if (destStatus === 'OK') {
                            const destinationLocation = destResults[0].geometry.location;

                            const map = new window.google.maps.Map(mapRef.current, {
                                center: sourceLocation,
                                zoom: 7,
                            });

                            // Add markers for source and destination
                            new window.google.maps.Marker({
                                position: sourceLocation,
                                map,
                                title: `Source: ${source}`,
                            });

                            new window.google.maps.Marker({
                                position: destinationLocation,
                                map,
                                title: `Destination: ${destination}`,
                            });

                            const directionsService = new window.google.maps.DirectionsService();
                            const directionsRenderer = new window.google.maps.DirectionsRenderer({ map });

                            directionsService.route(
                                {
                                    origin: sourceLocation,
                                    destination: destinationLocation,
                                    travelMode: window.google.maps.TravelMode.DRIVING,
                                },
                                (response, routeStatus) => {
                                    if (routeStatus === 'OK') {
                                        directionsRenderer.setDirections(response);

                                        // Animate bus along the route
                                        const route = response.routes[0].overview_path;
                                        animateBus(route, map);
                                    } else {
                                        console.error('Directions request failed:', routeStatus);
                                    }
                                }
                            );
                        } else {
                            console.error('Destination geocode failed:', destStatus);
                        }
                    });
                } else {
                    console.error('Source geocode failed:', sourceStatus);
                }
            });
        };

        const animateBus = (route, map) => {
            let step = 0;
            const busIcon = {
                url: '/images/bus-icon.png', // Ensure the bus icon file is in the public/images folder
                scaledSize: new window.google.maps.Size(40, 40), // Adjust size
            };

            const busMarker = new window.google.maps.Marker({
                position: route[0],
                map,
                icon: busIcon,
                title: busName,
            });

            const animate = () => {
                if (step < route.length) {
                    busMarker.setPosition(route[step]);
                    step++;
                    setTimeout(animate, 200); // Adjust speed here
                }
            };

            animate();
        };

        loadGoogleMaps();
    }, [source, destination, busName]);

    return <div ref={mapRef} style={{ width: '100%', height: '100vh' }} />;
}

export default MapPage;
*/

import React from 'react';
import { useLocation } from 'react-router-dom';
import AnimatedBusMap from './AnimatedBusMap'; // Import the AnimatedBusMap component

function MapPage() {
    const location = useLocation();
    const { source, destination } = location.state || {}; // Extract source and destination from location state

    if (!source || !destination) {
        return <p>Source and destination are required to display the map.</p>;
    }

    return (
        <div>
            <h1>Bus Route Map</h1>
           
            <AnimatedBusMap source={source} destination={destination} />
        </div>
    );
}

export default MapPage;

