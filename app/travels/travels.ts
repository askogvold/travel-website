import {Component, ComponentMetadataType} from "@angular/core";
import {Router} from "@angular/router";
import {TravelRepository} from "./TravelRepository";
import {Travel} from "./TravelRepository";

@Component(<ComponentMetadataType>{
    selector: 'travels',
    templateUrl: 'app/travels/travels.html',
    providers: [TravelRepository],
})
export class TravelListComponent {
    travels:Travel[];
    constructor(private router:Router,private repo: TravelRepository) {
    }

    ngOnInit() {
        this.repo.travels.subscribe(updatedTravels => this.travels = updatedTravels);
        this.repo.loadTravelSummaries();
    }

    onClick(travel:Travel) {
        this.router.navigate(["/Travels",travel.id]);

    }

    goGroups() {
        this.router.navigate(["/Travels/Groups"]);
    }
}

