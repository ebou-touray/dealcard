import React from 'react';

const DataTable = ({ data }) => {
  return (
    <>
      <div className="table-responsive">
        <table className="table table-striped table-hover caption-top">
          <caption>List of users</caption>

          <thead className="table-light">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Date</th>
              <th scope="col">Salesman</th>
              <th scope="col">ConsultantName</th>
              <th scope="col">Broker</th>
              <th scope="col">EndCustomer</th>
              <th scope="col">Price</th>
              <th scope="col">Allocation</th>
              <th scope="col">PaymentTerms</th>
              <th scope="col">OtherTerms</th>
              <th scope="col">StartingDate</th>
              <th scope="col">Duration</th>
              <th scope="col">SubContractorName</th>
              <th scope="col">Price</th>
              <th scope="col">OtherInfo</th>
            </tr>
          </thead>
          <tbody>
            {data.map((items, keys) => {
              console.log(items);
              return (
                <tr>
                  <th scope="row">1</th>
                  <td>{items.date}</td>
                  <td>{items.salesman}</td>
                  <td>{items.consultantName}</td>
                  <td>{items.broker}</td>
                  <td>{items.endCustomer}</td>
                  <td>{items.price.toFixed(2)}</td>
                  <td>{items.allocation}</td>
                  <td>{items.paymentTerms}</td>
                  <td>{items.otherTerms}</td>
                  <td>{items.startingDate}</td>
                  <td>{items.duration}</td>
                  <td>{items.subContractorName}</td>
                  <td>{items.price2.toFixed(2)}</td>
                  <td>{items.otherInfo}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default DataTable;
