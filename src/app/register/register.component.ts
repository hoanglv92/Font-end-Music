import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {UsersService} from '../users.service';
import {Users} from '../users';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private usersService: UsersService) {
  }

  status = '';
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
      repass: new FormControl('', [Validators.required])
    });
  }

  onSubmit(registerFrom: FormGroup) {
    const users: Users = registerFrom.value;
    const regex = '^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$';
    if (users.userName.length < 6 || users.userName.length > 45){
      alert('Tài khoản có độ dài từ 6 tới 45 kí tự');
      return false;
    }
    if (users.password.length < 6 || users.password.length > 45 ){
      alert('password có độ dài từ 6 tới 45 kí tự');
      return false;
    }
    if (users.email.length < 6 || users.email.length > 45 || !users.email.match(regex)){
      alert('email Sai Định Dạng');
      return false;
    }
    if (users.password !== users.repass) {
      alert('nhap lai mat khau khong dung');
      return false;
    } else {
      this.usersService.saveUser(users);
      alert('Tạo Tài Khoản Thành Công, Hãy Đăng Nhập');
    }
  }
}

