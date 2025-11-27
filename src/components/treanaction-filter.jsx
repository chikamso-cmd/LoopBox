import "../styles/payment.css";

function Filter() {

  return (
    <div className="button-header">
      <div className="payment">
        <select name="" id="">
          <option selected disabled value="">
            all categories
          </option>
          <option value="pending">withdrawal</option>
          <option value="failed">deposit</option>
        </select>
        <select name="" id="">
          <option selected disabled value="">
            status
          </option>
          <option value="pending">Pending</option>
          <option value="failed">Failed</option>
          <option value="successful">Successfull</option>
        </select>
        <input type="date" name="" id="date" />
      </div>
    </div>
  );
}
export default Filter;
