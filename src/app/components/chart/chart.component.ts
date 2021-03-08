import { Component, OnInit } from '@angular/core';
import { forkJoin } from 'rxjs';
import { Planet } from 'src/app/models/planet';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit {
  private minPopulation;
  private maxPopulation;
  planetsNames = ['Tatooine', 'Alderaan', 'Naboo', 'Bespin', 'Endor'];
  planets = []
  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.getPanetsPopulation();
  }

  getPanetsPopulation() {
    let requests = [];
    this.planetsNames.forEach(planet => requests.push(this.dataService.getPlanet(planet)));
    forkJoin(requests).subscribe((res) => {
      this.setPopulationRange(res);
      this.calcPercentage(res);
      this.planets = res;
    });
  }
  setPopulationRange(planets: Array<Planet>) {
    planets.forEach((p) => {
      this.minPopulation = this.minPopulation ? (+p.population) < this.minPopulation ? +p.population : this.minPopulation : +p.population;
      this.maxPopulation = this.maxPopulation ? (+p.population) > this.maxPopulation ? +p.population : this.maxPopulation : +p.population;
    })
  }
  calcPercentage(planets: Array<Planet>) {
    planets.forEach((p) => {
      if (isNaN(+p.population))
        return 0
      else {
        p.populationPercentage = Math.round(((+p.population - this.minPopulation) / (this.maxPopulation - this.minPopulation)) * (100 - 0))
  }
})

  }

}
