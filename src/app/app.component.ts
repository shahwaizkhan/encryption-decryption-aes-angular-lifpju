import { Component, OnInit } from '@angular/core';
import { EncryptionService } from './encryption.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit {

  constructor(private encrypt: EncryptionService) {}

  ngOnInit() {
    // AES
    const encrypted = this.encrypt.encryptionAES('hello world');
    const decrypted = this.encrypt.decryptionAES(encrypted);
    console.log(encrypted);
    console.log(decrypted);
  }
}
