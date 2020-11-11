import React from 'react';
import { Link } from 'react-router-dom';

const DataTable = ({ data, onClick }) => {

  let startingDate = undefined;
  const viewClick = () => console.log('clicked');
  return (
    <div className="table-responsive text-nowrap">
      <table className="table table-sm table-striped table-fixed table-hover caption-top mx-auto">
        <caption className="text-secondary font-weight-bold text-capitalize">
          List of users
        </caption>

        <thead className="table-light">
          <tr>
            <th scope="col">#</th>
            <th scope="col">ConsultantName</th>
            <th scope="col">Salesman</th>
            <th scope="col">Broker</th>
            <th scope="col">EndCustomer</th>
            <th scope="col">PaymentTerms</th>
            <th scope="col">StartingDate</th>
            <th scope="col"></th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {data.map((items, keys) => {
            startingDate = new Date(items.startingDate).toLocaleDateString('nb-NO')
            return (
              <tr key={keys}>
                <th scope="row">{keys + 1}</th>
                <td>{items.consultantName}</td>
                <td>{items.salesman}</td>
                <td>{items.broker}</td>
                <td>{items.endCustomer}</td>
                <td>{items.paymentTerms}</td>
                <td>{startingDate}</td>
                <td>
                  <Link to={`/${items._id}`}>
                    <svg
                      width="1em"
                      height="1em"
                      viewBox="0 0 16 16"
                      className="bi bi-eye mr-2"
                      fill="green"
                      xmlns="http://www.w3.org/2000/svg"
                      cursor="pointer"
                      onClick={viewClick}
                    >
                      <path
                        fillRule="evenodd"
                        d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.134 13.134 0 0 0 1.66 2.043C4.12 11.332 5.88 12.5 8 12.5c2.12 0 3.879-1.168 5.168-2.457A13.134 13.134 0 0 0 14.828 8a13.133 13.133 0 0 0-1.66-2.043C11.879 4.668 10.119 3.5 8 3.5c-2.12 0-3.879 1.168-5.168 2.457A13.133 13.133 0 0 0 1.172 8z"
                      />
                      <path
                        fillRule="evenodd"
                        d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"
                      />
                    </svg>
                  </Link>

                  <svg
                    onClick={() => onClick(items._id)}
                    width="1em"
                    height="1em"
                    viewBox="0 0 16 16"
                    className="bi bi-trash"
                    fill="red"
                    cursor="pointer"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                    <path
                      fillRule="evenodd"
                      d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
                    />
                  </svg>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;
