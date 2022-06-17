import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {

  constructor(
    private fb: FormBuilder// esto va importar la estructura del formulario
  ) { }

  contactusForm =  this.fb.group({// aqui se crean los elementos
    persona: this.fb.group({
      nombres:['',Validators.required],
      apellidos:['', Validators.required],
    }),
    
    email:['',[Validators.required, Validators.email]],
    mensaje:['', Validators.required]
  })
  // vamos a crear un metodo para el boton enviar
  __onSubmit(){
    if(this.contactusForm.valid){
      console.log(this.contactusForm.value)
    }else{
      alert("Formulario no valido...")
    }
    
  }
  
  ngOnInit(): void {
  }

}
