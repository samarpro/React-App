export default function EventDemo() {
  
  function btnClick(){
    alert("Hello Boy !")
  }

  return (
    <>
    <button className="btn btn-primary m-4" onClick={btnClick}>Click me</button>
    </>
  );
}
