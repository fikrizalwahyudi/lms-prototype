import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { UsersFormComponent } from './users-form.component';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-users-edit',
  template: `
    <users-form (init)="init($event)" (save)="save($event)"></users-form>
  `,
  styles: []
})
export class UsersEditComponent implements OnInit {

  @ViewChild(UsersFormComponent)
  formComponent: UsersFormComponent

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) {

  }

  ngOnInit() {
  }

  init(fg: FormGroup) {
    // this.route.params.subscribe(params => {
    //   let id = params['id']

    //   this.jettyApi.findById(id).subscribe(data => {
    //     this.jetty = data as Jetty

    //     fg.patchValue(this.jetty)
    //   })
    // })
  }

  save(model) {
    // this.formComponent.submitting = true
    // this.formComponent.errorMsg = undefined

    // this.jettyApi.patchAttributes(this.jetty.id, model).subscribe(data => {
    //   this.router.navigate(['/admin', 'jetty'])
    //   this.formComponent.submitting = false
    // }, err => {
    //   this.formComponent.errorMsg = err.message
    //   this.formComponent.submitting = false
    // })
  }

}
