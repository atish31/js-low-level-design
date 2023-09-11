import { TwoWheeler, PhysicallyChallenged, Car, LargeVehicle } from "./parking-spots.js";

const twoWheelerParkingSpots = [];
const carParkingSpots = [];
const physicallyChallengedParkingSpots = [];
const largeParkingSpots = [];

const twoWheelerParkingSpot = new TwoWheeler(1, false, true);
console.log(twoWheelerParkingSpot, 'here');

const physicallyChallengedParkingSpot = new PhysicallyChallenged(2, false, true);
console.log(physicallyChallengedParkingSpot, 'here');

const carParkingSpot = new Car(3, false, true);
console.log(carParkingSpot, 'here');

const largeParkingSpot = new LargeVehicle(3, false, true);
console.log(largeParkingSpot, 'here');


