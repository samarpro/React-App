export default function ListGroup() {
  let data: string[] = ["New York",  "San Francisco", "Alaska", "New Orleans", "Washington DC", "Nevada"];
//   data = []
  return (
    <>
    <h3>This is from ListGroup</h3>
    {data.length ==0 && <p>List is Empty</p>}
    <ul className="list-group">
        {data.map((d, i) => (
          <li key = {i} className="list-group-item">
            {i + 1}. {d}
          </li>
        ))} 
      </ul>
    </>
  );
}
