//ps parking spot
export class ParkingTicket {
    constructor(id, psId, pstype, issueTime) {
        this.id = id;
        this.psId = psId;
        this.pstype = pstype;
        this.issueTime = issueTime;
    }
}