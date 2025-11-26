interface Parking {
  id: string;
  name: string;
  description: string;
  totalcapacity: number;
  availablecapacity: number;
  occupation: number;
  location: {
    lat: number;
    lon: number;
  };
  urllinkaddress: string;
}
