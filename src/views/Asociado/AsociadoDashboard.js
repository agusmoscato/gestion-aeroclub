import React from 'react';
import TableComponent from "../../components/TableComponent"

function AsociadoDashboard() {

  const columns = [
    { header: "Nombre", accessor: "name" },
    { header: "Edad", accessor: "age" },
    { header: "País", accessor: "country" },
  ];

  const data = [
    { name: "Juan", age: 25, country: "Argentina" },
    { name: "Ana", age: 30, country: "España" },
    { name: "Pedro", age: 20, country: "México" },
  ];


  return (
    <div className="content">
      <h1>Dashboard de Asociado</h1>
      <p>Aquí puedes ver el resumen de tu cuenta, horas de vuelo, y más.</p>

      <TableComponent columns={columns} data={data} />

    </div>
  );
}

export default AsociadoDashboard;