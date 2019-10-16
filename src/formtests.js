import React from 'react';
import './App.scss';

function formtests() {
  return (
    <div className="formtestes">
      <div className="area1">
        <h2>form antigo</h2>
        <div className="formantigo">
          <div role="main" id="dfgdfgdf-86635962aad2878f482e"></div>
          <script type="text/javascript" src="https://d335luupugsy2.cloudfront.net/js/rdstation-forms/stable/rdstation-forms.min.js"></script>
          <script type="text/javascript">
            new RDStationForms('dfgdfgdf-86635962aad2878f482e-html', 'UA-47500039-1').createForm();
          </script>
        </div>
      </div>
      <div className="area2">
        <h2>form novo</h2>
        <div className="novoform">
          <div role="main" id="modelo-simples-de-formulario-embedado-543e67a4ae1860582e95"></div>
          <script type="text/javascript" src="https://d335luupugsy2.cloudfront.net/js/rdstation-forms/stable/rdstation-forms.min.js"></script>
          <script type="text/javascript"> new RDStationForms('modelo-simples-de-formulario-embedado-543e67a4ae1860582e95', 'UA-47500039-1').createForm();</script>
        </div>
      </div>
    </div>
  );
}

export default formtests;
