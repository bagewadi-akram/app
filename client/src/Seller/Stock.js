import "./seller.css";
import React, { useState } from "react";
import EditIcon from "@mui/icons-material/Edit";

function Stock() {
  const [edit, setEdit] = useState(0);
  const [date, setDate] = useState("Click Here To Change!!");
  const [oldStock, setOldStock] = useState(24);
  const [newStock, setNewStock] = useState();
  const removeStock = () => {
    setEdit(0);
    if (newStock != null) {
      setOldStock(oldStock - parseInt(newStock));
      setNewStock();
    }
  };
  const addStock = () => {
    setEdit(0);
    if (newStock != null) {
      setOldStock(oldStock + parseInt(newStock));
      setNewStock();
    }
  };
  return (
    <div className="view-stock">
      <table>
        <thead>
          <tr>
            <th> Product-Name</th>
            <th>Stock Remaining</th>
            <th>Add</th>
            <th>Remove</th>
            <th>Availability date</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Spacer 2mm</td>
            <td>{oldStock}</td>
            <td>
              <strong>
                {edit === 1 ? (
                  <div className="d-flex flex-row justify-content-center">
                    <input
                      type="text"
                      placeholder="Enter Quantity to Add..."
                      onChange={(e) => setNewStock(e.target.value)}
                    />
                    <button onClick={() => addStock()}>Submit</button>
                  </div>
                ) : (
                  <strong onClick={() => setEdit(1)}>Add</strong>
                )}
              </strong>
            </td>

            <td>
              <strong>
                {edit === 2 ? (
                  <div className="d-flex flex-row justify-content-center">
                    <input
                      type="text"
                      placeholder="Enter Quantity to Add..."
                      onChange={(e) => setNewStock(e.target.value)}
                    />
                    <button onClick={() => removeStock()}>Submit</button>
                  </div>
                ) : (
                  <strong onClick={() => setEdit(2)}>Remove</strong>
                )}
              </strong>
            </td>
            <td>
              {edit === 3 ? (
                <div className="d-flex justify-content-center align-items-center">
                  <input
                    type="date"
                    onChange={(e) => setDate(e.target.value)}
                  />

                  <button
                    onClick={() => {
                      setEdit(0);
                    }}
                  >
                    Submit
                  </button>
                </div>
              ) : (
                <div
                  className="d-flex justify-content-center align-items-center "
                  onClick={() => setEdit(3)}
                >
                  <strong className="p-2">{date}</strong>
                  <EditIcon fontSize="small" />
                </div>
              )}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Stock;
