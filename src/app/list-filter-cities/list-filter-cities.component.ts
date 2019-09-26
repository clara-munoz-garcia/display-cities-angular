import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Router} from '@angular/router';
import { CitiesService } from '../service/cities.service';
import { City } from '../model/city.model';
import { MatSort, MatPaginator, MatTableDataSource } from '@angular/material';
import {ActivatedRoute} from '@angular/router';
import {debounceTime, distinctUntilChanged, startWith, tap, delay} from 'rxjs/operators';
import {merge, fromEvent} from 'rxjs';


@Component({
  selector: 'app-list-filter-cities',
  templateUrl: './list-filter-cities.component.html',
  styleUrls: ['./list-filter-cities.component.scss']
})
export class ListFilterCitiesComponent implements OnInit, AfterViewInit {
  @ViewChild(MatSort, {static: false}) sort: MatSort;
  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;
  public displayedColumns: string[] = ['id', 'name'];
  cities: City[];
  dataSource = new MatTableDataSource<City>();

  constructor(private router: Router, private citiesService: CitiesService) { }
  ngOnInit() {
    this.getAllCities();
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  public doFilter = (value: string) => {
    this.dataSource.filter = value.trim().toLocaleLowerCase();
  }

  public getAllCities = () => {
    this.citiesService.getAllCities()
    .subscribe(res => {
      this.dataSource.data = res as City[];
    });
  }
}
