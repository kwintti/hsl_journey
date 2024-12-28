const query = `
  query {
    plan(
      from: {lat: 60.169, lon: 24.938}
      to: {lat: 60.175, lon: 24.944}
      numItineraries: 1
    ) {
      itineraries {
        legs {
          startTime
          endTime
          mode
          duration
          distance
          from {
            name
            stop {
              code
              name
            }
          }
          to {
            name
          }
        }
      }
    }
  }
`;

fetch('https://api.digitransit.fi/routing/v2/hsl/gtfs/v1', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'digitransit-subscription-key': Deno.env.get("API_KEY"),
  },
  body: JSON.stringify({ query }),
})
  .then(response => response.json())
  .then(data => {
    // Process and display the route data
    console.log(data);
  })
  .catch(error => console.error('Error:', error));
