import React, { useEffect, useRef } from 'react';

const GOOGLE_MAPS_API_KEY = 'AIzaSyCyVqtXkYnSWTWw8SoYFZho-mBSPNQclhs'; // Replace with your actual API key

function AnimatedBusMap({ source, destination }) {
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

            // Get coordinates for the source
            geocoder.geocode({ address: source }, (sourceResults, sourceStatus) => {
                if (sourceStatus === 'OK') {
                    const sourceLocation = sourceResults[0].geometry.location;

                    // Get coordinates for the destination
                    geocoder.geocode({ address: destination }, (destResults, destStatus) => {
                        if (destStatus === 'OK') {
                            const destinationLocation = destResults[0].geometry.location;

                            // Initialize the map
                            const map = new window.google.maps.Map(mapRef.current, {
                                center: sourceLocation,
                                zoom: 7,
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

                            // Set up Directions Service and Renderer
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

                                        // Animate the bus along the route
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
                url: '/images/bus-icon.jpg', // Add the bus icon image in the public/images folder
                scaledSize: new window.google.maps.Size(40, 40), // Adjust size of the icon
            };

            const busMarker = new window.google.maps.Marker({
                position: route[0],
                map,
                icon: busIcon,
                title: 'Bus',
            });

            const animate = () => {
                if (step < route.length) {
                    busMarker.setPosition(route[step]);
                    step++;
                    setTimeout(animate, 200); // Adjust animation speed (in milliseconds)
                }
            };

            animate();
        };

        loadGoogleMaps();
    }, [source, destination]);

    return <div ref={mapRef} style={{ width: '100%', height: '100vh' }} />;
}

export default AnimatedBusMap;
