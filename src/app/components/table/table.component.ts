import { Component, OnInit } from '@angular/core';
import { forkJoin } from 'rxjs';
import { Pilot } from 'src/app/models/pilot';
import { Planet } from 'src/app/models/planet';
import { Vehicle } from 'src/app/models/vehicle';
import { VehicleTableModel } from 'src/app/models/vehicle-table-model';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})

export class TableComponent implements OnInit {
  displayedColumns: string[] = ['name', 'populationSum', 'planets', 'pilots'];
  dataSource = [];
  constructor(private dataService: DataService) { }

  ngOnInit() {
    forkJoin([this.dataService.getAllPeople(), this.dataService.getAllPlanets()]).subscribe((res) => {
      this.dataService.getAllVehicles().subscribe((res) => {
        this.dataSource = this.mapData(res);
      })
    })
  }
  mapData(vehicles: Array<Vehicle>) {
    let mappedData: Array<VehicleTableModel> = [];
    vehicles.map((vehicle: Vehicle) => {
      let pilots = vehicle.pilots.map(p => this.dataService.people[p]).reduce((a, b) => a.concat(b), []);
      let planets = pilots.map(p => this.dataService.planets[p.homeworld]).reduce((a, b) => a.concat(b), []);
      mappedData.push({
        name: vehicle.name,
        populationSum: planets.reduce((a, b) => a + (+b.population || 0), 0),
        pilots: pilots.map(pe => pe.name),
        planets: planets,
      })
    });
    return mappedData;
  }

}

