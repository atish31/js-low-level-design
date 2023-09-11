 class ParkingSpot {
    constructor(id, isReserve, isVacant) {
        this.id = id,
        this.isReserve = isReserve,
        this.isVacant = isVacant;
    }
}

class TwoWheeler extends ParkingSpot {
    constructor(id, isReserve, isVacant) {
        super(id, isReserve, isVacant)
    }
}

class PhysicallyChallenged extends ParkingSpot {
    constructor(id, isReserve, isVacant) {
        super(id, isReserve, isVacant)
    }
}

class Car extends ParkingSpot {
    constructor(id, isReserve, isVacant) {
        super(id, isReserve, isVacant)
    }
}

class LargeVehicle extends ParkingSpot {
    constructor(id, isReserve, isVacant) {
        super(id, isReserve, isVacant)
    }
}

export { TwoWheeler, PhysicallyChallenged, Car, LargeVehicle }

