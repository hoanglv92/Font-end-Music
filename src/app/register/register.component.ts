import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {MustMatch} from '../must-match.validator';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor() {
  }

  registerFrom: FormGroup;
  regexPhone = '^\\+84\\d{9,10}$';

  ngOnInit(): void {
    this.registerFrom = new FormGroup({
      email: new FormControl('', [Validators.required,
        Validators.email]),
      userName: new FormControl('', [Validators.required,
        Validators.minLength(6), Validators.maxLength(45)]
      ),
      password: new FormControl('', [Validators.required,
        Validators.minLength(6), Validators.maxLength(45)]),
      repass: new FormControl('', [Validators.required]),
      phone: new FormControl('', [Validators.pattern(this.regexPhone),
        Validators.required]),
    });
  }

  onSubmit() {
    if (this.registerFrom.controls.repass !== this.registerFrom.controls.password) {
      alert('nhap lai mat khau khong dung');
      return false;
    }
  }
}

