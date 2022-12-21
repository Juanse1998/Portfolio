import { React } from "react";
import { IoChatboxOutline } from "react-icons/io5";
import { IoAccessibility } from "react-icons/io5";
import { BsTelephone } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";

import "./ContactForm.css";
export default function ContactForm() {
  return (
    <>
      <div className="titleContact">
        <span>Contactame</span>
      </div>
      <div class="containerContactForm">
        <div class="rowContact">
          <div class="col-md-12">
            <div class="well well-sm">
              <form class="form-horizontal" method="post">
                <fieldset id="field">
                  <div class="form-group">
                      <span class="col-md-1 col-md-offset-2 text-center" id="icon">
                        <IoAccessibility size="30px"/>
                      </span>
                      <div class="col-md-8">
                          <input id="fname" name="name" type="text" placeholder="Nombre" class="form-control"/>
                      </div>
                  </div>
                  <div class="form-group">
                      <span class="col-md-1 col-md-offset-2 text-center" id="icon">
                        <IoAccessibility size="30px"/>
                      </span>
                      <div class="col-md-8">
                          <input id="lname" name="name" type="text" placeholder="Apellido" class="form-control"/>
                      </div>
                  </div>
                  <div class="form-group">
                      <span class="col-md-1 col-md-offset-2 text-center" id="icon">
                        <AiOutlineMail size="30px"/>
                        </span>
                      <div class="col-md-8">
                          <input id="email" name="email" type="text" placeholder="Email" class="form-control"/>
                      </div>
                  </div>
                  <div class="form-group">
                      <span class="col-md-1 col-md-offset-2 text-center" id="icon">
                        <BsTelephone size="30px"/>
                      </span>
                      <div class="col-md-8">
                          <input id="phone" name="phone" type="text" placeholder="Teléfono" class="form-control"/>
                      </div>
                  </div>
                  <div class="form-group">
                      <span class="col-md-1 col-md-offset-2 text-center" id="icon">
                        <IoChatboxOutline size="30px"/>
                      </span>
                      <div class="col-md-8" id="message">
                          <textarea class="form-control" id="message" name="message" placeholder="Ingrese su mensaje" rows="2"></textarea>
                      </div>
                  </div>
                  <div class="form-group" id="button">
                      <div class="col-md-12 text-center">
                          <button type="submit" class="btn btn-primary btn-lg">Enviar</button>
                      </div>
                  </div>
                </fieldset>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
