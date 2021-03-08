import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { forkJoin, from } from 'rxjs';
import { mergeMap } from 'rxjs/operators';
import { Planet } from 'src/app/models/planet';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom
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
    // from(this.planetsNames).pipe(mergeMap((planet => this.dataService.getPlanet(planet)))).subscribe((res: any) => {
    //   this.planets.push(res)
    //   this.setPopulationRange(this.planets);
    //   this.calcPercentage(this.planets);
    // })
    this.planetsNames.forEach(planet => requests.push(this.dataService.getPlanet(planet)));
    forkJoin(requests).subscribe((res) => {
        this.setPopulationRange(res);
        this.calcPercentage(res);
        this.planets=res;

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
        p.populationPercentage=10
      else {
        
        p.populationPercentage = Math.ceil(((+p.population - (this.minPopulation-1)) / (this.maxPopulation - (this.minPopulation-1))) * (100 - 0))
        console.log(p.name,p.populationPercentage);
      }
    })

  }

}
